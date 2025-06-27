'use client'
import {useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react";
export default function Login(props:any){
    const { data } = useSession();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async() => {
        const result = await signIn("credentials", {
            username: userName,
            password: password,
            callbackUrl: "/dashboard",
            redirect: false,
            });
        if (result?.error) {
            alert("ログインに失敗しました");
            } else if (result?.url) {
            window.location.href = result.url; // 成功時リダイレクト
            }
        };
    
    

    if(data){
        console.log(data);
        return(
            <>
            ログインしています。<br/>
            <button onClick={(()=>signOut())}>ログアウト</button>
            </>
        )
    }
    return(
        <>
        ログインしていません。<br />
        <button onClick={()=> signIn()} className="button">ログイン</button>
        </> 
    )
}