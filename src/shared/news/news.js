/**
 * [[`unit or equip name`, ID]]
 * 
 * Put newest at top!!
 */

const NewsArticles = [
    {
        id: 1,
        date: `July 27, 2023`,
        article: 
        {
            intro: `Hiya Summoners, Part 2 of the Fate/PRISMA☆ILLYA Collab has been officially released on the Global version, so you know what that means!`,
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
                        [`Miyu's Costume`, 152501]
                    ]
            }
        }
    },
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


