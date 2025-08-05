'use client'
import { signOut } from "next-auth/react"

export default function Home(){
    const handleLogout = async() =>{
        signOut({callbackUrl : "/", redirect:true });
    }
    return(
        <div>Dashboard<br />
            ログインしたら入れる画面<br />
            <button onClick={handleLogout} className="galaxy">サインアウトする</button>
        </div>
    )
}