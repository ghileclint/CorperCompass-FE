/**
 * culture.api.js
 * -----------------------------------------------------------------------
 * All Culture Guide data access goes through this file. No component
 * ever imports culture.js (the mock data) directly.
 *
 * TO CONNECT THE REAL BACKEND:
 *   1. Set your API base URL (however your project already does this —
 *      check vendors.api.js for the existing pattern and match it).
 *   2. In each function below, delete the MOCK MODE block and uncomment
 *      the LIVE MODE block.
 *   3. Delete src/data/culture.js — nothing else imports it.
 *   4. No component needs to change.
 * -----------------------------------------------------------------------
 */

import { MOCK_STATES, MOCK_PHRASES, MOCK_CUSTOMS, PHRASE_CATEGORIES } from '../data/culture';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_BASE_URLNEXT_PUBLIC_API_BASE_URL || '';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed: ${res.status}`);
  }
  return res.json();
}

function simulateLatency(ms = 350) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** List of states with cultural guides available. */
export async function getStates() {
  // ---- MOCK MODE ----
  await simulateLatency();
  return MOCK_STATES;

  // ---- LIVE MODE ----
  // return request('/culture/states');
}

/** Full phrase list for a given state, optionally filtered by category. */
export async function getPhrases(stateId, categoryId) {
  // ---- MOCK MODE ----
  await simulateLatency();
  const all = MOCK_PHRASES[stateId] || [];
  return categoryId ? all.filter((p) => p.category === categoryId) : all;

  // ---- LIVE MODE ----
  // const query = categoryId ? `?category=${categoryId}` : '';
  // return request(`/culture/states/${stateId}/phrases${query}`);
}

/** Category tabs shown above the phrase list (Greetings, Interactions, etc). */
export async function getPhraseCategories() {
  // ---- MOCK MODE ----
  await simulateLatency(150);
  return PHRASE_CATEGORIES;

  // ---- LIVE MODE ----
  // return request('/culture/phrase-categories');
}

/** Customs & etiquette content (intro, dos, don'ts, religious sensitivity) for a state. */
export async function getCustoms(stateId) {
  // ---- MOCK MODE ----
  await simulateLatency();
  const data = MOCK_CUSTOMS[stateId];
  if (!data) throw new Error('No customs content for this state yet');
  return data;

  // ---- LIVE MODE ----
  // return request(`/culture/states/${stateId}/customs`);
}
