import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
        
function TablaProducto({productos, onRemoveProducto}) {
    const valor= productos[4]*5000
    console.log(productos[0])
    const BorrarProducto = (producto)=>{
        onRemoveProducto(producto);
    }

    const accionesTemplate = (producto)=>{
        return <Button severity='danger' label='chao pescao' onClick={()=>BorrarProducto(producto)} ></Button>
  };
  return (
   <div className="p-fluid">
  <DataTable value={productos} tableStyle={{ minWidth: '50rem' }} paginator rows={5}>
                <Column field="dia" header="Día" />
                <Column field="tipoPago" header="Tipo de Pago" />
                <Column field="pelicula" header="Película" />
                <Column field="cantidad" header="Cantidad" />
                <Column field="ciudad" header="Ciudad" />
                <Column header="Valor" body={(rowData) => `$${rowData.cantidad * 5000}`}>
                </Column>
                
            </DataTable>
        </div>

  )
}

export default TablaProducto