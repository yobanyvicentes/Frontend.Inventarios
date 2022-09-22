import React, { useState, useEffect } from 'react';
import { getInventarios } from '../../services/inventarioService';
import { InventarioCrear } from './InventarioCrear';

export const InventarioView = () => {

  const [inventarios, setInventarios] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const listarInventarios = async () => {
    try {
      const { data } = await getInventarios();
      setInventarios(data);
    } catch (error) {
      console.log('ocurrió un error')
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    listarInventarios();
  }, []);

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          inventarios.map((invent) => {
            return (
              <div className="col" key={invent._id}>
                <div className="card">
                  <img src={invent.foto} className="card-img-top" alt={invent.foto} />
                  <div className="card-body">
                    <h5 className="card-title">{`${invent.descripcion}`}</h5>
                    <p className="card-text">{`Serial: ${invent.serial}`}</p>
                    <p className="card-text">{`Marca: ${invent.marca.nombre}`}</p>
                    <p className="card-text">{`Precio: ${invent.precio}`}</p>
                    <p className="card-text">Ver más...</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
        {
        openModal ? <InventarioCrear handleOpenModal={handleOpenModal}/> :
        <button className="btn btn-primary btnplus" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>
        }
    </div>
  )
}
