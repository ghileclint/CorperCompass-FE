// src/data/culture.js
// Central mock data source for the Cultural Guide feature. Swap for a
// real API call (via src/api/culture.api.js) later — components never
// hardcode state/culture info, they just read from here.

export const states = [
  {
    id: "kogi",
    name: "Kogi State",
    welcomeTitle: "Welcome to Kogi State",
    welcomeText:
      "Home to the vibrant Igala, Ebira, and Okun people. Discover their rich heritage.",
  },
  {
    id: "lagos",
    name: "Lagos State",
    welcomeTitle: "Welcome to Lagos State",
    welcomeText:
      "A fast-paced coastal state, home to the Yoruba people and a melting pot of cultures.",
  },
];

export const phraseCategories = [
  { id: "greetings", label: "Greetings" },
  { id: "interactions", label: "Interactions" },
  { id: "phrases", label: "Phrases" },
  { id: "common", label: "Common" },
];

export const phrasebooks = {
  kogi: [
    { id: "p1", phrase: "Ẹ káàárọ̀", translation: "Good morning", category: "greetings" },
    { id: "p2", phrase: "Ẹ káàsán", translation: "Good afternoon", category: "greetings" },
    { id: "p3", phrase: "Ẹ kú alẹ́", translation: "Good evening", category: "greetings" },
    { id: "p4", phrase: "Bawo ni?", translation: "How are you?", category: "interactions" },
    { id: "p5", phrase: "Dáadáa ni", translation: "I am fine", category: "interactions" },
    { id: "p6", phrase: "Ẹ dúpẹ́", translation: "Thank you", category: "phrases" },
    { id: "p7", phrase: "Jọ̀ọ́", translation: "Please", category: "phrases" },
    { id: "p8", phrase: "Ẹ ku isẹ́", translation: "Well done / thanks for your work", category: "common" },
  ],
  lagos: [
    { id: "p1", phrase: "Ẹ kú àárọ̀", translation: "Good morning", category: "greetings" },
    { id: "p2", phrase: "Báwo ni?", translation: "How are you?", category: "interactions" },
    { id: "p3", phrase: "Ẹ dúpẹ́", translation: "Thank you", category: "phrases" },
  ],
};

// intro and religiousSensitivity are {title, text} objects — matching
// what CustomsEtiquettePage renders them as (via CustomItem variant="info").
export const customsData = {
  kogi: {
    intro: {
      title: "Understanding local customs",
      text:
        "Respecting the traditions and norms of the Kogi people will ensure a peaceful and rewarding service year. Being mindful of these nuances helps build strong community relationships.",
    },
    dos: [
      { id: "d1", title: "Greet elders first", text: "Always acknowledge and greet the oldest person in the room before addressing others. It's a fundamental sign of respect." },
      { id: "d2", title: "Remove shoes when entering homes", text: "Unless explicitly told otherwise, take off your footwear before entering someone's living space to maintain cleanliness and respect." },
      { id: "d3", title: "Accept food offered politely", text: "Refusing a host's offer of food can be seen as offensive. Even if full, accept a small portion or graciously explain your dietary restrictions." },
    ],
    donts: [
      { id: "n1", title: "Don't eat with your left hand", text: "The left hand is traditionally considered unclean. Avoid using it for eating, handing over items, or greeting." },
      { id: "n2", title: "Don't point at people directly", text: "Using a single finger to point at someone is often viewed as rude or accusatory. Use an open hand instead if necessary." },
      { id: "n3", title: "Don't refuse food offered politely", text: "Refusing a host's offer of food can be seen as offensive. Even if full, accept a small portion or graciously explain your dietary restrictions." },
    ],
    religiousSensitivity: {
      title: "Religious sensitivity",
      text:
        "Kogi State has a diverse religious landscape. Dress modestly, especially when visiting rural areas or religious sites. Be mindful of prayer times and avoid scheduling meetings during significant religious observances.",
    },
  },
  lagos: {
    intro: {
      title: "Understanding local customs",
      text: "Lagos moves fast, but respect for elders and community norms still matters, especially outside business settings.",
    },
    dos: [{ id: "d1", title: "Greet before starting a conversation", text: "Skipping a greeting to jump straight into a request can come across as impolite, even in busy settings." }],
    donts: [{ id: "n1", title: "Don't rush elders", text: "Even in a fast-paced environment, showing impatience toward older people is considered disrespectful." }],
    religiousSensitivity: {
      title: "Religious sensitivity",
      text: "Lagos is religiously diverse. Be mindful of Friday prayer times and Sunday church services when scheduling.",
    },
  },
};
