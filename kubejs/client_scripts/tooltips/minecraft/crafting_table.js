// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(ATM => {
    ATM.modify("minecraft:crafting_table", Tooltip => {
        Tooltip.add(Text.translate("allthemods.tooltip.block_transform",
            Text.translate("key.mouse.left").color("#6cadc6").underlined(),
            Text.translate("item.minecraft.stick").underlined(),
            Text.translate("block.minecraft.crafting_table").underlined(),
            Text.join([Text.of("Vanilla "), Text.translate("block.minecraft.crafting_table")]).underlined()
        ).color("#7689fe"))
    })
    
   
   
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
