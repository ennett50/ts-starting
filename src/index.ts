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

