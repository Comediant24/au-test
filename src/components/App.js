import './App.scss';
import Form from './Form';

function App() {
  return (
    <div className="app">
      <h1 className="title">
        Здравствуйте,{' '}
        <span className="title__user">
          Человек №{Math.floor(Math.random() * 1000)}
        </span>
      </h1>
      <Form />
    </div>
  );
}

export default App;
