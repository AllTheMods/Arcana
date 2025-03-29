
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
RecipeViewerEvents.removeEntries(`item`, ATM => {
    let removeByID = [
        `ae2:molecular_assembler`,
        `ae2:crafting_unit`,
        `ae2:crafting_monitor`,
        `ae2:crafting_accelerator`,
        `ae2:1k_crafting_storage`,
        `ae2:4k_crafting_storage`,
        `ae2:16k_crafting_storage`,
        `ae2:64k_crafting_storage`,
        `ae2:256k_crafting_storage`,
        `ae2:spatial_anchor`,
        `ae2:crafting_card`,
        `ae2:formation_plane`,
        `ae2:annihilation_plane`,
        `ae2:pattern_encoding_terminal`,
        `ae2:pattern_access_terminal`,
        `ae2:pattern_provider`,
        `ae2:cable_pattern_provider`,
        `ae2:blank_pattern`,
        `ae2:export_bus`,
        `ae2:import_bus`,
        `ae2:energy_acceptor`,
        `ae2:cable_energy_acceptor`,
        `ae2:crystal_resonance_generator`,
        `ae2:growth_accelerator`,
        `ae2:vibration_chamber`,
    ]
    removeByID.forEach(item => {
        ATM.remove(Ingredient.of(item))
    })
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/