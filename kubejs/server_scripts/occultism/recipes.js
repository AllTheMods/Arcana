
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
ServerEvents.recipes(ATM => {

    global.$PotionsMaster.forEach(Potion => {
        ATM.recipes.occultism.spirit_fire(
            Item.of(`potionsmaster:calcinated_${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`),
            Ingredient.of(`potionsmaster:${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`))
            .id(`kubejs:spirit_fire/${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
    })
    ATM.custom({
        type:"occultism:ritual",
        result: Item.of("occultism:miner_ancient_eldritch"),
        ingredients: $Pack$IngredientsOf(["allthemodium:piglich_heart","occultism:mining_dim_core","allthemodium:unobtainium_pickaxe","occultism:miner_marid_master"]),
        activation_item: Ingredient.of("occultism:book_of_binding_bound_marid"),
        pentacle_id: "occultism:contact_eldritch_spirit",
        duration: 360,
        ritual_type: "occultism:craft_miner_spirit",
        ritual_dummy: Item.of("occultism:ritual_dummy/misc_miner_ancient_eldritch")
    }).id("kubejs:miner_ancient_eldritch")
})

/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/