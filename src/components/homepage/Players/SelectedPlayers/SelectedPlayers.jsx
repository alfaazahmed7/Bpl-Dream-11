import React from 'react';
import SelectedCard from '../../../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelelctedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
        setSelelctedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div>
            {selectedPlayers.length === 0
                ? <div className='border-2 border-[#00000050] p-10 text-center rounded-xl'>
                    <h2 className='font-bold text-3xl mb-3'>No players selected yet</h2>
                    <p className='text-[#00000070] font-medium'>Go to available tab to select players</p>
                </div>
                : selectedPlayers.map((player, index) => {
                    return (
                        <SelectedCard
                            key={index}
                            player={player}
                            handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
                        />
                    )
                })}
        </div>
    );
};

export default SelectedPlayers;