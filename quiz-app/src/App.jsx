import "./app.css";

function App() {
  return (
    <div className="app">
      <div className="main">main</div>
      <div className="pyramid">
        <ul className="pointsList">
          <li className="pointsListItem">
            <span className="pointsListItemRound">4</span>
            <span className="pointsListItemAmount">400</span>
          </li>
          <li className="pointsListItem">
            <span className="pointsListItemRound">3</span>
            <span className="pointsListItemAmount">300</span>
          </li>
          <li className="pointsListItem">
            <span className="pointsListItemRound">2</span>
            <span className="pointsListItemAmount">200</span>
          </li>
          <li className="pointsListItem">
            <span className="pointsListItemRound">1</span>
            <span className="pointsListItemAmount">100</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
