// priority: 5
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
/**
* @param {$RecipesKubeEvent_} ATM
* @param {$List_<($Ingredient_)>} ingredients
* @param {$List_<($ItemStack_|$FluidStack_)>} results
* @param {"superheated"|"heated"} heat
*/
function $Create$MixerRecipe(ATM, ingredients, results, heat) {
    let json = {
        type: "create:mixing",
        ingredients: ingredients,
        results: results
    }
    if (heat) {
        json.heat_requirement = heat
    }
    ATM.custom(json)
}

/**
* @param {$JsonElement_} ingredient
* @param {number} chance
* @param {number} count
* @returns {$JsonElement_}
*/
function $Create$ItemWithChanceAmount(ingredient,chance,count) {
    let json = {
        id: ingredient,
    }
    if (json) json.chance = chance
    if (json) json.count = count
    return json
}
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/