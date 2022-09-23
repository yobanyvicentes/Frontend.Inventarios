import { axiosInstance } from "../helpers/axios-config";

export const getTipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const postTipos = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const putTipos = (tipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoId}`,data,  {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}
