interface Itest {
  name: string
  age: number
}

// 一种写法
type Person3 = {
  [P in keyof Itest]?: Itest[P];
}

const P3: Person3 = {}

// 使属性可选

// Omit 去除某个键，传入的是类型和键，Partical 表示使键可选，Pick代表从类型选择一些键，返回的都是类型。
// Exlude 代表从一个联合类型排除一些类型，这时候 keyof T 是联合类型。
type MakePropertyPartical<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type MakePropertyPartical2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & Partial<Pick<T, K>>;


type PersonWithoutAge = MakePropertyPartical<Itest, 'age'>;
type PersonWithoutAge2 = MakePropertyPartical2<Itest, 'age'>;
const Person3: PersonWithoutAge = {name: 'Person3'};
console.log(Person3);
const Person3_2: PersonWithoutAge2 = {name: 'Person3_2'};
console.log(Person3_2);

type PersonWithoutAll = MakePropertyPartical<Itest, 'name' | 'age'>;
const Person4: PersonWithoutAll = {};
console.log(Person4);
