import NextAuth from "next-auth/next";
import GoogleProviders from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProviders({
      clientId: '',
      clientSecret: '',
    })
  ]
});

export default handler;