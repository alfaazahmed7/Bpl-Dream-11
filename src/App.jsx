import './App.css';
import Navbar from './components/homepage/Navbar/Navbar';
import Banner from "./components/homepage/Banner/Banner";
import Player from './components/homepage/Players/Player';
import { Suspense } from 'react';

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar />
      <Banner />

      <Suspense
        fallback={(<span className="loading loading-spinner loading-xl"></span>
        )}>
        <Player playersPromise={playersPromise} />
      </Suspense>
    </>
  )
}

export default App