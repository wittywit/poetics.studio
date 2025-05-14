import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

// Configure authentication for CMS access
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      // Only allow specific GitHub users to access the CMS
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          // Only allow specific GitHub usernames to access the CMS
          // Replace with your GitHub username
          isAllowed: ["yourusername"].includes(profile.login),
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow sign in if the user is allowed
      return user.isAllowed
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
