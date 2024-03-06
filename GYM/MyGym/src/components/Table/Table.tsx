
import React from 'react';
import './Table.css';
import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

const Table: React.FC<TableProps> = ({data}) => {

    const TableHeaders = data.reduce((headers: Set<string>, obj: object) => {
        const keys: string[] = Object.keys(obj);
        keys.forEach((key) => headers.add(key));
        return headers;
    }, new Set<string>());

    const renderTableHead = Array.from(TableHeaders).map((head: string, key: number) => {
        return (
            <TableHead key={key} head={head} />
        );
    });

    const renderBody = data.flatMap((obj: object, key: number) => {
        return(
            <TableBody key={key} body = {obj}/>
        );
    });

    return(
        <table className="table">
            <thead>
                <tr>
                    {renderTableHead}
                </tr>
            </thead>
            <tbody>
                {renderBody}
            </tbody>
        </table>
    );
    
};

export default Table;