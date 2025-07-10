import { auth } from "@/auth"
import { AuthButtons } from "@/components/authButtons"

export default async function Home(){
  const session = await auth()

  return(
    <div>
      Hi :)
    </div>
  )
}