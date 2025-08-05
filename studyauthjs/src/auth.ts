import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"


export const { auth, handlers, signIn, signOut} = NextAuth({
    providers:[
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID ?? "",
            clientSecret:process.env.AUTH_GITHUB_SECRET ?? "",
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
    },
    callbacks:{
        authorized:async({auth})=>{
            return !!auth
        },
    }
})