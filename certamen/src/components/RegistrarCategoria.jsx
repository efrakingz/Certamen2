import React, { useState } from 'react'
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
function RegistrarCategoria({ onCreateRango = (rango) => { } }) {

    const [nombre, setNombre] = useState("");
    const handleClick = () => {
        const rango = { nombre };
        onCreateRango(rango);
    };

    return (
        <Panel header="Registrar Categoria">
            <div className="mb-6 d-flex flex-column mt-3 ">
                <label htmlFor="nombre-rango-txt" >Nombre</label>
                <InputText id="nombre-rango-txt" className="mb-6 d-flex flex-column mt-3 "
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    aria-describedby="nombre-rango-help" />
                <small id="nombre-rango-help" className="mb-6 d-flex flex-column mt-3 ">
                    Ingrese descripcion (nombre) de la Categoria
                </small>
            </div>
            <div className="mb-4 mt-2">
                <Button onClick={handleClick} label='Registrar' severity='info' ></Button>
            </div>
        </Panel>
    )
}

export default RegistrarCategoria
