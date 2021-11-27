import ShopPage from "./shoppage.component"

const SHOP_DATA = [
  {
    id: 1,
    title: 'Plush',
    routeName: 'plush',
    items: [
      {
        id: 1,
        name: 'Piplup & Mantyke Pokémon Undersea Holiday Plush - 8 ¾ In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8237/701-29764/P8237_701-29764_01.jpg',
        price: 27.99
      },
      {
        id: 2,
        name: 'Glaceon Pokémon Undersea Holiday Plush - 8 ¾ In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8237/701-29763/P8237_701-29763_01.jpg',
        price: 19.99
      },
      {
        id: 3,
        name: 'Pikachu Pokémon Undersea Holiday Plush - 8 ¾ In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8237/701-29765/P8237_701-29765_01.jpg',
        price: 21.99
      },
      {
        id: 4,
        name: 'Spheal Pokémon Undersea Holiday Plush Key Chain',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8237/701-29758/P8237_701-29758_01.jpg',
        price: 14.99
      },
      {
        id: 5,
        name: 'Swablu Comfy Friends Plush - 14 ¼ In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7841/701-29216/P7841_701-29216_02.jpg',
        price: 35.99
      },
      {
        id: 6,
        name: 'Buizel Pokémon Undersea Holiday Plush Key Chain',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8237/701-29761/P8237_701-29761_01.jpg',
        price: 14.99
      },
      {
        id: 7,
        name: 'Gigantamax Pikachu Poké Plush - 31 ½ In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6480/701-06560/P6480_701-06560_01.jpg',
        price: 399.99
      },
      {
        id: 8,
        name: 'Lucario Poké Plush - 47 ¼ In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8133/701-94581/P8133_701-94581_02.jpg',
        price: 419.99
      },
      {
        id: 9,
        name: 'Piplup Pokémon Squishy Plush - 13 ¾ In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7730/701-29235/P7730_701-29235_01.jpg',
        price: 35.99
      }
    ]
  },
  {
    id: 2,
    title: 'figures & pins',
    routeName: 'figures&pins',
    items: [
      {
        id: 1,
        name: 'Gastly, Haunter & Gengar Pokémon Pixel Pins (3-Pack)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7185/710-08471/P7185_710-08471_01.jpg',
        price: 18.99
      },
      {
        id: 2,
        name: 'Eevee, Vaporeon, Jolteon & Flareon Pokémon Pixel Pins (4-Pack)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7185/710-08463/P7185_710-08463_01.jpg',
        price: 24.99
      },
      {
        id: 3,
        name: 'Pokémon Holiday Joy Pokémon Pins (3-Pack)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7922/710-29362/P7922_710-29362_01.jpg',
        price: 19.99
      },
      {
        id: 4,
        name: 'Pokémon Gallery Figure: Scorbunny (Quick Attack)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P5417/703-05404/P5417_703-05404_01.jpg',
        price: 14.99
      },
      {
        id: 5,
        name: 'Ditto Pokémon Pixel Pin',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7185/710-08465/P7185_710-08465_01.jpg',
        price: 7.99
      },
      {
        id: 6,
        name: 'Vulpix & Ninetales Pokémon Pins (2-Pack)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P4526/710-03523/P4526_710-03523_01.jpg',
        price: 12.99
      },
      {
        id: 7,
        name: 'Feasting with Friends Sliding Celebrations Pokémon Pin',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6235/710-05997/P6235_710-05997_01.jpg',
        price: 9.99
      },
      {
        id: 8,
        name: 'Pokémon Celebration Parade: Melody of Celebration Figure',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7387/710-08887/P7387_710-08887_01.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'game',
    routeName: 'game',
    items: [
      {
        id: 1,
        name: 'Pokémon Legends: Arceus',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8179/716-29910/P8179_716-29910_01.jpg',
        price: 59.99
      },
      {
        id: 2,
        name: 'Pokémon Shield + Pokémon Shield Expansion Pass',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7480/716-59721/P7480_716-59721_01.jpg',
        price: 89.99
      },
      {
        id: 3,
        name: 'Pokémon Brilliant Diamond & Pokémon Shining Pearl Double Pack',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P8180/716-29907/P8180_716-29907_01.jpg',
        price: 119.98
      },
      {
        id: 4,
        name: 'Sinnoh Champion Team Protection Case for Nintendo Switch by PowerA',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7909/710-29533/P7909_710-29533_01.jpg',
        price: 19.99
      },
      {
        id: 5,
        name: 'Pokémon Sword & Pokémon Shield: The Official Galar Region Strategy Guide',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6523/707-38204/P6523_707-38204_02.jpg',
        price: 24.99
      }
    ]
  },
  {
    id: 4,
    title: 'apparel',
    routeName: 'apparel',
    items: [
      {
        id: 1,
        name: 'Mimikyu Hat',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7479/741-08995/P7479_741-08995_01.jpg',
        price: 22.99
      },
      {
        id: 2,
        name: 'Pokémon Mood Collection: Pikachu Angry Fitted Crew Neck T-Shirt - Adult',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7457/741-09262/P7457_741-09262_01.jpg',
        price: 24.99
      },
      {
        id: 3,
        name: 'Mimikyu Themed French Terry Zip-Up Hoodie - Adult',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6984/741-08265/P6984_741-08265_01.jpg',
        price: 54.99
      },
      {
        id: 4,
        name: 'Magikarp Hat',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7479/741-08996/P7479_741-08996_01.jpg',
        price: 80
      },
      {
        id: 5,
        name: 'Yamper Gray Fitted Zip-Up Hoodie - Adult',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6598/741-06772/P6598_741-06772_01.jpg',
        price: 49.99
      },
      {
        id: 6,
        name: 'Pikachu Holiday Lights Knit Sweater - Adult',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7623/741-09449/P7623_741-09449_01.jpg',
        price: 44.99
      },
      {
        id: 7,
        name: 'Gengar Themed French Terry Zip-Up Hoodie - Adult',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6984/741-08277/P6984_741-08277_01.jpg',
        price: 54.99
      }
    ]
  },
  {
    id: 5,
    title: 'accessories',
    routeName: 'accessories',
    items: [
      {
        id: 1,
        name: 'Pokémon Center × RockLove: Espeon Pendant Necklace',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7132/710-08438/P7132_710-08438_08.jpg',
        price: 99.99
      },
      {
        id: 2,
        name: 'Pikachu & Eevee Tails: Running Pikachu Ring',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6363/710-06633/P6363_710-06633_01.jpg',
        price: 119.99
      },
      {
        id: 3,
        name: 'Pokémon Center × RockLove: Lapras Sterling Silver Necklace',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7765/710-29528/P7765_710-29528_04.jpg',
        price: 99.99
      },
      {
        id: 4,
        name: 'Pokémon Center × RockLove: Master Ball Locket Necklace',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7132/710-08440/P7132_710-08440_06.jpg',
        price: 64.99
      },
      {
        id: 5,
        name: 'Pokémon Center × RockLove: Mimikyu Pendant Necklace',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7132/710-08439/P7132_710-08439_08.jpg',
        price: 99.99
      },
      {
        id: 6,
        name: 'Pokémon Center × RockLove: Gengar Earrings',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7132/710-08435/P7132_710-08435_04.jpg',
        price: 84.99
      }
    ]
  },

  {
    id: 6,
    title: 'Stationery',
    routeName: 'stationery',
    items: [
      {
        id: 1,
        name: 'Pokémon Home Accents Desk Organizer',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7362/710-08895/P7362_710-08895_01.jpg',
        price: 24.99
      },
      {
        id: 2,
        name: 'Pikachu Spiral Notebook (200 Pages)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P1090/710-01101/P1090_710-01101_01.jpg',
        price: 19.99
      },
      {
        id: 3,
        name: 'Espurr & Meowstic Wanted Notecard Set (12 cards, envelopes, and seals)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P1092/710-01243/P1092_710-01243_01.jpg',
        price: 17.99
      },
      {
        id: 4,
        name: 'Graduation Pikachu 2020 Invitation Cards (10-Pack)',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P6368/710-06173/P6368_710-06173_02.jpg',
        price: 9.99
      },
      {
        id: 5,
        name: 'Pokémon TCG: Ditto As D-Ring Binder - 1 In.',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P3543/705-03161/P3543_705-03161_01.jpg',
        price: 35.99
      },
      {
        id: 6,
        name: 'Pilot × Pokémon: Pikachu Sterling Fountain Pen',
        imageUrl: 'https://www.pokemoncenter.com/products/images/P7275/710-08745/P7275_710-08745_02.jpg',
        price: 14.99
      },
    ]
  }
]

export default SHOP_DATA;