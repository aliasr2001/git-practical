export default function userProfile({params}: any){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen py-2 gap-2">
            <h1 className="text-red-300 text-center text-3xl font-bold ">Profile.</h1>
            <p className="text-2xl">Profile Page
            <span className="p-1 ml-1 rounded bg-red-300 text-black">{params.id}</span>
            </p>
        </div>
    )
}