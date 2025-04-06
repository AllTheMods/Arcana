
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.tags(`item`, ATM => {
    global.$PotionsMaster.forEach(Potion => {
        ATM.add(`potionsmaster:calcinated/${Potion.name.toLowerCase().replace(" ", "_")}`, `potionsmaster:calcinated_${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
    })
})
ServerEvents.tags(`block`, ATM => {
    ATM.add("minecraft:mineable/pickaxe", /mythrais/)
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
