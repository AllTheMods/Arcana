
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.generateData("after_mods", ATM => {
    ATM.json("kubejs:enchanted/circle_magic/shape/star.json", [
        "                     X                     ",
        "                     X                     ",
        "                    XOX                    ",
        "                    XOX                    ",
        "                   XOOOX                   ",
        "                   XOOOX                   ",
        "                   XOOOX                   ",
        "                  XOOOOOX                  ",
        "                  XOOOOOX                  ",
        "                  XOOOOOX                  ",
        "                 XOOOOOOOX                 ",
        "                 XOOOOOOOX                 ",
        "                 XOOOOOOOX                 ",
        "                XOOOOOOOOOX                ",
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        " XXOOOOOOOOOOOOOXOOOOOOOOOXOOOOOOOOOOOOOXX ",
        "   XOOOOOOOOOOOXOOOOOOOOOOOXOOOOOOOOOOOX   ",
        "    XOOOOOOOOOOXOOOOOOOOOOOXOOOOOOOOOOX    ",
        "     XXOOOOOOOOXOOOOOOOOOOOXOOOOOOOOXX     ",
        "       XOOOOOOXOOOOOOOOOOOOOXOOOOOOX       ",
        "        XOOOOOXOOOOOOOOOOOOOXOOOOOX        ",
        "         XXOOOXOOOOOOOOOOOOOXOOOXX         ",
        "           XOOXOOOOOOOOOOOOOXOOX           ",
        "            XXOOOOOOOOOOOOOOOXX            ",
        "             XXOOOOOOOOOOOOOXX             ",
        "             XOXOOOOOOOOOOOXOX             ",
        "            XOOOXXOOOOOOOXXOOOX            ",
        "            XOOOOOXOOOOOXOOOOOX            ",
        "            XOOOOOOXOOOXOOOOOOX            ",
        "           XOOOOOOOOXXXOOOOOOOOX           ",
        "           XOOOOOOOOX XOOOOOOOOX           ",
        "           XOOOOOOOX   XOOOOOOOX           ",
        "          XOOOOOOXX     XXOOOOOOX          ",
        "          XOOOOOX         XOOOOOX          ",
        "          XOOOOX           XOOOOX          ",
        "         XOOOXX             XXOOOX         ",
        "         XOOX                 XOOX         ",
        "         XOX                   XOX         ",
        "        XXX                     XXX        ",
        "        X                         X        ",
        "                                           ",
        "                                           ",
        "                                           "
    ])
    // ATM.custom({
    //     "items": [
    //         { "id": "minecraft:apple", "count": 1 },
    //         { "id": "minecraft:oak_leaves", "count": 1 },
    //     ],
    //     "shapes": {
    //         "kubejs:star": "enchanted:ritual_chalk"
    //     },
    //     "power": 0,
    //     "factory": {
    //         "type": "enchanted:create_item",
    //         "items": [
    //             { "id": "minecraft:golden_apple", "count": 1 }
    //         ]
    //     }
    // }).id(`kubejs:enchanted/circle_magic/rite/some.json`)
    function enchanted_rite(ingredients,shape,power,factory,id) {
        ATM.json(id,{
            items: ingredients,
            shapes: shape,
            power: power,
            factory: factory
        })
    }
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/