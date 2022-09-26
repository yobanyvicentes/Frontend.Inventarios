import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { getUsuarios } from '../../services/usuarioService';
import { useParams } from 'react-router-dom';
import { putUsuarios, getUsuarioById } from '../../services/usuarioService';
import { Link } from 'react-router-dom';

export const UsuarioUpdate = () => {

    const { usuarioId = '' } = useParams();
    const [usuario, setUsuario] = useState({});

    const [valoresform, setValoresform] = useState({});
    const { nombre = '', email = '', estado = '' } = valoresform;

    const getUsuario = async () => {
        try {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Cargando....',
                text: 'Por favor espere',
                timer: 5000//milisegundos
            });
            Swal.showLoading();
            Swal.close();
            const { data } = await getUsuarioById(usuarioId);
            setUsuario(data);
        } catch (error) {
            Swal.close();
            console.log(error);
        }
    }
    useEffect(() => {
        getUsuario();
    }, [usuarioId]);

    useEffect(() => {
        setValoresform({
            nombre: usuario.nombre,
            email: usuario.email,
            estado: usuario.estado,
        });
    }, [usuario])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const usuarioModel = {
            nombre,
            email,
            estado
        }
        try {
            console.log(usuarioModel);
            Swal.fire({
                allowOutsideClick: false, title: 'Cargando....', text: 'Por favor espere', timer: 2000//milisegundos
            });
            const { data } = await putUsuarios(usuarioId, usuarioModel);
            console.log(data);
            Swal.close();
        } catch (error) {
            Swal.fire('Error', 'hubo un error...', 'error')
            console.log("error al crear el usuario");
        }
    }

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresform({ ...valoresform, [name]: value });
    }

    const [usuarios, setUsuarios] = useState([]);

    const listarUsuarios = async () => {
        try {
            Swal.fire({
                allowOutsideClick: false,
                title: 'Cargando....',
                text: 'Por favor espere',
                timer: 2000//milisegundos
            });
            Swal.showLoading();
            const { data } = await getUsuarios();
            setUsuarios(data);
            Swal.close();
        } catch (error) {
            console.log('ocurrió un error')
            Swal.close();
        }
    };

    useEffect(() => {
        listarUsuarios();
    }, []);

    return (
        <div className='container-fluid'>
            <div className='card mt-3 mb-2'>
                <div className='card-header'>
                    <h5>Usuarios</h5>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col'>
                            <form
                                className='form'
                                onSubmit={(e) => {
                                    handleOnSubmit(e)
                                }
                                }
                            >
                                <div className='row' te>
                                    <h5>Actualizar Usuario</h5>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='form-label' for='nombreid'>Nombre</label>
                                            <input className='form-control' type="text" name="nombre" value={nombre} id='nombreid' required
                                                onChange={(e) => {
                                                    handleOnChange(e);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='form-label' for='emailid'>Email</label>
                                            <input className='form-control' type="text" name="email" value={email} id='emailid' required
                                                onChange={(e) => {
                                                    handleOnChange(e);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='mb-3'>
                                            <label className='form-label' for='estadoid'>Estado</label>
                                            <select className='form-select' name="estado" value={estado} id='estadoid' required
                                                onChange={(e) => {
                                                    handleOnChange(e);
                                                }}
                                            >
                                                <option selected>--Seleccione--</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-1'>
                                        <button className='btn btn-primary' type="onSubmit">1-Guardar</button>
                                    </div>
                                    <div className='col-md-3'>
                                        <Link to={`../../usuarios`}>
                                        <button className='btn btn-success' type="onSubmit">2-Ver Datos Actualizados</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="col-md-1">#</th>
                                        <th className="col-md-2">Nombre</th>
                                        <th className="col-md-2">Email</th>
                                        <th className="col-md-1">Estado</th>
                                        <th className="col-md-2">Fecha Creación</th>
                                        <th className="col-md-3">Fecha Actualización</th>
                                        <th className="col-md-1">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usuarios.map((usuario) => {
                                            return (
                                                <tr key={usuario._id}>
                                                    <th className="index" value='index'>{1 + usuarios.indexOf(usuario)} </th>
                                                    <td className="col-md-2">{usuario.nombre}</td>
                                                    <td className="col-md-2">{usuario.email}</td>
                                                    <td className="col-md-1">{usuario.estado}</td>
                                                    <td className="col-md-2">{usuario.fechaCreacion}</td>
                                                    <td className="col-md-3">{usuario.fechaActualizacion}</td>
                                                    <td className="col-md-1">     </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

