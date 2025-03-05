# Quiz 2

Attention, pour certaines questions il peut y avoir zéro, une, ou plusieurs bonnes réponses.

## Quel service peut être utilisé pour extraire les paramètres de route dans un composant ?

- Router
- Route
- ActivatedRoute
- CurrentRoute

## Comment obtient-on une instance de service dans Angular ?

- En utilisant le mot-clé “declare”
- En l’incluant dans le fichier HTML
- En l’important depuis une bibliothèque tierce
- En l’injectant via le constructeur d’un composant

## Qui est responsable d'appeler le constructeur 'new MyService()' dans cette portion de code?

```typescript
@Component(...)
class MyComponent {
    constructor(private service: MyService){}
}
```

## Quelles sont les bonnes syntaxe de template 

* `<p><%user.name%></p>`
* `<p>{{user.name}}</p>`
* `<p>{user.name}</p>`
* `<p>{{user->name}}</p>`

## Quel décorateur la directive utilise-t-elle pour écouter les événements de l'hôte/cible ?

- @Listener
- @HostListener
- @OnListener
- @TargetListener


## Quelle est l'annotation pour émettre un évenement dans un composant

* @Event()
* @Emitter()
* @Output()
* @EventBinding()

---

## Quel est le résultat de ce code

```typescript
@Component({
  selector: 'app-root',
  template: '<app-root></app-root>'
})
export class AppComponent {
}
```

* Aucun résultat, erreur lors de la transpilation
* "Type Error: 'app-root' isn't a known element"
* "Uncaught Error: Buffer overflow"
* "RangeError: Maximum call stack size exceeded"

## Quelle commande doit être utilisée pour construire une application en mode production ?

- ng build
- ng serve
- ng e2e
- ng lint

## Combien de messages il y aura-t'il dans la console ?

```typescript
// my-service.js
@Injectable()
export class MyService {
  constructor(){
    console.log('Hello my service');
  }
}

// hello-component.js
@Component({
  selector: 'app-hello',
  template: '<p>hello</p>'
})
export class HelloComponent {
  constructor(private service: MyService){}
}

// bye-component.js
@Component({
  selector: 'app-bye',
  template: '<p>bye</p>'
})
export class ByeComponent {
  constructor(private service: MyService){}
}

// index.html
<app-hello></app-hello>
<app-bye></app-bye>
```

## Quelles sont les 2 stratégies de détections des changements d'Angular

* OnPull
* OnPush
* OnChange
* OnInput

