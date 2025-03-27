
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    ATM.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "ars_nouveau:source_gem_block"
            },
            {
                "item": "ars_nouveau:source_gem_block"
            },
            {
                "item": "ars_nouveau:source_gem_block"
            },
            {
                "item": "ars_nouveau:source_gem_block"
            },
            {
                "tag": "c:storage_blocks/gold"
            },
            {
                "tag": "c:storage_blocks/gold"
            },
            {
                "tag": "c:storage_blocks/gold"
            },
            {
                "tag": "c:storage_blocks/gold"
            }
        ],
        "reagent": {
            "item": "ars_nouveau:arcane_core"
        },
        "result": {
            "count": 1,
            "id": "arseng:source_acceptor"
        },
        "sourceCost": 10000
    })
    
    $ArsNouveau$EnchantingApparatus(
        ATM,
        Item.of("arseng:source_acceptor"),
        [
            Item.of("ars_nouveau:source_gem_block"),
            Item.of("ars_nouveau:source_gem_block"),
            Item.of("ars_nouveau:source_gem_block"),
            Item.of("ars_nouveau:source_gem_block"),
            Item.of("#c:storage_blocks/gold"),
            Item.of("#c:storage_blocks/gold"),
            Item.of("#c:storage_blocks/gold"),
            Item.of("#c:storage_blocks/gold"),
        ],
        Item.of("ars_nouveau:arcane_core"),
        false,
        10000,
        `source_acceptor`
    )
    ATM.remove({id: `arseng:source_acceptor`})
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/