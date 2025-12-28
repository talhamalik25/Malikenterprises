import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home/Home';
import Transport from './Components/pages/Transport/Transport';
import Product from './Components/pages/Product/Product'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;