import { useEffect, useState } from "react";
const UseEffectAssignment = () => {
  // Q1. Display Message – 3 Marks Create a component that displays: **"Welcome to React"**
  // Use `useEffect()` to print `"Component Loaded"` in the console when the component
  // loads.

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  //   Q3. Counter – 3 Marks Create a counter with: - Increment button - Decrement button -
  // Counter value Use `useEffect()` to print the current counter value in the console whenever it changes.
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("count");
  }, [count]);

  // Q4. Show/Hide Message – 3 Marks Create a button: **Show Message / Hide Message**
  // When the message visibility changes, use `useEffect()` to print: `Message is visible`
  // or `Message is hidden` in the console.

  const [showMessage, setShowMessage] = useState(false);

  const handlebtn = () => {
    setShowMessage(!showMessage);
  };

  useEffect(() => {
    if (showMessage) {
      console.log("Message is visible");
    } else {
      console.log("message is hide");
    }
  }, [showMessage]);

  //  Q5. Name Display – 3 Marks Create an input field where the user can enter their name.
  //  Use `useEffect()` to display: **Hello, Amit** when the name changes.

  const [name,setName] = useState("");
  
  const updateName = () => {
    if(name){
      setName("")
    }
  };

  useEffect(() => {
    console.log("Hello Harman");
  }, [name]);


  // Q6. Background Color – 3 Marks Create buttons for: - Red - Blue - Green When the user 
  // selects a color, use `useEffect()` to change the background color 
  // of a `<div>`.
  
  const[color,setColor]=useState();

  const redBtn=()=>{
    setColor("Red")
  }
  const blueBtn=()=>{
    setColor("Blue")
  }
   const greenBtn=()=>{
    setColor("Green")
  }

  useEffect(()=>{
    // document.getElementById("changeColor").style.backgroundColor=color;
  },[color])


  // Q7. Timer – 3 Marks Create a simple timer that starts from **0** and increases by 1 
  // every second. Use `useEffect()` to create the timer. Display: **Timer: 0** **Timer: 
  // 1** **Timer: 2** **Timer: 3** 

  // const[time,setTime]=useState(0);

  // useEffect(()=>{
  //   const interval= setInterval(()=>{
  //     setTime(time+1)
  //   },1000)
  //   return()=>clearInterval(interval)
  // },[time])

  // Q8. Digital Clock – 3 Marks Create a simple digital clock using React. Use `useEffect()` 
  // and `setInterval()` to update the current time every second. Example: **10:25:01 
  // AM** 


const[digitalClock,setDigitalClock]=useState(new Date());

useEffect(()=>{
  const clock=setInterval(()=>{
    setDigitalClock(new Date())
  },1000)
  return()=>clearInterval(clock)
},[])


// Q9. Product List – 3 Marks Create a simple product list using an array: - Laptop - 
// Mobile - Keyboard - Mouse Use `useEffect()` to print: **"Product list loaded"** when 
// the component loads. Display the products on the webpage. 






  return (
    <div>
      <h1>This useEffect Assignment</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handlebtn}>
        {showMessage ? "Show Message" : "Hide Message"}
      </button>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <button onClick={updateName}>Change Name</button>


      <div id="changeColor" style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:color
      }}>
        <button onClick={redBtn}>Red</button>
        <button onClick={blueBtn}>Blue</button>
        <button onClick={greenBtn}>Green</button>

        {/* <h1>{time}</h1> */}
      </div>

      <h1>{digitalClock.toLocaleTimeString()}</h1>

    </div>
  );
};

export default UseEffectAssignment;
