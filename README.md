# M'LYS APPART — site web

Site vitrine de l'appart-hôtel M'LYS APPART (Kaloum, Conakry).
Stack : **Astro 5 + Tailwind CSS 4 + TypeScript**. Multilingue FR/EN, SEO natif.

---

## 🧭 Ce que tu dois comprendre (pas besoin de coder)

- **Tout le contenu chiffré vit dans UN seul fichier** : `src/config/site.ts`.
  Prix, distances, téléphone, e-mail, taux de change : tu modifies ici, ça se met à jour partout.
- **Les prix sont en GNF** (référence officielle). Les équivalents **€ et $** sont calculés
  automatiquement à partir d'un taux que tu peux ajuster (voir `FX` en haut de `site.ts`).
- **Les photos** sont des images de remplacement (fond crème "PHOTO À REMPLACER").
  Pour mettre les vraies : dépose-les dans `public/images/` **avec exactement le même nom de fichier**.
- **L'anglais (`/en/`) n'est pas encore fait** — c'est l'étape suivante (Phase 2 du brief).
  Le squelette multilingue est déjà en place (sélecteur FR/EN, liens du footer).

---

## ▶️ Ce que tu dois faire (à coller dans Claude Code, dans l'ordre)

Ouvre ce dossier dans Claude Code, puis demande-lui de lancer ces commandes :

```bash
# 1. Installer les dépendances (une seule fois)
npm install

# 2. Lancer le site en local pour le voir dans le navigateur
npm run dev
```

Le terminal affichera une adresse du type `http://localhost:4321` → ouvre-la.
La page d'accueil FR est sur `http://localhost:4321/fr/`.

```bash
# 3. Construire la version finale (quand tout te convient)
npm run build
```

---

## ✉️ Activer le formulaire de contact

1. Crée un compte gratuit sur https://formspree.io (50 messages/mois gratuits).
2. Récupère l'URL de ton formulaire (du type `https://formspree.io/f/abcdwxyz`).
3. Copie le fichier `.env.example` en `.env` et colle l'URL à la place de `YOUR_FORM_ID`.

---

## 🚀 Mettre en ligne (Netlify)

Le plus simple, sans rien configurer :
- Soit relier le dossier à un dépôt GitHub puis le connecter à Netlify (build : `npm run build`, dossier publié : `dist`).
- Soit demander à Claude Code de déployer via la commande Netlify.

Pense à reporter la variable `PUBLIC_FORM_ENDPOINT` dans les réglages Netlify.

---

## ✅ À confirmer avec la direction (cherche "TODO:" dans le code)

- [ ] **Taux de change €/$** — `src/config/site.ts`, objet `FX` (le GNF bouge, à vérifier avant mise en ligne).
- [ ] **Téléphone** — `src/config/site.ts` (`SITE.phone`).
- [ ] **E-mail dédié** — actuellement `reservation@hotelmlys.com` (validé, mais contient "hotelmlys").
- [ ] **Paliers tarifaires longs séjours** — affichés "sur demande" en attendant les vrais chiffres.
- [ ] **Salle de réunion** — statut/capacité exacts → page `src/pages/fr/evenements.astro`.
- [ ] **Infos légales société** — RCCM, NIF, raison sociale, directeur de publication → `mentions-legales.astro`.
- [ ] **Domaine** — `mlysappart.com` à réserver/confirmer (`astro.config.mjs` + `site.ts`).
- [ ] **Vraies photos** — remplacer les fichiers de `public/images/`.

---

## 🗂️ Structure

```
src/
  config/site.ts        ← LE fichier à éditer (prix, distances, contact, taux)
  styles/global.css     ← couleurs et typo de la marque
  layouts/Layout.astro  ← <head> SEO commun
  components/            ← Header, Footer, Hero, RoomCard, PriceCard, etc.
  pages/fr/             ← les 11 pages françaises (faites)
  pages/en/             ← anglais (à venir, Phase 2)
public/images/          ← photos (remplaçables)
```
