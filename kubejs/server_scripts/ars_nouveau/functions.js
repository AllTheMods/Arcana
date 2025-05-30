// priority: 5
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
/**
 * 
 * @param {$RecipesKubeEvent_} ATM 
 * @param {*} output 
 * @param {*} pedestalItems 
 * @param {*} reagent 
 * @param {*} nbt 
 * @param {number} sourceCost 
 * @param {*} id 
 */
function $ArsNouveau$EnchantingApparatus(ATM, output, pedestalItems, reagent, nbt, sourceCost, id) {
    let recipe = {
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": nbt,
        "pedestalItems": [],
        "reagent": Ingredient.of(reagent),
        "result": Item.of(output),
        "sourceCost": sourceCost
    };
    pedestalItems.forEach(input => {
        recipe.pedestalItems.push(Ingredient.of(input));
    });

    ATM.custom(recipe).id(`kubejs:enchanting_apparatus/${id}`);
}

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
