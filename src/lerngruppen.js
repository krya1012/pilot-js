"use strict";

/**
 * Erfundene Beispieldaten für die Übersicht der Lerngruppen.
 * Keine persönlichen Daten: nur Name, Thema und Plätze jeder Gruppe.
 */
const LERNGRUPPEN = Object.freeze([
  { name: "Mathe-Treff", thema: "Analysis 1", plaetzeGesamt: 8, plaetzeFrei: 3 },
  { name: "Code-Kreis", thema: "Programmieren in Java", plaetzeGesamt: 6, plaetzeFrei: 0 },
  { name: "Datenbank-Runde", thema: "SQL und Datenmodellierung", plaetzeGesamt: 10, plaetzeFrei: 5 },
  { name: "Statistik am Abend", thema: "Wahrscheinlichkeitsrechnung", plaetzeGesamt: 5, plaetzeFrei: 1 },
  { name: "Netzwerk-Gruppe", thema: "Rechnernetze", plaetzeGesamt: 7, plaetzeFrei: 7 },
  { name: "BWL kompakt", thema: "Grundlagen der Betriebswirtschaft", plaetzeGesamt: 12, plaetzeFrei: 4 },
].map((gruppe) => Object.freeze(gruppe)));

function listLerngruppen() {
  return LERNGRUPPEN;
}

module.exports = { listLerngruppen };
