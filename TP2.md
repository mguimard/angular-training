# TP2: Création de l'interface utilisateur

## Première partie : génération des composants

Après étude du schéma, générer les différents composants, interfaces, services nécessaires.

## Affichage de données brutes

Dans le fichier de service, offrir un observable sur des données en dur :

```
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": true
  }
]
```

Dans le fichier responsable d'afficher la liste des todos, injecter le service et fournir l'observable à la vue pour les afficher.

## Gestion des inputs/outputs

La vue responsable d'afficher un Todo a une entrée et une sortie.

- Input : un todo
- Output : completed

Implémenter ces entrées/sorties.

## Gestion de la liste

La vue responsable d'afficher la liste doit 

- afficher le nombre de todos complétés
- afficher les todos




