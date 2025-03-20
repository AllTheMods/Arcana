
/*

*/
StartupEvents.modifyCreativeTab("potionsmaster:creative_tab", ATM => {
    global.$PotionsMaster.forEach(Potion => {
        ATM.add(`potionsmaster:calcinated_${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
        ATM.add(`potionsmaster:${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
    })
})