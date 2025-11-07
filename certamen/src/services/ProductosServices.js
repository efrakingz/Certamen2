const localKey = "productos_list_data";

const createProductos = (producto) => {
    let lista = [];
    const data = localStorage.getItem(localKey);
    if(data != null){
        lista = JSON.parse(data);
    }
    lista = [...lista, producto];
    localStorage.setItem(localKey, JSON.stringify(lista));
}

const getProductos = () => {
    const data = localStorage.getItem(localKey);
    if(data != null){
        return JSON.parse(data);
    }
    return [];
}

const deleteAllProductos = () => {
    localStorage.removeItem(localKey);
}

const removeProductos = (producto)=>{
    const productos = getGProductos();
    const lista = productos.filter(g=> g.nombre != producto.nombre)
    localStorage.setItem(localKey, JSON.stringify(lista));
}


export { createProductos, getProductos, deleteAllProductos ,removeProductos };