import Connect from "@/dbconfig/connect";
import User from "@/dbmodels/usermodel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler= NextAuth(
    {
        secret:process.env.NEXTAUTH_SECRET,
        session:{
            strategy:'jwt',
        },
        providers: [
            CredentialsProvider({
          
              name: "Credentials",
          
              credentials: {
                email:{label:"Email",type:"email",placeholder:"enter email"},
                password: { label: "Password", type: "enter password" }
              },
              async authorize(credentials, req) {
                await Connect()
                const user = await User.findOne({email:credentials.email,password:credentials.password})
          
                if (user) {
                  return user
                } else {
                  
                  return null
          
                  
                }
              }
            })
          ],
          pages:{
            signIn:'/',
            signOut:'/'
          },
          callbacks:{
            async jwt({token,user}){
                if(user) token.user =user
                return token
            },
            async session({session,token}){
                session.user.name=token.sub
                return session
            }
          }

    }
)
export {handler as GET, handler as POST}