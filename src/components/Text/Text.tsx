import React from 'react';

import style from './Text.module.less';

interface TextProps {
    children?: React.ReactNode;
}
export const Text: React.FC<TextProps> = (props) => {
    return (
        <div className={style.text}>
            {props.children}
        </div>
    );
};
