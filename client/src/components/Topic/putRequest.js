import axios from 'axios'

const putRequest = (payload, handleData) => {
  axios
      .post('http://localhost:1337/respostas', payload)
      .then(response => {
        console.log('foi isso que voltou do banco: ', response.data)
        handleData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
}
export default putRequest
