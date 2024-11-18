import './App.css';
import Naglowek from './Naglowek';
import Wiersz from './Wiersz';

const godziny = [
  {nr:1, godzina:"8:00-8:45", pn:"PEN IM 323",
    wt:"EE PJ 325", sr:"J. pol MO 315",
    cz:"zaj. wych SE 102", pt:"biz i zarz SO 314"},
  {nr:2, godzina:"8:50-9:35", pn:"PEN IM 323",
    wt:"EE PJ 325", sr:"J. pol MO 315",
    cz:"zaj. wych SE 102", pt:"biz i zarz SO 314"},
] ;

function App() {
  return (
    <div className="App">
      <h1>plan lekcji</h1>
      <table>
        <Naglowek />
        {godziny.map((e) => 
          <Wiersz key={e.nr} dane={e} />
        )}
      </table>
    </div>
  );
}

export default App;