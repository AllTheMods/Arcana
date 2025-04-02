// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
let blueprints = [
    "silentgear:rod_",
    "silentgear:pickaxe_",
    "silentgear:axe_",
    "silentgear:shovel_",
    "silentgear:sword_",
    "silentgear:sickle_",
    "silentgear:saw_",
    "silentgear:knife_",
    "silentgear:katana_",
    "silentgear:hoe_",
    "silentgear:bow_",
    "silentgear:crossbow_",
    "silentgear:shield_",
    "silentgear:helmet_",
    "silentgear:chestplate_",
    "silentgear:leggings_",
    "silentgear:boots_",
    "silentgear:bracelet_",
    "silentgear:necklace_",
    "silentgear:ring_",
    "silentgear:shears_",
    "silentgear:tip_",
    "silentgear:arrow_",
    "silentgear:machete_",
    "silentgear:trident_",
    "silentgear:spear_",
    "silentgear:dagger_",
    "silentgear:fishing_rod_",
    "silentgear:mattock_", 
    "silentgear:slingshot_",
    "silentgear:mace_",
    "silentgear:hammer_",
    "silentgear:paxel_",
    "silentgear:excavator_",
    "silentgear:prospector_hammer",
    "silentgear:tool_rod_",

]
ItemEvents.modifyTooltips(ATM => {
    ATM.modify("minecraft:crafting_table", Tooltip => {
        Tooltip.add(Text.translate("allthemods.tooltip.block_transform",
            Text.translate("key.mouse.left").color("#6cadc6").underlined(),
            Text.translate("item.minecraft.stick").underlined(),
            Text.translate("block.minecraft.crafting_table").underlined(),
            Text.join([Text.of("Vanilla "), Text.translate("block.minecraft.crafting_table")]).underlined()
        ).color("#7689fe"))
    })
    blueprints.forEach(blueprint => {
        ATM.modify(blueprint + "blueprint", Tooltip => {
            Tooltip.add(Text.translate("allthemods.tooltip.blueprint").color("#7689fe"))
        })
    })
   
   
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
