
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    function pestle_mortar(ingredients, output, time) {
        ATM.custom({
            type: `hexerei:pestle_and_mortar`,
            ingredients: ingredients,
            output: output,
            grindingTime: time
        })
    }
    global.$PotionsMaster.forEach(Potion =>{
        pestle_mortar([
            Ingredient.of(`potionsmaster:ender_powder`).toJson(),
            Ingredient.of(`minecraft:glowstone_dust`).toJson(),
            Ingredient.of(Potion.item).toJson(),
            Ingredient.of(`minecraft:redstone`).toJson()],
            Item.of(`potionsmaster:${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`),
            100
        )
    })
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/