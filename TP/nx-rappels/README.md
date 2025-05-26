# TP : rappels Angular et découverte NX

Le but de ce TP est de mettre en place un environnement de développement pour créer une application Angular basique et découvrir Nx.

## Installation des outils

Installer :

- NodeJS
- VSCode
- Extensions VSCode : Angular Language Service, Prettier, ESLint
- Outils de debogage intégré au navigateur https://angular.dev/tools/devtools

## Création d'un monorepo

Créer un dossier dans votre répertoire utilisateur et y lancer la commande suivante.

```bash
npx create-nx-workspace@latest angular-monorepo --preset=angular-monorepo
```

Une fois la commande terminée, inspecter les sources de l'application, puis lancer le serveur de développement.

```bash
npx nx serve
```

## Ajout de composants

Au travers de la commande Nx, générer 2 composants :

- TodoListComponent
- TodoComponent

```bash
npx nx generate component src/app/todo-list/todo-list
npx nx generate component src/app/todo/todo
```

- Dans le code du composant TodoList, récupérer la liste des todos depuis https://jsonplaceholder.typicode.com/todos
- Dans le template du composant TodoList, itérer sur la liste des todos et utiliser un TodoComponent pour afficher le todo.
- Dans le template du composant Todo, afficher le titre du todo (title) et son état (completed).