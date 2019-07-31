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
