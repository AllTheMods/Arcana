
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {
    // Elemental Synergies ships five Vocaloid cosmetic armour sets alongside its
    // boss gear. They are off-theme for Arcana, so their recipes are removed here
    // and the items are hidden from the recipe viewer in
    // client_scripts/hide/elemental_synergies.js - keep the two lists in sync.
    //   project_sekai_* = Miku's      rotten_girl_* = ''Miku's''
    //   neru_*          = Neru's      synthv2_* / utau_* = Teto's
    let removeByOutput = [
        `elemental_synergies:neru_helmet`,
        `elemental_synergies:neru_chestplate`,
        `elemental_synergies:neru_leggings`,
        `elemental_synergies:neru_boots`,
        `elemental_synergies:project_sekai_helmet`,
        `elemental_synergies:project_sekai_chestplate`,
        `elemental_synergies:project_sekai_leggings`,
        `elemental_synergies:project_sekai_boots`,
        `elemental_synergies:rotten_girl_helmet`,
        `elemental_synergies:rotten_girl_chestplate`,
        `elemental_synergies:rotten_girl_leggings`,
        `elemental_synergies:rotten_girl_boots`,
        `elemental_synergies:synthv2_helmet`,
        `elemental_synergies:synthv2_chestplate`,
        `elemental_synergies:synthv2_leggings`,
        `elemental_synergies:synthv2_boots`,
        `elemental_synergies:utau_helmet`,
        `elemental_synergies:utau_chestplate`,
        `elemental_synergies:utau_leggings`,
        `elemental_synergies:utau_boots`,
    ]
    removeByOutput.forEach(item => {
        ATM.remove({ output: item })
    })
})
