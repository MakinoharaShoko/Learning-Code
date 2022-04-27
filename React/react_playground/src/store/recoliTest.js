import {
    atom,
} from 'recoil';

export const testList = atom({
    key: 'testList',
    default: { list: [1, 2] }
})