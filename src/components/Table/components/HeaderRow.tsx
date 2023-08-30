import { flexRender, HeaderGroup } from '@tanstack/react-table';
import React from 'react';
import style from '../Table.module.less';

interface HeaderRowProps<T> {
    headerGroup: HeaderGroup<T>
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const HeaderRow = <T, >({ headerGroup }: HeaderRowProps<T>): React.ReactElement => (
    <tr className={style.tr}>
        {headerGroup.headers.map((header) => (
            <th key={header.id} className={style.cell}>
                {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
        ))}
    </tr>
);
