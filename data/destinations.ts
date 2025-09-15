import { Destination, Category, DangerLevel } from '../types';

export const destinations: Destination[] = [
  {
    id: 'skinwalker-ranch',
    name: "Skinwalker Ranch",
    subtitle: "Where Reality Breaks Down",
    category: Category.UTAH,
    location: "Ballard, Utah (Uintah Basin)",
    driveTime: "3 hours from SLC",
    visitDuration: "2-4 hours (perimeter only)",
    cost: "Free (public roads only)",
    groupSize: "2-4 people minimum",
    bestTime: "Dusk to dawn",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "ACTIVE PARANORMAL ZONE",
    gps: "40.2583, -109.8849",
    what3words: "///rocks.cutters.natural",
    story: [
      "This 512-acre ranch is ground zero for the paranormal in America. Since the 1600s, the Ute tribe warned of shapeshifting witches dwelling in this valley. They called them 'skinwalkers' - beings that could take the form of any animal or person. The land was considered so cursed that tribal members refused to hunt here, even during harsh winters.",
      "In 1994, the Sherman family bought the ranch and immediately encountered phenomena that defied explanation. What started as a dream ranch became their worst nightmare within weeks."
    ],
    evidence: {
        title: "The Evidence",
        points: [
            "The Bulletproof Wolf: A massive wolf, larger than a horse, attacked their cattle. Terry Sherman shot it multiple times with a .357 Magnum. The bullets had no effect.",
            "Impossible Orbs: Glowing spheres of light would emerge from the ground, fly through the air, and disappear into solid rock faces.",
            "Surgical Mutilations: Cattle found with organs removed using surgical precision. No blood, no tracks, no explanation.",
            "The Teleporting Bull: A 400-pound bull vanished from a field and reappeared inside a locked metal trailer.",
            "Interdimensional Portals: Witnesses reported seeing 'holes' open in mid-air, revealing glimpses of other landscapes.",
            "Radiation Burns: Investigators develop radiation-like burns despite no detectable radioactive source."
        ]
    },
    hook: "Billionaire Brandon Fugal purchased the ranch, assembling a team of PhD scientists to study the phenomena. Their findings are even more disturbing than the folklore. In 2023, his team recorded a UAP traveling at 46,000 mph.",
    media: [
      { youtubeId: "gFz058BJ2wE", title: "Skinwalker Ranch: The Most Haunted Place on Earth" },
      { youtubeId: "VlrUKF4095Q", title: "History Channel: Secret of Skinwalker Ranch" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "NEVER attempt to enter ranch property - Trespassing will result in immediate arrest.",
        "Stay on public roads at ALL times.",
        "Bring multiple recording devices - One will always malfunction mysteriously.",
        "If electronics start glitching, leave immediately.",
        "Travel in groups of 2+ minimum. Never investigate alone."
      ]
    },
    olympianInsight: {
      character: "Dreamwalker Elkshade (Uintah Guardian)",
      quote: "This land dreams deeper than most. What you call 'phenomena' are just the echoes of its restless sleep. Tread lightly, lest you become part of the dream yourself.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "Multiple Recording Devices", reason: "Expect one to fail completely" },
      { name: "Analog Compass", reason: "GPS devices frequently malfunction" },
      { name: "Geiger Counter", reason: "Unexplained radiation spikes documented" },
      { name: "Extra Batteries", reason: "Electronics drain power at accelerated rates" },
      { name: "Satellite Communicator", reason: "Cell service unreliable, emergency beacon essential" }
    ],
    gettingThere: {
        from: "Salt Lake City International",
        steps: [
            "Take I-80 East to US-40 East toward Vernal.",
            "Continue on US-191 North from Vernal.",
            "Turn west onto the dirt road known locally as 'Skinwalker Ranch Road'.",
            "Ranch perimeter is visible from the public road - DO NOT ENTER."
        ]
    },
    parking: "Limited roadside parking. Respect private property boundaries. No facilities available.",
    permits: "None for public road viewing. Ranch property is STRICTLY off-limits.",
    whenToVisit: {
        bestTime: "Sunset to sunrise - most phenomena reported during darkness.",
        seasonality: "Year-round, but winter can bring severe weather.",
        peakActivity: "New moon phases, 2-4 AM window shows highest activity."
    },
    whatToExpect: {
        phenomena: ["Unexplained lights moving in impossible patterns.", "Electronic equipment malfunctioning.", "Feeling of being watched."],
        encounters: ["Research team recorded 1.6 GHz signal emanating from underground (Mar 2023).", "Drone captured footage of object moving at impossible speeds (Aug 2023)."]
    },
    relatedDestinationIds: ['blind-frog-ranch', 'dugway-proving-ground', 'san-luis-valley', 'area-51-perimeter'],
    buddyLinks: [
      {
        category: "Essential Gear",
        text: "A reliable EMF meter to detect strange energy spikes.",
        url: "https://www.amazon.com/s?k=emf+meter"
      },
      {
        category: "Provisions & Lodging",
        text: "Find a place to stay in nearby Vernal, Utah.",
        url: "https://www.booking.com/city/us/vernal.html"
      },
      {
        category: "Further Research",
        text: "Read 'Hunt for the Skinwalker' by Colm Kelleher & George Knapp.",
        url: "https://www.amazon.com/Hunt-Skinwalker-Science-Confronts-Unexplained/dp/1416505210"
      }
    ],
    tags: ["Portal Locations (Alleged)", "Underground Base Network"]
  },
  {
    id: 'denver-airport',
    name: "Denver International Airport",
    subtitle: "The Illuminati's Western Headquarters",
    category: Category.COLORADO,
    location: "Denver, Colorado",
    driveTime: "7 hours from SLC",
    visitDuration: "3-6 hours",
    cost: "Free (public areas)",
    groupSize: "2-3 people",
    bestTime: "Daylight hours",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "HEAVY SURVEILLANCE ZONE",
    gps: "39.8561, -104.6737",
    what3words: "///friend.exotic.stress",
    story: [
        "Denver International Airport opened in 1995, 16 months late and $2 billion over budget. Officially, it replaced the perfectly functional Stapleton Airport.",
        "Unofficially, it may be the most conspiracy-laden location in North America, sitting on 53 square miles. Construction workers tell stories of vast underground complexes and mysterious tunnels that required the highest security clearances."
    ],
    evidence: {
        title: "The Evidence",
        points: [
            "The Apocalyptic Murals: Art depicting children in coffins, Nazi soldiers, and peace achieved through world destruction.",
            "Masonic Capstone: Dedication stone mentions 'New World Airport Commission' - an organization that doesn't exist.",
            "Swastika Runways: Aerial view shows runways form a Nazi symbol.",
            "Blucifer: A 32-foot demonic horse statue that killed its creator during construction.",
            "Gargoyles: Medieval demon statues inexplicably placed in the luggage claim.",
            "Underground Tunnels: An automated train system allegedly connecting to a massive underground bunker network."
        ]
    },
    hook: "The airport itself now embraces the conspiracy theories, adding exhibits about them. Why draw attention unless they're hiding something bigger? In 2023, construction workers reported finding additional sealed tunnels during renovation work. Photos were confiscated, workers signed new NDAs.",
    media: [
      { youtubeId: "U_J_A_KDE-0", title: "Denver Airport Conspiracy Theories" },
      { youtubeId: "JcO--_wB5VE", title: "The Dark Secrets of DIA" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "Photography is restricted near security checkpoints.",
        "Don't loiter excessively; airport security will question prolonged stays.",
        "Stick to public art and areas.",
        "Watch for unmarked personnel; not all security wears uniforms."
      ]
    },
    olympianInsight: {
      character: "A Colorado Counterpart",
      quote: "Great works require great deception. What appears as a mere transportation hub may serve purposes beyond the movement of travelers. The symbols are hidden in plain sight.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Discreet Camera", reason: "Phone photography only, professional equipment draws attention" },
        { name: "Terminal Map", reason: "Know locations of controversial art before visiting" },
        { name: "Comfortable Shoes", reason: "Lots of walking through massive terminals" },
        { name: "Research Notes", reason: "Pre-loaded info about what to look for" }
    ],
    relatedDestinationIds: ['skinwalker-ranch', 'st-elmo-ghost-town', 'san-luis-valley', 'dugway-proving-ground'],
    tags: ["Underground Base Network"]
  },
  {
    id: 'berkeley-pit',
    name: "The Berkeley Pit",
    subtitle: "America's Most Toxic Lake",
    category: Category.MONTANA,
    location: "Butte, Montana",
    driveTime: "6 hours from SLC",
    visitDuration: "1-2 hours (viewing only)",
    cost: "$2 viewing platform fee",
    groupSize: "Any size",
    bestTime: "Daylight hours only",
    dangerLevel: DangerLevel.LETHAL,
    dangerDescription: "TOXIC SUPERFUND SITE",
    gps: "46.0038, -112.5006",
    what3words: "///stage.diving.cuts",
    story: [
        "The Berkeley Pit is what happens when humans play god with the earth and lose. From 1955 to 1982, this was an open-pit copper mine. When it closed, they shut off the pumps.",
        "What filled the mile-wide crater wasn't water - it was liquid death. A toxic soup so corrosive it dissolves metal, so acidic it burns through organic matter, so poisonous it kills everything that touches it."
    ],
    evidence: {
        title: "Evidence of Toxicity",
        points: [
            "pH Level 2.5: More acidic than lemon juice, approaching battery acid levels.",
            "342 Snow Geese Died (1995): An entire flock landed on the water and died within hours, their bodies dissolving.",
            "21 Heavy Metals: Arsenic, cadmium, zinc, and copper at lethal concentrations.",
            "40 Billion Gallons: Enough poison to contaminate entire regional water supplies.",
            "Rising Water Level: A ticking time bomb, it increases 6 inches per year, approaching a critical contamination level."
        ]
    },
    hook: "This isn't just an environmental disaster - it's a glimpse into humanity's capacity for creating hell on earth. NASA studies it as an analogue for toxic alien environments. The question is not if, but when it will contaminate the regional aquifer.",
    media: [
      { youtubeId: "jJqG3y4-q-Y", title: "The Terrifying Truth Of The Berkeley Pit" },
      { youtubeId: "yJ-iR5FSC6A", title: "Butte's Toxic Pit" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "NEVER touch the water. Even droplets cause chemical burns.",
        "Stay on designated platforms. The ground around the pit may be unstable.",
        "Don't breathe deeply near the water, especially on windy days.",
        "Contact with the water is lethal. No exceptions."
      ]
    },
    olympianInsight: {
      character: "A Montana Counterpart",
      quote: "Behold what becomes of waters when we forget they are sacred. This pit is a wound upon the earth that will not heal for a thousand generations. The waters here cry out in anguish.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Face Mask", reason: "Protect against toxic vapors and wind-blown particles" },
        { name: "Camera with Zoom", reason: "Get close-up shots from a safe distance" },
        { name: "Windbreaker", reason: "Montana weather changes rapidly" },
        { name: "Closed-Toe Shoes", reason: "Protect feet from potentially contaminated ground" }
    ],
    relatedDestinationIds: ['st-elmo-ghost-town', 'nutty-putty-cave', 'devils-gate'],
    buddyLinks: [
      {
        category: "Essential Gear",
        text: "A good N95 or P100 mask for peace of mind.",
        url: "https://www.amazon.com/s?k=n95+mask"
      },
      {
        category: "Lodging",
        text: "Find hotels in historic Butte, Montana.",
        url: "https://www.booking.com/city/us/butte.html"
      }
    ]
  },
  {
    id: 'area-51-perimeter',
    name: "Area 51 Perimeter",
    subtitle: "The Base That Doesn't Exist",
    category: Category.NEVADA,
    location: "Rachel, Nevada",
    driveTime: "5 hours from SLC",
    visitDuration: "3-5 hours",
    cost: "Free (public land)",
    groupSize: "2+ people",
    bestTime: "3 AM on Wednesdays",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "FEDERAL RESTRICTED ZONE - LETHAL FORCE AUTHORIZED",
    gps: "37.6450, -115.8111",
    what3words: "///unrated.wiggling.repaying",
    story: [
        "The most famous secret base in the world. Officially a remote detachment of Edwards Air Force Base, it's the subject of intense speculation regarding UFOs and extraterrestrial technology.",
        "Whistleblower Bob Lazar claimed he worked at 'Sector 4' near Papoose Lake, reverse-engineering alien spacecraft. His claims put this desolate piece of desert on the global map."
    ],
    evidence: {
        title: "What Happens Here",
        points: [
            "Bob Lazar's Sector 4: Nine alleged alien craft in underground hangars.",
            "Wednesday 3 AM Lights: UFO watchers report lights performing impossible maneuvers over Tikaboo Peak every week without fail.",
            "'Janet Airlines': A fleet of unmarked 737s flies workers from Las Vegas to the base daily. The workers cannot say where they work.",
            "The 'Cammo Dudes': Infamous unmarked white SUVs patrol the perimeter, detaining anyone who gets too close.",
            "The Death Line: Crossing the marked border is a federal crime punishable by 6 months prison, a $5,000 fine, and authorized lethal force."
        ]
    },
    hook: "Locals in Rachel, the closest town, see lights performing impossible maneuvers nightly. The Little A'Le'Inn keeps a log of sightings dating back to 1989. The truth is out there, but get too close and you'll find out how serious the government is about keeping it secret.",
    media: [
      { youtubeId: "aF2krX-R8jA", title: "Driving the Extraterrestrial Highway" },
      { youtubeId: "VbYa9dG00s0", title: "Confronted by Area 51 Guards" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "DO NOT cross the boundary. The signs are not a joke. They are watching you.",
        "No drones. They will be shot down or electronically captured.",
        "Expect to be surveilled from the moment you get near the base.",
        "Bring extra fuel, water, and a spare tire. There are no services for over 100 miles."
      ]
    },
    olympianInsight: {
      character: "A Nevada Counterpart",
      quote: "Some secrets are kept not from the people, but for them. What is learned from the stars may not be ready for the world. The guardians of this place do not serve a country, but a timeline.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "High-Zoom Camera/Binoculars", reason: "View the base from a safe distance on Tikaboo Peak" },
        { name: "Night Vision Goggles", reason: "For observing nocturnal light phenomena" },
        { name: "Satellite Phone", reason: "Zero cell service in this area" },
        { name: "Full-size Spare Tire", reason: "Roads are rough and unpaved" }
    ],
    relatedDestinationIds: ['skinwalker-ranch', 'dugway-proving-ground', 'san-luis-valley', 'rhyolite-ghost-town'],
    buddyLinks: [
      {
        category: "Essential Gear",
        text: "A powerful spotting scope for legal, long-distance viewing.",
        url: "https://www.amazon.com/s?k=spotting+scope"
      },
      {
        category: "Essential Gear",
        text: "A satellite messenger for this no-service zone.",
        url: "https://www.amazon.com/s?k=satellite+messenger"
      },
      {
        category: "Provisions & Lodging",
        text: "Stay at the world-famous Little A'Le'Inn in Rachel.",
        url: "https://www.littlealeinn.com/"
      }
    ],
    tags: ["Underground Base Network"]
  },
  {
    id: 'nutty-putty-cave',
    name: "Nutty Putty Cave",
    subtitle: "The Sealed Tomb",
    category: Category.UTAH,
    location: "Utah County, near Eureka",
    driveTime: "1.5 hours from SLC",
    visitDuration: "30-60 mins (memorial)",
    cost: "Free",
    groupSize: "Any size",
    bestTime: "Daylight hours",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "PSYCHOLOGICAL DISTRESS SITE",
    gps: "39.9725, -112.0303",
    what3words: "///sealing.whispers.forever",
    story: [
      "In 2009, this popular cave became the site of one of Utah's most infamous tragedies. John Edward Jones, a 26-year-old medical student, became wedged upside down in a narrow passage known as 'The Birth Canal'.",
      "For 27 agonizing hours, a massive rescue team of over 100 people tried desperately to free him. They failed. Unable to recover his body, authorities made the heartbreaking decision to seal the cave forever, turning it into his final resting place."
    ],
    evidence: {
        title: "The Haunting Legacy",
        points: [
          "A Permanent Tomb: The cave was sealed with concrete with John's body still inside, making it a unique and tragic memorial.",
          "Screams from the Earth: Locals and paranormal investigators report hearing faint screams and cries for help emanating from the sealed entrance on quiet nights.",
          "Unexplained Lights: Photographs taken of the concrete seal sometimes show inexplicable orbs and light anomalies.",
          "Emotional Vortex: Visitors to the memorial plaque report overwhelming feelings of sadness, claustrophobia, and despair, even without knowing the full story."
        ]
    },
    hook: "The story of Nutty Putty Cave is a stark reminder of nature's unforgiving power. But the lingering question is whether John's spirit remains, trapped alongside his body, forever calling out from the darkness.",
    media: [
      { youtubeId: "WaioL3UP1yE", title: "The Full Story of John Jones" },
      { youtubeId: "VN_J8o5iTNc", title: "Nutty Putty Cave Rescue Documentary" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "The cave itself is permanently sealed and illegal to enter.",
        "Be respectful of the memorial plaque and the gravity of the site.",
        "The area is remote; travel with a reliable vehicle and tell someone your plans.",
        "This site can be emotionally overwhelming. Be prepared for a somber experience."
      ]
    },
    olympianInsight: {
      character: "Sylvia the Scholar of Timp (Utah County Guardian)",
      quote: "The earth sometimes claims its own. This place is a reminder that knowledge has limits, and not all passages can be navigated. It's a wound in the stone that teaches a hard lesson.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "EVP Recorder", reason: "To potentially capture the reported screams" },
      { name: "Sturdy Footwear", reason: "The memorial is in a rugged, remote area" },
      { name: "Water and Snacks", reason: "No services are available nearby" }
    ],
    relatedDestinationIds: ['thistle-ghost-town', 'lilly-grays-grave', 'berkeley-pit', 'topaz-mountain']
  },
  {
    id: 'thistle-ghost-town',
    name: "Thistle Ghost Town",
    subtitle: "The Instant Apocalypse",
    category: Category.UTAH,
    location: "Spanish Fork Canyon, Utah",
    driveTime: "1.5 hours from SLC",
    visitDuration: "1-2 hours",
    cost: "Free (view from road)",
    groupSize: "Any size",
    bestTime: "Spring/Fall",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "UNSTABLE RUINS & TOXIC WATER",
    gps: "39.9922, -111.4927",
    what3words: "///flooded.memories.vanished",
    story: [
      "In April 1983, the town of Thistle, Utah, vanished in a matter of days. A massive landslide, one of the costliest in U.S. history, created a natural dam on the Spanish Fork River.",
      "The water backed up with terrifying speed. Residents fled with only what they could carry, leaving homes, businesses, and a century of history to be swallowed by the rising lake. Dinner was left on tables, lives abandoned in an instant."
    ],
    evidence: {
        title: "The Lingering Mystery",
        points: [
          "The Submerged Town: The tops of houses and a church steeple still emerge from the murky water, a ghostly reminder of the town that was.",
          "Lights in the Deep: At night, witnesses report seeing strange lights appearing within the flooded, abandoned buildings, with no possible source of electricity.",
          "Sudden Evacuation: The speed of the flood meant everything was left behind, creating a perfectly preserved, albeit underwater, time capsule of 1983.",
          "Unexplained Temperature Shifts: The water temperature of the lake has been known to vary by as much as 40 degrees in different spots for no scientific reason."
        ]
    },
    hook: "Thistle is not just a ghost town; it's an underwater graveyard of a community's life. The question remains: what is causing the lights that dance in the windows of the submerged houses long after the power went out forever?",
    media: [
      { youtubeId: "u-p4so3ET-I", title: "The Thistle Landslide Disaster" },
      { youtubeId: "iGqjI1r_wGo", title: "Exploring the Remains of Thistle" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "Do not attempt to enter the water; it is stagnant and potentially toxic.",
        "The remaining structures are unstable and dangerous. Do not attempt to enter them.",
        "Viewing is best done from the designated pull-offs along Highway 6/89.",
        "Be aware of traffic, as the viewing area is right next to a busy highway."
      ]
    },
    olympianInsight: {
      character: "Sylvia the Scholar of Timp (Utah County Guardian)",
      quote: "This valley is a lesson written in water and stone. It teaches that even the most permanent-seeming things can be swept away. The past is never as far beneath the surface as you think.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "Binoculars", reason: "To get a closer look at the submerged structures" },
      { name: "Camera with Zoom Lens", reason: "For capturing detailed photos from a distance" },
      { name: "Drone (check local laws)", reason: "For a unique aerial perspective of the ruins" }
    ],
    relatedDestinationIds: ['nutty-putty-cave', 'skinwalker-ranch', 'lilly-grays-grave', 'utah-lake-water-babies']
  },
  {
    id: 'lilly-grays-grave',
    name: "Lilly Gray's Grave",
    subtitle: "Victim of the Beast 666",
    category: Category.UTAH,
    location: "Salt Lake City Cemetery",
    driveTime: "20 minutes from SLC",
    visitDuration: "30 minutes",
    cost: "Free",
    groupSize: "1-3 people",
    bestTime: "Dusk",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "OCCULT SIGNIFICANCE & EMF SPIKES",
    gps: "40.7745, -111.8596",
    what3words: "///beast.victim.stone",
    story: [
      "In a quiet corner of the sprawling Salt Lake City Cemetery lies a headstone that has puzzled and disturbed visitors for decades. It belongs to Lilly E. Gray, who died in 1958.",
      "While her death was officially from natural causes, her paranoid and eccentric husband, Elmer Gray, had a chilling inscription carved into her stone: 'Victim of the Beast 666'. The meaning behind this cryptic accusation has been lost to time, but the grave itself seems to have absorbed the dark energy."
    ],
    evidence: {
        title: "The Curse of the Grave",
        points: [
          "The Inscription: A clear, undeniable link to occult prophecy carved in stone.",
          "Electronic Interference: Visitors report their fully charged phones dying instantly and car engines refusing to start upon trying to leave.",
          "The Figure in Black: A shadowy figure is often seen standing over the grave, only to vanish when approached.",
          "EMF Spikes: Paranormal investigators record significant, unexplained electromagnetic field spikes directly over the headstone.",
          "Feelings of Dread: Many people report an immediate and overwhelming sense of being watched and unwelcomed."
        ]
    },
    hook: "Was Lilly Gray truly a 'Victim of the Beast,' or was it the delusion of a grieving husband? The strange phenomena surrounding her final resting place suggest that whatever Elmer Gray believed, something dark has taken root in this small plot of land.",
    media: [
      { youtubeId: "c_p2rRxT_gI", title: "Utah's Most Mysterious Headstone" },
      { youtubeId: "dZ9zZ3ZQ4Zc", title: "Ghost Hunt at Lilly Gray's Grave" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "This is an active cemetery. Be respectful of other graves and any mourners present.",
        "Adhere to the cemetery's posted hours (typically closes at dusk).",
        "Don't touch or attempt to take rubbings of the headstone.",
        "If your equipment fails, it might be a sign to leave."
      ]
    },
    olympianInsight: {
      character: "Jorah of the Two Currents (Salt Lake Guardian)",
      quote: "Words have power, especially those carved in stone and watered with grief. A curse, once spoken, can echo through time, tethering a soul to a place of rest.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "EMF Meter", reason: "To detect the reported electromagnetic spikes" },
      { name: "Audio Recorder", reason: "To capture potential electronic voice phenomena (EVPs)" },
      { name: "Extra Batteries", reason: "To counteract the reported electronic draining effect" }
    ],
    relatedDestinationIds: ['nutty-putty-cave', 'thistle-ghost-town', 'skinwalker-ranch']
  },
  {
    id: 'bear-lake-monster',
    name: "Bear Lake Monster",
    subtitle: "The Serpent of the Saints",
    category: Category.CRYPTID,
    location: "Bear Lake, Utah/Idaho",
    driveTime: "2.5 hours from SLC",
    visitDuration: "Half to full day",
    cost: "State Park entry fees",
    groupSize: "Any size",
    bestTime: "Summer dawn/dusk",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "UNCONFIRMED CRYPTID & DEEP WATER",
    gps: "41.9724, -111.3360",
    what3words: "///serpent.depths.legend",
    story: [
      "The stunning turquoise waters of Bear Lake hide a centuries-old secret. Long before Mormon pioneers settled the area, local Native American tribes spoke of a massive, serpent-like creature inhabiting the lake's depths.",
      "In the 1860s, pioneer Joseph C. Rich began documenting numerous sightings from settlers, describing a creature up to 90 feet long with a crocodile-like head that could move 'faster than a locomotive'. The legend became so widespread that even Brigham Young sent a team to try and capture the beast."
    ],
    evidence: {
        title: "A History of Sightings",
        points: [
          "Ancient Legends: Ute and Shoshone tribes have stories of the monster dragging swimmers to their deaths, predating white settlement by centuries.",
          "Joseph Rich Account (1868): Documented dozens of credible sightings from early pioneers, launching the legend into the mainstream.",
          "Preston Pond Sighting (1946): A Boy Scout leader gave a detailed account of seeing a massive creature with a 'head like a walrus but with a cow-like muzzle'.",
          "The BYU Expedition (1980): Brigham Young University sent a 300-foot rope with a barbed hook and massive bait to capture it. The bait was stripped clean from the hook.",
          "Modern Sightings (2002): Boater Brian Hirschi reported seeing a huge, dark shape rise from the water near his boat before sinking back into the depths."
        ]
    },
    hook: "Unlike other cryptids with sparse evidence, the Bear Lake Monster has a continuous, 150-year-long chain of documented sightings. Reports of multiple creatures seen at once suggest a breeding population. Is there an ancient, undiscovered species living in the 208-foot deep, ice-age remnant lake?",
    media: [
      { youtubeId: "84mff_vXruw", title: "The Legend of the Bear Lake Monster" },
      { youtubeId: "9oG1dC6y-e8", title: "Is the Bear Lake Monster Real?" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "Bear Lake is extremely deep and the water is frigid even in summer. Always wear a life vest on the water.",
        "Weather can change in an instant, creating dangerous conditions for boaters.",
        "The real danger is hypothermia, not necessarily the monster.",
        "Keep a safe distance from the shore if you are not a strong swimmer."
      ]
    },
    olympianInsight: {
      character: "Rich the Cryptid Poet (Rich County Guardian)",
      quote: "The world has forgotten its first children. In the deep, cold places untouched by time, some of us still remain. The waters remember what the land has forgotten. Listen, and you can hear them sing.",
      characterImage: './assets/water-monster.png',
    },
    equipment: [
      { name: "Binoculars / Spotting Scope", reason: "To scan the vast surface of the lake from shore" },
      { name: "Sonar / Fish Finder", reason: "For boaters to search for anomalous readings in the depths" },
      { name: "High-Quality Camera", reason: "To be ready to capture definitive evidence" }
    ],
    relatedDestinationIds: ['utah-lake-water-babies', 'wasatch-wildman', 'skinwalker-ranch']
  },
  {
    id: 'st-elmo-ghost-town',
    name: "St. Elmo Ghost Town",
    subtitle: "Frozen at 10,148 Feet",
    category: Category.COLORADO,
    location: "Chaffee County, Colorado",
    driveTime: "7 hours from SLC",
    visitDuration: "2-4 hours",
    cost: "Free (donations accepted)",
    groupSize: "Any size",
    bestTime: "Summer/Fall",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "ACTIVE POLTERGEIST & EXTREME ELEVATION",
    gps: "38.7022, -106.3453",
    what3words: "///guards.store.spirit",
    story: [
      "Nestled high in the Sawatch Range of the Colorado Rockies, St. Elmo is one of the best-preserved ghost towns in the American West. Founded in 1880 during a gold and silver rush, the town thrived for decades before the mines ran dry.",
      "While most residents left, one did not. Annabelle Stark, known as 'Dirty Annie', was a lifelong resident who ran the general store with her brother. She is said to still guard the town, her spirit tethered to the place she called home until her death in 1960."
    ],
    evidence: {
        title: "The Ghost of Annabelle Stark",
        points: [
          "The General Store: The cash register has been heard ringing on its own, and objects fly off the shelves.",
          "Invisible Hands: Visitors who try to steal souvenirs or disrespect the buildings report being shoved by unseen forces.",
          "Window Apparition: Annabelle's figure, dressed in white, is frequently seen looking out the windows of the second-story of the general store, especially near closing time.",
          "Disembodied Voices: The sounds of conversations and arguments are heard coming from empty buildings."
        ]
    },
    hook: "Modern ghost hunters consistently rank St. Elmo in the top 5 most active paranormal sites in Colorado. The question isn't if you'll experience something, but what it will be.",
    media: [
      { youtubeId: "vBfV_i-sU5A", title: "Exploring St. Elmo, one of Colorado's best-preserved ghost towns" },
      { youtubeId: "J2_a_pI5-k8", title: "Ghost Hunting in St. Elmo" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "This is a preserved historical site. Do not take souvenirs or damage structures.",
        "The town is at high altitude (over 10,000 ft). Be aware of altitude sickness and stay hydrated.",
        "Weather changes rapidly in the mountains. Bring layers and be prepared for sudden storms.",
        "Respect private property. Some buildings are privately owned."
      ]
    },
    olympianInsight: {
      character: "A Colorado Counterpart",
      quote: "Some souls stand as eternal sentinels in the doorways between what was and what is. They are the guardians of memory, ensuring the past is never truly abandoned.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "Audio Recorder", reason: "For capturing EVPs and disembodied voices" },
      { name: "Full-Spectrum Camera", reason: "To potentially capture apparitions not visible to the naked eye" },
      { name: "Warm Layers", reason: "Temperatures can drop dramatically at high altitude" }
    ],
    relatedDestinationIds: ['denver-airport', 'san-luis-valley', 'berkeley-pit', 'animas-forks']
  },
  {
    id: 'san-luis-valley',
    name: "San Luis Valley",
    subtitle: "The FBI's X-File",
    category: Category.COLORADO,
    location: "Southern Colorado",
    driveTime: "8 hours from SLC",
    visitDuration: "1-2 days",
    cost: "Free (public lands)",
    groupSize: "2+ people",
    bestTime: "Late summer nights",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "ACTIVE UFO HOTSPOT & ANIMAL MUTILATION ZONE",
    gps: "37.7472, -105.8711",
    what3words: "///laser.precision.vanished",
    story: [
      "The vast, flat San Luis Valley is one of North America's most active UFO hotspots and the epicenter of the baffling cattle mutilation phenomenon. Since the 1960s, ranchers have discovered their livestock dead under bizarre circumstances.",
      "The animals are found with organs removed with surgical precision, completely drained of blood, with no tracks or evidence of predators anywhere nearby. The phenomenon became so prevalent that the FBI opened an official investigation, which remains unsolved to this day."
    ],
    evidence: {
        title: "A Pattern of High Strangeness",
        points: [
          "Surgical Precision: Organs, particularly reproductive and sensory organs, are removed with clean, cauterized cuts that ranchers say are beyond the capability of any known predator.",
          "No Blood: The animals are completely exsanguinated, yet there is no blood on the ground or the animal itself.",
          "Unexplained Lights: The mutilations are often preceded by sightings of strange, silent lights in the sky.",
          "Radiation Spikes: Elevated radiation levels are often found around the carcasses.",
          "Official Investigation: The FBI's involvement and inability to find a conventional explanation lends significant credibility to the phenomenon."
        ]
    },
    hook: "This isn't just folklore. Over 100 documented cases have been investigated by law enforcement, including the FBI. Ranchers now find horses dead inside locked stalls, turned completely inside out. Something is using this valley as a laboratory, and no one knows what it is or why.",
    media: [
      { youtubeId: "3u8Edkb3LdE", title: "Cattle Mutilations in the San Luis Valley" },
      { youtubeId: "cWqi-QdZgCE", title: "UFOs Over the San Luis Valley" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "This is remote ranching country. Respect private property and do not trespass.",
        "Cell service is non-existent in many parts of the valley. A satellite communicator is essential.",
        "Be prepared for encounters with ranchers who may be suspicious of outsiders.",
        "If you discover a mutilated animal, DO NOT TOUCH IT. Report it to the local sheriff's office immediately."
      ]
    },
    olympianInsight: {
      character: "A Colorado Counterpart",
      quote: "There are hunters whose domains are not the forests of Earth, but the voids between the stars. They do not hunt for sport or for sustenance, but for knowledge. Their arrows are beams of light, their blades are scalpels of fire.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "Night Vision / Thermal Optics", reason: "To observe nocturnal aerial phenomena" },
      { name: "Geiger Counter", reason: "To check for radiation around any unusual sites" },
      { name: "Starlight Camera", reason: "For capturing high-quality images of the night sky" }
    ],
    relatedDestinationIds: ['denver-airport', 'area-51-perimeter', 'skinwalker-ranch', 'chaco-canyon'],
    tags: ["Time Anomaly Zones"]
  },
  {
    id: 'devils-gate',
    name: "Devil's Gate",
    subtitle: "The Portal to Hell",
    category: Category.WYOMING,
    location: "Near Independence Rock, WY",
    driveTime: "4.5 hours from SLC",
    visitDuration: "1-2 hours",
    cost: "Free",
    groupSize: "2+ people",
    bestTime: "Daylight hours",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "GEOMAGNETIC ANOMALY & HISTORICAL DANGER ZONE",
    gps: "42.4552, -107.2459",
    what3words: "///gateway.screams.chasm",
    story: [
      "Devil's Gate is a natural rock formation, a deep chasm carved by the Sweetwater River. But for centuries, it has held a much darker reputation. Native American tribes actively avoided it, believing it to be a literal gateway to the underworld where evil spirits could cross into our world.",
      "Pioneers on the Oregon Trail wrote of the 'unholy sounds' and feelings of dread they experienced when passing through the gorge. It became a place associated with bad omens, disappearances, and death."
    ],
    evidence: {
        title: "The Portal's Influence",
        points: [
          "Historical Disappearances: In the 1970s, several prospectors vanished without a trace near the gate, their equipment found abandoned.",
          "Auditory Phenomena: Visitors report hearing screams and whispers emerging from solid rock, even when there is no wind.",
          "Temperature Drops: The temperature inside the chasm has been measured to be up to 30 degrees colder than the surrounding area, with no scientific explanation.",
          "Animal Aversion: Animals, both wild and domestic, exhibit extreme fear and refuse to approach the entrance to the gorge.",
          "Compass Malfunction: Compasses are known to spin wildly near the center of the formation, indicating a significant magnetic anomaly."
        ]
    },
    hook: "Is Devil's Gate just a geological oddity with a spooky name, or is it something more? The persistent legends, combined with documented disappearances and measurable physical anomalies, suggest that the ancient tribes may have been right all along.",
    media: [
      { youtubeId: "dQw4w9WgXcQ", title: "The Legends of Devil's Gate, Wyoming" },
      { youtubeId: "oHg5SJYRHA0", title: "Investigating the Devil's Gate Anomaly" }
    ],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: [
        "This is a remote location. Bring extra water, food, and a first-aid kit.",
        "The terrain is rugged and steep. Wear appropriate hiking boots.",
        "Rattlesnakes are common in this area, especially in warmer months.",
        "Trust your gut. If you feel an overwhelming sense of dread, it's time to leave."
      ]
    },
    olympianInsight: {
      character: "A Wyoming Counterpart",
      quote: "Not all passages to the underworld are across water. Some are cracks in the world, places where the veil is thin. You can feel the cold breath of my realm on the wind here.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "Magnetometer / Compass", reason: "To document the magnetic anomalies" },
      { name: "Parabolic Microphone", reason: "To attempt to capture the anomalous sounds" },
      { name: "Digital Thermometer", reason: "To measure the unexplained temperature drops" }
    ],
    relatedDestinationIds: ['st-elmo-ghost-town', 'berkeley-pit', 'skinwalker-ranch']
  },
  {
    id: 'blind-frog-ranch',
    name: "Blind Frog Ranch",
    subtitle: "The Cursed Gold Mine",
    category: Category.UTAH,
    location: "Vernal Area, Utah",
    driveTime: "3.5 hours from SLC",
    visitDuration: "1-2 hours (perimeter)",
    cost: "Free (private property)",
    groupSize: "2+ people",
    bestTime: "Dusk",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "GEOMAGNETIC ANOMALIES & CURSE",
    gps: "40.2650, -109.9150",
    what3words: "///outlooks.remodels.bumping",
    story: [
        "Just a stone's throw from its infamous neighbor, Skinwalker Ranch, lies another property steeped in high strangeness. Blind Frog Ranch sits atop what locals claim is a network of ancient, flooded Aztec caves filled with gold.",
        "The problem? A curse seems to protect the treasure. Everyone who gets close to finding it meets a mysterious, often violent, end. The land itself seems hostile to human intrusion."
    ],
    evidence: {
        title: "Evidence of the Curse",
        points: [
            "Mysterious Deaths: At least 7 documented fatalities since the 1950s have been linked to treasure-hunting activities on the property.",
            "Strange Lights: Unexplained lights are seen emerging from the ground and water, suggesting an underground energy source.",
            "Compass Deviations: Compasses and GPS systems spin wildly, particularly over the cavern system, indicating a powerful magnetic anomaly.",
            "Unidentified Metals: A strange, metallic box recovered from the caves was found to contain elements not of this earth.",
            "Energy Pulses: Investigators have been knocked off their feet by invisible energy pulses emanating from the ground."
        ]
    },
    hook: "The team currently investigating the ranch has used ground-penetrating radar to confirm a massive, unnatural cavern system. They believe they are on the verge of a discovery that could rewrite history, but the land's curse continues to plague their efforts. What is protecting the treasure, and is it worth the price?",
    media: [
        { youtubeId: "3tUuP2A4wXw", title: "Mystery at Blind Frog Ranch" },
        { youtubeId: "i-Q81MMYn0E", title: "What Lies Beneath Blind Frog Ranch?" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is active, dangerous private property. Do NOT trespass.",
            "The area shares many of the same risks as Skinwalker Ranch, including potential radiation and electronic interference.",
            "Local legends are taken very seriously. Be respectful when inquiring with townsfolk.",
            "The terrain is rugged and unforgiving."
        ]
    },
    olympianInsight: {
        character: "Dreamwalker Elkshade (Uintah Guardian)",
        quote: "Some treasures are not meant to be possessed. They are anchors, placed in the earth to bind something ancient. To move the gold is to release the prisoner.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Magnetometer", reason: "To measure the intense magnetic fields" },
        { name: "Geiger Counter", reason: "To check for radiation, especially near the cavern entrance" },
        { name: "First-Aid Kit", reason: "The 'curse' often manifests as bizarre accidents" }
    ],
    relatedDestinationIds: ['skinwalker-ranch', 'topaz-mountain', 'sego-canyon']
  },
  {
    id: 'topaz-mountain',
    name: "Topaz Mountain",
    subtitle: "The Bermuda Triangle of Utah",
    category: Category.UTAH,
    location: "Juab County, Utah",
    driveTime: "2.5 hours from SLC",
    visitDuration: "Half to full day",
    cost: "Free (BLM land)",
    groupSize: "2+ people",
    bestTime: "Spring/Fall",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "DISAPPEARANCES & NAVIGATIONAL FAILURE",
    gps: "39.7128, -113.1039",
    what3words: "///sugars.lumber.convinces",
    story: [
        "While known to rockhounds for its semi-precious gemstones, Topaz Mountain has a much darker reputation among pilots, law enforcement, and local search and rescue teams. This isolated peak in Utah's West Desert is considered an anomaly zone—a 'Bermuda Triangle' of the Great Basin.",
        "Multiple planes have crashed here with no mechanical explanation. Hikers and prospectors have vanished without a trace, even in clear weather. The area seems to possess a unique ability to disorient and confuse those who enter it."
    ],
    evidence: {
        title: "Anomalous Phenomena",
        points: [
            "Unexplained Crashes: A string of small aircraft crashes where pilots reported complete instrument failure just before impact.",
            "Vanishing Hikers: Several documented cases of experienced hikers disappearing from the mountain's trails, with extensive searches finding nothing.",
            "Compass and GPS Failure: Navigational tools are notoriously unreliable on and around the mountain, often pointing in random directions.",
            "Missing Time: Survivors of disorientation events report losing hours of time with no memory of what happened.",
            "The 'Topaz Hum': A low-frequency, disorienting hum has been reported by visitors, which cannot be recorded by standard equipment."
        ]
    },
    hook: "Is a massive, underground magnetic deposit responsible for the navigational issues, or is something more esoteric at play? The sheer number of unexplained disappearances and crashes makes Topaz Mountain one of Utah's most genuinely dangerous and mysterious locations.",
    media: [
      { youtubeId: "dQw4w9WgXcQ", title: "The Missing 411 of Topaz Mountain" },
      { youtubeId: "oHg5SJYRHA0", title: "Utah's Bermuda Triangle" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "DO NOT rely on electronic navigation. Bring a physical map and analog compass, but be prepared for them to fail.",
            "This is extremely remote desert. Bring more water and fuel than you think you need.",
            "Inform multiple people of your exact route and schedule, and stick to it.",
            "If you feel disoriented or hear the 'hum', turn back immediately."
        ]
    },
    olympianInsight: {
        character: "Faye the Fossil Witch (Juab County Guardian)",
        quote: "The stones here sing a song that unravels the mind. It is a song from a time before maps, a resonance that can erase a man's path, not just from the ground, but from his own memory.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Personal Locator Beacon (PLB)", reason: "Essential for emergency situations with no cell service" },
        { name: "Analog Watch, Map, and Compass", reason: "As a backup for when electronics inevitably fail" },
        { name: "Extra Water and Food", reason: "A short trip can become a multi-day survival situation" }
    ],
    relatedDestinationIds: ['nutty-putty-cave', 'dugway-proving-ground', 'area-51-perimeter']
  },
  {
    id: 'sego-canyon',
    name: "Sego Canyon",
    subtitle: "Where Ancient Aliens Met Miners",
    category: Category.UTAH,
    location: "Near Thompson Springs, Utah",
    driveTime: "3.5 hours from SLC",
    visitDuration: "2-3 hours",
    cost: "Free",
    groupSize: "Any size",
    bestTime: "Spring/Fall",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "PARANORMAL ACTIVITY & REMOTE LOCATION",
    gps: "39.0305, -109.7088",
    what3words: "///unzip.outbound.unclaimed",
    story: [
        "Sego Canyon is home to some of the most bizarre and compelling rock art in North America. Long before the Fremont and Ute peoples carved their stories here, an even older culture, the Barrier Canyon people, left behind haunting, 8,000-year-old pictographs.",
        "These life-sized figures have hollow eyes, antenna-like protrusions, and strange, otherworldly forms, bearing a striking resemblance to modern depictions of 'grey' aliens. Centuries later, a mining town was established in the canyon, only to be mysteriously abandoned after workers reported being terrorized by 'watchers' in the cliffs."
    ],
    evidence: {
        title: "A Canyon of Watchers",
        points: [
            "The Ancient Astronaut Petroglyphs: The Barrier Canyon Style figures are unlike any other native art, strongly suggesting an encounter with non-human beings.",
            "The Abandoned Town: The Sego mining town was deserted in a hurry. The mine foreman's final log entry reportedly read: 'They don't want us here.'",
            "Shadow Figures: Modern visitors frequently report seeing tall, dark shadow figures moving along the canyon ridges at dusk.",
            "Disembodied Whispers: The distinct feeling of being watched is often accompanied by faint, indecipherable whispers carried on the wind."
        ]
    },
    hook: "Did the ancient inhabitants of Sego Canyon paint portraits of visitors from another world? And are those same visitors still standing sentinel in the canyon, driving away anyone who stays too long? The connection between the ancient art and the modern hauntings is too strong to ignore.",
    media: [
      { youtubeId: "2jdb98yEjs8", title: "Sego Canyon's Alien Petroglyphs" },
      { youtubeId: "7z4EH54q2s8", title: "Ghost Town and Rock Art of Sego Canyon" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is a remote location. Roads can become impassable after rain.",
            "Do not touch the petroglyphs. The oils from your skin cause irreparable damage.",
            "Be aware of your surroundings, especially near dusk.",
            "The abandoned mine shafts are extremely dangerous. Do not enter."
        ]
    },
    olympianInsight: {
        character: "Koda the Moab Runner (Grand County Guardian)",
        quote: "Humanity was not always alone. There were teachers, long ago. They left their mark not only on the minds of men, but on the stone itself, a reminder that your cradle was once watched by others.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [
      { name: "Binoculars", reason: "To view petroglyphs that are high on the canyon walls" },
      { name: "Camera with a good zoom", reason: "To photograph the rock art in detail" },
      { name: "Off-road capable vehicle", reason: "The road into the canyon can be rough" }
    ],
    relatedDestinationIds: ['skinwalker-ranch', 'chaco-canyon', 'four-corners-vortex']
  },
  {
    id: 'rhyolite-ghost-town',
    name: "Rhyolite Ghost Town",
    subtitle: "Where Something Stayed",
    category: Category.NEVADA,
    location: "Near Beatty, Nevada",
    driveTime: "7 hours from SLC",
    visitDuration: "2-3 hours",
    cost: "Free",
    groupSize: "Any size",
    bestTime: "Spring/Fall mornings",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "ACTIVE HAUNTINGS & REMOTE DESERT",
    gps: "36.9042, -116.8289",
    what3words: "///gurgled.handful.clattered",
    story: [
        "Rhyolite was once a booming gold rush town, with thousands of residents, a stock exchange, and an opera house. But like many boomtowns, it went bust, and was almost completely abandoned by 1920.",
        "While the people left, the energy of that wild, desperate time seems to have remained. Rhyolite is now considered one of Nevada's most active paranormal hotspots, a place where the ghosts of the past are not always quiet."
    ],
    evidence: {
        title: "The Spirits of the Gold Rush",
        points: [
            "The Bottle House: One of the most famous structures, made of 50,000 embedded beer bottles, is the source of disembodied party music and laughter at night.",
            "The Lady in White: A spectral woman in a Victorian-era dress is often seen walking between the ruined buildings before vanishing.",
            "Figures on Camera: Security cameras at the adjacent Goldwell Open Air Museum frequently capture figures and light anomalies that are not there in person.",
            "Cold Spots and Touches: Visitors often report sudden, dramatic drops in temperature and the feeling of being touched or pushed by unseen hands."
        ]
    },
    hook: "The desolation of the desert provides a silent backdrop for the echoes of Rhyolite's glory days. The spirits here are not shy, and the evidence of their continued existence is plentiful, making it a must-visit for any paranormal investigator.",
    media: [
      { youtubeId: "c_v2yH-u7tM", title: "Ghost Hunting Rhyolite" },
      { youtubeId: "G-F3m99tWUY", title: "Exploring Rhyolite Ghost Town" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is the Mojave Desert. Summer temperatures are extreme. Bring more water than you think you need.",
            "Watch for rattlesnakes and scorpions, especially around the ruins.",
            "The remaining structures are fragile and unstable. Do not climb on or enter them.",
            "Cell service is unreliable. Don't travel alone."
        ]
    },
    olympianInsight: {
      character: "A Nevada Counterpart",
      quote: "A good party never truly ends. Its echoes can linger for a century, especially when fueled by gold, whiskey, and hope. They are still dancing in the dust.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Thermal Camera", reason: "To capture temperature fluctuations and potential apparitions" },
        { name: "Spirit Box / EVP Recorder", reason: "The spirits of Rhyolite are known to be communicative" },
        { name: "Sun Protection and Water", reason: "The environmental dangers are as real as the paranormal ones" }
    ],
    relatedDestinationIds: ['area-51-perimeter', 'the-lost-dutchmans-mine', 'jerome-arizona']
  },
  {
    id: 'animas-forks',
    name: "Animas Forks",
    subtitle: "The Vanishing Town",
    category: Category.COLORADO,
    location: "San Juan County, Colorado",
    driveTime: "8 hours from SLC",
    visitDuration: "2-4 hours",
    cost: "Free",
    groupSize: "2+ people",
    bestTime: "July-August",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "EXTREME ELEVATION & UNEXPLAINED DISAPPEARANCES",
    gps: "37.9300, -107.5709",
    what3words: "///handwriting.dreading.overlooks",
    story: [
        "Perched at a dizzying 11,200 feet, Animas Forks is one of the highest and most remote ghost towns in the United States. It was a rugged mining settlement, where residents endured some of the harshest conditions imaginable.",
        "The town's darkest legend stems from the brutal winter of 1891, when a blizzard lasted for 23 straight days. When the snow finally cleared and help arrived, they found something deeply unsettling: half the town's population had simply vanished. They were not dead, just gone."
    ],
    evidence: {
        title: "The Mystery of the Lost Settlers",
        points: [
            "The Great Disappearance: Belongings were left behind, food was on the tables, but dozens of people were gone without a trace. No bodies were ever found.",
            "The Phantom Saloon: Visitors to the town's ruins report hearing the sounds of a lively party—music, laughter, and clinking glasses—coming from the empty saloon.",
            "Footprints to Nowhere: Fresh footprints are often found in the snow or mud around the town, leading into the wilderness before abruptly stopping.",
            "Whispers on the Wind: The names of the vanished are sometimes heard being whispered on the strong alpine winds."
        ]
    },
    hook: "What happened to the lost settlers of Animas Forks during that endless blizzard? Were they victims of starvation-induced madness, or did something else, something ancient and hungry from the mountains, find them? The strange phenomena suggest their story is not yet over.",
    media: [
      { youtubeId: "cZ4rTCUgxx8", title: "Exploring Animas Forks Ghost Town" },
      { youtubeId: "dQw4w9WgXcQ", title: "The Vanishing at Animas Forks" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "A 4x4, high-clearance vehicle is absolutely required to reach this location.",
            "The road is only passable for a few months in the summer. Check conditions before you go.",
            "Altitude sickness is a serious danger. Acclimatize and stay hydrated.",
            "Weather can change from sunny to a blizzard in minutes. Be prepared for anything."
        ]
    },
    olympianInsight: {
      character: "A Colorado Counterpart",
      quote: "In the high places, the winter wind can do more than chill the bone. It can carry away the unwary, blowing them to a place between the here and the never.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "4x4 Vehicle", reason: "Access is via a rugged, high-altitude jeep trail" },
        { name: "Oxygen Canister", reason: "To combat the effects of the extreme altitude" },
        { name: "Emergency Survival Gear", reason: "You are hours away from any help" }
    ],
    relatedDestinationIds: ['st-elmo-ghost-town', 'san-luis-valley', 'chaco-canyon']
  },
  {
    id: 'the-lost-dutchmans-mine',
    name: "Lost Dutchman's Mine",
    subtitle: "The Deadliest Treasure Hunt",
    category: Category.ARIZONA,
    location: "Superstition Mountains, AZ",
    driveTime: "10 hours from SLC",
    visitDuration: "Multi-day expedition",
    cost: "Free (permits may apply)",
    groupSize: "Experienced team of 3+",
    bestTime: "Winter/Spring",
    dangerLevel: DangerLevel.LETHAL,
    dangerDescription: "DOCUMENTED DEATHS, CURSE & EXTREME TERRAIN",
    gps: "33.4735, -111.1732",
    what3words: "///perfection.snoring.legendary",
    story: [
        "The legend of the Lost Dutchman's Gold Mine is the deadliest treasure story in American history. In the 1870s, a German immigrant named Jacob Waltz supposedly discovered a mine of unimaginable wealth deep within the treacherous Superstition Mountains.",
        "He died in 1891, taking the exact location with him. Since then, an estimated 600 or more people have died searching for it, falling victim to the mountain's brutal terrain, its mysterious guardians, or the greed of fellow treasure hunters."
    ],
    evidence: {
        title: "The Curse of the Superstitions",
        points: [
            "A Body Count: The sheer number of documented deaths and disappearances is staggering and far exceeds normal accident rates.",
            "Decapitated Victims: A number of bodies have been found mysteriously decapitated, a calling card of some unknown guardian of the mine.",
            "The Adolph Ruth Case (1931): An amateur explorer, Adolph Ruth, vanished. His skull was found months later with two bullet holes in it. A note in his pocket read: 'Veni, vidi, vici' (I came, I saw, I conquered).",
            "Apache Legends: The Apache believe the mountains are sacred and home to the Thunder God. They say the mine is protected by spirits who kill trespassers."
        ]
    },
    hook: "The gold is real. The curse is real. The danger is real. The Lost Dutchman's Mine is not just a legend; it's an active, ongoing vortex of death and mystery that continues to claim lives to this day. Are you brave, or foolish, enough to be next?",
    media: [
      { youtubeId: "r-hYor2a32c", title: "The Curse of the Lost Dutchman's Mine" },
      { youtubeId: "dQw4w9WgXcQ", title: "Searching for the Lost Dutchman" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is NOT a casual hike. This is a serious, multi-day expedition into one of America's most dangerous wilderness areas.",
            "Summer is a death sentence. Temperatures exceed 120°F.",
            "Water is the biggest killer. Carry at least two gallons per person, per day.",
            "The greatest danger may be other treasure hunters. Some are armed and paranoid. Do not trust anyone.",
            "Never search alone. Ever."
        ]
    },
    olympianInsight: {
      character: "An Arizona Counterpart",
      quote: "Gold does not need a curse to make men kill. It is a curse in itself. This mountain is a temple where the greedy and the desperate make their offerings of blood.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Professional Hiking/Survival Gear", reason: "This is a life-or-death expedition" },
        { name: "Satellite Messenger/PLB", reason: "You will have no cell service and are days from help" },
        { name: "Topographical Maps", reason: "GPS is unreliable; old-school navigation is key" },
        { name: "Self-Defense Tools (as permitted)", reason: "Human and animal threats are significant" }
    ],
    relatedDestinationIds: ['jerome-arizona', 'rhyolite-ghost-town', 'chaco-canyon'],
    buddyLinks: [
      {
        category: "Lethal-Grade Gear",
        text: "Don't even think about it without a satellite messenger.",
        url: "https://www.amazon.com/s?k=garmin+inreach"
      },
      {
        category: "Lethal-Grade Gear",
        text: "Start with a serious multi-day backpacking pack.",
        url: "https://www.rei.com/c/backpacking-packs"
      },
      {
        category: "Provisions & Lodging",
        text: "Stock up and stay in Apache Junction before you go.",
        url: "https://www.booking.com/city/us/apache-junction.html"
      }
    ]
  },
  {
    id: 'jerome-arizona',
    name: "Jerome, Arizona",
    subtitle: "The Wickedest Town in the West",
    category: Category.ARIZONA,
    location: "Yavapai County, Arizona",
    driveTime: "9 hours from SLC",
    visitDuration: "1-2 days",
    cost: "Varies (tourist town)",
    groupSize: "Any size",
    bestTime: "Spring/Fall",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "HIGHLY ACTIVE HAUNTINGS",
    gps: "34.7483, -112.1132",
    what3words: "///gurgling.snoring.corkscrew",
    story: [
        "Built precariously on the side of Cleopatra Hill, Jerome was once a booming copper mining town known as the 'Wickedest Town in the West' for its saloons, brothels, and gunfights. After the mines closed, the population dwindled from 15,000 to just 50, officially becoming America's largest ghost town.",
        "Today, it's a thriving arts community, but the ghosts of its wicked past have never left. The town is considered one of the most haunted places in America, where the spirits are as much a part of the population as the living."
    ],
    evidence: {
        title: "A Town of Ghosts",
        points: [
            "The Jerome Grand Hotel: Formerly a hospital where thousands died, it is the town's paranormal epicenter. Guests in Room 32 report being strangled by the ghost of a murdered man.",
            "The Sliding Jail: The town is built on a 30-degree slope and is slowly sliding down the mountain. The original jail has moved 225 feet from its foundation.",
            "The Spirit of Sammie Dean: The ghost of a prostitute murdered by a client is still seen walking the alleys, searching for her killer.",
            "Constant Activity: Nearly every building in Jerome has a documented haunting, from disembodied voices in the saloons to full-bodied apparitions in the shops."
        ]
    },
    hook: "In Jerome, the ghosts outnumber the living. The veil between worlds is thin here, worn down by a century of violence, greed, and tragedy. It's less a question of if you will have a paranormal experience, and more a question of what kind.",
    media: [
      { youtubeId: "G52Aa4fO_zM", title: "Haunted Jerome, Arizona" },
      { youtubeId: "dQw4w9WgXcQ", title: "Ghost Adventures: Jerome Grand Hotel" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "Jerome is a popular tourist town, but be respectful of private residences.",
            "The streets are narrow and winding. Be careful when driving and walking.",
            "Book ghost tours and hotel stays well in advance.",
            "Psychological sensitivity is a factor; the oppressive paranormal energy can affect visitors."
        ]
    },
    olympianInsight: {
      character: "An Arizona Counterpart",
      quote: "This town is a waking dream, where the memories of the earth bleed into the present. The spirits you see are not trapped; they are simply re-living the moments that defined them, forever.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Paranormal Investigation Kit", reason: "This is a target-rich environment for evidence collection" },
        { name: "Digital Camera and Audio Recorder", reason: "Activity is frequent and often captured" },
        { name: "An Open Mind", reason: "Skepticism is often challenged in Jerome" }
    ],
    relatedDestinationIds: ['the-lost-dutchmans-mine', 'rhyolite-ghost-town', 'four-corners-vortex']
  },
  {
    id: 'craters-of-the-moon',
    name: "Craters of the Moon",
    subtitle: "The Most Alien Place on Earth",
    category: Category.IDAHO,
    location: "Central Idaho",
    driveTime: "4 hours from SLC",
    visitDuration: "Half to full day",
    cost: "National Monument entry fees",
    groupSize: "Any size",
    bestTime: "Late Spring/Early Fall",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "ANOMALOUS ZONE & DANGEROUS TERRAIN",
    gps: "43.4608, -113.5623",
    what3words: "///unstable.geologist.revisit",
    story: [
        "Craters of the Moon is a vast, desolate landscape of lava flows, cinder cones, and sagebrush that looks so otherworldly that NASA used it to train Apollo astronauts for their moon missions. The Shoshone-Bannock tribes that lived here for centuries believed it was a cursed land, where a serpent god battled the sky.",
        "Modern visitors find the ancient legends may have a basis in fact. The area is a known anomaly zone, where electronics fail, people experience missing time, and the overwhelming feeling of being watched is a common report."
    ],
    evidence: {
        title: "The Idaho Anomaly",
        points: [
            "Electronic Failure: Compasses spin wildly, GPS units give false readings, and batteries drain at an accelerated rate.",
            "Missing Time: Hikers have reported that short walks have taken hours longer than they should have, with no memory of the intervening time.",
            "The Watchers: The feeling of being observed by an unseen presence is the most common report from visitors who venture off the main paths.",
            "Unexplored Caves: The lava tubes and caves in the monument go deeper than anyone has ever explored. Search parties that have gone too deep have failed to return."
        ]
    },
    hook: "Is Craters of the Moon simply a geological wonder, or does its alien appearance mask something truly not of this Earth? The combination of Native legends, astronaut training, and modern anomalous reports makes it a place of profound and unsettling mystery.",
    media: [
      { youtubeId: "fM_s-431T5Y", title: "Exploring Craters of the Moon" },
      { youtubeId: "dQw4w9WgXcQ", title: "The Craters of the Moon Anomaly" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "The lava rock is incredibly sharp and can shred shoes and skin. Wear sturdy hiking boots.",
            "There is no water available on the trails. Carry plenty with you.",
            "Do not enter caves or lava tubes without proper equipment and notifying a ranger.",
            "Trust your navigational tools, but verify with landmarks. If you feel disoriented, return to the trail."
        ]
    },
    olympianInsight: {
      character: "An Idaho Counterpart",
      quote: "This is a workshop. A place where the earth's bones are laid bare, still cooling from the fires of creation. It is a raw, untamed place, and not all the things forged here are meant for mortal eyes.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Reliable Navigation Tools", reason: "Essential due to reported electronic failures" },
        { name: "Durable Hiking Boots", reason: "The volcanic rock is extremely abrasive" },
        { name: "Headlamps and Safety Gear", reason: "If you plan to explore any of the designated caves" }
    ],
    relatedDestinationIds: ['bear-lake-monster', 'devils-gate', 'berkeley-pit']
  },
  {
    id: 'chaco-canyon',
    name: "Chaco Canyon",
    subtitle: "The Anasazi Enigma",
    category: Category.NEW_MEXICO,
    location: "Northwestern New Mexico",
    driveTime: "8 hours from SLC",
    visitDuration: "1-2 days",
    cost: "National Historical Park fees",
    groupSize: "Any size",
    bestTime: "Spring/Fall",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "ANCIENT SPIRITS & CULTURALLY SENSITIVE",
    gps: "36.0645, -107.9599",
    what3words: "///scariest.puzzles.blurs",
    story: [
        "Between 850 and 1250 AD, Chaco Canyon was the cultural and ceremonial center of the Anasazi (Ancestral Puebloan) civilization. They built massive, multi-story 'Great Houses' with hundreds of rooms, aligned perfectly with celestial events. Their knowledge of astronomy was staggering.",
        "Then, around 1300 AD, they vanished. The entire civilization abandoned this magnificent city, leaving behind their homes and possessions. There are no graves, no signs of war, no explanation. Just silence."
    ],
    evidence: {
        title: "The Mystery of the Vanished",
        points: [
            "The Great Abandonment: A thriving civilization of thousands disappeared from the historical record in a single generation.",
            "Impossible Engineering: The construction required 200,000 trees, carried from mountains 70 miles away, without wheels or horses.",
            "Celestial Alignments: Buildings are designed as astronomical observatories, with windows and doors that align perfectly with solstices, equinoxes, and lunar standstills.",
            "Navajo Warnings: Modern Navajo elders refuse to enter the canyon after dark, saying simply, 'The ancient ones are still there.'"
        ]
    },
    hook: "Why did the Chacoans leave? Where did they go? The scale of their city and the depth of their knowledge is breathtaking, but the silence they left behind is terrifying. The Navajo believe their spirits never left, and many visitors who stay after dark agree.",
    media: [
      { youtubeId: "uymmw-C4v4s", title: "The Mystery of Chaco Canyon" },
      { youtubeId: "pP-aoEwe0s", title: "Exploring Chaco Culture National Historical Park" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is a sacred site to many Pueblo people. Behave with the utmost respect.",
            "Do not climb on walls or enter restricted areas. Do not take any pottery shards.",
            "The road to Chaco is notoriously rough and often unpaved. A high-clearance vehicle is highly recommended.",
            "Services are extremely limited. Bring all the food, water, and fuel you will need."
        ]
    },
    olympianInsight: {
      character: "A New Mexico Counterpart",
      quote: "They did not vanish. They simply followed the path in the sky that their star-maps showed them. They built a city not as a home, but as a gateway, and when the gateway opened, they left.",
      characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "High-Clearance Vehicle", reason: "The access road is 13 miles of rough dirt" },
        { name: "Camping Gear", reason: "To experience the park at night (reservations required)" },
        { name: "Astrophotography Equipment", reason: "Chaco has some of the darkest night skies in the country" }
    ],
    relatedDestinationIds: ['san-luis-valley', 'four-corners-vortex', 'sego-canyon']
  },
  {
    id: 'dugway-proving-ground',
    name: "Dugway Proving Ground",
    subtitle: "'Area 52'",
    category: Category.UTAH,
    location: "Tooele & Juab Counties, Utah",
    driveTime: "2 hours from SLC",
    visitDuration: "1-2 hours (perimeter)",
    cost: "Free (public roads)",
    groupSize: "2+ people",
    bestTime: "Daylight",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "ACTIVE MILITARY BASE & BIOHAZARD RISK",
    gps: "40.2222, -112.7556",
    what3words: "///canyon.resembles.subway",
    story: [
        "Covering nearly 800,000 acres of the West Desert, Dugway Proving Ground is the U.S. Army's primary facility for testing chemical and biological weapons. Its restricted airspace is larger than that of Area 51, earning it the nickname 'Area 52'.",
        "While its official mission is terrifying enough, rumors have persisted for decades that Dugway is also involved in the storage and analysis of recovered UFOs and non-terrestrial materials, making it a nexus of both terrestrial and extraterrestrial secrets."
    ],
    evidence: {
        title: "Secrets in the Desert",
        points: [
            "The Skull Valley Sheep Kill (1968): An open-air nerve agent test went wrong, killing over 6,000 sheep in the adjacent valley. The military initially denied involvement.",
            "Recovered UFO Storage: Insiders have claimed that materials recovered from UFO crash sites, including the Roswell incident, are stored and tested at Dugway.",
            "Unusual Air Traffic: Locals report seeing bizarre, silent, and fast-moving aircraft in Dugway's restricted airspace that do not match any known military planes.",
            "Extreme Secrecy: The level of security and secrecy surrounding Dugway is on par with, or even exceeds, that of Area 51."
        ]
    },
    hook: "Dugway is where the government tests the deadliest things it doesn't want you to know about. The question is whether those things are all man-made. Given its proximity to the Uintah Basin and other hotspots, it's the perfect place to hide secrets from both this world and others.",
    media: [
      { youtubeId: "cShGl_0S5bQ", title: "Inside Dugway Proving Ground" },
      { youtubeId: "dQw4w9WgXcQ", title: "Secrets of Area 52" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is an active and extremely sensitive military installation. DO NOT attempt to cross the boundary.",
            "You will be watched. Expect to be followed or stopped by military police if you linger too long.",
            "The risk of exposure to residual chemical or biological agents, while low, is not zero.",
            "Stay on public highways. The perimeter is vast and heavily patrolled."
        ]
    },
    olympianInsight: {
        character: "Voss the Void-Rider (Tooele County Guardian)",
        quote: "This is a place where men weaponize the unseen. They distill fear into powders and plagues. But even they are humbled by the things they find here, which were born of a fear far older and grander than their own.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Long-Range Telephoto Lens", reason: "To photograph anything of interest from a legal, safe distance" },
        { name: "Radio Scanner", reason: "To monitor unencrypted military frequencies for unusual activity" },
        { name: "Dash Cam", reason: "To record any interactions with military police" }
    ],
    relatedDestinationIds: ['area-51-perimeter', 'topaz-mountain', 'skinwalker-ranch']
  },
  {
    id: 'four-corners-vortex',
    name: "Four Corners Vortex",
    subtitle: "The Convergence",
    category: Category.NEW_MEXICO,
    location: "Four Corners Monument",
    driveTime: "6 hours from SLC",
    visitDuration: "1-3 hours",
    cost: "Monument entry fee",
    groupSize: "Any size",
    bestTime: "Sunrise/Sunset",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "PARANORMAL CONVERGENCE ZONE",
    gps: "36.9990, -109.0452",
    what3words: "///puzzles.hiring.outlooks",
    story: [
        "The Four Corners Monument is the only place in the United States where four states meet: Utah, Colorado, Arizona, and New Mexico. But it is more than a geographical curiosity. It is considered by many to be a powerful spiritual vortex and a point of convergence for paranormal phenomena.",
        "Ancient Anasazi legends refer to this area as an 'emergence point'. Modern paranormal investigators believe it acts as an intersection or gateway, where different forms of high strangeness bleed into one another."
    ],
    evidence: {
        title: "A Nexus of Phenomena",
        points: [
            "Magnetic Anomalies: The central point is known to cause malfunctions in electronic equipment and compasses.",
            "Skinwalker Hotspot: This region is the heart of Skinwalker territory, with sightings being most frequent at the convergence point.",
            "UFO 'Doorway': UFO researchers believe the vortex acts as a dimensional door, with craft frequently seen entering or exiting the atmosphere directly above the monument.",
            "Psychic Phenomena: Visitors often report heightened senses, prophetic dreams after visiting, and a tangible 'energy' at the center point."
        ]
    },
    hook: "This is where multiple ley lines of the paranormal intersect. Cryptid activity, UFO sightings, and ancient spirits all seem to be drawn to this unique point on the earth. Standing in four states at once might be a tourist gimmick, but it might also mean standing in four different realities at once.",
    media: [
      { youtubeId: "dQw4w9WgXcQ", title: "The Four Corners Vortex Explained" },
      { youtubeId: "oHg5SJYRHA0", title: "Paranormal Investigation at Four Corners" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is on the Navajo Nation. Be respectful of their land and customs.",
            "The area is very exposed. Be prepared for intense sun, wind, or sudden storms.",
            "Services are limited. Bring water and have a full tank of gas.",
            "Pay attention to your emotional and psychological state. Vortex sites can be disorienting."
        ]
    },
    olympianInsight: {
        character: "Hob the Hollow-Tuned Hermit Sage (San Juan Guardian)",
        quote: "Crossroads are powerful places. They are points of decision, of transition. This is a crossroads not just of mortal lands, but of worlds. Be careful which path you choose to see.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [
        { name: "Full-Spectrum Camera", reason: "To capture phenomena outside the visible spectrum" },
        { name: "Dowsing Rods / Pendulum", reason: "For those who practice energy detection" },
        { name: "A grounding object", reason: "To help stay centered in the intense energy" }
    ],
    relatedDestinationIds: ['chaco-canyon', 'san-luis-valley', 'skinwalker-ranch', 'sego-canyon'],
    tags: ["Ley Line Intersections"]
  },
  {
    id: 'wasatch-wildman',
    name: "Wasatch Wildman",
    subtitle: "Utah's Aggressive Bigfoot",
    category: Category.CRYPTID,
    location: "Uinta & Wasatch Mountains, UT",
    driveTime: "1-2 hours from SLC",
    visitDuration: "Multi-day expedition",
    cost: "Free (National Forest)",
    groupSize: "Experienced team of 3+",
    bestTime: "Late Summer/Early Fall",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "AGGRESSIVE CRYPTID & REMOTE WILDERNESS",
    gps: "40.3524, -111.5830",
    what3words: "///sprinting.resemble.outbound",
    story: [
        "While the Pacific Northwest is famous for its reclusive Sasquatch, Utah is home to a different, more aggressive variant. Known as the Wasatch Wildman or the Uinta Bigfoot, this creature is reported to be larger, bolder, and far more territorial than its northwestern cousin.",
        "For centuries, Native tribes have warned of these powerful, hair-covered giants that roam the high mountain forests. Modern encounters often involve intimidation tactics, such as deafening roars, rock throwing, and 'bluff charges'."
    ],
    evidence: {
        title: "A Pattern of Aggression",
        points: [
            "Rock Throwing: Numerous campers and hikers have had large rocks hurled at their campsites from the darkness.",
            "Deafening Roars: The creature's vocalizations are said to be so powerful they can be felt as a vibration in the chest.",
            "Unusual Structures: Strange, woven wood structures and massive tree breaks, far beyond the capability of man or bear, are found in sighting areas.",
            "The 1980 Provo Canyon Encounter: A group of campers was terrorized for hours by a large, hairy creature that circled their camp and threw rocks before vanishing."
        ]
    },
    hook: "This isn't a gentle giant. The Wasatch Wildman is a powerful, intelligent primate that views humans as intruders in its territory. The challenge isn't just finding evidence of its existence, but doing so without provoking a dangerous, and potentially violent, response.",
    media: [
      { youtubeId: "dQw4w9WgXcQ", title: "Utah's Bigfoot Hotspots" },
      { youtubeId: "oHg5SJYRHA0", title: "Searching for the Wasatch Wildman" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "This is serious backcountry. You are hours from help.",
            "Do not go alone. A team of experienced outdoorsmen is essential.",
            "Carry bear spray and know how to use it, though its effectiveness is unknown.",
            "If you have an encounter, do not run. Make yourself look large, do not show fear, and back away slowly.",
            "These creatures are most active at night. Secure your camp accordingly."
        ]
    },
    olympianInsight: {
        character: "Dan the Sasquatch Ranger (Wasatch Guardian)",
        quote: "There are ancient things in the deep woods. They are the true kings of the forest. You trespass in their court at your own peril. Show respect, or they will teach it to you. Some of us are just... bigger neighbors.",
        characterImage: './assets/dan-mascot-transparent-bg.png',
    },
    equipment: [
        { name: "Thermal Imaging Camera", reason: "The best tool for spotting a large, warm-blooded creature at night" },
        { name: "Parabolic Microphone", reason: "To capture distant vocalizations and wood knocks" },
        { name: "Casting Kits", reason: "To preserve any footprints you may find" }
    ],
    relatedDestinationIds: ['bear-lake-monster', 'utah-lake-water-babies', 'skinwalker-ranch']
  },
  {
    id: 'utah-lake-water-babies',
    name: "Utah Lake Water Babies",
    subtitle: "The Child-Eating Spirits",
    category: Category.CRYPTID,
    location: "Utah Lake, Utah",
    driveTime: "45 minutes from SLC",
    visitDuration: "Evening/Night vigil",
    cost: "State Park entry fees",
    groupSize: "2-4 people",
    bestTime: "Summer nights",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "MALEVOLENT ENTITIES & WATER HAZARD",
    gps: "40.0655, -111.7895",
    what3words: "///waters.crying.luring",
    story: [
        "Utah Lake is a large, shallow, and often murky body of water with a dark secret. Ute tribal legends, passed down for generations, warn of the 'Water Babies' - murderous water spirits that mimic the cries of infants to lure unsuspecting victims to the water's edge.",
        "The lake has one of the highest drowning rates per capita of any similar-sized lake in the country. Many of the bodies recovered have unexplained scratches or bite marks, and boaters report their vessels being bumped or grabbed from below."
    ],
    evidence: {
        title: "The Lure of the Lake",
        points: [
            "The Cries: The most common report is the unmistakable sound of a crying baby coming from the water at night, especially near the swampy southern shore.",
            "Anomalous Drownings: A statistically high number of drownings, often involving experienced swimmers in calm water.",
            "Unexplained Marks: Coroners have occasionally noted strange bite marks or claw-like scratches on the bodies of drowning victims.",
            "The Impossible Depths: While officially only 14 feet deep, divers and sonar have reported finding inexplicable, sudden drop-offs and holes that are over 100 feet deep."
        ]
    },
    hook: "Are the Water Babies a folk tale to keep children from the water, or are they a genuine threat? The Ute tribe is adamant they are real, and the lake's grim statistics suggest that something malevolent lurks beneath its murky surface.",
    media: [
      { youtubeId: "dQw4w9WgXcQ", title: "The Legend of Utah's Water Babies" },
      { youtubeId: "oHg5SJYRHA0", title: "Investigating the Drownings at Utah Lake" }
    ],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: [
            "Never swim in Utah Lake at night. No exceptions.",
            "If you hear crying, do not approach the water's edge. It is a lure.",
            "Be aware of sudden storms, which can make the shallow lake extremely dangerous for boats.",
            "The real and paranormal dangers here are both significant."
        ]
    },
    olympianInsight: {
      character: "Sylvia the Scholar of Timp (Utah County Guardian)",
      quote: "Not all water spirits are gentle nymphs. Some are ancient, hungry things born of silt and sorrow. They envy the warm-blooded and pull them down into the cold embrace of the mud.",
      characterImage: './assets/water-monster.png',
    },
    equipment: [
        { name: "Hydrophone (Underwater Microphone)", reason: "To attempt to record the crying sounds from beneath the surface" },
        { name: "Night Vision Goggles", reason: "To scan the shoreline and water surface from a safe distance" },
        { name: "Life Vests", reason: "A critical safety item for anyone near or on the water" }
    ],
    relatedDestinationIds: ['bear-lake-monster', 'thistle-ghost-town', 'wasatch-wildman']
  },
  // START OF NEW DESTINATIONS FROM MEGA LIST
  {
    id: 'tooele-army-depot',
    name: "Tooele Army Depot",
    subtitle: "Stockpiling the Apocalypse",
    category: Category.UTAH,
    location: "Tooele, Utah",
    driveTime: "Varies",
    visitDuration: "Perimeter only",
    cost: "Free",
    groupSize: "Any",
    bestTime: "Daylight",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "CHEMICAL WEAPONS",
    gps: "40.5369, -112.3552",
    what3words: "///depot.army.tooele",
    story: ["Home to one of the nation's largest stockpiles of chemical and biological weapons, the Tooele Army Depot is a place where the end of the world is kept under lock and key. Its proximity to other high-strangeness zones raises questions about what else might be stored here."],
    evidence: {
        title: "Apocalyptic Arsenal",
        points: ["Site of nerve agent and mustard gas storage and incineration.", "Reports of strange lights and perimeter breaches from locals.", "Extreme security measures far exceeding a typical depot."]
    },
    hook: "What does it mean to live next door to doomsday?",
    media: [],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: ["This is a highly secure military facility. Do not approach or linger. Observation from a distance on public roads only."]
    },
    olympianInsight: {
        character: "Voss the Void-Rider",
        quote: "The deadliest poisons are often the most quiet. Men build fortresses to contain their fears, but the desert keeps its own secrets.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "Long-range camera", reason: "For safe, legal observation." }],
    relatedDestinationIds: ['dugway-proving-ground']
  },
   {
    id: 'hill-air-force-base',
    name: "Hill Air Force Base",
    subtitle: "Where UFOs Meet the F-35",
    category: Category.UTAH,
    location: "Layton, Utah",
    driveTime: "Varies",
    visitDuration: "Varies",
    cost: "Varies",
    groupSize: "Any",
    bestTime: "Varies",
    dangerLevel: DangerLevel.HIGH,
    dangerDescription: "ACTIVE MILITARY BASE",
    gps: "41.123, -111.973",
    what3words: "///hill.force.base",
    story: ["A major Air Force base known for its advanced F-35 fighter jets, and a long history of UFO sightings reported by pilots and locals alike. The infamous 'UFO Crash at North Ogden' in 1967 is rumored to have had its debris transported here."],
    evidence: {
        title: "Skyward Secrets",
        points: ["Numerous pilot reports of unidentified aerial phenomena.", "Home to advanced aircraft and technology.", "Proximity to a major 1967 UFO incident."]
    },
    hook: "Are the strange lights seen near the base ours, or someone else's?",
    media: [],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: ["Do not trespass on military property. The Hill Aerospace Museum is open to the public and a safe way to visit."]
    },
    olympianInsight: {
        character: "A Local Guardian",
        quote: "The sky holds more traffic than you know.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "Binoculars", reason: "For skywatching from public areas." }],
    relatedDestinationIds: []
  },
  {
    id: 'green-river-launch-complex',
    name: "Green River Launch Complex",
    subtitle: "Echoes of the Cold War",
    category: Category.UTAH,
    location: "Green River, Utah",
    driveTime: "3 hours from SLC",
    visitDuration: "1-2 hours",
    cost: "Free (view from distance)",
    groupSize: "Any",
    bestTime: "Daylight",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "UNSTABLE STRUCTURES",
    gps: "38.9958, -110.0717",
    what3words: "///launch.complex.green",
    story: ["Once a frontline in the Cold War, the Green River Launch Complex tested missiles aimed at the heart of the Soviet Union. Now, its abandoned bunkers and launch pads are a haunting reminder of a world on the brink."],
    evidence: {
        title: "Cold War Remnants",
        points: ["Abandoned launch sites and concrete bunkers.", "Reports of shadowy figures patrolling the perimeter at night.", "Unexplained electronic interference near the main complex."]
    },
    hook: "The missiles are gone, but what energy remains in a place built for Armageddon? Urban explorers and ghost hunters find this isolated site to be particularly active.",
    media: [{ youtubeId: "dQw4w9WgXcQ", title: "Exploring Green River Launch Complex" }],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: ["This is private and potentially government-controlled land. Do not trespass.", "Structures are dilapidated and extremely dangerous.", "The desert environment is harsh and unforgiving."]
    },
    olympianInsight: {
        character: "Voss the Void-Rider",
        quote: "Places built for the end of the world never forget their purpose. They wait patiently.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "High-zoom camera", reason: "To photograph the site from a safe, legal distance." }, { name: "Sturdy boots", reason: "The terrain is rough and littered with debris." }],
    relatedDestinationIds: ['dugway-proving-ground', 'area-51-perimeter', 'cisco-ghost-town']
  },
   {
    id: 'sedona-vortexes',
    name: "Sedona Vortexes",
    subtitle: "The Healing Energy Centers",
    category: Category.ARIZONA,
    location: "Sedona, Arizona",
    driveTime: "Varies",
    visitDuration: "Varies",
    cost: "Varies",
    groupSize: "Any",
    bestTime: "Varies",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "PSYCHOLOGICAL EFFECTS",
    gps: "34.8697, -111.7610",
    what3words: "///sedona.vortex.healing",
    story: ["Sedona is world-renowned for its powerful spiritual vortexes, locations where the earth's energy is said to be exceptionally strong, leading to healing and spiritual awakening."],
    evidence: {
        title: "Vortex Phenomena",
        points: ["Four main vortexes: Airport Mesa, Cathedral Rock, Bell Rock, and Boynton Canyon.", "Reports of heightened spiritual awareness and physical healing.", "Twisted juniper trees are said to be evidence of the powerful energy."]
    },
    hook: "Whether you're a believer or a skeptic, the stunning beauty and palpable energy of Sedona are undeniable.",
    media: [],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: ["Stay hydrated in the desert environment.", "Be respectful of the sacred nature of these sites."]
    },
    olympianInsight: {
        character: "An Arizona Counterpart",
        quote: "Some places are thin, where the world breathes.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "Comfortable hiking shoes", reason: "Accessing the vortexes often requires hiking." }],
    relatedDestinationIds: ['jerome-arizona'],
    tags: ["Ley Line Intersections", "Portal Locations (Alleged)"]
  },
  {
    id: 'roswell',
    name: "Roswell",
    subtitle: "The UFO Crash That Started It All",
    category: Category.NEW_MEXICO,
    location: "Roswell, New Mexico",
    driveTime: "Varies",
    visitDuration: "Varies",
    cost: "Varies",
    groupSize: "Any",
    bestTime: "Varies",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "TOURIST AREA",
    gps: "33.3943, -104.5230",
    what3words: "///roswell.crash.alien",
    story: ["In 1947, something crashed in the desert near Roswell. The military first called it a 'flying disc' and then quickly retracted the statement, claiming it was a weather balloon. The incident sparked the modern UFO phenomenon and a government cover-up that continues to this day."],
    evidence: {
        title: "The Roswell Incident",
        points: ["Initial reports of a crashed flying saucer and alien bodies.", "The military's changing story from saucer to weather balloon.", "Eyewitness accounts of strange, non-terrestrial debris."]
    },
    hook: "What really crashed in the desert outside Roswell? The truth is still out there, and this town is ground zero.",
    media: [],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: ["Enjoy the museums and tourist attractions.", "Respect private property when exploring the alleged crash sites."]
    },
    olympianInsight: {
        character: "A New Mexico Counterpart",
        quote: "A single spark of truth can light a fire of curiosity that burns for generations.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "A healthy dose of skepticism", reason: "Separate the history from the tourist traps." }],
    relatedDestinationIds: ['dulce-base']
  },
  {
    id: 'dulce-base',
    name: "Dulce Base",
    subtitle: "The Underground Alien Horror Show",
    category: Category.NEW_MEXICO,
    location: "Dulce, New Mexico",
    driveTime: "Varies",
    visitDuration: "Varies",
    cost: "Varies",
    groupSize: "Any",
    bestTime: "Varies",
    dangerLevel: DangerLevel.EXTREME,
    dangerDescription: "ALLEGED UNDERGROUND BASE",
    gps: "36.9350, -106.9898",
    what3words: "///dulce.base.underground",
    story: ["According to UFO lore, beneath the Archuleta Mesa lies the Dulce Base, a seven-story underground facility where humans and aliens work together on horrific genetic experiments. The stories, originating from whistleblower Phil Schneider, are the stuff of nightmares."],
    evidence: {
        title: "The Dulce Papers",
        points: ["Alleged photographic and documentary evidence of the base's existence.", "High frequency of cattle mutilations and UFO sightings in the area.", "Extreme military presence and unmarked helicopters patrolling the region."]
    },
    hook: "Is Dulce Base a paranoid delusion or the most terrifying secret on Earth?",
    media: [],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: ["This is on the Jicarilla Apache Reservation. Be extremely respectful.", "Do not trespass or attempt to find a non-existent base entrance."]
    },
    olympianInsight: {
        character: "A New Mexico Counterpart",
        quote: "The deepest horrors are not in the sky, but beneath our feet.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "High-quality camera", reason: "Document any unusual activity in the sky or on the ground." }],
    relatedDestinationIds: ['roswell', 'san-luis-valley'],
    tags: ["Underground Base Network"]
  },
  {
    id: 'devils-tower',
    name: "Devils Tower",
    subtitle: "This Means Something",
    category: Category.WYOMING,
    location: "Crook County, Wyoming",
    driveTime: "Varies",
    visitDuration: "Varies",
    cost: "Varies",
    groupSize: "Any",
    bestTime: "Varies",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "SACRED SITE",
    gps: "44.5902, -104.7154",
    what3words: "///devils.tower.means",
    story: ["A stunning geological formation that rises dramatically from the prairie, Devils Tower is a sacred site to many Native American tribes and was famously the UFO landing site in 'Close Encounters of the Third Kind'."],
    evidence: {
        title: "A Place of Power",
        points: ["Considered a spiritual center by over 20 Native American tribes.", "Reports of strange lights and sounds near the tower.", "Its unique formation has puzzled geologists for centuries."]
    },
    hook: "Whether a sacred site or an alien beacon, the power of Devils Tower is undeniable.",
    media: [],
    safety: {
        title: "Dan Says: Wander Wisely",
        points: ["Be respectful of cultural sensitivities, especially during the June climbing closure.", "Stay on designated trails."]
    },
    olympianInsight: {
        character: "A Wyoming Counterpart",
        quote: "Some places are antennas, built to receive messages from the stars.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "Good hiking shoes", reason: "The trail around the base is worth the walk." }],
    relatedDestinationIds: [],
    tags: ["Portal Locations (Alleged)"]
  },
  // ADDING THE REST OF THE STUBS
  // A helper function would be useful here but I have to do it manually.
  ...[
    // UTAH
    { id: 'nine-mile-canyon', name: "Nine Mile Canyon", category: Category.UTAH },
    { id: 'hovenweep', name: "Hovenweep", category: Category.UTAH },
    { id: 'newspaper-rock', name: "Newspaper Rock", category: Category.UTAH },
    { id: 'parowan-gap', name: "Parowan Gap", category: Category.UTAH },
    { id: 'fremont-indian-state-park', name: "Fremont Indian State Park", category: Category.UTAH },
    { id: 'spiral-jetty', name: "Spiral Jetty", category: Category.UTAH },
    { id: 'factory-butte', name: "Factory Butte", category: Category.UTAH },
    { id: 'goblin-valley', name: "Goblin Valley", category: Category.UTAH },
    { id: 'coral-pink-sand-dunes', name: "Coral Pink Sand Dunes", category: Category.UTAH, tags: ["Time Anomaly Zones"] },
    { id: 'fantasy-canyon', name: "Fantasy Canyon", category: Category.UTAH },
    { id: 'capitol-reef-waterpocket-fold', name: "Capitol Reef Waterpocket Fold", category: Category.UTAH },
    { id: 'little-cottonwood-canyon', name: "Little Cottonwood Canyon", category: Category.UTAH },
    { id: 'escalante-petrified-forest', name: "Escalante Petrified Forest", category: Category.UTAH, tags: ["Time Anomaly Zones"] },
    { id: 'paria-canyon-buckskin-gulch', name: "Paria Canyon/Buckskin Gulch", category: Category.UTAH },
    { id: 'sego-ghost-town', name: "Sego Ghost Town", category: Category.UTAH },
    { id: 'grafton-ghost-town', name: "Grafton Ghost Town", category: Category.UTAH },
    { id: 'silver-reef-ghost-town', name: "Silver Reef Ghost Town", category: Category.UTAH },
    { id: 'frisco-ghost-town', name: "Frisco Ghost Town", category: Category.UTAH },
    { id: 'cisco-ghost-town', name: "Cisco Ghost Town", category: Category.UTAH },
    { id: 'gilgal-sculpture-garden', name: "Gilgal Sculpture Garden", category: Category.UTAH },
    { id: 'dream-mine-relief-mine', name: "Dream Mine/Relief Mine", category: Category.UTAH },
    { id: 'manti-temple', name: "Manti Temple", category: Category.UTAH },
    { id: 'temple-square-tunnels', name: "Temple Square tunnels", category: Category.UTAH },
    { id: 'three-nephites-sightings', name: "Three Nephites sightings", category: Category.UTAH },
    { id: 'timpanogos-cave', name: "Timpanogos Cave", category: Category.UTAH },
    { id: 'minnetonka-cave', name: "Minnetonka Cave", category: Category.UTAH },
    // COLORADO
    { id: 'norad-cheyenne-mountain', name: "NORAD/Cheyenne Mountain", category: Category.COLORADO, tags: ["Underground Base Network"] },
    { id: 'rocky-flats', name: "Rocky Flats", category: Category.COLORADO },
    { id: 'fort-carson', name: "Fort Carson", category: Category.COLORADO },
    { id: 'ashcroft-ghost-town', name: "Ashcroft Ghost Town", category: Category.COLORADO },
    { id: 'independence-ghost-town', name: "Independence Ghost Town", category: Category.COLORADO },
    { id: 'crystal-mill', name: "Crystal Mill", category: Category.COLORADO },
    { id: 'the-stanley-hotel', name: "The Stanley Hotel", category: Category.COLORADO },
    { id: 'cheesman-park', name: "Cheesman Park", category: Category.COLORADO },
    { id: 'red-rocks-amphitheatre', name: "Red Rocks Amphitheatre", category: Category.COLORADO },
    { id: 'bishop-castle', name: "Bishop Castle", category: Category.COLORADO },
    { id: 'buffalo-creek', name: "Buffalo Creek", category: Category.COLORADO },
    { id: 'great-sand-dunes', name: "Great Sand Dunes", category: Category.COLORADO },
    { id: 'blanca-peak', name: "Blanca Peak", category: Category.COLORADO },
    { id: 'mount-evans', name: "Mount Evans", category: Category.COLORADO },
    { id: 'mesa-verde', name: "Mesa Verde", category: Category.COLORADO, tags: ["Missing 411 Hotspots"] },
    { id: 'garden-of-the-gods', name: "Garden of the Gods", category: Category.COLORADO },
    { id: 'pikes-peak', name: "Pikes Peak", category: Category.COLORADO },
    // NEVADA
    { id: 's-4', name: "S-4", category: Category.NEVADA },
    { id: 'tonopah-test-range', name: "Tonopah Test Range", category: Category.NEVADA },
    { id: 'nevada-test-site', name: "Nevada Test Site", category: Category.NEVADA },
    { id: 'goldfield-ghost-town', name: "Goldfield Ghost Town", category: Category.NEVADA },
    { id: 'virginia-city-nv', name: "Virginia City", category: Category.NEVADA },
    { id: 'belmont-ghost-town', name: "Belmont Ghost Town", category: Category.NEVADA },
    { id: 'extraterrestrial-highway', name: "Extraterrestrial Highway", category: Category.NEVADA },
    { id: 'black-mailbox', name: "Black Mailbox", category: Category.NEVADA },
    { id: 'little-ale-inn', name: "Little A'Le'Inn", category: Category.NEVADA },
    { id: 'fly-geyser', name: "Fly Geyser", category: Category.NEVADA },
    { id: 'valley-of-fire', name: "Valley of Fire", category: Category.NEVADA },
    { id: 'pyramid-lake', name: "Pyramid Lake", category: Category.NEVADA },
    // ARIZONA
    { id: 'superstition-mountains', name: "Superstition Mountains", category: Category.ARIZONA },
    { id: 'mogollon-monster-territory', name: "Mogollon Monster territory", category: Category.ARIZONA },
    { id: 'skeleton-cave-massacre-site', name: "Skeleton Cave Massacre site", category: Category.ARIZONA },
    { id: 'grand-canyon', name: "Grand Canyon", category: Category.ARIZONA },
    { id: 'montezuma-castle', name: "Montezuma Castle", category: Category.ARIZONA },
    { id: 'wupatki-ruins', name: "Wupatki ruins", category: Category.ARIZONA },
    { id: 'meteor-crater', name: "Meteor Crater", category: Category.ARIZONA },
    { id: 'tombstone', name: "Tombstone", category: Category.ARIZONA },
    { id: 'bisbee', name: "Bisbee", category: Category.ARIZONA },
    { id: 'vulture-mine', name: "Vulture Mine", category: Category.ARIZONA },
    // WYOMING
    { id: 'medicine-wheel', name: "Medicine Wheel", category: Category.WYOMING, tags: ["Portal Locations (Alleged)"] },
    { id: 'vedauwoo', name: "Vedauwoo", category: Category.WYOMING },
    { id: 'yellowstone-zone-of-death', name: "Yellowstone Zone of Death", category: Category.WYOMING },
    { id: 'heart-mountain', name: "Heart Mountain", category: Category.WYOMING },
    { id: 'fort-laramie', name: "Fort Laramie", category: Category.WYOMING },
    { id: 'wyoming-state-penitentiary', name: "Wyoming State Penitentiary", category: Category.WYOMING },
    // MONTANA
    { id: 'libby', name: "Libby", category: Category.MONTANA },
    { id: 'malmstrom-afb', name: "Malmstrom AFB", category: Category.MONTANA },
    { id: 'bannack-ghost-town', name: "Bannack Ghost Town", category: Category.MONTANA },
    { id: 'garnet-ghost-town', name: "Garnet Ghost Town", category: Category.MONTANA },
    { id: 'virginia-city-mt', name: "Virginia City, MT", category: Category.MONTANA },
    { id: 'nevada-city', name: "Nevada City", category: Category.MONTANA },
    { id: 'flathead-lake-monster', name: "Flathead Lake Monster", category: Category.CRYPTID },
    { id: 'glacier-national-park', name: "Glacier National Park", category: Category.MONTANA, tags: ["Missing 411 Hotspots"] },
    // IDAHO
    { id: 'city-of-rocks', name: "City of Rocks", category: Category.IDAHO },
    { id: 'shoshone-ice-caves', name: "Shoshone Ice Caves", category: Category.IDAHO },
    { id: 'bruneau-sand-dunes', name: "Bruneau Sand Dunes", category: Category.IDAHO },
    { id: 'old-idaho-penitentiary', name: "Old Idaho Penitentiary", category: Category.IDAHO },
    { id: 'silver-city-ghost-town', name: "Silver City Ghost Town", category: Category.IDAHO },
    { id: 'bayhorse-ghost-town', name: "Bayhorse Ghost Town", category: Category.IDAHO },
    { id: 'minnetonka-cave-system', name: "Minnetonka Cave system", category: Category.IDAHO },
    { id: 'crystal-ice-cave', name: "Crystal Ice Cave", category: Category.IDAHO },
    // NEW MEXICO
    { id: 'white-sands', name: "White Sands", category: Category.NEW_MEXICO },
    { id: 'socorro', name: "Socorro", category: Category.NEW_MEXICO },
    { id: 'aztec-ufo-crash-site', name: "Aztec UFO crash site", category: Category.NEW_MEXICO },
    { id: 'shiprock', name: "Shiprock", category: Category.NEW_MEXICO },
    { id: 'carlsbad-caverns', name: "Carlsbad Caverns", category: Category.NEW_MEXICO },
    { id: 'taos-hum', name: "Taos Hum", category: Category.NEW_MEXICO },
    { id: 'los-alamos', name: "Los Alamos", category: Category.NEW_MEXICO },
    { id: 'madrid', name: "Madrid", category: Category.NEW_MEXICO },
    { id: 'villanueva-state-park', name: "Villanueva State Park", category: Category.NEW_MEXICO },
    // BONUS
    { id: 'rocky-mountain-national-park', name: "Rocky Mountain National Park", category: Category.BONUS, tags: ["Missing 411 Hotspots"] },
    { id: 'great-basin', name: "Great Basin", category: Category.BONUS, tags: ["Missing 411 Hotspots"] },
    { id: 'mount-shasta', name: "Mount Shasta", category: Category.BONUS, tags: ["Ley Line Intersections"] },
    { id: 'death-valley', name: "Death Valley", category: Category.BONUS },
    { id: 'salton-sea', name: "Salton Sea", category: Category.BONUS },
    { id: 'crater-lake', name: "Crater Lake", category: Category.BONUS },
    { id: 'oregon-vortex', name: "Oregon Vortex", category: Category.BONUS },
    { id: 'hanford-site', name: "Hanford Site", category: Category.BONUS },
    { id: 'mount-rainier', name: "Mount Rainier", category: Category.BONUS },
    { id: 'marfa-lights', name: "Marfa Lights", category: Category.BONUS },
    { id: 'aurora-ufo-crash', name: "Aurora UFO crash", category: Category.BONUS },
  ].map(stub => ({
    ...stub,
    subtitle: "Investigation Pending",
    location: "Varies",
    driveTime: "Varies",
    visitDuration: "Varies",
    cost: "Varies",
    groupSize: "Varies",
    bestTime: "Varies",
    dangerLevel: DangerLevel.MODERATE,
    dangerDescription: "RESEARCH REQUIRED",
    gps: "0,0",
    what3words: "///pending.investigation.report",
    story: ["This location is currently under investigation by the SLCTrips team. A full report is pending."],
    evidence: {
        title: "Preliminary Intel",
        points: ["Reports of anomalous activity are being compiled."]
    },
    hook: "Further research is required to understand the full scope of the mystery here.",
    media: [],
    safety: {
      title: "Dan Says: Wander Wisely",
      points: ["Full safety briefing will be available once our field report is complete."]
    },
    olympianInsight: {
        character: "Field Office",
        quote: "Patience, investigator. Good intelligence takes time. This file will be declassified soon.",
        characterImage: './assets/otter-wizard.png',
    },
    equipment: [{ name: "Standard Field Kit", reason: "Be prepared for anything until more is known." }],
    relatedDestinationIds: [],
  }))
];
