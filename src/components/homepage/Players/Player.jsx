import React, { use, useState } from 'react';
import AvailablePlayer from './AvailablePlayer/AvailablePlayer';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';


const Player = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise);
    const [selectedType, setSelectedType] = useState("available");

    return (
        <>
            <div className='w-10/12 mx-auto flex justify-between pb-5'>
                {selectedType === "available"
                    ? <h2 className='text-[#131313] font-bold text-[28px]'>Available Players</h2>
                    : <h2 className='text-[#131313] font-bold text-[28px]'>Selected Players</h2>}
                <div>
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available"
                            ? "bg-linear-to-r from-[#494949] to-[#313131] text-white" : ""} 
                            rounded-r-none rounded-l-xl`}>Available</button>
                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn ${selectedType === "selected"
                            ? "bg-linear-to-r from-[#494949] to-[#313131] text-white" : ""} 
                         rounded-l-none rounded-r-xl`}>Selected</button>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                {selectedType === "available" ? <AvailablePlayer players={players} setCoin = {setCoin} coin = {coin} /> : <SelectedPlayers />}
            </div>
        </>
    );
};

export default Player;