import React from 'react';

import styles from './Grid.module.less';

interface RowProps {
    children?: React.ReactNode;
}

export const Row: React.FC<RowProps> = (props) => (
    <div className={styles.row}>{props.children}</div>
);
