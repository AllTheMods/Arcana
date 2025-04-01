
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    $ArsNouveau$EnchantingApparatus(
        ATM,
        "arseng:source_acceptor",
        [
            "ars_nouveau:source_gem_block",
            "ars_nouveau:source_gem_block",
            "ars_nouveau:source_gem_block",
            "ars_nouveau:source_gem_block",
            "#c:storage_blocks/gold",
            "#c:storage_blocks/gold",
            "#c:storage_blocks/gold",
            "#c:storage_blocks/gold",
        ],
        Item.of("ars_nouveau:arcane_core"),
        false,
        10000,
        `source_acceptor`
    )
    ATM.remove({ id: `arseng:source_acceptor` })
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
