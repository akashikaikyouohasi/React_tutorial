import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}  {/* props(properties)のvalueの値を表示している */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i} />;  /* Squareコンポーネントにprops(properties)としてvalueの値を渡している */
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}



class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board /> {/* Boardコンポーネントを取得している */}
        </div>
        <div className="geme-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ----------------------------------------------------
// コンポーネントは<Game />のようにJSXの中でタグ形式で使用可能。
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
