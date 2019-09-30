# Какие ошибки есть сейчас в файле 1-ts-check.js
 - человеческий фактор
 - нужен инстурмент, чтобы облегчить проверку


## Как решать?

```
npm init -y 
npm add typescript -D
```
Проверить настройки IDE

Создать кониффиг: 
`npx tsc --init`

`allowJS: true` - включить проверку для всех скриптов

`//@ts-check` - вначале файла, чтобы включить проверку
`//@ts-ignore` - заигнорить конкретную строчку

Выделились все ошибки  + консоль storm


## Проверка файлов

чтобы не писать везде `//@ts-check`, можно использовать в конфиге опцию `"checkJs": true`

`//@ts-nocheck` - вначале файла, чтобы выключить проверку

Также идет проверка из комментариев JSDoc


# Работа TS
Откуда беруться правила сравнения? 

Все в пакете typescript, описали нужную спецификацию в `definition` в зависимости от выброанного страндарта. Всегда опирается на эти файлы

В конфиге есть опция `lib`, чтобы собрать свои опции. Перетирает опцию `target`

1) Избежать банальных ошибок и ошибок в принципе
2) Документация по стандарту, перед глазами
3) Самодокументирвоанный код


Компиляция файлов:

```
npx tsc 
npx tsc -p tsconfig.json
npx tsc -p tsconfig.json --locale ru 
```

Когда ошибка, файл все равно компилируется. 

Для страховки есть опция `"noEmitOnError": true,`

## tslint

Аналог eslint для ts (прочитать статью про отмирание, так ли это [ссылка](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
[tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)

```
npm add tslint -D
npx tslint --init
```

Посмотреть конфиги для IDE

Работы с выводом на лету:
```
npm add ts-node
npx ts-node example.ts
```

## Подключение дополнительных lib

Например, возьмем использование Promise. Мы видим,что в текущем конфиге `ts` подсвечивает ошибку.

Так как нет `definition` для промисов (так как у нас es2015)

Использовать type reference  `/// <reference lib="es2015.promise" />`

Можно добавить также в конфиге `"lib" : ["es5", "dom", "es2015.promise"]`

Утиная типизация? или выносить все в alias? 

Пример, что все компилируется. Дальше все типы разберем. Порлноценый транспайлер (взамен babel, фичей его достаточно и полифилы)

Посмотреть связку babel и ts и react

[tslib](https://github.com/Microsoft/tslib)
чтобы при компиляции не было дублей wrapper, чтобы правильно минифицировать. Просто подключается helper

## Webpack

Ставим зависимости:

```
npm add webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin

```

Добавляем обычный `webpack` конфиг 

## Небольшой пример

Если пишем с ошибкой, которая проходит и сборка собирается. Нам сейчас никак не отследить.
Для этого в окнфиге включаем `"sourceMap": true`

Удобный дебаг. 

Для прода `tsconfig.app.json`
Использовать через `extends` json конфиг и настройки для прода. + подключить его в сборке

```

function fn(): never { // функция, которая ничего не верет
  throw new Error('Our custom Error');
}

fn();
```

# Область работы TS и декларация типов
Есть виртуальная и реальная область. 
(область декларации типов и область декларации переменных)

`IAccount` нет в скоупе переменных, нельзя сопоставить их.

Тоже самое здесь 
`let person:user;`

Прием захвата типа `typeof` это прием ts
`let person: typeof user`

Утиная типизация
(Если это выглядит как утка, плавает как утка и крякает как утка, то это, вероятно, и есть утка.)

`enum`
по-умолчанию будет поставлен индекс при компиляции

```
var Size;
(function (Size) {
    Size[Size["S"] = 0] = "S";
    Size[Size["M"] = 1] = "M";
    Size[Size["XL"] = 2] = "XL";
})(Size || (Size = {}));
```

Пример из редакса. 
Соответсвие в две стороны. 

## Примитивные типы (передаются по значению)
`Boolean, Number, String, Null, Undefined, Symbol`

// "strictNullChecks": false, 
если `false`, то значениям можно присваивать `null` или `undefined`
по-умолчанию `true`
если хотим оба использоввать, то объединение  `number | null`, можно комбинировать любые типы

Новый тип `bigint` (4n)
Менем конфиг ` "target": "esnext",`

## Литералы (литеральные типы)

Если понадобиться спицифицировать примитивные значения 
`declare` в глобальнйо видимости есть реальнйо сущности в скоупе, тогда надо определить type, пример с jquery
type $ = number - как тип
а `declare` говорит, что такая бибилиотека существует, реальная переменая $, просто нужно ее объявить в виртульной области типов
`declare function $(selector: string)) :any;`

комбинировать строковые с числовыми и т.п.

Чтобы не повторять типы, есть `alias` = `type` виртуальный тип

## Подключение типов
https://microsoft.github.io/TypeSearch/ 

`npm add @types/jquery -D` 
В node_modules папка @types все добавилось автоматически
Добаляется ссылаясь на конфиг  `"typeRoots": [],` - закомментировала 
`"typeRoots": [],`
`"types": ['jquery],` - выборка под ситуации

## Специальные типы

`any` - тип для всего. Что угодно. Плохо, так как можно что угодно вызвать

`unknown` - более строже, чем any. Если не понимаетет какой-тип, лучше `unknown`. Появился недавно

`Object` - не дает объявить, но при этом спокойно перетирает. похоже с `unknown`. Он опасен
```javascript
let z : Object | null = 1;
Object.create(z);
```
И это валидно, но с точки зрения js тут будет ошибка
на помощь просто `object` и присвоения уже нет
```javascript
let z : object | null = 1;
Object.create(z);
```
Разница в присвоении примитивов

`never` 
для функции, которая ничего не вернет

`void`

равен `undefined` или `null`
для функций, которые ничего не возвращают, чтобы не смущать. alias из коробки
для других разрабов

##Объектные типы
Модификатор readonly и опциональности, примерно как константа

На лету выхватить типы ключей
`keyof`  - ключи, которые указали, другие - нет. ключи к строковому литеральному типу 

Обращение по индексу

`(typeof user)['firstName']`

типы - исопртить из какого-то файла или настроить в конфиге из какой папки. 

Массивы
`let arr: number[] = [1,2,3,4]`

Readonly
`let arr3: ReadonlyArray<number> = [1, 2, 3, 4];` - через интерфейс
` readonly  number[]` - литеральный вид

строгие массивы
`let tupleArr:[number, typeof user] = [1, { firstName: 'Igor' }];`

новые утверждения в ts
```javascript
let x = 10 as const;
let user1 = { firstName: 'Igor' } as const;
let y = [1, 2] as const;
```

#Interfaces когда использовать (методы, которые доступны после инициализации объекта)

```javascript
interface IAccount {
  firstName: string,
}

let user: IAccount; // вроде тип и интерфейс различий не имеет
```

1) контракт для класса (публичные свойста и методы класса)
2) расширяемость - наследование интерфейсов(то что мержется, должно быть одинакового типа) и типов тоже

Также есть декларативное слияние интерфейсов, даже если один из них определен ниже. Для типов такого нет

когда брать интерфейс? 

геттер и сеттер не описать в интерфейсе


+  override при слиянии, readonly и ? как у типов 
дестрактинга типов пока нет

`move(): this;` возвращаю контекст данного класс, во вложенных не могу
`.move().shake()`


#Generic - параметры для типов

Применяется к: 
1) к функциям
2) к типам (alias)
3) к интерфейсам
4) к классам

Ограничения:
 - дефолтные значения
 - проверка на минимальные значения
 
 ```typescript
type CustomType = Dog extends Animal ? number : string;

let b:CustomType = 1;
```

Перебор значений по типам
 
```typescript
[P in keyof T] : T[P]
```

Литература: 
1.https://github.com/basarat/typescript-book 
2. egghead - поверхностные знания


Type Query  - ссылаться сам на себя
```typescript
export type ListItem = {
  title: string,
  items?: ListItem[]
};
```

#Функции

При вызове ts проверяет:
1. Количество аргументов
2. Тип аргументов
3. Возвращаемое значение

```typescript
function average(a: number, b: number, c: number): string {
  const avg: number = (a + b + c) / 3;
  return `Average is ${avg}`;
}
```

- Опциональные парметры `?` 
- es6 параметры по-умолчанию
- rest параметры `(number | string)[]` массив типов (делать проверку на тип)
проверку на типы, можно выносить в функции
- перегрузка - подход, чтобы задать более гибкую сигнатуру, в конце сигнатуру имплементацию. 
она обобщает все предыдущее. Более гибка типизация. Сначала проверит. Более узкая типизация

#Тесты

установить зависимости 
```
npm add karma karma-chrome-launcher jasmine-core  @types/jasmine karma-jasmine karma-typescript -D

```

Добавить `karma.conf.js`, `index.specs.ts`

```typescript
import { average } from './index';

describe('test some function', () => {
  it('test average', () => {
    expect(average(1, 2, 3)).toEqual('Average is 2');
  });
});
```

в `package.json` добавить `"test" : "karma start"` (успешный и неуспешный)

сгенирироваля отчет в папку `coverage`

В ts нет проблем с окружающим миром, все валидно, все тестируется.

#Классы

strictPropertyInitialization 
Для классов , чтобы не создавать хидден классы, хорошая практика объявлять 
в паблике свойства и присваивать значение либо здесь, либо в конструкторе

`public y!: number;`

Я определю это свойство не на месте, а потом где-нибудь ниже по коду. 

```typescript
class Point {
  public x: number = 1;
  public y!: number;

  public constructor() {
  }

  public onInit():void {
    this.y = 1;
  }

  public sum(): number {    
    return this.x + this.y;
  }
}
```

метод и конструктор (вызывается при инициализации), все что рассмотрели для функций, здесь тоже это все доступно

если много свойств, то можно сделать public в конструкторе, ts автоматически это сделает за нас
`public constructor(public x: number, public y:number) {`

##Наследование

```typescript
class BasePoint {
  public x!: number;
  protected y!:number;
  private z!:number; // только внутри самого класса
}
```

`readonly` - присваивание вначале или в конструктуре, в другом месте нет

`let bP:BasePoint = new BasePoint(); // только публичное свойство`
`// bP.x`

Но в конструкторе `Point` видно как публичный `x` так и `protected` `y`

Можно много интерфейсов имплементировать 
`class Point extends BasePoint implements IX, ISum {`

##Пример Singleton
```typescript
class Singleton {
  private static _instance: Singleton;

  private constructor() {} // запрещен вызов снаружи

  public static getInstance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}

const inst = new Singleton(); // только внутри самого себя
```

Абстарктные классы слово `abstract` - выступает контрактом и носителем каких-то свойств. 
Он существует, но его нельзя вызвать. Для хранения дефолтных значений

#Примесь/миксины - подмешать одно, два и тп исходных свойств

Добавлять timestamp

```typescript
export type Constructable = new (...args: any[]) => {};
// тип конструтора, то что может быть иницилизировано с new

export function Timestamped<BC extends Constructable>(Base:BC) {
  return class extends Base {
    public timestamp: Date = new Date();
  }
}
```

# Декораторы 
Это видение ts на это все, так как нет пока стандарта. Сильно увлекаться не надо

паттерн, который позволяет изменять поведение сущности, без изменения ее имплементации

`/node_modules/typescript/lib/lib.es5.d.ts` 1379 строка
из дифинишина - это функция, все применяется к классам

- класс
- свойства в классе
- метод класса
- параметры классы

Декоратор метода (для примера debounce - отлиженный вызов):
`@debounce` - собака и имя функции + подключить в конфиге ts experimental options

чтобы это не было 
https://www.npmjs.com/package/reflect-metadata

```typescript
  console.log(Reflect.getMetadata('design:type', target, key));
  console.log(Reflect.getMetadata('design:paramtypes', target, key));
  console.log(Reflect.getMetadata('design:returntype', target, key));
```