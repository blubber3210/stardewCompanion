 const model = {
    app: {
        currentPage: 'homePage',

        pages: [
            'homePage',
            'notesPage',
            'allCropsPage',
            'allFarmBuildingsPage',
            'allToolsPage',
            'allForageablesPage',
            'communityCenterPage',
            'reachPerfectionPage',
        ],
    },

    viewState: {
        notesPage: {
            title: '',
            content: '',
        },

        allCropsPage: {
            selectedSeason: '',
        },

        reachPerfectionPage: {
            itemCompleted: '',
        },
    },

    data: {
        seasons: [
            "spring",
            "summer",
            "fall",
            "winter",
        ],

        allCrops: [
            {
                id: 1,
                image: 'images/crops/springCrops/Blue_Jazz.png',
                name: "blue_jazz",
                seeds: "jazz_seeds",
                season: [
                    "spring"
                ],
                cropType: "flower",
                description: "The flower grows in a sphere to invite as many butterflies as possible.",
                note: null,
                daysToGrow: 7,
                regrowth: null,
                goldPerDay: 2.86,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 50,
                    silver: 60,
                    gold: 75,
                    iridium: 100
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 2,
                image: 'images/crops/springCrops/Carrot.png',
                name: "carrot",
                seeds: "carrot_seeds",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "A fast-growing, colorful tuber that makes for a great snack.",
                note: null,
                daysToGrow: 3,
                regrowth: null,
                goldPerDay: 11.67,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 35,
                    silver: 43,
                    gold: 52,
                    iridium: 70
                },
                energyRestored: {
                    default: 75,
                    silver: 105,
                    gold: 135,
                    iridium: 195
                },
                healthRestored: {
                    default: 33,
                    silver: 47,
                    gold: 60,
                    iridium: 87
                }
            },
            {
                id: 3,
                image: 'images/crops/springCrops/Cauliflower.png',
                name: "cauliflower",
                seeds: "cauliflower_seeds",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.",
                note: null,
                daysToGrow: 12,
                regrowth: null,
                goldPerDay: 7.92,
                canBeGiantCrop: true,
                sellPrices: {
                    default: 175,
                    silver: 218,
                    gold: 262,
                    iridium: 350
                },
                energyRestored: {
                    default: 75,
                    silver: 105,
                    gold: 135,
                    iridium: 195
                },
                healthRestored: {
                    default: 33,
                    silver: 47,
                    gold: 60,
                    iridium: 87
                }
            },
            {
                id: 4,
                image: 'images/crops/springCrops/Coffee_Bean.png',
                name: "coffee_bean",
                seeds: "coffee_bean",
                season: [
                    "spring",
                    "summer"
                ],
                cropType: null,
                description: "Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.",
                note: "Each plant yields 4 beans per harvest, with a 2% chance for more beans. Gold per day calculated with the assumption that the Coffee Bean was a monster drop, and grown for one season.",
                daysToGrow: 10,
                regrowth: 2,
                goldPerDay: 20.77,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 15,
                    silver: 18,
                    gold: 22,
                    iridium: 30
                },
                energyRestored: null,
                healthRestored: null
            },
            {
                id: 5,
                image: 'images/crops/springCrops/Garlic.png',
                name: "garlic",
                seeds: "garlic_seeds",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy.",
                note: "Available from year 2+.",
                daysToGrow: 4,
                regrowth: null,
                goldPerDay: 5,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 60,
                    silver: 75,
                    gold: 90,
                    iridium: 120
                },
                energyRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                },
                healthRestored: {
                    default: 9,
                    silver: 12,
                    gold: 16,
                    iridium: 23
                }
            },
            {
                id: 6,
                image: 'images/crops/springCrops/Green_Bean.png',
                name: "green_bean",
                seeds: "bean_starter",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "A juicy little bean with a cool, crisp snap.",
                note: "This crop uses a trellis, and continues to produce after maturity.",
                daysToGrow: 10,
                regrowth: 3,
                goldPerDay: 7.2,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 40,
                    silver: 50,
                    gold: 60,
                    iridium: 80
                },
                energyRestored: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                healthRestored: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 7,
                image: 'images/crops/springCrops/Kale.png',
                name: "kale",
                seeds: "kale_seeds",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "The waxy leaves are great in soups and stir fries.",
                note: null,
                daysToGrow: 6,
                regrowth: null,
                goldPerDay: 6.67,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 110,
                    silver: 137,
                    gold: 165,
                    iridium: 220
                },
                energyRestored: {
                    default: 50,
                    silver: 70,
                    gold: 90,
                    iridium: 130
                },
                healthRestored: {
                    default: 22,
                    silver: 31,
                    gold: 40,
                    iridium: 58
                }
            },
            {
                id: 8,
                image: 'images/crops/springCrops/Parsnip.png',
                name: "parsnip",
                seeds: "parsnip_seeds",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
                note: null,
                daysToGrow: 4,
                regrowth: null,
                goldPerDay: 3.75,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 35,
                    silver: 43,
                    gold: 52,
                    iridium: 70
                },
                energyRestored: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                healthRestored: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 9,
                image: 'images/crops/springCrops/Potato.png',
                name: "potato",
                seeds: "potato_seeds",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "A widely cultivated tuber.",
                note: "Yields at least 1 Potato at harvest, with a chance to produce, on average, 0.25 extra potatoes.",
                daysToGrow: 6,
                regrowth: null,
                goldPerDay: 5,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energyRestored: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                healthRestored: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 10,
                image: 'images/crops/springCrops/Rhubarb.png',
                name: "rhubarb",
                seeds: "rhubarb_seeds",
                season: [
                    "spring"
                ],
                cropType: "fruit",
                description: "The stalks are extremely tart, but make a great dessert when sweetened.",
                note: null,
                daysToGrow: 13,
                regrowth: null,
                goldPerDay: 9.23,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 220,
                    silver: 275,
                    gold: 330,
                    iridium: 440
                },
                energyRestored: null,
                healthRestored: null
            },
            {
                id: 11,
                image: 'images/crops/springCrops/Strawberry.png',
                name: "strawberry",
                seeds: "strawberry_seeds",
                season: [
                    "spring"
                ],
                cropType: "fruit",
                description: "A sweet, juicy favorite with an appealing red color.",
                note: "Keeps producing after maturity. When harvested, each Strawberry plant gives 1 Strawberry every 4 days, with a 2% chance for more Strawberries. If planted on Spring 13/14, it generates 11.67 gold per day.",
                daysToGrow: 8,
                regrowth: 4,
                goldPerDay: 20.83,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 120,
                    silver: 150,
                    gold: 180,
                    iridium: 240
                },
                energyRestored: {
                    default: 50,
                    silver: 70,
                    gold: 90,
                    iridium: 130
                },
                healthRestored: {
                    default: 22,
                    silver: 31,
                    gold: 40,
                    iridium: 58
                }
            },
            {
                id: 12,
                image: 'images/crops/springCrops/Tulip.png',
                name: "tulip",
                seeds: "tulip_bulb",
                season: [
                    "spring"
                ],
                cropType: "flower",
                description: "The most popular spring flower. Has a very faint sweet smell.",
                note: null,
                daysToGrow: 6,
                regrowth: null,
                goldPerDay: 1.67,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 30,
                    silver: 37,
                    gold: 45,
                    iridium: 60
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 13,
                image: 'images/crops/springCrops/Unmilled_Rice.png',
                name: "unmilled_rice",
                seeds: "rice shoot",
                season: [
                    "spring"
                ],
                cropType: "vegetable",
                description: "Rice in its rawest form. Run this through a mill to increase the value.",
                note: "Has a 10% chance of yielding more unmilled rice when harvested. When irrigated, takes 6 days to grow and generates -1.67 gold per day.",
                daysToGrow: 8,
                regrowth: null,
                goldPerDay: -1.25,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 30,
                    silver: 37,
                    gold: 45,
                    iridium: 60
                },
                energyRestored: {
                    default: 3,
                    silver: 4,
                    gold: 5,
                    iridium: 7
                },
                healthRestored: {
                    default: 1,
                    silver: 1,
                    gold: 2,
                    iridium: 3
                }
            },
            {
                id: 14,
                image: 'images/crops/summerCrops/Blueberry.png',
                name: "blueberry",
                seeds: "blueberry_seeds",
                season: [
                    "summer"
                ],
                cropType: "fruit",
                description: "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.",
                note: "Keeps producing after maturity. Each plant produces 3 blueberries at harvest, with a 2% chance for more blueberries.",
                daysToGrow: 13,
                regrowth: 4,
                goldPerDay: 20.8,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 50,
                    silver: 62,
                    gold: 75,
                    iridium: 100
                },
                energyRestored: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                healthRestored: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 15,
                image: 'images/crops/summerCrops/Corn.png',
                name: "corn",
                seeds: "corn_seeds",
                season: [
                    "summer",
                    "fall"
                ],
                cropType: "vegetable",
                description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
                note: "Keeps producing after maturity. Can be grown in Summer or Fall. Generates 7.41 gold per day when grown over two seasons.",
                daysToGrow: 14,
                regrowth: 4,
                goldPerDay: 1.92,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 50,
                    silver: 62,
                    gold: 75,
                    iridium: 100
                },
                energyRestored: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                healthRestored: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 16,
                image: 'images/crops/summerCrops/Hops.png',
                name: "hops",
                seeds: "hops_starter",
                season: [
                    "summer"
                ],
                cropType: "vegetable",
                description: "A bitter, tangy flower used to flavor beer.",
                note: "Hops use a trellis, and continue to produce after maturity.",
                daysToGrow: 11,
                regrowth: 1,
                goldPerDay: 13.52,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 25,
                    silver: 31,
                    gold: 37,
                    iridium: 50
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 17,
                image: 'images/crops/summerCrops/Hot_Pepper.png',
                name: "hot_pepper",
                seeds: "pepper_seeds",
                season: [
                    "summer"
                ],
                cropType: "fruit",
                description: "Fiery hot with a hint of sweetness.",
                note: "Keeps producing after maturity. When harvested, each Hot Pepper plant gives 1 Hot Pepper every 3 days, with a 3% for more Hot Peppers.",
                daysToGrow: 5,
                regrowth: 3,
                goldPerDay: 10.77,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 40,
                    silver: 50,
                    gold: 60,
                    iridium: 80
                },
                energyRestored: {
                    default: 13,
                    silver: 18,
                    gold: 23,
                    iridium: 33
                },
                healthRestored: {
                    default: 5,
                    silver: 8,
                    gold: 10,
                    iridium: 14
                }
            },
            {
                id: 18,
                image: 'images/crops/summerCrops/Melon.png',
                name: "melon",
                seeds: "melon_seeds",
                season: [
                    "summer"
                ],
                cropType: "fruit",
                description: "A cool, sweet summer treat.",
                note: null,
                daysToGrow: 12,
                regrowth: null,
                goldPerDay: 14.17,
                canBeGiantCrop: true,
                sellPrices: {
                    default: 250,
                    silver: 312,
                    gold: 375,
                    iridium: 500
                },
                energyRestored: {
                    default: 113,
                    silver: 158,
                    gold: 203,
                    iridium: 293
                },
                healthRestored: {
                    default: 50,
                    silver: 71,
                    gold: 91,
                    iridium: 131
                }
            },
            {
                id: 19,
                image: 'images/crops/summerCrops/Poppy.png',
                name: "poppy",
                seeds: "poppy_seeds",
                season: [
                    "summer"
                ],
                cropType: "flower",
                description: "In addition to its colorful flower, the Poppy has culinary and medicinal uses.",
                note: null,
                daysToGrow: 7,
                regrowth: null,
                goldPerDay: 5.71,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 140,
                    silver: 175,
                    gold: 210,
                    iridium: 280
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 20,
                image: 'images/crops/summerCrops/Radish.png',
                name: "radish",
                seeds: "radish_seeds",
                season: [
                    "summer"
                ],
                cropType: "vegetable",
                description: "A crisp and refreshing root vegetable with hints of pepper when eaten raw.",
                note: null,
                daysToGrow: 6,
                regrowth: null,
                goldPerDay: 8.33,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 90,
                    silver: 112,
                    gold: 135,
                    iridium: 180
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 21,
                image: 'images/crops/summerCrops/Red_Cabbage.png',
                name: "red_cabbage",
                seeds: "red_cabbage_seeds",
                season: [
                    "summer"
                ],
                cropType: "vegetable",
                description: "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.",
                note: "Available from year 2+.",
                daysToGrow: 9,
                regrowth: null,
                goldPerDay: 17.78,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 260,
                    silver: 325,
                    gold: 390,
                    iridium: 520
                },
                energyRestored: {
                    default: 75,
                    silver: 105,
                    gold: 135,
                    iridium: 195
                },
                healthRestored: {
                    default: 33,
                    silver: 47,
                    gold: 60,
                    iridium: 87
                }
            },
            {
                id: 22,
                image: 'images/crops/summerCrops/Starfruit.png',
                name: "starfruit",
                seeds: "starfruit_seeds",
                season: [
                    "summer"
                ],
                cropType: "fruit",
                description: "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone",
                note: "Not to be mistaken for Stardrop.",
                daysToGrow: 13,
                regrowth: null,
                goldPerDay: 26.92,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 750,
                    silver: 937,
                    gold: 1125,
                    iridium: 1500
                },
                energyRestored: {
                    default: 125,
                    silver: 175,
                    gold: 225,
                    iridium: 325
                },
                healthRestored: {
                    default: 56,
                    silver: 78,
                    gold: 101,
                    iridium: 146
                }
            },
            {
                id: 23,
                image: 'images/crops/summerCrops/Summer_Spangle.png',
                name: "summer_spangle",
                seeds: "spangle_seeds",
                season: [
                    "summer"
                ],
                cropType: "flower",
                description: "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.",
                note: null,
                daysToGrow: 8,
                regrowth: null,
                goldPerDay: 5,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 90,
                    silver: 112,
                    gold: 135,
                    iridium: 180
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 24,
                image: 'images/crops/summerCrops/Summer_Squash.png',
                name: "summer_squash",
                seeds: "summer_squash_seeds",
                season: [
                    "summer"
                ],
                cropType: "vegetable",
                description: "A curved yellow squash that is harvested while immature, and still tender.",
                note: "Keeps producing after maturity.",
                daysToGrow: 6,
                regrowth: 3,
                goldPerDay: 12.85,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 45,
                    silver: 56,
                    gold: 67,
                    iridium: 90
                },
                energyRestored: {
                    default: 63,
                    silver: 88,
                    gold: 113,
                    iridium: 163
                },
                healthRestored: {
                    default: 28,
                    silver: 39,
                    gold: 50,
                    iridium: 73
                }
            },
            {
                id: 25,
                image: 'images/crops/summerCrops/Sunflower.png',
                name: "sunflower",
                seeds: "sunflower_seeds",
                season: [
                    "summer",
                    "fall"
                ],
                cropType: "flower",
                description: "A common misconception is that the flower turns so it's always facing the sun.",
                note: "Harvesting a sunflower will also produce 0-2 Sunflower Seeds. Sunflowers can be grown in Summer or Fall. Gold per day does not account for reclaimed seeds.",
                daysToGrow: 8,
                regrowth: null,
                goldPerDay: -15,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 26,
                image: 'images/crops/summerCrops/Tomato.png',
                name: "tomato",
                seeds: "tomato_seeds",
                season: [
                    "summer"
                ],
                cropType: "vegetable",
                description: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses.",
                note: "Keeps producing after maturity. Each harvest produces 1 tomato, with a 5% chance for more tomatoes.",
                daysToGrow: 11,
                regrowth: 4,
                goldPerDay: 9.26,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 60,
                    silver: 75,
                    gold: 90,
                    iridium: 120
                },
                energyRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                },
                healthRestored: {
                    default: 9,
                    silver: 12,
                    gold: 16,
                    iridium: 23
                }
            },
            {
                id: 27,
                image: 'images/crops/summerCrops/Wheat.png',
                name: "wheat",
                seeds: "wheat_seeds",
                season: [
                    "summer",
                    "fall"
                ],
                cropType: "vegetable",
                description: "One of the most widely cultivated grains. Makes a great flour for breads and cakes.",
                note: "Can be grown in Summer or Fall.",
                daysToGrow: 4,
                regrowth: null,
                goldPerDay: 3.75,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 25,
                    silver: 31,
                    gold: 37,
                    iridium: 50
                },
                energyRestored: null,
                healthRestored: null
            },
            {
                id: 28,
                image: 'images/crops/fallCrops/Amaranth.png',
                name: "amaranth",
                seeds: "amaranth_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "A purple grain cultivated by an ancient civilization.",
                note: null,
                daysToGrow: 7,
                regrowth: null,
                goldPerDay: 11.43,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 150,
                    silver: 187,
                    gold: 225,
                    iridium: 300
                },
                energyRestored: {
                    default: 50,
                    silver: 70,
                    gold: 90,
                    iridium: 130
                },
                healthRestored: {
                    default: 22,
                    silver: 31,
                    gold: 40,
                    iridium: 58
                }
            },
            {
                id: 29,
                image: 'images/crops/fallCrops/Artichoke.png',
                name: "artichoke",
                seeds: "artichoke_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior.",
                note: "Available from year 2+.",
                daysToGrow: 8,
                regrowth: null,
                goldPerDay: 16.25,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 160,
                    silver: 200,
                    gold: 240,
                    iridium: 320
                },
                energyRestored: {
                    default: 30,
                    silver: 42,
                    gold: 54,
                    iridium: 78
                },
                healthRestored: {
                    default: 13,
                    silver: 18,
                    gold: 24,
                    iridium: 35
                }
            },
            {
                id: 30,
                image: 'images/crops/fallCrops/Beet.png',
                name: "beet",
                seeds: "beet_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "A sweet and earthy root vegetable. As a bonus, the leaves make a great salad.",
                note: null,
                daysToGrow: 6,
                regrowth: null,
                goldPerDay: 13.33,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 100,
                    silver: 125,
                    gold: 150,
                    iridium: 200
                },
                energyRestored: {
                    default: 30,
                    silver: 42,
                    gold: 54,
                    iridium: 78
                },
                healthRestored: {
                    default: 13,
                    silver: 18,
                    gold: 24,
                    iridium: 35
                }
            },
            {
                id: 31,
                image: 'images/crops/fallCrops/Bok_Choy.png',
                name: "bok_choy",
                seeds: "beet_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "The leafy greens and fibrous stalks are healthy and delicious.",
                note: null,
                daysToGrow: 4,
                regrowth: null,
                goldPerDay: 7.5,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energyRestored: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                healthRestored: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 32,
                image: 'images/crops/fallCrops/Broccoli.png',
                name: "broccoli",
                seeds: "broccoli_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "The flowering head of a broccoli plant. The tiny buds give it a unique texture.",
                note: "Keeps producing after maturity.",
                daysToGrow: 8,
                regrowth: 4,
                goldPerDay: 14.58,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 70,
                    silver: 87,
                    gold: 105,
                    iridium: 140
                },
                energyRestored: {
                    default: 63,
                    silver: 88,
                    gold: 113,
                    iridium: 163
                },
                healthRestored: {
                    default: 28,
                    silver: 39,
                    gold: 50,
                    iridium: 73
                }
            },
            {
                id: 33,
                image: 'images/crops/fallCrops/Cranberries.png',
                name: "cranberries",
                seeds: "cranberry_seeds",
                season: [
                    "fall"
                ],
                cropType: "fruit",
                description: "These tart red berries are a traditional winter food.",
                note: "Yields 2 berries at harvest, with a 10% chance for more berries. Keeps producing after maturity.",
                daysToGrow: 7,
                regrowth: 5,
                goldPerDay: 18.89,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 75,
                    silver: 93,
                    gold: 112,
                    iridium: 150
                },
                energyRestored: {
                    default: 38,
                    silver: 53,
                    gold: 68,
                    iridium: 98
                },
                healthRestored: {
                    default: 17,
                    silver: 23,
                    gold: 30,
                    iridium: 44
                }
            },
            {
                id: 34,
                image: 'images/crops/fallCrops/Eggplant.png',
                name: "eggplant",
                seeds: "eggplant_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "A rich and wholesome relative of the tomato. Delicious fried or stewed.",
                note: "Keeps producing after maturity. When harvested, each Eggplant bush gives 1 Eggplant every 5 days, with a 0.2% chance for more Eggplants.",
                daysToGrow: 5,
                regrowth: 5,
                goldPerDay: 11.2,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 60,
                    silver: 75,
                    gold: 90,
                    iridium: 120
                },
                energyRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                },
                healthRestored: {
                    default: 9,
                    silver: 12,
                    gold: 16,
                    iridium: 23
                }
            },
            {
                id: 35,
                image: 'images/crops/fallCrops/Fairy_Rose.png',
                name: "fairy_rose",
                seeds: "fairy_seeds",
                season: [
                    "fall"
                ],
                cropType: "flower",
                description: "An old folk legend suggests that the sweet smell of this flower attracts fairies.",
                note: null,
                daysToGrow: 12,
                regrowth: null,
                goldPerDay: 7.5,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 290,
                    silver: 362,
                    gold: 435,
                    iridium: 580
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 36,
                image: 'images/crops/fallCrops/Grape.png',
                name: "grape",
                seeds: "grape_starter",
                season: [
                    "fall"
                ],
                cropType: "fruit",
                description: "A sweet cluster of fruit.",
                note: "Grapes use a trellis, and continue to produce after maturity.",
                daysToGrow: 10,
                regrowth: 3,
                goldPerDay: 16.8,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energyRestored: {
                    default: 38,
                    silver: 53,
                    gold: 68,
                    iridium: 98
                },
                healthRestored: {
                    default: 17,
                    silver: 23,
                    gold: 30,
                    iridium: 44
                }
            },
            {
                id: 37,
                image: 'images/crops/fallCrops/Pumpkin.png',
                name: "pumpkin",
                seeds: "pumpkin_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
                note: null,
                daysToGrow: 13,
                regrowth: null,
                goldPerDay: 16.92,
                canBeGiantCrop: true,
                sellPrices: {
                    default: 320,
                    silver: 400,
                    gold: 480,
                    iridium: 640
                },
                energyRestored: null,
                healthRestored: null
            },
            {
                id: 38,
                image: 'images/crops/fallCrops/Yam.png',
                name: "yam",
                seeds: "yam_seeds",
                season: [
                    "fall"
                ],
                cropType: "vegetable",
                description: "A starchy tuber with a lot of culinary versatility.",
                note: null,
                daysToGrow: 10,
                regrowth: null,
                goldPerDay: 10,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 160,
                    silver: 200,
                    gold: 240,
                    iridium: 320
                },
                energyRestored: {
                    default: 45,
                    silver: 63,
                    gold: 81,
                    iridium: 117
                },
                healthRestored: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                }
            },
            {
                id: 39,
                image: 'images/crops/winterCrops/Powdermelon.png',
                name: "powdermelon",
                seeds: "powdermelon_seeds",
                season: [
                    "winter"
                ],
                cropType: "fruit",
                description: "Named for the powdery coating that forms on the surface, this melon is crisp and sweet, with a delicate flavor.",
                note: null,
                daysToGrow: 7,
                regrowth: null,
                goldPerDay: 8.57,
                canBeGiantCrop: true,
                sellPrices: {
                    default: 60,
                    silver: 75,
                    gold: 90,
                    iridium: 120
                },
                energyRestored: {
                    default: 63,
                    silver: 88,
                    gold: 113,
                    iridium: 163
                },
                healthRestored: {
                    default: 28,
                    silver: 39,
                    gold: 50,
                    iridium: 73
                }
            },
            {
                id: 40,
                image: 'images/crops/specialCrops/Ancient_Fruit.png',
                name: "ancient_fruit",
                seeds: "ancient_seeds",
                season: [
                    "spring",
                    "summer",
                    "fall"
                ],
                cropType: "fruit",
                description: "It's been dormant for eons.",
                note: null,
                daysToGrow: 28,
                regrowth: 7,
                goldPerDay: 57.14,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 550,
                    silver: 687,
                    gold: 825,
                    iridium: 1100
                },
                energyRestored: null,
                healthRestored: null
            },
            {
                id: 41,
                image: 'images/crops/specialCrops/Cactus_Fruit.png',
                name: "cactus_fruit",
                seeds: "cactus_seeds",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                cropType: "fruit",
                description: "The sweet fruit of the prickly pear cactus.",
                note: "Can only be grown in the Greenhouse, indoors in Garden Pots, or the Ginger Island farm.",
                daysToGrow: 12,
                regrowth: 3,
                goldPerDay: 11.11,
                canBeGiantCrop: false,
                sellPrices: {
                    default: 75,
                    silver: 93,
                    gold: 112,
                    iridium: 150
                },
                energyRestored: {
                    default: 75,
                    silver: 105,
                    gold: 135,
                    iridium: 195
                },
                healthRestored: {
                    default: 33,
                    silver: 47,
                    gold: 60,
                    iridium: 87
                },
            },
        ],

        allFarmBuildings: [
                        {
                id: 1,
                name: "barn",
                description: "Houses 4 barn-dwelling animals.",
                houses: [
                    "cows"
                ],
                price: 6000,
                requirements: [
                    {
                        amount: 350,
                        resource: "wood"
                    },
                    {
                        amount: 150,
                        resource: "stone"
                    }
                ],
                size: "7x4",
                constructionTime: "3 days"
            },
            {
                id: 2,
                name: "big_barn",
                description: "Houses 8 barn-dwelling animals. Allows animals to give birth. Unlocks goats.",
                houses: [
                    "cows",
                    "goats"
                ],
                price: 12000,
                requirements: [
                    {
                        amount: 450,
                        resource: "wood"
                    },
                    {
                        amount: 200,
                        resource: "stone"
                    }
                ],
                size: "7x4",
                constructionTime: "2 days"
            },
            {
                id: 3,
                name: "deluxe_barn",
                description: "Houses 12 barn-dwelling animals. Comes with an auto-feed system. Unlocks sheep and pigs.",
                houses: [
                    "cows",
                    "goats",
                    "sheep",
                    "pigs"
                ],
                price: 25000,
                requirements: [
                    {
                        amount: 550,
                        resource: "wood"
                    },
                    {
                        amount: 300,
                        resource: "stone"
                    }
                ],
                size: "7x4",
                constructionTime: "2 days"
            },
            {
                id: 4,
                name: "coop",
                description: "Houses 4 coop-dwelling animals.",
                houses: [
                    "chickens"
                ],
                price: 4000,
                requirements: [
                    {
                        amount: 300,
                        resource: "wood"
                    },
                    {
                        amount: 100,
                        resource: "stone"
                    }
                ],
                size: "6x3",
                constructionTime: "3 days"
            },
            {
                id: 5,
                name: "big_coop",
                description: "Houses 8 coop-dwelling animals. Comes with an incubator. Unlocks ducks.",
                houses: [
                    "chickens",
                    "ducks",
                    "dinosaurs"
                ],
                price: 10000,
                requirements: [
                    {
                        amount: 400,
                        resource: "wood"
                    },
                    {
                        amount: 150,
                        resource: "stone"
                    }
                ],
                size: "6x3",
                constructionTime: "2 days"
            },
            {
                id: 6,
                name: "deluxe_coop",
                description: "Houses 12 coop-dwelling animals. Comes with an auto-feed system. Unlocks rabbits.",
                houses: [
                    "chickens",
                    "ducks",
                    "dinosaurs",
                    "rabbits"
                ],
                price: 20000,
                requirements: [
                    {
                        amount: 500,
                        resource: "wood"
                    },
                    {
                        amount: 200,
                        resource: "stone"
                    }
                ],
                size: "6x3",
                constructionTime: "2 days"
            },
            {
                id: 7,
                name: "fish_pond",
                description: "Raise fish and harvest their produce. Fish multiply over time.",
                houses: [
                    "fish"
                ],
                price: 5000,
                requirements: [
                    {
                        amount: 200,
                        resource: "stone"
                    },
                    {
                        amount: 5,
                        resource: "seaweed"
                    },
                    {
                        amount: 5,
                        resource: "green_algae"
                    }
                ],
                size: "5x5",
                constructionTime: "2 days"
            },
            {
                id: 8,
                name: "mill",
                description: "Allows you to mill wheat, beets and rice.",
                houses: null,
                price: 2500,
                requirements: [
                    {
                        amount: 150,
                        resource: "wood"
                    },
                    {
                        amount: 50,
                        resource: "stone"
                    },
                    {
                        amount: 4,
                        resource: "cloth"
                    }
                ],
                size: "4x2",
                constructionTime: "2 days"
            },
            {
                id: 9,
                name: "shed",
                description: "An empty building. Fill it with whatever you like! The interior can be decorated.",
                houses: null,
                price: 15000,
                requirements: [
                    {
                        amount: 300,
                        resource: "wood"
                    }
                ],
                size: "7x3",
                constructionTime: "2 days"
            },
            {
                id: 10,
                name: "big_shed",
                description: "Doubles the size of the shed. The interior can be decorated.",
                houses: null,
                price: 20000,
                requirements: [
                    {
                        amount: 550,
                        resource: "wood"
                    },
                    {
                        amount: 300,
                        resource: "stone"
                    }
                ],
                size: "7x3",
                constructionTime: "2 days"
            },
            {
                id: 11,
                name: "silo",
                description: "Allows you to cut and store grass for feed.",
                houses: null,
                price: 100,
                requirements: [
                    {
                        amount: 100,
                        resource: "stone"
                    },
                    {
                        amount: 10,
                        resource: "clay"
                    },
                    {
                        amount: 5,
                        resource: "copper_bar"
                    }
                ],
                size: "3x3",
                constructionTime: "2 days"
            },
            {
                id: 12,
                name: "slime_hutch",
                description: "Raise up to 20 slimes. Fill water troughs and slimes will create slime balls.",
                houses: [
                    "slimes"
                ],
                price: 10000,
                requirements: [
                    {
                        amount: 500,
                        resource: "stone"
                    },
                    {
                        amount: 10,
                        resource: "refined_quartz"
                    },
                    {
                        amount: 1,
                        resource: "iridium_bar"
                    }
                ],
                size: "7x4",
                constructionTime: "2 days"
            },
            {
                id: 13,
                name: "stable",
                description: "Allows you to keep and ride a horse. Horse included.",
                houses: [
                    "horse"
                ],
                price: 10000,
                requirements: [
                    {
                        amount: 100,
                        resource: "hardwood"
                    },
                    {
                        amount: 5,
                        resource: "iron_bar"
                    }
                ],
                size: "4x2",
                constructionTime: "2 days"
            },
            {
                id: 14,
                name: "well",
                description: "Provides a place for you to refill your watering can.",
                houses: null,
                price: 1000,
                requirements: [
                    {
                        amount: 75,
                        resource: "stone"
                    }
                ],
                size: "3x3",
                constructionTime: "2 days"
            },
            {
                id: 15,
                name: "cabin",
                description: "A home for a friend! Subsidized by the town agricultural fund.",
                houses: [
                    "1 Farmhand in a Multiplayer game."
                ],
                price: 100,
                requirements: null,
                size: "5x3",
                constructionTime: "instant"
            },
            {
                id: 16,
                name: "shipping_bin",
                description: "Items placed in it will be included in the nightly shipment.",
                houses: null,
                price: 250,
                requirements: [
                    {
                        amount: 150,
                        resource: "wood"
                    }
                ],
                size: "2x1",
                constructionTime: "instant"
            },
            {
                id: 17,
                name: "pet_bowl",
                description: "Provides a dedicated home for one pet.",
                houses: [
                    "1 cat, dog, or turtle."
                ],
                price: 5000,
                requirements: [
                    {
                        amount: 25,
                        resource: "hardwood"
                    }
                ],
                size: "2x2",
                constructionTime: "instant"
            },
            {
                id: 18,
                name: "house_upgrade_1",
                description: "Increase house size and adds a Kitchen.",
                houses: null,
                price: 10000,
                requirements: [
                    {
                        amount: 450,
                        resource: "wood"
                    }
                ],
                size: null,
                constructionTime: "3 days"
            },
            {
                id: 19,
                name: "house_upgrade_2",
                description: "Adds two new rooms, one empty, and one with a crib and two single beds. This allows you to have two children. Both the kitchen and the bedroom are larger. Unlocks renovations and building/trim painting.",
                houses: null,
                price: 65000,
                requirements: [
                    {
                        amount: 100,
                        resource: "hardwood"
                    }
                ],
                size: null,
                constructionTime: "3 days"
            },
            {
                id: 20,
                name: "house_upgrade_3",
                description: "Adds a cellar under the house, allowing access via the kitchen. The cellar allows the player to craft and house Casks which can age specific products (i.e., Cheese, Goat Cheese, Beer, Mead, Pale Ale, and Wine) to increase their quality and value. The exterior appearance of the house remains identical.",
                houses: null,
                price: 100000,
                requirements: null,
                size: null,
                constructionTime: "3 days"
            }
        ],

        allTools: [
            {
                id: 1,
                name: "hoe",
                description: "Used to till soil and dig up Artifact Spots.",
                upgrades: [
                    {
                        level: "base",
                        name: "Hoe",
                        price: null,
                        requirements: [],
                        location: null,
                        improvements: null
                    },
                    {
                        level: "copper",
                        name: "Copper Hoe",
                        price: 2000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "copper_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Increases maximum area of effect to 3 tiles in a straight line."
                    },
                    {
                        level: "steel",
                        name: "Steel Hoe",
                        price: 5000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iron_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Increases maximum area of effect to 5 tiles in a straight line."
                    },
                    {
                        level: "gold",
                        name: "Gold Hoe",
                        price: 10000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "gold_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Increases maximum area of effect to a 3x3 area (9 corresponding tiles)."
                    },
                    {
                        level: "iridium",
                        name: "Iridium Hoe",
                        price: 25000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iridium_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Increases maximum area of effect to a 6x3 area (18 corresponding tiles)."
                    }
                ]
            },
            {
                id: 2,
                name: "pickaxe",
                description: "Used to break stones and ores.",
                upgrades: [
                    {
                        level: "base",
                        name: "Pickaxe",
                        price: null,
                        requirements: [],
                        location: null,
                        improvements: "Can break small rocks anywhere. In the Mines, can break tougher rocks on floors 1-39 in 2 hits and can break large boulders with multiple hits. Can break Copper Nodes in 3 hits. Note: Cannot break boulders on the Farm."
                    },
                    {
                        level: "copper",
                        name: "Copper Pickaxe",
                        price: 2000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "copper_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "In the Mines, can break all rocks on floors 1-39 in 1 hit and 40-79 in 2 hits. Can break Copper Nodes in 2 hits."
                    },
                    {
                        level: "steel",
                        name: "Steel Pickaxe",
                        price: 5000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iron_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Needed to break boulders on the Farm. In the Mines, can break rocks on floors 40-79 in 1 hit, and Quarry Mine rocks in 2 hits. Breaks Copper Nodes in 1 hit, Iron Nodes in 2 hits, Gold Nodes in 3 hits, and Iridium Nodes in 6 hits. Can break boulders in 4 hits. Can break the barrier inside the Mines that blocks the player from talking with the Dwarf."
                    },
                    {
                        level: "gold",
                        name: "Gold Pickaxe",
                        price: 10000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "gold_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Can break a meteorite. In the Mines, can break rocks on floors 80-120 in 1 hit. Breaks Copper and Iron Nodes in 1 hit, Gold Nodes in 2 hits, and Iridium Nodes in 4 hits. Can break boulders in the Quarry Mine in 4 hits."
                    },
                    {
                        level: "iridium",
                        name: "Iridium Pickaxe",
                        price: 25000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iridium_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Can break rocks in the Quarry Mine and Skull Cavern in 1 hit. Breaks Diamond Nodes in 2 hits and all other gem nodes in 1 hit. Can break boulders in the Quarry Mine in 3 hits."
                    }
                ]
            },
            {
                id: 3,
                name: "axe",
                description: "Used to chop wood and remove stumps.",
                upgrades: [
                    {
                        level: "base",
                        name: "Axe",
                        price: null,
                        requirements: [],
                        location: null,
                        improvements: "10 hits to chop a fully-grown tree, and 5 hits for a small stump."
                    },
                    {
                        level: "copper",
                        name: "Copper Axe",
                        price: 2000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "copper_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Can chop Large Stumps. 8 hits to chop a fully-grown tree, and 4 hits for a small stump."
                    },
                    {
                        level: "steel",
                        name: "Steel Axe",
                        price: 5000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iron_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "\tCan chop Large Logs. 6 hits to chop a fully-grown tree, and 3 hits for a small stump. 3 hits for a stage 4 tree, and 2 hits for a stage 3 tree and below."
                    },
                    {
                        level: "gold",
                        name: "Gold Axe",
                        price: 10000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "gold_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "4 hits to chop a fully-grown tree, and 2 hits for a small stump. 2 hits for a stage 4 tree, and one hit for a stage 3 tree and below."
                    },
                    {
                        level: "iridium",
                        name: "Iridium Axe",
                        price: 25000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iridium_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "2 hits to chop a fully-grown tree, and 1 hit for a small stump. 1 hit for a stage 4 tree and below."
                    }
                ]
            },
            {
                id: 4,
                name: "watering_can",
                description: "Used to water crops.",
                upgrades: [
                    {
                        level: "base",
                        name: "Watering Can",
                        price: null,
                        requirements: [],
                        location: null,
                        improvements: "Has a total water capacity of 40 charges before it has to be refilled."
                    },
                    {
                        level: "copper",
                        name: "Copper Watering Can",
                        price: 2000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "copper_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Capacity increased to 55 charges. Increases maximum area of effect to 3 tiles in a straight line."
                    },
                    {
                        level: "steel",
                        name: "Steel Watering Can",
                        price: 5000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iron_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Capacity increased to 70 charges. Increases maximum area of effect to 5 tiles in a straight line."
                    },
                    {
                        level: "gold",
                        name: "Gold Watering Can",
                        price: 10000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "gold_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Capacity increased to 85 charges. Increases maximum area of effect to a 3x3 area (9 corresponding tiles)."
                    },
                    {
                        level: "iridium",
                        name: "Iridium Watering Can",
                        price: 25000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iridium_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Capacity increased to 100 charges. Increases maximum area of effect to a 6x3 area (18 corresponding tiles)."
                    }
                ]
            },
            {
                id: 5,
                name: "trash_can",
                description: "Used to delete items from the Inventory.",
                upgrades: [
                    {
                        level: "base",
                        name: "Trash Can",
                        price: null,
                        requirements: [],
                        location: null,
                        improvements: "Used to delete items from the inventory menu."
                    },
                    {
                        level: "copper",
                        name: "Copper Trash Can",
                        price: 1000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "copper_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "When deleting items, reclaim 15% of their monetary value."
                    },
                    {
                        level: "steel",
                        name: "Steel Trash Can",
                        price: 2500,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iron_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "When deleting items, reclaim 30% of their monetary value."
                    },
                    {
                        level: "gold",
                        name: "Gold Trash Can",
                        price: 5000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "gold_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "When deleting items, reclaim 45% of their monetary value."
                    },
                    {
                        level: "iridium",
                        name: "Iridium Trash Can",
                        price: 12500,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iridium_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "When deleting items, reclaim 60% of their monetary value."
                    }
                ]
            },
            {
                id: 6,
                name: "fishing_pole",
                description: "Used to catch fish. Hold down left click to power-up the cast, use WASD or the arrow keys to slightly adjust the placement of the hook.",
                upgrades: [
                    {
                        level: null,
                        name: "Training Rod",
                        price: 25,
                        requirements: [],
                        location: "Fish Shop",
                        improvements: "Easier to use (only catches common Fish)."
                    },
                    {
                        level: null,
                        name: "Bamboo Pole",
                        price: 500,
                        requirements: [],
                        location: "Fish Shop",
                        improvements: null
                    },
                    {
                        level: null,
                        name: "Fiberglass Rod",
                        price: 1800,
                        requirements: [],
                        location: "Fish Shop",
                        improvements: "Able to use bait. Requires Fishing Level 2."
                    },
                    {
                        level: null,
                        name: "Iridium Rod",
                        price: 7500,
                        requirements: [],
                        location: "Fish Shop",
                        improvements: "Able to use bait & tackle. Requires Fishing Level 6."
                    },
                    {
                        level: null,
                        name: "Advanced Iridium Rod",
                        price: null,
                        requirements: [],
                        location: "Mastery Cave",
                        improvements: "Able to use bait & 2 tackles. Requires claiming fishing mastery."
                    }
                ]
            },
            {
                id: 7,
                name: "pan",
                description: "Used to collect ore from shimmering spots in water.",
                upgrades: [
                    {
                        level: "copper",
                        name: "Copper Pan",
                        price: 2500,
                        requirements: [],
                        location: "Fish Shop",
                        improvements: "Can find 3 to 9 ores and up to 1 special item from panning."
                    },
                    {
                        level: "steel",
                        name: "Steel Pan",
                        price: 5000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iron_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Can find 4 to 10 ores and up to 2 special items from panning. Has a small chance to spawn another panning spot."
                    },
                    {
                        level: "gold",
                        name: "Gold Pan",
                        price: 10000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "gold_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Can find 5 to 11 ores and up to 3 special items from panning. Slightly higher chance to spawn another panning spot."
                    },
                    {
                        level: "iridium",
                        name: "Iridium Pan",
                        price: 25000,
                        requirements: [
                            {
                                amount: 5,
                                resource: "iridium_bar"
                            }
                        ],
                        location: "Blacksmith",
                        improvements: "Can find 6 to 12 ores and up to 4 special items from panning. Has a high chance to spawn another panning spot."
                    }
                ]
            },
            {
                id: 8,
                name: "scythe",
                description: "It can cut grass into hay, if you've built a silo.",
                upgrades: [
                    {
                        level: null,
                        name: "Scythe",
                        price: null,
                        requirements: [],
                        location: null,
                        improvements: null
                    },
                    {
                        level: null,
                        name: "Golden Scythe",
                        price: null,
                        requirements: [],
                        location: "Quarry Mine",
                        improvements: "It's more powerful than a normal scythe."
                    },
                    {
                        level: null,
                        name: "Iridium Scythe",
                        price: null,
                        requirements: [],
                        location: null,
                        improvements: "Can be used to harvest any crops. It's also excellent at gathering hay. Requires obtaining Farming Mastery."
                    },
                ],
            },
        ],

        allForageables: [
            {
                id: 1,
                image: 'images/forage/Sap.png',
                name: "sap",
                season: null,
                found: [
                    {
                        location: "Wherever there are trees that can be chopped down",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 2,
                    silver: null,
                    gold: null,
                    iridium: null
                },
                energy: {
                    default: -5,
                    silver: null,
                    gold: null,
                    iridium: null
                },
                health: {
                    default: 0,
                    silver: null,
                    gold: null,
                    iridium: null
                }
            },
            {
                id: 2,
                image: 'images/forage/Common_Mushroom.png',
                name: "common_mushroom",
                season: [
                    "spring",
                    "summer",
                    "fall"
                ],
                found: [
                    {
                        location: "secret_woods",
                        percentage: 16,
                        season: "spring"
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: "summer"
                    },
                    {
                        location: "cindersap_forest",
                        percentage: 50,
                        season: "fall"
                    },
                    {
                        location: "secret_woods",
                        percentage: 46,
                        season: "fall"
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: "fall"
                    },
                    {
                        location: "mountain",
                        percentage: 24,
                        season: "fall"
                    },
                    {
                        location: "backwoods",
                        percentage: 24,
                        season: "fall"
                    }
                ],
                sellPrice: {
                    default: 40,
                    silver: 50,
                    gold: 60,
                    iridium: 80
                },
                energy: {
                    default: 38,
                    silver: 53,
                    gold: 68,
                    iridium: 98
                },
                health: {
                    default: 17,
                    silver: 23,
                    gold: 30,
                    iridium: 44
                }
            },
            {
                id: 3,
                image: 'images/forage/Daffodil.png',
                name: "daffodil",
                season: [
                    "spring"
                ],
                found: [
                    {
                        location: "pelican_town",
                        percentage: 100,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 45,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 45,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 30,
                    silver: 37,
                    gold: 45,
                    iridium: 60
                },
                energy: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                },
                health: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                }
            },
            {
                id: 4,
                image: 'images/forage/Dandelion.png',
                name: "dandelion",
                season: [
                    "spring"
                ],
                found: [
                    {
                        location: "cindersap_forest",
                        percentage: 50,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 35,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 35,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 40,
                    silver: 50,
                    gold: 60,
                    iridium: 80
                },
                energy: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                health: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 5,
                image: 'images/forage/Leek.png',
                name: "leek",
                season: [
                    "spring"
                ],
                found: [
                    {
                        location: "backwoods",
                        percentage: 58,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 58,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 20,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 20,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 60,
                    silver: 75,
                    gold: 90,
                    iridium: 120
                },
                energy: {
                    default: 40,
                    silver: 56,
                    gold: 72,
                    iridium: 104
                },
                health: {
                    default: 18,
                    silver: 25,
                    gold: 32,
                    iridium: 46
                }
            },
            {
                id: 6,
                image: 'images/forage/Morel.png',
                name: "morel",
                season: [
                    "spring"
                ],
                found: [
                    {
                        location: "secret_woods",
                        percentage: 32,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 150,
                    silver: 187,
                    gold: 225,
                    iridium: 300
                },
                energy: {
                    default: 20,
                    silver: 28,
                    gold: 36,
                    iridium: 52
                },
                health: {
                    default: 9,
                    silver: 12,
                    gold: 16,
                    iridium: 23
                }
            },
            {
                id: 7,
                image: 'images/forage/Salmonberry.png',
                name: "salmonberry",
                season: [
                    "spring"
                ],
                found: [
                    {
                        location: "On bushes during Salmonberry Season (Spring 15 - 18).",
                        percentage: null,
                        season: null
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 5,
                    silver: 6,
                    gold: 7,
                    iridium: 10
                },
                energy: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                health: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 8,
                image: 'images/forage/Spring_Onion.png',
                name: "spring_onion",
                season: [
                    "spring"
                ],
                found: [
                    {
                        location: "cindersap_forest",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 8,
                    silver: 10,
                    gold: 12,
                    iridium: 16
                },
                energy: {
                    default: 13,
                    silver: 18,
                    gold: 23,
                    iridium: 33
                },
                health: {
                    default: 5,
                    silver: 8,
                    gold: 10,
                    iridium: 14
                }
            },
            {
                id: 9,
                image: 'images/forage/Wild_Horseradish.png',
                name: "wild_horseradish",
                season: [
                    "spring"
                ],
                found: [
                    {
                        location: "secret_woods",
                        percentage: 52,
                        season: null
                    },
                    {
                        location: "cindersap_forest",
                        percentage: 50,
                        season: null
                    },
                    {
                        location: "backwoods",
                        percentage: 42,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 42,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 50,
                    silver: 62,
                    gold: 75,
                    iridium: 100
                },
                energy: {
                    default: 13,
                    silver: 18,
                    gold: 23,
                    iridium: 33
                },
                health: {
                    default: 5,
                    silver: 8,
                    gold: 10,
                    iridium: 14
                }
            },
            {
                id: 10,
                image: 'images/forage/Fiddlehead_Fern.png',
                name: "fiddlehead_fern",
                season: [
                    "summer"
                ],
                found: [
                    {
                        location: "secret_woods",
                        percentage: 78,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 90,
                    silver: 112,
                    gold: 135,
                    iridium: 180
                },
                energy: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                health: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 11,
                image: 'images/forage/Grape.png',
                name: "grape",
                season: [
                    "summer"
                ],
                found: [
                    {
                        location: "backwoods",
                        percentage: 62,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 62,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 27,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 27,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energy: {
                    default: 38,
                    silver: 53,
                    gold: 68,
                    iridium: 98
                },
                health: {
                    default: 17,
                    silver: 23,
                    gold: 30,
                    iridium: 44
                }
            },
            {
                id: 12,
                image: 'images/forage/RedMushroom.png',
                name: "red_mushroom",
                season: [
                    "summer",
                    "fall"
                ],
                found: [
                    {
                        location: "secret_woods",
                        percentage: 22,
                        season: "summer"
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: "fall"
                    },
                    {
                        location: "secret_woods",
                        percentage: 15,
                        season: "fall"
                    },
                    {
                        location: "mines",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 75,
                    silver: 93,
                    gold: 112,
                    iridium: 150
                },
                energy: {
                    default: -50,
                    silver: -70,
                    gold: -90,
                    iridium: -130
                },
                health: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                }
            },
            {
                id: 13,
                image: 'images/forage/Spice_Berry.png',
                name: "spice_berry",
                season: [
                    "summer"
                ],
                found: [
                    {
                        location: "cindersap_forest",
                        percentage: 40,
                        season: null
                    },
                    {
                        location: "backwoods",
                        percentage: 38,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 38,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 27,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 27,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energy: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                health: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 14,
                image: 'images/forage/Sweat_Pea.png',
                name: "sweat_pea",
                season: [
                    "summer"
                ],
                found: [
                    {
                        location: "pelican_town",
                        percentage: 100,
                        season: null
                    },
                    {
                        location: "cindersap_forest",
                        percentage: 60,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 47,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 47,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 50,
                    silver: 62,
                    gold: 75,
                    iridium: 100
                },
                energy: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                },
                health: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                }
            },
            {
                id: 15,
                image: 'images/forage/Blackberry.png',
                name: "blackberry",
                season: [
                    "fall"
                ],
                found: [
                    {
                        location: "pelican_town",
                        percentage: 100,
                        season: null
                    },
                    {
                        location: "cindersap_forest",
                        percentage: 50,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 38,
                        season: null
                    },
                    {
                        location: "On bushes during Blackberry Season (Fall 8 - 11)",
                        percentage: null,
                        season: null
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 20,
                    silver: 25,
                    gold: 30,
                    iridium: 40
                },
                energy: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                health: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 16,
                image: 'images/forage/Chanterelle.png',
                name: "chanterelle",
                season: [
                    "fall"
                ],
                found: [
                    {
                        location: "secret_woods",
                        percentage: 38,
                        season: null
                    },
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 160,
                    silver: 200,
                    gold: 240,
                    iridium: 320
                },
                energy: {
                    default: 75,
                    silver: 105,
                    gold: 135,
                    iridium: 195
                },
                health: {
                    default: 33,
                    silver: 47,
                    gold: 60,
                    iridium: 87
                }
            },
            {
                id: 17,
                image: 'images/forage/Hazelnut.png',
                name: "hazelnut",
                season: [
                    "fall"
                ],
                found: [
                    {
                        location: "backwoods",
                        percentage: 53,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 53,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 40,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 25,
                        season: null
                    },
                    {
                        location: "Shaking Maple Trees on or after Fall 14",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 90,
                    silver: 112,
                    gold: 135,
                    iridium: 180
                },
                energy: {
                    default: 30,
                    silver: 42,
                    gold: 54,
                    iridium: 78
                },
                health: {
                    default: 13,
                    silver: 18,
                    gold: 24,
                    iridium: 35
                }
            },
            {
                id: 18,
                image: 'images/forage/Purple_Mushroom.png',
                name: "purple_mushroom",
                season: [
                    "fall"
                ],
                found: [
                    {
                        location: "forest_farm",
                        percentage: 25,
                        season: null
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    },
                    {
                        location: "mines",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 250,
                    silver: 312,
                    gold: 375,
                    iridium: 500
                },
                energy: {
                    default: 125,
                    silver: 175,
                    gold: 225,
                    iridium: 325
                },
                health: {
                    default: 56,
                    silver: 78,
                    gold: 101,
                    iridium: 146
                }
            },
            {
                id: 19,
                image: 'images/forage/Wild_Plum.png',
                name: "wild_plum",
                season: [
                    "fall"
                ],
                found: [
                    {
                        location: "bus_stop",
                        percentage: 60,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 38,
                        season: null
                    },
                    {
                        location: "backwoods",
                        percentage: 24,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 24,
                        season: null
                    },
                    {
                        location: "farm_cave",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energy: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                health: {
                    default: 11,
                    silver: 15,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 20,
                image: 'images/forage/Crocus.png',
                name: "crocus",
                season: [
                    "winter"
                ],
                found: [
                    {
                        location: "pelican_town",
                        percentage: 54,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 50,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 42,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 40,
                        season: null
                    },
                    {
                        location: "cindersap_forest",
                        percentage: 39,
                        season: null
                    },
                    {
                        location: "backwoods",
                        percentage: 35,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 60,
                    silver: 75,
                    gold: 90,
                    iridium: 120
                },
                energy: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                },
                health: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                }
            },
            {
                id: 21,
                image: 'images/forage/Crystal_Fruit.png',
                name: "crystal_fruit",
                season: [
                    "winter"
                ],
                found: [
                    {
                        location: "pelican_town",
                        percentage: 8,
                        season: null
                    },
                    {
                        location: "railroad",
                        percentage: 50,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 23,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 38,
                        season: null
                    },
                    {
                        location: "cindersap_forest",
                        percentage: 39,
                        season: null
                    },
                    {
                        location: "backwoods",
                        percentage: 22,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 150,
                    silver: 187,
                    gold: 225,
                    iridium: 300
                },
                energy: {
                    default: 63,
                    silver: 88,
                    gold: 113,
                    iridium: 163
                },
                health: {
                    default: 28,
                    silver: 39,
                    gold: 50,
                    iridium: 73
                }
            },
            {
                id: 22,
                image: 'images/forage/Holly.png',
                name: "holly",
                season: [
                    "winter"
                ],
                found: [
                    {
                        location: "pelican_town",
                        percentage: 38,
                        season: null
                    },
                    {
                        location: "secret_woods",
                        percentage: 100,
                        season: null
                    },
                    {
                        location: "bus_stop",
                        percentage: 35,
                        season: null
                    },
                    {
                        location: "mountain",
                        percentage: 22,
                        season: null
                    },
                    {
                        location: "cindersap_forest",
                        percentage: 22,
                        season: null
                    },
                    {
                        location: "backwoods",
                        percentage: 43,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energy: {
                    default: -37,
                    silver: -52,
                    gold: -67,
                    iridium: -97
                },
                health: {
                    default: 0,
                    silver: 0,
                    gold: 0,
                    iridium: 0
                }
            },
            {
                id: 23,
                image: 'images/forage/Snow_Yam.png',
                name: "snow_yam",
                season: [
                    "winter"
                ],
                found: [
                    {
                        location: "Tilling soil throughout Stardew Valley",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 100,
                    silver: 125,
                    gold: 150,
                    iridium: 200
                },
                energy: {
                    default: 30,
                    silver: 42,
                    gold: 54,
                    iridium: 78
                },
                health: {
                    default: 13,
                    silver: 18,
                    gold: 24,
                    iridium: 35
                }
            },
            {
                id: 24,
                image: 'images/forage/Winter_Root.png',
                name: "winter_root",
                season: [
                    "winter"
                ],
                found: [
                    {
                        location: "Tilling soil throughout Stardew Valley",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 70,
                    silver: 87,
                    gold: 105,
                    iridium: 140
                },
                energy: {
                    default: 25,
                    silver: 35,
                    gold: 45,
                    iridium: 65
                },
                health: {
                    default: 11,
                    silver: 115,
                    gold: 20,
                    iridium: 29
                }
            },
            {
                id: 25,
                image: 'images/forage/Clam.png',
                name: "clam",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 50,
                    silver: 62,
                    gold: 75,
                    iridium: 100
                },
                energy: null,
                health: null
            },
            {
                id: 26,
                image: 'images/forage/Cockle.png',
                name: "cockle",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 50,
                    silver: 62,
                    gold: 75,
                    iridium: 100
                },
                energy: null,
                health: null
            },
            {
                id: 27,
                image: 'images/forage/Coral.png',
                name: "coral",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 80,
                    silver: 100,
                    gold: 120,
                    iridium: 160
                },
                energy: null,
                health: null
            },
            {
                id: 28,
                image: 'images/forage/Mussel.png',
                name: "mussel",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 30,
                    silver: 37,
                    gold: 45,
                    iridium: 60
                },
                energy: null,
                health: null
            },
            {
                id: 29,
                image: 'images/forage/Nautilus_Shell.png',
                name: "nautilus_shell",
                season: [
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 120,
                    silver: 150,
                    gold: 180,
                    iridium: 240
                },
                energy: null,
                health: null
            },
            {
                id: 30,
                image: 'images/forage/Oyster.png',
                name: "oyster",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 40,
                    silver: 50,
                    gold: 60,
                    iridium: 80
                },
                energy: null,
                health: null
            },
            {
                id: 31,
                image: 'images/forage/Rainbow_Shell.png',
                name: "rainbow_shell",
                season: [
                    "summer"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 300,
                    silver: 375,
                    gold: 450,
                    iridium: 600
                },
                energy: null,
                health: null
            },
            {
                id: 32,
                image: 'images/forage/Sea_Urchin.png',
                name: "sea_urchin",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 160,
                    silver: 200,
                    gold: 240,
                    iridium: 320
                },
                energy: null,
                health: null
            },
            {
                id: 32,
                image: 'images/forage/Seaweed.png',
                name: "seaweed",
                season: [
                    "spring",
                    "summer",
                    "fall",
                    "winter"
                ],
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 20,
                    silver: 25,
                    gold: 30,
                    iridium: 40
                },
                energy: null,
                health: null
            },
            {
                id: 33,
                image: 'images/forage/Cave_Carrot.png',
                name: "cave_carrot",
                season: null,
                found: [
                    {
                        location: "beach",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 25,
                    silver: null,
                    gold: null,
                    iridium: null
                },
                energy: {
                    default: 30,
                    silver: null,
                    gold: null,
                    iridium: null
                },
                health: {
                    default: 13,
                    silver: null,
                    gold: null,
                    iridium: null
                }
            },
            {
                id: 34,
                image: 'images/forage/Cactus_Fruit.png',
                name: "cactus_fruit",
                season: null,
                found: [
                    {
                        location: "desert",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 75,
                    silver: 93,
                    gold: 112,
                    iridium: 150
                },
                energy: {
                    default: 75,
                    silver: 105,
                    gold: 135,
                    iridium: 195
                },
                health: {
                    default: 33,
                    silver: 47,
                    gold: 60,
                    iridium: 87
                }
            },
            {
                id: 35,
                image: 'images/forage/Coconut.png',
                name: "coconut",
                season: null,
                found: [
                    {
                        location: "desert",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 100,
                    silver: 125,
                    gold: 150,
                    iridium: 200
                },
                energy: null,
                health: null
            },
            {
                id: 36,
                image: 'images/forage/Ginger.png',
                name: "ginger",
                season: null,
                found: [
                    {
                        location: "Throughout Ginger Island, especially Island West and Island North",
                        percentage: null,
                        season: null
                    },
                    {
                        location: "ginger_island",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 60,
                    silver: null,
                    gold: null,
                    iridium: null
                },
                energy: {
                    default: 25,
                    silver: null,
                    gold: null,
                    iridium: null
                },
                health: {
                    default: 11,
                    silver: null,
                    gold: null,
                    iridium: null
                }
            },
            {
                id: 37,
                image: 'images/forage/Magma_Cap.png',
                name: "magma_cap",
                season: null,
                found: [
                    {
                        location: "volcano_dungeon",
                        percentage: null,
                        season: null
                    },
                    {
                        location: "ginger_island",
                        percentage: null,
                        season: null
                    }
                ],
                sellPrice: {
                    default: 400,
                    silver: 500,
                    gold: 600,
                    iridium: 800
                },
                energy: {
                    default: 175,
                    silver: 245,
                    gold: 315,
                    iridium: 455
                },
                health: {
                    default: 78,
                    silver: 110,
                    gold: 141,
                    iridium: 204
                },
            },
        ],
    },
}