import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '295836983989-bqdckbhlvcahk4cdmr05of57qh6j4sef.apps.googleusercontent.com',
      clientSecret: 'kjMWzAsOjAX9k9D1y3ZWFqnm'
    }),
    Providers.Facebook({
      clientId: '1860048714157590',
      clientSecret: 'b7b7842062b069d61beda644457a2724'
    })
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
})