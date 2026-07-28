# Attributification configuration

Reference for [`config/attributification/attributification.toml`](https://github.com/AllTheMods/Arcana/blob/main/config/attributification/attributification.toml)
in All the Magic: Arcana.

**Describes the config as of 2026-07-29.** This work postdates the 0.10.0 release — the
config is not part of any published pack version yet and is targeted at the next one.
Every figure below was read from that snapshot; if the config has changed since, check it
against the linked file before relying on this.

Attributification unifies attributes that several mods register separately, so that a
single stat drives all of them instead of each mod tracking its own. This document
describes what the config contained at that date, what each entry does to gameplay, and
what could reasonably be added.

---

## Summary

**34 dynamic mappings**, roughly 20.9 KB serialised against a 32,767-character ceiling
(the config is sent to clients as one string; exceeding that ceiling breaks world load).
Room remains for about 18 more entries.

### How a mapping works

Each entry names a **source** attribute and a **target**. The source stops being an
independent stat and becomes a view of the target. Three things happen:

| Mechanism | Effect |
|---|---|
| **Gear** | A modifier granted on the source is rewritten onto the target, divided by `conversionEquivalence`. This is what item tooltips show. |
| **Reads** | When a mod asks the game for the source's value, it receives `(target − subtractValue) × equivalence`. Silent — nothing displays it. |
| **Frozen** (`fullReplacement`) | The source returns its own base value and ignores the target completely. Gear still moves to the target. |

Direction matters. Gear flows **source → target** only; there is no reverse rewrite. The
reverse flow exists solely through reads, which means a bonus on the target reaches the
source in gameplay but never appears in a tooltip under the source's name.

### Field reference

- **`equivalence`** — multiplier applied when reading the source. Used when two mods
  measure the same resource at different scales.
- **`conversionEquivalence`** — divisor applied to gear modifiers moving source → target.
  A value of `0` means "use `equivalence`".
- **`subtractValue`** — removed from the target's value before reading. Needed when the
  source is a *bonus* (base 0) and the target is an *absolute* stat (base 1 or higher);
  without it an unbuffed player inherits the target's baseline as a phantom bonus.
- **`unidirectional`** — the source returns the target's value unscaled, ignoring
  `equivalence` and `subtractValue`.
- **`fullReplacement`** — freezes the source at its own base.
- **`operationConversion`** — `DEFAULT` keeps the modifier's operation;
  `ADDITION_TO_MULTIPLY_BASE` converts a flat `+N` into a percentage of the target's base.

### What the config achieves

**Shared mana regeneration, separate pools.** Glimmering Tales and Ars Nouveau both feed
`irons_spellbooks:mana_regen`, each at its own scale, so regeneration is unified across
all three mods. Mana **pools** are deliberately not unified — Iron's, Glimmering Tales and
Ars each keep their own. Recharge rate is shared; capacity is not.

**One spell power stat.** Five separate sources add into `irons_spellbooks:spell_power`,
and that single number then drives spell damage across all of them.

**Aligned elemental schools.** Six Ars schools map onto Iron's equivalents, so fire gear
is fire gear regardless of which mod made it.

**Collapsed duplicates.** Ten attributes that duplicate an Apotheosis stat are frozen, so
players see one working line instead of two, one of which did nothing.

### Two structural notes

**Shared targets are order-sensitive.** When several sources feed one target, only the
**last entry in the file** governs modifier conversion onto that target. As of this
snapshot:

| Target | Sources | Governed by |
|---|---|---|
| `irons_spellbooks:spell_power` | 5 | `sauce.perk.spell_damage_multiplier` |
| `apothic_attributes:crit_damage` | 3 | `sauce.perk.spell_crit_damage_modifier` |
| `apothic_attributes:crit_chance` | 2 | `sauce.perk.spell_crit_chance` |
| `apothic_attributes:healing_received` | 2 | `malum:healing_received` |
| `irons_spellbooks:spell_resist` | 2 | `sauce.perk.elemental_resistance` |
| `irons_spellbooks:mana_regen` | 2 | `glimmeringtales:mana_regen` |

Anything new that targets one of these must be placed **before** the entry that should
stay in charge. Reordering the file silently changes gameplay.

**What "governs" means here.** The mod keeps two lookup tables. Gear is routed by a
**source-keyed** table, which cannot collide because each source appears once — so a mod's
own gear always uses its own entry's `conversionEquivalence` and `operationConversion`,
regardless of file order. The **target-keyed** table is the one that collides, and it is
consulted in only one place: when a modifier is added *directly to the target attribute*.
That covers Iron's own gear granting an Iron's stat, and any modifier redirected onto the
target by the instance lookup.

So the risk is not that one mod's gear starts using another mod's scaling. It is that
modifiers landing directly on a shared target get rescaled by whichever entry happens to
be last. `irons_spellbooks:mana_regen` is the one to watch: its governing entry is
Glimmering Tales with an effective divisor of **20**, so a flat regeneration modifier
applied straight to Iron's attribute could be scaled down by that factor. Every other
shared target is governed by an entry with a divisor of 1.0, where the conversion is a
no-op.

**Cross-mod stacking compounds.** Five sources feed `irons_spellbooks:spell_power`, and
the reverse read means every one of those mods then *reads* the combined total. The effect
compounds twice over.

Consider a player in Ars armor with spell-damage perks, a Malum trinket granting magic
proficiency, a GTBCS item granting spell damage, and an Iron's robe granting spell power:

| Without unification | With unification |
|---|---|
| Ars perks boost Ars glyphs only | every contribution adds into one number |
| Malum boosts Malum only | that number boosts Ars, Malum, GTBCS **and** Iron's |
| GTBCS boosts GTBCS only | |
| Iron's boosts Iron's only | |

If those four pieces contribute +0.3, +0.2, +0.2 and +0.3, the shared stat reaches 2.0 —
double damage for *every* mod's spells at once, where each mod individually would have
seen only its own 20–30% and only on its own spells. Diversifying gear across magic mods
is therefore far stronger than progressing within one, which is the opposite of what each
mod's own curve assumes.

To be clear about what this is not: a single bonus is never counted twice. Each modifier
lands on the shared stat once, and the reverse read returns that total rather than adding
to it. The concern is pooling plus universal application, not duplication.

Iron's caps spell power at 100, so there is a ceiling, but at 100 the multiplier is far
past anything the pack's progression reaches — treat it as effectively uncapped.

---

## Mana

Only regeneration is mapped. Every mod keeps its own mana **pool** — Iron's at 100,
Glimmering Tales at 2000, Ars Nouveau its own — so capacity stays a per-mod concern while
recharge rate is shared. Nothing in the config targets `irons_spellbooks:max_mana`.

### `glimmeringtales:mana_regen` → `irons_spellbooks:mana_regen`

`equivalence 20.0`, `subtractValue 0`, `conversionEquivalence 0` (uses equivalence)

Glimmering Tales' base regeneration is 20 and Iron's is 1, so the multiplier of 20
reconciles the two scales in both directions. It reads back as exactly 20 when unbuffed,
and regen gear from either mod speeds up both — each refilling its own pool.

### `ars_nouveau:ars_nouveau.perk.mana_regen` → `irons_spellbooks:mana_regen`

`subtractValue 1.0`, `conversionEquivalence 100.0`, `ADDITION_TO_MULTIPLY_BASE`

Ars' perk attribute is a *bonus* starting at 0, so Iron's base of 1.0 is subtracted and it
correctly reads 0 with no gear. Ars mana-regen perks convert into a percentage of Iron's
base rate rather than a flat addition, keeping the two scales compatible.

Note that Iron's applies regeneration server-side, so the shared value is what actually
governs refill speed even though no interface displays it under the Ars name.

As with Glimmering Tales, Ars refills **its own** pool at the shared rate rather than
drawing on Iron's. `perk.max_mana` is deliberately unmapped, and mapping it would also
break Iron's mana bar — see the do-not-map note in the suggestions.

---

## Spell power

All five of these feed `irons_spellbooks:spell_power` (base 1.0, range −100 to 100).

### `ars_nouveau:ars_nouveau.perk.spell_damage` → `irons_spellbooks:spell_power`

`subtractValue 1.0`, `conversionEquivalence 1.0`

Ars' generic spell damage perk. It is a bonus starting at 0, so Iron's baseline of 1.0 is
subtracted and it reads 0 unbuffed. Ars armor perks granting spell damage raise Iron's
spell power, and Iron's spell power raises Ars glyph damage.

### `ars_nouveau:sauce.perk.elemental_power` → `irons_spellbooks:spell_power`

`subtractValue 1.0`, `conversionEquivalence 1.0`

The Ars addon ecosystem's cross-school power stat, feeding the same shared number. Base 0
against Iron's 1.0, hence the subtraction.

### `ars_nouveau:sauce.perk.spell_damage_multiplier` → `irons_spellbooks:spell_power`

`subtractValue 0`, `conversionEquivalence 1.0`

Already a multiplier with base 1.0, matching Iron's, so no baseline adjustment is needed.
**This is the last entry targeting spell power**, so it governs how modifiers added
directly to `irons_spellbooks:spell_power` are converted.

### `lodestone:magic_proficiency` → `irons_spellbooks:spell_power`

`subtractValue 0`, `conversionEquivalence 0` (uses equivalence 1.0)

Malum's magic proficiency, a base-1.0 multiplier matching Iron's exactly. Malum gear
raises the shared spell power and vice versa. Malum's separate `magic_damage` attribute is
a flat damage value and is deliberately left alone.

### `gtbcs_spell_lib:spell_damage` → `irons_spellbooks:spell_power`

`subtractValue 0`, `conversionEquivalence 1.0`, `ADDITION_TO_MULTIPLY_BASE`

GTBCS Spellbooks' damage stat, base 1.0 like Iron's. Flat additions convert into a
percentage of Iron's base so the two scale together.

---

## Spell resistance

### `lodestone:magic_resistance` → `irons_spellbooks:spell_resist`

`subtractValue 0`, `conversionEquivalence 0` (uses equivalence 1.0)

Malum's magic resistance, base 1.0 matching Iron's. Resistance gear from either mod
protects against both mods' magic.

### `ars_nouveau:sauce.perk.elemental_resistance` → `irons_spellbooks:spell_resist`

`subtractValue 1.0`, `conversionEquivalence 1.0`

The Ars addon cross-school resistance, a base-0 bonus against Iron's base-1.0 stat.
**Last entry targeting spell resist**, so it governs conversion onto that attribute.

---

## Elemental schools

Twelve entries pairing six Ars schools with Iron's equivalents. Every Ars school attribute
is a base-0 bonus and every Iron's school attribute is a base-1.0 multiplier, so all twelve
carry `subtractValue 1.0` and `conversionEquivalence 1.0`. In each case, school gear from
either mod strengthens or protects against that element in both.

### `ars_nouveau:sauce.perk.fire_power` → `irons_spellbooks:fire_spell_power`

Ars fire magic and Iron's fire magic share one power stat.

### `ars_nouveau:sauce.perk.fire_resistance` → `irons_spellbooks:fire_magic_resist`

Shared fire resistance.

### `ars_nouveau:sauce.perk.water_power` → `irons_spellbooks:ice_spell_power`

Iron's has no water school, so Ars water is treated as Iron's ice.

### `ars_nouveau:sauce.perk.water_resistance` → `irons_spellbooks:ice_magic_resist`

Shared water/ice resistance.

### `ars_nouveau:sauce.perk.air_power` → `irons_spellbooks:evocation_spell_power`

Ars air maps to Iron's evocation, the closest thematic match.

### `ars_nouveau:sauce.perk.air_resistance` → `irons_spellbooks:evocation_magic_resist`

Shared air/evocation resistance.

### `ars_nouveau:sauce.perk.necromancy_power` → `irons_spellbooks:blood_spell_power`

Ars necromancy maps to Iron's blood magic.

### `ars_nouveau:sauce.perk.necromancy_resistance` → `irons_spellbooks:blood_magic_resist`

Shared necromancy/blood resistance.

### `ars_nouveau:sauce.perk.abjuration_power` → `irons_spellbooks:holy_spell_power`

Ars abjuration maps to Iron's holy magic.

### `ars_nouveau:sauce.perk.abjuration_resistance` → `irons_spellbooks:holy_magic_resist`

Shared abjuration/holy resistance.

### `ars_nouveau:sauce.perk.earth_power` → `gtbcs_geomancy_plus:geo_spell_power`, `irons_spellbooks:nature_spell_power`

The only entry with a fallback list. Geomancy Plus' geo power is used when present
(it is, in this pack) and Iron's nature power is the fallback if that mod is ever removed.
Both are base 1.0, so the same `subtractValue 1.0` is correct either way.

### `ars_nouveau:sauce.perk.earth_resistance` → `irons_spellbooks:nature_magic_resist`

Shared earth/nature resistance.

---

## Summons

### `ars_nouveau:sauce.perk.summon_power` → `irons_spellbooks:summon_damage`

`subtractValue 1.0`, `conversionEquivalence 1.0`

Ars summon power and Iron's summon damage share one stat, so gear that strengthens
summons helps whichever mod's minions a player is using. Ars' matching
`summon_resistance` has no Iron's counterpart and is unmapped.

---

## Critical hits

### `ars_nouveau:sauce.perk.spell_crit_chance` → `apothic_attributes:crit_chance`

`subtractValue 0`, `conversionEquivalence 1.0`

Both sit at base 0.05, so no adjustment is needed. Ars spell crit chance and Apotheosis
crit chance are the same 5% baseline stat, and gear affecting either affects both.
**Last entry targeting crit chance.**

### `ars_nouveau:sauce.perk.spell_crit_damage_modifier` → `apothic_attributes:crit_damage`

`subtractValue 1.0`, `conversionEquivalence 1.0`

Ars measures crit damage as a base-0.5 bonus while Apotheosis uses a base-1.5 multiplier,
so 1.0 is subtracted to align them. **Last entry targeting crit damage.**

---

## Frozen duplicates

These ten use `fullReplacement` with `unidirectional`, which freezes the source at its own
base value. Gear that would have granted the source grants the target instead. Without
this, a player carrying gear from both mods would accumulate two separate stats doing the
same job, one of which is typically read by nothing.

Because a frozen source never consults its target, differing base values between the two
cannot leak through as a phantom bonus.

### `irons_lib:armor_pierce` → `apothic_attributes:armor_pierce`

Iron's Lib registers its own copy of the Apotheosis stat. Armor penetration is tracked
once, by Apotheosis.

### `irons_lib:arrow_damage` → `apothic_attributes:arrow_damage`

Ranged damage bonuses resolve through Apotheosis.

### `irons_lib:crit_damage` → `apothic_attributes:crit_damage`

Critical damage resolves through Apotheosis. Iron's Lib's copy sits at base 1.0 against
Apotheosis' 1.5; harmless while frozen.

### `irons_lib:dodge_chance` → `apothic_attributes:dodge_chance`

Dodge resolves through Apotheosis. Iron's Lib registers this at base 1.0 where Apotheosis
uses 0 — a quirk of that library rather than of this config, and inert while frozen.

### `irons_lib:experience_gained` → `apothic_attributes:experience_gained`

Experience multipliers resolve through Apotheosis.

### `irons_lib:healing_received` → `apothic_attributes:healing_received`

Healing effectiveness resolves through Apotheosis.

### `irons_lib:mining_speed` → `apothic_attributes:mining_speed`

Mining speed bonuses resolve through Apotheosis.

### `malum:healing_received` → `apothic_attributes:healing_received`

Malum's own healing stat, folded into the same Apotheosis attribute. **Last entry
targeting healing received.**

### `gtbcs_spell_lib:spell_crit_chance` → `apothic_attributes:crit_chance`

GTBCS' *spell*-specific crit chance folded into the general crit stat. Unlike the eight
above this is a design decision rather than a duplicate cleanup — it means spell crits and
melee crits share one number.

### `gtbcs_spell_lib:spell_crit_damage` → `apothic_attributes:crit_damage`

The same decision for crit damage.

---

## Suggested additions

Roughly 17 entries fit in the remaining budget. The first three groups total 12 and are
comfortably affordable together.

### Glimmering Tales affinities — 6 entries, recommended

Glimmering Tales' six elemental affinities are unmapped, leaving its magic only half
integrated while its mana is fully shared. All six are base 1.0, matching Iron's school
attributes exactly, so each needs `subtractValue 0` and no scaling.

| Source | Suggested target |
|---|---|
| `glimmeringtales:flame_affinity` | `irons_spellbooks:fire_spell_power` |
| `glimmeringtales:snow_affinity` | `irons_spellbooks:ice_spell_power` |
| `glimmeringtales:thunder_affinity` | `irons_spellbooks:lightning_spell_power` |
| `glimmeringtales:earth_affinity` | `irons_spellbooks:nature_spell_power` |
| `glimmeringtales:life_affinity` | `irons_spellbooks:holy_spell_power` |
| `glimmeringtales:ocean_affinity` | no natural counterpart — ice or nature |

Iron's `lightning`, `ender` and `eldritch` schools were unused as targets at this date, so
there is room without disturbing existing pairings.

### Aces Spell Utils critical stats — 4 entries, zero risk

Four attributes whose baselines match Apotheosis exactly, so they need `subtractValue 0`
and carry no scaling risk at all.

| Source | Base | Target | Base |
|---|---|---|---|
| `aces_spell_utils:magic_damage_crit_chance` | 0.05 | `apothic_attributes:crit_chance` | 0.05 |
| `aces_spell_utils:magic_projectile_crit_chance` | 0.05 | `apothic_attributes:crit_chance` | 0.05 |
| `aces_spell_utils:magic_damage_crit_damage` | 1.5 | `apothic_attributes:crit_damage` | 1.5 |
| `aces_spell_utils:magic_projectile_crit_damage` | 1.5 | `apothic_attributes:crit_damage` | 1.5 |

Place these **before** the existing `sauce.perk.spell_crit_*` entries if those should
remain in charge of conversion onto the Apotheosis crit stats.

### Ars manipulation school — 2 entries, needs a decision

`sauce.perk.manipulation_power` and `sauce.perk.manipulation_resistance` are the one Ars
school pair with no mapping. Both are base 0, so both need `subtractValue 1.0`. Iron's has
no manipulation school; `ender` is the closest fit for displacement and utility magic, but
the pairing is a judgement call rather than something derivable.

### Duplicate magic protection — 2 entries, low value

`forbidden_arcanus:generic.magic_protection` and
`additionalentityattributes:generic.magic_protection` are both base 0 and would map to
`irons_spellbooks:spell_resist` with `subtractValue 1.0`. Forbidden Arcanus caps its
version at 1.0, so it saturates almost immediately. Worth adding only if something in the
pack actually grants them.

### Flagged, not recommended without a decision

- **`apothic_attributes:cooldown_reduction` vs `irons_spellbooks:cooldown_reduction`** — a
  genuine conceptual duplicate, but one is a fraction capped at 0.95 and the other a
  base-1.0 multiplier. Unifying them requires choosing a scaling, not just a mapping.
- **`aces_spell_utils:magic_projectile_damage` (base 0, range 0–1) vs
  `gtbcs_spell_lib:magic_projectile_damage` (base 1, range 0–10)** — same name, badly
  mismatched ranges.
- **`l2damagetracker:magic_damage` and `l2damagetracker:crit_damage`** — library
  attributes; unclear whether anything reads them.

### Do not map

**Iron's Spellbooks addon schools.** Around 30 attributes look like candidates by name but
are new schools registered by Iron's addons — Aces Spell Utils (hydro, ritual,
technomancy), Aero Additions (wind), Cataclysm Spellbooks (abyssal), Discerning the
Eldritch (ritual), ESS Requiem (spellblade), Hazentouve (cosmic, radiance, shadow), Tunes
n Tomes (melody), Geomancy Plus (geo resist). Every one is base 1.0 with range −100 to 100,
the signature of an Iron's school attribute, and Iron's generic spell power already
multiplies on top of them. Mapping them would collapse distinct schools into one stat and
break school-specific gear.

**Mana pools, for any mod.** Capacity is intentionally left per-mod; only regeneration is
unified. `glimmeringtales:max_mana` and `ars_nouveau.perk.max_mana` are both unmapped by
design, not by oversight, and nothing targets `irons_spellbooks:max_mana`. Sharing a pool
would also mean one mod's baseline mana grant inflating another's capacity, which reads as
a bug to players even when the arithmetic is right.

The Ars pool additionally has a hard technical reason:

**`ars_nouveau:ars_nouveau.perk.max_mana` → `irons_spellbooks:max_mana`.** Ars applies a
baseline `max_mana_mod` to every player. Mapping this attribute redirects that modifier
onto Iron's pool server-side, but it does not reach the client. Iron's mana bar reads its
current value from synced server data and its maximum from the client's own attribute, so
the two disagree and the bar displays a current value above its maximum for every player,
permanently. Ars mana regeneration does not have this problem because no interface renders
it as a fraction.

**Ars mana discount attributes.** The eleven `sauce.perk.mana_discount*` variants reduce
spell cost, and Iron's has no cost-reduction stat to unify them with.

**`sauce.perk.summon_resistance`** — no Iron's counterpart.

**`lodestone:magic_damage`** — flat magic damage, a different concept from the
multiplier-style `magic_proficiency` that is already mapped.
