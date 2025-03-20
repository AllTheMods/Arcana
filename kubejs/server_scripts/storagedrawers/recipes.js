
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    ATM.forEachRecipe({ id: /storagedrawers:.*_(full|half)_drawers_1/ }, drawer => {
        let pattern = JSON.parse(drawer.json).pattern
        let key = JSON.parse(drawer.json).key
        pattern[1] = "/X/"
        drawer.json.add('pattern',pattern)
        let regex = key["/"].item.match(/minecraft:oak_(plank|slab)/)
        if (regex) {
            key["/"] = {tag:`minecraft:${regex[1] == "plank" ? "planks" : "wooden_slabs"}`}
            drawer.json.add('key',key)
        }
    })
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/