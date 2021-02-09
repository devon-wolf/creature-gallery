import './App.css';
import creatureData from './data/image-data.js';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';
import Dropdown from './components/Dropdown.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Dropdown options={creatureData}/>
      <ImageList creatures={creatureData}/>
    </div>
  );
}

export default App;
