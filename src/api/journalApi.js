import axios from 'axios'

const journalApi = axios.create({
    baseURL:'https://vue-demos-14efe-default-rtdb.firebaseio.com'
})

export default journalApi