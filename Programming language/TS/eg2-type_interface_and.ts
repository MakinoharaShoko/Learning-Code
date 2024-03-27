interface IP1 {
  a: number
}

type P2 = IP1 & {
  b: string;
}

const O1: P2 = {
  a: 1,
  b: '2'
}

console.log(O1);
