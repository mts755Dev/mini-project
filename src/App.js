import './App.css';
import BurgerBase from './components/BurgerBase/BurgerBase';
import Navbar from './components/Navbar/Navbar';

const App = ()=> {
  return (
    <div>
      <Navbar />
      <main className="Content">
        <BurgerBase />
      </main>
    </div>
  );
}

export default App;
