import {forwardRef, ReactNode, useImperativeHandle, useRef, useState} from "react";

export type TestRefRef = {
  increment: () => void;
};

type TestRefProps = {
  children?: ReactNode | null;
};

export const TestRef = forwardRef<TestRefRef, TestRefProps>(
  (props, ref) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    useImperativeHandle(ref, () => ({
      increment
    }));
    return (<div>Test Ref：{count}</div>);
  }
);
