import React from 'react';
import { IconProps } from './interfaces';

export const ArrowUpDown: React.FC<IconProps> = ({
    width = 14,
    height = 16,
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 13L3.25 15.5M3.25 15.5L0.75 13M3.25 15.5V0.5M8.25 3L10.75 0.5M10.75 0.5L13.25 3M10.75 0.5V15.5" stroke="#5E718D" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};