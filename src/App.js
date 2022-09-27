import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Header} from './components/ui/Header';
import {InventarioView} from './components/inventarios/InventarioView';
import {MarcaView} from './components/marcas/MarcaView';
import {TipoEquipoView} from './components/tipos/TipoEquipoView';
import {UsuarioView} from './components/usuarios/UsuarioView';
import {InventarioUpdate} from './components/inventarios/InventarioUpdate';
import {UsuarioUpdate} from './components/usuarios/UsuarioUpdate';
import {EstadoEquipoView} from './components/estados/EstadoEquipoView';
import {EstadoEquipoUpdate} from './components/estados/EstadoEquipoUpdate';
import {TipoEquipoUpdate} from './components/tipos/TipoEquipoUpdate';
import {MarcaUpdate} from './components/marcas/MarcaUpdate';


export const App = () => {
    return <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={InventarioView} />
                    <Route exact path='/usuarios' component={UsuarioView}/>
                    <Route exact path='/marcas' component={MarcaView}/>
                    <Route exact path='/estadoEquipos' component={EstadoEquipoView}/>
                    <Route exact path='/tipos' component={TipoEquipoView}/>
                    <Route exact path='/inventario/edit/:inventarioId' component={InventarioUpdate}/>
                    <Route exact path='/usuario/edit/:usuarioId' component={UsuarioUpdate}/>
                    <Route exact path='/estadoEquipo/edit/:estadoEquipoId' component={EstadoEquipoUpdate}/>
                    <Route exact path='/tipoEquipo/edit/:tipoEquipoId' component={TipoEquipoUpdate}/>
                    <Route exact path='/marca/edit/:marcaId' component={MarcaUpdate}/>
                    <Redirect to='/'/>
                </Switch>
            </Router>
}
