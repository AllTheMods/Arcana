// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    for (let i = 1; i < 10; ++i) {
        allthemods
            .smelting(`allthecompressed:glass_${i}x`, `allthecompressed:sand_${i}x`)
            .cookingTime(200 * 9 * i)
            .id(`allthemods:smelting/sand_${i}x_to_glass_${i}x`);
    }
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
