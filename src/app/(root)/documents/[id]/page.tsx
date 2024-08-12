import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

import { Editor } from "@/components/editor/Editor"
import Header from "@/components/Header"

export default function page() {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <h1 className="document-title">Share</h1>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  )
}
