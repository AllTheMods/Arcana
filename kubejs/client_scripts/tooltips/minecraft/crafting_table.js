// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
let blueprints = [
    "silentgear:rod_blueprint",
    "silentgear:pickaxe_blueprint",
    "silentgear:axe_blueprint",
    "silentgear:shovel_blueprint",
    "silentgear:sword_blueprint",
    "silentgear:sickle_blueprint",
    "silentgear:saw_blueprint",
    "silentgear:knife_blueprint",
    "silentgear:katana_blueprint",
    "silentgear:hoe_blueprint",
    "silentgear:bow_blueprint",
    "silentgear:crossbow_blueprint",
    "silentgear:shield_blueprint",
    "silentgear:helmet_blueprint",
    "silentgear:chestplate_blueprint",
    "silentgear:leggings_blueprint",
    "silentgear:boots_blueprint",
    "silentgear:bracelet_blueprint",
    "silentgear:necklace_blueprint",
    "silentgear:ring_blueprint",
    "silentgear:shears_blueprint",
    "silentgear:tip_blueprint",
    "silentgear:arrow_blueprint",
    "silentgear:machete_blueprint",
    "silentgear:trident_blueprint",
    "silentgear:spear_blueprint",
    "silentgear:dagger_blueprint",
    "silentgear:fishing_rod_blueprint",
    "silentgear:mattock_blueprint", 
    "silentgear:slingshot_blueprint",
    "silentgear:mace_blueprint",
    "silentgear:hammer_blueprint",
    "silentgear:paxel_blueprint",
    "silentgear:excavator_blueprint",
    "silentgear:prospector_hammer_blueprint"

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
    blueprints.forEach((blueprint) => {
        ATM.modify(blueprint, Tooltip => {
            Tooltip.add(Text.translate("allthemods.tooltip.blueprint").color("#7689fe"))
        })
    })
   
   
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMagic Arcana.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
