# Portfolio Zakaria Benaddi

React 18 + TypeScript + Vite + React Router. Thème sombre, titres condensés géants, palette ⌘K, menu latéral et console de jeu « Console Pocket » pour parcourir les projets.

## Lancer en local

```bash
npm install
npm run dev
```

## Modifier le contenu

Tout le texte est dans `src/data/profile.ts` : infos perso, bio, entreprises, projets (et leurs niveaux dans la console), outils, bande défilante, citation.

- Couleurs : variables en haut de `src/styles/global.css` (`--accent`, `--violet`…).
- Mots de l'écran « Bonjour » : `src/components/layout/Loader.tsx` (affiché une fois par session).
- Vitesse du badge rotatif : `src/components/ui/RotatingBadge.tsx`.

## Pages

| URL | Page |
| --- | --- |
| `/` | Accueil : nom géant, badge, intro, projets phares, expérience, technos, « Autour de moi » |
| `/a-propos` | Présentation, parcours en timeline, loisirs, citation |
| `/projets` | Console Pocket + tous les projets |
| `/outils` | Logiciels et stack |
| `/livre-dor` | Livre d'or |
| `/contact` | Email, CV, réseaux, heure locale |

## Livre d'or

Les notes sont enregistrées dans le navigateur du visiteur (localStorage) : chacun ne voit que les siennes.
Pour un mur partagé, remplacez `loadNotes` / `saveNotes` dans `src/lib/guestbook.ts` par une base (Supabase, Firebase, Vercel KV…).

## Déployer sur Vercel

1. Remplacez le contenu du repo `zackben/portfolio` par ce dossier (ou poussez-le sur une branche pour avoir une preview).
2. Dans Vercel > Settings > Build & Development, choisissez le preset **Vite** (build `npm run build`, sortie `dist`).
3. `vercel.json` redirige toutes les URL vers `index.html`, pour que `/projets` ou `/contact` marchent en accès direct.
