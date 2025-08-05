'use client';
import { signIn } from "next-auth/react"

export default function Home(){
  const handleLogin = async() =>{
    signIn("github", { callbackUrl : "/dashboard"});
  }
  return(
    <div>
      <p>現在、未サインインです</p>
      <button className="galaxy" onClick={handleLogin}>Github認証でサインイン</button>
    </div>
  )
}