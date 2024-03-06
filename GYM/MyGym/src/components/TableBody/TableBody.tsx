import React from 'react';
import './TableBody.css';

const TableBody: React.FC<TableBody> = ({body}) => {

    return(
        <tr>
            {Object.values(body).map((value, index) => (<td key={index}>{value}</td>))}
        </tr>
    );
};

export default TableBody;