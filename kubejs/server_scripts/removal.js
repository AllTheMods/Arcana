
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*
*    Remove Erroring recipes by ID before KJS can start parsing them
*/
ServerEvents.generateData("after_mods", ATM => {
    let entry = [
        "cataclysm:recipe/amethyst_bless/blessed_amethyst_crab_meat",
        "cataclysm:recipe/blasting/ancient_metal_nugget_from_blasting",
        "cataclysm:recipe/blasting/black_steel_nugget_from_blasting",
        "cataclysm:recipe/stonecutting/chiseled_end_stone_bricks_from_stonecutting",
        "cataclysm:recipe/stonecutting/chiseled_obsidian_bricks_from_stonecutting",
        "cataclysm:recipe/stonecutting/chiseled_purpur_block_from_stonecutting",
        "cataclysm:recipe/stonecutting/chiseled_stone_brick_pillar_from_stonecutting",
        "cataclysm:recipe/stonecutting/end_stone_pillar_from_stonecutting",
        "cataclysm:recipe/stonecutting/frosted_stone_brick_slab_from_stonecutting",
        "cataclysm:recipe/stonecutting/frosted_stone_brick_stairs_from_stonecutting",
        "cataclysm:recipe/stonecutting/frosted_stone_brick_wall_from_stonecutting",
        "cataclysm:recipe/stonecutting/obsidian_brick_slab_from_stonecutting",
        "cataclysm:recipe/stonecutting/obsidian_brick_stairs_from_stonecutting",
        "cataclysm:recipe/stonecutting/obsidian_brick_wall_from_stonecutting",
        "cataclysm:recipe/stonecutting/obsidian_bricks_from_stonecutting",
        "cataclysm:recipe/stonecutting/polished_end_stone_from_stonecutting",
        "cataclysm:recipe/stonecutting/polished_end_stone_slab_from_stonecutting",
        "cataclysm:recipe/stonecutting/polished_end_stone_stairs_from_stonecutting",
        "cataclysm:recipe/stonecutting/purpur_wall_from_stonecutting",
        "cataclysm:recipe/stonecutting/quartz_brick_wall_from_stonecutting",
        "cataclysm:recipe/stonecutting/stone_pillar_from_stonecutting",
        "cataclysm:recipe/stonecutting/stone_tile_slab_from_stonecutting",
        "cataclysm:recipe/stonecutting/stone_tile_stairs_from_stonecutting",
        "cataclysm:recipe/stonecutting/stone_tile_wall_from_stonecutting",
        "cataclysm:recipe/stonecutting/stone_tiles_from_stonecutting",
        "cataclysm_spellbooks:recipe/abyss_spell_book",
        "ironbookshelves:recipe/enderite_bookshelf_recipe",
        "ironbookshelves:recipe/zurite_bookshelf_recipe",
        "mythsandlegends:recipe/dagger_of_cadejo",
        "pamhc2fantasy:recipe/slimetoastitem",
        "scriptor:recipe/patchouli_book",
        "scriptor:loot_table/patchouli_book"
    ]

    for (let id of entry) {
        ATM.json(`${id}.json`,
            {
                "neoforge:conditions": [
                    {
                        "type": "neoforge:false"
                    }
                ]
            }
        )
    }
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/