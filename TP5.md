# TP5: tests end to end

## Installation cypress

Lancer la commande suivante

```
ng e2e
```

Choisir cypress, attendre que l'installation soit finie, puis modifier le fichier "cypress.config.ts", et ajouter experimentalStudio:true dans la section e2e:

```
e2e: {
    'baseUrl': 'http://localhost:4200',
     experimentalStudio: true
  },
```

Relancer la commande 

```
ng e2e
```

Tester la première spec créée.

## Création d'une spec

Avec l'interface de cypress, réaliser le test suivant :

- Accéder à localhost:4200
- Insérer un titre dans le champ d'ajout d'un todo
- Cliquer sur le bouton ajouter
- Vérifier que le nombre de todos a bien été modifié

## Bonus écriture manuelle du test

Répéter la création de ce test en mode "code".

- Créer une autre spec
- Coder le test

Exemples d'utilisations: 

```ts
describe("my test", () => {
  it("should do the job", () => {
    cy.visit("http://locahost:4200")
    cy.get('#my-button').click()
    cy.get('#my-text').should('have.text', 'Hello world')    
  })
})
```


