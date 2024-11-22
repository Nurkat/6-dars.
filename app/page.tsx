
"use client"
import { useEffect, useState } from 'react'
import type { Metadata } from 'next'
import axios from 'axios'
import UserItems from './components/UserItems';
 
// export const metadata: Metadata = {
//   title: 'my website',
// };
export interface UserType {
  id:number;
  email:string;
  name:string;
  website:string
}

export default function Page() {
  const [user, setUser] = useState<Array<UserType>>([])
  const [use, setUse] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUser(res.data.map((item:UserType) => {
        const userData = {
          id:item.id,
          email:item.email,
          name:item.name,
          website:item.website
        }
        return userData
      }))
      setUse(res.data)
    })
  },[])
  console.log(use);
  
  return (
    <div className=' w-[1250px] flex flex-wrap justify-between px-3 p-2 gap-y-4 mx-auto'>
      {user.map((item:UserType) => <UserItems key={item.id} item={item} />)}
    </div>
  )
}