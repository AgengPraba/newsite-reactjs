import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function RootLayout() {
    return (
      <>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="container mx-auto p-4">
               <Outlet/>
            </main>
            <Footer/>
        </div>
      </>
  );
}

export default RootLayout;