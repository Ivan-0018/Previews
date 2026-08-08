/* ============================================================================
   NYUAD iGEM · Education — CONTENT & CONFIG
   ----------------------------------------------------------------------------
   Edit this file to change what shows on the page. You do NOT need to touch
   the HTML. Keep the structure/quotes/commas intact.

   To ADD an initiative: copy one { ... } block, edit the fields, and make sure
   the numbers in `shelfLayout` still add up to the total number of initiatives.

   Fields per initiative:
     short     – the short label shown on the book spine (keep it short!)
     title     – full title shown when the book is opened
     type      – small line under the title (e.g. "Workshop", "Podcast")
     audience  – who it was for
     obj       – bullet list of objectives (one string per bullet)
     numbers   – the Impact line. Leave "" if there's nothing to report yet.
     countries – exact country names to light up on the map (see note below)

   Country names must match the world map's spelling, e.g.:
     "United Arab Emirates", "United States of America", "United Kingdom",
     "Saudi Arabia", "Dem. Rep. Congo".
   ============================================================================ */

window.WIKI_DATA = {

  // Book spine colours, reused in order down the shelf. Add more if you add books.
  palette: ["#ffc235","#94c2bb","#ae7b81","#99451a","#e0a44e","#7fb0a8","#c98a90","#b85a2a",
            "#f0d27a","#6fa39b","#d98f6a","#c0605f","#8fbfb6","#e6b85c","#b8746f"],

  // How many books sit on each shelf, top to bottom. Should total the number
  // of initiatives below (currently 23 -> 9 + 9 + 5).
  shelfLayout: [9, 9, 5],

  // Cycled book heights (px) for a natural, uneven look.
  bookHeights: [132,142,126,138,130,146,124,140,128],

  // The "Global Impact" view shown when you click an empty spot on the shelf.
  // {count} = number of initiatives, {countries} = number of countries reached.
  global: {
    eyebrow: "All initiatives",
    title:   "Global Impact",
    meta:    "NYUAD iGEM · Education outreach",
    impact:  "400k+ views · 700k+ total reach · {countries} countries",
    highlights: [
      "{count} education initiatives — seminars, workshops, social media, podcasts, guides & collaborations",
      "400k+ views on Trivia Highlights and steady weekly reach across social channels",
      "Hands-on July 12 sand & dust storm outreach on the NYUAD campus and beyond",
      "Collaborations with iGEM teams and institutions across {countries} countries"
    ]
  },

  // ---------------------------------------------------------------------------
  // THE INITIATIVES  (order here = order on the shelf, left to right, top down)
  // ---------------------------------------------------------------------------
  initiatives: [
    {short:"iGEM 101 × MAHE", title:"iGEM 101 × MIT MAHE", type:"Seminar / Collab",
     audience:"High school & undergraduate students",
     obj:["Introduce iGEM","Explain synthetic biology","Show respective projects"],
     numbers:"100+ reached · global outreach", countries:["India","United Arab Emirates"]},

    {short:"Candidate Weekend", title:"Candidate Weekend", type:"Seminar / Collab",
     audience:"High school students",
     obj:["Introduce iGEM","Introduce synthetic biology","Talk about last year's project"],
     numbers:"70+ students in total", countries:["United Arab Emirates"]},

    {short:"Trivia Highlights", title:"Trivia Highlights", type:"Social media",
     audience:"Everyone",
     obj:["Quiz questions on technology, biology, iGEM and global challenges"],
     numbers:"400k+ views · 80+ interactions daily",
     countries:["United States of America","United Kingdom","India","United Arab Emirates","Egypt","Brazil","Canada","Australia"]},

    {short:"Sandyx Bits", title:"Sandyx Bits", type:"Social media / bite-sized posts",
     audience:"Everyone",
     obj:["Everything science; synbio — sporulation, transformation, germination"],
     numbers:"2.5k+ views · 500+ accounts reached · 80+ likes weekly",
     countries:["United Arab Emirates","India","United States of America","United Kingdom","Egypt","Canada"]},

    {short:"SDG × AFCM Egypt", title:"SDG iGEM × AFCM Egypt", type:"Collab / bite-sized post",
     audience:"Everyone",
     obj:["Discuss respective projects","SDG integration","Make an SDG 3 awareness post"],
     numbers:"2.5k+ views · 700+ accounts reached · 80+ likes",
     countries:["Egypt","United Arab Emirates"]},

    {short:"July 12 Workshop", title:"July 12 Sand & Dust Storm Day — Kids Workshop", type:"Workshop",
     audience:"Youth ages 6–13, NYUAD campus",
     obj:["Raise awareness on July 12","Color sand-related animals & build sand kits with playdough","Try out the DuneLock game"],
     numbers:"20+ kids on campus", countries:["United Arab Emirates"]},

    {short:"July 12 Brochure", title:"July 12 Awareness Brochure", type:"Guide / references",
     audience:"Everyone",
     obj:["Raise awareness on July 12","Explain the effects of sand and dust storms"],
     numbers:"20+ youth and adults", countries:["United Arab Emirates"]},

    {short:"Sand Bingo", title:"Sand Bingo", type:"Boardgame / social media",
     audience:"Everyone",
     obj:["Raise awareness on July 12","Share safety protocols for sand and dust storms"],
     numbers:"20+ youth & adults · 1k+ views · 400+ accounts reached",
     countries:["United Arab Emirates"]},

    {short:"Storybook", title:"Storybook", type:"Book",
     audience:"Youth",
     obj:["Raise awareness about DuneLock through storytelling","Integrate SDGs"],
     numbers:"", countries:["United Arab Emirates"]},

    {short:"Curriculum 2027", title:"Curriculum — Fall 2027", type:"Workshop",
     audience:"High school students",
     obj:["Teach basic synbio topics","Provide educational resources — lesson plans, slides, etc."],
     numbers:"", countries:["United Arab Emirates"]},

    {short:"McGill Guide", title:"McGill Travelers Guide", type:"Collab",
     audience:"Everyone",
     obj:["Provide a basic understanding of different molecules"],
     numbers:"", countries:["Canada","United Arab Emirates"]},

    {short:"SynBio in the ME", title:"SynBio in the Middle East", type:"Webinar / Collab",
     audience:"High school & undergraduate students",
     obj:["Raise awareness on synthetic biology in the Middle East","Clear up misinformation about synbio applications"],
     numbers:"", countries:["United Arab Emirates","Saudi Arabia","Egypt","Jordan","Qatar","Oman","Kuwait"]},

    {short:"Summer Academy", title:"Summer Academy — SynBio 101", type:"Presentation / Seminar",
     audience:"High school students",
     obj:["Introduce the basics of synthetic biology","Discuss applications of synbio outside of STEM"],
     numbers:"20+ high school students", countries:["United Arab Emirates"]},

    {short:"GMO 101 × Oxford", title:"GMO 101 × iGEM Oxford", type:"Webinar / Collab",
     audience:"Everyone", obj:["Collaboration with iGEM Oxford on GMO awareness"],
     numbers:"", countries:["United Kingdom","United Arab Emirates"]},

    {short:"Space × KAUST", title:"Space Lecture Series × iGEM KAUST", type:"Collab / Webinar",
     audience:"Everyone", obj:["Lecture series on space & synbio with iGEM KAUST"],
     numbers:"", countries:["Saudi Arabia","United Arab Emirates"]},

    {short:"SynBio Hackathon", title:"Synthetic Biology & Policy Hackathon", type:"Collab / Webinar",
     audience:"Everyone", obj:["Hackathon linking synthetic biology and policy"],
     numbers:"", countries:["United Arab Emirates"]},

    {short:"How to iGEM", title:"How to iGEM: A Guide", type:"Guide",
     audience:"iGEM community", obj:["A reference guide to competing in iGEM"],
     numbers:"", countries:["United States of America","United Kingdom","India","United Arab Emirates","Canada","Egypt"]},

    {short:"SDGs Highlights", title:"SDGs Highlights", type:"Social media",
     audience:"Everyone", obj:["Highlight the UN Sustainable Development Goals"],
     numbers:"", countries:["United States of America","United Kingdom","India","United Arab Emirates","Egypt","Canada"]},

    {short:"Experts Conference", title:"Experts Conference", type:"Webinar",
     audience:"Everyone", obj:["Conference bringing together field experts"],
     numbers:"", countries:["United Arab Emirates"]},

    {short:"Overexpressed Podcast", title:"Overexpressed — Podcast", type:"Podcast",
     audience:"Everyone",
     obj:["Discuss past NYUAD iGEM projects","Discuss synthetic biology, simplified"],
     numbers:"", countries:["United Arab Emirates","United States of America","United Kingdom","India","Canada"]},

    {short:"SynBio in the UAE", title:"SynBio in the UAE", type:"Social media / bite-sized post",
     audience:"Everyone; people in the Middle East", obj:["Localized synbio awareness for the UAE & region"],
     numbers:"", countries:["United Arab Emirates","Saudi Arabia","Egypt","Qatar","Oman"]},

    {short:"TPGS Talk", title:"TPGS Talk", type:"Presentation / Seminar",
     audience:"High school students", obj:["School talk introducing synthetic biology"],
     numbers:"", countries:["United Arab Emirates"]},

    {short:"iGEM Blackboard", title:"iGEM Blackboard", type:"Social media / flyer outreach",
     audience:"Everyone",
     obj:["Raise awareness about synthetic biology","Introduce this year's iGEM project","Community survey on sand & dust storm effects"],
     numbers:"", countries:["United Arab Emirates"]}
  ]
};
