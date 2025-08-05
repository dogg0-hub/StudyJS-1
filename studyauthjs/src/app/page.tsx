'use client';
import { signIn } from "next-auth/react"

export default function Home(){
  const handleLogin = async() =>{
    signIn("github", { callbackUrl : "/dashboard"});
  }
  return(
    <div>
      Hi :)
      <p>未サインイン</p>
      <button className="galaxy" onClick={handleLogin}>Githubでサインイン</button>
    </div>
  )
}