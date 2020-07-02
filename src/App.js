import React from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeCompleted, increment, decrement } from './action'
import todos from './reducer/todos';

function App() {
  const state = useSelector(state => state)
  const data = state.todos.data;
  const counter = state.todos.counter
  const dispatch = useDispatch();
  return (
    <div className="container">
      <header className="App-header">
        <h4>React + Redux</h4>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <ul className="ullist">
              {data.map(items => {
                return (
                  <li key={items.id} className={items.completed?"bg-success":"bg-secondary"} >
                    <label>
                      <input type="checkbox" value={items.id}
                        onChange={(e) => dispatch(changeCompleted(e.target.value, e.target.checked))} checked={items.completed} />
                  &nbsp;{items.title}</label>
                  </li>
                )
              })}

            </ul>
          </div>
          <div className="col-md-6">
            <h4>Width : {counter}%</h4>
            <div className="bg-success" style={{ width: `${counter}%` }}>
              <p>&nbsp;</p>
            </div>

            <hr />

            <div className="btn-group">
              <button type="button" className="btn btn-success" onClick={() => dispatch(increment(10))}>
                <i className="fa fa-plus"></i>
              </button>
              <button type="button" className="btn btn-success" onClick={() => dispatch(decrement(10))}>
                <i className="fa fa-minus"></i>
              </button>
            </div>
          </div>
        </div>



      </header>
    </div>
  );
}

export default App;
