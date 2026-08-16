# Changelog

# 📦 0.12.0

## 📰 General changes and notes

**BACKUP FIRST**

0.12.0 is a larger update with 45 mod updates, the quest book gets a major overhaul, and a crash from 0.11.0 is fixed. Read the previous changelogs if you're not on 0.11.0 yet.

NeoForge version is 21.1.248

> [!IMPORTANT]
> **A crash from 0.11.0 is fixed.** 0.11.0 shipped Cataclysm Spellbooks 1.1.12, which crashes whenever a mob carrying the Shutdown effect takes damage. The mod is rolled back to 1.1.11, which does not contain the effect at all.

> [!IMPORTANT]
> **Halcyon changed its mod id.** The id changed from `datanessence` to `halcyon`. Registry aliases and migration scripts ship with the pack, so they carry across without a reset.

**A batch of memory leaks is fixed.** Several of these stranded an entire world in memory every time you loaded a world or changed dimension, which is what pushed clients into running out of memory. AllTheLeaks moves to 1.1.12 with new fixes covering leaks in **GeckoLib, JEI, Primal Magick, Hexerei, Waves, ElementalCraft, Reactive, Modopedia and OctoLib**, and Uranus moves to a bugfix build that clears a leak of its own.

**ModernFix's dynamic resources is now enabled**, which noticeably lowers client memory use on a pack this size. Better Foliage Renewed had to be removed to make that possible - the two crash together. Grindstone recipes are also hidden in JEI now; the pack generates thousands of them and they only ever added clutter and memory pressure.

The quest book has had many changes: chapters ported from other packs, a batch of chapter fixes, and LangSplitter wired up so quest text lives in its own lang tree.


<details open>
<summary>Pack changes :octocat:</summary>
<blockquote>

- Quest book overhaul - a large batch of ported chapters, chapter fixes, and LangSplitter implementation (#204) (PrincessStellar)
- Added a Neo Vitae quest (#208) (PrincessStellar)
- The Create Enchantment Industry Infuser now has a crafting recipe, cross-ported from All the Mods 10 (#205, #209) (item4)
- The Technomancy Upgrade Orb from Cataclysm Spellbooks can be crafted but the mod ships no upgrade definition for it, so it did nothing - the pack now supplies one (LobsterJonn)
- Halcyon mod id migration - registry aliases and migration scripts so existing worlds keep their blocks and items (LobsterJonn)
- Enabled ModernFix dynamic resources to cut client memory use (LobsterJonn)
- Hid grindstone recipes in JEI, which the pack generates thousands of (LobsterJonn)
- Silenced 1050 startup errors from Farming for Blockheads market recipes that point at mods the pack does not include (LobsterJonn)
- Disabled the spark background profiler (LobsterJonn)
- Crash Assistant reports now include the pack version (LobsterJonn)

</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Added (2)</summary>

- ftbquestslangsplitter (1.0.6)
- neovitae (1.1.9)

</details>

<details open>
<summary>Updated (45)</summary>

- neoforge (21.1.244 > 21.1.248)
- alltheleaks (1.1.10+1.21.1-neoforge > 1.1.12+1.21.1-neoforge)
- allthewizardgear (1.21.1-1.1.12 > 1.21.1-1.2.0)
- apotheosis (8.6.1 > 8.7.0)
- ars_ocultas (2.5.0 > 2.6.1)
- ars_zero (2.0.0-beta1 > 2.0.0-beta4)
- balm (21.0.63 > 21.0.65)
- betterarcheology (1.21.1-1.3.7 > 1.21.1-1.3.8)
- bloodlines (1.21-3.0.7 > 1.21-3.0.9)
- cataclysm_spellbooks (1.1.12-1.21 > 1.1.11-1.21)
- constructionstick (1.4.1 > 1.4.2)
- crash_assistant (1.11.11 > 1.11.12)
- create_dragons_plus (1.11.3 > 1.11.7b)
- create_enchantment_industry (2.5.0-preview-alpha1 > 2.5.1b)
- creativecore (2.13.41 > 2.13.43)
- cupboard (3.9 > 4.0)
- dataanchor (2.0.0.14 > 2.0.0.16)
- evilcraft (1.2.89 > 1.2.93)
- fragmentum (2.2.4 > 2.4.1)
- ftblibrary (2101.1.34 > 2101.1.35)
- ftbquests (2101.1.28 > 2101.1.30)
- ftbxmodcompat (21.1.10 > 21.1.11)
- fusion (1.3.10 > 1.3.12)
- gtbcs_spell_lib (1.5.0-1.21.1 > 2.0.0-1.21.1)
- incontrol (1.21-10.2.6 > 1.21-10.2.7)
- jade (15.10.5+neoforge > 15.10.6+neoforge)
- jei (19.42.0.385 > 19.44.0.401)
- journeymap (1.21.1-6.0.2 > 1.21.1-6.0.4)
- l2backpack (3.1.4 > 3.1.5)
- lootr (1.21.1-1.11.37.122 > 1.21.1-1.11.38.123)
- minecolonies (1.1.1362-1.21.1-snapshot > 1.1.1374-1.21.1-snapshot)
- moonlight (1.21.1-3.3.0 > 1.21.1-3.3.3)
- occultism (1.224.0 > 1.224.2)
- productivemetalworks (1.21.1-1.15.0 > 1.21.1-1.15.1)
- productivetrees (1.21.1-1.0.0 > 1.21.1-1.1.0)
- reliquary (2.0.77 > 2.0.78)
- sodium (0.8.12+mc1.21.1 > 0.8.13-beta.2+mc1.21.1)
- sophisticatedbackpacks (3.25.73 > 3.25.77)
- sophisticatedcore (1.4.80 > 1.4.86)
- sophisticatedstorage (1.5.83 > 1.5.85)
- structurize (1.0.832-1.21.1-snapshot > 1.0.832-1.21.1)
- the_bumblezone (7.15.2+1.21.1-neoforge > 7.15.3+1.21.1-neoforge)
- tombstone (9.5.3 > 9.5.4)
- uranus (2.4.1 > 2.4.1-bugfix)
- waystones (21.1.38 > 21.1.41)

</details>

<details open>
<summary>Renamed (2)</summary>

- datanessence (0.3.6+tides-of-phenua) > halcyon (0.4.2+aria-of-the-moon)
- dnejei (1.21.1-0.4.0) > halcyonjei (1.21.1-0.5.0)

</details>

<details open>
<summary>Removed (4)</summary>

- Better Foliage Renewed (6.0)
- Right Click Harvest (4.6.1+1.21.1)
- Scriptor Magicae (2.0.8-1.21.1)
- Unfocused (0.3.3-1.21.1)

</details>
