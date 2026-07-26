
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/

// Removes tag entries whose target is never registered. A missing required entry makes
// vanilla drop the whole tag and every tag referencing it.

ServerEvents.tags(`entity_type`, ATM => {
    let missing = [
        `cataclysm_spellbooks:summoned_draugr`,
        `cataclysm_spellbooks:summoned_elite_draugr`,
        `cataclysm_spellbooks:summoned_royal_draugr`,
    ]
    missing.forEach(id => {
        ATM.removeAllTagsFrom(id)
    })
})

ServerEvents.tags(`damage_type`, ATM => {
    // aero_additions ships this under damage_type as "entity_type/deflects_projectiles"
    ATM.removeAllTagsFrom(`aero_additions:summoned_breeze`)
})

ServerEvents.tags(`irons_jewelry:material`, ATM => {
    ATM.removeAllTagsFrom(`hazennstuff:hydro_rune`)
})

ServerEvents.tags(`item`, ATM => {
    let missing = [
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
    missing.forEach(id => {
        ATM.removeAllTagsFrom(id)
    })
})

ServerEvents.tags(`block`, ATM => {
    // farmersdelight:pies is both a block and an item tag
    let missing = [
        `arsdelight:dawnberry_pie`,
        `arsdelight:lightchee_pie`,
    ]
    missing.forEach(id => {
        ATM.removeAllTagsFrom(id)
    })
})
