# Quiz jour 2

Ce quiz porte sur les notions vues lors de la 1ère journée.

Attention, pour certaines questions il peut y avoir zéro, une, ou plusieurs bonnes réponses, et peut être un piège.

## Pourquoi éviter de bloquer le thread de l'interface ? Quelles sont les principales façons de ne pas le bloquer ?

## Quelles sont les 2 stratégies de détections des changements d'Angular

* OnPull
* OnPush
* OnChange
* OnInput

## Comment s'appelle la librairie qui gère les contexte d'exécution et surveille les opérations asynchrones?

* NgRx
* NgZone
* NgCapture
* NgContext

## Quel Hook est appelé lors d'un changement de référence d'un Input ?

* OnInit
* OnChanges
* DoCheck
* OnDestroy

## Que va faire ce code ? (résultat console)

Typescript :

```typescript
@Component({
  selector: 'app-parent',
  template: `<app-enfant [data]="'world'"></app-enfant>`
})
export class ParentComponent 
  implements OnInit, OnDestroy  {

  @Input() data: string;

  constructor() {
    console.log('Parent::new');
  }

  ngOnInit(): void {
    console.log('Parent::init');
    console.log(this.data);
  }

  ngOnDestroy() {
    console.log('Parent::destroy');
  }
}

@Component({
  selector: 'app-enfant',
  template: `<p>whatever</p>`
})
export class EnfantComponent 
  implements OnInit, OnDestroy  {

  @Input() data: string;

  constructor() {
    console.log('Enfant::new');
  }

  ngOnInit(): void {
    console.log('Enfant::init');
    console.log(this.data);
  }

  ngOnDestroy() {
    console.log('Enfant::destroy');
  }
}

```

Html :

```html
<app-parent [data]="'Hello'"></app-parent>
```