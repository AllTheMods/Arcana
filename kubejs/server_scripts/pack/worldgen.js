// priority: 10
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
MoreJS.structureLoad(ATM => {
    const strucBlocksReplacementMap = {
        "minecraft:netherite_block": "minecraft:air",
        "minecraft:gold_block": "minecraft:air"
    }

    const strucBlocksWithPropertiesMap = {


    }

    const jigsawReplacementMap = {
        "minecraft:netherite_block": "minecraft:air",
        "minecraft:gold_block": "minecraft:air"
    }

    function getState(block, state) {
        if (state == null) return Block.getBlock(block).defaultBlockState()
        return Block.getBlock(block).withPropertiesOf(state)
    }
    if (ATM.id.startsWith('mysticrift_pharaohs_legacy')) {
        ATM.forEachPalettes((palette) => {
            palette.forEach((struc) => {
                if (struc.block.id == "minecraft:jigsaw") {
                    let nbt = struc.nbt()
                    nbt.final_state = jigsawReplacementMap[nbt.final_state] || nbt.final_state
                }
                let newBlockWithProp = strucBlocksWithPropertiesMap[struc.block.id]
                if (newBlockWithProp) {
                    palette.add(struc.position, getState(newBlockWithProp, struc.state()))
                    return
                }
                let newBlock = strucBlocksReplacementMap[struc.block.id]
                if (newBlock) {
                    palette.add(struc.position, getState(newBlock))
                    return
                }
            })
        })
    }
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/