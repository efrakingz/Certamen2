import { Panel } from 'primereact/panel'
import React, { useState } from 'react'
import {SelectButton} from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';

//TODO: Para validar props se tienda a utilizar PropTypes

function IngresaProducto({rangos=[], onCreateProducto=(producto)=>{}}) {
    const [nombre, setNombre] = useState("");
    const tiposProducto = ["Agua", "Panaderia"];
    const [tipo, setTipo] = useState(tiposProducto[0]);
    const [nivel, setNivel] = useState(1);
    const [rangoSel, setRangoSel] = useState(rangos[0])
   
    const handleClick = ()=>{

        const producto = {nombre: nombre,tipo:tipo,nivel:nivel, rango: rangoSel};
        onCreateProducto(producto);
    }

    return (
        <Panel header="Ingresar Producto">
            <div className="mb-3 d-flex flex-column ">
                <label htmlFor="nombre-producto-txt">Nombre</label>
                <InputText id="nombre-producto-txt"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    aria-describedby="nombre-producto-help" />
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                    <label htmlFor="tipo-producto-select">Tipo de Producto</label>
                    <SelectButton id='tipo-producto-select' options={tiposProducto} value={tipo} onChange={e=>setTipo(e.value)} ></SelectButton>
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                <label htmlFor="nivel-knob">cantidad</label>
                <Knob id='nivel-knob' value={nivel} min={1} max={20} onChange={e=>setNivel(e.value)} ></Knob>
            </div>
            <div className="mb-3 d-flex flex-column">
                 <label htmlFor="rango-producto-select">Categoria</label>
                 <Dropdown id="rango-producto-select" value={rangoSel} onChange={e=>{setRangoSel(e.value)}} options={rangos} optionLabel="nombre" 
                    placeholder="Seleccione un Rango" checkmark={true} highlightOnSelect={false} />
      
            </div>
            <div className="mb-3 d-flex flex-column">
                <Button label='Registrar' severity='info' onClick={handleClick} rounded></Button>
            </div>
        </Panel>
    )
}

export default IngresaProducto
