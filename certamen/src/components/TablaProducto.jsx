import React from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
        
function TablaProducto({productos, onRemoveProducto}) {

    const BorrarProducto = (producto)=>{
        onRemoveProducto(producto);
    }

    const accionesTemplate = (producto)=>{
        return <Button severity='danger' label='chao pescao' onClick={()=>BorrarProducto(producto)} ></Button>
  };
  return (
    <div>
           <DataTable value={productos} tableStyle={{ minWidth: '50rem' }}>
                <Column field="nombre" header="Nombre"></Column>
                <Column field="tipo" header="Tipo"></Column>
                <Column field="nivel" header="Nivel"></Column>
                <Column field="rango.nombre" header="Rango"></Column>
                <Column header="Acciones" body={accionesTemplate}></Column>
            </DataTable>
    </div>
  )
}

export default TablaProducto