
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
RecipeViewerEvents.removeEntries(`item`, ATM => {
    // Vocaloid cosmetic armour sets - recipes are removed in
    // server_scripts/elemental_synergies/recipes.js, this hides the now
    // uncraftable items from the recipe viewer. Keep the two lists in sync.
    let removeByID = [
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
    removeByID.forEach(item => {
        ATM.remove(Ingredient.of(item))
    })
})
