import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router/router.js';

function App() {
  return (
    <div>
      <RouterProvider router={ routers }/>
    </div>
  );
}

export default App;
