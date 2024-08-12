import { SignIn } from "@clerk/nextjs"

const signInPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  )
}

export default signInPage
