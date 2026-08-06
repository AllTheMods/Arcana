/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
let $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
let $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

let HALCYON_DYNAMIC_ALIASES = [
    [`minecraft:worldgen/structure`, [
        [`datanessence:abandoned_factory`, `halcyon:abandoned_factory`],
        [`datanessence:ancient_weapons_facility`, `halcyon:ancient_weapons_facility`],
        [`datanessence:arekkos_vault`, `halcyon:arekkos_vault`],
        [`datanessence:astronomy_tower`, `halcyon:astronomy_tower`],
        [`datanessence:burrows/small_01`, `halcyon:burrows/small_01`],
        [`datanessence:failed_pylon`, `halcyon:failed_pylon`],
        [`datanessence:outpost_nature`, `halcyon:outpost_nature`],
    ]],
    [`moonlight:soft_fluid`, [
        [`datanessence:cooled_water`, `halcyon:cooled_water`],
        [`datanessence:genderfluid`, `halcyon:genderfluid`],
    ]],
]

let halcyonAliasesLogged = false

LevelEvents.loaded(ATM => {
    let server = ATM.level.getServer()
    if (server == null) {
        return
    }
    let access = server.registryAccess()
    HALCYON_DYNAMIC_ALIASES.forEach(entry => {
        let found = access.registry($ResourceKey.createRegistryKey($ResourceLocation.parse(entry[0])))
        if (!found.isPresent()) {
            return
        }
        let registry = found.get()
        entry[1].forEach(pair => {
            let to = $ResourceLocation.parse(pair[1])
            let from = $ResourceLocation.parse(pair[0])
            let current = registry.get(from)
            let currentKey = current == null ? null : registry.getKey(current)
            if (currentKey == null || currentKey.toString() != pair[1]) {
                registry.addAlias(from, to)
            }
        })
        if (!halcyonAliasesLogged) {
            console.info("[halcyon] aliased " + entry[1].length + " ids in " + entry[0])
        }
    })
    halcyonAliasesLogged = true
})
