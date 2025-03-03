# TP 1 : Angular et TypeScript

Le but de ce TP est de savoir générer un projet et différents composants avec le client Angular, et décvouvrir TypeScript.

## Installation de l'environnement

### Installation du client angular

Installer le client angular

    npm install -g @angular/cli

Générer un projet

    ng new ma-super-appli

### Visual Studio Code

Installer Visual Studio Code et ouvrir le dossier ma-super-appli 

Ouvrir un terminal et lancer le serveur de développement
    
    ng serve

L'application est servie sur http://localhost:4200/

### Premiers pas avec Angular

Découverte des fichiers générés et démo basique

Réaliser les opérations suivantes :

* Ajouter une variable à afficher dans app.component.html et app.component.ts
* Ajouter un bouton dans app.component.html et son écouteur d'évenement dans app.component.ts
* Générer une classe avec ng generate
* Créer une méthode dans la classe générée, et l'importer dans app.component.ts 
* Appeler la méthode créée depuis l'écouteur d'évenement du bouton

### Utiliser des templates

Ajouter angular material au projet

    ng add @angular/material

Générer des composants dans le projet

    ng generate @angular/material:material-nav --name nav
    ng generate @angular/material:material-dashboard --name dashboard
    ng generate @angular/material:material-table --name table

Tester les balises suivantes dans la page app.component.html

 * `<app-nav></app-nav>`
 * `<app-dashboard></app-dashboard>`
 * `<app-table></app-table>`

### Bonus

- Générer un composant nommé Counter, et l'afficher dans l'application
- Ajouter une variable "count" de type number dans le fichier typescript
- Afficher cette variable dans le fichier HTML du composant
- A l'aide de la fonction setInterval, incrémenter cette valeur toutes les secondes
- Ajouter un bouton permettant de remettre à zero le compteur









