import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import CustomerProvider from "./context/CustomerContext";
function App() {
  return (
    <>
    <BrowserRouter>
      <CustomerProvider>
          <Layout />
      </CustomerProvider>
    </BrowserRouter>  
     
    </>
  )
}

export default App;
