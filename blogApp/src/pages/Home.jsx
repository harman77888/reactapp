
function App() {
  const names = ["Harman", "Aman", "Raj"];

  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default App;