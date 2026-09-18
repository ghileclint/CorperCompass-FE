/**
 * culture.js
 * -----------------------------------------------------------------------
 * TEMPORARY placeholder data for the Culture Guide feature, copied
 * word-for-word from the Figma frames (Cultural Guide dashboard,
 * Phrasebook, Customs & Etiquette).
 *
 * DELETE THIS FILE once culture.api.js is switched to LIVE MODE.
 * No component should import this directly — only culture.api.js does.
 * -----------------------------------------------------------------------
 */

export const MOCK_STATES = [
  {
    id: 'kogi',
    name: 'Kogi State',
    welcomeTitle: 'Welcome to Kogi State',
    welcomeText: 'Home to the vibrant Igala, Ebira, and Okun people. Discover their rich heritage.',
  },
  {
    id: 'lagos',
    name: 'Lagos State',
    welcomeTitle: 'Welcome to Lagos State',
    welcomeText: 'Placeholder — Lagos content has not been added to Figma yet.',
  },
  {
    id: 'kaduna',
    name: 'Kaduna State',
    welcomeTitle: 'Welcome to Kaduna State',
    welcomeText: 'Placeholder — Kaduna content has not been added to Figma yet.',
  },
];

// Category tabs shown above the phrase list on the Phrasebook page.
// ⚠️ Your screenshot cuts off the 4th tab label — I can only confirm
// "Greetings," "Interactions," and "Phrases" from what's visible. Replace
// 'category-4' below with the real label once you can see it in Figma.
export const PHRASE_CATEGORIES = [
  { id: 'greetings', label: 'Greetings' },
  { id: 'interactions', label: 'Interactions' },
  { id: 'phrases', label: 'Phrases' },
  { id: 'category-4', label: '[confirm label]' },
];

// Only Kogi has real content in the Figma file. Lagos/Kaduna are here so the
// state selector isn't empty when someone switches — flag with your team
// whether those two states need real Figma frames before launch.
export const MOCK_PHRASES = {
  kogi: [
    { id: 'p1', category: 'greetings', phrase: 'Ẹ káàárọ̀', translation: 'Good morning' },
    { id: 'p2', category: 'greetings', phrase: 'Ẹ káàárọ̀', translation: 'Good morning' },
    { id: 'p3', category: 'greetings', phrase: 'Ẹ káàárọ̀', translation: 'Good morning' },
    { id: 'p4', category: 'interactions', phrase: 'Ẹ dupe', translation: 'Thank you' },
    { id: 'p5', category: 'interactions', phrase: 'Ẹ dupe', translation: 'Thank you' },
    { id: 'p6', category: 'interactions', phrase: 'Ẹ dupe', translation: 'Thank you' },
    { id: 'p7', category: 'phrases', phrase: 'Bawo ni?', translation: 'How are you?' },
    { id: 'p8', category: 'phrases', phrase: 'Bawo ni?', translation: 'How are you?' },
    { id: 'p9', category: 'phrases', phrase: 'Bawo ni?', translation: 'How are you?' },
  ],
  lagos: [],
  kaduna: [],
};

export const MOCK_CUSTOMS = {
  kogi: {
    intro: {
      title: 'Understanding local customs',
      text: 'Respecting the traditions and norms of the Kogi people will ensure a peaceful and rewarding service year. Being mindful of these nuances helps build strong community relationships.',
    },
    dos: [
      {
        id: 'd1',
        title: 'Greet elders first',
        text: "Always acknowledge and greet the oldest person in the room first before addressing others. It's a fundamental sign of respect.",
      },
      {
        id: 'd2',
        title: 'Remove shoes when entering homes',
        text: "Unless explicitly told otherwise, take off your footwear before entering someone's living space to maintain cleanliness and respect.",
      },
      {
        id: 'd3',
        title: 'Accept food offered politely',
        text: "Refusing a host's offer of food can be seen as offensive. Even if full, accept a small portion or graciously explain your dietary restrictions.",
      },
    ],
    // NOTE: the 3rd "Don't" card in Figma has the exact same title/text as
    // the "Accept food offered politely" Do card above. That's copied
    // verbatim from the Figma frame — it looks like a content mistake on
    // the design side, not something to silently "fix" here. Worth
    // flagging to whoever owns the Figma file before this ships.
    donts: [
      {
        id: 'n1',
        title: "Don't eat with your left hand",
        text: 'The left hand is traditionally considered unclean. Avoid using it for eating, handing over items, or gesturing.',
      },
      {
        id: 'n2',
        title: "Don't point at people directly",
        text: 'Using a single finger to point at someone is often viewed as rude or accusatory. Use an open hand if necessary.',
      },
      {
        id: 'n3',
        title: 'Accept food offered politely',
        text: "Refusing a host's offer of food can be seen as offensive. Even if full, accept a small portion or graciously explain your dietary restrictions.",
      },
    ],
    religiousSensitivity: {
      title: 'Religious sensitivity',
      text: 'Kogi State has a diverse religious landscape. Dress modestly, especially when visiting rural areas or religious sites. Be mindful of prayer times and avoid scheduling meetings during significant religious observances.',
    },
  },
  lagos: null,
  kaduna: null,
};
