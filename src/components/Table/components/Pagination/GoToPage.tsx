import React, { useState } from 'react';
import styles from './GoToPage.module.less';
import { fixControlledValue } from '../../../../utils/commonUtils';

interface GoToPageProps {
    onPageChange: (page: number) => void;
    currentPage: number;
    pageCount: number;
}
export const GoToPage: React.FC<GoToPageProps> = ({
    currentPage,
    onPageChange,
    pageCount,
}) => {
    const [page, setPage] = useState<number | undefined>();

    const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.valueAsNumber;
        if (value >=0 && value <= pageCount) {
            setPage(value);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && page) {
            onPageChange(page);
        }
    };

    return (
        <div className={styles['goto-page']}>
            <div className={styles.label}>Page: {currentPage+1} / {pageCount} Go to</div>
            <div>
                <input
                    type="number"
                    onChange={handlePageChange}
                    onKeyDown={handleKeyDown}
                    value={fixControlledValue(page)}
                />
            </div>
        </div>
    );
};
