// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic - Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

BlockEvents.leftClicked((AllTheMods)=>{
    let blockConversion = {
        "visualworkbench:minecraft/crafting_table": { "minecraft:stick": "minecraft:crafting_table"}
    }
    let block = blockConversion[AllTheMods.getBlock()] ? blockConversion[AllTheMods.getBlock()][AllTheMods.getItem().id] : null;
    if (block) {
        AllTheMods.getBlock().set(block)
    }
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic - Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
