// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic - Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.generateData('after_mods', allthemods => {

    let entry = JsonIO.read("kubejs/server_scripts/tweaks/disable_entries/disable_entries_list.json").entry

    for (let id of entry) {
        allthemods.json(`${id}.json`,
            {
                "neoforge:conditions": [
                    {
                        "type": "neoforge:false"
                    }
                ]
            }
        )
    }
})


ServerEvents.recipes((allthemods) => {
    allthemods.remove({ id: 'forcecraft:force_engine' })

    allthemods.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        pattern: [
          '    A    ',
          '   AJA   ',
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
          B: Ingredient.of('vampirism:hunter_intel_9').toJson(),
          C: Ingredient.of('the_bumblezone:essence_of_the_bees').toJson(),
          D: Ingredient.of('vampirism:pure_blood_4').toJson(),
          E: Ingredient.of('allthewizardgear:unobtainium_mage_helmet').toJson(),
          F: Ingredient.of('occultism:eldritch_chalice').toJson(),
          G: Ingredient.of('allthearcanistgear:unobtainium_hat').toJson(),
          H: Ingredient.of('allthearcanistgear:unobtainium_spell_book').toJson(),
          I: Ingredient.of('allthetweaks:patrick_star').toJson(),
          J: Ingredient.of('allthecompressed:nether_star_block_1x').toJson(),
          K: Ingredient.of('deeperdarker:soul_elytra').toJson(),
          L: Ingredient.of('allthewizardgear:unobtainium_spell_book').toJson(),
          M: Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block').toJson()
        },
        result: Item.of('allthetweaks:atm_star').toJson()
      }).id('allthemods:atm_star')

      allthemods.custom({
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
        
      }).id('allthemods:patrick_star')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic - Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
