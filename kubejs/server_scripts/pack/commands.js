
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
let $ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos")
ServerEvents.commandRegistry(ATM => {
    let Commands = ATM.commands
    ATM.register(Commands.literal("wsit").executes(function (CTX) {

        let level = CTX.getSource().getLevel()
        let result = Text.translate("command.kubejs.wsit.message").color(0xd77a61);
        level.structureManager().startsForStructure($ChunkPos(CTX.getSource().getPosition()), () => true).stream().forEach(ss => {
            if (ss.getBoundingBox().isInside(CTX.getSource().getPosition())) {
                result.append(Text.of("\n - ")
                    .append(Registry.of("worldgen/structure").getKey(ss.getStructure()).location())
                    .color(0xd8b4a0))
            }
        })
        if (result.getSiblings().size() > 0) {
            CTX.getSource().sendSuccess(result, false)
        } else {
            CTX.getSource().sendFailure(Text.translate("command.kubejs.wsit.error").color(0xd77a61))
        }
        return 0
    }))
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
