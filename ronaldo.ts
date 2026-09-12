export type Cr7Colors = {
  paper: string;
  ink: string;
  a: string;
  b: string;
};

export type Cr7Spell = {
  id: string;
  club: string;
  years: string;
  role: string;
  shirt: string;
  image: string;
  imageAlt: string;
  colors: Cr7Colors;
  apps: number;
  goals: number;
  assists?: number;
  thesis: string;
  story: string[];
  trophies: { name: string; years: string }[];
};

export const CR7_UPDATED = "9 September 2026";

export const CR7_HEADLINE = {
  name: "Cristiano Ronaldo",
  number: "7",
  kicker: "The other argument",
  line: "is the reason for football as a global sport.",
  born: "5 February 1985 · Funchal, Madeira",
};

export const CR7_STATS = [
  { label: "Career goals", value: "979" },
  { label: "Appearances", value: "1,335" },
  { label: "Assists", value: "260" },
  { label: "Hat-tricks", value: "66" },
  { label: "Ballon d'Or", value: "5" },
  { label: "Champions League", value: "5" },
  { label: "Portugal goals", value: "146" },
  { label: "Portugal caps", value: "233" },
];

export const CR7_SPELLS: Cr7Spell[] = [
  {
    id: "sporting",
    club: "Sporting CP",
    years: "2002 — 2003",
    role: "The debut. A skinny winger from Madeira who made Old Trafford hold its breath on a pre-season night, then never went home.",
    shirt: "8",
    image: "/legacy/sporting.jpg",
    imageAlt: "Cristiano Ronaldo in the Sporting CP green and white hoops",
    colors: { paper: "#006437", ink: "#f4f1ea", a: "#f4f1ea", b: "#0b0b0c" },
    apps: 31,
    goals: 5,
    assists: 6,
    thesis: "The factory that let him leave — and still claims the origin story.",
    story: [
      "Alcochete produced him. The Super Cup in 2002 was the first senior medal. Thirty-one games, five goals, a step-over that already looked like a threat rather than a trick. Sporting did not keep him. They did something rarer: they sold a boy to Manchester United after one night at Alvalade and spent twenty years being able to say they were first.",
      "He wore 8, not 7. The number would wait. What did not wait was the body — already quicker than the men marking him — and a hunger that made a Lisbon academy look too small by the spring of 2003.",
    ],
    trophies: [{ name: "Supertaça Cândido de Oliveira", years: "2002" }],
  },
  {
    id: "united-1",
    club: "Manchester United",
    years: "2003 — 2009",
    role: "The making of a world player. Ferguson turned a showman into a scorer, then into the best player on earth.",
    shirt: "7",
    image: "/legacy/united-first.jpg",
    imageAlt: "Cristiano Ronaldo in the Manchester United AIG shirt, arm raised after a goal",
    colors: { paper: "#9b1d2e", ink: "#f4f1ea", a: "#f4f1ea", b: "#1a1a1a" },
    apps: 292,
    goals: 118,
    assists: 64,
    thesis: "The club that gave him the 7, the first Ballon d'Or, and a European Cup.",
    story: [
      "Ferguson paid £12.24 million for an 18-year-old who nutmegged the champions in a friendly and made Rio Ferdinand tell the manager to sign him before the bus left Lisbon. The first seasons were stepovers and bookings. Then the 2006 World Cup, a new gravity, and a 2007–08 season that still looks like a video game: 42 goals, the Premier League, the Champions League in Moscow, the Ballon d'Or.",
      "He learned to score with his head, his left, his right, from 30 yards. He became the reason United could lose Ronaldo in 2009 and spend a decade trying to replace a feeling rather than a winger. The first spell is the origin of everything that followed — including the idea that a Portuguese boy could own English football.",
    ],
    trophies: [
      { name: "Premier League", years: "2006–07, 2007–08, 2008–09" },
      { name: "FA Cup", years: "2003–04" },
      { name: "League Cup", years: "2005–06, 2008–09" },
      { name: "FA Community Shield", years: "2007, 2008" },
      { name: "UEFA Champions League", years: "2007–08" },
      { name: "FIFA Club World Cup", years: "2008" },
    ],
  },
  {
    id: "madrid",
    club: "Real Madrid",
    years: "2009 — 2018",
    role: "The scoring machine. A world-record signing who became the club's all-time top scorer and made the Champions League a habit.",
    shirt: "7 / 9",
    image: "/legacy/madrid.jpg",
    imageAlt: "Cristiano Ronaldo in Real Madrid white, holding the Champions League trophy and showing five fingers",
    colors: { paper: "#f4f1ea", ink: "#101318", a: "#00529f", b: "#101318" },
    apps: 438,
    goals: 450,
    assists: 131,
    thesis: "Four European Cups in five seasons. 450 goals. The Bernabéu as a personal theatre.",
    story: [
      "€94 million, a world record, a circus at the Bernabéu. Then the numbers started and never stopped: 311 La Liga goals, 105 in the Champions League in a white shirt, 44 hat-tricks, seasons of 50, 55, 60. He did not inherit Madrid's European reputation. He reopened it. La Décima in Lisbon — against Atlético, in extra time, the trophy that had waited twelve years — then three more in four seasons.",
      "Pérez bought a Galáctico. What he got was a volume scorer who treated knockout football as a personal ledger. The bicycle kick against Juventus in 2018. The hat-tricks in Munich and Milan. The night in Cardiff, the night in Kyiv, the night in Milan. When he left, Madrid's record books were a Portuguese document. He is still the club's greatest goalscorer. That sentence does not need a qualifier.",
    ],
    trophies: [
      { name: "La Liga", years: "2011–12, 2016–17" },
      { name: "Copa del Rey", years: "2010–11, 2013–14" },
      { name: "Supercopa de España", years: "2012, 2017" },
      { name: "UEFA Champions League", years: "2013–14, 2015–16, 2016–17, 2017–18" },
      { name: "UEFA Super Cup", years: "2014, 2016, 2017" },
      { name: "FIFA Club World Cup", years: "2014, 2016, 2017" },
    ],
  },
  {
    id: "juventus",
    club: "Juventus",
    years: "2018 — 2021",
    role: "The Italian chapter. He walked into Serie A at 33 and still scored a hundred. He made Juve champions, then made them bigger than Italy.",
    shirt: "7",
    image: "/legacy/juventus.jpg",
    imageAlt: "Cristiano Ronaldo in Juventus stripes kissing the Supercoppa Italiana trophy",
    colors: { paper: "#101010", ink: "#f4f1ea", a: "#f4f1ea", b: "#9a9a9a" },
    apps: 134,
    goals: 101,
    assists: 22,
    thesis: "A hundred goals in Italy, two scudetti, and proof that the machine did not need Madrid.",
    story: [
      "€100 million, age 33, a league that was supposed to slow him down. He scored 21 in the first Serie A season, 31 in the second, 29 in the third. He became the first player to win the league in England, Spain and Italy. Juventus got two scudetti, a Coppa, two Supercoppe, and a global shirt they could not have bought with anyone else.",
      "The Champions League did not follow him to Turin. That is the honest sentence. Everything else did: the 100-goal mark, the headers that still looked unfair, a club that sold out Asia because a Madeiran was wearing black and white. He left as Juventus's most efficient modern import — and as the man who proved the records were portable.",
    ],
    trophies: [
      { name: "Serie A", years: "2018–19, 2019–20" },
      { name: "Coppa Italia", years: "2020–21" },
      { name: "Supercoppa Italiana", years: "2018, 2020" },
    ],
  },
  {
    id: "united-2",
    club: "Manchester United",
    years: "2021 — 2022",
    role: "The return. Eighteen Premier League goals in a broken side, then a public divorce. Home is not always a homecoming.",
    shirt: "7",
    image: "/legacy/united-return.jpg",
    imageAlt: "Cristiano Ronaldo in the Manchester United TeamViewer shirt, looking up",
    colors: { paper: "#7a1522", ink: "#f4f1ea", a: "#f4f1ea", b: "#1a1a1a" },
    apps: 54,
    goals: 27,
    assists: 5,
    thesis: "A second spell that scored, then soured — and still added 27 goals to the ledger.",
    story: [
      "City were close. United moved faster. Old Trafford sounded like 2008 on the night he scored twice against Newcastle. He finished 2021–22 as the club's top scorer with 24 goals in all competitions, in a team that was not built to feed him. The second season lasted 16 games. Ten Hag, a leaked interview, a contract torn up.",
      "It is the unhappiest chapter and still a productive one. Combined across both spells he has 145 United goals — a number only the club's true ghosts sit above. The return proved he could still score in the Premier League at 37. It also proved that nostalgia is not a midfield.",
    ],
    trophies: [],
  },
  {
    id: "al-nassr",
    club: "Al-Nassr",
    years: "2023 — now",
    role: "The closer. He took a Saudi club global, scored at a clip the young version would recognise, and finally lifted the league.",
    shirt: "7",
    image: "/legacy/al-nassr.jpg",
    imageAlt: "Cristiano Ronaldo in the Al-Nassr yellow shirt, fist clenched in celebration",
    colors: { paper: "#f5c400", ink: "#0b0b0c", a: "#0b0b0c", b: "#f4f1ea" },
    apps: 153,
    goals: 132,
    assists: 23,
    thesis: "A league title in a fourth country. 132 goals. The sport's centre of gravity, shifted by one signature.",
    story: [
      "December 2022, a free transfer, a wage that rewrote the market. Sceptics called it a retirement tour. He answered with 54 goals in calendar 2023, an Arab Club Champions Cup won against Al-Hilal with two extra-time goals, and a hat-trick habit that did not notice the time zone. Al-Nassr became a worldwide broadcast because he was in yellow.",
      "The league took longer. Second place, cup finals that slipped, Super Cups that went to someone else. Then 21 May 2026: two goals in a 4–1 against Damac, a first Saudi Pro League title since 2019, his eighth league championship, and a fourth country. He is 41. He is still the reason a Friday night in Riyadh is a global fixture.",
    ],
    trophies: [
      { name: "Saudi Pro League", years: "2025–26" },
      { name: "Arab Club Champions Cup", years: "2023" },
    ],
  },
];

export const CR7_CLUB_RECORDS = [
  {
    club: "Sporting CP",
    items: [
      "The origin: 31 games, a Super Cup, then a sale that still funds the academy story.",
      "Wore 8. The 7 was waiting in Manchester.",
    ],
  },
  {
    club: "Manchester United",
    items: [
      "145 goals across two spells — among the club's true ghosts.",
      "First Ballon d'Or in a United shirt, 2008.",
      "42-goal 2007–08: Premier League, Champions League in Moscow, the making of a world player.",
      "Returned at 36, scored 18 in the Premier League in a broken side.",
    ],
  },
  {
    club: "Real Madrid",
    items: [
      "All-time top scorer: 450 goals in 438 games — more than a goal a game.",
      "105 Champions League goals in white. Four European Cups in five seasons.",
      "44 hat-tricks in a Madrid shirt, 34 of them in La Liga.",
      "World-record signing who left as the club's greatest goalscorer.",
    ],
  },
  {
    club: "Juventus",
    items: [
      "101 goals in 134 games after his 33rd birthday.",
      "First player to win the league in England, Spain and Italy.",
      "Two scudetti, a Coppa, two Supercoppe — and a global shirt.",
    ],
  },
  {
    club: "Al-Nassr",
    items: [
      "132 goals and counting. First man to 100 goals at four clubs.",
      "Saudi Pro League title, 21 May 2026 — a fourth country, an eighth league.",
      "The signature that turned a Friday night in Riyadh into a global fixture.",
    ],
  },
];

export const CR7_TRANSFERS = [
  {
    date: "12 August 2003",
    from: "Sporting CP",
    to: "Manchester United",
    fee: "£12.24m",
    note: "Ferguson saw him once, in a friendly, and refused to leave Lisbon without him.",
  },
  {
    date: "1 July 2009",
    from: "Manchester United",
    to: "Real Madrid",
    fee: "£80m / €94m",
    note: "A world-record fee. The most expensive footballer who had ever lived — for about five minutes of history, and then for nine years of goals.",
  },
  {
    date: "10 July 2018",
    from: "Real Madrid",
    to: "Juventus",
    fee: "€100m",
    note: "Madrid's record scorer, sold at 33. Turin paid anyway. Italy learned why.",
  },
  {
    date: "31 August 2021",
    from: "Juventus",
    to: "Manchester United",
    fee: "Free",
    note: "A homecoming on deadline day. The Theatre of Dreams, second sitting.",
  },
  {
    date: "30 December 2022",
    from: "Manchester United",
    to: "Al-Nassr",
    fee: "Free",
    note: "The contract that moved a league. Saudi football's before-and-after is his signature.",
  },
];

export const CR7_PORTUGAL = {
  image: "/legacy/portugal.jpg",
  imageAlt: "Cristiano Ronaldo kissing the UEFA Nations League trophy in Portugal red",
  colors: { paper: "#7a1e28", ink: "#f4f1ea", a: "#f4f1ea", b: "#0b0b0c" },
  caps: 233,
  goals: 146,
  assists: 44,
  hatTricks: 10,
  debut: "20 August 2003 vs Kazakhstan",
  firstGoal: "12 June 2004 vs Greece, Euro 2004",
  story: [
    "Portugal were a talented tournament side before him — Euro 2004 hosts, a golden generation, a habit of almost. He made them a country that expected the night to end with a trophy. 233 caps. 146 goals. The men's international appearance record, the men's international scoring record, and a dressing room that has walked out behind him for two decades.",
    "The 2016 European Championship is the sentence that ends arguments about 'importance'. He left the final in Paris after 25 minutes, in tears, with a knee that had just given up. He still ran the touchline like a coach. Eder scored. Portugal were champions of Europe for the first time. The captain who could not finish the match is the reason they were in it — 3 goals in the group, the quarter-final against Poland, the weight of a nation that had never lifted the thing.",
    "Then the Nations League in 2019, a hat-trick against Switzerland in the semi-final, a first trophy on home grass. Then another Nations League in 2025. Six World Cups, from 2006 to 2026 — the only player to score at all six. He has been Portugal's youngest World Cup scorer and its oldest. That is not a career. That is a census of a country's footballing life.",
  ],
  trophies: [
    { name: "UEFA European Championship", years: "2016" },
    { name: "UEFA Nations League", years: "2018–19, 2024–25" },
  ],
  roleBeats: [
    {
      title: "Euro 2016",
      text: "Captain. Top-four finish as a player, then a final he had to finish from the bench. Portugal's first major trophy is a Ronaldo project that Éder happened to score.",
    },
    {
      title: "Nations League, twice",
      text: "2019 in Porto: a hat-trick in the semi, a first home trophy. 2025: the encore. He did not treat the 'small' cup as small.",
    },
    {
      title: "The World Cup map",
      text: "Scored at Germany 2006, South Africa 2010, Brazil 2014, Russia 2018, Qatar 2022, and 2026. Nobody else has a stamp collection like that.",
    },
    {
      title: "The record that isn't close",
      text: "146 international goals. 233 caps. Ali Daei was the old ceiling. Ronaldo treated it as a starting point.",
    },
  ],
};

export const CR7_AWARDS = [
  { name: "Ballon d'Or", count: "5", years: "2008, 2013, 2014, 2016, 2017" },
  { name: "FIFA World Player / The Best", count: "3", years: "2008, 2016, 2017" },
  { name: "UEFA Best Player in Europe", count: "4", years: "2008, 2014, 2016, 2017" },
  { name: "European Golden Shoe", count: "4", years: "2007–08, 2010–11, 2013–14, 2014–15" },
  { name: "Puskás Award", count: "1", years: "2009 — the bicycle against Porto" },
  { name: "UEFA Champions League top scorer", count: "7", years: "2007–08, 2012–13, 2013–14, 2014–15, 2015–16, 2016–17, 2017–18" },
  { name: "Premier League Player of the Season", count: "2", years: "2006–07, 2007–08" },
  { name: "La Liga Best Player", count: "1", years: "2013–14" },
  { name: "Serie A Footballer of the Year", count: "2", years: "2019, 2020" },
  { name: "Saudi Pro League Player of the Year", count: "2", years: "2023–24, 2024–25" },
  { name: "FIFA Club World Cup Golden Ball", count: "1", years: "2016" },
  { name: "UEFA Team of the Year / FIFPRO World 11", count: "14+", years: "A decade as a default selection" },
];

export const CR7_RECORDS = [
  { title: "Most official senior career goals", detail: "979 and climbing — the all-time lead, still adding in a fifth decade." },
  { title: "Most men's international goals", detail: "146 for Portugal. The record that used to belong to Ali Daei, now a Portuguese document." },
  { title: "Most men's international caps", detail: "233. A Guinness record. A career that is also a census." },
  { title: "Most UEFA Champions League goals", detail: "140. The next names are not close enough to argue." },
  { title: "Most FIFA World Cups scored in", detail: "6 — 2006, 2010, 2014, 2018, 2022, 2026. The only man with that stamp set." },
  { title: "100 goals at four clubs", detail: "Real Madrid 450, Manchester United 145, Al-Nassr 132, Juventus 101. Nobody else has this passport." },
  { title: "League champion in four countries", detail: "England, Spain, Italy, Saudi Arabia. An eighth league title, a fourth flag." },
  { title: "Most goals after turning 30", detail: "The ageing curve that never arrived. Hundreds of them, still arriving." },
  { title: "Most Champions League hat-tricks", detail: "8 — a record shared with Messi, owned in the nights that decided ties." },
  { title: "Most headed goals", detail: "150+. A winger who became a centre-forward who never stopped being airborne." },
  { title: "Most Club World Cup goals", detail: "7. Madrid's December habit, with his name on the scoresheet." },
  { title: "Only player to win league, cup, supercup, UCL, CWC, Golden Shoe and Ballon d'Or at two clubs", detail: "Manchester United and Real Madrid. A double career inside one career." },
];

export const CR7_HAT_TRICKS = {
  total: 66,
  international: 10,
  ucl: 8,
  madrid: 44,
  note: "Sixty-six times a match became a private recital. Forty-four of them in Madrid white.",
  famous: [
    { when: "12 Jan 2008", where: "Newcastle (A)", shirt: "Manchester United", note: "The first Premier League hat-trick. A winger announcing he was now a scorer." },
    { when: "13 Jun 2012", where: "Netherlands", shirt: "Portugal", note: "Euro 2012. Three in one night, a tournament that already belonged to him in the mind." },
    { when: "15 Nov 2013", where: "Sweden", shirt: "Portugal", note: "World Cup play-off. A hat-trick that dragged Portugal to Brazil and ended Ibrahimović's night." },
    { when: "5 May 2010", where: "Mallorca", shirt: "Real Madrid", note: "Early Madrid blood. The first of a La Liga record 34 hat-tricks in the league." },
    { when: "30 Apr 2013", where: "Bayern Munich", shirt: "Real Madrid", note: "A Champions League hat-trick in Munich. Knockout football as a personal sport." },
    { when: "12 May 2015", where: "Espanyol", shirt: "Real Madrid", note: "Season of 48 Liga goals, 61 in all. The Pichichi that looked like a typing error." },
    { when: "12 Apr 2017", where: "Bayern Munich", shirt: "Real Madrid", note: "Another Bavarian hat-trick. The road to Cardiff, written in threes." },
    { when: "3 Apr 2018", where: "Juventus", shirt: "Real Madrid", note: "The bicycle. The hat-trick. The night Turin applauded him out of the tie." },
    { when: "5 Jun 2019", where: "Switzerland", shirt: "Portugal", note: "Nations League semi-final. Three goals, a trophy weekend in Porto about to begin." },
    { when: "2023–26", where: "Al-Nassr", shirt: "Al-Nassr", note: "The Saudi hat-tricks. Proof that the recital did not need a European midweek." },
  ],
};

export const CR7_GOAT = [
  "The GOAT argument is usually a feeling with a spreadsheet taped to it. His spreadsheet is the feeling.",
  "Five Ballons d'Or. Five Champions Leagues, in two shirts. League titles in four countries. The international goals record, the caps record, the Champions League goals record, the all-time senior goals record. A hat-trick against Sweden that booked a World Cup. A final in Paris he could not finish, and a country that became champions anyway because he had carried them there. Six World Cups with his name on a scoresheet.",
  "Messi has more Ballons and a World Cup. That sentence is true and it is not the whole argument. Ronaldo has the bigger room: more teams, more leagues, more nights that were supposed to be someone else's. He scored 450 times for Real Madrid. He scored 145 times for United. He scored a hundred in Italy after his 33rd birthday. He is still scoring in Riyadh at 41, close enough to 1,000 that the number has stopped being a joke.",
  "The other part is the one you cannot put in a table. The body that was rebuilt, twice. The free kicks that started going in when people said they never would. The headers. The last-minute penalties. The press conference chin. Siuu as a folk song. A boy from Madeira who decided the centre of the sport would have to come to him — Lisbon, Manchester, Madrid, Turin, Manchester again, Riyadh — and it did.",
  "That is why he is the greatest. Not because every metric sits in his column. Because no one else made the whole map of football rearrange itself around a single shirt number, for this long, in this many languages, and is still not finished.",
];

export const CR7_SECTIONS = [
  { id: "stats", label: "The numbers" },
  { id: "clubs", label: "Clubs" },
  { id: "transfers", label: "Transfers" },
  { id: "trophies", label: "Club trophies" },
  { id: "club-records", label: "Club records" },
  { id: "portugal", label: "Portugal" },
  { id: "awards", label: "Awards" },
  { id: "records", label: "Records" },
  { id: "hatricks", label: "Hat-tricks" },
  { id: "goat", label: "Why the GOAT" },
];
