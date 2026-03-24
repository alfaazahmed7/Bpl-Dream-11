import React, { use } from 'react';

const Player = ({ playersPromise }) => {
    const data = use(playersPromise);
    console.log(data);

    return (
        <div>

        </div>
    );
};

export default Player;