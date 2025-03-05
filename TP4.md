# TP4 : animations, outillage, build de production

## Animations

A l'aide de la documentation et des exemples, ajouter une animation sur le compteur de todos complétés.

Si tous les todos sont complétés, animer le compteur pour le passer en vert et en gras.

Si tous les todos ne sont pas complétés, animer le compteur pour le passer en rouge et en taille de police normale.

## Outillage

Installer le plugin Angular dev tools pour votre navigateur

Utiliser la vue Components pour analyser l'arbre de composants.

Lancer un profilage, et analyser les temps de dessin.

Utiliser la vue "Injector tree" pour visualiser l'arbre d'injection.


## Build de production

Depuis un terminal, lancer la commande

```
ng build
```

Placer ensuite votre terminal dans le dossier dist/my-app/browser et lancer la commande suivante

```
npx http-server
```

Cette commande vous donne l'url à utiliser dans votre navigateur pour tester votre build.

## Bonus: angular material

Utiliser les composants angular material dès que possible (listes, boutons, checkbox, champs d'input, etc..)