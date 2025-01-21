import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router/router.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <RouterProvider router={ routers }/>
    </div>
  );
}

export default App;
