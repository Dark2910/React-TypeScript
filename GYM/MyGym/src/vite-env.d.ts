/// <reference types="vite/client" />

interface Sport {
    id_deporte: number,
    deporte_nombre: string,
    deporte_objetivo: string,
    deporte_descripcion: string,
    deporte_fecha_registro: string
}

interface Athletes {
    id_deportista: number,
    deportista_matricula: number,
    deportista_nombre: string,
    genero_nombre: string,
    carrera_nombre: string,
    deportista_fecha_registro: string
}

interface TableProps {
    data: Sport[] | Athletes[],
}

interface TableHead {
    head: string,
}

interface TableBody {
    body: object,
}