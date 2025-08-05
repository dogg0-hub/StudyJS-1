'use client'
import { signOut } from "next-auth/react"
import { Chocolate_Classical_Sans } from "next/font/google";

export default function Home(){
    const handleLogout = async() =>{
        signOut({callbackUrl : "/", redirect:true });
    }

    async function applyHandler(){
        await alert("ボタンが押されました")
        //postを送る
        //route.tsでpostを受け取る
        //fetch使う
    }

    return(
        <div>Dashboard<br />
            ログインしたら入れる画面<br />
            <button onClick={handleLogout} className="galaxy">サインアウトする</button>
            <form action="post">
                <p>入力欄</p>
                <input type="text" className="galaxy-input"/><br/>
                <button onClick={()=>applyHandler()} className="galaxy">POST</button>
            </form>
        </div>
    )
}