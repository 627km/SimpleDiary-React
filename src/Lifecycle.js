import React, { useState, useEffect } from "react";

const Lifecycle = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // // component 가 mount 될 때 하고 싶은 것이 있을 경우
  // useEffect(() => {
  //   console.log("Mount!");
  // }, []);

  // // component 가 update 될 때 하고 싶은 것이 있을 경우
  // useEffect(() => {
  //   console.log("Update!");
  // });

  // useEffect(() => {
  //   console.log(`count is update : ${count}`);
  //   if (count > 5) {
  //     alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
  //     setCount(1);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is update : ${text}`);
  // }, [text]);

  const UnmountTest = () => {
    useEffect(() => {
      console.log("mount!");
      return () => {
        // unmount 시점에 동작
        console.log("Unmount!");
      };
    }, []);
    return <div>Unmount Testing component</div>;
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
    </div>
  );
};
export default Lifecycle;
