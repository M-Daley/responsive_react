import './App.css';
import Header from './components/Header'
import Split from './components/Split'
import SideBySide from './components/SideBySide';
import propSettings from './components/config'

console.log(propSettings)

function App() {
  return (
    <div className="App">
      <Header />
      <Split />
      <SideBySide {...propSettings.section_one} />
      <SideBySide {...propSettings.section_two} />
    </div>
  );
}

export default App;
