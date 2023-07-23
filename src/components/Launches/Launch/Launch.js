import React from 'react';

const Launch = ({launch}) => {
    const {massion_name, launch_year, links:{mission_patch_small}} = launch;

    return (
        <div>
            <div>Name: {massion_name} </div>
            <div>Year: {launch_year} </div>
            <img src={mission_patch_small} alt="mission_name"/>
        </div>
    );
};

export default Launch;
