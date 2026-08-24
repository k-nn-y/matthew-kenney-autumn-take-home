export const MAILTO = "mailto:aaryan@autumnplatform.com"
export const EMAIL = "aaryan@autumnplatform.com"

export const hero = {
  eyebrow: "FOR INDEPENDENT INNS AND SMALL HOTELS",
  eyebrowMobile: "FOR INDEPENDENT INNS",
  h1Line1: "We buy the ads.",
  h1Line2: "You pay when a guest books.",
  lead: "Autumn runs Google Ads, Google Maps and Google Hotel Ads for independent inns. We cover the ad spend ourselves. You pay 13% of the bookings we drive — and nothing at all if we drive none.",
  primary: "Reply to Aaryan",
  secondary: "See what we'd actually do",
  strip: ["Google Ads", "Google Maps", "Google Hotel Ads"],
}

export const priceBand = {
  leadLabel: "WHAT A BOOKING COSTS YOU",
  columns: [
    {
      label: "AN ONLINE TRAVEL AGENT TAKES",
      figure: "15–25%",
      recessive: true,
      note: "of every booking they send you. That money leaves your property.",
    },
    {
      label: "AUTUMN TAKES",
      figure: "13%",
      recessive: false,
      note: "of the bookings we drive. The other 87% stays with you.",
    },
    {
      label: "THE ADS ARE PAID FOR BY",
      figure: "Us",
      recessive: false,
      note: "Every month, out of our own pocket, whether a guest books or not.",
    },
  ],
  closing:
    "If we drive no bookings, your invoice reads nothing. The ad money was ours, the work was ours, and 13% of nothing is nothing.",
  stack: ["NO FIXED FEES", "NO AGENCY PREMIUM", "NO LONG-TERM CONTRACT"],
}

export const journey = {
  eyebrow: "WHAT WE ACTUALLY DO",
  headline: "One guest. One evening in November.",
  lead: "This is the whole of what we do, from her first search to the money landing in your account. Nothing in it happens on your desk, and nobody asks you to approve anything.",
  leadMobile:
    "This is the whole of what we do, from her first search to the money landing in your account. Nothing in it happens on your desk.",
  steps: [
    {
      time: "9.14 PM",
      place: "HARTFORD, CT",
      title: "A woman opens Google and types a room she can already picture.",
      quote: "\u201Cinns near stowe vt with a fireplace\u201D",
      body: null,
    },
    {
      time: "9.14 PM",
      place: "THE SAME SECOND",
      title:
        "The Brass Lantern is the first inn she sees — on Search, on the map, and in Google Hotels with your own nightly rate beside it.",
      titleMobile:
        "The Brass Lantern is the first inn she sees — on Search, on the map, and in Google Hotels with your own rate beside it.",
      quote: null,
      body: "We wrote the ad, set the bid and keep the listing accurate. AI is how a team this small can do that properly for a fourteen-room inn instead of only for a hundred-room hotel.",
    },
    {
      time: "9.19 PM",
      place: "FIVE MINUTES LATER",
      title: "She books two nights on your own website. Not on a travel agent's.",
      quote: null,
      body: "Her name, her email and her card go to you. You will meet her at the door on Friday.",
    },
    {
      time: "END OF THE MONTH",
      place: "YOUR INVOICE",
      title: "One line, for the bookings we drove. The ad spend is not on it.",
      quote: null,
      body: "If a month goes by and we drove nothing, no invoice arrives at all.",
    },
  ],
  card: {
    label: "THE BOOKING SHE MADE",
    title: "Two nights in November.",
    rows: [
      { label: "Stays with you", value: "$423" },
      { label: "Autumn\u2019s 13%", value: "$63" },
    ],
    total: { label: "SHE PAID", value: "$486" },
    adCost: {
      figure: "$31",
      text: "is what her click cost on Google. It is not in the arithmetic above and it is not on your invoice, because we paid it.",
    },
  },
}

export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  headline: "Three steps. None of them yours.",
  lead: "You are already the front desk, the breakfast service and the maintenance department. We are not going to add a fourth job and call it software.",
  steps: [
    {
      label: "STEP 01",
      title: "We learn the property.",
      body: "Where you are, who stays with you, and what a Friday in October is worth. We read your reviews and the listings you compete with.",
      yourPart: "Your part: one call, about half an hour.",
    },
    {
      label: "STEP 02",
      title: "We buy and run the ads.",
      body: "Google Ads, Google Maps and Google Hotel Ads, written in your voice and pointed at your own booking page. Every click is paid for out of our pocket.",
      yourPart: "Your part: nothing at all.",
    },
    {
      label: "STEP 03",
      title: "Guests arrive. One invoice.",
      body: "They book on your own website, so the guest is yours. At the end of the month you get one line for 13% of the bookings we drove.",
      yourPart: "Your part: have the room ready.",
    },
  ],
}

export const proofWall = {
  eyebrow: "WHAT IT DID",
  headline: "For inns about your size.",
  lead: "Every number below carries what went into it — the property, the rooms, the months it covers. Including the winter that came in at the bottom of our range.",
  cards: {
    metric1: {
      image: "/images/inn-exterior-porch.png",
      alt: "White clapboard inn with a wraparound porch and rocking chairs",
      figure: "+16%",
      figureLabel: "more direct bookings",
      provenanceLabel: "WHAT WENT IN",
      provenance:
        "Rabbit Hill Inn · Lower Waterford, VT · 14 rooms. October to March, against the same six months a year earlier.",
    },
    quote1: {
      quote:
        "\u201CWe were paying an agency $1,400 a month and I could never tell you what it bought. Now a bill only turns up when somebody has actually slept here.\u201D",
      attribution: "— Ellen Marsh, Rabbit Hill Inn · Lower Waterford, VT · 14 rooms",
    },
    metric2: {
      image: "/images/mug-wooden-table.png",
      alt: "Ceramic mug of coffee on a worn wooden table by a window",
      figure: "+11%",
      figureLabel: "more direct bookings",
      provenanceLabel: "WHAT WENT IN · THE BOTTOM OF OUR RANGE",
      provenance:
        "Deerfield House · Deerfield, MA · 9 rooms. Their first winter with us. Two of the three months were flat and March carried the year. We say 10–20% because both ends of it are real, and this is the end nobody puts on a website.",
    },
    quote2: {
      quote:
        "\u201CI did not know what Google Ads were and I still don't, particularly. What I know is that November was not empty this year, and nobody asked me to learn anything.\u201D",
      attribution: "— Tom Ferrand, Deerfield House · Deerfield, MA · 9 rooms",
    },
    guestNote: {
      label: "A NOTE FROM A GUEST",
      stamp: "SAT 09.12",
      body: "Room was perfect and your directions were spot on. We found you on Google — you were the first thing that came up. Thank you.",
      attribution: "Priya R., guest · forwarded to us by the innkeeper",
    },
    reserved: {
      label: "NOT REPORTED",
      line1:
        "We do not publish occupancy, revenue or guest data. It belongs to the innkeeper, not to us.",
      line2:
        "This space stays empty on purpose. A wall with no gaps in it is a wall that is lying to you.",
    },
  },
  mobileExpanderLabel: "Two more results, and a guest's note",
}

export const everythingElse = {
  eyebrow: "EVERYTHING ELSE",
  headline: "Five other things. Only if you want them.",
  lead: "Search is the whole offer, and it stands on its own. These five sit beside it. None of them is a condition of any other, and you can take one and leave four.",
  leadMobile:
    "Search is the whole offer, and it stands on its own. These five sit beside it. You can take one and leave four.",
  rows: [
    {
      label: "A booking engine that looks like your inn",
      body: "Three clicks from a room to a confirmation, on your own domain, in your own colors.",
    },
    {
      label: "A website worth pointing the ads at",
      body: "There is no sense buying the click if the page it lands on was built in 2014.",
    },
    {
      label: "Email that sounds like you wrote it",
      body: "We read a year of your own writing first. Nothing goes out that you would not have sent.",
    },
    {
      label: "Rates that move with your season",
      body: "Leaf season is not March. You keep the final say on every night of the year.",
    },
    {
      label: "Reviews, answered",
      body: "Drafted the same day, in your voice, and never posted until a person has read it.",
    },
  ],
}

export const flagship = {
  eyebrow: "THE FLAGSHIP PROGRAM",
  headline: "If you would rather we ran the whole thing.",
  lead: "Search, plus any of the five, handled together by the same small team. There are no fixed fees at all. We take 13% of the bookings we drive and nothing else, and the ad spend is still ours.",
  miniColumns: [
    { figure: "None", label: "FIXED FEES" },
    { figure: "13%", label: "OF BOOKINGS DRIVEN" },
    { figure: "Ours", label: "THE AD SPEND, STILL" },
  ],
  cta: "Ask Aaryan about Flagship",
  underCta: "One email. There is no form and no application behind this.",
  image: "/images/shack-river.png",
  imageAlt: "Weathered wooden boathouse on a still river lined with autumn trees",
}

export const questions = {
  eyebrow: "QUESTIONS",
  headline: "The ones people actually ask.",
  lead: "If yours is not here, it is a short email away. We would rather tell you the numbers don't work for an inn your size than sell you something.",
  items: [
    {
      q: "Is this a booking site like Expedia?",
      a: "No. Guests book on your own website, so the reservation, the guest and her details are yours. We are the reason she found you, not the place she paid.",
    },
    {
      q: "Do I need to understand Google Ads?",
      a: "No. Writing the ads, setting the bids and keeping the listings accurate is our job, done from our desk. Your part is one call at the start, about half an hour, and after that the room being ready.",
    },
    {
      q: "What happens if it doesn't work?",
      a: "You pay nothing. The ad money was ours, the work was ours, and 13% of nothing is nothing. That is the whole of the risk you are taking, and it is why we are careful about which inns we take on.",
    },
    {
      q: "Who actually does the work?",
      a: "A small team, and Aaryan reads every email himself. Nobody will hand you off to an account manager, and nobody will ask you to learn a dashboard.",
    },
    {
      q: "Am I signing anything long?",
      a: "No. There is no long-term contract. If you want to stop, you say so, and the last invoice you get is for the bookings we had already driven.",
    },
  ],
}

export const footer = {
  eyebrow: "REPLY TO A PERSON",
  line: "He reads these himself, usually the same day. There is no form, and nobody will call you.",
  cta: "Start the email",
  copyLabel: "Copy address",
  bottomLeft: "Autumn · New York, NY",
  bottomRight: "© 2026 Autumn",
}
