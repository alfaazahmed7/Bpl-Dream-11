import './App.css';
import Navbar from './components/homepage/Navbar/Navbar';
import Banner from "./components/homepage/Banner/Banner";
import Player from './components/homepage/Players/Player';
import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Subscribe from './components/homepage/Subscribe/Subscribe';
import Footer from './components/homepage/Footer/Footer';

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] = useState(5000000);

  return (
    <>
      <Navbar coin={coin} />
      <Banner coin={coin} setCoin={setCoin} />

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Player playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
      </Suspense>

      <Subscribe />
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App