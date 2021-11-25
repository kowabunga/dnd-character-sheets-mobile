import { Outlet } from 'react-router-dom';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
