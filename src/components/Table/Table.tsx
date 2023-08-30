import React from 'react';
import { useReactTable, ColumnDef, getCoreRowModel, OnChangeFn } from '@tanstack/react-table';
import { Pagination as PaginationProps } from './interfaces';
import style from './Table.module.less';
import { BodyRow } from './components/BodyRow';
import { Pagination } from './components/Pagination/Pagination';
import { HeaderRow } from './components/HeaderRow';
import { Spin } from '../Spin';
import { PaginationState } from '@tanstack/table-core/src/features/Pagination';

export interface TableProps<RecordType> {
    data: RecordType[];
    columns: Array<ColumnDef<RecordType>>;
    loading?: boolean;
    emptyText?: string;
    pagination?: PaginationProps;
    pageCount?: number;
    onPaginationChange?: OnChangeFn<PaginationState>;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const Table = <T, >(props: TableProps<T>): React.ReactElement => {
    const {
        columns,
        data,
        emptyText,
        loading,
        pagination,
        onPaginationChange,
        pageCount,
    } = props;

    const table = useReactTable<T>({
        data,
        columns,
        state: {
            pagination,
        },
        pageCount: pageCount,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        onPaginationChange: onPaginationChange,
    });

    return (
        <Spin spinning={loading}>
            <table className={style.table}>
                <thead className={style.thead}>
                    {table.getHeaderGroups().map((headerGroup, index) => (
                        <HeaderRow<T> headerGroup={headerGroup} key={index}/>
                    ))}
                </thead>
                <tbody className={style.tbody}>
                    {table.getRowModel().rows.length === 0
                        ? (
                            <tr className={style.tr}>
                                <td className={style.cell} colSpan={columns.length}>
                                    <div className={style.noData}>
                                        {emptyText ?? 'no data'}
                                    </div>
                                </td>
                            </tr>
                        )
                        : table.getRowModel().rows.map(row => (
                            <BodyRow<T> row={row} key={row.id} />
                        ))
                    }
                </tbody>
            </table>
            {pagination && (
                <Pagination<T>
                    table={table}
                />
            )}
        </Spin>
    );
};
