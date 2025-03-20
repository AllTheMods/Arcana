
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    function enchanting_apparatus(output, pedestalItems, reagent, nbt, sourceCost, id) {
        let recipe = {
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": nbt,
            "pedestalItems": [],
            "reagent": {},
            "result": {
                "count": output.count || 1,
                "id": output.item
            },
            "sourceCost": sourceCost
        };

        if (reagent.tag) {
            recipe.reagent.tag = reagent.tag;
        } else {
            recipe.reagent.item = reagent.item;
        }

        pedestalItems.forEach(input => {

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.pedestalItems.push(ingredients);
        });

        ATM.custom(recipe).id(`kubejs:enchanting_apparatus/${id}`);
    }

    enchanting_apparatus(
        { item: 'allthemodium:unobtainium_allthemodium_alloy_ingot' },
        [
            { item: 'primalmagick:hallowsteel_ingot' },
            { item: 'ars_nouveau:air_essence' },
            { tag: 'c:ingots/allthemodium' },
            { item: 'ars_nouveau:earth_essence' },
            { item: 'allthemodium:piglich_heart' },
            { item: 'ars_nouveau:fire_essence' },
            { tag: 'c:ingots/unobtainium' },
            { item: 'ars_nouveau:water_essence' }],
        { item: 'ars_nouveau:source_gem' },
        false,
        35000,
        'unobtainium_allthemodium_alloy_ingot'
    );
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/