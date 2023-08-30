import React, { Children } from 'react';
import clsx from 'clsx';
import styles from './Space.module.less';

type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

interface SpaceProps {
    children?: React.ReactNode;
    justify?: SpaceJustify;
}

export const Space: React.FC<SpaceProps> = (props) => {
    const { children, justify } = props;

    const nodes = Children.toArray(children).map((child, index) => {
        // TODO подумать о key
        const key = `space-item-${index}`;
        return (
            <div key={key}>
                {child}
            </div>
        );
    });

    return (
        <div className={clsx(styles.space, styles[`space-${justify}`])}>
            {nodes}
        </div>
    );
};