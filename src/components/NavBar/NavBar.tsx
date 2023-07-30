import React, { type JSX } from 'react';
import clsx from 'clsx';
import style from './NavBar.module.less';

export interface NavBarItem {
    label: string | React.ReactNode;
    icon?: JSX.Element;
    key: string | number;
}
export interface NavBarProps {
    items: NavBarItem[];
    bordered?: boolean;
    selectedKey?: string | number;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
    const { items, bordered, selectedKey } = props;

    return (
        <ul className={clsx(style['nav-bar'], bordered && style.bordered)}>
            {items.map(item => (
                <li key={item.key} className={clsx((item.key === selectedKey) && style.active)}>
                    <div className={style.item}>
                        {item.icon && <div className={style.icon}>{item.icon}</div>}
                        <div className={style.label}>{item.label}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
