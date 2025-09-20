import React from 'react';
import { Dossier, MediaLink } from '../types';

// Fix: Converted JSX to React.createElement calls to be valid in a .ts file.
export const dossiers: Dossier[] = [
  {
    id: 'ted-bundy',
    name: 'Theodore Robert Bundy',
    subtitle: 'An in-depth profile of one of America\'s most infamous serial killers, covering his methods, timeline, and the investigation that brought him down.',
    category: 'Serial Killer',
    summary: [
        { label: "Full Name", value: "Theodore Robert Bundy (born Cowell)" },
        { label: "Aliases", value: ["Ted Bundy", "Theodore Robert Cowell", "Rex Bundy", "Kenneth Raymond Misner", "Theodore Robert Nelson"] },
        { label: "Born", value: "November 24, 1946" },
        { label: "Age (1977)", value: "30" },
        { label: "Height", value: "5'11\" to 6'0\"" },
        { label: "Weight", value: "145 to 170 pounds" },
        { label: "Build", value: "Medium slender, athletic" },
        { label: "Hair", value: "Dark brown, wavy, worn in various styles" },
        { label: "Characteristics", value: "Left-handed, intelligent, glib talker, enjoys marijuana, prefers Volkswagen Bugs." }
    ],
    sections: [
      {
        title: 'I. Identity and Physical Description',
        content: React.createElement("div", { className: "prose prose-sm max-w-none" },
            React.createElement("p", null, React.createElement("strong", null, "Name and Aliases")),
            React.createElement("p", null, "Theodore Robert Bundy was born on November 24, 1946, in Burlington, Vermont. He was approximately 30 years old in late 1977. Aliases listed include: Ted Bundy, Theodore Robert Cowell (true name), Ted Cowell, Rex Bundy, Kenneth Raymond Misner, Theodore Robert Nelson, Teddy Bundy, and Teddy Cowell."),
            React.createElement("p", null, React.createElement("strong", null, "Physical Description")),
            React.createElement("ul", null,
                React.createElement("li", null, React.createElement("strong", null, "Race/Sex:"), " White male."),
                React.createElement("li", null, React.createElement("strong", null, "Age:"), " 30 (as of 1977)."),
                React.createElement("li", null, React.createElement("strong", null, "Height:"), " 5'11\" to 6'0\"."),
                React.createElement("li", null, React.createElement("strong", null, "Weight:"), " 145 to 155 pounds. One document lists him as 5'11\" and 170 pounds with a medium build."),
                React.createElement("li", null, React.createElement("strong", null, "Build:"), " Medium slender, broad shoulders, wiry, muscular, and athletic."),
                React.createElement("li", null, React.createElement("strong", null, "Complexion:"), " Sallow, prison pallor."),
                React.createElement("li", null, React.createElement("strong", null, "Hair:"), " Dark brown, normally wavy, parted right side, currently collar length, sideburns to earlobe, hair partially covers ears. His hair has also been described as dark dusty brown, highlighted with lighter brown when in the sun. He has worn hair greased down and combed back, and it can be parted on the right or left side. It is very wiry when washed, appearing almost like an Afro, but is easily manageable and he wears it in various styles."),
                React.createElement("li", null, React.createElement("strong", null, "Face:"), " Moderately elongated face, prominent wrinkles extending down from the edge of the nostrils, and wrinkles in his forehead."),
                React.createElement("li", null, React.createElement("strong", null, "Nose:"), " Thin, sharp, with the tip slightly down."),
                React.createElement("li", null, React.createElement("strong", null, "Voice:"), " No noticeable accent, possessing a soft, quiet voice, but speaks in a determined manner and grits his teeth when angry. He speaks intellectually and sophisticatedly, occasionally stuttering with a slight speech impediment, and can imitate a certain degree of a British accent."),
                React.createElement("li", null, React.createElement("strong", null, "Teeth:"), " Good and white, with a warm reassuring smile. He currently has a sensitive root canal in his upper back tooth."),
                React.createElement("li", null, React.createElement("strong", null, "Scars/Marks:"), " None noticeable."),
                React.createElement("li", null, React.createElement("strong", null, "Characteristics:"), " He is described as a ", React.createElement("strong", null, "health nut"), " who enjoys natural foods. He is extremely conscious about self-cleanliness and appearance, a glib talker, quick, well-coordinated, fast on his feet, very intelligent, and in excellent physical condition. Bundy is left-handed, uses and enjoys marijuana, and formally drank excessive, heavy-type beer. He has a preference for ", React.createElement("strong", null, "Volkswagen bugs"), ".")
            )
        )
      },
      {
        title: 'II. Criminal Context and Scope',
        content: React.createElement("div", { className: "prose prose-sm max-w-none" },
            React.createElement("p", null, React.createElement("strong", null, "Utah Activity and Sites")),
            React.createElement("p", null, "Bundy operated in Utah during the period of September 1974 through August 1975, connected to ", React.createElement("strong", null, "8+ Utah murders"), ". He lived at ", React.createElement("strong", null, "565 1st Avenue, Salt Lake City, UT 84103"), ", during this time; this location is classified as a \"Serial Killer Base\" with a ", React.createElement("strong", null, "Darkness Level of 4/5"), "."),
            React.createElement("p", null, "Specific locations connected to his activities include:"),
            React.createElement("ul", null,
                React.createElement("li", null, React.createElement("strong", null, "Fashion Place Mall"), " (Bundy Abduction Attempt). Carol DaRonch was approached by a man while window-shopping at Fashion Place Mall in Murray, Utah, on November 8, 1974, between 7:00 and 7:30 p.m."),
                React.createElement("li", null, React.createElement("strong", null, "Viewmont High School"), " (Debra Kent Abduction). The abduction of Debra Kent occurred in the Farmington/Bountiful area near Viewmont High School. Bundy later admitted to taking and killing her, although her remains were never found despite searches in the Salt Lake mountains."),
                React.createElement("li", null, React.createElement("strong", null, "Utah Residence"), " (565 1st Ave).")
            ),
            React.createElement("p", null, React.createElement("strong", null, "National Scope and Status")),
            React.createElement("p", null, "In February 1978, the ", React.createElement("strong", null, "FBI placed Ted Bundy on the Ten Most Wanted Fugitives list"), ". At that time, the FBI suspected him of killing three dozen women. He is nationally known as the killer who represented the \"all-American boy, the boy next door\".")
        )
      },
      {
        title: 'III. Legal Proceedings and Evidence Controversies (Utah)',
        content: React.createElement("div", { className: "prose prose-sm max-w-none" },
            React.createElement("p", null, React.createElement("strong", null, "Kidnapping Trial (Utah)")),
            React.createElement("p", null, "In November 1977, Bundy was waiting to hear if evidence from two Utah crimes would be admitted in his murder trial in Aspen, CO. The Utah State Supreme Court heard his appeal of his federal kidnapping conviction in December 1978, where his defense attorney requested a new trial."),
            React.createElement("p", null, React.createElement("strong", null, "The DaRonch Identification Report Controversy")),
            React.createElement("p", null, "A significant issue in his case involved the alleged ", React.createElement("strong", null, "suppression of a police report"), " related to victim Carol DaRonch's initial viewing of Bundy's photograph."),
            React.createElement("ul", null,
                React.createElement("li", null, React.createElement("strong", null, "Released Report (September 1, 1975):"), " This version stated that after pulling out Bundy's picture and handing it back, DaRonch said, \"I really don't know, I can't be sure, but it does look a lot like him.\" She reportedly said she would be willing to view him in person in a lineup and felt \"rather confident\" she could identify him. This report conformed substantially with Detective Jerry Thompson's trial testimony."),
                React.createElement("li", null, React.createElement("strong", null, "Suppressed Report (May 24, 1977 disclosure):"), " This earlier, non-released version of Detective Thompson's report stated DaRonch gave the pictures back, stating, ", React.createElement("strong", null, "\"I don't see anyone in there that resembles him.\""), " When asked why she pulled out Bundy's picture, she replied, \"I don't know, aah, I guess it looks something like him.\" Crucially, this report quotes her as saying ", React.createElement("strong", null, "\"she really just didn't know, she didn't think she could identify him if she saw him again or not,\""), " and notes Thompson's opinion that she was a ", React.createElement("strong", null, "\"very poor witness\""), "."),
                React.createElement("li", null, React.createElement("strong", null, "Prejudice:"), " The defense argued that the suppressed report gave the distinct impression that DaRonch did not identify Bundy and expressed doubt about a future identification, contrasting sharply with the \"official\" version, which suggested confidence in a lineup identification. Disclosure of the suppressed report would have been of ", React.createElement("strong", null, "great value to the defense"), " for cross-examination. The failure to disclose this exculpatory evidence represents governmental misconduct and violated due process.")
            ),
            React.createElement("p", null, React.createElement("strong", null, "Florida Trial Developments")),
            React.createElement("p", null, "The start of Bundy's Florida trial was postponed indefinitely in late 1978 after the Florida Supreme Court requested that Judge John Rudd show cause why he did not recuse himself. The postponement was partly agreed upon because jurors would not want to hear his case over the upcoming holidays. In March 1979, the prosecutor moved to ", React.createElement("strong", null, "deny Bundy a trip to the dentist"), " because changes to his teeth might damage the usefulness of bite mark evidence.")
        )
      },
      {
        title: 'IV. Escape from Garfield County Jail (Glenwood Springs, CO)',
        content: React.createElement("div", { className: "prose prose-sm max-w-none" },
            React.createElement("p", null, "Bundy escaped from the Garfield County Jail in Glenwood Springs, Colorado, on ", React.createElement("strong", null, "December 31, 1977"), ", between 10:00 p.m. and 12:30 a.m."),
            React.createElement("p", null, React.createElement("strong", null, "Details of the Escape")),
            React.createElement("ol", null,
                React.createElement("li", null, React.createElement("strong", null, "Preparation:"), " Inmate Frank Perry, the jailer on duty, stated that on December 30, 1977, he spoke with Bundy, who said he wasn't feeling well and was going to \"turn in early\". Bundy also informed Perry that he had food left in his cell from the day before, leading Perry to leave his lunch letter on the food door rather than delivering it, as Bundy was thought to be sleeping."),
                React.createElement("li", null, React.createElement("strong", null, "The Dummy:"), " Perry returned to Bundy's cell (#5) between 11:30 a.m. and 12:00 p.m. on December 31, 1977, shook what he thought was Bundy in the bunk, and discovered a \"dummy\". The dummy was constructed using the arm of a shirt sleeve stuffed with paper, a wastebasket used to form shoulders, and books used to create the appearance of a body and legs, all covered by a blanket."),
                React.createElement("li", null, React.createElement("strong", null, "Exit Route:"), " Perry took a step ladder and discovered the light fixture was loose and moved to one side. Perry shined a flashlight through the approximately 12\" x 12\" hole in the ceiling of Cell #5 and observed the Garfield County Jail blanket and Bundy's transistor radio. Robert Morrison, the off-duty jailer, later worked his way into the ceiling space and observed a hole in the plaster ceiling leading into the jail apartment. Bundy went through the 12\" x 12\" hole in the cell ceiling, crawled across the ceiling, broke through the plaster ceiling in the jail apartment, and ", React.createElement("strong", null, "exited the building through the apartment side door"), "."),
                React.createElement("li", null, React.createElement("strong", null, "Missing Items:"), " Robert Morrison discovered that his ", React.createElement("strong", null, "muzzle-loading rifle and derringer pistol"), " were missing from the closet in the Garfield County Jail apartment. A flashlight was also discovered in the ceiling space, which Morrison stated was not there prior to an earlier inspection."),
                React.createElement("li", null, React.createElement("strong", null, "Fugitive Status:"), " A warrant for the arrest of Theodore Robert Bundy was issued on February 21, 1978, for the charge of escape (C.R.S. 18-8-208). Bail was set at ", React.createElement("strong", null, "$100,000.00"), ". Law enforcement requested that he be considered ", React.createElement("strong", null, "armed and dangerous"), " and an escape risk. In September 1978, a report detailed how he traveled between Chicago, Ann Arbor, and Tallahassee after his escape.")
            )
        )
      },
      {
        title: 'V. Media and Cultural Reference',
        content: React.createElement("div", { className: "prose prose-sm max-w-none" },
            React.createElement("p", null, React.createElement("strong", null, "Dark Tourism Sites")),
            React.createElement("p", null, "Bundy's connection to Utah crime scenes makes his locations a point of interest for dark tourism projects. His Utah trail locations (Fashion Place Mall, Viewmont High, Utah residence) are categorized as having a 4/5 Darkness Level and are suitable for public viewing only."),
            React.createElement("p", null, React.createElement("strong", null, "Folklore and Pop Culture")),
            React.createElement("p", null, "Folklore surrounding Bundy persists in Utah, often concerning geographical location (Davis County/Salt Lake) and the macabre. Stories often focus on ", React.createElement("strong", null, "\"too close to call\" encounters"), " with Bundy, serving to educate others on things to look out for, fulfilling one of Bascom's functions of folklore. Stories include accounts of individuals who knew someone who was asked out by Bundy in his ", React.createElement("strong", null, "yellow bug"), " car but refused a second date due to a \"super nasty feeling\"."),
            React.createElement("p", null, React.createElement("strong", null, "Podcast Coverage")),
            React.createElement("p", null, "Bundy's crimes are covered by multiple true crime podcasts, including:"),
            React.createElement("ul", null,
                React.createElement("li", null, React.createElement("strong", null, "Hunted: Inside Ted Bundy's Trail of Terror"), ", which is listed as a full partnership for the regional Dark Tourism project."),
                React.createElement("li", null, React.createElement("strong", null, "Serial Killers"), " (Parcast), which featured episodes 23-25 covering Bundy."),
                React.createElement("li", null, React.createElement("strong", null, "True Crime Garage"), ", which also covered Bundy.")
            )
        )
      }
    ],
    mediaArchive: [
        { type: "Watch Now", title: "Conversations with a Killer: The Ted Bundy Tapes", url: "https://www.netflix.com/title/80218450" },
        { type: "Watch Now", title: "Ted Bundy: Falling for a Killer", url: "https://www.primevideo.com/detail/Ted-Bundy-Falling-for-a-Killer/0S3R8A6CMU674IW5281Y0MGOI8" },
        { type: "Watch Now", title: "Extremely Wicked, Shockingly Evil and Vile", url: "https://www.netflix.com/title/80237742" },
        { type: "Watch Now", title: "No Man of God", url: "https://www.rljefilms.com/press/no-man-of-god/" },
        { type: "Watch Now", title: "ABC 20/20 — “Bundy” (2019)", url: "https://www.imdb.com/title/tt9664274/" },
        { type: "Watch Now", title: "ABC 20/20 — “Life with Bundy” (2020)", url: "https://abc.com/shows/2020/episode-guide/2020-01/31-life-with-bundy" },
        { type: "Archival Video", title: "ABC News: Arrest & Utah Conviction", url: "https://abcnews.go.com/2020/video/ted-bundy-arrested-found-guilty-kidnapping-utah-part-61111155" },
        { type: "Archival Video", title: "KSL TV: Bundy in Utah: Myth-busting", url: "https://ksltv.com/youtube_videos/video-ted-bundy-myths-folklore-surrounds-case-of-first-utah-victim-50-years-later/" },
        { type: "Archival Video", title: "KSL TV — Cold: “Blamed on Bundy”", url: "https://ksltv.com/youtube_videos/video-blamed-on-bundy-cold-podcast-challenges-popular-theory-in-nancy-baird-cold-case/" },
        { type: "Photo & Document Archives", title: "Florida Memory — Bundy Photo Gallery", url: "https://www.floridamemory.com/discover/historical_records/ted-bundy" },
        { type: "Photo & Document Archives", title: "Wikimedia Commons — Category: Ted Bundy", url: "https://commons.wikimedia.org/wiki/Category:Ted_Bundy" },
        { type: "Photo & Document Archives", title: "FBI Records: The Vault — Ted Bundy File", url: "https://vault.fbi.gov/ted-bundy" },
        { type: "Photo & Document Archives", title: "University of Utah Special Collections", url: "https://archivespace.lib.utah.edu/repositories/3/archival_objects/134061" }
    ]
  },
  {
    id: 'susan-powell-case',
    name: 'The Disappearance of Susan Powell',
    subtitle: 'The full case file on one of Utah\'s most tragic and high-profile unsolved disappearances, exhaustively documented by the "Cold" podcast.',
    category: 'Unsolved Mystery',
    summary: [
        { label: "Case Status", value: "Missing/endangered since Dec 7, 2009" },
        { label: "Investigating Agencies", value: "Utah DPS/BCI & West Valley City PD" },
        { label: "Primary Suspect", value: "Josh Powell (deceased)" },
        { label: "Key Locations", value: ["West Valley City, UT", "Simpson Springs, UT", "Topaz Mountain, UT"] },
        { label: "TK003 Darkness Level", value: "5/5" }
    ],
    sections: [
      {
        title: 'Case Overview',
        content: React.createElement("div", { className: "prose prose-sm max-w-none" },
            React.createElement("p", null, "The disappearance of Susan Powell is one of Utah's most high-profile and tragic unsolved cases. On December 7, 2009, she vanished from her home in West Valley City. Her husband, Josh Powell, claimed he had taken their two young sons on a spontaneous, late-night camping trip in the freezing desert at Simpson Springs, an alibi that was widely disbelieved by investigators."),
            React.createElement("p", null, "Despite extensive searches in remote areas like the Topaz Mountain region, no trace of Susan has ever been found. The investigation was marked by Josh Powell's uncooperative and suspicious behavior. The case reached a horrific conclusion on February 5, 2012, when Josh Powell killed himself and his two sons, Charlie and Braden, in a deliberately set house fire in Graham, Washington, during a supervised custody visit."),
            React.createElement("p", null, "The case was meticulously documented in the first season of the KSL podcast ", React.createElement("em", null, "Cold"), ", which brought global attention to the mystery and the systemic failures that preceded the final tragedy. In 2013, West Valley City police officially closed their active investigation. Susan Powell remains listed as a missing person, presumed to be a victim of homicide.")
        )
      }
    ],
    mediaArchive: [
        { type: "Primary (Deep-dive)", title: "KSL's Cold Podcast — Season 1 Hub", url: "https://thecoldpodcast.com/season-1/" },
        { type: "TV & Documentaries", title: "Crime Junkie — “Susan Powell” Episode", url: "https://crimejunkiepodcast.com/susan-powell/" },
        { type: "TV & Documentaries", title: "Disappeared (S4E7) — “A Fateful Friendship”", url: "https://www.investigationdiscovery.com/show/disappeared-investigation-discovery" },
        { type: "Archival Video", title: "COLD: Mystery Metal Experiment", url: "https://ksltv.com/local-news/cold-new-experiment-aims-to-identify-mystery-metal-evidence-in-susan-powell-cold-case/712579/" },
        { type: "Timelines & Official Records", title: "Utah BCI — Official Missing Person Entry", url: "https://bci.utah.gov/missing-persons/susancox-powell/" },
        { type: "Timelines & Official Records", title: "KSL: Investigation Closed & Records Released (2013)", url: "https://www.ksl.com/article/25256495" },
        { type: "Timelines & Official Records", title: "AP/Seattle Times — 2012 Murder-Suicide Coverage", url: "https://www.seattletimes.com/seattle-news/susans-husband-josh-powell-kills-himself-sons/" },
        { type: "Location Context", title: "BLM — Simpson Springs Campground", url: "https://www.blm.gov/visit/simpson-springs-campground" },
        { type: "Location Context", title: "Utah Geological Survey — Topaz Mountain Guide", url: "https://geology.utah.gov/popular/places-to-go/rock-mineral-collecting-sites/the-rockhounder-topaz-at-topaz-mountain-juab-county/" }
    ]
  },
  {
    id: 'elizabeth-smart-case',
    name: 'The Elizabeth Smart Abduction',
    subtitle: 'The 2002 kidnapping of a 14-year-old from her Salt Lake City home, her nine months in captivity, and her dramatic rescue.',
    category: 'Kidnapping & Captivity Cases',
    summary: [
        { label: "Case Status", value: "Survivor; captors convicted" },
        { label: "Abduction Date", value: "June 5, 2002" },
        { label: "Rescue Date", value: "March 12, 2003" },
        { label: "Captors", value: ["Brian David Mitchell", "Wanda Barzee"] },
        { label: "Duration", value: "9 months" },
    ],
    sections: [
        {
            title: 'Case Overview: Abduction, Captivity, and Rescue',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "On June 5, 2002, 14-year-old Elizabeth Smart was abducted at knifepoint from her bedroom in the affluent Federal Heights neighborhood of Salt Lake City by Brian David Mitchell, aided by his wife, Wanda Barzee. For the initial months of her captivity, she was held at a primitive, well-hidden campsite in Dry Creek Canyon, just miles from her home."),
                React.createElement("p", null, "A massive search effort ensued, capturing national attention. After nine months, on March 12, 2003, alert citizens recognized Mitchell and Barzee from media reports on a public street in Sandy, Utah, leading to their arrest and Elizabeth's safe recovery. The case is notable for the brazen nature of the crime, the victim's incredible resilience, and her subsequent advocacy work.")
            )
        },
        {
            title: 'Legal Aftermath and Recent Developments',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "Brian David Mitchell was convicted in federal court in December 2010 of interstate kidnapping and unlawful transportation of a minor. In 2011, he was sentenced to life in prison without the possibility of parole."),
                React.createElement("p", null, "Wanda Barzee pleaded guilty to her role in the kidnapping and received a 15-year sentence in federal prison, which ran concurrently with a state sentence. She was released on parole in 2018. In 2025, Barzee was arrested for a parole violation after a registered sex offender reportedly visited parks with her."),
            )
        },
        {
            title: 'Elizabeth Smart Foundation',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "In the years following her rescue, Elizabeth Smart has become a powerful advocate for survivors of sexual violence. She established the Elizabeth Smart Foundation, which is dedicated to driving social change and ending sexual violence through education and empowerment."),
                React.createElement("p", null, "The foundation's programs utilize a thoughtful, trauma-informed approach, incorporating the perspectives of survivors to create a more compassionate society where victims are heard and supported.")
            )
        },
    ],
    mediaArchive: [
        { type: "Timelines & Official Records", title: "CNN: Rescue (Mar 13, 2003)", url: "https://edition.cnn.com/2003/US/West/03/12/smart.kidnapping/" },
        { type: "Timelines & Official Records", title: "CNN: Abduction (June 6, 2002)", url: "https://www.cnn.com/2002/US/06/05/utah.teenager/" },
        { type: "Timelines & Official Records", title: "HISTORY: This Day in History", url: "https://www.history.com/this-day-in-history/police-recover-elizabeth-smart-and-arrest-her-abductors" },
        { type: "Primary (Deep-dive)", title: "Wikipedia: Elizabeth Smart", url: "https://en.wikipedia.org/wiki/Elizabeth_Smart" },
        { type: "TV & Documentaries", title: "I Am Elizabeth Smart (2017, Lifetime)", url: "https://www.lifetimemovieclub.com/movies/i-am-elizabeth-smart-2" },
        { type: "TV & Documentaries", title: "Elizabeth Smart: Autobiography (A&E, 2017)", url: "https://www.amazon.com/Elizabeth-Smart-Autobiography-Pt-HD/dp/B084CTFTJN" },
        { type: "Primary (Deep-dive)", title: "Memoir – My Story (2013)", url: "https://us.macmillan.com/books/9781466835405/mystory" },
        { type: "Primary (Deep-dive)", title: "Elizabeth Smart Foundation", url: "https://www.elizabethsmartfoundation.org/" },
        { type: "Timelines & Official Records", title: "People: Where are they now?", url: "https://people.com/where-are-elizabeth-smart-kidnappers-now-11747378" },
    ]
  },
  {
    id: 'daybell-vallow-case',
    name: 'The Daybell-Vallow Murders',
    subtitle: 'A complex case of conspiracy, murder, and cult-like doomsday beliefs that led to the deaths of Tylee Ryan, JJ Vallow, and Tammy Daybell.',
    category: 'Cults, Extremism & Terrorism',
    summary: [
        { label: "Case Status", value: "Solved; perpetrators convicted" },
        { label: "Perpetrators", value: ["Chad Daybell", "Lori Vallow Daybell"] },
        { label: "Victims", value: ["Tylee Ryan", "Joshua 'JJ' Vallow", "Tammy Daybell"] },
        { label: "Key Locations", value: ["Rexburg, ID", "Kauai, HI", "Chandler, AZ"] },
        { label: "TK003 Darkness Level", value: "5/5" }
    ],
    sections: [
        {
            title: 'Case Overview: Doomsday Beliefs and a String of Deaths',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "The Daybell-Vallow case is a sprawling and tragic saga that spans multiple states and involves a series of suspicious deaths. The story centers on Lori Vallow and her fifth husband, Chad Daybell, a doomsday author. After meeting in 2018, the pair became deeply involved in a fringe belief system involving 'zombies,' 'light and dark spirits,' and preparing for the apocalypse."),
                React.createElement("p", null, "This ideology allegedly provided the religious justification for a conspiracy of murder. In 2019, a string of deaths surrounded the couple: Lori's fourth husband, Charles Vallow, was shot and killed by her brother; Chad's first wife, Tammy Daybell, died under suspicious circumstances; and Lori's two children, Tylee Ryan (16) and JJ Vallow (7), vanished. The search for the children culminated in the discovery of their remains on Chad Daybell's Idaho property in June 2020.")
            )
        },
        {
            title: 'Legal Aftermath: Convictions and Sentencing',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, React.createElement("strong", null, "Lori Vallow Daybell"), " was convicted in Idaho on May 12, 2023, for the murders of her two children and conspiracy to murder Tammy Daybell. She was sentenced to life in prison without the possibility of parole on July 31, 2023. She faces separate charges in Arizona related to the death of Charles Vallow."),
                React.createElement("p", null, React.createElement("strong", null, "Chad Daybell"), " was found guilty of the murders of Tylee, JJ, and Tammy. On May 31, 2024, an Idaho jury sentenced him to death."),
                React.createElement("p", null, "The trials revealed a horrifying level of manipulation and a belief system that labeled the victims as 'zombies' or dark spirits who needed to be removed to fulfill the couple's spiritual prophecies.")
            )
        },
    ],
    mediaArchive: [
        { type: "Timelines & Official Records", title: "NPR: Lori Vallow Daybell is sentenced (July 31, 2023)", url: "https://www.npr.org/2023/07/31/1191058640/vallow-lori-daybell-sentence-murder-doomsday" },
        { type: "Timelines & Official Records", title: "AP News: Chad Daybell sentenced to death (June 1, 2024)", url: "https://apnews.com/article/a294ee6efc7ecb814f67d0e5f5daaf98" },
        { type: "Primary (Deep-dive)", title: "KIVI-TV: Probable Cause Affidavit Details", url: "https://www.kivitv.com/news/east-idaho-news-probable-cause-details-discovery-of-tylee-and-jjs-bodies" },
        { type: "Timelines & Official Records", title: "Idaho Statesman: Full Case & Trial Coverage", url: "https://www.idahostatesman.com/news/local/crime/article275218776.html" },
        { type: "TV & Documentaries", title: "Dateline NBC: The Doomsday Files", url: "https://www.nbc.com/dateline/video/the-secrets-of-lori-vallow-daybell/NBCE_DATELINE_23237_16x9/b7010a30-c3d9-3129-bdef-c8d76e336d39" },
        { type: "TV & Documentaries", title: "48 Hours: The Secrets of Chad & Lori Daybell", url: "https://www.cbs.com/shows/video/gSAE4bA9F9tXXb4T6LM69D_Nmc45z598/" },
        { type: "Primary (Deep-dive)", title: "Hidden: A True Crime Podcast (Extensive Series)", url: "https://hiddentruecrime.com/" },
        { type: "Timelines & Official Records", title: "People Magazine: Case Summaries", url: "https://people.com/what-did-lori-vallow-daybell-do-11692897" },
    ]
  },
  {
    id: 'ruby-ridge-siege',
    name: 'The Ruby Ridge Standoff',
    subtitle: 'The 11-day federal siege of the Weaver family cabin in August 1992, a landmark event in U.S. law enforcement history.',
    category: 'Cults, Extremism & Terrorism',
    summary: [
        { label: "Event", value: "Federal Siege" },
        { label: "Dates", value: "August 21–31, 1992" },
        { label: "Location", value: "Near Naples, Boundary County, Idaho" },
        { label: "Fatalities", value: ["Vicki Weaver", "Samuel Weaver", "Deputy U.S. Marshal William F. Degan"] },
        { label: "Significance", value: "Triggered multiple federal investigations and congressional hearings into use of force." }
    ],
    sections: [
        {
            title: 'Case Overview: The 11-Day Siege',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "In August 1992, a remote mountaintop cabin in Boundary County, Idaho, became the site of an 11-day siege between the family of Randy Weaver and federal agents from the U.S. Marshals Service (USMS) and the FBI. The conflict began over Weaver's failure to appear in court on federal firearms charges."),
                React.createElement("p", null, "An initial encounter on August 21 resulted in a shootout that killed Weaver's 14-year-old son, Samuel, and Deputy U.S. Marshal William Degan. The following day, an FBI Hostage Rescue Team sniper, operating under controversial rules of engagement, shot and killed Randy's wife, Vicki Weaver, as she stood in the cabin doorway holding her infant daughter. The standoff concluded with Weaver's surrender on August 31."),
            )
        },
        {
            title: 'Federal Investigations & Aftermath',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "The events at Ruby Ridge sparked significant public controversy and led to multiple federal investigations. A 1994 Department of Justice task force report and subsequent Senate Subcommittee hearings in 1995 critically examined the conduct of the USMS and FBI, particularly the altered rules of engagement that permitted lethal force without an immediate threat."),
                React.createElement("p", null, "While Randy Weaver was acquitted of the most serious charges related to Degan's death, the incident became a landmark case, prompting reforms in federal law enforcement protocols and fueling the anti-government extremist movement of the 1990s. The Weaver family later won a significant wrongful death lawsuit against the government."),
            )
        },
        {
          title: 'Visitor & Access Advisory',
          content: React.createElement("div", { className: "prose prose-sm max-w-none" },
              React.createElement("p", {className: "font-bold text-slctrips-red"}, "The Weaver family cabin and the surrounding property at Ruby Ridge are private. There is no public access, memorial, or interpretive site."),
              React.createElement("p", null, "This location is included in the compendium for its historical significance, not as a destination for on-site visitation. The context of this case is best understood through the official reports, documentaries, and other media sources linked in the archive.")
          )
      },
    ],
    mediaArchive: [
        { type: "Primary (Deep-dive)", title: "Slate Podcasts — Standoff: What Happened at Ruby Ridge", url: "https://podcasts.apple.com/us/podcast/standoff-what-happened-at-ruby-ridge/id1806400754" },
        { type: "TV & Documentaries", title: "PBS American Experience — “Ruby Ridge”", url: "https://www.pbs.org/wgbh/americanexperience/features/bonus-video/ruby-ridge-chapter-1/" },
        { type: "Timelines & Official Records", title: "DOJ: 1997 Press Release on Investigation", url: "https://www.justice.gov/archive/opa/pr/1997/August97/337crm.htm" },
        { type: "Timelines & Official Records", title: "DOJ OIG: Special Report (Discipline/After-Action)", url: "https://oig.justice.gov/sites/default/files/archive/special/0211/chapter5.htm" },
        { type: "Primary (Deep-dive)", title: "UMKC Famous Trials: Ruby Ridge (Docs & Timeline)", url: "https://famous-trials.com/rubyridge" },
        { type: "Primary (Deep-dive)", title: "Wikipedia: Ruby Ridge standoff", url: "https://en.wikipedia.org/wiki/Ruby_Ridge_standoff" },
    ]
  },
  {
    id: 'hi-fi-murders-case',
    name: 'The Hi-Fi Murders',
    subtitle: 'The brutal 1974 robbery-turned-torture and murder of five hostages in Ogden, Utah, a case infamous for its sadistic cruelty.',
    category: 'Infamous Murders',
    summary: [
        { label: "Date", value: "April 22, 1974" },
        { label: "Location", value: "2323 Washington Blvd, Ogden, UT" },
        { label: "Perpetrators", value: ["Dale Selby Pierre", "William Andrews"] },
        { label: "Victims (Killed)", value: ["Stanley Walker", "Michelle Ansley", "Carol Naisbitt"] },
        { label: "Victims (Survived)", value: ["Orren Walker", "Cortney Naisbitt"] },
        { label: "Outcome", value: "Perpetrators convicted and executed." }
    ],
    sections: [
        {
            title: 'Case Overview: Robbery, Torture, and Murder',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "On the evening of April 22, 1974, a robbery at the Hi-Fi Shop on Washington Boulevard in Ogden, Utah, escalated into one of the state's most horrific crimes. Two U.S. Air Force airmen from nearby Hill Air Force Base, Dale Selby Pierre and William Andrews, took five people hostage: employees Stanley Walker and Michelle Ansley, and three people who had arrived by chance—Stanley's father Orren Walker, and 16-year-old Cortney Naisbitt with his mother, Carol."),
                React.createElement("p", null, "The five hostages were taken to the store's basement, bound, and subjected to sadistic torture. They were forced to drink liquid Drano before being shot in the head. Stanley Walker, Michelle Ansley, and Carol Naisbitt were killed. Orren Walker and Cortney Naisbitt miraculously survived but suffered devastating, lifelong injuries. The sheer brutality and randomness of the violence left a permanent scar on the community.")
            )
        },
        {
            title: 'Investigation and Justice',
            content: React.createElement("div", { className: "prose prose-sm max-w-none" },
                React.createElement("p", null, "The investigation quickly led to Hill Air Force Base after a storage unit rented by Pierre was found to contain stolen stereo equipment and evidence from the crime scene. Both Pierre and Andrews were arrested, convicted of first-degree murder, and sentenced to death."),
                React.createElement("p", null, "After years of appeals, Dale Selby Pierre was executed by lethal injection on August 28, 1987. William Andrews followed, also by lethal injection, on July 30, 1992. The case's long legal journey highlighted debates over capital punishment and the enduring trauma experienced by the survivors and victims' families.")
            )
        },
        {
          title: 'Visitor & Access Advisory',
          content: React.createElement("div", { className: "prose prose-sm max-w-none" },
              React.createElement("p", {className: "font-bold text-slctrips-red"}, "The building at 2323 Washington Boulevard is an active commercial property. There is no public access to the interior or the basement where the crime occurred."),
              React.createElement("p", null, "Visitation should be limited to respectful, exterior viewing from the public right-of-way only. Please do not disturb the current tenants or businesses operating at this location.")
          )
      },
    ],
    mediaArchive: [
        { type: "Primary (Deep-dive)", title: "Book: Victim: The Other Side of Murder by Gary Kinder", url: "https://books.google.com/books/about/Victim.html?id=sEU6mA9_wnMC" },
        { type: "TV & Documentaries", title: "Criminal — Ep. 89 “The Hi-Fi Murders”", url: "https://www.imdb.com/title/tt20133288/" },
        { type: "TV & Documentaries", title: "Aftermath: A Test of Love (1991 TV Movie)", url: "https://www.imdb.com/title/tt0101277/" },
        { type: "Timelines & Official Records", title: "UPI Archives: Pierre Execution (1987)", url: "https://www.upi.com/Archives/1987/08/29/Utahs-first-execution-by-lethal-injection/4970557208000/" },
        { type: "Timelines & Official Records", title: "Deseret News: Andrews' 18 Years in Court (1992)", url: "https://www.deseret.com/1992/7/30/18996881/william-andrews-18-years-in-the-courts-april-1974-three/" },
        { type: "Timelines & Official Records", title: "Utah Supreme Court: State v. Andrews (1992)", url: "https://law.justia.com/cases/utah/supreme-court/1992/843-p-2d-1027.html" },
        { type: "Timelines & Official Records", title: "Federal Habeas: Andrews v. Shulsen (1984)", url: "https://law.justia.com/cases/federal/district-courts/FSupp/600/408/2380222/" }
    ]
  }
];