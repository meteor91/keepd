import React from 'react';

import styles from './Layout.module.less';

interface SidebarProps {
    children?: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    );
};

interface ContentProps {
    children?: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

interface LayoutProps {
    children?: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps): React.ReactElement => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

Layout.Sidebar = Sidebar;
Layout.Content = Content;
