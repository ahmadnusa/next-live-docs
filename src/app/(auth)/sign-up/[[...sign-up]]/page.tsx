import { SignUp } from "@clerk/nextjs"

const signUpPage = () => {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  )
}

export default signUpPage
