import './App.scss';
import Form from './Form';
import Wellcome from './Wellcome';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Wellcome
          classSelector="header__wrapper"
          user={`Человек №${Math.floor(Math.random() * 1000)}`}
        />
      </header>
      <main className="main">
        <Form />
      </main>
    </div>
  );
}

export default App;
