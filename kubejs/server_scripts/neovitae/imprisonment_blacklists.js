
/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/

// Blacklists all mobs already blacklisted by Apothic Spawners' Spawner Blacklist from Neo Vitae's Array of Imprisonment

ServerEvents.tags(`entity_type`, ATM => {

    ATM.add("neovitae:deny_imprisonment", "#apothic_spawners:blacklisted_from_spawners")
})


