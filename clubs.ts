export type ClubRegion = "europe" | "south-america" | "africa";
export type ClubKind = "player" | "coach" | "president" | "owner";
export type ClubPattern =
  | "stripes"
  | "ring"
  | "chevron"
  | "bars"
  | "cross"
  | "diamond"
  | "split"
  | "grid"
  | "arc"
  | "sun"
  | "block"
  | "wave";

export type ClubColors = {
  paper: string;
  ink: string;
  a: string;
  b: string;
};

export type Club = {
  slug: string;
  club: string;
  shortClub: string;
  city: string;
  country: string;
  region: ClubRegion;
  rising?: boolean;
  people: string[];
  thesis: string;
  reasonLine: string;
  isLine: string;
  roleLabel: string;
  kind: ClubKind;
  era: string;
  colors: ClubColors;
  pattern: ClubPattern;
  atmosphere: string;
  story: string[];
  momentLabel: string;
  moment: string;
};

export const CLUBS: Club[] = [
  {
    "slug": "como",
    "club": "Como 1907",
    "shortClub": "Como",
    "city": "Como",
    "country": "Italy",
    "region": "europe",
    "rising": true,
    "people": [
      "Cesc Fàbregas"
    ],
    "thesis": "Cesc Fàbregas is the reason for Como's today level.",
    "reasonLine": "Cesc Fàbregas",
    "isLine": "is the reason for",
    "roleLabel": "Player · Coach · Shareholder",
    "kind": "coach",
    "era": "2022 — now",
    "colors": {
      "paper": "#0c1c3a",
      "ink": "#f4f1ea",
      "a": "#c8102e",
      "b": "#f4f1ea"
    },
    "pattern": "cross",
    "atmosphere": "como",
    "story": [
      "A few years ago Como were a bankrupt lakeside name in the Italian fourth division. Indonesian ownership rebuilt the club. Fàbregas joined as a player, took a stake, then took the bench. Promotion to Serie A followed. A top-half finish followed that. Then a Champions League place — from a town the size of a postcard.",
      "The money made it possible. Fàbregas made it football. He is why a club George Clooney used as a backdrop is now an argument in Europe. That is today's level."
    ],
    "momentLabel": "The jump",
    "moment": "Serie D to the Champions League in six seasons, with Fàbregas on the grass and then in the dugout."
  },
  {
    "slug": "real-madrid",
    "club": "Real Madrid",
    "shortClub": "Real Madrid",
    "city": "Madrid",
    "country": "Spain",
    "region": "europe",
    "people": [
      "Santiago Bernabéu",
      "Florentino Pérez"
    ],
    "thesis": "Pérez and Santiago Bernabéu are the reason for Real Madrid.",
    "reasonLine": "Pérez & Bernabéu",
    "isLine": "are the reason for",
    "roleLabel": "Presidents",
    "kind": "president",
    "era": "1943 — forever",
    "colors": {
      "paper": "#f4f1ea",
      "ink": "#101318",
      "a": "#00529f",
      "b": "#101318"
    },
    "pattern": "ring",
    "atmosphere": "madrid",
    "story": [
      "Santiago Bernabéu did not inherit a superclub. He built the stadium that still carries his name, signed Di Stéfano, and turned a Madrid side into the first true European dynasty. The European Cup was invented around this club because he insisted it should exist.",
      "Florentino Pérez took that cathedral and filled it with kings — twice. The Galácticos, the rebuilt Bernabéu, the Champions League as a habit rather than a miracle. One man made Real Madrid the biggest club in the world. The other made sure it never stopped being that."
    ],
    "momentLabel": "The cathedral",
    "moment": "Five European Cups in the 1950s, then a modern era that treats the trophy as furniture."
  },
  {
    "slug": "barcelona",
    "club": "FC Barcelona",
    "shortClub": "Barcelona",
    "city": "Barcelona",
    "country": "Spain",
    "region": "europe",
    "people": [
      "Johan Cruyff"
    ],
    "thesis": "Johan Cruyff is the reason for Barcelona.",
    "reasonLine": "Johan Cruyff",
    "isLine": "is the reason for",
    "roleLabel": "Player · Coach · Prophet",
    "kind": "coach",
    "era": "1973 — 1996",
    "colors": {
      "paper": "#a50044",
      "ink": "#f4f1ea",
      "a": "#004d98",
      "b": "#f4f1ea"
    },
    "pattern": "stripes",
    "atmosphere": "barcelona",
    "story": [
      "Before Cruyff, Barcelona were a great Catalan institution that too often lost the argument on the pitch. He arrived as a player and changed the culture. He returned as coach, built the Dream Team, and won the club's first European Cup in 1992.",
      "More than trophies: he made a way of seeing. La Masia, positional play, the idea that the club is a school. Guardiola, Xavi, Iniesta, Messi — all of them are Cruyff's long shadow. Without him, Barça is a big club. With him, it became a religion of how football should look."
    ],
    "momentLabel": "Wembley 1992",
    "moment": "Koeman's free kick. The Dream Team. The night the philosophy got its first European crown."
  },
  {
    "slug": "manchester-united",
    "club": "Manchester United",
    "shortClub": "Man United",
    "city": "Manchester",
    "country": "England",
    "region": "europe",
    "people": [
      "Sir Alex Ferguson"
    ],
    "thesis": "Sir Alex Ferguson is the reason Manchester United became a religion.",
    "reasonLine": "Sir Alex Ferguson",
    "isLine": "is the reason for",
    "roleLabel": "Manager",
    "kind": "coach",
    "era": "1986 — 2013",
    "colors": {
      "paper": "#9b1d2e",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#1a1a1a"
    },
    "pattern": "chevron",
    "atmosphere": "england",
    "story": [
      "Busby built the soul. Ferguson built the empire. He inherited a sleeping giant in 1986, waited, then spent 26 years making Old Trafford the centre of English football. Thirteen Premier League titles. Two European Cups. A habit of winning when the clock was cruel.",
      "The club is still living in the hangover. That is the proof. United's modern identity — theatre, youth, late goals, global reach — is a Ferguson construction. Remove him and you have a famous name. Leave him in, and you have the standard everyone else is still measured against."
    ],
    "momentLabel": "Camp Nou 1999",
    "moment": "Two stoppage-time goals. Treble night. The moment a club became a myth."
  },
  {
    "slug": "liverpool",
    "club": "Liverpool",
    "shortClub": "Liverpool",
    "city": "Liverpool",
    "country": "England",
    "region": "europe",
    "people": [
      "Bill Shankly"
    ],
    "thesis": "Bill Shankly is the reason Liverpool is Liverpool.",
    "reasonLine": "Bill Shankly",
    "isLine": "is the reason for",
    "roleLabel": "Manager",
    "kind": "coach",
    "era": "1959 — 1974",
    "colors": {
      "paper": "#c8102e",
      "ink": "#f4f1ea",
      "a": "#00b2a9",
      "b": "#f4f1ea"
    },
    "pattern": "bars",
    "atmosphere": "england",
    "story": [
      "When Shankly walked into Anfield, Liverpool were a second-division club with a leaking roof. He rebuilt the team, the ground, the language. 'This is Anfield' is his. The Boot Room is his. The idea that the club belongs to the people walking up the hill is his.",
      "Paisley, Fagan, Dalglish, Klopp — they all coached a club Shankly had already invented. European Cups sit on a foundation he poured in the 1960s. Liverpool's today level is a voice from a coal town that refused to be small."
    ],
    "momentLabel": "The sign",
    "moment": "This is Anfield. A warning he hung for the visitors, and a contract with the city."
  },
  {
    "slug": "bayern",
    "club": "Bayern Munich",
    "shortClub": "Bayern",
    "city": "Munich",
    "country": "Germany",
    "region": "europe",
    "people": [
      "Franz Beckenbauer",
      "Uli Hoeneß"
    ],
    "thesis": "Beckenbauer and Hoeneß are the reason Bayern became Germany's empire.",
    "reasonLine": "Beckenbauer & Hoeneß",
    "isLine": "are the reason for",
    "roleLabel": "Player · President · Architects",
    "kind": "president",
    "era": "1970s — 2010s",
    "colors": {
      "paper": "#dc052d",
      "ink": "#f4f1ea",
      "a": "#0066b2",
      "b": "#f4f1ea"
    },
    "pattern": "arc",
    "atmosphere": "germany",
    "story": [
      "Beckenbauer made Bayern beautiful and inevitable — the libero who looked like he had more time than other humans. Three European Cups in a row in the mid-70s turned a regional club into a continental power.",
      "Hoeneß then ran the place like a state. Player, striker of the 1974 World Cup, then the executive who turned sporting success into a machine that still eats the Bundesliga. One was the emperor on the grass. The other made sure the empire had accounts, a stadium, and a next generation."
    ],
    "momentLabel": "Three in a row",
    "moment": "1974, 1975, 1976 European Cups — the nights Bavaria stopped being a local argument."
  },
  {
    "slug": "juventus",
    "club": "Juventus",
    "shortClub": "Juventus",
    "city": "Turin",
    "country": "Italy",
    "region": "europe",
    "people": [
      "The Agnelli family"
    ],
    "thesis": "The Agnellis are the reason Juventus became Italy.",
    "reasonLine": "The Agnellis",
    "isLine": "are the reason for",
    "roleLabel": "Owners · Dynasty",
    "kind": "owner",
    "era": "1923 — now",
    "colors": {
      "paper": "#101010",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#9a9a9a"
    },
    "pattern": "diamond",
    "atmosphere": "italy",
    "story": [
      "The Agnelli family bought Juventus in 1923 and never really left. Fiat money, Turin steel, black and white stripes that read as a national institution. Thirty-plus scudetti are not an accident of coaching cycles. They are a century of one family deciding this club should sit above the rest of Italy.",
      "Calciopoli wounded them. Ronaldo's years inflated them. The core never moved: Juve as the Old Lady of power, patronage, and winning as a duty. In Italy you do not become Juventus without the Agnellis. You become a very good team."
    ],
    "momentLabel": "The house",
    "moment": "A century of the same surname on the door, and a league table that learned to live with it."
  },
  {
    "slug": "ac-milan",
    "club": "AC Milan",
    "shortClub": "Milan",
    "city": "Milan",
    "country": "Italy",
    "region": "europe",
    "people": [
      "Silvio Berlusconi"
    ],
    "thesis": "Silvio Berlusconi is the reason Milan became a global club.",
    "reasonLine": "Silvio Berlusconi",
    "isLine": "is the reason for",
    "roleLabel": "Owner · President",
    "kind": "owner",
    "era": "1986 — 2017",
    "colors": {
      "paper": "#9b1d2e",
      "ink": "#f4f1ea",
      "a": "#1a1a1a",
      "b": "#f4f1ea"
    },
    "pattern": "bars",
    "atmosphere": "italy",
    "story": [
      "Berlusconi bought Milan in 1986 when the club was a faded giant. He hired Sacchi, signed the Dutch, built the most beautiful machine of the late 80s, then let Capello make it cruel. Five European Cups in his era. Van Basten, Rijkaard, Gullit, Maldini, Baresi, Kaká, Shevchenko.",
      "He also understood television before English football did. Milan became a show. The Rossoneri as a worldwide brand is a Berlusconi product — for better and for the circus that came with it. Without him, Milan are history. With him, they were the future for twenty years."
    ],
    "momentLabel": "Sacchi's Milan",
    "moment": "A press that hunted in a pack, and a European Cup that looked like art."
  },
  {
    "slug": "inter",
    "club": "Inter Milan",
    "shortClub": "Inter",
    "city": "Milan",
    "country": "Italy",
    "region": "europe",
    "people": [
      "Helenio Herrera"
    ],
    "thesis": "Helenio Herrera is the reason Inter learned how to rule Europe.",
    "reasonLine": "Helenio Herrera",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "1960 — 1968",
    "colors": {
      "paper": "#0a1a3a",
      "ink": "#f4f1ea",
      "a": "#1a1a1a",
      "b": "#c4a35a"
    },
    "pattern": "split",
    "atmosphere": "italy",
    "story": [
      "Grande Inter is not a nickname. It is a specific team Herrera built in the 1960s: catenaccio as a high art, Facchetti overlapping, Mazzola and Suárez in the middle, European Cups in 1964 and 1965. He made a method into an identity — win first, then talk.",
      "Moratti's later money and Mourinho's treble sit on that foundation. Inter's sense of itself as the clever, stubborn, slightly darker Milan club begins with Herrera. He is why 'Inter' still means a particular way of suffering, and then lifting the big one."
    ],
    "momentLabel": "Grande Inter",
    "moment": "Back-to-back European Cups, and a tactical idea the continent copied for a decade."
  },
  {
    "slug": "psg",
    "club": "Paris Saint-Germain",
    "shortClub": "PSG",
    "city": "Paris",
    "country": "France",
    "region": "europe",
    "people": [
      "Nasser Al-Khelaifi"
    ],
    "thesis": "Nasser Al-Khelaifi is the reason PSG became a superclub.",
    "reasonLine": "Nasser Al-Khelaifi",
    "isLine": "is the reason for",
    "roleLabel": "President",
    "kind": "president",
    "era": "2011 — now",
    "colors": {
      "paper": "#0b2340",
      "ink": "#f4f1ea",
      "a": "#da291c",
      "b": "#c4a35a"
    },
    "pattern": "block",
    "atmosphere": "paris",
    "story": [
      "Before 2011, PSG were a big Paris club with a cupboard of domestic cups and a habit of not quite mattering in Europe. Qatari money arrived. Nasser Al-Khelaifi became the face of the project: Ibrahimović, then Neymar, then Mbappé, then the whole circus of being the richest team in the room.",
      "Love it or spit at it — today's PSG does not exist without that presidency. Ligue 1 as a private league. A Champions League finally hunted down. Paris as a destination, not a stepping stone. He is the reason a club founded in 1970 now sits with Madrid and Manchester."
    ],
    "momentLabel": "The project",
    "moment": "From a domestic cup side to a global superclub in a single ownership generation."
  },
  {
    "slug": "manchester-city",
    "club": "Manchester City",
    "shortClub": "Man City",
    "city": "Manchester",
    "country": "England",
    "region": "europe",
    "people": [
      "Sheikh Mansour",
      "Pep Guardiola"
    ],
    "thesis": "Mansour bought the future. Pep made it football.",
    "reasonLine": "Mansour & Pep",
    "isLine": "are the reason for",
    "roleLabel": "Owner · Coach",
    "kind": "owner",
    "era": "2008 — now",
    "colors": {
      "paper": "#6cabdd",
      "ink": "#0b1c2c",
      "a": "#1c2c5c",
      "b": "#f4f1ea"
    },
    "pattern": "block",
    "atmosphere": "england",
    "story": [
      "Sheikh Mansour's 2008 takeover is the before-and-after line in English football. City were a big old club with a small modern life. Abu Dhabi money, the Campus, a recruitment machine — the lot. Without the cheque, there is no empire.",
      "Without Pep, there is no masterpiece. He turned a funded project into the most complete club side of the 2010s and 2020s: the centurions, the treble, football as geometry. Mansour is why City can buy the future. Guardiola is why people still argue it was deserved."
    ],
    "momentLabel": "The treble",
    "moment": "2023. League, Cup, Champions League — the night the project closed the argument."
  },
  {
    "slug": "arsenal",
    "club": "Arsenal",
    "shortClub": "Arsenal",
    "city": "London",
    "country": "England",
    "region": "europe",
    "people": [
      "Arsène Wenger"
    ],
    "thesis": "Arsène Wenger is the reason Arsenal became modern.",
    "reasonLine": "Arsène Wenger",
    "isLine": "is the reason for",
    "roleLabel": "Manager",
    "kind": "coach",
    "era": "1996 — 2018",
    "colors": {
      "paper": "#ef0107",
      "ink": "#f4f1ea",
      "a": "#063672",
      "b": "#f4f1ea"
    },
    "pattern": "chevron",
    "atmosphere": "england",
    "story": [
      "Herbert Chapman made Arsenal the first modern English giant. Wenger made them a global idea. He arrived from Japan, changed the diet, the training, the recruitment, and the way a London club thought about the game. The Invincibles of 2003–04 remain the only Premier League team to go a season unbeaten.",
      "He also built the Emirates and the financial model that kept Arsenal in the room after the billionaires arrived. Today's Arsenal — young, technical, stubborn about beauty — is still speaking Wenger's language, even when the accent is Arteta's."
    ],
    "momentLabel": "The Invincibles",
    "moment": "49 games unbeaten. A gold trophy. Proof that a way of playing could also be a way of never losing."
  },
  {
    "slug": "chelsea",
    "club": "Chelsea",
    "shortClub": "Chelsea",
    "city": "London",
    "country": "England",
    "region": "europe",
    "people": [
      "Roman Abramovich"
    ],
    "thesis": "Roman Abramovich is the reason Chelsea became a giant.",
    "reasonLine": "Roman Abramovich",
    "isLine": "is the reason for",
    "roleLabel": "Owner",
    "kind": "owner",
    "era": "2003 — 2022",
    "colors": {
      "paper": "#034694",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#dba111"
    },
    "pattern": "ring",
    "atmosphere": "england",
    "story": [
      "Chelsea were a glamorous London club that had never quite sat with United and Liverpool. Abramovich's 2003 cheque ended that sentence. Mourinho arrived. Titles arrived. A Champions League in 2012, another in 2021. Stamford Bridge became a destination for the best coaches on earth, one after another.",
      "The method was not romantic. It was effective. Today's Chelsea — for all the chaos since the sale — only exists as a European heavyweight because one owner decided a west London side should scare Madrid. Before him, Chelsea were a name. After him, they were a standard."
    ],
    "momentLabel": "Munich 2012",
    "moment": "Drogba in extra time, Drogba from the spot. A first Champions League, paid for in a different era."
  },
  {
    "slug": "ajax",
    "club": "Ajax",
    "shortClub": "Ajax",
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "europe",
    "people": [
      "Rinus Michels"
    ],
    "thesis": "Rinus Michels is the reason total football has a home.",
    "reasonLine": "Rinus Michels",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "1965 — 1971",
    "colors": {
      "paper": "#d2122e",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#1a1a1a"
    },
    "pattern": "grid",
    "atmosphere": "germany",
    "story": [
      "Michels took a Dutch club and invented a way of playing that still sits under half the coaches on this list. Pressing, interchange, the idea that every outfield player is an attacker and a defender. Cruyff was the genius on the grass. Michels was the man who organised the genius.",
      "Three European Cups followed in the early 70s. The academy became a factory. Every later Ajax side — van Gaal, the 2019 kids, the current production line — is speaking a language Michels wrote down. Without him, Ajax are a famous Dutch club. With him, they are a school the world still copies."
    ],
    "momentLabel": "Total Football",
    "moment": "A European Cup in 1971, and a tactical idea that outlived every player who first ran it."
  },
  {
    "slug": "atletico",
    "club": "Atlético Madrid",
    "shortClub": "Atlético",
    "city": "Madrid",
    "country": "Spain",
    "region": "europe",
    "people": [
      "Diego Simeone"
    ],
    "thesis": "Diego Simeone is the reason Atlético can stand with Madrid.",
    "reasonLine": "Diego Simeone",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "2011 — now",
    "colors": {
      "paper": "#ce2029",
      "ink": "#f4f1ea",
      "a": "#1a1a1a",
      "b": "#f4f1ea"
    },
    "pattern": "stripes",
    "atmosphere": "madrid",
    "story": [
      "Atlético had history. They did not have a seat at the table with Real and Barça in the modern money era. Simeone arrived in 2011 and built a trench that two giants could not walk over. La Liga in 2014. Another in 2021. Two Champions League finals. A stadium move. A personality so loud it became the club.",
      "Cholismo is not pretty and it is not optional. It is why a third club in Madrid is a European argument rather than a local one. Remove Simeone and Atlético drop a weight class. Leave him, and the Calderón's grandchildren still know who they are."
    ],
    "momentLabel": "2014",
    "moment": "A league title stolen from the two richest neighbours — the night the trench held."
  },
  {
    "slug": "napoli",
    "club": "Napoli",
    "shortClub": "Napoli",
    "city": "Naples",
    "country": "Italy",
    "region": "europe",
    "people": [
      "Diego Maradona"
    ],
    "thesis": "Diego Maradona is the reason Napoli became immortal.",
    "reasonLine": "Diego Maradona",
    "isLine": "is the reason for",
    "roleLabel": "Player",
    "kind": "player",
    "era": "1984 — 1991",
    "colors": {
      "paper": "#0a4ea3",
      "ink": "#f4f1ea",
      "a": "#c4a35a",
      "b": "#f4f1ea"
    },
    "pattern": "wave",
    "atmosphere": "italy",
    "story": [
      "Napoli had never won the scudetto when Maradona arrived from Barcelona in 1984. He gave a southern city two league titles, a UEFA Cup, and a god. In a country run from the north, he made Naples the centre of the universe for a few years and never really left.",
      "De Laurentiis and Spalletti brought a third star in 2023. That team still played in a stadium that is a shrine to one man. Today's Napoli is a serious club because a president spent money. It is a religion because of Diego. Those are different sentences."
    ],
    "momentLabel": "The first star",
    "moment": "1987. A first scudetto. A city that still paints his face on the walls."
  },
  {
    "slug": "porto",
    "club": "FC Porto",
    "shortClub": "Porto",
    "city": "Porto",
    "country": "Portugal",
    "region": "europe",
    "people": [
      "Jorge Nuno Pinto da Costa"
    ],
    "thesis": "Pinto da Costa is the reason Porto punch with the giants.",
    "reasonLine": "Pinto da Costa",
    "isLine": "is the reason for",
    "roleLabel": "President",
    "kind": "president",
    "era": "1982 — 2024",
    "colors": {
      "paper": "#0a2e6b",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#c4a35a"
    },
    "pattern": "ring",
    "atmosphere": "madrid",
    "story": [
      "Forty-two years as president. That is not a term. That is a civilisation. Pinto da Costa turned Porto into a club that sells stars, wins the league anyway, and occasionally knocks Europe over — the 1987 European Cup, Mourinho's 2004 Champions League, a Europa League, a machine for finding the next one.",
      "Mourinho is the most famous proof. The presidency is the reason the proof could happen twice. Portuguese football's modern shape — Benfica, Sporting, and a dragon that refuses to be the third — is his long argument."
    ],
    "momentLabel": "2004",
    "moment": "Mourinho in a grey coat, a Champions League, and a scouting model the continent still steals."
  },
  {
    "slug": "dortmund",
    "club": "Borussia Dortmund",
    "shortClub": "Dortmund",
    "city": "Dortmund",
    "country": "Germany",
    "region": "europe",
    "people": [
      "Jürgen Klopp"
    ],
    "thesis": "Jürgen Klopp is the reason Dortmund became a feeling again.",
    "reasonLine": "Jürgen Klopp",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "2008 — 2015",
    "colors": {
      "paper": "#f5c400",
      "ink": "#0b0b0c",
      "a": "#0b0b0c",
      "b": "#f4f1ea"
    },
    "pattern": "bars",
    "atmosphere": "germany",
    "story": [
      "Dortmund had been bankrupt in spirit as well as in the accounts. Klopp arrived, pressed the whole pitch, and made the Yellow Wall loud again. Back-to-back Bundesliga titles. A Champions League final in 2013. A style — heavy metal, gegenpressing — that later went to Liverpool and changed England.",
      "Watzke kept the club alive in the boardroom. Klopp gave it a pulse. Today's Dortmund still sells its best players and still feels like a cause, because he taught a whole generation that this club is allowed to hunt Bayern rather than admire them."
    ],
    "momentLabel": "The Wall",
    "moment": "2011 and 2012 titles, a south stand that became a postcard, and a press that never sat down."
  },
  {
    "slug": "celtic",
    "club": "Celtic",
    "shortClub": "Celtic",
    "city": "Glasgow",
    "country": "Scotland",
    "region": "europe",
    "people": [
      "Jock Stein"
    ],
    "thesis": "Jock Stein is the reason Celtic conquered Europe.",
    "reasonLine": "Jock Stein",
    "isLine": "is the reason for",
    "roleLabel": "Manager",
    "kind": "coach",
    "era": "1965 — 1978",
    "colors": {
      "paper": "#038d27",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#0b0b0c"
    },
    "pattern": "arc",
    "atmosphere": "germany",
    "story": [
      "Stein took a Glasgow club and made it the first British side to win the European Cup. The Lisbon Lions of 1967 were all born within thirty miles of Celtic Park. That is not a recruitment flex. That is a manager turning a neighbourhood into the best team on earth for one sacred night.",
      "Nine titles in a row followed. The modern Celtic — domestic overlord, European romantic — still lives in Stein's house. Without him, Celtic are a historic club with a famous support. With him, they have a star above the badge that nobody can take off."
    ],
    "momentLabel": "Lisbon 1967",
    "moment": "A European Cup won by local men, and a first for British football."
  },
  {
    "slug": "benfica",
    "club": "Benfica",
    "shortClub": "Benfica",
    "city": "Lisbon",
    "country": "Portugal",
    "region": "europe",
    "people": [
      "Eusébio"
    ],
    "thesis": "Eusébio is the reason the world knows Benfica.",
    "reasonLine": "Eusébio",
    "isLine": "is the reason for",
    "roleLabel": "Player",
    "kind": "player",
    "era": "1960 — 1975",
    "colors": {
      "paper": "#e03c31",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#0b0b0c"
    },
    "pattern": "sun",
    "atmosphere": "madrid",
    "story": [
      "Béla Guttmann built the side. Eusébio made it immortal. Two European Cups, a 1962 night against Real Madrid, a World Cup Golden Boot in 1966, and a statue outside the stadium that supporters still touch. He is the reason a Lisbon club sits in the global memory rather than only in the Portuguese one.",
      "The curse Guttmann supposedly left behind is a story. The player is not. Benfica's sense of itself as the Eagles, the people's club, the house of the Black Panther — that is Eusébio, walking out of Mozambique and into Europe's first great African football myth."
    ],
    "momentLabel": "1962",
    "moment": "A European Cup in Amsterdam against Madrid, and a name the continent never forgot."
  },
  {
    "slug": "marseille",
    "club": "Olympique de Marseille",
    "shortClub": "Marseille",
    "city": "Marseille",
    "country": "France",
    "region": "europe",
    "people": [
      "Bernard Tapie"
    ],
    "thesis": "Bernard Tapie is the reason Marseille remain France's only European champions.",
    "reasonLine": "Bernard Tapie",
    "isLine": "is the reason for",
    "roleLabel": "President",
    "kind": "president",
    "era": "1986 — 1994",
    "colors": {
      "paper": "#0a2e6b",
      "ink": "#f4f1ea",
      "a": "#c4a35a",
      "b": "#f4f1ea"
    },
    "pattern": "wave",
    "atmosphere": "paris",
    "story": [
      "Tapie was chaos in a suit. He was also the man who dragged OM to the 1993 Champions League — still the only French club to have won it. Papin, Deschamps, Barthez, a city that already believed it was a country, and a president who spent like the dream was due.",
      "The scandal that followed is part of the story and does not erase the star. Today's Marseille chase that night every season. Nobody else in France has one to chase. That is Tapie: the gift and the stain, inseparable."
    ],
    "momentLabel": "Munich 1993",
    "moment": "Basile Boli's header. A Champions League. A French unique that still stands."
  },
  {
    "slug": "galatasaray",
    "club": "Galatasaray",
    "shortClub": "Galatasaray",
    "city": "Istanbul",
    "country": "Turkey",
    "region": "europe",
    "people": [
      "Fatih Terim"
    ],
    "thesis": "Fatih Terim is the reason Galatasaray became Europe's problem.",
    "reasonLine": "Fatih Terim",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "1996 — 2000, and after",
    "colors": {
      "paper": "#a90432",
      "ink": "#f4f1ea",
      "a": "#f3b61f",
      "b": "#f4f1ea"
    },
    "pattern": "sun",
    "atmosphere": "southam",
    "story": [
      "The Emperor. Terim took Galatasaray to the 2000 UEFA Cup — the first major European trophy for a Turkish club — and a Super Cup against Real Madrid that Istanbul still talks about as if it happened last week. Four straight league titles around it. A way of playing that matched the noise of the stands.",
      "He came back, left, came back. The club's modern self-image is his: lions, not underdogs. Without Terim, Gala are a giant of Turkish football. With him, they have a night in Copenhagen and a seat in the European memory."
    ],
    "momentLabel": "Copenhagen 2000",
    "moment": "A UEFA Cup on penalties, then a Super Cup against Madrid. Turkey, on the map."
  },
  {
    "slug": "atalanta",
    "club": "Atalanta",
    "shortClub": "Atalanta",
    "city": "Bergamo",
    "country": "Italy",
    "region": "europe",
    "rising": true,
    "people": [
      "Gian Piero Gasperini"
    ],
    "thesis": "Gian Piero Gasperini is the reason Atalanta crash the party.",
    "reasonLine": "Gian Piero Gasperini",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "2016 — 2025",
    "colors": {
      "paper": "#1b365d",
      "ink": "#f4f1ea",
      "a": "#c8102e",
      "b": "#f4f1ea"
    },
    "pattern": "split",
    "atmosphere": "italy",
    "story": [
      "Bergamo is not supposed to live in the Champions League. Gasperini arrived and installed a 3-4-3 that hunted like a pack. Top-four finishes. A Europa League in 2024. Forwards that every giant tried to buy. A club that used to sell its best ideas now selling its best players and still attacking.",
      "Percassi's presidency funded it. Gasperini is the reason the world learned the name. Today's Atalanta is a tactical argument other coaches steal, and a small city that got used to Thursday nights under the lights."
    ],
    "momentLabel": "Dublin 2024",
    "moment": "A first European trophy, 3–0, and a method finally given a cup to sit on."
  },
  {
    "slug": "sevilla",
    "club": "Sevilla",
    "shortClub": "Sevilla",
    "city": "Seville",
    "country": "Spain",
    "region": "europe",
    "people": [
      "Monchi"
    ],
    "thesis": "Monchi is the reason Sevilla became the kings of Thursday night.",
    "reasonLine": "Monchi",
    "isLine": "is the reason for",
    "roleLabel": "Sporting director",
    "kind": "president",
    "era": "2000 — now",
    "colors": {
      "paper": "#f4f1ea",
      "ink": "#c8102e",
      "a": "#c8102e",
      "b": "#1a1a1a"
    },
    "pattern": "cross",
    "atmosphere": "madrid",
    "story": [
      "Ramón Rodríguez Verdejo — Monchi — built the most copied scouting department in Europe. Buy cheap, teach, sell dear, win the UEFA Cup anyway. Then win it again. Seven Europa League titles is not a coincidence. It is a man in an office who could see a player before the market could.",
      "Sevilla's today level is that machine: a club that lives in Europe without Madrid's money. Coaches rotate. The method stays. That is why a city side from Andalusia sits in this list with the presidents and the prophets."
    ],
    "momentLabel": "The seven",
    "moment": "A Europa League collection no one else can touch — built from other clubs' leftovers."
  },
  {
    "slug": "boca",
    "club": "Boca Juniors",
    "shortClub": "Boca",
    "city": "Buenos Aires",
    "country": "Argentina",
    "region": "south-america",
    "people": [
      "Carlos Bianchi"
    ],
    "thesis": "Carlos Bianchi is the reason Boca became a continental monster.",
    "reasonLine": "Carlos Bianchi",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "1998 — 2004",
    "colors": {
      "paper": "#0b3b8c",
      "ink": "#f4f1ea",
      "a": "#c4a35a",
      "b": "#f4f1ea"
    },
    "pattern": "stripes",
    "atmosphere": "southam",
    "story": [
      "Maradona is Boca's soul. Bianchi is Boca's haul. In two spells he won four Copa Libertadores and a Club World Cup, turning La Bombonera into a problem the whole of South America had to solve. Riquelme at his shoulder. Palermo in the air. A packed blue-and-gold cage that ate visitors.",
      "Today's Boca still measure coaches against that run. The club was always huge in the barrio. Bianchi is why it became huge on the continent in the modern era — a machine that could leave Buenos Aires and come home with the big cup."
    ],
    "momentLabel": "Tokyo 2003",
    "moment": "A Club World Cup, and a Boca side that had already collected Libertadores like stamps."
  },
  {
    "slug": "river",
    "club": "River Plate",
    "shortClub": "River",
    "city": "Buenos Aires",
    "country": "Argentina",
    "region": "south-america",
    "people": [
      "Marcelo Gallardo"
    ],
    "thesis": "Marcelo Gallardo is the reason River became South America's standard again.",
    "reasonLine": "Marcelo Gallardo",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "2014 — 2022",
    "colors": {
      "paper": "#f4f1ea",
      "ink": "#c8102e",
      "a": "#c8102e",
      "b": "#0b0b0c"
    },
    "pattern": "bars",
    "atmosphere": "southam",
    "story": [
      "Gallardo took over a River that had recently known the humiliation of relegation. He left as the most successful coach in the club's history: Libertadores, a famous final against Boca in Madrid, a style that mixed bite with the old River elegance. The Monumental became a cathedral again.",
      "Muñeco did not invent River. He restored the idea that this club should set the continent's level, not chase it. Today's River still speak in his sentences — academy first, the big night as a right, not a surprise."
    ],
    "momentLabel": "Madrid 2018",
    "moment": "A Libertadores final against Boca, in Spain, won the River way — late, loud, inevitable."
  },
  {
    "slug": "santos",
    "club": "Santos",
    "shortClub": "Santos",
    "city": "Santos",
    "country": "Brazil",
    "region": "south-america",
    "people": [
      "Pelé"
    ],
    "thesis": "Pelé is the reason the world knows Santos.",
    "reasonLine": "Pelé",
    "isLine": "is the reason for",
    "roleLabel": "Player",
    "kind": "player",
    "era": "1956 — 1974",
    "colors": {
      "paper": "#f4f1ea",
      "ink": "#0b0b0c",
      "a": "#0b0b0c",
      "b": "#c8102e"
    },
    "pattern": "ring",
    "atmosphere": "brazil",
    "story": [
      "A port club in São Paulo state became the most famous team on earth because one boy from Minas Gerais scored more than a thousand goals in its shirt. Two World Cups as a Santos player in the world's mind. Intercontinental Cups. Tours that filled stadiums on every continent.",
      "Santos have had other geniuses — Neymar among them. None of them is the reason the badge travels. Pelé made a coastal club into a global noun. Today's Santos live in that light and that shadow, which is the only honest way to describe the place."
    ],
    "momentLabel": "The king",
    "moment": "A thousand-plus goals, two world club titles, and a name that still opens every door."
  },
  {
    "slug": "flamengo",
    "club": "Flamengo",
    "shortClub": "Flamengo",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "region": "south-america",
    "people": [
      "Zico"
    ],
    "thesis": "Zico is the reason Flamengo became Brazil's most loved.",
    "reasonLine": "Zico",
    "isLine": "is the reason for",
    "roleLabel": "Player",
    "kind": "player",
    "era": "1971 — 1989",
    "colors": {
      "paper": "#c8102e",
      "ink": "#f4f1ea",
      "a": "#0b0b0c",
      "b": "#f4f1ea"
    },
    "pattern": "stripes",
    "atmosphere": "brazil",
    "story": [
      "The White Pelé, in a red-and-black shirt, in a city that already knew how to throw a party. Zico's Flamengo won the Libertadores and the Intercontinental Cup in 1981, beating a Liverpool side that sat at the top of England. A nation of supporters attached themselves to that team and never really left.",
      "Jorge Jesus later gave them a modern European night. The love is older. Flamengo's today level — the biggest shirt in Brazil, a Maracanã that fills itself — is a Zico construction. He is why the rest of the country has to live with the noise."
    ],
    "momentLabel": "Tokyo 1981",
    "moment": "Liverpool beaten. A world title. A club that stopped being only Rio's."
  },
  {
    "slug": "palmeiras",
    "club": "Palmeiras",
    "shortClub": "Palmeiras",
    "city": "São Paulo",
    "country": "Brazil",
    "region": "south-america",
    "rising": true,
    "people": [
      "Abel Ferreira"
    ],
    "thesis": "Abel Ferreira is the reason Palmeiras set the continent's level again.",
    "reasonLine": "Abel Ferreira",
    "isLine": "is the reason for",
    "roleLabel": "Coach",
    "kind": "coach",
    "era": "2020 — now",
    "colors": {
      "paper": "#006437",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#0b0b0c"
    },
    "pattern": "grid",
    "atmosphere": "brazil",
    "story": [
      "A Portuguese coach walked into São Paulo and built the most complete South American club side of the 2020s. Two Libertadores in a row. League titles. A method: intense, organised, unromantic in the best way. Allianz Parque as a fortress. Rivals forced to catch up.",
      "Palmeiras were already a giant of Brazil. Abel is why they became the standard of the continent again — the club others measure a season against. Today's level, in the user's sense: not history. The thing you see when you open the table."
    ],
    "momentLabel": "Back to back",
    "moment": "Libertadores in 2020 and 2021 — a Portuguese idea, a Brazilian giant, a new ceiling."
  },
  {
    "slug": "al-ahly",
    "club": "Al Ahly",
    "shortClub": "Al Ahly",
    "city": "Cairo",
    "country": "Egypt",
    "region": "africa",
    "people": [
      "Mahmoud El Khatib"
    ],
    "thesis": "Mahmoud El Khatib is the reason Al Ahly remain Africa's club.",
    "reasonLine": "Mahmoud El Khatib",
    "isLine": "is the reason for",
    "roleLabel": "Player · President",
    "kind": "president",
    "era": "1972 — now",
    "colors": {
      "paper": "#c8102e",
      "ink": "#f4f1ea",
      "a": "#f4f1ea",
      "b": "#0b0b0c"
    },
    "pattern": "sun",
    "atmosphere": "madrid",
    "story": [
      "Bibo. The finest Egyptian footballer of his age, then the president who has sat over the most decorated club on the African continent. Record CAF Champions League titles. A Cairo derby that stops the city. A shirt that travels from the Maghreb to the Cape as a fact, not a brand campaign.",
      "Al Ahly's machine is bigger than one man. El Khatib is the face of the continuity: player, legend, president. He is why the club still feels like an institution rather than a cycle of coaches. Africa's giant has a keeper at the door."
    ],
    "momentLabel": "The record",
    "moment": "A CAF Champions League collection that sits alone, and a president who once scored the goals himself."
  }
];

export const FILTERS = [
  { id: "all", label: "All clubs" },
  { id: "europe", label: "Europe" },
  { id: "south-america", label: "South America" },
  { id: "africa", label: "Africa" },
  { id: "rising", label: "Today's level" },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];

export function getClub(slug: string) {
  return CLUBS.find((c) => c.slug === slug);
}

export function filterClubs(query: string, filter: FilterId) {
  const q = query.trim().toLowerCase();
  return CLUBS.filter((club) => {
    if (filter === "rising" && !club.rising) return false;
    if (filter !== "all" && filter !== "rising" && club.region !== filter) return false;
    if (!q) return true;
    const hay = [club.club, club.shortClub, club.city, club.country, club.thesis, club.reasonLine, ...club.people]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function relatedClubs(club: Club, limit = 3) {
  return CLUBS.filter((c) => c.slug !== club.slug && c.region === club.region).slice(0, limit);
}
