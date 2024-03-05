
import './Table.css';

const Table = ( props:TableProps ) => {
    const [id, name, objective, description, date] = props.tableHeaders;

    const renderBody = props.tableData.map((data) => {
        return(
            <tr key={data.id_deporte}>
                <th scope="row">{data.id_deporte}</th>
                <td>{data.deporte_nombre}</td>
                <td>{data.deporte_objetivo}</td>
                <td>{data.deporte_descripcion}</td>
                <td>{data.deporte_fecha_registro}</td>
            </tr>
        );

    })

    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">{id}</th>
                    <th scope="col">{name}</th>
                    <th scope="col">{objective}</th>
                    <th scope="col">{description}</th>
                    <th scope="col">{date}</th>
                </tr>
            </thead>
            <tbody>
                {renderBody}
            </tbody>
        </table>
    );
    
};

export default Table;