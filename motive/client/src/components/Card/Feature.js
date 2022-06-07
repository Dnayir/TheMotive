import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import './Feature.css';

const Feature = ({ iconName, iconLabel }) => {
    const Icon = FontAwesome[iconName];

    return (
        <div className='feature'>
            <div className='feature-circle'>
                <Icon className='feature-icon' />
            </div>
            <span className='feature-label'>{iconLabel}</span>
        </div>
    );
};

export default Feature;