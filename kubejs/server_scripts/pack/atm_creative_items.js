/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/

ServerEvents.recipes(ATM => {

    
//#ARS
    ATM.shaped('ars_nouveau:creative_spell_book',
        ['BSG', 'GGE', 'EER'],
        {
            B: Ingredient.of('ars_nouveau:archmage_spell_book'),
            S: Ingredient.of('allthetweaks:atm_star'),
            G: Ingredient.of('ars_nouveau:source_gem_block'),
            E: Ingredient.of('minecraft:ender_eye'),
            R: Ingredient.of('tombstone:soul_receptacle')
        }
    )

    ATM.shaped('ars_nouveau:creative_source_jar', ['AMA', 'ESE', 'GMG'], {
        G: 'allthemodium:allthemodium_source_jar',
        S: 'allthetweaks:atm_star',
        M: 'arsdelight:chimera_horn',
        A: 'arseng:me_source_jar',
        E: 'arseng:source_acceptor'
    })


//#Create
    ATM.custom({
        type: "create:mechanical_crafting",
        accept_mirrored:false,
        pattern: [
                'CLC', 
                'HSH', 
                'LGL'
        ],
        key: {
            C: Ingredient.of('create:cogwheel').toJson(),
            L: Ingredient.of('create:chain_conveyor').toJson(),
            H: Ingredient.of('create:package_frogport').toJson(),
            S: Ingredient.of('allthetweaks:atm_star').toJson(),
            G: Ingredient.of('ars_technica:source_motor').toJson()
            },
        result: Item.of('create:creative_motor').toJson(),
    })

    ATM.custom({
        type: 'create:mixing',
        heatRequirement: "superheated",
        ingredients: [
            Ingredient.of('create:blaze_cake').toJson(),
            Ingredient.of('allthetweaks:atm_star').toJson(),
            Ingredient.of('create_enchantment_industry:experience_cake').toJson()
    ],
        results: [Item.of('create:creative_blaze_cake').toJson()],
    })

//#EvilCraft
    ATM.custom({
        "type": "evilcraft:blood_infuser",
        "input_item": {
            "item": "allthetweaks:atm_star"
        },
        "input_fluid": {
            "id": "evilcraft:blood",
            "amount": 640000
        },
        "output_item": {
        "id": "evilcraft:creative_blood_drop"
        },
        "duration": 2400,
        "xp": 2,
        "tier": 3
    })

//#Vampirism

    ATM.shaped('vampirism:sunscreen_beacon',
        ['GGG','GSG','OCO'],
        {
            G: 'minecraft:glass',
            S: 'allthetweaks:atm_star',
            O: '#c:obsidians',
            C: 'vampirism:mother_core'
        }
    )

    ATM.shaped('vampiresneedumbrellas:creative_umbrella',
        [
            ' US',
            ' RU',
            'R  '
        ],
        {
            R: 'alltheores:netherite_rod',
            U: 'vampiresneedumbrellas:netherite_umbrella',
            S: 'allthetweaks:atm_star'
        }
    )

})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/