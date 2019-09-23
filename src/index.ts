// import { generateMenu } from './menu/menu';
// import { menuList } from './menu/data';
//
// const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// navMenu.innerHTML = generateMenu(menuList);
//
// navMenu.onclick = (e: MouseEvent) => {
//   const el = e.target as HTMLAnchorElement;
//   const classList = el.classList;
//   if (!classList.contains('title')) {
//     return;
//   }
//   const parentLi: HTMLElement = el.parentNode as HTMLLIElement;
//   parentLi.classList.toggle('menu-open');
// };

// export function average(a: number, b: number, c: number): string {
//   const avg: number = (a + b + c) / 3;
//   return `Average is ${avg}`;
// }

// average(1, 2, 2, 4); // количество
// average(1, 2, '2'); // тип
// let avg: number = average(1, 2, 2); // что возвращает
//
// function average1(a: number, b?: number, c?: number): string {
//   if (b === undefined) {
//     b = 0;
//   }
//   if (c === undefined) {
//     c = 0;
//   }
//   const avg: number = (a + b + c) / 3;
//   return `Average is ${avg}`;
// }
//
// average1(1);
// average1(1, 2);
// average1(1, 2, 3);
//
// function average2(a: number, b: number = 0, c: number = 0): string {
//   const avg: number = (a + b + c) / 3;
//   return `Average is ${avg}`;
// }
//
// average2(1);
// average2(1, 2);
// average2(1, 2, 3);
//
// function isString(a: number | string): a is string { // type guard boolean не сработает
//   return typeof a === 'string';
// }
//
// function average3(...arr: (number | string)[]): string {
//   let total: number = 0;
//   for (const a of arr) {
//     if (typeof a === 'string') { // if (isString(a)) {
//       total += parseInt(a, 10);
//       continue;
//     }
//     total += a;
//   }
//   const avg: number = total / arr.length;
//   return `Average is ${avg}`;
// }
//
// average3('1', 3);
// average3(1, 3, 5, 6);
//
// function average4(a: string, b: number): string;
// function average4(a: number, b: string, c: number): string;
// function average4(...arr: (number | string)[]): string {
//   let total: number = 0;
//   for (const a of arr) {
//     if (typeof a === 'string') { // if (isString(a)) {
//       total += parseInt(a, 10);
//       continue;
//     }
//     total += a;
//   }
//   const avg: number = total / arr.length;
//   return `Average is ${avg}`;
// }
//
// average4('1', 3);
// average4(3, '3', 5);
// average4(1, 3, 4);

// interface IX {
//   x: number;
// }
//
// interface ISum {
//   sum(): number;
// }
//
// class BasePoint {
//   public readonly x!: number;
//   protected y!:number;
//   private z!:number;
// }
//
// let bP:BasePoint = new BasePoint(); // только публичное свойство
// // bP.x
//
// class Point extends BasePoint implements IX, ISum {
//   // public x!: number;
//   // public y!: number;
//
//   public constructor() {
//     super();
//     // this.x
//     // this.y
//   }
//
//   public sum(): number {
//     return this.x + this.y;
//   }
// }


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
class a extends Singleton{}
