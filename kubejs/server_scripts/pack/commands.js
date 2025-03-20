
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
let $ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos")
ServerEvents.basicCommand("wsit", ATM => {
    if (!(ATM.getEntity().isPlayer())) return
    let level = ATM.getLevel()
    let result = Text.translate("command.kubejs.wsit.message").color(0xd77a61);
    level.structureManager().startsForStructure($ChunkPos(ATM.getPlayer().blockPosition()), ()=>true).stream().forEach(ss => {
        if (ss.getBoundingBox().isInside(ATM.getPlayer().blockPosition())) {
            result.append(Text.of("\n - ")
                .append(Registry.of("worldgen/structure").getKey(ss.getStructure()).location())
                .color(0xd8b4a0))
        }
    })
    if (result.getSiblings().size() > 0) {
        ATM.getPlayer().tell(result)
    } else {
        ATM.getPlayer().tell(Text.translate("command.kubejs.wsit.error").color(0xd77a61))
    }
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/