// interface IAccount {
//   firstName: string;
//   age: number;
// }
//
// let user = IAccount;


interface IAccount {
  firstName: string;
  age: number;
}

let user = {
  firstName: 'Игорь',
  age: 33,
};

let person: typeof user = {
  age: 33,
  firstName: 'Got',
};


let age:number  = 1;
// let age  = 1;

// age = 'qwe';

enum Size {
  S,
  M,
  XL,
}
// enum Size {
//   S = 44,
//   M = 48,
//   XL = 50,
// }

let num = Size.S;
// let num = Size[44];

enum Actions {
  AddUser = 'ADD_USER',
  RemoveUser = 'REMOVE_USER',

  DeleteUser = RemoveUser, // alias
}

// const asction = Actions[Actions.AddUser] ошибка, надо учитывать верно


function reducer(_state : number, action : {type: Actions}) : number {
  switch (action.type) {
    case Actions.AddUser: {
      return 1;
    }
    case Actions.RemoveUser: {
      return 1;
    }

    default: {
      return 0;
    }
  }
}
