'use client'

type Props = {
    signedIn : boolean
}

export function AuthButtons({ signedIn} : Props){
    return signedIn ? (
        <button className="galaxy" onClick={() => (window.location.href = "/api/auth/signout")}>サインアウト</button>

    ) : (
        <button className="galaxy" onClick={() => (window.location.href = "/api/auth/signin/github")}>githubでサインイン</button>
    )
}