# Mickael Di Bella — IT Operations Portfolio

**Portfolio professionnel bilingue (FR / EN)** — Run Management, Incident Management, support applicatif, qualité de données et automatisation.

> Design V2 : direction éditoriale, typographie affirmée, captures issues du travail, navigation simplifiée et études de cas détaillées. Inspiré de l'approche narrative et visuelle du template Wix fourni, sans reprendre ses assets, son code ni sa mise en page à l'identique.

## Aperçu

Le site présente :

- Une page d'accueil immersive avec une promesse professionnelle claire.
- Quatre études de cas en français et en anglais.
- Des extraits de captures professionnelles déjà partagées par l'auteur.
- Un filtrage des projets, une galerie agrandissable, une navigation mobile, un changement de langue et un contact direct.
- Un site statique, sans framework ni collecte de données.

## Structure

```text
index.html
assets/
  css/site.css
  js/site.js
  evidence/*.png
  favicon.svg
projects/
  homeindex-data-quality.html (+ -en.html)
  automated-monitoring.html (+ -en.html)
  piaf.html (+ -en.html)
  run-tracker.html (+ -en.html)
.nojekyll
README.md
CONTENT-REVIEW.md
SOURCE-EVIDENCE.md
```

## Voir en local

Double-cliquer sur `index.html`, ou lancer un serveur local :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Publication GitHub Pages

1. Examiner `CONTENT-REVIEW.md` et `SOURCE-EVIDENCE.md` **avant** toute publication publique.
2. Déposer les fichiers à la **racine** de la branche `main` du repository.
3. Aller dans **Settings → Pages**.
4. Sélectionner **Deploy from a branch**, branche `main`, dossier `/(root)`.
5. Enregistrer si nécessaire et attendre la fin de `pages build and deployment`.
6. Ouvrir `https://mickaelmdb.github.io/mickael-di-bella-portfolio/`.

**Important :** aucun workflow `.github/workflows/pages.yml` n'est nécessaire avec ce mode. L'ancien workflow pouvait échouer avec l'erreur `Missing environment` : ne pas le conserver en parallèle.

## Personnalisation

- Textes FR/EN : attributs `data-fr` / `data-en` dans `index.html`.
- Couleurs et typographie : variables CSS au début de `assets/css/site.css`.
- Études de cas : fichiers `projects/*.html`.
- Captures : `assets/evidence/` (sous réserve des droits de publication).
- Contact : `mailto:mickael-dibella@hotmail.fr`, LinkedIn et GitHub.

## Accessibilité et technique

Responsive, navigation clavier, lien d'évitement, contraste, `prefers-reduced-motion`, balises sémantiques, images avec texte alternatif, filtres avec `aria-pressed`, lightbox native `<dialog>`.

## Sécurité / droits

Ne pas publier de code propriétaire, données de clients, identifiants, clés API, tokens, webhooks ou captures internes sans autorisation. Les chiffres du portfolio proviennent de bilans rapportés par l'auteur et ne sont pas des statistiques publiquement auditées. Voir les deux documents de revue.

## Auteur

**Mickael Di Bella** — [LinkedIn](https://www.linkedin.com/in/mickaeldibella/) · [GitHub](https://github.com/Mickaelmdb) · [Email](mailto:mickael-dibella@hotmail.fr)

Code du site fourni pour personnalisation et publication. Les captures et les marques tierces restent soumises aux droits de leurs titulaires.
