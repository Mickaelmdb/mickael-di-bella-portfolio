# Mickael Di Bella — IT Operations Portfolio

Portfolio bilingue (français / anglais) présentant des réalisations anonymisées autour du Run Management, de l'Incident Management, de l'observabilité, de la qualité de données et de l'automatisation opérationnelle.

## Objectifs

- Présenter une expérience opérationnelle concrète à des recruteurs et clients potentiels.
- Expliquer les réalisations selon une structure problème → actions → résultats.
- Publier un site statique rapide, responsive et sans dépendances externes.
- Conserver le code et les études de cas dans un repository Git versionné.

## Contenu

- `index.html` : page d'accueil bilingue.
- `assets/css/styles.css` : styles du site.
- `assets/js/main.js` : changement de langue, navigation mobile et année du footer.
- `projects/` : quatre études de cas anonymisées.
- `.github/workflows/pages.yml` : déploiement automatique sur GitHub Pages.

## Prévisualiser en local

Ouvrir `index.html` dans un navigateur. Pour tester le site avec un serveur local Python :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Publier sur GitHub Pages

1. Créer un repository GitHub, par exemple `mickael-di-bella-portfolio`.
2. Ajouter les fichiers de ce dossier à la racine du repository.
3. Dans **Settings → Pages**, choisir **GitHub Actions** comme source de déploiement.
4. Pousser la branche `main`. Le workflow publie le site automatiquement.
5. Vérifier l'onglet **Actions**, puis ouvrir l'URL GitHub Pages indiquée par GitHub.
6. Remplacer les liens de profil génériques dans `index.html` par les bonnes URL.
7. Si le dépôt est publié sous une URL de projet, les chemins relatifs des pages sont déjà adaptés.

Le workflow nécessite que GitHub Pages soit activé pour le repository. Aucun secret n'est requis pour ce site statique.

## Personnalisation avant publication

- Vérifier le titre professionnel et le résumé d'introduction.
- Ajouter une adresse e-mail professionnelle si souhaité, en tenant compte du spam.
- Remplacer le lien GitHub générique par le profil ou le repository réel.
- Ajouter une photo uniquement si elle améliore le positionnement recherché.
- Vérifier les chiffres de l'expérience opérationnelle et documenter leur périmètre avant usage externe.
- Ajouter éventuellement une version PDF du CV et des liens vers des démonstrations publiques.

## Confidentialité et propriété intellectuelle

Ce dépôt est prévu pour être public. **Ne pas y ajouter** de tickets réels, captures d'écran internes, données clients, noms de systèmes propriétaires, URL privées, requêtes internes, schémas de bases, code appartenant à un employeur, secrets, tokens, webhooks, identifiants, cookies ou données personnelles.

Les études de cas ont été reformulées de manière générique. Les chiffres d'activité visibles sont des indicateurs issus des notes de suivi fournies pour préparer le portfolio ; confirmer le périmètre et l'autorisation de publication avant de les présenter à l'extérieur. Les résultats non mesurés sont explicitement décrits comme objectifs ou bénéfices attendus.

## Technologies

HTML5 · CSS3 · JavaScript vanilla · GitHub Pages · GitHub Actions

## Licence

Le contenu professionnel et les textes de ce portfolio sont personnels. Le dépôt n'accorde aucun droit de réutiliser du code, des visuels ou des documents tiers qui ne seraient pas détenus par l'auteur. Voir `LICENSE`.
Portfolio professionnel de Mickael Di Bella.
