import React from 'react';
import { flexRender, Row } from '@tanstack/react-table';
import style from '../Table.module.less';

interface BodyRowProps<T> {
    row: Row<T>;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const BodyRow = <T, >({ row }: BodyRowProps<T>): React.ReactElement => (
    <tr className={style.tr}>
        {row.getVisibleCells().map(cell => (
            <td key={cell.id} className={style.cell}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
        ))}
    </tr>
);
