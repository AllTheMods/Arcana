
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
BlockEvents.leftClicked(ATM => {
    let blockConversion = {
        "visualworkbench:minecraft/crafting_table": { "minecraft:stick": "minecraft:crafting_table" }
    }
    let block = blockConversion[ATM.getBlock()] ? blockConversion[ATM.getBlock()][ATM.getItem().id] : null;
    if (block) {
        ATM.getBlock().set(block)
        let pos = ATM.getBlock().getPos();
        ATM.getLevel().spawnParticles("minecraft:end_rod", false, pos.getX() + 0.5, pos.getY() + 1.1, pos.getZ() + 0.5, 0.25, 0, 0.25, 20, 0.01)
    }
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/