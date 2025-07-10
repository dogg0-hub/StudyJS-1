import { auth } from "@/auth"
import { AuthButtons } from "@/components/authButtons"

export default async function Home(){
  const session = await auth()

  return(
    <div>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <AuthButtons signedIn />
        </>
      ) : (
        <>
          <AuthButtons signedIn={false}/>
        </>
      )}
    </div>
  )
}