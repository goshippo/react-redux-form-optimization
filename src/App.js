import logo from './shippo_logo_dark.png';
import './App.css';

import ParentComponent from './ParentComponent';
import BetterParentComponent from './BetterParentComponent';
import SimpleForm from './SimpleForm'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ul>
        <li>Use Redux profiler.</li> 
        <li>Enable 'Highlight updates when component render'</li>
        <li>The Form component is same in both the Parent Components</li>
        <li>Type into any of the form fields and the re-rendered components will be highlighted.</li>
        <li>In BadParentComponent - parent and chilren both re-render.</li>
        <li>In BetterParentComponent - only form re-render - which is how it should have been</li>
      </ul>
      <ParentComponent>
        
        <SimpleForm />
      </ParentComponent>

      <br/><br/>
      <BetterParentComponent>
        <SimpleForm />
      </BetterParentComponent>

    </div>
  );
}

export default App;
