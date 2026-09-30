
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/
let $EventPriority = Java.loadClass("net.neoforged.bus.api.EventPriority")
let $Rewards = Java.loadClass("com.hollingsworth.arsnouveau.setup.reward.Rewards")

let LOGGED_IN = "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent"

NativeEvents.onEvent($EventPriority.HIGHEST, LOGGED_IN, ATM => {
    try {
        $Rewards.SEND_ONE_TIME_MESSAGE = false
    } catch (err) {
        console.error(`[plush] failed to disable the Starbuncle plush reward: ${err}`)
    }
})
