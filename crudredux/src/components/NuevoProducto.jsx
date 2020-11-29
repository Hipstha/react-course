import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { mostrarAlerta, ocultarAlerta, ocultarAlertaAction } from '../actions/alertaActions';

// Actions de redux
import { crearNuevoProducto, crearNuevoProductoAction } from '../actions/productoActions';


const NuevoProducto = ({history}) => {

  // state del componente
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState(0);

  // useDispatch y te crea una función
  const dispatch = useDispatch();

  // ACCEDER AL STATE DEL STORE
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector(state => state.alerta.alerta);

  // manda a llamar el action de productoAction
  const agregarProducto = (producto) => dispatch( crearNuevoProducto(producto) );

  const submitNuevoProducto = e => {
    e.preventDefault();

    // validar formulario
    if (nombre.trim() === '' || precio <= 0) {
      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      };
      dispatch(mostrarAlerta(alerta));
      return;
    }
    // si no hay errores
    dispatch(  ocultarAlertaAction() );

    // crear el nuevo producto
    agregarProducto({
      nombre, precio
    });

    // redireccion al home
    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weigth-bold">
              Agregar Nuevo producto
            </h2>

            {
              alerta ? <p className={alerta.classes}> {alerta.msg}</p>  : null
            }

            <form onSubmit={submitNuevoProducto}>

              <div className="form-group">
                <label>Nombre producto</label>
                <input type="text"
                       className="form-control"
                       placeholder="Nombre Producto" 
                       name="nombre" 
                       value={nombre} 
                       onChange={e => guardarNombre(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input type="number" 
                       className="form-control" 
                       placeholder="Precio Productos" 
                       name="Precio" 
                       value={precio}
                       onChange={e => guardarPrecio(Number(e.target.value))}
                />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Enviar
              </button>

            </form>

            { cargando ? <p>cargando...</p> : null}
            { error ? <p className="alert alert-danger p2 mt-4 text-center"></p> : null }
          </div>
        </div>
      </div>
    </div>
  )
};

export default NuevoProducto;