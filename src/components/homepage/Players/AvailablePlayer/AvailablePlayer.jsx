import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayer = ({ players, setCoin, coin, setSelelctedPlayers, selectedPlayers }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 mb-60'>
            {
                players.map((player, index) => {
                    return (
                        <Card key={index}
                            player={player}
                            setCoin={setCoin}
                            coin={coin}
                            setSelectedPlayers={setSelelctedPlayers}
                            selectedPlayers={selectedPlayers} />
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayer;