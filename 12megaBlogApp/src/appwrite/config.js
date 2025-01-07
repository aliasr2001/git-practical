import Conf from "../conf/Conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor () {
        this.client
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.projectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                Conf.databaseId,
                Conf.collectionId,
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
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatePost (slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                Conf.databaseId,
                Conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                Conf.databaseId,
                Conf.collectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                Conf.databaseId,
                Conf.collectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
        }
    }

    async getPosts (queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                Conf.databaseId,
                Conf.collectionId,
                queries
            )
            
        } catch (error) {
            console.log('Appwrite service :: getPosts :: error', error)
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.bucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false;
        }
    }

    async deleteFile (fileId) {
        try {
            await this.bucket.deleteFile(
                Conf.bucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
        }
    }

    getFilePreview(fileId){
        try {
        return this.bucket.getFilePreview(
            Conf.bucketId,
            fileId,
        )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error)
        }
        
    }
    
    getFileDownload (fileId){
        try {
            return this.bucket.getFileDownload(
                Conf.bucketId,
                fileId
            )
            
        } catch (error) {
            console.log("Appwrite service :: getFileDownload :: error", error);
        }
    }
};


const service = new Service();

export default service;