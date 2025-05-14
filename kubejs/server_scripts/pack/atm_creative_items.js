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


    ATM.custom({
        type:"occultism:ritual",
        result: Item.of("ars_nouveau:creative_source_jar"),
        ingredients: $Pack$IngredientsOf(["allthemodium:allthemodium_source_jar", "allthemodium:allthemodium_source_jar", 
            "arsdelight:horn_roll", "arsdelight:horn_roll", 'arseng:me_source_jar', 'arseng:me_source_jar', 'arseng:source_acceptor', 'arseng:source_acceptor']),
        activation_item: Ingredient.of("allthetweaks:atm_star"),
        pentacle_id: "occultism:contact_eldritch_spirit",
        duration: 360,
        ritual_type: "occultism:craft_miner_spirit",
        ritual_dummy: Item.of("occultism:ritual_dummy/misc_miner_ancient_eldritch")
    }).id("kubejs:creative_source_jar")



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
            Ingredient.of('create_enchantment_industry:experience_cake').toJson(),
            Ingredient.of('mahoutsukai:faecake').toJson()
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

    ATM.custom({
        "type": "primalmagick:ritual",
        "expertiseGroup": "primalmagick:ambrosia_supreme",
        "ingredients": [
            {
                "item": "minecraft:glass"
            },
            {
                "item": "allthetweaks:atm_star"
            },
            {
                "tag": "c:obsidians"
            },
            {
                "item": "vampirism:mother_core"
            },
            {
                "item": "vampirism:pure_blood_4"
            },
            {
                "item": "primalmagick:humming_artifact_sun"
            }
        ],
        "instability": 8,
        "mana": {
            "sources": {
                "primalmagick:blood": 30000,
                "primalmagick:infernal": 30000,
                "primalmagick:sun": 30000
            }
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:ritual_lectern"
            },
            {
                "block": "primalmagick:bloodletter"
            }
        ],
        "requirement": {
            "requirement_type": "primalmagick:research",
            "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:supreme_ambrosia"
            }
        },
        "result": {
            "count": 1,
            "id": "vampirism:sunscreen_beacon"
        }
    })


    ATM.custom({
        "type": "primalmagick:ritual",
        "expertiseGroup": "primalmagick:ambrosia_supreme",
        "ingredients": [
            {
                "item": "alltheores:netherite_rod"
            },
            {
                "item": "alltheores:netherite_rod"
            },
            {
                "item": "allthetweaks:atm_star"
            },
            {
                "item": "vampiresneedumbrellas:netherite_umbrella"
            },
            {
                "item": "vampiresneedumbrellas:netherite_umbrella"
            }
        ],
        "instability": 8,
        "mana": {
            "sources": {
                "primalmagick:blood": 30000,
                "primalmagick:sun": 30000,
                "primalmagick:sky": 30000
            }
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:ritual_lectern"
            },
            {
                "block": "primalmagick:bloodletter"
            }
        ],
        "requirement": {
            "requirement_type": "primalmagick:research",
            "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:supreme_ambrosia"
            }
        },
        "result": {
            "count": 1,
            "id": "vampiresneedumbrellas:creative_umbrella"
        }
    })

})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/