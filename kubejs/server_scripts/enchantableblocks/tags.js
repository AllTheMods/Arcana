
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    let json = {index:[]}

    
    ATM.findRecipes({ type: "minecraft:blasting" }).forEach(recipe => {
        json.index.push(recipe.getOriginalRecipeResult().getId())
    })
    ATM.findRecipes({ type: "minecraft:smelting" }).forEach(recipe => {
        json.index.push(recipe.getOriginalRecipeResult().getId())
    })
    ATM.findRecipes({ type: "minecraft:smoking" }).forEach(recipe => {
        json.index.push(recipe.getOriginalRecipeResult().getId())
    })
    JsonIO.write("kubejs/server_scripts/enchantableblocks/yield_blacklist.json",json)
})
ServerEvents.tags(`item`, ATM => {
    let json = JsonIO.read("kubejs/server_scripts/enchantableblocks/yield_blacklist.json")
    if (!json) return
    json.index.forEach(item => {
        ATM.add("enchantableblocks:yield_blacklist", item)
    })
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
