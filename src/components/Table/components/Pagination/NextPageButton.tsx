import React from 'react';
import { ArrowLeftIcon } from '../../../../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../../icons/ArrowRightIcon';
import styles from './NextPageButton.module.less';
import clsx from 'clsx';

interface NextPageButtonProps {
    direction: 'prev' | 'next';
    disabled: boolean;
    onClick: () => void;
}

export const NextPageButton: React.FC<NextPageButtonProps> = ({
    direction,
    disabled,
    onClick,
}) => {
    return (
        <button
            data-testid={`${direction}-button`}
            className={clsx(styles['next-page-button'], disabled && styles.disabled)}
            onClick={onClick}
            disabled={disabled}
        >
            {direction === 'prev'
                ? (<ArrowLeftIcon />)
                : (<ArrowRightIcon />)}
        </button>
    );
};
