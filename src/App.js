import './App.css';
import creatureData from './data/image-data.js';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList creatures={creatureData}/>
    </div>
  );
}

export default App;
