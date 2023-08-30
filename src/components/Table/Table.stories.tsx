import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { ColumnDef } from '@tanstack/react-table';
import { Pagination } from './interfaces';

const meta: Meta<typeof Table> = {
    title: 'Table',
    component: Table,
    argTypes: {
        loading: { control: 'boolean' },
    },
    args: {
        loading: false,
    },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
    render: (args) => {
        const [pagination, setPagination] = useState<Pagination>({
            pageIndex: 1,
            pageSize: 5,
        });
        console.log(pagination);
        return (
            <Table
                {...args}
                data={dataSource}
                columns={columns}
                pagination={pagination}
                onPaginationChange={setPagination}
                pageCount={2}
            />
        );
    },
};

export const NoData: Story = {
    render: (args) => <Table {...args} data={[]} columns={columns}/>,
};

interface ExampleData {
    name: string;
    age: number;
    gamePass: {
        enabled: boolean;
    };
}

const dataSource: ExampleData[] = [
    {
        name: 'Tom',
        age: 27,
        gamePass: {
            enabled: true,
        },
    },
    {
        name: 'Jerry',
        age: 22,
        gamePass: {
            enabled: false,
        },
    },
];

const columns: Array<ColumnDef<ExampleData>> = [
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'Age',
        accessorKey: 'age',
    },
    {
        header: 'Game pass',
        accessorKey: 'gamePass',
        accessorFn: ({ gamePass }) => gamePass.enabled ? 'yes' : 'no',
    },
];
