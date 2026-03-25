import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelelctedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
        setSelelctedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div>
            {selectedPlayers.map((player) => {
                return (
                    <div className='mb-5'>
                        <div className='flex justify-between border-2 border-[#13131310] rounded-xl p-2'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <img className='w-[80px] rounded-lg' src={player.img} alt={player.playerName} />
                                </div>
                                <div>
                                    <h4 className='text-[#131313] text-2xl font-bold'>{player.playerName}</h4>
                                    <span className='text-[#131313] opacity-60 text-base'>{player.battingStyle}</span>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <button
                                    onClick={() => handleDeleteSelectedPlayer(player)}
                                    className='btn text-red-500'>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default SelectedPlayers;