'use client';
import { signIn } from "next-auth/react"

export default function Home(){
  const handleLogin = async() =>{
    signIn("github", { callbackUrl : "/dashboard"});
  }

  const today= new Date();
  const thisMonth = today.getMonth();
  const thisYear = today.getFullYear();

  //当月の日数
  const thisMonthDateNumber = new Date(thisYear, thisMonth, 0).getDate();
  const thisMonthDate = addArrayForThisMonthDays(thisMonthDateNumber);
  const slicedThisMonthDate = slice7(thisMonthDate);
  
  //一週間の曜日リスト
  const kariYoubi = ["月","火","水","木","金","土","日"];
  const thisMonthDays = getThisMonthDays(thisYear, thisMonth, today);


  function getThisMonthDays(thisYear : number, thisMonth : number, today : Date){
    const firstDate = new Date(thisYear, thisMonth, 1);//初日
    const firstDateDay = firstDate.getDay();//初日の曜日
    console.log("firstDateDay is ", firstDateDay);

    let obj = {};
    for(let i = 0; i < thisMonthDateNumber; i++){
      let dateObj = new Date(thisYear, thisMonth, i + 1);
      let date = dateObj.getDate();
      let day = dateObj.getDay();
      let dayList : {[key : number]: string}= {0 : "日", 1 : "月", 2 : "火", 3 : "水", 4 : "木", 5 : "金", 6 : "土"};

      obj = {
        year : thisYear,
        month : thisMonth + 1,
        date : date,
        day : dayList[day],
      }
      console.log("obj",obj);
    }
  }

  //ある
  //日付を取得してスライス
  //年月日曜日対応したオブジェクト
  
  //当月の日数分を配列に入れる
  function addArrayForThisMonthDays(thisMonthDateNumber : number) : number[]{
    const results : number[] = [];
    for(let i = 0; i < thisMonthDateNumber; i++){
      results.push(i + 1);
    }
    results.forEach(element => {
      console.log("addArrayForThisMonthDays",element);
    });
    return results;
  }

    //7つに分割する
  function slice7(date : number[]) : number[][]{
    const results : number[][]= [];
    const dateNotPromise = date;
    for(let i = 0; i < dateNotPromise.length; i++){
      if(i % 7 === 0){
        const sliced = dateNotPromise.slice(i, i + 7);
        results.push(sliced);
        console.log("sliced",sliced);
      }
    }
    return results;
  }
  
  return(
    <>
    <div className="flex justify-between items-center px-4 py-2">
      <button className="galaxy" onClick={handleLogin}>Github認証でサインイン</button>
    </div>

    <h1 className="logo-font text-4xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text drop-shadow-lg text-center my-6">
      時差計算シェアカレンダー
    </h1>
    <h2 className="logo-font text-4xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text drop-shadow-lg text-center my-6">
      {`${thisMonth + 1}月`}
    </h2>
    <table className="w-full max-w-3xl mx-auto my-6 rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-2xl border border-white/20 p-6 border-separate border-spacing-4">
      <tbody>
        <tr className=" bg-white/10 backdrop-blur-sm">
          {kariYoubi.map((youbi,i)=>(
            <td key={i} className="text-white/50 text-center font-semibold py-2 px-4 rounded-md bg-white/10 backdrop-blur-sm">
              {youbi}
            </td>
          ))}
        </tr>
          {slicedThisMonthDate.map((array : number[], i : number)=>(
            <tr>
              {array.map((day : number, i : number)=>(
                <td key={i} className="galaxy-input galaxy-td text-center font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer">
                  {day}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
    
    </>
  )
}