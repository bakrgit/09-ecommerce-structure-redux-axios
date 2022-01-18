import axios from 'axios'


const baseUrl = axios.create({ baseURL: "https://aqueous-dusk-43524.herokuapp.com" })

export default baseUrl