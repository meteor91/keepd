// import React from 'react';
import styles from '../src/styles/keepd.less';
// @ts-ignore
export const DefaultDecorator =  (Story, args) => {
    const variant = args.parameters.variant

    let style;

    if (variant === 'pocket') {
        style = { width: '300px'};
    }

    return (
        <div className={`${styles.keepd}`} style={style} >
            <Story />
        </div>
    )
}