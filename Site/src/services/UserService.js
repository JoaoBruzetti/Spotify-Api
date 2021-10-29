import axios from 'axios'

const API_URL = 'http://localhost:8080/users/save'

class UserService {

    gerUsers(){
        axios.get(API_URL)
    }
}

export default new UserService()