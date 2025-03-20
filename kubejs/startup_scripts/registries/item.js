
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
StartupEvents.registry("item", ATM => {
    global.$PotionsMaster.forEach(Potion => {
        ATM.create(`potionsmaster:calcinated_${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
            .displayName(`Calcinated ${Potion.name} Oresight Powder`)
            .texture(`kubejs:item/calcinated_base`)
            .maxStackSize(64)
            .color(Potion.color)
        ATM.create(`potionsmaster:${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
            .displayName(`${Potion.name} Oresight Powder`)
            .texture(`kubejs:item/base_powder`)
            .maxStackSize(64)
            .color(Potion.color)
    })
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/