
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    ATM.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        pattern: [
            '    A    ',
            '   ANA   ',
            'AAAJFJAAA',
            'AJJCDEJJA',
            ' AMBIHMA ',
            '  AKGLA  ',
            ' AJJAJJA ',
            'AJJA AJJA',
            'AAA   AAA'
        ],
        key: {
            A: Ingredient.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson(),
            B: Ingredient.of('glimmeringtales:thunderstorm').toJson(),
            C: Ingredient.of('the_bumblezone:essence_of_the_bees').toJson(),
            D: Ingredient.of('vampirism:pure_blood_4').toJson(),
            E: Ingredient.of('primalmagick:pixie_basic_hallowed').toJson(),
            F: Ingredient.of('occultism:eldritch_chalice').toJson(),
            G: Ingredient.of('allthearcanistgear:unobtainium_hat').toJson(),
            H: Ingredient.of('allthearcanistgear:unobtainium_spell_book').toJson(),
            I: Ingredient.of('allthetweaks:patrick_star').toJson(),
            J: Ingredient.of('allthecompressed:nether_star_block_1x').toJson(),
            K: Ingredient.of('deeperdarker:soul_elytra').toJson(),
            L: Ingredient.of('allthewizardgear:unobtainium_spell_book').toJson(),
            M: Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block').toJson(),
            N: Ingredient.of('allthemodium:vibranium_allthemodium_alloy_block').toJson()

        },
        result: Item.of('allthetweaks:atm_star').toJson()
    }).id('kubejs:atm_star')

    ATM.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        pattern: [
            '    B    ',
            '   BCA   ',
            'BBBGCABBB',
            'ACGCGGGCA',
            ' AAGGGBA ',
            '  EDDDE  ',
            ' EFEDEFE ',
            'BEDD DDEB',
            'AAA   AAA'
        ],
        key: {
            A: Ingredient.of('minecraft:magenta_concrete').toJson(),
            B: Ingredient.of('minecraft:pink_concrete').toJson(),
            C: Ingredient.of('minecraft:pink_concrete_powder').toJson(),
            D: Ingredient.of('minecraft:green_concrete').toJson(),
            E: Ingredient.of('minecraft:green_concrete_powder').toJson(),
            F: Ingredient.of('minecraft:lime_concrete').toJson(),
            G: Ingredient.of('minecraft:magenta_concrete_powder').toJson()
        },
        result: Item.of('allthetweaks:patrick_star').toJson()

    }).id('kubejs:patrick_star')
    // THIS IS PAIN
    // hi
    // ATM.forEachRecipe({id: /productivebees:centrifuge\/honeycomb_magmatic/}, Recipe => {
    //     let original = JSON.parse(Recipe.json);
    //     // console.log(JSON.parse(original).ingredient);
    //     let ingredient = original.ingredient.items == undefined ? original.ingredient.item : original.ingredient.items
    //     let type = original.ingredient.components["productivebees:bee_type"]
    //     let results = []
    //     original.outputs.forEach(item => {
    //         results.push($Create$ItemWithChanceAmount(item.item.item,item.chance))
    //     })
    //     ingredient = type == undefined ? ingredient.item : `${ingredient}[productivebees:bee_type=\"${type}\"]`
    //     ingredient = JSON.parse(Ingredient.of(`${ingredient}`).toJson())
    //     $Create$ItemWithChanceAmount()
    //     let ingredients = []
    //     ATM.custom({
    //         type: "create:mixing",
    //         ingredients: [
    //             ingredient
    //         ],
    //         results: results
    //     })
    //     // $Create$MixerRecipe(ATM,Ingredient.of(`4x ${ingredient}`),results,"superheated")
    //     Recipe.remove()
    // })
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/