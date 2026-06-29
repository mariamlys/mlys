/**
 * SOURCE UNIQUE DE VÉRITÉ DU SITE.
 * Tous les prix, distances et infos de contact sont définis ici.
 * Modifier une valeur ici la met à jour partout (FR + EN).
 */

/* ------------------------------------------------------------------ */
/* TAUX DE CHANGE — À CONFIRMER AVEC LA DIRECTION                       */
/* ------------------------------------------------------------------ */
/* Le GNF est la devise de référence (prix officiels en GNF).          */
/* EUR et USD sont affichés à titre INDICATIF (≈).                     */
/* TODO: confirmer ces taux. Le franc guinéen fluctue — vérifier       */
/* régulièrement, ou recalculer au moment de la mise en ligne.         */
export const FX = {
  GNF_PER_EUR: 9900, // 1 € ≈ 9 900 GNF  (à confirmer)
  GNF_PER_USD: 8650, // 1 $ ≈ 8 650 GNF  (à confirmer)
};

/** Formate un montant GNF en chaîne "950 000 GNF" (espace insécable fine). */
export function fmtGNF(gnf: number): string {
  const grouped = String(gnf).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f');
  return grouped + '\u202fGNF';
}

/** Renvoie l'équivalent EUR arrondi à l'euro. */
export function toEUR(gnf: number): number {
  return Math.round(gnf / FX.GNF_PER_EUR);
}

/** Renvoie l'équivalent USD arrondi au dollar. */
export function toUSD(gnf: number): number {
  return Math.round(gnf / FX.GNF_PER_USD);
}

/* ------------------------------------------------------------------ */
/* IDENTITÉ                                                            */
/* ------------------------------------------------------------------ */
export const SITE = {
  name: "M'LYS APPART",
  // TODO: confirmer le téléphone avec la direction
  phone: '+224 624 29 93 69',
  phoneHref: 'tel:+224624299369',
  email: 'reservation@hotelmlys.com',
  emailHref: 'mailto:reservation@hotelmlys.com',
  address: {
    line1: 'Quartier Almamya, Commune de Kaloum',
    line2: 'Angle 5ème Boulevard et Rue KA 038',
    city: 'Conakry',
    country: 'République de Guinée',
  },
  gps: { lat: 9.512091755730571, lng: -13.711306249275871 },
  // TODO: confirmer le domaine
  domain: 'https://mlysappart.com',
};

/* ------------------------------------------------------------------ */
/* HÉBERGEMENTS                                                        */
/* ------------------------------------------------------------------ */
export const ROOMS = {
  studio: {
    priceGNF: 950000,
    capacity: 1,
    image: '/images/studio.png',
  },
  suite: {
    priceGNF: 1200000,
    capacity: 3,
    image: '/images/suite.png',
  },
};

/* ------------------------------------------------------------------ */
/* DISTANCES RÉELLES (validées — section 4 du brief)                   */
/* Affichées en minutes : c'est la donnée la plus fiable.              */
/* ------------------------------------------------------------------ */
export const DISTANCES_FR = [
  { place: 'Ambassade de France', time: '6 min à pied' },
  { place: "Ambassade d'Allemagne", time: '6 min à pied' },
  { place: 'Ministères', time: '5–10 min à pied' },
  { place: 'Banque Centrale (BCRG)', time: '8 min à pied' },
  { place: 'Cathédrale Sainte-Marie', time: '8 min à pied' },
  { place: 'Palais Présidentiel', time: '10 min à pied' },
  { place: 'Cour Suprême', time: '12 min à pied' },
  { place: 'Musée National', time: '5 min en voiture' },
  { place: 'Port de Conakry', time: '7 min en voiture' },
  { place: 'Aéroport International (CKY)', time: '30–90 min selon trafic' },
];

export const DISTANCES_EN = [
  { place: 'French Embassy', time: '6 min walk' },
  { place: 'German Embassy', time: '6 min walk' },
  { place: 'Government ministries', time: '5–10 min walk' },
  { place: 'Central Bank (BCRG)', time: '8 min walk' },
  { place: 'Sainte-Marie Cathedral', time: '8 min walk' },
  { place: 'Presidential Palace', time: '10 min walk' },
  { place: 'Supreme Court', time: '12 min walk' },
  { place: 'National Museum', time: '5 min drive' },
  { place: 'Port of Conakry', time: '7 min drive' },
  { place: 'International Airport (CKY)', time: '30–90 min depending on traffic' },
];

/* ------------------------------------------------------------------ */
/* RESTAURANT                                                          */
/* ------------------------------------------------------------------ */
export const RESTAURANT = {
  name: 'La Diversité Signature',
};
