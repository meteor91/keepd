import React from 'react';

import styles from './Layout.module.less';
import clsx from 'clsx';

interface SidebarProps {
    children?: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <aside className={styles.sidebar}>
            {children}
        </aside>
    );
};

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    );
};

interface ContentProps {
    children?: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <section className={styles.content}>
            {children}
        </section>
    );
};

interface LayoutProps {
    children?: React.ReactNode;
    direction?: 'vertical' | 'horizontal';
}
export const Layout = ({ children, direction = 'horizontal' }: LayoutProps): React.ReactElement => {
    return (
        <section className={clsx(styles.layout, direction === 'vertical' && styles.vertical)}>
            {children}
        </section>
    );
};

Layout.Sidebar = Sidebar;
Layout.Content = Content;
Layout.Header = Header;
