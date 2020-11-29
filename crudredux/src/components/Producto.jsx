import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
  const history = useHistory(); // habilitar history para redirección

  // Confirmar si desea eliminarlo
  const confirmarEliminarProdfucto = id => {

    // preguntar al usuario
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Un producto eliminado no se puede eliminar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar'
    }).then((result) => {
      if(result.value) {
        // pasarlo al action
        dispatch( borrarProductoAction(id));
        
      }
    })
  }

  // funcion que redirige de forma programada
  const redireccionarEdicion = producto => {
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`)
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td><span className="font-weigth-bold">{precio}</span></td>
      <td className="acciones">
        <button type="button" onClick={() => redireccionarEdicion(producto)} className="btn btn-primary mr-2">
          Editar
        </button>
        <button type="button" 
                className="btn btn-danger" 
                onClick={() => confirmarEliminarProdfucto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Producto;