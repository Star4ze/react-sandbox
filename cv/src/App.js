import './App.css';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Info from './Info/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <Contacts/>
      <Info/>
    </div>
  );
}

export default App;
