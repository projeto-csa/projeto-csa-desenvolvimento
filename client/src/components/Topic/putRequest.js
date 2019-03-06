import axios from 'axios'

const putRequest = (payload, handleData) => {
  axios({
        method: 'POST',
        url: 'http://localhost:1337/respostas',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: payload
      })
      .then(response => {
        console.log('foi isso que voltou do banco: ', response.data)
        handleData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
}
export default putRequest
