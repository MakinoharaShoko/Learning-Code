interface Itest {
    name: string
    age: number
}
type Person2 = Pick<Itest, Exclude<keyof Itest, 'age'>> & { age?: number };
type Person3 = {
    [P in keyof Itest]?: Itest[P];
}

type MakePropertyPartical<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

const obj: Person2 = { name: 'test' };
const obj2 = { age: 1 };