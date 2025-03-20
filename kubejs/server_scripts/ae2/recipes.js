
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    // let removeByID = [
    //     /ae2:tools/,
    //     /ae2:network/,
    //     /ae2:materials/,
    //     /ae2:inscriber/,
    //     /ae2:entropy/,
    //     /ae2:charger/,
    //     /ae2:blasting/,
    //     /ae2:transform/,
    //     /ae2:crafting_unit_upgrade/,
    //     /ae2:cell_upgrade/,
    //     /ae2:misc/,
    //     /ae2:smelting/,
    //     /ae2:matter_cannon/,
    //     /ae2:decorative/,
    //     /ae2:block_cutter/,
    //     /ae2:shaped/,
    //     /ae2:upgrade/,
    // ]

    // removeByID.forEach(recipe => {
    //     ATM.remove({ id: recipe })
    // })
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