import React, { useEffect, useRef, useState } from 'react'
import { Toast } from 'primereact/toast';
import Toolbarheader from '../components/Toolbar'
import RegistrarCategoria from '../components/RegistrarCategoria'
import Categoria from '../components/Categoria'
import { createRango, getRangos } from '../services/RangosServices';
import { createProductos, getProductos, removeProductos} from '../services/ProductosServices';
import IngresaProducto from '../components/IngresaProducto';
import TablaProducto from '../components/TablaProducto';
import EmptyState from '../components/EmptyState';


const ContainerPrincipal = () => {
    const toast = useRef(null);

    const [rangos, setRangos] = useState([]);
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        setRangos(getRangos());
        setProductos(getProductos())
    }, [])
    
    const handleProductoCreate = (producto)=>{
        if(productos.find((g)=>g.nombre.toLowerCase() === producto.nombre.toLowerCase())){
            toast.current.show({severity: "error", summary: "Producto ya existe", sticky: true});
            return ;
        }

        createProductos(producto);
        setProductos(getProductos());
        toast.current.show({severity: "info", summary: "Guerrero registrado", sticky: true});
    }


    const handleGuerreroRemove = (producto)=>{
       
       removeProductos(guerrero);
       setProductos(getProductos());
       toast.current.show({severity:"warn", summary: "Guerrero eliminado", sticky: true});
    }

    const handleRangoCreate = (rango)=>{
        if(rangos.find((r)=>r.nombre.toLowerCase() === rango.nombre.toLowerCase()) != null){
            toast.current.show({severity: "error", summary: "Rango ya existente", sticky:true});
            return;
        }
        createRango(rango);
        setRangos(getRangos());
        toast.current.show({severity: "info", summary : "Rago registrado", sticky: true});
    };

    return (
        <>
            <Toast ref={toast}></Toast>
            <Toolbarheader></Toolbarheader>
            <div className='row mt-5'>
                <div className="col">
                    <div className="row">
                        <div className="col col-md-4 ">
                          <RegistrarCategoria onCreateRango={handleRangoCreate} ></RegistrarCategoria>
                        </div>
                        <div className="col col-md-8">
                            <Categoria rangos={rangos}></Categoria>
                        </div>
                    </div>
                    { rangos && rangos.length > 0 ? <div className="row mt-5">
                        <div className="col col-md-4">
                            <IngresaProducto onCreateProducto={handleProductoCreate}  rangos={rangos} />
                        </div>
                        <div className="col col-md-8">
                            <TablaProducto productos={productos} onRemoveGuerrero={handleGuerreroRemove} />
                        </div>
                    </div> : <EmptyState title='No hay Rangos' contenido={"Debe registrar rangos para generar productos"}></EmptyState>
                    }
                </div>
            </div>
        </>
    )
}

export default ContainerPrincipal
