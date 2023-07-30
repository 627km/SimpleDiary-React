import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA update! count: ${count}`);
  });
  return <div>{count}</div>;
});

// prop인 obj가 객체이므로 얕은비교(주소에 의한 비교)
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB update! count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // return true; // 이전 프롭스와 현재 프롭스가 같다. -> 리렌더링을 일으키지 않는다.
  // return false; // 이전 프롭스와 현재 프롭스가 다르다. -> 리렌더링을 일으킨다.
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

const MemoizedCouterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>CounterA</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCouterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
