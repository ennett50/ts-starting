// // interface IAccount {
// //   firstName: string;
// //   age: number;
// // }
// //
// // let user = IAccount;
//
//
// interface IAccount {
//   firstName: string;
//   age: number;
// }
//
// let user = {
//   firstName: 'Игорь',
//   age: 33,
// };
//
// let person: typeof user = {
//   age: 33,
//   firstName: 'Got',
// };
//
//
// let age:number  = 1;
// // let age  = 1;
//
// // age = 'qwe';
//
// enum Size {
//   S,
//   M,
//   XL,
// }
// // enum Size {
// //   S = 44,
// //   M = 48,
// //   XL = 50,
// // }
//
// let num = Size.S;
// // let num = Size[44];
//
// enum Actions {
//   AddUser = 'ADD_USER',
//   RemoveUser = 'REMOVE_USER',
//
//   DeleteUser = RemoveUser, // alias
// }
//
// // const asction = Actions[Actions.AddUser] ошибка, надо учитывать верно
//
//
// function reducer(_state : number, action : {type: Actions}) : number {
//   switch (action.type) {
//     case Actions.AddUser: {
//       return 1;
//     }
//     case Actions.RemoveUser: {
//       return 1;
//     }
//
//     default: {
//       return 0;
//     }
//   }
// }

// let isDonae : boolean = false;
//
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary : number = 0b1010;
// let octal: number = 0o744;
// let nan: number = NaN;
// let infinity: number = Infinity;
//
// let myName : string = 'Igor';
//
// let nullValue : null = null;
// let undefinedValue : undefined = undefined;
//
// let bigNum : bigint = BigInt(100);
// let bigNum2 : bigint = BigInt(100n);
//
// function fibanacci(n:bigint) {
//   let result: bigint = 1n;
//
//   for (let last : bigint = 0n, i : bigint = 0n; i < n; i ++) {
//     const current : bigint = result;
//     result += last;
//     last = current;
//   }
//   return result;
// }
//
// const key1 : unique symbol = Symbol('key1');
// const key2 : symbol = Symbol('key2');
// const key3 : symbol = Symbol('key3');
//
// const strictObject : {[ key1: string] : number | string} = {
//   [key1] : 100,
//   [key2] : 'hi',
// };
//
// let a1 = strictObject[key1];  // symbol не может использоваться для индекса => unique symbol
//
// function fn(value: typeof key1): void {
//   // если не unique symbol, то можно передать все что угодно
//   // заменяем
// }
//
// fn(key1);

// interface IAnimationsOptions {
//   delayX: number;
//   delayY: number;
//   easing: 'ease-in' | 'ease-in-out' | 'ease-out';
//
// }
//
// // Такой класс есть физически, где-то объявлен и просто знай о нем
// declare class UIElement {
//   public animate(options: IAnimationsOptions): void;
// }
//
// new UIElement().animate({ delayX: 10, delayY: 10, easing: 'ease-out' });
//
// type Digits = 0 | 1 | 2 | 3;
//
// let num: Digits = 0;

// let anyType: any = {};
// anyType = 1;
// anyType['some_property'] = 5;
// anyType();
//
// let anyType1: unknown = {};
// anyType1 = 1;
// anyType1['some_property'] = 5;
// anyType1();
//
// let objType: Object = {};
// objType.a = 1;
// objType = 1;
// objType();
//
// let z : Object | null = 1;
// Object.create(z);
//
// let objType1: object = {};
// objType1.a = 1;
// objType1 = 1;
// objType1();
//
// let z1 : object | null = 1; // ошибка, все верно
// Object.create(z1);
//
// let voidType:void = undefined; // !== null - так как в конфиге стоит strict null check
//
// function fn() : void {} // вернется undefined

//
// let user : {
//   readonly firstName: string;
//   age?: number;
// } = {
//   firstName: 'Igor',
//   age: 34,
// };
//
// user.firstName = 'Oleg';
//
// let key: keyof (typeof user); // 'firstName' || 'age'
//
// key = 'age';
// key = 'gender';
//
// let firstNameType : (typeof user)['firstName'] = 1;
//
// type TACCOUNT = {
//   readonly firstName: string;
//   age?: number;
// };
//
// // let arr: number[] = [1, 2, 3, 4]
//
// let arr: TACCOUNT[] = [{
//   firstName: 'Igor',
//   age: 34,
// }];
//
// let arr2: (typeof user)[] = [{
//   firstName: 'Igor',
//   age: 34,
// }];
//
// let arr3: number[] = [1, 2, 3, 4];
// arr3[1000] = 1;
// arr3.push(1);
//
// let arr4: readonly  number[] = [1, 2, 3, 4]; // `let arr4: ReadonlyArray<number> = [1, 2, 3, 4];`
// arr4[1000] = 1;
// arr4.push(1);
//
// let tupleArr:[number, typeof user] = [1, { firstName: 'Igor' }];
// tupleArr[1000] = 1;
// tupleArr.push(1); // readonly решает эту проблему
//
// let a : string | number = 1;
// let b : number = a; // не может разобраться
//
// function fb(event: KeyboardEvent) {
//   let el = event.target;  // нет нужных вещей в интерфйеск
//   el.value; // нет подсказки, если посмотреть интерфейс
// }
//
// function fb2(event: KeyboardEvent) {
//   let el = event.target as HTMLInputElement;
//   // ts говорите, что я понимаюб ты определил тип, но я тебе дам уточнее наверняка
//   el.value;
// }
//
// // новые утверждения в ts
// let x = 10 as const;
// x = 22;
//
// let user1 = { firstName: 'Igor' } as const; // readonly олжен сделать
// user1.firstName = 'Qwerty';
//
// let y = [1, 2] as const;
// y[100] = 11;
// y.push();

// interface IAccount {
//   firstName: string,
// }
//
// class Account implements IAccount {
//   public firstName: string = 'Igor';
//
// }

// type TStop = {
//   stop: boolean
// }
//
// interface IMover {
//   move(): void;
//   // move(): this; // возвращаю контекст данного класса
//
//   getStatus(): { speed: number };
// }
//
// interface IShaker {
//   shake(): void;
//
//   getStatus(): { frequence: number };
// }
//
// interface IMoveShake extends IMover, IShaker, TStop { // множественное наследование интерфейсов
//   getStatus(): {
//     speed: number,
//     frequence: number,
//   };
// }
//
// interface IBase {
//   id: number;
// }
//
// let base1: IBase = { id: 23, name: 'Igor' };
//
// interface IBase {
//   name: string;
// }

interface IAccount<T> { // T - параметры для типов
  id: T;
  info: string[];
}

let user: IAccount<string> = {
  id: 1,
};

let admin: IAccount<number>;

interface IAccount1<someProp = string, U = string> {
  id: someProp;
  info: U[];
}

let admin1: IAccount1<number, number> = {
  id: 1,
  info: [1, 2, 3],
};

type TA = {
  id: number,
  name: string,
};

interface IA<T extends TA> {
  someProp : T;
}

let user1 : IA<{id: number, female: boolean}>;
let user2 : IA<{id: number, name: string, female: boolean}>;
