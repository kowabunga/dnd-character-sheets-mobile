import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
