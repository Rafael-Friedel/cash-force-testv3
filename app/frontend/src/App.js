import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyProvider from './context/myProvider';
import Orders from './pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Orders />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
