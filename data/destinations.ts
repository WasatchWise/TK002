import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'beaver-county',
    name: "Beaver County",
    guardian: {
      name: "Quincy",
      animal_form: "Beaver alchemist",
      archetype: "Trickster-Artisan",
      teaching_moment: "Teaches that with cleverness and hard work, simple materials can be transformed into something strong and vital.",
      signature_line: "Every stick holds a secret purpose.",
      voice: {
        tone: "witty_and_inventive_tinkerer",
        vocabulary: "elemental_and_transformative",
        signature_phrase: "Every stick holds a secret purpose",
        teaching_style: "experimental_problem-solving"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Identify key landforms like the Tushar Mountains, Utah's third-highest range.",
          "Discuss how rivers, streams, and reservoirs are used for recreation and agriculture.",
          "Analyze how geography influences recreation with numerous hiking/biking trails and historic ghost towns."
        ],
        History: [
          "Learn about the Fremont culture and their presence in the area.",
          "Investigate the history of early mining operations and pioneer settlement.",
          "Explore the stories of local ghost towns like Frisco."
        ],
        Economics: [
          "Analyze Beaver County's economy, focusing on agriculture, livestock, and tourism.",
          "Discuss why leisure and hospitality are major sources of jobs, even without national parks."
        ],
        Civics: [
          "Understand how local government, like the Beaver County School District, is funded and serves the community."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the volcanic geology of the region and identify common minerals.",
          "Learn about geothermal energy as a natural resource."
        ],
        "Life Science": [
          "Investigate reservoir ecosystems and how human-made dams, like Quincy the Beaver's, impact the environment."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the heart of the Tushar Mountains, where stone holds secrets of fire and time, lives Quincy, the Beaver Alchemist. He's not just a builder of dams; he's a master of transformation. Quincy sees the hidden potential in everything—a fallen log, a rushing stream, a simple rock.",
      "He teaches that the greatest magic is changing the world with what you have. Quincy will show you how the land itself is an alchemist's lab, turning volcanic heat into energy and simple water into life for the whole valley. Listen closely, and he might teach you how to see the gold in the ordinary."
    ],
    field_trip_stops: [
      {
        name: "Minersville Reservoir State Park",
        gps: "38.2266, -112.8988",
        duration: "1.5 hours",
        educational_focus: "Water management, reservoir ecosystems, and human engineering.",
        guardian_connection: "Quincy shows how human-made dams mimic his own work, transforming a dry landscape into a place of life and recreation.",
        safety_notes: ["Stay away from the water's edge unless with an adult", "Wear a life jacket for any water activities", "Watch for boat traffic"]
      },
      {
        name: "Frisco Ghost Town",
        gps: "38.4558, -113.2627",
        duration: "1 hour",
        educational_focus: "Mining history, boom-and-bust cycles, and life in the Old West.",
        guardian_connection: "Quincy explains how the miners were alchemists too, transforming rock into silver, but warns about the consequences of taking too much from the earth.",
        safety_notes: ["Watch for unstable structures and do not enter ruins", "Be aware of sharp objects and broken glass", "Wear sturdy shoes"]
      }
    ],
    activities: [
      {
        title: "Dam Engineering Challenge",
        type: "Hands-On",
        prompt: "In a tray with sand and pebbles, use twigs, leaves, and mud to build a small dam that can hold back a slow trickle of water.",
        materials_needed: ["Tray", "Sand/dirt", "Twigs", "Leaves", "Water bottle"]
      },
      {
        title: "Rock Identification",
        type: "Observation",
        prompt: "Find three different rocks near Frisco. Sketch them and describe their color, texture, and weight. Are they heavy with secrets?",
        materials_needed: ["Field journal", "Pencil", "Magnifying glass (optional)"]
      }
    ],
    relatedDestinationIds: ['millard-county', 'iron-county'],
    gps: "38.2775, -112.6253",
    what3words: "///transform.stream.stone"
  },
  {
    id: 'box-elder-county',
    name: "Box Elder County",
    guardian: {
      name: "Cass",
      animal_form: "Kit fox inventor",
      archetype: "Maker-Mentor",
      teaching_moment: "Teaches that innovation comes from observing the world's needs and using what you have to create clever solutions.",
      signature_line: "A solution is just a gear-turn away.",
      voice: {
        tone: "energetic_and_clever_creator",
        vocabulary: "mechanical_and_observational",
        signature_phrase: "A solution is just a gear-turn away",
        teaching_style: "tinkering_and_prototyping"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
            "Locate Box Elder County in the upper northwest corner of Utah, identifying its borders with Idaho and Nevada.",
            "Describe the county's major geographical features, including the Great Salt Lake, the Great Salt Lake Desert, and the Bear River marshlands.",
            "Explain how the county got its name from the native box elder trees."
        ],
        History: [
            "Detail the significance of the Golden Spike ceremony at Promontory on May 10, 1869, which completed the first transcontinental railroad.",
            "Discuss the role of towns like Corinne as railroad 'boomtowns' and freight centers.",
            "Learn about the area's original inhabitants, including the Shoshone tribe.",
            "Investigate the development of modern industries, including aerospace at Thiokol."
        ],
        Economics: [
            "Analyze why manufacturing is the largest and highest-paying industry in the county.",
            "Discuss the county's economic connection to the Greater Salt Lake region and future growth from projects like the Utah Inland Port Authority."
        ],
        Civics: [
            "Understand how local taxes fund community services like the Box Elder County Library, water conservation, and the annual County Fair and Rodeo."
        ]
      },
      science_seed: {
        "Life Science": [
            "Explore the unique saltwater ecology of the Great Salt Lake.",
            "Investigate the rich marshlands at the mouth of the Bear River and their importance for migratory birds."
        ],
        "Physical Science": [
            "Discuss the principles of aerospace engineering related to the county's modern industries."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Where the Great Salt Lake meets the desert sky and iron tracks stretch to the horizon, you'll find Cass, the Kit Fox Inventor. With eyes as sharp as her mind, she sees the world as a giant puzzle box, full of parts waiting to be assembled into something new.",
      "Cass helped lay the rails of history and build the rockets that touch the stars. She teaches that the biggest ideas often come in the smallest packages, just like her pocket-sized tools. She'll show you how to connect history, technology, and nature to invent a better future."
    ],
    field_trip_stops: [
      {
        name: "Golden Spike National Historical Park",
        gps: "41.6191, -112.5510",
        duration: "2 hours",
        educational_focus: "Transcontinental Railroad, engineering, and national unity.",
        guardian_connection: "Cass shows off one of her greatest inventions: the meeting of two worlds. She explains how every railroad tie and spike was a piece of a giant machine that changed America.",
        safety_notes: ["Stay clear of the replica locomotives", "Do not climb on historic tracks or equipment", "It can be very sunny and hot; bring water"]
      },
      {
        name: "Spiral Jetty",
        gps: "41.4378, -112.6685",
        duration: "1 hour",
        educational_focus: "Land art, geology, and the changing environment of the Great Salt Lake.",
        guardian_connection: "Cass sees the Spiral Jetty as a giant, beautiful machine powered by the earth itself, demonstrating how art and science can wind together.",
        safety_notes: ["The road can be rough", "The salt crystals are sharp; wear sturdy shoes", "Lake levels vary, the jetty may be submerged"]
      }
    ],
    activities: [
      {
        title: "Build a Simple Machine",
        type: "Hands-On",
        prompt: "Using a pencil, a ruler, and a small rock, create a lever to lift a book. How does changing the fulcrum point make it easier or harder?",
        materials_needed: ["Pencil (fulcrum)", "Ruler (lever)", "Rock (effort)", "Book (load)"]
      },
      {
        title: "Migration Mapping",
        type: "Observation",
        prompt: "Observe the birds at the Bear River Migratory Bird Refuge (or a local park). Map the path you think they took to get here. What inventions help them fly?",
        materials_needed: ["Field journal", "Binoculars (optional)", "Map of North America"]
      }
    ],
    relatedDestinationIds: ['cache-county', 'weber-county', 'tooele-county'],
    gps: "41.4972, -112.0830",
    what3words: "///invent.track.horizon"
  },
  {
    id: 'cache-county',
    name: "Cache County",
    guardian: {
      name: "Elsa",
      animal_form: "Honeybee orchardist",
      archetype: "Mother-Nurturer",
      teaching_moment: "Teaches that communities thrive through cooperation, patience, and caring for the sources of life.",
      signature_line: "Listen to the bloom chorus.",
      voice: {
        tone: "warm_and_communal_matriarch",
        vocabulary: "agricultural_and_harmonious",
        signature_phrase: "Listen to the bloom chorus",
        teaching_style: "cooperative_learning_and_nurturing"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Cache County in northern Utah, bordering Idaho.",
          "Explain that the name 'Cache' comes from the French word for a hiding place, used by early fur trappers to store supplies.",
          "Identify Logan as the county seat and recognize Cache Valley as a major feature.",
          "Discuss its status as Utah's sixth largest county by population."
        ],
        History: [
          "Learn about the county's creation in 1856 and how its boundaries changed over time.",
          "Investigate the history of early fur trappers in the valley.",
          "Discuss long-standing cultural traditions like Richmond's Black and White Days, the nation's longest-running dairy cow show."
        ],
        Economics: [
          "Analyze why Cache County's economy is one of the most diverse in Utah.",
          "Identify key economic drivers, including Utah State University, manufacturing, and life sciences.",
          "Discuss the importance of agriculture and dairy farming to the local economy and culture."
        ],
        Civics: [
          "Understand that local taxes fund community services, such as the Cache Mosquito Abatement and Water Districts."
        ]
      },
      science_seed: {
        "Life Science": [
          "Explore the science of pollination and its importance to the orchards and farms in Cache Valley.",
          "Learn about the dairy industry and the science behind dairy farming.",
          "Investigate the forest ecosystems of the surrounding Bear River Mountains."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Nestled in a green valley like a secret 'cache' of treasure lies a place of orchards and fields. This is the garden of Elsa, the Honeybee Orchardist. She is the queen of this valley, and her gentle hum can be heard in every buzzing flower and rustling leaf.",
      "Elsa teaches the 'bloom chorus'—the idea that every single bee, flower, and farmer has a part to play in the valley's song of growth. She shows students how patience, teamwork, and caring for the land create a harvest that can feed a whole community."
    ],
    field_trip_stops: [
      {
        name: "American West Heritage Center",
        gps: "41.6706, -111.8385",
        duration: "2-3 hours",
        educational_focus: "Pioneer life, agriculture, and the history of the American West.",
        guardian_connection: "Elsa buzzes through the historic farms, showing how the pioneers worked together like a hive to build a new life and make the valley bloom.",
        safety_notes: ["Be respectful of historical interpreters and animals", "Stay with your group", "Wash hands after visiting farm animals"]
      },
      {
        name: "Stokes Nature Center",
        gps: "41.7679, -111.7516",
        duration: "1.5 hours",
        educational_focus: "River ecosystems, local wildlife, and forest ecology.",
        guardian_connection: "Elsa reveals how the Logan River is the main stem of the valley's flower, providing the water that nurtures every living thing in her garden.",
        safety_notes: ["Stay on designated trails", "Do not disturb wildlife", "Be cautious near the riverbank"]
      }
    ],
    activities: [
      {
        title: "Pollinator Power",
        type: "Observation",
        prompt: "Find a patch of flowers. Sit quietly for five minutes and count how many bees or other insects visit. What are they doing? How do they help the plant?",
        materials_needed: ["Field journal", "Pencil"]
      },
      {
        title: "Community Quilt",
        type: "Storytelling",
        prompt: "On a large piece of paper, have each student draw one thing that makes a community strong (a farm, a school, a family, etc.). Connect them all to show how they work together.",
        materials_needed: ["Large paper", "Crayons or markers"]
      }
    ],
    relatedDestinationIds: ['rich-county', 'box-elder-county', 'weber-county'],
    gps: "41.7330, -111.8338",
    what3words: "///nurture.valley.bloom"
  },
  {
    id: 'carbon-county',
    name: "Carbon County",
    guardian: {
      name: "Bruno",
      animal_form: "Big-eared bat miner",
      archetype: "Father-Protector",
      teaching_moment: "Teaches that great power and history are often hidden in the dark, and we must listen carefully to find them.",
      signature_line: "Let the echo-lantern guide you.",
      voice: {
        tone: "deep_and_reassuring_guardian",
        vocabulary: "geological_and_ancestral",
        signature_phrase: "Let the echo-lantern guide you",
        teaching_style: "guided_discovery_and_listening"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Carbon County in east-central Utah, identifying its borders like the Book Cliffs and Wasatch Plateau.",
          "Identify Price as the county seat and understand the importance of the Price River.",
          "Discuss how natural resources like coal shaped where people settled."
        ],
        History: [
          "Learn about the ancient Fremont culture and their rock art in Nine Mile Canyon.",
          "Discuss the diverse groups of people (e.g., Greek, Italian) who immigrated to work in the coal mines.",
          "Explain the history of Helper as an important railroad center.",
          "Understand the political conflict that led to Carbon County's creation in 1894."
        ],
        Economics: [
          "Analyze the historical and current importance of the coal industry to the county's economy."
        ],
        Civics: [
          "Discuss the county's unique cultural diversity and the role of institutions like the College of Eastern Utah in bringing communities together."
        ]
      },
      science_seed: {
        "Earth Science": ["Learn about the formation of coal and explore the geology of Nine Mile Canyon.", "Discuss the effects of drought in a high desert climate."],
        "Life Science": ["Investigate how local plants and animals adapt to the unique landscape."]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Deep beneath the Book Cliffs, where stories of ancient sunlight are stored as coal, lives Bruno, the Big-eared Bat Miner. He is the keeper of the deep places, the protector of the energy and history buried in the earth.",
      "With his echo-lantern, Bruno navigates the dark, listening to the secrets of the stone. He teaches that the past is never truly gone; it just echoes. From the footfalls of dinosaurs to the songs of immigrant miners, Bruno helps students hear the powerful history that gives Carbon County its name."
    ],
    field_trip_stops: [
      {
        name: "Utah State University Eastern Prehistoric Museum",
        gps: "39.6083, -110.8546",
        duration: "2 hours",
        educational_focus: "Dinosaur fossils, Fremont culture, and local paleontology.",
        guardian_connection: "Bruno considers the museum his library, where the earth's oldest stories are on display. He uses his echo-lantern to highlight the connections between ancient life and the energy we use today.",
        safety_notes: ["Do not touch the exhibits unless permitted", "Use quiet voices inside the museum", "Stay with your group"]
      },
      {
        name: "Helper Historic District",
        gps: "39.6841, -110.8540",
        duration: "1 hour",
        educational_focus: "Coal mining history, railroad towns, and diverse cultures.",
        guardian_connection: "Bruno flies silently along the historic main street, telling tales of the many different people who came from all over the world to work in the mines, creating a strong community in a tough environment.",
        safety_notes: ["Be aware of traffic on Main Street", "Respect private property", "Visit the Western Mining and Railroad Museum for more context"]
      }
    ],
    activities: [
      {
        title: "Fossil Dig",
        type: "Hands-On",
        prompt: "In a box of sand, bury small objects (seashells, small toys, plastic dinosaurs). Use a brush to carefully excavate them like a paleontologist. What stories do your 'fossils' tell?",
        materials_needed: ["Box with sand", "Small objects", "Paintbrushes"]
      },
      {
        title: "Echo Location Game",
        type: "Hands-On",
        prompt: "In an open area, one student is blindfolded. The other students spread out and make a single sound (a clap or a word). The blindfolded student must point to where the sound came from, like Bruno.",
        materials_needed: ["Blindfold", "Open space"]
      }
    ],
    relatedDestinationIds: ['emery-county', 'utah-county', 'duchesne-county'],
    gps: "39.5933, -110.8546",
    what3words: "///echo.lantern.deep"
  },
  {
    id: 'daggett-county',
    name: "Daggett County",
    guardian: {
      name: "Ira",
      animal_form: "Osprey ice sage",
      archetype: "Stoic Mentor",
      teaching_moment: "Teaches the power of perspective and the long, slow, powerful forces of water and ice that shape the land.",
      signature_line: "See the world from the river's point of view.",
      voice: {
        tone: "calm_and_ancient_observer",
        vocabulary: "geological_and_patient",
        signature_phrase: "See the world from the river's point of view",
        teaching_style: "patient_observation_and_big-picture_thinking"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Daggett County in Utah's northeastern corner, bordering Wyoming and Colorado.",
          "Identify key landforms like the Uinta Mountains and the Green River gorge.",
          "Discuss its status as Utah's least populous or 'frontier' county.",
          "Understand the significance of Flaming Gorge Reservoir for recreation.",
          "Learn that over 90% of the county is federally-owned public land."
        ],
        History: [
          "Explain why Daggett is known as Utah's youngest county, founded in 1917.",
          "Learn about the construction of the Flaming Gorge Dam in 1958.",
          "Investigate the history of early explorers and outlaws in the remote landscape."
        ],
        Economics: [
          "Analyze why Daggett County has the highest percentage of leisure and hospitality jobs in Utah, based on tourism."
        ],
        Civics: [
          "Discuss what it means to live in a 'frontier' area with a very small population.",
          "Learn that the Daggett School District is the smallest in Utah."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the geology of the Uinta Mountains and the carving of the Green River canyon."
        ],
        "Physical Science": [
          "Understand how the Flaming Gorge Dam generates hydroelectricity."
        ],
        "Life Science": [
          "Investigate the ecosystems of the reservoir and surrounding national forest."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In Utah's wild northeastern corner, where the Green River carves through mountains of ancient rock, soars Ira, the Osprey Ice Sage. From his perch high above the water, he has watched for ages as ice, water, and time itself have sculpted this rugged land.",
      "Ira is a guardian of the long view. He teaches with silence and patience, encouraging students to see how a tiny river can carve a giant canyon, and how a dam can change a landscape in a blink of an eye, geologically speaking. His frost compass points not north, but towards deep time."
    ],
    field_trip_stops: [
      {
        name: "Flaming Gorge Dam Visitor Center",
        gps: "40.9150, -109.4211",
        duration: "1.5 hours",
        educational_focus: "Hydroelectric power, dam construction, and water storage.",
        guardian_connection: "Ira perches on the canyon rim, explaining how this giant structure is like a beaver dam, but on a massive scale, holding back the river's power and transforming it into light for cities far away.",
        safety_notes: ["Stay with the tour guide", "Do not run on the dam", "Be aware of heights"]
      },
      {
        name: "Red Canyon Visitor Center & Overlook",
        gps: "40.8496, -109.5855",
        duration: "1 hour",
        educational_focus: "Canyon geology, erosion, and panoramic views.",
        guardian_connection: "This is Ira's favorite perch. He challenges students to see the landscape as he does—to trace the path of the river, to imagine the glaciers that carved the mountains, and to feel the immense age of the red rock.",
        safety_notes: ["Stay behind all safety railings", "Be aware of steep drop-offs", "The wind can be strong"]
      }
    ],
    activities: [
      {
        title: "Erosion in a Pan",
        type: "Hands-On",
        prompt: "Make a mound of dirt in a pan. Slowly pour water over it. How does the water create channels and canyons? What happens if you pour it faster?",
        materials_needed: ["Baking pan", "Dirt or sand", "Water"]
      },
      {
        title: "Powell's Journal",
        type: "Storytelling",
        prompt: "Imagine you are John Wesley Powell on his first trip down the Green River. Write a short journal entry about seeing the red cliffs of Flaming Gorge for the first time.",
        materials_needed: ["Field journal", "Pencil", "Imagination"]
      }
    ],
    relatedDestinationIds: ['summit-county', 'uintah-county'],
    gps: "40.8800, -109.4984",
    what3words: "///perspective.canyon.frost"
  },
  {
    id: 'davis-county',
    name: "Davis County",
    guardian: {
      name: "Maris",
      animal_form: "Peregrine storm-seer",
      archetype: "Strategist",
      teaching_moment: "Teaches how to see patterns in complex systems, from weather fronts to causeways, and act with precision.",
      signature_line: "Watch the patterns, know the strike.",
      voice: {
        tone: "sharp_and_decisive_leader",
        vocabulary: "meteorological_and_strategic",
        signature_phrase: "Watch the patterns, know the strike",
        teaching_style: "pattern_recognition_and_forecasting"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Identify Davis County as Utah's smallest county by land area but third largest by population.",
          "Locate the county between the Wasatch Mountains and the Great Salt Lake.",
          "Identify major communities like Farmington (county seat) and Layton (largest city).",
          "Discuss the importance of recreational areas like Antelope Island and the county's extensive trail system."
        ],
        History: [
          "Learn that the county was named after Daniel C. Davis of the Mormon Battalion and founded in 1850.",
          "Investigate the history of Hill Air Force Base and its impact on the county.",
          "Discuss the cultural significance of attractions like Lagoon amusement park."
        ],
        Economics: [
          "Analyze the role of Hill Air Force Base as the state's largest employer.",
          "Discuss how tourism contributes to the local economy.",
          "Understand the characteristics of the county's strong and educated workforce."
        ],
        Civics: [
          "Learn about the structure of county government with a three-member board of commissioners.",
          "Understand how property taxes fund essential services like schools, libraries, water, and fire departments."
        ]
      },
      science_seed: {
        "Life Science": [
          "Explore the unique ecology of the Great Salt Lake shoreline and its wetlands.",
          "Study the bison herds and other wildlife on Antelope Island."
        ],
        "Earth Science": [
          "Discuss the geological risks of living on the Wasatch Front, such as earthquakes.",
          "Learn about the formation of weather patterns like lake-effect snow."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {
        "Environmental Health": [
          "Analyze how geography and population density contribute to health risks like air quality inversions."
        ]
      },
      fine_arts: {},
    },
    story: [
      "Davis County is a narrow land of complex patterns, caught between the sharp peaks of the Wasatch and the shifting shores of the Great Salt Lake. Patrolling the skies here is Maris, the Peregrine Storm-Seer. With her lightning-fast mind, she sees everything—the coming storms, the migrating birds, the flow of traffic on the freeway.",
      "Maris is a master strategist. She teaches students to look for the connections between things. How does a storm in the west create snow in the mountains? How does a causeway affect the lake? She shows that understanding the big picture is the key to making smart, swift decisions."
    ],
    field_trip_stops: [
      {
        name: "Antelope Island State Park",
        gps: "41.0263, -112.2111",
        duration: "2-3 hours",
        educational_focus: "Great Salt Lake ecology, bison herds, and island geology.",
        guardian_connection: "Maris circles high above, pointing out the patterns of the bison herds, the ancient shorelines of Lake Bonneville, and the salty ecosystem. It's her living strategy board.",
        safety_notes: ["Stay a safe distance from bison and other wildlife (at least 25 yards)", "Bring bug spray, especially for biting gnats in the spring", "The causeway can sometimes flood"]
      },
      {
        name: "Great Salt Lake Shorelands Preserve",
        gps: "41.0827, -112.0163",
        duration: "1.5 hours",
        educational_focus: "Wetlands, migratory birds, and the importance of freshwater inlets.",
        guardian_connection: "Maris dives toward the wetlands, demonstrating how this small area is a critical strategic point for millions of birds on their long journeys. It's a lesson in how small places can have huge impacts.",
        safety_notes: ["Stay on boardwalks and trails", "Do not disturb nesting birds", "Binoculars are highly recommended"]
      }
    ],
    activities: [
      {
        title: "Weather Watcher",
        type: "Observation",
        prompt: "Look at the clouds. Are they fluffy, wispy, or dark? What direction are they moving? Sketch the cloud shapes and predict what the weather will be in one hour.",
        materials_needed: ["Field journal", "Pencil", "Compass (optional)"]
      },
      {
        title: "Cause and Effect Chain",
        type: "Storytelling",
        prompt: "Start with an event: 'A heavy snow falls in the mountains.' What happens next? ('The streams fill with water.') And after that? Create a chain of at least five events.",
        materials_needed: ["Whiteboard or large paper", "Markers"]
      }
    ],
    relatedDestinationIds: ['salt-lake-county', 'weber-county', 'morgan-county'],
    gps: "40.9622, -111.8920",
    what3words: "///strategist.glance.storm"
  },
  {
    id: 'duchesne-county',
    name: "Duchesne County",
    guardian: {
        name: "Nayati",
        animal_form: "Bobcat storyteller",
        archetype: "Historian-Guide",
        teaching_moment: "Teaches that history is a living story with many voices, and you must listen carefully to hear them all.",
        signature_line: "Every rock and river has a tale to tell.",
        voice: {
            tone: "patient_and_respectful_narrator",
            vocabulary: "historical_and_natural",
            signature_phrase: "Every rock and river has a tale to tell",
            teaching_style: "storytelling_and_oral_history"
        }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Duchesne County in the Uinta Basin, a region surrounded by mountains.",
          "Identify the Uinta Mountains and explain their unique east-west orientation.",
          "Discuss what it means for the county to have a 'rural' character.",
          "Learn that a significant portion of the county is part of the Uintah and Ouray Reservation."
        ],
        History: [
          "Learn about the ancient Fremont people and their famous rock art in Nine Mile Canyon.",
          "Discuss the historical presence of Ute tribes in the region.",
          "Understand the significance of the Dominguez/Escalante Expedition of 1776.",
          "Explain why the area was one of the last in the U.S. to be settled by homesteaders after 1905."
        ],
        Economics: [
          "Analyze the importance of the energy and mining industries, particularly oil and natural gas, to the county's economy.",
          "Discuss why water is considered the 'lifeblood of the county' and the role of the Central Utah Water Conservancy District.",
          "Identify popular recreational activities in the area, such as ATVing and fishing."
        ],
        Civics: [
          "Understand how county, state, federal, and tribal governments work together to manage land and resources.",
          "Learn about the educational institutions that serve the community."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the geology of the Uinta Basin and how oil and natural gas are formed.",
          "Study the ecosystems of rivers like the Strawberry River."
        ],
        "Life Science": [
          "Investigate the high-altitude flora and fauna of the Uinta Mountains."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
        "In the heart of the Uinta Basin, a land rich with stories, pads Nayati, the Bobcat Storyteller. Silent and observant, Nayati knows the tales of this land—from the ancient whispers of the Ute people to the boisterous shouts of homesteaders and outlaws.",
        "Nayati teaches that history isn't just in books; it's carved into the canyons, flows in the rivers, and is spoken on the wind. She encourages students to listen with their hearts to the many different voices that make up the story of Duchesne County, a story of survival, community, and change."
    ],
    field_trip_stops: [
        {
            name: "Starvation State Park",
            gps: "40.1872, -110.4310",
            duration: "2 hours",
            educational_focus: "Water storage, recreation, and local legends.",
            guardian_connection: "Nayati sits by the shore, telling the real stories behind the reservoir's name, separating fact from legend, and explaining the importance of water in the high desert.",
            safety_notes: ["Always wear a life jacket near the water", "The water can be cold", "Watch for changing weather"]
        },
        {
            name: "High Uintas Scenic Byway Pull-offs",
            gps: "40.6133, -110.9000",
            duration: "1.5 hours",
            educational_focus: "High-altitude ecosystems, geology of the Uinta Mountains.",
            guardian_connection: "Nayati guides you to a viewpoint, telling the ancient story of how these mountains, unique in their east-west orientation, were formed and the life they support.",
            safety_notes: ["Pull completely off the road", "Be aware of traffic", "The air is thin at high altitudes; take it easy"]
        }
    ],
    activities: [
        {
            title: "Oral History Interview",
            type: "Storytelling",
            prompt: "Interview an older family member or friend. Ask them to tell you a story about when they were your age. What has changed? What has stayed the same?",
            materials_needed: ["Field journal", "Pencil", "A good listener"]
        },
        {
            title: "Create a Petroglyph Story",
            type: "Hands-On",
            prompt: "On a flat rock (or paper), use chalk or crayon to draw a story using only symbols, like the ancient people of the area. Can your friends understand your story?",
            materials_needed: ["Flat rock or dark paper", "Chalk or light-colored crayon"]
        }
    ],
    relatedDestinationIds: ['uintah-county', 'carbon-county', 'wasatch-county', 'utah-county'],
    gps: "40.1669, -110.4010",
    what3words: "///story.basin.voice"
  },
  {
    id: 'emery-county',
    name: "Emery County",
    guardian: {
      name: "Sedge",
      animal_form: "Chuckwalla of the spires",
      archetype: "Pillar",
      teaching_moment: "Teaches the importance of stability, patience, and finding strength in the solid foundations of the earth.",
      signature_line: "Stand firm, let the storm pass.",
      voice: {
        tone: "grounded_and_unshakeable_sentinel",
        vocabulary: "geological_and_enduring",
        signature_phrase: "Stand firm, let the storm pass",
        teaching_style: "meditative_observation_and_foundational_principles"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Emery County in east-central Utah and identify its three main regions: the Wasatch Plateau, Castle Valley, and the San Rafael Swell.",
          "Identify the Green River as the county's eastern border.",
          "Discuss the importance of tourism attractions like Goblin Valley State Park and the Cleveland Lloyd Dinosaur Quarry."
        ],
        History: [
          "Explain the historical conflict over the county seat that led to the creation of Carbon County in 1894.",
          "Learn how Grand County was also created from Emery County's original territory.",
          "Investigate the history of early agricultural settlements in Castle Valley."
        ],
        Economics: [
          "Analyze the county's specialized economy based on coal mining and electric power generation.",
          "Discuss the future economic challenges related to the planned closure of coal-fired power plants.",
          "Explore the growing importance of 'red rock tourism' to the local economy."
        ],
        Civics: [
          "Understand how special service districts, like the Emery Water Conservancy District, manage essential resources.",
          "Discuss how the community is planning for future economic changes."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the unique geology of the San Rafael Swell and the formation of 'goblins' at Goblin Valley.",
          "Learn about the significance of the dinosaur fossils found at the Cleveland Lloyd Dinosaur Quarry."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the vast, silent landscapes of the San Rafael Swell, where giant rock formations stand like ancient castles, you will find Sedge, the Chuckwalla of the Spires. He is a guardian of stability, basking on the warm stone, feeling the deep, slow pulse of the planet.",
      "Sedge doesn't move much, because he doesn't have to. He teaches that true strength isn't about speed, but about endurance. He is a resonance stabilizer, showing students how to find their own solid ground, how to appreciate the slow, powerful forces that create incredible beauty, and how to stand firm in a world of constant change."
    ],
    field_trip_stops: [
      {
        name: "Goblin Valley State Park",
        gps: "38.5714, -110.7093",
        duration: "2 hours",
        educational_focus: "Erosion, hoodoos (goblins), and sedimentary rock.",
        guardian_connection: "Sedge explains that each 'goblin' is a lesson in patience. For thousands of years, wind and water wore away the softer rock, leaving these strong, whimsical shapes behind. It's a testament to standing firm.",
        safety_notes: ["It's easy to get lost in the valley; stay within sight of your group", "Climbing on hoodoos is dangerous and can damage them", "Bring plenty of water, it gets very hot"]
      },
      {
        name: "Buckhorn Wash Pictograph Panel",
        gps: "39.0766, -110.6698",
        duration: "1 hour",
        educational_focus: "Fremont Native American rock art and cultural history.",
        guardian_connection: "Sedge shows how the ancient people also understood the power of stone. They carved their stories into the rock, knowing they would endure for thousands of years, a stable record of their lives and beliefs.",
        safety_notes: ["Do not touch the rock art; oils from your hands can damage it", "Stay on designated paths", "Respect this sacred cultural site"]
      }
    ],
    activities: [
      {
        title: "Sugar Cube Goblins",
        type: "Hands-On",
        prompt: "Stack a few sugar cubes. Use an eyedropper to drip water onto them. How does the water wear away the sugar? Can you create your own 'goblin' shape?",
        materials_needed: ["Sugar cubes", "Eyedropper", "Water", "Plate"]
      },
      {
        title: "Pillar of Strength",
        type: "Observation",
        prompt: "Find a quiet place to sit for three minutes. Close your eyes and focus on the feeling of the solid ground beneath you. What does it feel like to be as still and strong as a rock?",
        materials_needed: ["A quiet spot"]
      }
    ],
    relatedDestinationIds: ['carbon-county', 'sanpete-county', 'sevier-county', 'grand-county'],
    gps: "39.0945, -110.7042",
    what3words: "///pillar.resonance.endure"
  },
  {
    id: 'garfield-county',
    name: "Garfield County",
    guardian: {
      name: "Raya",
      animal_form: "Canyon wren echo dancer",
      archetype: "Artist-Healer",
      teaching_moment: "Teaches that beauty and sound can heal and connect us to the spirit of a place.",
      signature_line: "Let your song fill the canyon.",
      voice: {
        tone: "melodic_and_joyful_artist",
        vocabulary: "acoustic_and_vibrant",
        signature_phrase: "Let your song fill the canyon",
        teaching_style: "creative_expression_and_sensory_awareness"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Garfield County in Southern Utah.",
          "Identify major national and state parks within or near the county, such as Bryce Canyon and Grand Staircase-Escalante."
        ],
        History: [
          "Discuss the establishment of early communities like Henrieville, Hatch, and Cannonville.",
          "Investigate the history of early explorers and pioneer settlers in the region."
        ],
        Economics: [
          "Analyze the median household income of the county and discuss factors that might influence it, such as tourism.",
          "Discuss how tourism in nearby parks impacts the local economy."
        ],
        Civics: [
          "Understand how local taxes fund the Garfield County School District.",
          "Explain the purpose of special service districts, such as the Upper Sevier River Water Conservancy District and local cemetery districts."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the unique geology of the region, including the formation of hoodoos in Bryce Canyon."
        ],
        "Life Science": [
          "Learn about the ecosystems of the high plateaus and canyonlands."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Garfield County is a masterpiece painted with stone and light, from the glowing spires of Bryce Canyon to the deep solitude of the Escalante River. The artist-in-residence here is Raya, the Canyon Wren Echo Dancer. Her beautiful, descending song is the soundtrack of these canyons.",
      "Raya doesn't just sing; she creates sound-light, turning echoes into healing energy. She teaches that every landscape has its own music, and that by adding our own joyful voices, we can become part of its beauty. She shows students how to see with their ears and listen with their hearts."
    ],
    field_trip_stops: [
      {
        name: "Bryce Canyon National Park (Sunset or Sunrise Point)",
        gps: "37.6222, -112.1661",
        duration: "2 hours",
        educational_focus: "Hoodoo formation, erosion, and the effects of light and shadow.",
        guardian_connection: "Raya dances on the rim, her song echoing through the amphitheater. She calls the hoodoos her 'stone chorus' and teaches students how to listen to the sound of the wind carving these beautiful shapes.",
        safety_notes: ["Stay behind safety railings", "Do not throw anything into the canyon", "The trails into the canyon can be steep"]
      },
      {
        name: "Head of the Rocks Overlook (Scenic Byway 12)",
        gps: "37.6698, -111.4172",
        duration: "30 minutes",
        educational_focus: "Vast landscapes, geology of the Grand Staircase, and visible ecosystems.",
        guardian_connection: "From here, Raya reveals the immense scale of her canvas. She sings a song that explains the different 'steps' of the staircase, each a different color and a different age, a visual symphony of time.",
        safety_notes: ["Pull completely off the road into the designated overlook", "Be aware of traffic when exiting", "Hold onto hats in the wind"]
      }
    ],
    activities: [
      {
        title: "Canyon Chorus",
        type: "Hands-On",
        prompt: "Find a place with a good echo (a large room, a small canyon, or even cupping your hands). Make a sound and listen to it come back. How does the space change your voice?",
        materials_needed: ["Your voice"]
      },
      {
        title: "Color Palette of the Land",
        type: "Observation",
        prompt: "Look at the landscape around you. Find at least five different colors in the rocks, plants, and sky. Give each color a name (e.g., 'Sunset Orange,' 'Juniper Green').",
        materials_needed: ["Field journal", "Crayons or colored pencils (optional)"]
      }
    ],
    relatedDestinationIds: ['kane-county', 'wayne-county', 'piute-county', 'iron-county'],
    gps: "37.6283, -112.1521",
    what3words: "///artist.canyon.echo"
  },
  {
    id: 'grand-county',
    name: "Grand County",
    guardian: {
      name: "Koda",
      animal_form: "Mustang",
      archetype: "Swift Rider",
      teaching_moment: "Teaches the importance of speed, freedom, and knowing the paths that connect the land.",
      signature_line: "Follow the glowing hooflines.",
      voice: {
        tone: "swift_and_confident_adventurer",
        vocabulary: "kinetic_and_directional",
        signature_phrase: "Follow the glowing hooflines",
        teaching_style: "learning_by_doing_and_exploration"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Grand County in southeastern Utah and identify the Colorado River (formerly Grand River) as a major feature.",
          "Identify world-famous landmarks like Arches and Canyonlands National Parks.",
          "Discuss the concept of public lands, noting that 87% of the county is publicly owned.",
          "Understand the high desert climate and the importance of the La Sal Mountains for water."
        ],
        History: [
          "Learn about the ancient Pueblo farming communities and the later presence of nomadic Ute and Navajo (Diné) tribes.",
          "Discuss the settlement of Moab, its history as a 'wild west' town, and its role as a fruit-production center.",
          "Explain the 'boom and bust' cycle of the economy, particularly the uranium boom of 1952."
        ],
        Economics: [
          "Analyze the shift from a mining economy to one based on recreation and tourism.",
          "Discuss the economic impact of tourism and its environmental consequences, such as soil erosion.",
          "Compare the revenue from tourism to that from natural resource extraction."
        ],
        Civics: [
          "Understand why local governments in Grand County work closely with federal agencies like the BLM to manage public lands."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore how erosion formed the arches in Arches National Park.",
          "Learn about the geology of the Colorado River canyons.",
          "Investigate the fragile nature of cryptobiotic soil."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Grand County is a land of wide-open spaces and breathtaking arches, a natural playground carved by the mighty Colorado River. Racing across this landscape is Koda, the Mustang, the spirit of the untamed path. His hooves barely touch the ground as he scouts the ancient trails.",
      "Koda is the hero of the trail. He leaves glowing hooflines on the paths, showing others the way to adventure and discovery. He teaches that with speed and awareness, you can cover amazing ground, but reminds students to always tread lightly and respect the fragile desert soil."
    ],
    field_trip_stops: [
      {
        name: "Delicate Arch Viewpoint (Arches National Park)",
        gps: "38.7436, -109.4993",
        duration: "1 hour (viewpoint) or 3 hours (hike)",
        educational_focus: "Erosion, arch formation, and cultural symbolism.",
        guardian_connection: "Koda pauses at the viewpoint, explaining that Delicate Arch is a gateway. He dares students to be bold and explore, to find their own path to wonder.",
        safety_notes: ["The hike is strenuous with no shade; carry at least 1 liter of water per person", "Stay on the trail to protect cryptobiotic soil", "The final section of the hike is along a rock ledge"]
      },
      {
        name: "Grandstaff Canyon Trail (formerly Negro Bill Canyon)",
        gps: "38.6046, -109.5583",
        duration: "2 hours",
        educational_focus: "Creek-side ecosystems, canyon geology, and local history.",
        guardian_connection: "Koda runs along the creek, showing a cooler, greener path through the desert. He teaches that even in a harsh environment, life finds a way, and there are always hidden trails to follow.",
        safety_notes: ["You will cross the stream multiple times; wear shoes that can get wet", "Watch for poison ivy along the trail", "Pack out everything you pack in"]
      }
    ],
    activities: [
      {
        title: "Don't Bust the Crust!",
        type: "Observation",
        prompt: "Find a patch of dark, bumpy soil (cryptobiotic crust). Look closely without touching it. What does it look like? Why is this soil so important to Koda's home?",
        materials_needed: ["Magnifying glass (optional)"]
      },
      {
        title: "Map Your Trail",
        type: "Hands-On",
        prompt: "Before a walk or hike, draw a simple map of where you plan to go. As you walk, add landmarks you see. Did you follow the path you planned?",
        materials_needed: ["Field journal", "Pencil"]
      }
    ],
    relatedDestinationIds: ['san-juan-county', 'emery-county'],
    gps: "38.5733, -109.5498",
    what3words: "///hero.hoofline.trail"
  },
  {
    id: 'iron-county',
    name: "Iron County",
    guardian: {
      name: "Ash",
      animal_form: "Ironhawk",
      archetype: "Forgeworker",
      teaching_moment: "Teaches that great strength is forged through pressure, heat, and enduring challenges.",
      signature_line: "Temper your spirit in the thunder-hammer's beat.",
      voice: {
        tone: "strong_and_deliberate_craftsman",
        vocabulary: "geological_and_metallurgical",
        signature_phrase: "Temper your spirit in the thunder-hammer's beat",
        teaching_style: "hands-on_application_and_metaphorical_lessons"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Iron County in southwestern Utah within the Great Basin.",
          "Identify key communities like Cedar City (county seat) and the high-elevation town of Brian Head.",
          "Discuss how the arid climate requires human modification of the environment, such as irrigation from mountain streams."
        ],
        History: [
          "Explain why the county was named for its vast iron ore reserves and the history of the Mormon Iron Mission.",
          "Discuss the importance of the county's iron resources during World War II.",
          "Analyze how transportation, including I-15 and the railroad, spurred growth and connected the area to major cities."
        ],
        Economics: [
          "Discuss the shift in the economy towards tourism, supported by attractions like Cedar Breaks National Monument.",
          "Explain how taxes like the Restaurant and Transient Room Tax support the local economy."
        ],
        Civics: [
          "Understand the role of county government in providing public services like safety, health, and recreation.",
          "Learn how different local taxes fund the Iron County School District, individual cities, and special service districts like the Central Iron County Water Conservancy District."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Investigate the geology of iron ore and coal deposits in the region.",
          "Explore the high-altitude geology and erosion at Cedar Breaks National Monument."
        ],
        "Life Science": [
          "Learn about the unique ecosystems found at high elevations, such as near Brian Head."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "High on the Markagunt Plateau, where ancient bristlecone pines twist toward the sky and the earth itself is rich with iron, soars Ash, the Ironhawk. His wings are as strong as the metal in the mountains, and the strike of his dive is the sound of a thunder-hammer.",
      "Ash is a forgeworker. He teaches that, like iron, we are all shaped by the pressures we face. He shows students how the land itself was forged by volcanoes and carved by ice, creating the stunning beauty of Cedar Breaks. He encourages them to be strong, resilient, and to face challenges head-on."
    ],
    field_trip_stops: [
      {
        name: "Cedar Breaks National Monument (Point Supreme Overlook)",
        gps: "37.6119, -112.8441",
        duration: "1.5 hours",
        educational_focus: "Erosion, geology of a high-altitude amphitheater, and alpine ecosystems.",
        guardian_connection: "Ash circles above the rim, explaining that this giant bowl is his forge. Here, ice and water are the hammers that shape the rock into spires and hoodoos, proving that even the strongest materials can be shaped by persistent forces.",
        safety_notes: ["The altitude is over 10,000 feet; take it easy to avoid altitude sickness", "Stay behind safety railings", "Weather can change very quickly"]
      },
      {
        name: "Parowan Gap Petroglyphs",
        gps: "37.9105, -112.9758",
        duration: "1 hour",
        educational_focus: "Native American rock art, archaeoastronomy, and cultural history.",
        guardian_connection: "Ash shows how ancient people also used a hammer—a rock—to carve their stories and calendars into the stone. He explains that these carvings are a form of smithing, shaping stone to hold meaning.",
        safety_notes: ["Do not touch or climb on the petroglyph panels", "Watch for snakes in warm weather", "Respect this important cultural site"]
      }
    ],
    activities: [
      {
        title: "Clay Forging",
        type: "Hands-On",
        prompt: "Take a piece of modeling clay. Use your hands, a pencil, or a stick to shape it. Can you make a spiral like a hawk's flight? Or a symbol from the petroglyphs?",
        materials_needed: ["Modeling clay"]
      },
      {
        title: "Core Strength",
        type: "Storytelling",
        prompt: "Think of a time you did something difficult. What made you strong enough to do it? Share the story of your 'inner iron.'",
        materials_needed: ["Field journal (optional)"]
      }
    ],
    relatedDestinationIds: ['beaver-county', 'garfield-county', 'kane-county', 'washington-county'],
    gps: "37.8425, -113.0619",
    what3words: "///forge.thunder.hammer"
  },
  {
    id: 'juab-county',
    name: "Juab County",
    guardian: {
      name: "Faye",
      animal_form: "Trilobite oracle",
      archetype: "Crone-Sage",
      teaching_moment: "Teaches that the oldest stories are told by the rocks, and touching the past helps us understand the present.",
      signature_line: "Feel the age of the stone.",
      voice: {
        tone: "ancient_and_wise_storykeeper",
        vocabulary: "geologic_time_and_fossils",
        signature_phrase: "Feel the age of the stone",
        teaching_style: "tactile_learning_and_deep_time_contemplation"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Identify key landforms such as the Sheeprock Mountains and the Little Sahara Sand Dunes.",
          "Discuss the role of the Central Utah Water Conservancy District in managing water in an arid climate."
        ],
        History: [
          "Trace the path of the Pony Express Trail through the county.",
          "Learn about the Goshute tribe's history and presence in the region.",
          "Investigate the history of the Tintic Mining District and towns like Eureka."
        ],
        Civics: [
          "Understand how local taxes fund services like the Juab County Fire District and water conservancies.",
          "Learn that the county is served by two school districts: Juab and Tintic.",
          "Compare the tax levies for cities like Nephi and Eureka."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Learn about the famous trilobite fossils found in the region.",
          "Explore the geology of the Great Basin and desert landforms like sand dunes."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the vast quiet of the West Desert, where mountains seem to float on seas of sagebrush, lives the oldest guardian of all: Faye, the Trilobite Oracle. She doesn't speak in words, but in the language of stone and time. Her body is a fossil, a perfect record of a world 500 million years old.",
      "Faye is a crone-sage, a keeper of deep time. Through her 'age-touch,' she allows students to feel the immense history of the planet. She teaches that the land has changed countless times, and that the stories of ancient seas and creatures are waiting to be found by anyone patient enough to look."
    ],
    field_trip_stops: [
      {
        name: "U-Dig Fossils Trilobite Quarry",
        gps: "39.7231, -113.3106",
        duration: "2-3 hours",
        educational_focus: "Paleontology, fossil hunting, and the Cambrian period.",
        guardian_connection: "This is Faye's library. She guides students' hands as they split shale, revealing her trilobite relatives. Each fossil is a word in the earth's oldest storybook.",
        safety_notes: ["Safety glasses are required and provided", "Wear sturdy shoes", "The quarry is remote; bring water and snacks"]
      },
      {
        name: "Little Sahara Sand Dunes",
        gps: "39.7180, -112.3025",
        duration: "1.5 hours",
        educational_focus: "Sand dune formation, wind erosion, and desert ecosystems.",
        guardian_connection: "Faye contrasts the ancient, solid rock of the quarry with the ever-shifting sand. She explains that the sand is also made of ancient rock, just broken down into tiny pieces, showing another form of transformation over time.",
        safety_notes: ["Be extremely cautious of off-road vehicles; stay in designated safe areas", "The sand can be very hot", "Do not climb steep, unstable dune faces"]
      }
    ],
    activities: [
      {
        title: "Make a Fossil Cast",
        type: "Hands-On",
        prompt: "Press a seashell, leaf, or toy dinosaur into a flat piece of modeling clay to make an impression. Then, carefully remove it. You've created a mold, just like the real fossils!",
        materials_needed: ["Modeling clay", "Small objects like shells or leaves"]
      },
      {
        title: "Timeline of Your Life",
        type: "Storytelling",
        prompt: "Draw a long line. On one end, mark your birth. On the other, mark today. Fill in important events. Now, imagine how long the line would have to be for Faye the trilobite!",
        materials_needed: ["Paper", "Pencil or ruler"]
      }
    ],
    relatedDestinationIds: ['millard-county', 'sanpete-county', 'utah-county', 'tooele-county'],
    gps: "39.7333, -111.8502",
    what3words: "///crone.sage.touch"
  },
  {
    id: 'kane-county',
    name: "Kane County",
    guardian: {
      name: "Zina",
      animal_form: "Ringtail slot phantom",
      archetype: "Rogue-Guide",
      teaching_moment: "Teaches the importance of being adaptable, clever, and respectful of the hidden power of narrow places.",
      signature_line: "The tightest spots hold the greatest secrets.",
      voice: {
        tone: "sly_and_nimble_explorer",
        vocabulary: "geological_and_adventurous",
        signature_phrase: "The tightest spots hold the greatest secrets",
        teaching_style: "experiential_guidance_and_puzzle-solving"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Kane County in Southern Utah, bordering Arizona.",
          "Understand that nearly 90% of the county is public land.",
          "Identify Kanab as the county seat.",
          "Recognize the presence of the Kaibab Paiute Tribal Lands.",
          "Explain the role of the Kane County Water Conservancy District."
        ],
        History: [
          "Discuss the history of the Kaibab Paiute tribe in the region.",
          "Explain why Kanab is known as 'Little Hollywood' due to over 100 movies being filmed there."
        ],
        Economics: [
          "Analyze the importance of tourism and the film industry to the local economy.",
          "Discuss the county's demographic data, including population and median income."
        ],
        Civics: [
          "Understand how property taxes fund the Kane County School District and local town services.",
          "Identify the general county levy rate and how it supports government functions."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Learn about the geology of slot canyons and the dangers of flash floods.",
          "Explore the unique sandstone formations of the Grand Staircase-Escalante area."
        ],
        "Life Science": [
          "Investigate how animals, like the Ringtail, adapt to living in narrow canyons."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Kane County is a land of breathtaking slots, where the rock has been carved by water into narrow, secret passageways. Flitting through these tight spaces is Zina, the Ringtail Slot Phantom. Part guide, part trickster, she knows every twist, turn, and escape route.",
      "Zina is a rogue-guide. She teaches that to explore these amazing places, you must be smart, quick, and prepared. She warns of the flash flood, a sudden display of the canyon's power. Zina shows students how to appreciate the beauty of confinement and the thrill of navigating a world of stone waves."
    ],
    field_trip_stops: [
      {
        name: "Zion-Mount Carmel Tunnel (East entrance of Zion NP)",
        gps: "37.2132, -112.9482",
        duration: "45 minutes (drive and stops)",
        educational_focus: "Engineering, geology of sandstone, and accessing remote areas.",
        guardian_connection: "Zina loves the tunnel, calling it a 'human-made slot canyon.' She zips along the canyon walls outside, showing how the engineers had to be clever, just like her, to pass through the solid rock.",
        safety_notes: ["Do not stop in the tunnel", "Use pullouts for photos", "Large vehicles may need an escort"]
      },
      {
        name: "Moqui Cave",
        gps: "37.1264, -112.5925",
        duration: "1 hour",
        educational_focus: "Local geology, Native American history, and fluorescent minerals.",
        guardian_connection: "Zina uses this cave as a classroom to show how water can carve out homes and secret places. She points out the glowing rocks as the hidden magic of the stone, revealed only in the dark.",
        safety_notes: ["The floor can be uneven", "Stay with the tour guide", "The UV light display is in a dark room"]
      }
    ],
    activities: [
      {
        title: "Flash Flood in a Bottle",
        type: "Hands-On",
        prompt: "Fill a plastic bottle halfway with sand and small pebbles. Fill the rest with water. Turn it upside down. See how fast the water can move the 'rocks' and 'boulders'?",
        materials_needed: ["Clear plastic bottle with lid", "Sand", "Small pebbles", "Water"]
      },
      {
        title: "Navigate a Maze",
        type: "Hands-On",
        prompt: "On paper, draw a simple maze with a start and finish. Trade with a friend and see if you can solve their maze. Think like Zina, looking ahead to find the right path.",
        materials_needed: ["Paper", "Pencil"]
      }
    ],
    relatedDestinationIds: ['garfield-county', 'washington-county', 'iron-county'],
    gps: "37.0622, -112.5263",
    what3words: "///rogue.slot.omen"
  },
  {
    id: 'millard-county',
    name: "Millard County",
    guardian: {
      name: "Bram",
      animal_form: "Horned lizard knight",
      archetype: "Caretaker",
      teaching_moment: "Teaches that defense and patience are powerful virtues, and that a tough exterior protects a resilient spirit.",
      signature_line: "My armor is the land itself.",
      voice: {
        tone: "stoic_and_honorable_protector",
        vocabulary: "geological_and_defensive",
        signature_phrase: "My armor is the land itself",
        teaching_style: "defensive_strategy_and_character-building"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Millard County in Central Utah.",
          "Explain how its location on I-15 and I-70 makes it a transportation hub.",
          "Identify Fillmore as the county seat and Delta as the largest city."
        ],
        History: [
          "Explain why Fillmore was chosen as the first territorial capital of Utah.",
          "Discuss the history of the Topaz Internment Camp during World War II, a National Historic Site."
        ],
        Economics: [
          "Analyze why agriculture, especially alfalfa hay, is the dominant industry.",
          "Discuss the county's focus on expanding its energy sector, including natural gas and renewables.",
          "Note that the economy is not dependent on tourism."
        ],
        Civics: [
          "Learn about community services like the local hospitals in Fillmore and Delta.",
          "Discuss infrastructure challenges like limited broadband internet access."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the volcanic geology of the region, including basalt lava flows.",
          "Investigate the formation of the Sevier Desert."
        ],
        "Life Science": [
          "Discuss desert survival adaptations of local wildlife, like the horned lizard."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Millard County is a vast land of ancient lava flows and sun-baked earth. Standing guard over this challenging landscape is Bram, the Horned Lizard Knight. His scales are like basalt armor, and his calm watchfulness protects the secrets of the desert.",
      "Bram is a caretaker, a noble defender of his home. He teaches that the best defense is patience and a deep connection to the land. He shows students how the earth defended itself with flows of lava, creating a rugged, beautiful shield. Bram's quiet strength is a lesson in resilience."
    ],
    field_trip_stops: [
      {
        name: "Fillmore Territorial Statehouse",
        gps: "38.9669, -112.3361",
        duration: "1 hour",
        educational_focus: "Utah's early political history and pioneer architecture.",
        guardian_connection: "Bram stands guard outside, explaining that the pioneers tried to build a strong center for their new home, just as he has a strong center. The red stone of the statehouse is like a piece of his armor.",
        safety_notes: ["Respect the historic building and artifacts", "Stay with your group"]
      },
      {
        name: "Topaz Museum",
        gps: "39.4283, -112.7533",
        duration: "1.5 hours",
        educational_focus: "History of Japanese American internment during WWII.",
        guardian_connection: "Bram speaks softly here, teaching a difficult lesson. He explains how the people at Topaz needed armor for their spirits to endure a great injustice, showing a different kind of strength and resilience.",
        safety_notes: ["Be respectful of the sensitive history", "Listen carefully to the stories and exhibits"]
      }
    ],
    activities: [
      {
        title: "Lava Flow Simulation",
        type: "Hands-On",
        prompt: "On a tilted board or cookie sheet, mix a thick paste of baking soda and a little water. Slowly pour vinegar onto it. Watch how the 'lava' flows and hardens.",
        materials_needed: ["Tilted board", "Baking soda", "Water", "Vinegar"]
      },
      {
        title: "Animal Defenses",
        type: "Storytelling",
        prompt: "Name three animals and their defenses (e.g., turtle-shell, skunk-spray). What is a special defense you have? (e.g., being a fast runner, being a good friend).",
        materials_needed: ["Imagination"]
      }
    ],
    relatedDestinationIds: ['juab-county', 'sevier-county', 'beaver-county', 'sanpete-county'],
    gps: "38.9691, -112.3297",
    what3words: "///paladin.basalt.armor"
  },
  {
    id: 'morgan-county',
    name: "Morgan County",
    guardian: {
      name: "Nellie",
      animal_form: "Oryx",
      archetype: "The Steady Heart",
      teaching_moment: "Teaches that journeys, like rivers and railroads, have a powerful flow and connect the past to the present.",
      signature_line: "Feel the rhythm of the rails.",
      voice: {
        tone: "gentle_and_rhythmic_guide",
        vocabulary: "historical_transit_and_flow",
        signature_phrase: "Feel the rhythm of the rails",
        teaching_style: "storytelling_through_movement_and_sound"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Identify Morgan County's location in Northern Utah.",
          "Discuss its high population growth rate and identify Mountain Green as a key growth area.",
          "Understand the role of the Weber Basin Water Conservancy District in the community.",
          "Explore the path of the Weber River through the county."
        ],
        History: [
          "Learn about the construction of the Transcontinental Railroad through Weber Canyon.",
          "Investigate the history of pioneer settlement in the narrow valley."
        ],
        Economics: [
          "Discuss the county's low poverty rate compared to other areas."
        ],
        Civics: [
          "Analyze how local property taxes fund the Morgan County School District and Morgan City.",
          "Identify various special service districts that provide utilities, fire protection, and water."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Examine unique geological formations like Devil's Slide.",
          "Discuss the geology of Weber Canyon and how it was formed."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Morgan County is defined by the powerful Weber River and the gleaming rails of the railroad, both carving a path through the steep Wasatch Mountains. The spirit of this journey is Nellie, the Oryx. She is a gentle guide whose presence marks the steady heart of the canyon's passage.",
      "Nellie is a guide for journeys. Her lantern sways, lighting the way through dark tunnels and showing how the past is always traveling with us. She teaches students to listen to the story of the canyon, told by the flowing water and the rumbling train."
    ],
    field_trip_stops: [
      {
        name: "Weber Canyon (viewing from I-84)",
        gps: "41.1550, -111.7569",
        duration: "30 minutes (drive-by)",
        educational_focus: "Transportation corridor, geology, and human engineering.",
        guardian_connection: "Nellie moves gracefully alongside the highway, showing how the road, river, and railroad all must follow the same path carved through the mountains. It's a lesson in following the path of least resistance.",
        safety_notes: ["Do not stop on the interstate; use designated rest areas or exits", "Observe from the car"]
      },
      {
        name: "Devil's Slide",
        gps: "41.1069, -111.5647",
        duration: "15 minutes",
        educational_focus: "Unique geological formation of limestone strata.",
        guardian_connection: "Nellie pauses here, explaining that the earth itself built a slide. She sees it as a shortcut and a reminder that geology can be playful and strange.",
        safety_notes: ["Pull completely off the road into the designated viewing area", "Be aware of highway traffic"]
      }
    ],
    activities: [
      {
        title: "Rhythm Orchestra",
        type: "Hands-On",
        prompt: "Using your hands and feet, create a rhythm that sounds like a train. Start slow (chug-chug), then get faster, then slow down again for a stop. Can you add a whistle sound?",
        materials_needed: ["Your body"]
      },
      {
        title: "Mapping a Journey",
        type: "Hands-On",
        prompt: "Draw a map of your journey from home to school. What are the main roads (rivers)? What are the landmarks (mountains)?",
        materials_needed: ["Paper", "Pencil or crayons"]
      }
    ],
    relatedDestinationIds: ['weber-county', 'davis-county', 'summit-county', 'rich-county'],
    gps: "41.0422, -111.6772",
    what3words: "///lantern.sway.rhythm"
  },
  {
    id: 'piute-county',
    name: "Piute County",
    guardian: {
      name: "Juniper Jack",
      animal_form: "Pine marten",
      archetype: "The Wild Bard",
      teaching_moment: "Teaches that every place has a song, and that music and stories connect us to the land and to each other.",
      signature_line: "What's the songline of this valley?",
      voice: {
        tone: "folksy_and_wandering_musician",
        vocabulary: "musical_and_colloquial",
        signature_phrase: "What's the songline of this valley?",
        teaching_style: "learning_through_music_and_storytelling"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Piute County in south-central Utah and identify it as one of the state's smallest counties by population.",
          "Understand that 87% of the county is public land.",
          "Explain the origin of the county's name from the Paiute tribe."
        ],
        History: [
          "Learn about the history of the Paiute people in the region.",
          "Discuss the location of Butch Cassidy's boyhood home.",
          "Understand the historical challenges of governing a large, remote county."
        ],
        Economics: [
          "Analyze the main industries: education, tourism, retail, and manufacturing.",
          "Discuss economic challenges, including high unemployment and poverty rates.",
          "Explain the concept of a commuting workforce."
        ],
        Civics: [
          "Learn about the structure of the county's small school system.",
          "Discuss how workforce development can be a challenge in rural areas."
        ]
      },
      science_seed: {
        "Life Science": [
          "Investigate the ecosystems of the Tushar Mountains and the Sevier River.",
          "Learn about native plant life like juniper trees."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the high, dry country of Piute County, where the wind whispers through the junipers, lives a wandering musician named Juniper Jack. He's a Pine Marten with a song for every canyon, and he knows the tune of every creek, the rhythm of every season, and the ballad of every outlaw.",
      "Juniper Jack is a bard-guide who follows the 'songlines' of the land. He teaches that history isn't just a list of facts, but a collection of stories set to music. He'll play the lonely song of the wind, or the joyful tune of a hidden spring, inviting everyone to listen and learn the story by heart."
    ],
    field_trip_stops: [
      {
        name: "Butch Cassidy's Boyhood Home",
        gps: "38.3183, -112.2227",
        duration: "45 minutes",
        educational_focus: "History of outlaws, pioneer life, and local legends.",
        guardian_connection: "Juniper Jack sings a tune around the old cabin, telling the story of Robert Leroy Parker, a local boy whose own song grew into a legend. He asks students to think about the 'music' of their own choices.",
        safety_notes: ["Respect the historic structure", "The cabin is on private property but accessible to visitors; be respectful"]
      },
      {
        name: "Piute State Park",
        gps: "38.1633, -112.1352",
        duration: "1 hour",
        educational_focus: "Reservoir ecology, water birds, and high-desert recreation.",
        guardian_connection: "Juniper Jack explains that the reservoir is the heart of the valley's song, providing the water that allows all life—from fish to birds to cottonwood trees—to join the chorus.",
        safety_notes: ["Be cautious near the water's edge", "Weather can be windy", "Services are limited"]
      }
    ],
    activities: [
      {
        title: "Found Sound",
        type: "Hands-On",
        prompt: "Find two rocks and tap them together. Rub two sticks together. Rustle some leaves. How many different sounds can you make using only things from nature? Create a simple rhythm.",
        materials_needed: ["Natural objects from the ground"]
      },
      {
        title: "Write a Town Ballad",
        type: "Storytelling",
        prompt: "Think about your own town. If you were to write a song about it, what would the first verse be? What makes your town special? Write one four-line verse.",
        materials_needed: ["Field journal", "Pencil"]
      }
    ],
    relatedDestinationIds: ['sevier-county', 'wayne-county', 'garfield-county', 'beaver-county'],
    gps: "38.3486, -112.1288",
    what3words: "///seed.sprout.promise"
  },
  {
    id: 'rich-county',
    name: "Rich County",
    guardian: {
      name: "Rich",
      animal_form: "Lake serpent poet",
      archetype: "Cryptid-Companion",
      teaching_moment: "Teaches that stories and legends can be bigger than they appear, holding scientific wonder within.",
      signature_line: "There's a poem in the deep blue.",
      voice: {
        tone: "mysterious_and_poetic_friend",
        vocabulary: "legend_and_limnology",
        signature_phrase: "There's a poem in the deep blue",
        teaching_style: "riddles_and_metaphor"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Rich County in the northeast corner of Utah.",
          "Identify Bear Lake as the county's main geographical and economic feature.",
          "Discuss the presence of second homes and its impact on the community."
        ],
        History: [
          "Trace the path of the Oregon Trail through the region.",
          "Learn about the history of early ranching families in the Bear Lake Valley."
        ],
        Economics: [
          "Analyze the county's heavy reliance on the travel and tourism industry centered around Bear Lake."
        ],
        Civics: [
          "Understand how local taxes fund the Rich County School District and special services like the Woodruff Fire and Cemetery Districts."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Learn about the unique limestone geology that gives Bear Lake its turquoise color.",
          "Discuss the concept of endorheic lakes (lakes that don't flow to the ocean)."
        ],
        "Life Science": [
          "Investigate the endemic fish species found only in Bear Lake."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the high valley of Rich County lies Bear Lake, known as the 'Caribbean of the Rockies' for its intense turquoise water. Within its turquoise heart swims a living poem: Rich, the Lake Serpent. Less a monster and more a muse, Rich is a friendly companion who guards the lake's deep science and stories.",
      "Rich teaches students that every legend has a rhythm and every mystery has a verse. They explain that the lake's stunning color is a story of geology, and its legends are poems about its unique life. Rich shows that the deepest truths are often found in the most beautiful myths."
    ],
    field_trip_stops: [
      {
        name: "Bear Lake Marina",
        gps: "41.9566, -111.3969",
        duration: "1.5 hours",
        educational_focus: "Unique water chemistry and geology of Bear Lake.",
        guardian_connection: "Rich's favorite spot, where the water's color inspires new verses about how suspended limestone particles create the turquoise hue.",
        safety_notes: ["Wear life jackets near the docks", "Watch for boat traffic", "The water is very cold"]
      },
      {
        name: "Oregon Trail Overlook (US-89)",
        gps: "41.8791, -111.1963",
        duration: "45 minutes",
        educational_focus: "Pioneer history and westward expansion.",
        guardian_connection: "Rich recites poems of the pioneers, whose own stories became part of the land's great epic as they journeyed past his lake.",
        safety_notes: ["Stay behind safety railings", "Be aware of the steep drop-off", "Pull off the highway safely"]
      }
    ],
    activities: [
      {
        title: "Make a 'Bear Lake'",
        type: "Hands-On",
        prompt: "In a jar of water, add a spoonful of rock dust (or flour) to see how suspended particles change the water's color. Shine a light through it.",
        materials_needed: ["Glass jar with lid", "Water", "Fine rock dust or flour", "Flashlight"]
      },
      {
        title: "Raspberry Economics",
        type: "Storytelling",
        prompt: "Discuss why raspberries are famous in Bear Lake and create a story about how the first raspberry shake was invented. What makes them so special?",
        materials_needed: ["Field journal"]
      }
    ],
    relatedDestinationIds: ['cache-county', 'summit-county', 'weber-county'],
    gps: "41.8027, -111.3216",
    what3words: "///caribbean.of.the.rockies"
  },
  {
    id: 'salt-lake-county',
    name: "Salt Lake County",
    guardian: {
      name: "Jorah",
      animal_form: "Muskrat current-keeper",
      archetype: "Mentor",
      teaching_moment: "Teaches the delicate balance of warmth and cold in the valley's currents, both in water and life.",
      signature_line: "Feel the balance in the flow.",
      voice: {
        tone: "calm_and_centered_mentor",
        vocabulary: "elemental_balance",
        signature_phrase: "Feel the balance in the flow",
        teaching_style: "observation_and_reflection"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Identify Salt Lake County as the state's most populated county, located on the Wasatch Front.",
          "Discuss the environmental and health challenges of a dense population, such as air quality inversions and earthquake risks."
        ],
        History: [
          "Explore key historical events that impacted the county, including World Wars, the Spanish Flu, and the incarceration of Japanese Americans.",
          "Learn about the pioneer settlement of the Salt Lake Valley and the 2002 Winter Olympics."
        ],
        Economics: [
          "Analyze the diverse economy of the county, including recreation, tourism, mining, information technology, manufacturing, and agriculture."
        ],
        Civics: [
          "Identify the numerous school districts serving the county (e.g., Salt Lake, Granite, Jordan, Canyons).",
          "Explain how taxes fund a wide array of special service districts for water, fire, law enforcement, libraries, and mosquito abatement.",
          "Understand the organization of government in Utah's largest county."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Investigate the geology of the Wasatch Fault and its associated earthquake risks.",
          "Learn about the Salt Lake Valley's watershed and how it provides water to the community."
        ],
        "Life Science": [
          "Explore urban wildlife and how animals adapt to living near cities."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Salt Lake County is a place of contrasts, where city currents meet mountain streams. Guardian Jorah, a wise Muskrat, tends to the waterways, teaching the balance of warmth and cold, urban life and wild nature.",
      "Jorah reveals how everything flows together—from the snowmelt in the canyons to the city's hidden aquifers. They teach students to see the invisible currents of history and nature that shape the valley."
    ],
    field_trip_stops: [
      {
        name: "City Creek Canyon",
        gps: "40.7815, -111.8841",
        duration: "1-2 hours",
        educational_focus: "Urban watershed and water cycle.",
        guardian_connection: "Jorah demonstrates how mountain streams are the lifeblood of the city, a perfect example of natural and urban systems in balance.",
        safety_notes: ["Stay on the paved path", "Watch for cyclists", "Do not drink stream water"]
      },
      {
        name: "Gilgal Sculpture Garden",
        gps: "40.7570, -111.8744",
        duration: "1 hour",
        educational_focus: "Local history, art, and symbolism.",
        guardian_connection: "Jorah helps interpret the stone carvings as frozen stories, showing how ideas and beliefs create their own powerful currents through time.",
        safety_notes: ["Respect the art", "Stay with your group in the enclosed space"]
      }
    ],
    activities: [
      {
        title: "Build a Watershed",
        type: "Hands-On",
        prompt: "Use a crumpled piece of paper and a spray bottle to see how water flows from mountains to valleys.",
        materials_needed: ["Large paper", "Markers", "Spray bottle with water"]
      },
      {
        title: "Symbol Sketching",
        type: "Observation",
        prompt: "At Gilgal Garden, sketch a symbol that you find interesting and write what you think it means.",
        materials_needed: ["Field journal", "Pencil"]
      }
    ],
    relatedDestinationIds: ['utah-county', 'tooele-county', 'davis-county', 'morgan-county', 'wasatch-county'],
    gps: "40.7608, -111.8910",
    what3words: "///valley.guardian.crossroads"
  },
  {
    id: 'san-juan-county',
    name: "San Juan County",
    guardian: {
      name: "Hob",
      animal_form: "Raven sound-carver",
      archetype: "Trickster-Sage",
      teaching_moment: "Teaches that words and symbols have power, and that history can be written, spoken, or carved into stone.",
      signature_line: "Listen to what the rocks remember.",
      voice: {
        tone: "clever_and_raspy_linguist",
        vocabulary: "symbolic_and_ancient",
        signature_phrase: "Listen to what the rocks remember",
        teaching_style: "puzzle-solving_and_deciphering_meaning"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
            "Locate San Juan County in Utah's southeastern corner, identifying it as the state's largest county by land area.",
            "Identify the Four Corners Monument, where Utah meets Colorado, New Mexico, and Arizona.",
            "Understand that 92% of the county is public or tribal land, with a large portion belonging to the Navajo Nation.",
            "Discuss San Juan's status as Utah's most racially diverse county, with a population nearly half Native American."
        ],
        History: [
            "Learn about the different settlement patterns in the north versus the south of the county.",
            "Discuss the historical and ongoing challenges faced by the Navajo population, including infrastructure and school access.",
            "Learn about Ancestral Puebloan culture through sites like Bears Ears National Monument."
        ],
        Economics: [
            "Identify major employment sectors like health care, education, and construction.",
            "Discuss the importance of resource extraction, including the only operating uranium mill in the U.S. located in Blanding.",
            "Explore the concept of 'industrial tourism' and its potential for the local economy."
        ],
        Civics: [
            "Analyze the unequal distribution of services like paved roads and libraries across the county.",
            "Discuss the county's high poverty rate and its impact on residents.",
            "Understand the complex relationship between tribal, local, state, and federal governments."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the geology of famous landmarks like Monument Valley and the Goosenecks of the San Juan River.",
          "Learn about desert varnish and how it is used to create petroglyphs."
        ],
        Archaeology: [
          "Discuss the importance of archaeological sites in understanding past cultures."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the vast, red-rock expanses of San Juan County, where giant monuments touch the sky, lives a guardian of memory and language: Hob, the Raven Sound-Carver. With his sharp eyes and even sharper wit, he knows the stories left on the canyon walls and the secrets carried on the wind.",
      "Hob is a trickster-sage who plays with echoes and symbols. He can mimic any sound and read the ancient glyphs as if they were carved yesterday. He teaches that stories give a place its soul, and challenges students to become sound-carvers themselves, to leave their own mark of meaning on the world."
    ],
    field_trip_stops: [
      {
        name: "Newspaper Rock State Historical Monument",
        gps: "37.9863, -109.5186",
        duration: "1 hour",
        educational_focus: "Petroglyphs from multiple cultures (Puebloan, Fremont, Ute, Navajo).",
        guardian_connection: "Hob considers this rock his favorite newspaper. He hops from glyph to glyph, translating the stories of hunts, ceremonies, and cosmic events, showing how different cultures all carved their truths onto the same page.",
        safety_notes: ["Do not touch the rock art", "Use binoculars for a closer look", "Respect this sacred and historic site"]
      },
      {
        name: "Goosenecks State Park",
        gps: "37.1744, -109.9272",
        duration: "45 minutes",
        educational_focus: "River entrenchment, erosion, and geological time.",
        guardian_connection: "Hob soars over the canyon, cawing with delight. He explains that the San Juan River carved these giant glyphs into the earth, writing a 300-million-year-old story of persistence. It's the earth's own signature.",
        safety_notes: ["Stay behind safety railings", "Extreme vertical drops", "Services are very limited"]
      }
    ],
    activities: [
      {
        title: "Create Your Own Glyph",
        type: "Hands-On",
        prompt: "Invent a symbol that represents you or your family. What does it mean? Draw it in your journal. Can you combine symbols to tell a short story?",
        materials_needed: ["Field journal", "Pencil"]
      },
      {
        title: "Echo Glyphs",
        type: "Storytelling",
        prompt: "One person says a word. The next person repeats it and adds another word. Continue as long as you can, creating a story chain like an echo traveling down a canyon.",
        materials_needed: ["Voices", "Good memories"]
      }
    ],
    relatedDestinationIds: ['grand-county', 'wayne-county', 'garfield-county', 'kane-county'],
    gps: "37.1744, -109.9272",
    what3words: "///glyph.echo.remember"
  },
  {
    id: 'sanpete-county',
    name: "Sanpete County",
    guardian: {
      name: "Loam",
      animal_form: "Badger",
      archetype: "Hearth-Keeper",
      teaching_moment: "Teaches that great potential is held in the smallest packages, and with care, even a dry land can burst with life.",
      signature_line: "Every seed is a promise.",
      voice: {
        tone: "gentle_and_hopeful_gardener",
        vocabulary: "botanical_and_potential",
        signature_phrase: "Every seed is a promise",
        teaching_style: "nurturing_growth_and_hands-on_planting"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Sanpete County near the center of Utah.",
          "Identify key landforms like the Wasatch Plateau and Sanpitch Mountains.",
          "Recognize the large amount of public land within the Manti-La Sal National Forest.",
          "Identify major communities along Highway 89, including Manti (county seat), Ephraim, and Gunnison."
        ],
        History: [
          "Discuss the county's history as a 'raw frontier' for pioneers in the 1850s.",
          "Learn about the development of roads connecting the county to Salt Lake City and local resources.",
          "Investigate the Scandinavian heritage of many early settlers."
        ],
        Economics: [
          "Analyze the importance of agriculture and turkey farming to the local economy."
        ],
        Civics: [
          "Identify the two school districts serving the county: North Sanpete and South Sanpete.",
          "Discuss the financial challenges faced by local schools due to low property valuation per student.",
          "Learn about the diverse educational options in the county, including Snow College and programs at the Gunnison Prison."
        ]
      },
      science_seed: {
        Science: ["High-plateau ecosystems", "Geology of the Great Basin", "Agriculture science"],
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the wide, fertile valley of Sanpete, tucked between high plateaus, lives a guardian of the community's heart: Loam, the Badger Hearth-Keeper. She knows the deep roots of the valley and teaches that a community's strength, like a strong family, comes from its foundation.",
      "Loam is a caretaker of the valley's soul. She knows that history and community are seeds planted by the pioneers. She teaches that with nurturing and care, these roots grow strong and can weather any storm, ensuring a bountiful harvest for generations."
    ],
    field_trip_stops: [
      {
        name: "Manti Temple",
        gps: "39.2647, -111.6372",
        duration: "30 minutes (viewing grounds)",
        educational_focus: "Pioneer craftsmanship, architecture, and religious history.",
        guardian_connection: "Loam sits on the hill, explaining how the pioneers built this 'castle' from the earth itself. Their hard work was a way of planting a seed of faith, creating a strong foundation for their community.",
        safety_notes: ["Be respectful of the temple grounds", "The temple itself is not open for public tours", "Enjoy the peaceful atmosphere"]
      },
      {
        name: "Spring City Historic District",
        gps: "39.4791, -111.4924",
        duration: "1 hour",
        educational_focus: "Preserved pioneer-era architecture and small-town history.",
        guardian_connection: "Loam points to the old stone houses. Each one, she says, is a hearth, a warm center for a family. Together, they create the heart of the town, telling tales of the Scandinavian families who settled here.",
        safety_notes: ["Be respectful of private residences", "Drive slowly", "The old stone town hall is a good starting point"]
      }
    ],
    activities: [
      {
        title: "Seed Sprouting",
        type: "Hands-On",
        prompt: "Place a bean seed in a wet paper towel inside a plastic bag. Tape it to a window. Check it every day. How long does it take for it to sprout? What does it need to grow?",
        materials_needed: ["Bean seed", "Paper towel", "Ziploc bag", "Water"]
      },
      {
        title: "A Pocketful of Potential",
        type: "Storytelling",
        prompt: "Imagine you are Loam. What seeds of good ideas or kind words would you carry to plant in your school or community?",
        materials_needed: ["Field journal", "Imagination"]
      }
    ],
    relatedDestinationIds: ['juab-county', 'millard-county', 'sevier-county', 'emery-county', 'carbon-county', 'utah-county'],
    gps: "39.2647, -111.6372",
    what3words: "///bard.songline.valley"
  },
  {
    id: 'sevier-county',
    name: "Sevier County",
    guardian: {
      name: "Gilda",
      animal_form: "Pika alpine athlete",
      archetype: "Challenger",
      teaching_moment: "Teaches the joy of overcoming challenges, preparing for the future, and moving quickly through tough terrain.",
      signature_line: "The higher the climb, the better the view!",
      voice: {
        tone: "energetic_and_motivational_coach",
        vocabulary: "athletic_and_preparatory",
        signature_phrase: "The higher the climb, the better the view!",
        teaching_style: "goal-setting_and_active_learning"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Sevier County in central Utah.",
          "Explain how the county was named for the 'turbulent' (severo) Sevier River by early Spanish explorers.",
          "Identify key communities like Richfield (county seat), Salina, and Monroe.",
          "Recognize famous landmarks like Fish Lake, Fremont Indian State Park, and Big Rock Candy Mountain."
        ],
        History: [
          "Discuss archaeological evidence of human life dating back 5,000 years.",
          "Learn about the history of the Fremont people through the artifacts at Fremont Indian State Park.",
          "Understand that a portion of the Paiute Reservation is located within the county."
        ],
        Economics: [
          "Analyze the county's role as the 'economic center of central Utah.'",
          "Identify the traditional economic base of livestock, manufacturing, and trade.",
          "Discuss the growing importance of recreation and tourism to the local economy."
        ],
        Civics: [
          "Identify the Sevier School District as the provider of public education.",
          "Understand the role of community services like the Sevier Valley Hospital.",
          "Discuss water management in the Sevier River Basin as an example of human modification of the environment."
        ]
      },
      science_seed: {
        Science: ["High-altitude animal adaptations (pika)", "Geology of the Great Basin", "Water rights"],
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the high, rocky slopes of the Sevier Plateau lives a tiny but mighty guardian: Gilda, the Pika Alpine Athlete. She spends her summers expertly navigating the terrain on her 'terrain skis' (her feet!) and gathering food for the winter. For Gilda, every day is a fun and exciting challenge.",
      "Gilda is a challenger and a coach. She teaches that big goals are achieved one small step (or hop) at a time. She encourages students to push their limits, to always be prepared, and to find joy in the effort. With Gilda, you'll learn that even the toughest trails can be an adventure."
    ],
    field_trip_stops: [
      {
        name: "Fremont Indian State Park and Museum",
        gps: "38.5639, -112.3386",
        duration: "2-3 hours",
        educational_focus: "Fremont Indian culture, archaeology, and rock art.",
        guardian_connection: "Gilda zips along the canyon walls, pointing out the petroglyphs. She sees the Fremont people as fellow athletes who thrived in this challenging environment by being smart, prepared, and hardworking.",
        safety_notes: ["Stay on marked trails", "Do not touch rock art", "The museum provides great context for the outdoor trails"]
      },
      {
        name: "Big Rock Candy Mountain",
        gps: "38.4872, -112.2155",
        duration: "30 minutes",
        educational_focus: "Geology of mineral deposits, local folklore, and the Sevier River.",
        guardian_connection: "Gilda loves this colorful mountain! She sees it as a giant, natural climbing wall and a trophy for the river's hard work in carving the canyon. It's a fun reminder that challenges can also be sweet.",
        safety_notes: ["Pull off the road safely into the resort area", "Be aware of traffic", "The 'mountain' is best viewed from a distance"]
      }
    ],
    activities: [
      {
        title: "Haystack Challenge",
        type: "Hands-On",
        prompt: "Like Gilda gathering grass for winter, try to build the tallest, most stable tower you can using only toothpicks and marshmallows (or mini-marshmallows for a harder challenge!).",
        materials_needed: ["Toothpicks", "Marshmallows"]
      },
      {
        title: "Set a Goal",
        type: "Storytelling",
        prompt: "Think of a challenge you want to accomplish (e.g., read a chapter book, learn to tie your shoes, run a mile). Break it down into three small, easy steps. What's the first step?",
        materials_needed: ["Field journal", "Pencil"]
      }
    ],
    relatedDestinationIds: ['piute-county', 'millard-county', 'sanpete-county', 'emery-county', 'wayne-county'],
    gps: "38.5639, -112.3386",
    what3words: "///challenger.alpine.climb"
  },
  {
    id: 'summit-county',
    name: "Summit County",
    guardian: {
      name: "Vex",
      animal_form: "Fox vortex-keeper",
      archetype: "Golden Champion",
      teaching_moment: "Teaches that excellence requires focus, agility, and understanding the flow of energy around you.",
      signature_line: "Find the center of the spin.",
      voice: {
        tone: "confident_and_focused_athlete",
        vocabulary: "dynamic_and_elemental",
        signature_phrase: "Find the center of the spin",
        teaching_style: "kinesthetic_learning_and_focus_exercises"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Summit County in northeastern Utah, part of the Rocky Mountains Region and the 'Wasatch Back'.",
          "Identify key communities like Coalville (county seat), Park City, Kamas, and Oakley.",
          "Recognize the county as a world-class recreation area with major ski resorts."
        ],
        History: [
          "Learn about the Park City Mining District and its history of silver ore deposits.",
          "Discuss the county's role in hosting events for the 2002 Winter Olympics."
        ],
        Economics: [
          "Analyze the economy's reliance on recreation and tourism, driven by its mountain resorts."
        ],
        Civics: [
          "Identify the South Summit School District as a local education provider.",
          "Understand how local taxes fund special services like the Central Utah Water Conservancy District, fire protection, and mosquito abatement.",
          "Learn about historical inter-county agreements for educating students near county lines."
        ]
      },
      science_seed: {
        Science: ["Snow science and avalanches", "Watershed beginnings", "High-altitude training effects"],
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Summit County is the rooftop of Utah, a place of high peaks, deep snow, and thrilling speed. The champion of this domain is Vex, the Fox Vortex-Keeper. With a flash of his golden tail, he can whip up a swirl of leaves or a vortex of snow, controlling the very flow of energy on the mountain.",
      "Vex is a golden champion, a master of movement. He teaches that whether you're a skier, a river, or a tiny fox, success comes from finding the calm center in the middle of a powerful spin. He challenges students to be agile, focused, and to ride the currents of energy with skill and grace."
    ],
    field_trip_stops: [
      {
        name: "Utah Olympic Park",
        gps: "40.7139, -111.5644",
        duration: "2 hours",
        educational_focus: "Olympic history, winter sports physics, and athletic training.",
        guardian_connection: "Vex feels right at home here. He races up the ski jumps, explaining the aerodynamics of flight, and watches the bobsleds, teaching how to find the perfect line through a high-speed turn. This is his training ground.",
        safety_notes: ["Stay in designated spectator areas", "Watch for athletes in training", "Some activities have height and weight requirements"]
      },
      {
        name: "Historic Main Street, Park City",
        gps: "40.6455, -111.4983",
        duration: "1.5 hours",
        educational_focus: "Silver mining history, boomtown architecture, and tourism.",
        guardian_connection: "Vex darts through the alleys, telling tales of the silver rush—a different kind of energy vortex that built this town. He shows how the flow of money and people can shape a mountain just as much as snow and ice.",
        safety_notes: ["Be aware of traffic and the free trolley", "Sidewalks can be crowded", "Many shops are expensive; window shopping is free!"]
      }
    ],
    activities: [
      {
        title: "Water Vortex",
        type: "Hands-On",
        prompt: "Fill a plastic bottle 2/3 with water. Add a pinch of glitter. Screw the cap on tight, turn it upside down, and swirl it quickly. Can you create a vortex like Vex? Watch the glitter find the center.",
        materials_needed: ["Clear plastic bottle with lid", "Water", "Glitter"]
      },
      {
        title: "Balance Challenge",
        type: "Hands-On",
        prompt: "Try to stand on one foot for as long as you can. Is it easier if you focus on a single spot in front of you? That's your center of spin!",
        materials_needed: ["Your body"]
      }
    ],
    relatedDestinationIds: ['salt-lake-county', 'wasatch-county', 'duchesne-county', 'daggett-county', 'morgan-county'],
    gps: "40.6461, -111.4980",
    what3words: "///champion.vortex.peak"
  },
  {
    id: 'tooele-county',
    name: "Tooele County",
    guardian: {
      name: "Voss",
      animal_form: "Jackrabbit racer",
      archetype: "Ascetic Scout",
      teaching_moment: "Teaches endurance, minimalism, and how to find clarity in wide-open, seemingly empty spaces.",
      signature_line: "The fastest way is the simplest path.",
      voice: {
        tone: "minimalist_and_focused_endurance_runner",
        vocabulary: "elemental_and_direct",
        signature_phrase: "The fastest way is the simplest path",
        teaching_style: "leading_by_example_and_focused_observation"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Tooele County in northwestern Utah, identifying it as the state's second-largest county by land area.",
          "Identify major landforms like the Great Salt Lake, Great Salt Lake Desert, and the Oquirrh and Stansbury mountains.",
          "Explain why the Tooele Valley is the most suitable area for settlement due to its climate and water sources.",
          "Learn that the county has the largest number of identified minerals in Utah."
        ],
        History: [
          "Discuss its history as one of the first six counties created in the State of Deseret in 1850.",
          "Learn about the possible Goshute origins of the county's name.",
          "Trace the routes of the Pony Express and Lincoln Highway through the region.",
          "Understand the historical importance of defense industries like the Tooele Army Depot."
        ],
        Economics: [
          "Analyze the county's rapid population growth, driven by people moving into the area.",
          "Discuss the county's family-oriented character, with a high average household size."
        ],
        Civics: [
          "Identify the Tooele County School District as the public education provider.",
          "Understand how local taxes fund special services for fire protection and mosquito abatement."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the geology of the Bonneville Salt Flats and how they were formed from ancient Lake Bonneville.",
          "Learn about the Great Basin as a closed hydrologic system."
        ],
        "Life Science": [
          "Investigate how desert plants and animals survive in a semiarid, high desert climate."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Tooele (too-WILL-ah) County is a vast expanse of white salt and blue sky, a place where distance and speed are measured in their purest forms. The scout of this stark landscape is Voss, the Jackrabbit Racer. He needs nothing but the earth beneath his feet and the horizon in his sights.",
      "Voss is an ascetic scout, a master of endurance who finds strength in simplicity. He creates a 'heat shimmer' as he runs, blurring the line between the land and the sky. He teaches that you can find everything you need in the 'emptiness'—focus, freedom, and the straightest, fastest path forward."
    ],
    field_trip_stops: [
      {
        name: "Bonneville Salt Flats",
        gps: "40.7608, -113.8910",
        duration: "1 hour",
        educational_focus: "Geology of salt pans, land speed racing history, and perception of distance.",
        guardian_connection: "This is Voss's racetrack. He streaks across the salt, explaining how this perfectly flat surface, the bed of ancient Lake Bonneville, is the ultimate test of pure speed. He teaches that simplicity allows for incredible power.",
        safety_notes: ["Do not drive on the salt flats when they are wet or flooded", "The salt can be damaging to vehicles; use a car wash afterward", "It is incredibly bright; sunglasses are essential"]
      },
      {
        name: "Pony Express Trail Marker (Simpson Springs)",
        gps: "40.0383, -112.7844",
        duration: "45 minutes",
        educational_focus: "History of the Pony Express, westward expansion, and communication.",
        guardian_connection: "Voss honors the Pony Express riders as fellow racers against time. He explains how they, too, had to be ascetic scouts, carrying only what was necessary to travel as fast as possible across the desert.",
        safety_notes: ["The trail is a long, unpaved road; check conditions before going", "Services are non-existent; bring all necessary supplies", "This is a very remote area"]
      }
    ],
    activities: [
      {
        title: "Evaporation Experiment",
        type: "Hands-On",
        prompt: "Mix salt into a small bowl of water until it dissolves. Pour a thin layer onto a dark piece of paper and leave it in the sun. What is left behind when the water is gone?",
        materials_needed: ["Salt", "Water", "Bowl", "Black construction paper"]
      },
      {
        title: "What's Essential?",
        type: "Storytelling",
        prompt: "If you were a Pony Express rider and could only carry a small bag, what three essential things would you pack for your journey? Why?",
        materials_needed: ["Field journal", "Pencil"]
      }
    ],
    relatedDestinationIds: ['salt-lake-county', 'juab-county', 'box-elder-county', 'utah-county'],
    gps: "40.5338, -112.2983",
    what3words: "///ascetic.heat.shimmer"
  },
  {
    id: 'uintah-county',
    name: "Uintah County",
    guardian: {
      name: "Dreamwalker",
      animal_form: "Elk time-strider",
      archetype: "Psychopomp-Sage",
      teaching_moment: "Teaches that time is like a river, and the past (fossils) and future flow together in the present moment.",
      signature_line: "Dream the dreams of the ancient bones.",
      voice: {
        tone: "majestic_and_ancient_visionary",
        vocabulary: "geologic_time_and_dreams",
        signature_phrase: "Dream the dreams of the ancient bones",
        teaching_style: "visionary_storytelling_and_connecting_past_to_present"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Uintah County in northeastern Utah as part of the Uinta Basin.",
          "Identify key landforms like the Uinta Mountains and the Tavaputs Plateau.",
          "Recognize the famous Dinosaur National Monument as a key feature.",
          "Understand that a large portion of the county is federally owned land or part of the Uintah and Ouray Indian Reservation."
        ],
        History: [
          "Explain that the county is named for a band of the Ute tribe, one of Utah's five historic tribal groups.",
          "Discuss the findings of the 1776 Spanish Escalante expedition regarding the land's suitability for agriculture.",
          "Learn about the Fremont culture and other ancient peoples of the area."
        ],
        Economics: [
            "Analyze the importance of natural resources, including oil and gas, to the county's economy."
        ],
        Civics: [
            "Identify the Uintah School District as the public education provider.",
            "Understand how local taxes fund the county, cities like Vernal, and special service districts for water and mosquito abatement."
        ]
      },
      science_seed: {
        "Paleontology": [
          "Learn about the world-famous dinosaur fossils found at Dinosaur National Monument.",
        ],
        "Earth Science": [
          "Explore the geology of the Uinta Basin and how it formed.",
          "Investigate the natural processes that preserved so many dinosaur bones in one place."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "The Uinta Basin is a land where time feels thin, where you can almost hear the footsteps of dinosaurs. The guardian of this deep time is Dreamwalker, the Elk Time-Strider. When he sleeps, he dreams the fossil dreams of the creatures who walked this land millions of years ago.",
      "Dreamwalker is a psychopomp-sage, a guide across the ages. He sees the oil in the ground as ancient sunlight, the river as a tool that uncovers the past, and the majestic elk herds as a link in a chain of life stretching back to the dinosaurs. He teaches students to see time not as a line, but as a living landscape."
    ],
    field_trip_stops: [
      {
        name: "Dinosaur National Monument Quarry Exhibit Hall",
        gps: "40.4391, -109.3086",
        duration: "2-3 hours",
        educational_focus: "Dinosaur fossils, paleontology, and geology.",
        guardian_connection: "Dreamwalker calls the Quarry wall the 'greatest dream ever dreamt.' Here, hundreds of his fossil friends are telling their stories all at once. He helps students feel the reality of this ancient world.",
        safety_notes: ["Do not touch the fossils on the wall", "The visitor center provides context before you go to the Quarry Hall", "The park is large; the Quarry is on the Utah side"]
      },
      {
        name: "Fantasy Canyon",
        gps: "40.0633, -109.3900",
        duration: "1.5 hours",
        educational_focus: "Unique erosion formations, geology, and observation skills.",
        guardian_connection: "This is Dreamwalker's sculpture garden, where the earth has dreamed up its most fantastical shapes. He challenges students to find a dragon, a witch, or a castle in the rocks, proving that the ancient world still sparks our imagination.",
        safety_notes: ["The trail is short but a maze; stay on the path", "The formations are extremely fragile; do not climb on them", "The access road is unpaved"]
      }
    ],
    activities: [
      {
        title: "Dinosaur Diorama",
        type: "Hands-On",
        prompt: "Using a shoebox, clay, and small plants, create a scene from the Jurassic period. What dinosaurs will live in your world? What does the landscape look like?",
        materials_needed: ["Shoebox", "Modeling clay", "Small rocks and leaves"]
      },
      {
        title: "Fossil Dreams",
        type: "Storytelling",
        prompt: "Close your eyes and imagine you are a dinosaur. What do you see? What do you eat? What do you hear? Write a short story about one day in your life.",
        materials_needed: ["Field journal", "Pencil", "Imagination"]
      }
    ],
    relatedDestinationIds: ['duchesne-county', 'daggett-county', 'grand-county'],
    gps: "40.4600, -109.5287",
    what3words: "///psychopomp.fossil.dream"
  },
  {
    id: 'utah-county',
    name: "Utah County",
    guardian: {
      name: "Sylvia",
      animal_form: "Owl scholar",
      archetype: "Mother-Mentor",
      teaching_moment: "Teaches that history is written everywhere, from the mountains to the lake, waiting to be read.",
      signature_line: "The truth is written on the wind.",
      voice: {
        tone: "wise_and_patient_scholar",
        vocabulary: "academic_and_historical",
        signature_phrase: "The truth is written on the wind",
        teaching_style: "socratic_inquiry_and_storytelling"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Utah County in central Utah, identifying its position between the Wasatch Mountains and Utah Lake.",
          "Discuss how the county's geography impacts transportation planning.",
          "Understand the safety concerns of living in the region, such as aridity and earthquake risk."
        ],
        History: [
          "Learn that Utah County was one of the original counties created in the State of Deseret in 1850.",
          "Investigate the history of the Fremont and Ute tribes in Utah Valley."
        ],
        Economics: [
          "Analyze the reasons for the county's rapid population and housing growth.",
          "Discuss the diverse economy, including a strong technology sector."
        ],
        Civics: [
          "Identify the three main school districts: Alpine, Provo, and Nebo.",
          "Learn about the county's three-member commission form of government.",
          "Understand how taxes fund essential services, including the Central Utah Water Conservancy District and various city services."
        ]
      },
      science_seed: {
        Science: ["Wetland ecology", "Water cycle", "Geology of the valley"],
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Utah Valley is a library of stone and water, with Mount Timpanogos as its spine and Utah Lake as its open page. Guardian Sylvia, a wise Owl Scholar, perches in the quiet places, reading the truths written in the landscape.",
      "Sylvia teaches that every rock, river, and reed tells a story of time. She helps students decipher the history of the land and its people, encouraging them to listen for the echo of ancient voices and understand the wisdom held within the valley."
    ],
    field_trip_stops: [
      {
        name: "Utah Lake State Park",
        gps: "40.2546, -111.7241",
        duration: "2 hours",
        educational_focus: "Lake ecology and water quality.",
        guardian_connection: "Sylvia's favorite reading spot, where students can learn about the lake's long history—from Lake Bonneville to the present—and the stories held in its waters.",
        safety_notes: ["Stay a safe distance from the water's edge", "Do not feed wildlife", "Be aware of changing weather"]
      },
      {
        name: "Bridal Veil Falls",
        gps: "40.3397, -111.6033",
        duration: "1 hour",
        educational_focus: "Waterfalls, erosion, and the water cycle.",
        guardian_connection: "Sylvia explains how the waterfall is a living story of geology, carving new chapters into the rock with each passing moment.",
        safety_notes: ["Stay on designated trails", "Rocks can be slippery", "Be mindful of traffic in the parking area"]
      }
    ],
    activities: [
      {
        title: "Water Quality Testing",
        type: "Hands-On",
        prompt: "Use simple test strips to measure the pH and clarity of water samples (from a tap or a safe source). What does this tell you about the water's story?",
        materials_needed: ["Water sample jars", "pH test strips", "Turbidity tube (optional)"]
      },
      {
        title: "Guardian Storytelling",
        type: "Storytelling",
        prompt: "Imagine you are Sylvia. Tell a story about one day in your life at Utah Lake. What truths did you read on the wind today?",
        materials_needed: ["Field journal", "Imagination"]
      }
    ],
    relatedDestinationIds: ['salt-lake-county', 'wasatch-county', 'sanpete-county', 'juab-county'],
    gps: "40.2338, -111.6585",
    what3words: "///lake.heart.valley"
  },
  {
    id: 'wasatch-county',
    name: "Wasatch County",
    guardian: {
      name: "Daniel",
      animal_form: "Sasquatch ranger",
      archetype: "Companion-Guide",
      teaching_moment: "Teaches the importance of finding comfort in nature, knowing the trails, and leaving no trace.",
      signature_line: "Walk softly and feel the forest's welcome.",
      voice: {
        tone: "gentle_and_reassuring_woodsman",
        vocabulary: "naturalist_and_comforting",
        signature_phrase: "Walk softly and feel the forest's welcome",
        teaching_style: "guided_walks_and_gentle_encouragement"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Wasatch County in the mountainous 'Wasatch Back' region.",
          "Identify the Heber Valley as the main area of settlement.",
          "Discuss its status as Utah's fastest-growing county from 2010-2020.",
          "Recognize major reservoirs like Jordanelle, Deer Creek, and Strawberry."
        ],
        History: [
          "Learn about the founding of self-sufficient Mormon villages and the Swiss settlement of Midway.",
          "Discuss the county's historical economic dependence on the Wasatch Front.",
          "Understand how railroad technology changes affected communities like Soldier Summit."
        ],
        Economics: [
          "Analyze the reasons for the county's recent population boom, including people moving from urban areas.",
          "Identify recreation as a key part of the modern economy."
        ],
        Civics: [
          "Learn that the county has a single, consolidated school district.",
          "Understand how taxes fund the county, cities like Heber and Midway, and special districts for fire and water."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Explore the geothermal geology that creates the Homestead Crater hot spring."
        ],
        "Life Science": [
          "Investigate the forest ecology of the Uinta and Wasatch National Forests.",
          "Learn about wildlife tracking for animals like deer and moose."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the green, bowl-shaped valleys of Wasatch County, tucked behind the main Wasatch Front, lives a shy but powerful guardian. Daniel, the Sasquatch Ranger, knows every trail, every tree, and every animal in his forest home. He is rarely seen, but his comforting presence is always felt.",
      "Daniel is a companion-guide who radiates a 'comfort aura.' He teaches the quiet joys of being in nature: the smell of pine after rain, the sound of a rustling aspen grove, the satisfaction of a long walk. He is the ultimate Leave No Trace expert, showing students how to be gentle guests in the wild."
    ],
    field_trip_stops: [
      {
        name: "Wasatch Mountain State Park",
        gps: "40.5050, -111.4849",
        duration: "2 hours",
        educational_focus: "Mountain ecosystems, local history, and outdoor recreation.",
        guardian_connection: "Daniel walks invisibly beside you on the trails, pointing out deer tracks and birds' nests. This is his backyard, and he shares its peacefulness, teaching how a simple walk in the woods can make you feel strong and calm.",
        safety_notes: ["Stay on marked trails", "Bring water", "Be aware of wildlife like deer and moose"]
      },
      {
        name: "Homestead Crater",
        gps: "40.5336, -111.4930",
        duration: "1 hour",
        educational_focus: "Geothermal activity, geology, and mineralogy.",
        guardian_connection: "Daniel peeks over the top of the crater, explaining that this is the mountain's warm heart. He sees it as a place of healing and comfort, where the earth itself provides a warm, welcoming bath.",
        safety_notes: ["Swimming or soaking requires reservations and a fee", "The tunnel to the crater can be slippery", "Listen to the guides"]
      }
    ],
    activities: [
      {
        title: "Leave No Trace",
        type: "Hands-On",
        prompt: "On a walk, find one piece of trash that doesn't belong (and have an adult help you pick it up safely). Find one thing of natural beauty (a cool leaf, a pretty rock) and leave it where it is for the next person to enjoy. Why is leaving things important?",
        materials_needed: ["Gloves and a trash bag (for adults)"]
      },
      {
        title: "Find Your Comfort Spot",
        type: "Observation",
        prompt: "Find a spot in a park or your backyard that feels good to you. Sit there for five minutes. What do you see, hear, and smell? This is your 'comfort spot,' just like Daniel has in the forest.",
        materials_needed: ["A comfortable place to sit"]
      }
    ],
    relatedDestinationIds: ['utah-county', 'salt-lake-county', 'summit-county', 'duchesne-county'],
    gps: "40.5097, -111.4849",
    what3words: "///companion.comfort.aura"
  },
  {
    id: 'washington-county',
    name: "Washington County",
    guardian: {
      name: "Sera",
      animal_form: "Roadrunner of the sand",
      archetype: "Scout-Spirit",
      teaching_moment: "Teaches that survival in the desert requires speed, cleverness, and listening for the subtle sounds of life.",
      signature_line: "Hear the bells in the dunes?",
      voice: {
        tone: "swift_and_alert_survivor",
        vocabulary: "desert_ecology_and_sound",
        signature_phrase: "Hear the bells in the dunes?",
        teaching_style: "fast-paced_observation_and_sensory_awareness"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: ["Mojave Desert ecosystem", "Zion National Park (main canyon)", "Red rock geology"],
        History: ["Southern Paiute history", "Mormon Cotton Mission", "St. George Temple"],
      },
      science_seed: {
        Science: ["Desert tortoise habitat", "Lava flow geology", "Water conservation"],
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "In the hot, red-rock country of Washington County, where Utah touches the Mojave Desert, lives a spirit of speed and survival: Sera, the Roadrunner of the Sand. She moves like a blur, her feet barely touching the hot ground, always listening, always watching.",
      "Sera is a scout-spirit who hears everything. The 'dune bells' she speaks of are the tiny sounds of life in the desert—the skitter of a lizard, the buzz of a bee, the whisper of wind over sand. She teaches that to thrive here, you must be quick, smart, and tuned in to the subtle music of the desert."
    ],
    field_trip_stops: [
      {
        name: "Zion National Park Visitor Center (Pa'rus Trail)",
        gps: "37.2007, -112.9863",
        duration: "1.5 hours",
        educational_focus: "River ecosystems, canyon geology, and park history.",
        guardian_connection: "Sera races along the paved path, showing how the Virgin River is the source of all life in the canyon. The sound of the water is the loudest 'dune bell' of all, calling all creatures to its banks.",
        safety_notes: ["The park is extremely crowded; consider using the shuttle", "Stay on the trail", "Drink plenty of water, even for a short walk"]
      },
      {
        name: "Snow Canyon State Park",
        gps: "37.2045, -113.6425",
        duration: "2 hours",
        educational_focus: "Volcanic geology (lava tubes), sand dunes, and desert ecology.",
        guardian_connection: "Sera darts between black lava rocks and red sand dunes, a landscape of fire and wind. She teaches how life adapts to these extremes and challenges students to spot the camouflaged lizards she calls friends.",
        safety_notes: ["Be careful exploring lava tubes; bring a flashlight", "Sand and rocks can be extremely hot in the summer", "Watch for desert wildlife"]
      }
    ],
    activities: [
      {
        title: "Desert Sound Map",
        type: "Observation",
        prompt: "Sit quietly for two minutes with your eyes closed. What do you hear? A bird? The wind? A car? Draw a map of where the sounds are coming from around you.",
        materials_needed: ["Field journal", "Pencil"]
      },
      {
        title: "Water Conservation Challenge",
        type: "Storytelling",
        prompt: "For one day, keep a log of every time you use water. Could you have used less for any of those tasks? Why is saving water so important in Sera's home?",
        materials_needed: ["Field journal", "Pencil"]
      }
    ],
    relatedDestinationIds: ['kane-county', 'iron-county'],
    gps: "37.1088, -113.5833",
    what3words: "///scout.dune.bells"
  },
  {
    id: 'wayne-county',
    name: "Wayne County",
    guardian: {
      name: "Lars",
      animal_form: "Cougar cartographer",
      archetype: "Wise Navigator",
      teaching_moment: "Teaches how to read the maps written on the land and navigate through complex, beautiful, and wild terrain.",
      signature_line: "Every cliff and canyon is a line on the map.",
      voice: {
        tone: "confident_and_knowing_pathfinder",
        vocabulary: "topographical_and_directional",
        signature_phrase: "Every cliff and canyon is a line on the map",
        teaching_style: "map-reading_and_spatial_awareness"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Wayne County in south-central Utah, identifying its border with the Green River.",
          "Recognize Capitol Reef National Park as its most famous landmark.",
          "Discuss its status as the fourth-least populous county with 96.4% public land.",
          "Identify Loa as the county seat."
        ],
        History: [
          "Learn that the Fremont Culture was first identified in Wayne County.",
          "Explain why the county was one of the last areas to be permanently settled, due to its remote and rugged terrain.",
          "Discuss the county's historical ties to outlaws like Butch Cassidy and the Wild Bunch."
        ],
        Economics: [
          "Analyze the traditional economy based on livestock and agriculture.",
          "Discuss the economic challenges of a small population, including high unemployment and poverty rates.",
          "Explore the importance of tourism related to the national park."
        ],
        Civics: [
          "Understand the historical and ongoing challenges of funding basic services like roads and schools.",
          "Identify the Wayne School District and Wayne County Water Conservancy District.",
          "Note the county's high educational attainment rate despite its rural challenges."
        ]
      },
      science_seed: {
        "Earth Science": [
          "Learn about the unique geology of the Waterpocket Fold, a 100-mile long wrinkle in the earth's crust.",
          "Explore the orchards of Fruita and how they thrive in a desert environment."
        ],
        "Astronomy": [
          "Discuss why remote areas like Capitol Reef are ideal for viewing the night sky."
        ]
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Wayne County is a land of dramatic folds and reefs in the earth's crust, a maze of canyons and cliffs. The master of this complex terrain is Lars, the Cougar Cartographer. Silent and powerful, he carries a glowing map of the land in his mind, knowing every secret pass and hidden spring.",
      "Lars is a wise navigator. He teaches students to see the landscape itself as a map. The Waterpocket Fold is a giant wrinkle, the Fremont River is a lifeline, and the stars are a celestial chart. He shows you how to find your way not just through the wilderness, but through any complex problem."
    ],
    field_trip_stops: [
      {
        name: "Capitol Reef National Park (Fruita Historic District)",
        gps: "38.2869, -111.2483",
        duration: "2 hours",
        educational_focus: "Pioneer history, fruit orchards, and the Fremont River.",
        guardian_connection: "Lars observes from the cliffs above Fruita, explaining how the pioneers were smart navigators. They found this green oasis along the river—a key point on the map of survival—and created a home.",
        safety_notes: ["Do not climb fruit trees", "Pay for any fruit you pick (during harvest season)", "Watch for deer in the orchards"]
      },
      {
        name: "Petroglyph Panel (along Scenic Drive, Capitol Reef)",
        gps: "38.2933, -111.2464",
        duration: "30 minutes",
        educational_focus: "Fremont culture rock art.",
        guardian_connection: "Lars sees these petroglyphs as the first maps of the area. He explains how the Fremont people carved maps of their hunts, their beliefs, and their world onto the rock, leaving a guide for future travelers.",
        safety_notes: ["Stay on the boardwalk", "Do not touch the petroglyphs", "Use binoculars for a better view"]
      }
    ],
    activities: [
      {
        title: "Make a 3D Map",
        type: "Hands-On",
        prompt: "Using modeling clay, create a small, 3D map of a familiar area, like your school's playground. Include hills, flat areas, and important features like the slide or swings.",
        materials_needed: ["Modeling clay"]
      },
      {
        title: "Navigate by the Sun",
        type: "Observation",
        prompt: "In the morning, find where the sun is. That's east. In the afternoon, find it again. That's west. Can you figure out which way is north and south? Lars knows this without even thinking.",
        materials_needed: ["The sun"]
      }
    ],
    relatedDestinationIds: ['piute-county', 'sevier-county', 'emery-county', 'garfield-county', 'san-juan-county'],
    gps: "38.2869, -111.2483",
    what3words: "///navigator.glowing.path"
  },
  {
    id: 'weber-county',
    name: "Weber County",
    guardian: {
      name: "Otis",
      animal_form: "Badger conductor",
      archetype: "Law/Order Mentor",
      teaching_moment: "Teaches that systems, from railroads to rivers to communities, need structure and order to function well.",
      signature_line: "Keep to the rhythm of the timetable.",
      voice: {
        tone: "gruff_but_fair_organizer",
        vocabulary: "systematic_and_foundational",
        signature_phrase: "Keep to the rhythm of the timetable",
        teaching_style: "structured_learning_and_understanding_systems"
      }
    },
    learning_objectives: {
      social_studies: {
        Geography: [
          "Locate Weber County in Northern Utah, identifying it as part of the populous Wasatch Front.",
          "Identify Ogden as the county's economic and cultural hub.",
          "Discuss the importance of the Ogden and Weber rivers to the region."
        ],
        History: [
          "Explain why Ogden became a major railroad hub at Union Station.",
          "Investigate the history of commerce on Ogden's Historic 25th Street.",
          "Learn about the role of the defense industry in the county's development."
        ],
        Economics: [
          "Analyze the county's diverse economy, including manufacturing, aerospace (Hill AFB nearby), and outdoor recreation."
        ],
        Civics: [
          "Identify the two school districts serving the county: Weber and Ogden City.",
          "Understand how a complex system of taxes funds the county, cities, and special districts for water, sewer, fire, and emergency dispatch.",
          "Discuss water management through the Weber Basin Water Conservancy District as an example of human modification of the environment."
        ]
      },
      science_seed: {
        Science: ["River restoration", "Urban planning", "Physics of trains"],
      },
      ela: {},
      mathematics: {},
      health_education: {},
      fine_arts: {},
    },
    story: [
      "Weber County, with its bustling railroad hub and the orderly flow of the Ogden River, is a place of systems and connections. The conductor of this complex orchestra is Otis, the Badger. A bit gruff but always fair, he ensures everything runs on time, from the trains to the seasons.",
      "Otis is a Law and Order Mentor. With his eternal lantern, he inspects the tunnels and foundations of the city, making sure the systems are strong. He teaches that rules and structure, like railroad tracks, provide the path for powerful things to happen safely and efficiently."
    ],
    field_trip_stops: [
      {
        name: "Ogden Union Station",
        gps: "41.2200, -111.9790",
        duration: "2 hours",
        educational_focus: "Railroad history, transportation systems, and local museums.",
        guardian_connection: "Otis feels most at home here, in the heart of the system. He explains how the station was a critical junction that connected the entire country, a lesson in how one well-ordered place can have a huge impact.",
        safety_notes: ["Be careful around historic train cars", "The station houses multiple museums; plan your time", "Stay with your group"]
      },
      {
        name: "Ogden River Parkway",
        gps: "41.2394, -111.9483",
        duration: "1.5 hours",
        educational_focus: "Urban river ecosystems, water management, and recreation.",
        guardian_connection: "Otis walks the parkway, pointing out how the community brought order to a once-neglected river. By building clear paths and restoring the banks, they created a healthy, beautiful system for everyone to enjoy.",
        safety_notes: ["Stay on the paved path", "Be aware of cyclists and other users", "Do not go in the river without adult supervision"]
      }
    ],
    activities: [
      {
        title: "Build a System",
        type: "Hands-On",
        prompt: "Set up a line of dominoes. The first domino falling is the cause; the rest falling is the effect. How does one small action create a chain reaction in a system?",
        materials_needed: ["Dominoes or books"]
      },
      {
        title: "Community Rules",
        type: "Storytelling",
        prompt: "What is one important rule at your school? Why does that rule exist? How does it help the school 'system' run smoothly, just like Otis's railroad?",
        materials_needed: ["Imagination"]
      }
    ],
    relatedDestinationIds: ['box-elder-county', 'cache-county', 'rich-county', 'morgan-county', 'davis-county'],
    gps: "41.2230, -111.9738",
    what3words: "///conductor.lantern.order"
  }
];