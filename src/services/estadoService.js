import { axiosInstance } from "../helpers/axios-config";

export const getEstados = () => {
    return axiosInstance.get('estado', {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const postEstados = (data) => {
    return axiosInstance.post('estado', data, {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}

export const putEstados = (estadoId, data) => {
    return axiosInstance.put(`estado/${estadoId}`,data,  {
        headers:{
            'Content-type' : 'application/json'
        }
    })
}
