
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    let removeByID = [
        // /ae2:tools/,
        // /ae2:materials/,
        // /ae2:inscriber/,
        // /ae2:entropy/,
        // /ae2:charger/,
        // /ae2:blasting/,
        // /ae2:transform/,
        // /ae2:network/,
        // /ae2:cell_upgrade/,
        // /ae2:misc/,
        // /ae2:smelting/,
        // /ae2:matter_cannon/,
        // /ae2:decorative/,
        // /ae2:block_cutter/,
        // /ae2:shaped/,
        // /ae2:upgrade/,
        /ae2:crafting_unit_upgrade/,
        /ae2:network\/crafting/,
        `ae2:materials/cardcrafting`,
        `ae2:network/crystal_resonance_generator`,
        `ae2:network/blocks/crystal_processing_growth_accelerator`,
        `ae2:network/blocks/energy_energy_acceptor`,
        `ae2:network/blocks/energy_energy_acceptor_alt`,
        `ae2:network/blocks/energy_vibration_chamber`,
        `ae2:network/blocks/pattern_providers_interface`,
        `ae2:network/blocks/pattern_providers_interface_alt`,
        `ae2:network/blocks/pattern_providers_interface_part`,
        `ae2:network/blocks/spatial_anchor`,
        `ae2:network/parts/formation_plane`,
        `ae2:network/parts/formation_plane_alt`,
        `ae2:network/parts/annihilation_plane_alt`,
        `ae2:network/parts/annihilation_plane_alt2`,
        `ae2:network/parts/energy_acceptor`,
        `ae2:network/parts/import_bus`,
        `ae2:network/parts/export_bus`,
        `ae2:network/parts/terminals_pattern_access`,
        `ae2:network/parts/terminals_pattern_encoding`,
    ]

    removeByID.forEach(recipe => {
        ATM.remove({ id: recipe })
    })
    ATM.custom({
        "type": "glimmeringtales:strike_block",
        "ingredient": {
            "item": "ae2:flawless_budding_quartz"
        },
        "transformTo": "minecraft:air"
    })
    // ATM.recipes.kubejs.shaped(
    //     Item.of("ae2:crafting_terminal"),
    //     [
    //         "MSM",
    //         "BCB",
    //         "MEM"
    //     ],
    //     {
    //         M: 'irons_spellbooks:mithril_scrap',
    //         S: 'ars_elemental:spell_mirror',
    //         B: 'minecraft:writable_book',
    //         C: 'minecraft:crafting_table',
    //         E: 'ars_nouveau:manipulation_essence'
    //     }
    // ).id("kubejs:shaped/crafting_terminal")
    // ATM.recipes.kubejs.shaped(
    //     Item.of("ae2:terminal"),
    //     [
    //         "MSM",
    //         "B B",
    //         "MEM"
    //     ],
    //     {
    //         M: 'irons_spellbooks:mithril_scrap',
    //         S: 'ars_elemental:spell_mirror',
    //         B: 'minecraft:writable_book',
    //         E: 'ars_nouveau:manipulation_essence'
    //     }
    // ).id("kubejs:shaped/terminal")
    // ATM.recipes.kubejs.shapeless(
    //     Item.of("ae2:crafting_terminal"),
    //     [
    //         'ae2:terminal',
    //         'minecraft:crafting_table'
    //     ]
    // ).id("kubejs:shapeless/crafting_terminal")
    // ATM.recipes.kubejs.shapeless(
    //     Item.of("ae2:terminal"),
    //     [
    //         'ae2:crafting_terminal'
    //     ]
    // ).replaceIngredient(
    //     'ae2:crafting_terminal',
    //     'minecraft:crafting_table'
    // ).id("kubejs:shapeless/terminal")
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/