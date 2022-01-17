import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt"
  },

  jwt: {
    secret: "FOIJOIJ450435iJFODfi"
  },

  secret: "FOIJOIJ450435iJFODfi",

  providers: [
    Credentials({
      type: "credentials",

      credentials: {
        accessToken: { label: "accessToken", type: "text" },
        expire: { label: "expire", type: "text" }
      },

      async authorize(credentials: Record<"accessToken" | "expire", string> | undefined) {
        return {
          accessToken: credentials!.accessToken,
          expire: new Date(credentials!.expire)
        };
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.expire = user.expire;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user && token) {
        session.user.accessToken = token.accessToken;
        session.user.expire = token.expire;
      }

      return session;
    }
  }
});
