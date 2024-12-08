import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'




function Github() {
    let data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aliasr2001')
    //     .then(response => response.json())
    //     .then(response => {setData(response)})
    // }, [])
  return (
    <>
    <div className="flex justify-center items-center p-4 gap-3 bg-gray-700 text-white">
    <img className='rounded-xl' src={data.avatar_url} alt="My github profile" width={200}  />
    <div className='text-3xl'>Follower: {data.followers}</div>
    </div>
    </>
    
  )
}

export default Github

export const loaderGithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/aliasr2001')
    return response.json()
}