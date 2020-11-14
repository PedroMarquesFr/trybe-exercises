const task = (value) => {
  return <li>{value}</li>;
};

const compromissos = [
  "ler",
  "estudar",
  "academia",
  "escutar musica",
  "aula sincrona 14:00",
];

function App() {
  return (
    <div className="App">
      {compromissos.map((compromisso) => task(compromisso))}
    </div>
  );
}

export default App;
