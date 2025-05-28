# TP i18n

Le but de ce TP est d'apporter un système de traductions à une application existante.

Reprendre le code du TP behavior-subject et faire en sorte que l'application soit disponible en anglais/français/espagnol.

## Ajout de la librairie i18n

Ajouter @angular/localize

```bash
ng add @angular/localize
```

Ajouter dans angular.json les différentes langues et chemins des fichiers de traduction

## Ajout des tags i18n

- Ajouter les tags i18n sur toutes les parties de l'application à traduire
- Ajouter 3 liens en haut de page pour naviguer entre /en /fr et /es
- Lancer la commande de génération des fichiers (extract locales)
- Faire les traductions dans les fichiers de langue

## Build et tests

Builder l'application et lancer ensuite un server HTTP dans le dossier dist. Vérifier le bon fonnctionnement des 3 applications générées.


