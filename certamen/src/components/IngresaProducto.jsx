import { Panel } from 'primereact/panel'
import React, { useState } from 'react'
import {SelectButton} from 'primereact/selectbutton';
import { InputNumber } from 'primereact/InputNumber';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';

//TODO: Para validar props se tienda a utilizar PropTypes

function IngresaProducto({onCreateProducto=(producto)=>{}}) {
    
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']; 
    const [dia, setDia] = useState(null);

    const tipoPago = ['Efectivo', 'Tarjeta'];
    const [tipoPagos, setTipoPago] = useState(tipoPago[0]);
    const peliculas = [
        { label: 'Wifi Ralph', value: 'Wifi Ralph' },
        { label: 'Dragon Ball Super Broly', value: 'Dragon Ball Super Broly' },
        { label: 'Cascanueces', value: 'Cascanueces' },
        { label: 'El Grinch', value: 'El Grinch' }
    ];  
    const [pelicula, setPelicula] = useState(peliculas);
    const [cantidad, setCantidad] = useState(1);
    const [ciudad, setCiudad] = useState('');
  
    

const handleClick = () => {
        const producto = {
            dia: dia,
            tipoPago: tipoPagos,
            pelicula: pelicula,
            cantidad: cantidad,
            ciudad: ciudad
        };
        onCreateProducto(producto);
    };

    

    return (
        <Panel header="Comprar Entrada">
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="dia-select">Día</label>
                <Dropdown id="dia-select"options={dias} onChange={(e) => setDia(e.value)} value={dia}  placeholder="Seleccione un día" />
            </div>
        
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="tipo-pago-select">Tipo de Pago</label>
                <SelectButton id="tipo-pago-select" options={tipoPago} onChange={(e) => setTipoPago(e.value)}value={tipoPagos} />
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="cantidadEntra-input">Cantidad de Entradas</label>
                <InputNumber id="cantidadEntra-input" value={cantidad} onChange={(e) => setCantidad(e.value)} min={1} />
            </div>

            <div className="mb-3 d-flex flex-column">
                <label htmlFor="ciudad-input">Ciudad</label>
<InputText id="ciudad-input" value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ingrese la ciudad" />

            </div><div className="mb-3 d-flex flex-column">
                <label htmlFor="pelicula-list">Película</label>
                <ListBox id="pelicula-list"  options={peliculas} onChange={(e) => setPelicula(e.value)} value={pelicula} />
            </div>
            <div className="mb-3 d-flex flex-column">
                <Button label="Comprar" severity="success" rounded onClick={handleClick}  />
            </div>
        </Panel>
    );

}

export default IngresaProducto
