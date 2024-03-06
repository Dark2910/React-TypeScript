import React from 'react';
import './TableHead.css';

const TableHead: React.FC<TableHead> = ({head}) => {
    return(
        <th scope="col">{head}</th>
    );
};

export default TableHead;