// import { useRef } from 'react';
// const UseRefEx = () => {
//   const inputRef = useRef(null);
//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <h1>UseRef Example</h1>
//       <input type="text" placeholder="Enter your name" ref={inputRef} />
//       <button onClick={handleClick}>Focus Input</button>
//     </div> 
//   )
// }

// export default UseRefEx

// import { useEffect, useRef, useState } from "react";

import { useEffect, useRef, useState } from "react";

const UseRefEx = () => {
  const [count, setCount] = useState(0);

  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Current Count: {count}</h1>

      <h1>Previous Count: {prevCount.current}</h1>

      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default UseRefEx;
