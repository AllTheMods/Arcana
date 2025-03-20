// priority: 10
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
function $Pack$IngredientsOf(string) {
    let ingredients = [];
    string.forEach(ingredient => {
        ingredients.push(Ingredient.of(ingredient))
    });
    return ingredients
}

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/