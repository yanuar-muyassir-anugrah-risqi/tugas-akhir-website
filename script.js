const levels = [
  { rank: 1, name: "GRIEF", creator: "icedcave", version: "2.2", tags: ["2.2", "XL", "Fast-Paced", "Timings", "ChokePoints", "Learny", "High CPS", "Nerve Control", "Wave"], views: "6,4M", likes: "312K", description: "One of the most anticipated top 1s in the game's history, with a verification process spanning 396 streams and a cumulative playtime of 922 hours; currently the hardest level in the game.", videoId: "gB8slBPlOjc", levelId: "149992717", password: "free copy", length: "2M:45S", objectCount: "189605", difficulty: "Extreme Demon", song: "KzX - Stalemate by Kayoszx", songId: "482872" },
  { rank: 2, name: "Artemis 13", creator: "Mvngo", version: "2.2", tags: ["2.2", "Long", "NONG", "Timings", "Overall"], views: "1,46M", likes: "34K", description: "A monochrome design level featuring many clubstep monsters scattered throughout. It was originally harder before being nerfed by Zoink following a controversy surrounding the original host. Features an extremely hard ship at 19%", videoId: "FgjOM0ef1N8", levelId: "148598469", password: "free copy", length: "1M:15S", objectCount: "51879", difficulty: "Extreme Demon", song: "~NK~ Headrush by Rukkus", songId: "462046" },
  { rank: 3, name: "Society", creator: "Neomarbilan", version: "2.2", tags: ["2.2", "Long", "NONG", "Fast-Paced", "Timings", "Chokepoints", "Learny", "Nerve Control", "Ship", "Wave"], views: "1,26M", likes: "30K", description: "The sequel to Escalator and a nerfed impossible level. Featuring a dreamcore/weirdcore aesthetic, it is filled with references and explores themes of mental instability.", videoId: "3CoEaH1CM7o", levelId: "127323087", password: "free copy", length: "2M:12S", objectCount: "167383", difficulty: "Extreme Demon", song: "Pathetic - Society (Remix) by HelliXScream", songId: "1569886" },
  { rank: 4, name: "Thinking Space II", creator: "CairoX", version: "2.2", tags: ["2.2", "Long", "Timings", "Chokepoints", "Unbalanced", "High CPS", "Nerve Control", "Ship", "Wave"], views: "4,8M", likes: "85K", description: "An official sequel to Thinking Space and former top 1. Unlike the original, its decoration is in a glow design style, but it's more similar in gameplay as it has several gameplay references to the original and is also extremely end carried. The first top 1 in many years that was not built intentionally to be top 1.", videoId: "CELNmHwln_c", levelId: "119544028", password: "free copy", length: "1M:07S", objectCount: "139568", difficulty: "Extreme Demon", song: "Nuke Powder by MaelouX", songId: "489111" },
  { rank: 5, name: "Amethyst", creator: "iMist", version: "2.2", tags: ["2.2", "Long", "Timings", "Chokepoints", "Wave"], views: "1,8M", likes: "38K", description: "A former top 1, dethroning Tidal Wave after two years. It's inspired by The Golden, including a cave decoration with rocks, geodes, and purple and pink crystals. The gameplay consists of a lot of extremely hard waves and ship gameplay, similar to The Golden but with an extension and a random 240 frame perfect first click.", videoId: "4lfkzz1VCbA", levelId: "119550490", password: "free copy", length: "1M:42S", objectCount: "147423", difficulty: "Extreme Demon", song: "-Ricochet Love- by Waterflame", songId: "233860" },
  { rank: 6, name: "Flamewall", creator: "Narwall", version: "2.2", tags: ["2.2", "XXL+", "Fast-Paced", "Nerve Control", "Overall"], views: "1,96M", likes: "64K", description: "Almost seven minutes of extremely fast and challenging gameplay, using a similarly very fast and dramatic symphonic metal song, and featuring very few break sections for its length. Features a gargantuan roster of creators and took multiple years to come out, in part thanks to the verifier dying at 99% twice.", videoId: "x4Io4zkWVRw", levelId: "126242564", password: "free copy", length: "6M:39S", objectCount: "413736", difficulty: "Extreme Demon", song: "Flamewall by Camellia", songId: "10007151" },
  { rank: 7, name: "Tidal Wave", creator: "OniLink", version: "2.2", tags: ["2.1", "XXL", "NONG", "Fast-Paced", "Timings", "Nerve Control", "Wave"], views: "11M", likes: "211K", description: "A former Top 1 and Onilink's first rated level, featuring incredibly difficult wave sections spread over its 3 minute runtime. Unlike most other top 1s, this level takes a very different approach to its style, theming it around the ocean and the beach with its blue and yellow colour scheme.", videoId: "9fsZ014qB3s", levelId: "86407629", password: "free copy", length: "2M:58S", objectCount: "220116", difficulty: "Extreme Demon", song: "Tidal Wave(Shiawase VIP rmx) by RunoNG", songId: "1266014" },
  { rank: 8, name: "Green Bullet", creator: "cherryteam", version: "2.2", tags: ["2.2", "XL", "Clicksync", "Fast-Paced", "Timings", "Chokepoints", "Learny", "Flow", "Nerve Control", "Cube", "Ship", "Wave"], views: "340K", likes: "10K", description: "Formerly known as “0 Bullet,” Created in collaboration with MiNaY & cherryteam as their hardest level yet. It showcases a neon-green structure throughout, and has fast-paced timings with excruciatingly tight gaps in-between. Its placement kicked Zodiac out of the top 150 after over 7 years.", videoId: "JG-qcvVkZFw", levelId: "142896409", password: "free copy", length: "2M:06S", objectCount: "197825", difficulty: "Extreme Demon", song: "Bossfight - Decimate by Bossfight", songId: "1308682" },
  { rank: 9, name: "ORBIT", creator: "MindCap", version: "2.2", tags: ["2.2", "XL", "Fast-Paced", "Timings", "Learny", "Gimmicky", "Nerve Control", "Cube"], views: "3,2M", likes: "103K", description: "One of Mindcap's most ambitious projects to date, filled with over 2 minutes of fast-paced timings, all of which are orb clicks. The decoration is themed around space and gravity with depictions of celestial objects, black holes, and a ship part where you travel through a wormhole. Don't fall into The Ball Pit™.", videoId: "QKcv8DkNPd0", levelId: "133175713", password: "free copy", length: "2M:42S", objectCount: "310472", difficulty: "Extreme Demon", song: "NightHawk22 - Animation Warrior Theme", songId: "80273" },
  { rank: 10, name: "Antarctic Lights", creator: "declanlc", version: "2.2", tags: ["2.2", "Long", "Circles", "High CPS", "Wave"], views: "424K", likes: "10K", description: "The current hardest Nine Circles level in the game. Remake of Arctic Lights with improved decoration and a gigantic increase in difficulty, which is why it took almost 3 years to get verified", videoId: "Uue4ZRhVf-I", levelId: "144988390", password: "free copy", length: "58S", objectCount: "54900", difficulty: "Extreme Demon", song: "~NK~ Fear Me (NGADm Entry) by Rukkus", songId: "428157" },
  { rank: 11, name: "Nullscapes", creator: "Kiba", version: "2.2", tags: ["2.2", "Long", "Timings", "Learny", "Slow-Paced", "Robot"], views: "2,7M", likes: "56K", description: "The sequel to Shardscapes and the current hardest level to use one gamemode, that being robot. Expanding on its predecessor, it features more noticeable progression, an orb cycling gimmick and most importantly much more unforgiving gameplay. Includes a CBF blocker which has sparked a significant amount of controversy within the community.", videoId: "EztneTPp5CU", levelId: "109780665", password: "free copy", length: "1M:16S", objectCount: "63303", difficulty: "Extreme Demon", song: "Creo - Flow by CreoMusic", songId: "1132447" },
  { rank: 12, name: "Quanteuse processing", creator: "Renn241", version: "2.2", tags: ["2.2", "Long", "Timings", "Learny", "Gimmicky", "Slow-Paced", "Wave"], views: "1,4M", likes: "32K", description: "An uncanny and extremely raw superbuffed remake of the main level Blast Processing, with gameplay by Renn241 and Blankb. Not meant to be a serious level.", videoId: "j5NC0u1Q91Q", levelId: "117692518", password: "free copy", length: "1M:13S", objectCount: "45622", difficulty: "Extreme Demon", song: "Waterflame - Blast Processing", songId: "N/A" },
  { rank: 13, name: "BOOBAWAMBA", creator: "Akunakunn", version: "2.2", tags: ["2.2", "XL", "Memory", "Gimmicky", "Nerve Control", "Ship"], views: "1,5M", likes: "26K", description: "The current hardest memory extreme, themed around a dark abandoned factory with limited visibility. Features a randomized ending where five details throughout the level determine whether or not to click their corresponding toggle triggers. Built over the course of two years and thousands of hours, Akunakun considers this his magnum opus.", videoId: "20fYiqLAo_E", levelId: "110816181", password: "free copy", length: "2M:24S", objectCount: "92583", difficulty: "Extreme Demon", song: "Portal To The Other Side (feat. Hatsune Miku) by nandinanubis", songId: "941913" },
  { rank: 14, name: "The Bloop", creator: "[TARIQ] murkkat", version: "2.2", tags: ["2.2", "Long", "Fast-Paced", "Chokepoints", "Nerve Control", "Wave"], views: "813K", likes: "23K", description: "Beware the path this monster takes - Ozlip Inspired by Kenos, verified by Zoink.", videoId: "ROuXHSKEhHA", levelId: "135661111", password: "free copy", length: "1M:52S", objectCount: "108908", difficulty: "Extreme Demon", song: "We Are All Funked by larrynachos", songId: "890355" },
  { rank: 15, name: "Every End", creator: "MindCap", version: "2.2", tags: ["2.2", "XXL+", "Timings", "Slow-Paced", "Nerve Control", "Cube"], views: "1,1MK", likes: "34K", description: "The hardest endurance level in Geometry Dash, featuring over 7 minutes of simple yet brutal 1.0 cube timings. Its difficulty balancing and specific skillset have lead it to being very accessible for a top level. Despite its simple 1.0 aesthetic, its technically impressive background effect involved the usage of third party software developed by Absolute.", videoId: "KexrBfBCZJA", levelId: "116174063", password: "free copy", length: "9M:04S", objectCount: "326380", difficulty: "Extreme Demon", song: "Every End... by Dimrain47", songId: "99477" },
  { rank: 16, name: "Ashley Wave Trials", creator: "oddmod", version: "2.2", tags: ["2.2", "Wave", "Fast-Paced"], views: "2,6M", likes: "60K", description: "My first time decorating like this!! ^^ Verified by Zoink", videoId: "aTxt76U3e2Q", levelId: "62912799", password: "free copy", length: "2M:10S", objectCount: "37725", difficulty: "Extreme Demon", song: "Dr. Finkelfrackens Cure by bossfightofficial", songId: "383158" },
  { rank: 17, name: "Old Orochi", creator: "Platnuu", version: "2.2", tags: ["2.2", "Fast-Paced"], views: "308K", likes: "16K", description: "Verified by SeptaGon7", videoId: "YxtFAQtLYQY", levelId: "136742562", password: "free copy", length: "1M:40S", objectCount: "71820", difficulty: "Extreme Demon", song: "Yomi yori Kikoyu Koukoku no Hi to Honoo no Shoujo by Monumia", songId: "1389624" },
  { rank: 18, name: "Silent Clubstep", creator: "TheRealSailent", version: "2.1", tags: ["1.8", "Long", "Timings", "Chokepoints", "Unbalanced", "Mirror", "Cube", "Ship"], views: "2,42M", likes: "74K", description: "One of the most legendary and recognizable levels in Geometry Dash. Formerly impossible and was initially hack-verified by Sailent in 1.8. Houses the '8 Jumps of Hell' and the infamous 6% ship part, among other classic sections.", videoId: "GR4OMkS3SN8", levelId: "4125776", password: "No copy", length: "1M:27S", objectCount: "10906", difficulty: "Extreme Demon", song: "dj-Nate Clubstep", songId: "N/A" },
  { rank: 19, name: "Ultra Paracosm", creator: "declanlc", version: "2.2", tags: ["2.2", "Long", "Circles", "Timings", "Chokepoints", "High CPS", "Nerve Control", "Wave"], views: "159K", likes: "3,6K", description: "Superbuffed remake of Hyper Paracosm, created by declanlc and Renn241. Notably extremely first half heavy, with most of the difficulty concentrated in the first wave parts. Sadly not the easy demon", videoId: "4V24spYQWuE", levelId: "138704906", password: "free copy", length: "1M:11S", objectCount: "69425", difficulty: "Extreme Demon", song: "~NK~ TruthOrDare featJrounds by Rukkus", songId: "469490" },
  { rank: 20, name: "Penumbral", creator: "cherryteam", version: "2.2", tags: ["2.2", "Long", "Timings", "Ship", "Wave"], views: "234K", likes: "5,5K", description: "Currently the second-hardest CherryTeam level on the list, featuring an intense, flashy monochromatic palette and brutal ship and wave chokepoints. The first extreme demon to use xStep as its song.", videoId: "nVHPFf13M-I", levelId: "134942736", password: "free copy", length: "1M:31S", objectCount: "87887", difficulty: "Extreme Demon", song: "DJVI - xStep", songId: "N/A" },
  { rank: 21, name: "Andromeda", creator: "Insxne97", version: "2.2", tags: ["2.2", "Long", "NONG", "Fast-Paced", "Timings", "Chokepoints", "Unbalanced", "Learny", "High CPS", "Wave"], views: "458K", likes: "9K", description: "Relatively unknown considering its difficulty. Pink and purple space themed level with incredibly high-CPS gameplay and flashy visuals. Took over a year to be completed.", videoId: "mk3TDemdkC0", levelId: "114283297", password: "free copy", length: "1M:15S", objectCount: "179343", difficulty: "Extreme Demon", song: "omnipresent (AIM 2023) by WakerLink", songId: "1216127" },
  { rank: 22, name: "KILLSTEALER", creator: "rynoxious", version: "2.2", tags: ["2.2", "XXL", "Fast-Paced", "Learny", "Nerve Control", "Overall"], views: "129K", likes: "2,8K", description: "[2020 - 2026] A reimagining of Kill Stealer by Dzeser. Hosted by Rynoxious and Asterion - Verified by kloone.", videoId: "uhH4oqWrsfo", levelId: "138781722", password: "free copy", length: "4M:05S", objectCount: "372225", difficulty: "Extreme Demon", song: "-Killstealer- by Waterflame", songId: "433359" },
  { rank: 23, name: "Subsuming Vortex", creator: "[TCD] Cursed", version: "2.2", tags: ["2.2", "Fast-Paced", "Long", "Wave"], views: "721K", likes: "21K", description: "The hardest nine circles level... at the time // By SeptaGon7 and Renn241", videoId: "0eYG1ogJpIQ", levelId: "127997391", password: "free copy", length: "1M:06S", objectCount: "71248", difficulty: "Extreme Demon", song: "NK - Sine Wavs by Rukkus", songId: "512976" },
  { rank: 24, name: "Anathema", creator: "nikroplays", version: "2.2", tags: ["2.2", "High CPS", "Fast-Paced", "XL"], views: "848K", likes: "20K", description: "After 9 long years, The Dedication Series finally comes to a close. Dedicated to everyone who has supported me along the way. Verified by Whizkid05.", videoId: "_uKwmjHmySI", levelId: "112313819", password: "free copy", length: "2M:27S", objectCount: "287445", difficulty: "Extreme Demon", song: "I Cant Fix You feat. Crusher-P by TheLivingTombstone", songId: "717444" },
  { rank: 25, name: "Defeated Circles", creator: "GXQ", version: "2.2", tags: ["2.2", "Long", "NONG", "Circles", "Timings", "Wave"], views: "1M", likes: "21K", description: "A Nine Circles styled level which takes heavy inspiration from the 'You So Defeated' challenges, being especially apparent in the level's timing-based segments and its song choice. The level is overall first-half heavy, though the difficulty does not step down much in the latter half, ending off on a dual wave and a spam corridor.", videoId: "nU5AQPzd2YA", levelId: "120012581", password: "free copy", length: "1M:1S", objectCount: "84292", difficulty: "Extreme Demon", song: "It Passed You By by SlendStone", songId: "1234816" },
  { rank: 26, name: "Avernus", creator: "PockeWindfish", version: "2.1", tags: ["2.1", "Long", "Fast-Paced","High CPS", "Ship", "Wave"], views: "1,9M", likes: "33K", description: "Well-known, poorly received, but unexpectedly enjoyable hell themed extreme which has gone through its fair share of controversy. Recognizable for its fixed hitboxes and ridiculous ship and wave sections.", videoId: "16Zh8jssanc", levelId: "89496627", password: "030607", length: "1M:22S", objectCount: "163917", difficulty: "Extreme Demon", song: "F-777 Dark Dragon Fire by F-777", songId: "91656" },
  { rank: 27, name: "FOREST OF SPIKES", creator: "bims", version: "2.2", tags: ["2.2", "Long", "Timings", "Chokepoints", "Unbalanced", "Learny", "Gimmicky", "Overall"], views: "136K", likes: "4K", description: "Tight and claustrophobic level set to a very intense Waterflame track. Themed around spikes, with nearly 50% of all objects in the level being a variant of spike. Very first-half carried, and contains an ending where you must identify and count flashing eyes and must click accordingly to avoid crashing a command prompt.", videoId: "WJYh3dW8Bfo", levelId: "145709435", password: "free copy", length: "1M:49S", objectCount: "83473", difficulty: "Extreme Demon", song: "Nightmare Forest by Waterflame", songId: "1485273" },
  { rank: 28, name: "Acheron", creator: "ryamu", version: "2.2", tags: ["2.1", "Long", "Fast-Paced", "Timings", "Chokepoints", "Unbalanced", "Ship"], views: "3,83M", likes: "70K", description: "Iconic sequel to Tartarus. Intimidating 1.9 styled level that gradually gets less red and more black as it continues. Known for its impossibly tight wave sections & chokepoints.", videoId: "sBKR6aUorzA", levelId: "73667628", password: "free copy", length: "1M:7S", objectCount: "47984", difficulty: "Extreme Demon", song: "{dj-N} Thermodynamix by dj-Nate", songId: "770520" },
  { rank: 29, name: "Spectre", creator: "xander", version: "2.2", tags: ["2.2", "XL", "Timings", "Chokepoints", "Unbalanced", "Learny", "Nerve Control", "Overall"], views: "548K", likes: "16K", description: "Zodiac sequel that was in the works for 4 years. Vaguely cool-toned with many parts by some of the most famous creators, like CuLuC, Darwin and Helpegasus.", videoId: "MzsSLKJrLSI", levelId: "110815379", password: "free copy", length: "2M:53S", objectCount: "298842", difficulty: "Extreme Demon", song: "Creo - In Circles by CreoMusic", songId: "786863" },
  { rank: 30, name: "Menace", creator: "Arraegen", version: "2.2", tags: ["2.2", "XXL", "Timings", "Learny", "Gimmicky", "Nerve Control", "New Swing", "Duals"], views: "475K", likes: "9,4K", description: "White, orange and black effect level with plenty of lore and an entire poem within it. Includes some incredibly unorthodox gameplay. The level's song was also created by the creator, Arraegen, specifically for this project.", videoId: "nnkgghxxsEE", levelId: "107805281", password: "free copy", length: "3M:9S", objectCount: "77609", difficulty: "Extreme Demon", song: "Menace by TheRealMannyHeffley", songId: "1304920" },
  { rank: 31, name: "Abyss of Darkness", creator: "Exen", version: "2.2", tags: ["2.1", "XL", "Timings", "Chokepoints", "Unbalanced", "Slow-Paced"], views: "2,7M", likes: "71K", description: "Iconic megacollab with an equally as iconic song. Originally was finished in 2018, but was redecorated in 2021. Known for its slow gameplay and very inconsistent decoration quality.", videoId: "ejJkpqcMMCY", levelId: "49896559", password: "free copy", length: "2M:3S", objectCount: "113273", difficulty: "Extreme Demon", song: "Death Note Dubstep [SB] by ShadowBeatzInc", songId: "513539" },
  { rank: 32, name: "Tunnel of Despair", creator: "Exen", version: "2.2", tags: ["2.1", "Long", "Clicksync", "Fast-Paced", "Timings", "Chokepoints", "Unbalanced", "Learny", "Wave", "Overall"], views: "701K", likes: "15K", description: "Timing based greyscale level with red as its secondary color. Decorated exclusively by ivyteal. Generally repetitive with poorly received gameplay. Verification also features Zoink admitting to 'hacking' Eternal Moment.", videoId: "LpS4JREhW98", levelId: "91351939", password: "free copy", length: "1M:44S", objectCount: "75301", difficulty: "Extreme Demon", song: "Silent Hill (Dubstep) by Jewelz123", songId: "386900" },
  { rank: 33, name: "Kyouki", creator: "｛出見塩｝", version: "2.2", tags: ["2.1", "Long", "Clicksync", "Fast-Paced", "Learny", "High CPS"], views: "1.1M", likes: "29K", description: "Blue and purple glowy effect level and Demishio's 3rd extreme demon project. Memorably high quality gameplay and effects with an iconic Creo song.", videoId: "KDa5c0CJTHs", levelId: "86018142", password: "free copy", length: "1M:35S", objectCount: "220720", difficulty: "Extreme Demon", song: "Creo - Crazy by CreoMusic", songId: "905108" },
  { rank: 34, name: "Sacrifice", creator: "Laniakea", version: "2.2", tags: ["2.2", "XL", "NONG", "Clicksync", "Timings", "Unbalanced", "Learny", "Flow", "Nerve Control", "Ship", "Wave", "Overall"], views: "62K", likes: "1K", description: "Laniakea's XL megacollab themed after the Touhou series. Heavily inspired by Artifice, it features various different pink and purple coloured design styles referencing the game it's based on. Has fast paced overall gameplay with the difficulty leaning toward the second half.", videoId: "Sth67PA8XBU", levelId: "141052363", password: "free copy", length: "2M:29S", objectCount: "170419", difficulty: "Extreme Demon", song: "Yuyukos Theme (Remake) by chillyborger", songId: "1549821" },
  { rank: 35, name: "Based After Based", creator: "Akunakunn", version: "2.2", tags: ["2.2", "Long", "Timings", "Chokepoints", "Learny", "Gimmicky", "Slow-Paced", "Duals"], views: "306K", likes: "8,7K", description: "Initially a top 10 made without spikes and entirely dual gameplay that avoids speed changes. The verifier somehow fluked the level from 78%.", videoId: "yQBFyUvB3lY", levelId: "110534288", password: "free copy", length: "1M:47S", objectCount: "99069", difficulty: "Extreme Demon", song: "Base After Base by DJVI", songId: "404997" },
  { rank: 36, name: "Cognitohazard", creator: "MercuryDT", version: "2.2", tags: ["2.2", "XL", "High CPS", "Duals", "Learny", "Memory"], views: "242K", likes: "6,7K", description: "Extreme Brain Damage Demon | Verified by Whizkid05", videoId: "T5g0r16X_ZA", levelId: "130891319", password: "free copy", length: "3M", objectCount: "55544", difficulty: "Extreme Demon", song: "DROPOUT by t+pazolite", songId: "10008831" },
  { rank: 37, name: "The Lightning Rod", creator: "Lavatrex", version: "2.2", tags: ["2.1", "Long", "Timings", "Unbalanced", "Learny", "High CPS", "Gimmicky", "Ship", "Overall"], views: "288K", likes: "5,4K", description: "Distinct and incredibly creative extreme themed around traversing and escaping the inside of an electric tower/rod. Supposedly one of the learniest levels on the main-list with extremely high-cps and quirky gameplay.", videoId: "nQDTi077O6M", levelId: "93917076", password: "free copy", length: "1M:44s", objectCount: "44708", difficulty: "Extreme Demon", song: "Beauty in Chaos by larrynachos", songId: "935594" },
  { rank: 38, name: "Maniacal Chains", creator: "LordDivinity", version: "2.2", tags: ["2.1", "Long", "NONG", "Fast-Paced", "Timings", "Chokepoints", "Unbalanced", "Learny"], views: "81K", likes: "3,2K", description: "Originally meant to be a showcased impossible level built several years ago by LordDivinity, and eventually taken on and verified by spcreat. Using the same song as Killbot, the aesthetic is extremely flashy and intense, with the second and final drop comprising a large part of the level's difficulty.", videoId: "TzeMJeIu6bY", levelId: "48991380", password: "free copy", length: "1M:55S", objectCount: "94903", difficulty: "Extreme Demon", song: "~NK~ 'Sweet Dreams' FULL by Rukkus", songId: "464120" },
  { rank: 39, name: "Thinking Space II (Legacy)", creator: "CoCyMain", version: "2.2", tags: ["2.2", "Long", "Timings", "Chokepoints", "Unbalanced", "High CPS", "Nerve Control", "Ship", "Wave"], views: "294K", likes: "8,9K", description: "Made to follow the original creators' project wishes. Original layout hosted by KugelBlitZ. Level hosted by Marcy and Sebi. Verified by Zeronium. Officially recognized by HidekiX.", videoId: "RJedeB2wHCA", levelId: "132854166", password: "free copy", length: "1M:5S", objectCount: "46723", difficulty: "Extreme Demon", song: "Nuke Powder by MaelouX", songId: "489111" },
  { rank: 40, name: "Slaughterhouse", creator: "icedcave", version: "2.2", tags: ["2.1", "Long", "NONG", "Fast-Paced", "Timings", "Chokepoints", "Unbalanced", "Nerve Control", "Cube", "Wave"], views: "4,6M", likes: "99K", description: "Former top 1 with some of the most iconic wave sections in the game. Memorable for how incredibly intimidating the gameplay is, paired with an extremely washed out menacing song, along with being previously hacked and beaten legit 2 months later.", videoId: "kpcF1-QAHQc", levelId: "27690100", password: "free copy", length: "1M:3S", objectCount: "147241", difficulty: "Extreme Demon", song: "Tennobyte - Fly Away by Tennobyte", songId: "945695" },
  { rank: 41, name: "Subterminal Point", creator: "SyQual", version: "2.2", tags: ["2.2", "Long", "Timings", "Chokepoints", "Slow-Paced", "Ship", "Wave"], views: "229K", likes: "3,1K", description: "Generally underwhelming Trueffet sequel with classic SyQual visuals. Has an incredibly low enjoyment rating with appalling chokepoints and hitboxes, paired with a bubbly song.", videoId: "h2wmRMgACH4", levelId: "113599729", password: "free copy", length: "1M:13S", objectCount: "40967", difficulty: "Extreme Demon", song: "re:???? by Miyolophone", songId: "783614" },
  { rank: 42, name: "KOCMOC", creator: "cherryteam", version: "2.2", tags: ["Long", "2.2", "Wave", "High CPS", "Nerve Control", "Fast-Paced", "Cube"], views: "1,63M", likes: "36K", description: "verified by Trick // verified by Zoink", videoId: "2CxE-UWCIG4", levelId: "87665224", password: "free copy", length: "1M:23S", objectCount: "159360", difficulty: "Extreme Demon", song: "SLEEPING HUMMINGBIRD LONDON? Albee Remix ? by sawukalu164", songId: "1163222" },
  { rank: 43, name: "BEING HOME", creator: "[FC] Turtl123", version: "2.2", tags: ["2.2", "Long", "Timings", "Gimmicky", "Slow-Paced", "Cube", "Ship", "Robot", "Duals"], views: "52K", likes: "856", description: "by [OG] goobs and [FC] Turtl123, published by [FC] Turtl123, verified by [OG] goobs 'Collab between me and goobs47. Verified by goobs47 in 69,393 attempts. UNFOLD YOURSELF.'", videoId: "kt7FnUzK8CY", levelId: "130327668", password: "free copy", length: "1M:40S", objectCount: "72632", difficulty: "Extreme Demon", song: "sleepytime (vibe test) by littlbox", songId: "1225278" },
  { rank: 44, name: "Deimos (itsHybrid)", creator: "itsHybrid", version: "2.2", tags: ["2.1", "XL", "Fast-Paced", "Timings", "Chokepoints", "Nerve Control", "Overall"], views: "885K", likes: "21K", description: "Extremely large megacollab and sequel to Phobos. Parts significantly vary in design and color similarly to Phobos, and the iconic final dual was kept nearly identical.", videoId: "b2yHaIk5zio", levelId: "93091893", password: "free copy", length: "2M:57S", objectCount: "157645", difficulty: "Extreme Demon", song: "[Deimos]* by Solkrieg", songId: "830628" },
  { rank: 45, name: "CHIL", creator: "McCoco", version: "2.2", tags: ["2.2", "Long", "Clicksync", "Fast-Paced", "Timings", "Learny", "High CPS", "Flow", "Overall"], views: "160K", likes: "3,1K", description: "A pure solo project which started out in early 2.2 and took over a year to verify. To fit its Camellia song, the visuals are extremely trippy with relentless camera effect usage and rapid pulses, which are especially apparent in the second half.", videoId: "DROMiCc2ZRM", levelId: "114281093", password: "free copy", length: "1M:5S", objectCount: "69174", difficulty: "Extreme Demon", song: "Xy76 by Camellia", songId: "10007183" },
  { rank: 46, name: "zorin", creator: "태리", version: "2.2", tags: ["2.2", "XL", "Timings", "Learny", "Gimmicky", "Nerve Control", "Cube"], views: "86K", likes: "1,1K", description: "A 3-minute-long XL extreme known for having no spikes from start to finish. It features a vibrant color palette and a carefree-styled art aesthetic, paired with an array of very gimmicky gameplay mechanics. This level is fairly well-received for its difficulty.", videoId: "U19vmpenb9g", levelId: "134541844", password: "free copy", length: "2M:55S", objectCount: "149693", difficulty: "Extreme Demon", song: "Supernatural by zenkusaa", songId: "1172938" },
  { rank: 47, name: "Prismline", creator: "ItsHarryy", version: "2.2", tags: ["2.2", "High CPS", "Long"], views: "28K", likes: "442", description: "Unofficial Sequel of Just DANCE / Verified By Wain / Huge Thanks to TheGalaxyCat, Texic", videoId: "pIHOHz3i0Rw", levelId: "135148907", password: "free copy", length: "1M:32S", objectCount: "87899", difficulty: "Extreme Demon", song: "Gloxinia by XomuEDM", songId: "1006406" },
  { rank: 48, name: "BASSLINE JUNKIE", creator: "MCBIGMACPLAYZ", version: "2.2", tags: ["2.2", "Long", "Wave"], views: "17K", likes: "579", description: "VERIFIED BY KARMA | NONG REPLACEMENT BY AUTUMN | DIZZEE RASCAL DEMON", videoId: "db_V19gW0rI", levelId: "143300771", password: "free copy", length: "1M:59S", objectCount: "105242", difficulty: "Extreme Demon", song: "Dizzee Rascal - Bassline Junkie (Remix) by lefidoot", songId: "1562891" },
  { rank: 49, name: "Sakupen Circles", creator: "[TCD] Diamond", version: "2.2", tags: ["2.1", "Medium", "Circles", "Fast-Paced", "Unbalanced", "High CPS", "Wave"], views: "2,1M", likes: "60K", description: "Flashy nine circles level known for its lack of balancing and iconic wave sections. Remake of the 1.9 impossible level of the same name, and was briefly top 1.", videoId: "ofG2mJi9kEA", levelId: "76962930", password: "free copy", length: "52S", objectCount: "70027", difficulty: "Extreme Demon", song: "Iron God: Sakupen Hell Yes RMX by mr-jazzman", songId: "360804" },
  { rank: 50, name: "The Salt Factory", creator: "[UFA] Nickname09", version: "2.2", tags: ["2.2", "Long", "NONG", "Cube", "Robot"], views: "64K", likes: "1,1K", description: "No description was provided for this level yet.", videoId: "lQ7M-Sgov24", levelId: "113045735", password: "free copy", length: "1M:35S", objectCount: "76833", difficulty: "Extreme Demon", song: "The Salt Factory by g2961", songId: "1382167" },
];

const playerList = document.querySelector("#player-list");
const levelList = document.querySelector("#level-list");
const searchInput = document.querySelector("#level-search");
const sortSelect = document.querySelector("#sort-levels");
const pageLabel = document.querySelector("#page-label");
const prevButton = document.querySelector("#prev-page");
const nextButton = document.querySelector("#next-page");
const levelsTitle = document.querySelector("#levels-title");
const levelsSubtitle = document.querySelector("#levels-subtitle");
const listSelector = document.querySelector("#list-selector");

let currentPage = 1;
const levelsPerPage = 5;

function getActiveLevels() {
  return levels;
}


function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function renderPlayers() {
  playerList.innerHTML = players.slice(0, 10).map((player, index) => `
    <li class="player-row">
      <span class="player-rank">${index + 1}</span>

      <span class="player-details">
        <span class="player-name-line">
          <span class="player-name">${escapeHTML(player.name)}</span>
          <span class="player-score">${escapeHTML(player.score)}</span>
        </span>
        <span class="player-country">${escapeHTML(player.country)}</span>
      </span>
    </li>
  `).join("");
}

function updateFeaturedLevel(level) {
  document.querySelector("#featured-title").textContent = level.name;
  document.querySelector("#featured-creator").textContent = `by ${level.creator}`;
  document.querySelector("#featured-rank-label").textContent = `TOP ${level.rank} LEVEL`;
  document.querySelector(".rank-badge").textContent = `#${level.rank}`;

  document.querySelector("#featured-views").textContent = level.views || "N/A";
  document.querySelector("#featured-likes").textContent = level.likes || "N/A";

  document.querySelector("#featured-description").textContent =
    level.description || "No description available yet.";

  const tagList = [
  ...new Set([
    level.difficulty,
    level.version,
    ...(level.tags || [])
  ].filter(Boolean))
];

  document.querySelector("#featured-tags").innerHTML = tagList.length
    ? tagList.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")
    : "<span>No tags</span>";

  const video = document.querySelector("#featured-video");
  const link = document.querySelector("#featured-link");

  if (level.videoId) {
    const safeVideoId = encodeURIComponent(level.videoId);
    video.src = `https://www.youtube.com/embed/${safeVideoId}`;
    link.href = `https://www.youtube.com/watch?v=${safeVideoId}`;
  } else {
    video.src = "about:blank";
    link.href = "#levels";
  }

  renderLevelDetails(level);
  animateLevelSwitch(".hero-info");
  animateLevelSwitch(".hero-art");
}

function renderLevelDetails(level) {
  document.querySelector("#level-information").innerHTML = `
    <div class="detail-meta-grid">
      <div class="detail-item">
        <span>Level Password</span>
        <strong>${escapeHTML(level.password || "N/A")}</strong>
      </div>

      <div class="detail-item">
        <span>Level ID</span>
        <strong>${escapeHTML(level.levelId || "N/A")}</strong>
      </div>

      <div class="detail-item">
        <span>Level Length</span>
        <strong>${escapeHTML(level.length || "N/A")}</strong>
      </div>

      <div class="detail-item">
        <span>Object Count</span>
        <strong>${escapeHTML(level.objectCount || "N/A")}</strong>
      </div>

      <div class="detail-item">
        <span>Difficulty</span>
        <strong>${escapeHTML(level.difficulty || "N/A")}</strong>
      </div>
    </div>

    <div class="detail-created">
      <span>Created In</span>
      <strong>${escapeHTML(level.version || "N/A")}</strong>
    </div>

    <div class="detail-song">
      <span>Newgrounds Song</span>
      <strong>${escapeHTML(level.song || "N/A")} (ID ${escapeHTML(level.songId || "N/A")})</strong>
    </div>
  `;

  animateLevelSwitch("#level-information");
}

function getFilteredLevels() {
  const query = searchInput.value.trim().toLowerCase();
  const sortBy = sortSelect.value;

  const filtered = getActiveLevels().filter(level =>
    level.name.toLowerCase().includes(query) ||
    level.creator.toLowerCase().includes(query)
  );

  if (sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => a.rank - b.rank);
  }

  return filtered;
}


function renderLevels() {
  const filteredLevels = getFilteredLevels();

  const totalPages = Math.max(
    1,
    Math.ceil(filteredLevels.length / levelsPerPage)
  );

  currentPage = Math.min(currentPage, totalPages);

  const startIndex = (currentPage - 1) * levelsPerPage;

  const visibleLevels = filteredLevels.slice(
    startIndex,
    startIndex + levelsPerPage
  );

const listName = "Demon List";

if (searchInput.value.trim() !== "") {
  levelsTitle.textContent = `${listName} Search Results`;

  const firstResult = filteredLevels.length ? startIndex + 1 : 0;
  const lastResult = Math.min(
    startIndex + levelsPerPage,
    filteredLevels.length
  );

  levelsSubtitle.textContent =
    `Showing ${firstResult}–${lastResult} of ${filteredLevels.length} levels`;

} else if (sortSelect.value === "name") {
  levelsTitle.textContent = `${listName} Search Results`;
  levelsSubtitle.textContent =
    `Sorted by name · ${filteredLevels.length} levels`;

} else if (visibleLevels.length > 0) {
  const firstRank = visibleLevels[0].rank;
  const lastRank = visibleLevels[visibleLevels.length - 1].rank;

levelsTitle.textContent = "Main Demon List";

  levelsSubtitle.textContent =
    `Ranks ${firstRank}–${lastRank}`;

} else {
  levelsTitle.textContent = listName;
  levelsSubtitle.textContent = "No levels available";
}

  if (visibleLevels.length === 0) {
    levelList.innerHTML = `
      <div class="empty-message">
        No levels found. Try another search.
      </div>
    `;
  } else {
    levelList.innerHTML = visibleLevels.map((level, index) => {
      const thumbnail = level.videoId
        ? `<img src="https://img.youtube.com/vi/${encodeURIComponent(level.videoId)}/hqdefault.jpg"
                alt="${escapeHTML(level.name)} preview" loading="lazy">`
        : `<span class="no-thumbnail">NO PREVIEW</span>`;

      const tags = [
        level.version,
        ...(level.tags || [])
      ].filter(Boolean);

      return `
        <article class="level-card"
                 data-rank="${level.rank}"
                 tabindex="0"
                 style="animation-delay:${index * 60}ms">

          <div class="level-rank">${level.rank}</div>

          <div class="level-thumb">
            ${thumbnail}
          </div>

          <div class="level-info">
            <div class="level-name">${escapeHTML(level.name)}</div>
            <div class="level-creator">by ${escapeHTML(level.creator)}</div>

            <div class="tags">
              ${tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}
            </div>
          </div>

          <div class="level-metrics">
            <span>Views: ${escapeHTML(level.views || "N/A")}</span>
            <span>Likes: ${escapeHTML(level.likes || "N/A")}</span>
          </div>

        </article>
      `;
    }).join("");
  }

  pageLabel.textContent = `Page ${currentPage} / ${totalPages}`;

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderLevels();
  }
});

nextButton.addEventListener("click", () => {
  const filteredLevels = getFilteredLevels();
  const totalPages = Math.max(
    1,
    Math.ceil(filteredLevels.length / levelsPerPage)
  );

  if (currentPage < totalPages) {
    currentPage++;
    renderLevels();
  }
});


searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderLevels();
});


sortSelect.addEventListener("change", () => {
  currentPage = 1;
  renderLevels();
});


function selectLevel(card) {
  const selectedLevel = getActiveLevels().find(
    level => level.rank === Number(card.dataset.rank)
  );

  if (!selectedLevel) return;

  updateFeaturedLevel(selectedLevel);

  document.querySelectorAll(".level-card").forEach(item => {
    item.classList.remove("selected");
  });

  card.classList.add("selected");
}

levelList.addEventListener("click", (event) => {
  const card = event.target.closest(".level-card");

  if (!card) return;

  selectLevel(card);
});

levelList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".level-card");

  if (!card) return;

  event.preventDefault();
  selectLevel(card);
});


const detailsToggle = document.querySelector("#details-toggle");
const detailsContent = document.querySelector("#details-content");

detailsToggle.addEventListener("click", () => {
  const isOpening = detailsContent.hidden;

  detailsContent.hidden = !isOpening;

  detailsToggle.textContent = isOpening
    ? "See Less Information"
    : "See More Information";

  detailsToggle.setAttribute("aria-expanded", String(isOpening));
});

renderPlayers();
renderLevels();
updateFeaturedLevel(levels[0]);

function animateLevelSwitch(selector) {
  const element = document.querySelector(selector);

  if (!element) return;

  element.classList.remove("level-switch-animate");

  requestAnimationFrame(() => {
    element.classList.add("level-switch-animate");
  });
}