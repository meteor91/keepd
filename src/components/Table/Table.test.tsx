import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ColumnDef } from './index';
import { Table } from './Table';


interface ExampleData {
    name: string;
    age: number;
    gamePass: {
        enabled: boolean;
    };
}

describe('Table', () => {
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


    it('should render correct', () => {
        const { container } = render(
            <Table data={dataSource} columns={columns}/>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('table loading', () => {
        const { rerender } = render(
            <Table data={[]} columns={columns} loading={true}/>,
        );
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
        rerender(<Table data={[]} columns={columns} loading={false}/>);
        expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });

    it('display no data', () => {
        render(
            <Table data={[]} columns={columns} emptyText="no data"/>,
        );
        expect(screen.getByText('no data')).toBeInTheDocument();
    });

    it('paginate', () => {
        const mockOnPaginationChange = jest.fn();

        const paginationStatePage1 = { pageSize: 5, pageIndex: 0 };
        const paginationStatePage2 = { pageSize: 5, pageIndex: 1 };

        const { rerender } = render(
            <Table
                data={dataSource}
                columns={columns}
                onPaginationChange={(updater) => {
                    // @ts-ignore
                    mockOnPaginationChange(updater(paginationStatePage1));
                }}
                pagination={paginationStatePage1}
                pageCount={2}
            />,
        );

        expect(screen.getByTestId('prev-button')).toBeDisabled();

        fireEvent.click(screen.getByTestId('next-button'));
        expect(mockOnPaginationChange).toHaveBeenCalledTimes(1);
        expect(mockOnPaginationChange).toHaveBeenCalledWith(paginationStatePage2);
        
        rerender(
            <Table
                data={dataSource}
                columns={columns}
                onPaginationChange={(updater) => {
                    // @ts-ignore
                    mockOnPaginationChange(updater(paginationStatePage2));
                }}
                pagination={paginationStatePage2}
                pageCount={2}
            />,            
        );

        expect(screen.getByTestId('next-button')).toBeDisabled();
        fireEvent.click(screen.getByTestId('prev-button'));
        expect(mockOnPaginationChange).toHaveBeenCalledTimes(2);
        expect(mockOnPaginationChange).toHaveBeenCalledWith(paginationStatePage1);
    });
});
