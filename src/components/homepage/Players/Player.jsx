import React, { use } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';


const Player = ({ playersPromise }) => {
    const players = use(playersPromise);

    return (
        <div>
            <AvailablePlayer players = {players} />
        </div>
    );
};

export default Player;