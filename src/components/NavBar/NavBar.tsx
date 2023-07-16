import React, { type JSX } from 'react';
import style from './NavBar.module.less';

export interface NavBarItem {
    label: string;
    icon?: JSX.Element;
}
export interface NavBarProps {
    items: NavBarItem[];
}

export const NavBar: React.FC<NavBarProps> = (props) => {
    const { items } = props;

    return (
        <ul className={style['nav-bar']}>
            {items.map(item => (
                <li key={item.label}>
                    <div className={style.item}>
                        {item.icon && <div className={style.icon}>{item.icon}</div>}
                        <div className={style.label}>{item.label}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
