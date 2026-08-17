/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
let $HalcyonNeoForge = Java.loadClass("net.neoforged.neoforge.common.NeoForge")
let $HalcyonEventPriority = Java.loadClass("net.neoforged.bus.api.EventPriority")
let $HalcyonResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

let HALCYON_OLD_NS = "datanessence"
let HALCYON_NEW_NS = "halcyon"
let HALCYON_MIGRATED_KEY = "halcyon_ids_migrated"

StartupEvents.postInit(() => {
    let $AdvancementProgressed = Java.loadClass("net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent")
    let $RightClickBlock = Java.loadClass("net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock")
    let $ServerPlayer = Java.loadClass("net.minecraft.server.level.ServerPlayer")
    let $ItemHandlerCapability = Java.loadClass("net.neoforged.neoforge.capabilities.Capabilities$ItemHandler")

    let $Attachments = null
    let $Components = null
    let $PlayerDataUtil = null
    let $AncientDataBankBlockEntity = null
    let $ComputerBlockEntity = null
    let $DataBankBlockEntity = null

    try {
        $Attachments = Java.loadClass("EsetKalenko.Halcyon.registry.AttachmentTypeRegistry")
        $Components = Java.loadClass("EsetKalenko.Halcyon.registry.DataComponentRegistry")
        $PlayerDataUtil = Java.loadClass("EsetKalenko.Halcyon.api.util.PlayerDataUtil")
        $AncientDataBankBlockEntity = Java.loadClass("EsetKalenko.Halcyon.block.technical.AncientDataBankBlockEntity")
        $ComputerBlockEntity = Java.loadClass("EsetKalenko.Halcyon.block.technical.ComputerBlockEntity")
        $DataBankBlockEntity = Java.loadClass("EsetKalenko.Halcyon.block.auxiliary.DataBankBlockEntity")
    } catch (err) {
        console.warn("[halcyon] data migration inactive, mod classes not found: " + err)
        return
    }

    let DATA_ID = $Components.DATA_ID.get()
    let SHAPING_IMPRESSION = $Components.SHAPING_IMPRESSION.get()

    let migrateId = (id) => {
        if (id == null) return null
        if (id.getNamespace() != HALCYON_OLD_NS) return null
        return $HalcyonResourceLocation.fromNamespaceAndPath(HALCYON_NEW_NS, id.getPath())
    }

    let migrateList = (list) => {
        if (list == null || list.isEmpty()) return false
        let out = []
        let dirty = false
        let i = 0
        let cur = null
        let next = null
        for (i = 0; i < list.size(); i++) {
            cur = list.get(i)
            next = migrateId(cur)
            if (next == null) {
                out.push(cur)
            } else {
                out.push(next)
                dirty = true
            }
        }
        if (!dirty) return false
        list.clear()
        for (i = 0; i < out.length; i++) {
            list.add(out[i])
        }
        return true
    }

    let migrateMap = (map) => {
        if (map == null || map.isEmpty()) return false
        let keys = []
        let values = []
        let dirty = false
        let it = map.keySet().iterator()
        let key = null
        let next = null
        let i = 0
        while (it.hasNext()) {
            key = it.next()
            next = migrateId(key)
            values.push(map.get(key))
            if (next == null) {
                keys.push(key)
            } else {
                keys.push(next)
                dirty = true
            }
        }
        if (!dirty) return false
        map.clear()
        for (i = 0; i < keys.length; i++) {
            map.put(keys[i], values[i])
        }
        return true
    }

    let migrateStack = (stack) => {
        if (stack == null || stack.isEmpty()) return false
        let dirty = false
        let next = null
        if (stack.has(DATA_ID)) {
            next = migrateId(stack.get(DATA_ID))
            if (next != null) {
                stack.set(DATA_ID, next)
                dirty = true
            }
        }
        if (stack.has(SHAPING_IMPRESSION)) {
            next = migrateId(stack.get(SHAPING_IMPRESSION))
            if (next != null) {
                stack.set(SHAPING_IMPRESSION, next)
                dirty = true
            }
        }
        return dirty
    }

    let migrateContainer = (container) => {
        if (container == null) return 0
        let fixed = 0
        let i = 0
        for (i = 0; i < container.getContainerSize(); i++) {
            if (migrateStack(container.getItem(i))) fixed++
        }
        return fixed
    }

    let migrateItemHandler = (handler) => {
        if (handler == null) return 0
        let fixed = 0
        let i = 0
        for (i = 0; i < handler.getSlots(); i++) {
            if (migrateStack(handler.getStackInSlot(i))) fixed++
        }
        return fixed
    }

    let migratePlayer = (player) => {
        if (player == null) return
        let tag = player.getPersistentData()
        if (tag.getBoolean(HALCYON_MIGRATED_KEY)) return

        let changed = false
        if (migrateList(player.getData($Attachments.UNLOCKED))) changed = true
        if (migrateList(player.getData($Attachments.INCOMPLETE))) changed = true
        if (migrateMap(player.getData($Attachments.INCOMPLETE_STAGES))) changed = true
        if (migrateMap(player.getData($Attachments.UNLOCKED_ESSENCES))) changed = true

        let items = migrateContainer(player.getInventory())
        items += migrateContainer(player.getEnderChestInventory())

        tag.putBoolean(HALCYON_MIGRATED_KEY, true)

        if (!changed && items == 0) return

        if (player instanceof $ServerPlayer && player.connection != null) {
            try {
                $PlayerDataUtil.updateData(player)
                $PlayerDataUtil.updateUnlockedEntries(player)
            } catch (err) {
                console.warn("[halcyon] converted data for " + player.getName().getString()
                    + " but could not resync yet: " + err)
            }
        }
        console.info("[halcyon] migrated datanessence ids for " + player.getName().getString()
            + " (progression: " + changed + ", item stacks: " + items + ")")
    }

    let migrateBlockEntity = (level, pos) => {
        let be = level.getBlockEntity(pos)
        if (be == null) return
        let next = null
        let dirty = false

        if (be instanceof $AncientDataBankBlockEntity || be instanceof $ComputerBlockEntity) {
            next = migrateId(be.type)
            if (next != null) {
                be.type = next
                dirty = true
            }
        } else if (be instanceof $DataBankBlockEntity) {
            if (migrateList(be.data)) dirty = true
        }

        if (migrateItemHandler(level.getCapability($ItemHandlerCapability.BLOCK, pos, null)) > 0) dirty = true

        if (dirty) {
            be.setChanged()
            console.info("[halcyon] migrated datanessence ids in block entity at " + pos)
        }
    }

    $HalcyonNeoForge.EVENT_BUS.addListener($HalcyonEventPriority.HIGHEST, false, $AdvancementProgressed, (event) => {
        migratePlayer(event.getEntity())
    })

    $HalcyonNeoForge.EVENT_BUS.addListener($HalcyonEventPriority.HIGHEST, false, $RightClickBlock, (event) => {
        if (event.getLevel().isClientSide()) return
        migratePlayer(event.getEntity())
        migrateBlockEntity(event.getLevel(), event.getPos())
    })
})
