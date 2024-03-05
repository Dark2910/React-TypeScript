/// <reference types="vite/client" />

interface Sport {
    id_deporte: number,
    deporte_nombre: string,
    deporte_objetivo: string,
    deporte_descripcion: string,
    deporte_fecha_registro: string
}


interface TableProps {
    tableHeaders: string[],
    tableData: Sport[]
}