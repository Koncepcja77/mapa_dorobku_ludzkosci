import Graph from "./components/Graph";
import "./App.css";

function App() {
  return (
    <div>

      <header className="header">
        <h1>Historyczna sieć wpływów</h1>

        <div className="headerContent">

          <div className="intro">
            <p>
              Ta mapa przedstawia sieć wpływów historycznych pomiędzy
              różnymi osobami, państwami i wydarzeniami. 
              Każdy element mapy reprezentuje ważny punkt historii,
              a połączenia pokazują relacje między nimi.
            </p>
          </div>

          <div className="legend">
            <ul>
              <li>Każdy prostokąt to wydarzenie lub osoba</li>
              <li>Linie pokazują wpływ lub powiązanie</li>
              <li>Elementy są rozmieszczone chronologicznie</li>
              <li>Mapa pokazuje powiązania między epokami</li>
            </ul>
          </div>

        </div>
      </header>

      <Graph />

    </div>
  );
}

export default App;

