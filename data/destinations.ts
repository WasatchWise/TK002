import { Destination, Category, FameLevel } from '../types';

export const destinations: Destination[] = [
  {
    id: 'monument-valley',
    name: "Monument Valley",
    subtitle: "John Ford's Cinematic Playground",
    category: Category.UTAH,
    location: "Navajo Nation, UT/AZ Border",
    driveTime: "5 hours from SLC",
    visitDuration: "3-5 hours",
    cost: "$20 per vehicle (subject to change)",
    groupSize: "Any",
    bestTime: "Sunrise or Sunset",
    fameLevel: FameLevel.LEGENDARY,
    fameDescriptor: "THE WESTERN BACKDROP",
    gps: "36.9826, -110.1107",
    what3words: "///classics.western.vista",
    story: [
      "Monument Valley is more than a landscape; it's a character in the story of the American West. Its iconic sandstone buttes, stretching up to 1,000 feet, have been immortalized by legendary director John Ford, who used this dramatic backdrop to define the entire Western genre.",
      "From John Wayne's classic quests to modern sci-fi epics, this sacred Navajo land has provided a canvas for some of Hollywood's most unforgettable moments. Driving the scenic loop or standing at John Ford's Point, you can't help but feel like you've stepped directly into a movie."
    ],
    moviesFilmed: {
        title: "Key Productions",
        movies: [
            { title: "The Searchers", posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Searchers_poster.jpg" },
            { title: "Stagecoach", posterUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Stagecoach_poster.jpg" },
            { title: "Forrest Gump", posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg" },
            { title: "The Lone Ranger", posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/The_Lone_Ranger_poster.jpg" },
            { title: "Westworld (HBO)", posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/6a/Westworld_season_1_poster.jpg" },
            { title: "Vacation", posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/VacationPoster.jpg" }
        ]
    },
    hook: "Stand where John Wayne stood and gaze upon the landscape that defined the American Western. This isn't just a park; it's the largest, most epic movie set on Earth.",
    media: [
      { youtubeId: "Agq2Ea_i_0M", title: "Forrest Gump Stops Running" },
      { youtubeId: "LgUm_p0tO7s", title: "John Ford's Monument Valley" }
    ],
    visitorTips: {
      title: "Cinematic Scout's Tips",
      points: [
        "This is on Navajo Nation land; a fee is required to enter the park.",
        "The 17-