import conf from "../conf/conf"
import { Client, ID, Databases, Storage, Query} from "appwrite"

export class DataService{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log("Data Service :: createPost :: error :: ", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   featuredImage,
                   status 
                }
            )
        } catch (error) {
            console.log("Data Service :: updatePost :: error :: ", error)
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Data Service :: deletePost :: error :: ", error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Data Service :: getPost :: error :: ", error)
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Data Service :: getAllPosts :: error :: ", error)
        }
    }

    // File Upload Services

    async uploadFile(image){
        try {
            return await this.bucket.createFile(
                conf.appwriteStorageId,
                ID.unique,
                image
            )
        } catch (error) {
            console.log("Data Service :: uploadFile :: error :: ", error)
            return false;
        }
    }

    async deleteFile(imageId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteStorageId,
                imageId
            )
        } catch (error) {
            console.log("Data Service :: deleteFile :: error :: ", error)
            return false;
        }
    }

    getFeaturedImagePreview(imageId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteStorageId,
                imageId
            )
        } catch (error) {
            console.log("Data Service :: getFeaturedImagePreview :: error :: ", error)
        }
        
    }
}

const dataService = new DataService();
export default dataService;