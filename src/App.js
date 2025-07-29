import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './pages/Counter';
import Clock from './pages/Clock';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
