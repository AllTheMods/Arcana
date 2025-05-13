/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {


ATM.custom(
    {
        "type": "primalmagick:arcane_crafting_shaped",
        "key": {
            "A": {
            "tag": "primalmagick:essences/clusters"
            },
            "G": {
            "item": "allthetweaks:atm_star"
            },
            "M": {
            "item": "primalmagick:marble_hallowed"
            },
            "P": {
            "tag": "primalmagick:ingots/hallowsteel"
            }
        },
        "mana": {
            "sources": {
            "primalmagick:earth": 30000,
            "primalmagick:moon": 30000,
            "primalmagick:sea": 30000,
            "primalmagick:sky": 30000,
            "primalmagick:sun": 30000
            }
        },
        "pattern": [
            "APA",
            "MGM",
            "APA"
        ],
        "requirement": {
            "requirement_type": "primalmagick:research",
            "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:mana_singularity"
            }
        },
        "result": {
            "count": 1,
            "id": 'primalmagick:creative_wand_gem_item'
        }
        }
)

ATM.custom(
{
    "type": "primalmagick:arcane_crafting_shaped",
    "key": {
        "A": {
        "item": "primalmagick:mana_singularity"
        },
        "G": {
        "item": "primalmagick:creative_wand_gem_item"
        },
        "M": {
        "item": "primalmagick:pixie_majestic_hallowed"
        },
        "P": {
        "item": "primalmagick:sanguine_core_inner_demon"
        }
    },
    "mana": {
        "sources": {
        "primalmagick:earth": 30000,
        "primalmagick:moon": 30000,
        "primalmagick:sea": 30000,
        "primalmagick:sky": 30000,
        "primalmagick:sun": 30000
        }
    },
    "pattern": [
        "APA",
        "MGM",
        "APA"
    ],
    "requirement": {
        "requirement_type": "primalmagick:research",
        "rootKey": {
        "key_type": "primalmagick:research_entry",
        "rootKey": "primalmagick:mana_singularity"
        }
    },
    "result": {
        "count": 1,
        "id": 'primalmagick:mana_singularity_creative'
    }
    }
)


})




/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
