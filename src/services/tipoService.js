import { axiosInstance } from "../helpers/axios-config";

export const getTipos = () => {
    return axiosInstance.get('tipo', {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const postTipos = (data) => {
    return axiosInstance.post('tipo', data, {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const putTipos = (tipoId, data) => {
    return axiosInstance.put(`tipo/${tipoId}`,data,  {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}
