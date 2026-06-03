# -payvire

## Extension Chrome Curseur

Ce projet contient une extension Google Chrome qui permet de changer l'apparence du curseur sur les pages web. Elle propose des styles tels que arc-en-ciel, coeur, étoile et pointeur coloré.

### Fichiers importants

- `chrome-extension/manifest.json` : configuration de l'extension.
- `chrome-extension/popup.html` : interface rapide dans le popup de l'extension.
- `chrome-extension/options.html` : page d'options pour choisir le curseur.
- `chrome-extension/content.js` : script qui applique le curseur sur les pages.
- `site.html` : page de démonstration indépendante pour tester les curseurs.

### Installation de l'extension

1. Ouvre Chrome.
2. Va dans `chrome://extensions`.
3. Active le mode développeur.
4. Clique sur `Charger l’extension non empaquetée`.
5. Sélectionne le dossier `chrome-extension` de ce projet.

### Utilisation

- Clique sur l'icône de l'extension dans la barre d'outils.
- Choisis un style de curseur et clique sur `Appliquer`.
- Pour plus d'options, ouvre la page `options.html` via le lien du popup.

### Démo sans extension

Ouvre `site.html` ou `index.html` dans un navigateur pour tester le changement de curseur directement sur la page de démonstration.

### Site de présentation

Un site plus moderne a été ajouté dans `index.html` avec une page de présentation et une démo interactive. Le style est géré par `styles.css`.
