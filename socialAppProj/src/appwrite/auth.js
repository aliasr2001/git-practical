import {Client, Account, ID} from "appwrite"
import conf from '../conf/conf'

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount){
                //call another method
                return this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            console.log("AuthService :: createAccount :: error :: ", error )
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("AuthService :: login :: error :: ", error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("AuthService :: getCurrentUser :: error :: ", error)
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("AuthService :: logout :: error :: ", error)
        }
    }
}

const authService = new AuthService();

export default authService;