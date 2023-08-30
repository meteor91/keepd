import React from 'react';
import { Table as ITable } from '@tanstack/react-table';
import { NextPageButton } from './NextPageButton';
import styles from './Pagination.module.less';
import { GoToPage } from './GoToPage';

interface PaginationProps<T> {
    table: ITable<T>;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const Pagination = <T, >( props : PaginationProps<T>): React.ReactElement => {
    const { table } = props;

    return (
        <div className={styles.pagination}>
            <div className={styles.item}>
                <NextPageButton
                    direction="prev"
                    disabled={!table.getCanPreviousPage()}
                    onClick={table.previousPage}
                />
            </div>
            <div className={styles.item}>
                <GoToPage
                    currentPage={table.getState().pagination.pageIndex}
                    onPageChange={table.setPageIndex}
                    pageCount={table.getPageCount()}
                />
            </div>
            <div className={styles.item}>
                <NextPageButton
                    direction="next"
                    disabled={!table.getCanNextPage()}
                    onClick={table.nextPage}
                />
            </div>
        </div>
    );
};
