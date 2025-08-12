'use client';
import { signIn } from "next-auth/react"

export default function Home(){
  const handleLogin = async() =>{
    signIn("github", { callbackUrl : "/dashboard"});
  }

  const today= new Date();
  const thisMonth = today.getMonth();
  const thisYear = today.getFullYear();
  //仮データ
  const days = [0,1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30];
  

  return(
    <>
    <div className="flex justify-between items-center px-4 py-2">
      <button className="galaxy" onClick={handleLogin}>Github認証でサインイン</button>
    </div>

    <h1 className="logo-font text-4xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text drop-shadow-lg text-center my-6">
      時差計算シェアカレンダー
    </h1>
    <table className="w-full max-w-3xl mx-auto mt-6 border-separate border-spacing-2 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-xl">
      <tbody>
          {days.map((day, i)=>(
            <>
            
            {i !== 0 && i % 7 === 0 ?
            <tr>
              <td className="galaxy-input galaxy-td">
              {day + "改行"}
              </td>

            </tr> : <td className="galaxy-input galaxy-td">
              {day}
              </td>}
            </>
        ))}
      </tbody>
    </table>
    
    </>
  )
}