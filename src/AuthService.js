
export default class AuthService{
    static async login(email, password){
        const response = await axios.post("", {email, password});
        return response.data;
    }
}