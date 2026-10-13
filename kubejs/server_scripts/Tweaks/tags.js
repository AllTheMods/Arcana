
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.tags(`entity_type`, ATM => {

    ATM.add(`c:bosses`, [
        `allthemodium:piglich`,
        `cataclysm:amethyst_crab`,
        `cataclysm:coralssus`,
        `cataclysm:ender_golem`,
        `cataclysm:ignited_revenant`,
        `cataclysm:kobolediator`,
        `cataclysm:modern_remnant`,
        `cataclysm:the_baby_leviathan`,
        `cataclysm:the_prowler`,
        `cataclysm:wadjet`
    ])

    ATM.add(`allthemods:jank_blacklist`, [
        `#c:bosses`,
        `#c:capturing_not_supported`,
        `#ars_nouveau:familiar`,
        `@iceandfire`,
        `@occultism`,
        `@productivebees`,
        `ars_nouveau:animated_block`,
        `artifacts:mimic`,
        `create:package`,
        `evilcraft:vengeance_spirit`,
        `forbidden_arcanus:corrupt_lost_soul`,
        `forbidden_arcanus:enchanted_lost_soul`,
        `forbidden_arcanus:lost_soul`,
        `minecraft:elder_guardian`,
        `minecraft:warden`,
        `the_bumblezone:bee_queen`,
        `twilightforest:hedge_spider`,
        `twilightforest:swarm_spider`
    ])

    let jankConsumers = [
        `apothic_spawners:blacklisted_from_spawners`,
        `ars_additions:source_spawner_denylist`,
        `ars_elemental:charm_blacklist`,
        `enchanted:taglock_blacklist`,
        `forbidden_arcanus:quantum_catcher_blacklisted`,
        `forbidden_arcanus:test_tube_blacklisted`,
        `forcecraft:flask_blacklist`,
        `l2hostility:hostility_spawner_blacklist`,
        `neovitae:deny_imprisonment`,
        `neovitae:telepose_blacklist`,
        `occultism:fragile_soul_gem_deny_list`,
        `occultism:soul_gem_deny_list`,
        `pastel:spawner_manipulation_blacklisted`,
        `pastel:staff_of_remembrance_blacklisted`,
        `pneumaticcraft:vacuum_trap_blacklisted`,
        `tombstone:unhandled_tamable`
    ]

    let i = 0
    for (i = 0; i < jankConsumers.length; i++) {
        ATM.add(jankConsumers[i], `#allthemods:jank_blacklist`)
    }

    ATM.add(`ars_nouveau:jar_blacklist`, `the_bumblezone:bee_queen`)
    ATM.add(`productivebees:bee_encase_blacklist`, `the_bumblezone:bee_queen`)
    ATM.add(`ars_nouveau:drygmy_blacklist`, `#ars_nouveau:jar_blacklist`)

    // Removes tag entries whose target is never registered. A missing required entry makes
    // vanilla drop the whole tag and every tag referencing it.
    let missingEntities = [
        `cataclysm_spellbooks:summoned_draugr`,
        `cataclysm_spellbooks:summoned_elite_draugr`,
        `cataclysm_spellbooks:summoned_royal_draugr`,
    ]
    missingEntities.forEach(id => {
        ATM.removeAllTagsFrom(id)
    })
})

ServerEvents.tags(`item`, ATM => {

    ATM.add(`c:wither_bones`, `iceandfire:witherbone`)
    ATM.add(`c:bones`, `bhc:wither_bone`)
    ATM.add(`c:bones/wither`, `bhc:wither_bone`)

    ATM.add(`productivebees:flowers/quarry`, [`forbidden_arcanus:darkstone`])

    ATM.add(`minecraft:bookshelf_books`, [
        `ae2:guide`,
        `ars_elemental:air_caster_tome`,
        `ars_elemental:anima_caster_tome`,
        `ars_elemental:earth_caster_tome`,
        `ars_elemental:fire_caster_tome`,
        `ars_elemental:manipulation_caster_tome`,
        `ars_elemental:water_caster_tome`,
        `evilcraft:origins_of_darkness`,
        `patchouli:guide_book`
    ])

    ATM.add(`forbidden_arcanus:modifier/eternal_incompatible`, [`ars_additions:undying_charm`, `#alltheores:ore_hammers`])

    let pumpkinItemTags = [
        `c:crops/pumpkin`,
        `c:pumpkins`,
        `c:pumpkins/carved`,
        `c:pumpkins/jack_o_lanterns`,
        `minecraft:enchantable/equippable`,
        `minecraft:enchantable/vanishing`
    ]
    let p = 0
    for (p = 0; p < pumpkinItemTags.length; p++) {
        ATM.remove(pumpkinItemTags[p], /chromacarvings/)
    }

    let yieldJson = JsonIO.read("kubejs/server_scripts/enchantableblocks/yield_blacklist.json")
    if (yieldJson) {
        yieldJson.index.forEach(item => {
            ATM.add("enchantableblocks:yield_blacklist", item)
        })
    }

    let missingItems = [
        `allthemodium:allthemodium_bow`,
        `allthemodium:unobtainium_crossbow`,
        `allthemodium:vibranium_shield`,
        `reliquified_irons_spells_and_spellbooks:bloodied_voodoo_doll`,
        `ars_zero:staff_convergence`,
        `ars_zero:staff_demonbane`,
        `ars_zero:staff_geometrize`,
        `ars_zero:staff_lakes`,
        `ars_zero:staff_switcheroo`,
        `arsdelight:dawnberry_pie`,
        `arsdelight:lightchee_pie`,
    ]
    missingItems.forEach(id => {
        ATM.removeAllTagsFrom(id)
    })

    ATM.remove("reliquified_artifacts:anglers_hat_valuables", ["#c:raw_materials"]);
})

ServerEvents.tags(`block`, ATM => {

    ATM.add(`productivebees:flowers/quarry`, [`forbidden_arcanus:darkstone`])
    ATM.add(`minecraft:mineable/pickaxe`, /mythrais/)
    ATM.add(`ftbchunks:interact_whitelist`, [`@waystones`])
    ATM.add(`minecraft:replaceable`, `torchmaster:invisible_light`)

    let pumpkinBlockTags = [
        `c:pumpkins`,
        `c:pumpkins/carved`,
        `c:pumpkins/jack_o_lanterns`,
        `minecraft:mineable/axe`,
        `minecraft:sword_efficient`
    ]
    let b = 0
    for (b = 0; b < pumpkinBlockTags.length; b++) {
        ATM.remove(pumpkinBlockTags[b], /chromacarvings/)
    }

    // farmersdelight:pies is both a block and an item tag
    let missingBlocks = [
        `arsdelight:dawnberry_pie`,
        `arsdelight:lightchee_pie`,
    ]
    missingBlocks.forEach(id => {
        ATM.removeAllTagsFrom(id)
    })
})

ServerEvents.tags(`fluid`, ATM => {
    ATM.add(`c:blood`, [`evilcraft:blood`, `irons_spellbooks:blood`])
    ATM.add(`c:experience`, `create_enchantment_industry:experience`)
})

ServerEvents.tags(`mob_effect`, ATM => {
    ATM.add(`irons_spellbooks:cleanse_immune`, `cataclysm:ghost_sickness`)
})

ServerEvents.tags(`worldgen/structure`, ATM => {
    ATM.add(`cataclysm:berserker_spawn`, `betterfortresses:fortress`)
})

ServerEvents.tags(`damage_type`, ATM => {
    // aero_additions ships this under damage_type as "entity_type/deflects_projectiles"
    ATM.removeAllTagsFrom(`aero_additions:summoned_breeze`)
})

ServerEvents.tags(`irons_jewelry:material`, ATM => {
    ATM.removeAllTagsFrom(`hazennstuff:hydro_rune`)
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
