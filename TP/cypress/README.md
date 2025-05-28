# TP tests end to end avec Cypress

Le but de ce TP est de mettre en place les tests end to end avec Cypress et les exécuter.

Les tests seront à réaliser sur l'application réalisée dans le TP rx

Référence de la ligne de commande cypress https://docs.cypress.io/app/references/command-line

## Installation et lancement de cypress

Depuis une terminal dans le dossier de l'application :

```bash
npm install cypress --save-dev
```

Puis pour lancer l'interface graphique :

```bash
npx cypress open
```

## Ecriture de tests

Ecrire les tests suivants :

### Test 1 

- Clic sur "add user"
- Vérification que la liste des users est mise à jour 

### Test 2

- Ajout d'un message dans le champ text puis clic sur le bouton "send"
- Vérification que la liste des messages est mise à jour.

## Automatisation des tests

Lancer cypress depuis une ligne de commande pour exécuter les tests

```bash
npx cypress run --record --spec "cypress/e2e/my-test-1.cy.js"
```
