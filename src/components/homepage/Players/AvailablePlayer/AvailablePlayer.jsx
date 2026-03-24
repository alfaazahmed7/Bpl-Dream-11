import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayer = ({ players, setCoin, coin }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 mb-10'>
            {
                players.map((player) => {
                    return (
                        <Card player={player} setCoin = {setCoin} coin = {coin} />
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayer;