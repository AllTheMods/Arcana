# Changelog

# 📦 0.11.0

## 📰 General changes and notes

**BACKUP FIRST**

0.11.0 is a small pass - 13 mods updated and 2 removed, still on NeoForge 21.1.244. Read the previous changelog if you're not on 0.10.0 yet.

> [!IMPORTANT]
> **Creating a second world no longer crashes.** On 0.10.0, making or loading a second world without restarting the game crashed with a feature order cycle. 

> **Attributification has been removed.** It was meant to unify the mana and stat systems across the magic mods, but it is too much of a mess to set up correctly and cannot unify them fully.

Structures sit noticeably closer together: Sparse Structures now uses a spread factor of 1.2 rather than its default of 2. This only affects chunks generated from here on, so existing explored areas are unchanged.

<details open>
<summary>Pack changes :octocat:</summary>
<blockquote>

- Fixed a crash when creating or loading a second world without restarting the game (LobsterJonn)
- Structures are less spread out, with the Sparse Structures spread factor lowered from 2 to 1.2 (LobsterJonn)
- Restored 25 Pam's HarvestCraft foods to the rabbit food tag, which a malformed tag file in the mod had been dropping (#194) (LobsterJonn)

</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Updated (13)</summary>

- apotheosis (8.6.0 > 8.6.1)
- ars_nouveau (5.12.1 > 5.13.0)
- ars_ocultas (2.4.1 > 2.5.0)
- cyclopscore (1.29.1 > 1.29.2)
- ftbchunks (2101.1.20 > 2101.1.21)
- ftblibrary (2101.1.33 > 2101.1.34)
- ftbquests (2101.1.27 > 2101.1.28)
- ftbxmodcompat (21.1.9 > 21.1.10)
- jei (19.39.0.372 > 19.42.0.385)
- journeymap (1.21.1-6.0.1 > 1.21.1-6.0.2)
- minecolonies (1.1.1358-1.21.1-snapshot > 1.1.1362-1.21.1-snapshot)
- mysticalagradditions (8.0.13 > 8.0.14)
- scriptor (2.0.7-1.21.1 > 2.0.8-1.21.1)

</details>

<details open>
<summary>Removed (2)</summary>

- Attributification (2.0.5)
- Fzzy Config (0.7.6+1.21+neoforge)

</details>
