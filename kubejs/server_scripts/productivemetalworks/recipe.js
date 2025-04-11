/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/


const melting = [
    ["occultism:emerald_dust", 100, "productivemetalworks:molten_emerald"],
    ["occultism:amethyst_dust", 100, "productivemetalworks:molten_amethyst"],
    //["occultism:iesnium_dust", 100, "productivemetalworks:molten_iesnium"],
    //["occultism:echo_dust", 100, "productivemetalworks:molten_echo"],
  ];
  
  ServerEvents.recipes(ATM => {
    melting.forEach(([input, amount, fluid]) => {
      let ingredient = { item: input };
      if (input.includes("#")) {
        ingredient = { tag: input.split("#")[1] };
      }
      ATM.custom({
          type: "productivemetalworks:item_melting",
          ingredient: ingredient,
          maximum_temperature: 0,
          minimum_temperature: 1000,
          result: [{amount: amount, id: fluid,}],
        }).id(`productivemetalworks:melting/${input.split(":")[1]}`);
    });
  }); 



/*
*    This File has been authored by AllTheMods Staff, or a Community contributor for use in `All the Magic: Arcana` by ATMTeam.
*    As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/