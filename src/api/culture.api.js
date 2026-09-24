// src/api/culture.api.js
//
// ── This is the ONLY file that should change once the real backend
//    exists. Every page/component calls these functions — never the
//    mock data directly — so swapping mock -> real API is a one-file edit.

import {
  states as mockStates,
  phrasebooks,
  phraseCategories,
  customsData,
} from "../data/culture";

const MOCK_DELAY_MS = 400;
function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), MOCK_DELAY_MS));
}

/** List of states, each already including welcomeTitle/welcomeText. */
export async function getStates() {
  // TODO(backend): GET /culture/states
  return delay(mockStates);
}

/** Category tabs shown on the Phrasebook page (Greetings/Interactions/etc). */
export async function getPhraseCategories() {
  // TODO(backend): GET /culture/phrase-categories
  return delay(phraseCategories);
}

/** Phrases for a state, optionally filtered to one category. Passing no
 *  categoryId (used by CultureGuidePage's preview) returns everything. */
export async function getPhrases(stateId, categoryId) {
  // TODO(backend): GET /culture/:stateId/phrasebook?category=<categoryId>
  let list = phrasebooks[stateId] ?? [];
  if (categoryId) {
    list = list.filter((p) => p.category === categoryId);
  }
  return delay(list);
}

/** Customs & etiquette for a state. Rejects if the state has no customs
 *  content yet — callers already handle this with .catch(() => null). */
export async function getCustoms(stateId) {
  // TODO(backend): GET /culture/:stateId/customs
  const data = customsData[stateId];
  if (!data) {
    return Promise.reject(new Error(`No customs content for state: ${stateId}`));
  }
  return delay(data);
}
