
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
    
  );
}

export default App;
