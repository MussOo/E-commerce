import axios from "axios"
import Swal from "sweetalert2"



export const create = async (data) => {
    return axios.post('http://localhost:3000/order', 
        data, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    )
    .then(response => {
        if(response.status === 201){
            Swal.fire({
                icon: 'success',
                title: 'Commande passée',
                showConfirmButton: false,
                timer: 1500
            })
            .then(() => {
                window.location.href = '/profile'
            })
        }
    })
    .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: err.response.data.message
        })
    })
}

export const getOrders = async () => {
    return axios.get('http://localhost:3000/order', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const deleteOrder = async (id) => {
    return axios.delete(`http://localhost:3000/order/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        if(response.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'Commande supprimée',
                showConfirmButton: false,
                timer: 500
            })
            .then(() => {
                window.location.href = '/profile'
            })
        }
    })
}