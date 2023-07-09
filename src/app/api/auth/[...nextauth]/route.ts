import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { username, password } = credentials;

        const admin = {
          id: "0",
          name: "admin",
          email: "admin@example.com",
          password: "root",
        };

        if (username === admin.name && password === admin.password) {
          return new Promise((resolve) => {
            resolve(admin);
          });
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
