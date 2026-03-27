import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers, }) => {
    const [isSelected, setIsSelelcted] = useState(false);

    const handleChoosePlayer = () => {
        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(coin - player.price);
        }
        else {
            toast.error("You do not have enough coin to purchase this player");
            return;
        }

        toast.success(`${player.playerName} is selected`);
        setIsSelelcted(true);

        setSelectedPlayers([...selectedPlayers, player]);
    }
    
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className='rounded-lg mt-3 h-56 w-[90%]'
                    src={player.img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    <FaUser />
                    <h2 className="card-title">{player.playerName}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center gap-2'>
                        <FaFlag className='opacity-70' />
                        <p className='opacity-70'>{player.playerCountry}</p>
                    </div>
                    <button className='btn'>{player.playerType}</button>
                </div>
                <div className="divider"></div>
                <span className='font-bold'>{player.rating}</span>
                <div className='flex justify-between items-center font-bold'>
                    <span>{player.battingStyle}</span>
                    <span>{player.bowlingStyle}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className='font-bold'>Price: $1500000</span>
                    <button className="btn"
                        onClick={handleChoosePlayer}
                        disabled={isSelected ? true : false}
                    >
                        {isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;