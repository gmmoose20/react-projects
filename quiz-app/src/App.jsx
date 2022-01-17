import { useState } from 'react';
import './app.css';
import Trivia from './components/Trivia';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  const pointsPyramid = [
    { id: 1, points: '100' },
    { id: 2, points: '200' },
    { id: 3, points: '300' },
    { id: 4, points: '500' },
    { id: 5, points: '1000' },
    { id: 6, points: '2000' },
    { id: 7, points: '4000' },
    { id: 8, points: '8000' },
    { id: 9, points: '16000' },
    { id: 10, points: '32000' },
    { id: 11, points: '6400' },
    { id: 12, points: '125000' },
    { id: 13, points: '250000' },
    { id: 14, points: '500000' },
    { id: 15, points: '1000000' },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia />
        </div>
      </div>
      <div className="pyramid">
        <ul className="pointsList">
          {pointsPyramid.map((p) => (
            <li className={questionNumber === p.id ? 'pointsListItem active' : 'pointsListItem'}>
              <span className="pointsListItemRound">{p.id}</span>
              <span className="pointsListItemAmount">{p.points}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
