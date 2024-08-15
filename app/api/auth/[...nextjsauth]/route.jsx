import NextAuth from "next-auth/next";
import GoogleProviders from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProviders({
      clientId: '',
      clientSecret: '',
    })
  ],
  async session({ session }) {

  },
  async signIn({ profile }) {

  }
});

export { handler as GET, handler as POST };
