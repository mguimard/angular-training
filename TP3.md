# TP3: ajout de HTTP, routage et formulaire

## Service et HTTP

Dans le service TodosService, ajouter un appel HTTP pour récupérer la liste initiale des todos

Assurez vous que cela affiche correctement les 200 todos.

URL: https://jsonplaceholder.typicode.com/todos

## Routage

Créer 3 routes :

- Home (liste des todos)
- 404 (toute page non trouvée)
- Contact (une page de contact, avec un formulaire)

Ajouter 3 liens en haut de la page ou dans le menu pour naviguer entre les pages.

Placer la balise de routage au bon endroit.

Assurez vous que le routage fonctionne correctement.

## Formulaire

Dans la page de contact, créer un formulaire avec les champs suivants :

- email
- titre
- message
- bouton envoyer

Lors de la soumission du formulaire, utiliser console.log pour afficher les données.

Ajouter des contraintes sur les champs:

- email: doit être un email valide
- titre: ne doit pas être vide
- message: au moins 50 caractères

Afficher les erreurs du formulaire.
