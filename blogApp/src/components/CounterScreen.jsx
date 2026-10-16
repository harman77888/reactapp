import useCounter from "../Hooks/useCount"


const CounterScreen = () => {
    const {count,increment,decrement,reset}=useCounter()

  return (
    <>
      <div>This is counter Screen</div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterScreen
