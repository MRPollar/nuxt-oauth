import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId:"Ov23li83tMgZfP1MVINm",
           clientSecret:"4ac8f921ad0d3fbf716e2b44c41b4d264cd7b54e"
        })
    ]
})