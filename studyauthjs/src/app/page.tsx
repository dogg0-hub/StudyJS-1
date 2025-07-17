'use client';
import { signIn } from "next-auth/react"
import { AuthButtons } from "@/components/authButtons"
import { login, logout } from "@/lib/actions/auth";

export default function Home(){
  const handleLogin = async() =>{
    signIn("github", { callbackUrl : "/"});
  }
  return(
    <div>
      Hi :)
      <p>未サインイン</p>
      <button className="galaxy" onClick={handleLogin}>Githubでサインイン</button>
    </div>
  )
}