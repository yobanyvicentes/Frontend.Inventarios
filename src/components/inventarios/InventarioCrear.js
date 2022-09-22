import React from 'react';

export const InventarioCrear = ({ handleOpenModal }) => {
  return (
    <div className='sidebar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='xClose'>
              <h3>
                Nuevo Activo
              </h3>
              <i className="btn btn-danger fa-sharp fa-solid fa-xmark" onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <hr />
          </div>
        </div>
        <form className='form'>
          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label for="serialid" className="form-label">Serial</label>
                <input type="text" name='serial' className="form-control" id="serialid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="modeloid" className="form-label">Modelo</label>
                <input type="text" name='modelo' className="form-control" id="modeloid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="descripcionid" className="form-label">Descripción</label>
                <input type="text" name='descripcion' className="form-control" id="descripcionid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="valorid" className="form-label">Valor</label>
                <input type="number" name='valor' className="form-control" id="valorid" />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label for="fotoid" className="form-label">Foto</label>
                <input type="text" name='foto' className="form-control" id="fotoid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="fechacompraid" className="form-label">Fecha Compra</label>
                <input type="date" name='fechacompra' className="form-control" id="fechacompraid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="precioid" className="form-label">Precio</label>
                <input type="number" name='precio' className="form-control" id="precioid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="usuarioid" className="form-label">Usuario</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>-- elegir usuario --</option>
                  <option value="1">usuarioService</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label for="marcaid" className="form-label">Marca</label>
                <input type="text" name='marca' className="form-control" id="marcaid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="tipoequipoid" className="form-label">Tipo Equipo</label>
                <input type="text" name='tipoequipo' className="form-control" id="tipoequipoid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label for="estadoequipoid" className="form-label">Estado Equipo</label>
                <input type="text" name='estadoequipo' className="form-control" id="estadoequipoid" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
