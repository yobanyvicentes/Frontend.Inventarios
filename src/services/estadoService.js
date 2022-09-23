import { axiosInstance } from "../helpers/axios-config";

export const getEstados = () => {
    return axiosInstance.get('estado-equipo', {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const postEstados = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const putEstados = (estadoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoId}`,data,  {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}
