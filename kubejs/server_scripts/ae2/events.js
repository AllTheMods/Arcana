
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
let $LightningBolt = Java.loadClass("net.minecraft.world.entity.LightningBolt")
let $AmethystClusterBlock = Java.loadClass("net.minecraft.world.level.block.AmethystClusterBlock")
let $Direction = Java.loadClass("net.minecraft.core.Direction")
NativeEvents.onEvent("net.neoforged.neoforge.event.entity.EntityJoinLevelEvent", ATM => {
    if (ATM.getLevel().isClientSide()) return
    if (!(ATM.getEntity() instanceof $LightningBolt)) return
    let struckBlock = ATM.getLevel().getBlock(ATM.getEntity().getStrikePosition());
    if (ATM.getLevel().getBlock(ATM.getEntity().getStrikePosition()) == "ae2:flawless_budding_quartz") {
        let blocks = BlockPos.betweenClosedStream(AABB.ofBlock(ATM.getEntity().getStrikePosition()).inflate(2, 10, 2).move(0, -6, 0))
        blocks.forEach(block => {
            let [ix, iy, iz] = [block.getX(), block.getY(), block.getZ()]
            let [cx, cy, cz] = [struckBlock.getX(), struckBlock.getY(), struckBlock.getZ()]
            let [dx, dy, dz] = [ix - cx, iy - cy, iz - cz];
            let sizeX = 2.5;
            let sizeY = 7;
            let sizeZ = 2.5;
            let offsetX = 0;
            let offsetY = -7.5;
            let offsetZ = 0;
            let delta =
                ((dx - offsetX) * (dx - offsetX) / (sizeX * sizeX)) +
                ((dy - offsetY) * (dy - offsetY) / (sizeY * sizeY)) +
                ((dz - offsetZ) * (dz - offsetZ) / (sizeZ * sizeZ))
            if (delta > 1.0) return;
            if (ATM.getLevel().getBlock(block).hasTag("minecraft:sculk_replaceable")) {
                if (delta > 0.85) {
                    let $FacingProperty = $AmethystClusterBlock.FACING
                    let $PropertyDirection = $Direction.UP
                    if (dy - offsetY < 0) {
                        $PropertyDirection = $Direction.DOWN
                    }
                    ATM.getLevel().setBlockAndUpdate(block, Block.getBlock("ae2:quartz_cluster").defaultBlockState().setValue($FacingProperty, $PropertyDirection))
                } else {
                    ATM.getLevel().getBlock(block).set("ae2:quartz_block")
                }
            }
        })

    }
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/