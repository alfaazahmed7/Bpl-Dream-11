import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';

const Card = ({ player }) => {
    return (
        <div>
            <div>
                <div className="card bg-base-100 max-w-sm shadow-sm">
                    <figure>
                        <img className='w-[90%] rounded-lg mt-3'
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
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;