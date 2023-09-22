import './assets/css/App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
