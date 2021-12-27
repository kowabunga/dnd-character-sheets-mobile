import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from './context/userContext';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function App() {
  const userContext = useContext(UserContext);
  const { retrieveOrSaveJWT, jwt } = userContext;

  useEffect(() => {
    retrieveOrSaveJWT();
  }, [jwt]);

  return (
    <main className='d-flex flex-column h-100'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
