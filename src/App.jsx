import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home/Home';
import Transport from './Components/pages/Transport/Transport';
import Product from './Components/pages/Product/Product'
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;