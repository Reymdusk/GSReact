/**
 * [[`unit or equip name`, ID]]
 * 
 */

const NewsArticles = [
    {
        id: 0,
        date: `July 21, 2023`,
        article: 
        {
            intro: `Hey Summoners, we have yet another Collab on Japan. This time it is for Hell's Paradise.
                    Additionally, we revamped the Changelogs to be a bit cleaner. We also removed the Twitter because of the API changes.
                    The previous changelogs from before today's date will be removed, but in the future, any older changelogs will appear below the newest log.`,
            new: 
                {
                    units: 
                    [
                        [`Gabimaru`, 107797112], 
                        [`Sagiri`, 107807312]
                    ],
                    equips: 
                    [
                        [`画眉丸の服`, 152651],
                        [`佐切の刀`, 152671],
                        [`佐切の服`, 152681],
                        [`画眉丸の足袋`, 152661],
                        [`佐切の髪飾り`, 152701],
                        [`佐切の篭手`, 152691],
                        [`画眉丸のマスク`, 152631],
                        [`極『画眉丸のマスク`, 152641]
                    ]
                },
            globalUpdate:
            {
                units: [],
                equips: []
            }
        }
    },
    {
        id: 1,
        date: `July 27, 2023`,
        article: 
        {
            intro: `Hiya Summoners, Part 2 of the Fate/PRISMA☆ILLYA Collab has been officially released on the Global version, so you know what that means!
            Moreover, we have a new Summoner's Road stage being released on the Global version with 2 new 6☆ equips.`,
            new: 
                {
                    units: [],
                    equips: []
                },
            globalUpdate:
            {
                units: 
                    [
                        [`Miyu`, 107747512], 
                        [`Shirou Emiya`, 107777212]
                    ],
                    equips: 
                    [
                        [`True 'Magical Sapphire'`, 152431],
                        [`True 'Rho Aias'`, 152441],
                        [`Magical Sapphire`, 152451],
                        [`Gáe Bolg`, 152461],
                        [`Miyu's Rider Dress`, 152471],
                        [`Rho Aias`, 152481],
                        [`Shirou Emiya's Outfit`, 152491],
                        [`Miyu's Costume`, 152501],
                        [`Glacial Flail 'Dawn Devastator' Replica`, 111071],
                        [`Glacial Flail 'Dawn Devastator' Custom`, 111081]
                    ]
            }
        }
    },
    {
        id: 2,
        date: `July 31, 2023`,
        article: 
        {
            intro: `Hey Summoners, Part 2 of the Hell's Paradise Collab has been officially released on the Japanese version, alongside the 16th Floor of Elemental Ruins!
            We have a couple more units added to our database, and tons of equips.`,
            new: 
                {
                    units: 
                    [
                        [`Yuzuriha`, 107817512],
                        [`Chobei`, 107827412]
                    ],
                    equips: 
                    [
                        [`キルモンソード`, 111641],
                        [`デフモンシールド`, 111651],
                        [`タフモンロッド`, 111661],
                        [`杠の苦無`, 152711],
                        [`杠の簪`, 152721],
                        [`杠の竹筒`, 152731],
                        [`杠の服`, 152741],
                        [`弔兵衛の斧`, 152751],
                        [`弔兵衛の服`, 152761],
                        [`弔兵衛の首飾り`, 152771],
                        [`極『弔兵衛の首飾り』`, 152781]
                    ]
                },
            globalUpdate:
            {
                units: [],
                equips: []
            }
        }
    },
]

export function getNews() {
    return NewsArticles;
}

//Using == instead of === to match string to num
export function getNewsById(id) {
    return NewsArticles.find(
        newsArticle => newsArticle.date === id
    );
}


