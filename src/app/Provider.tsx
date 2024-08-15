"use client"

import { useUser } from "@clerk/nextjs"
import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense"
import { ReactNode } from "react"

import Loader from "@/components/Loader"
import { getClerkUsers, getDocumnetUsers } from "@/lib/actions/user.action"
export default function Provider({ children }: { children: ReactNode }) {
  const { user: clerkUser } = useUser()
  return (
    <LiveblocksProvider
      authEndpoint={"/api/liveblocks-auth"}
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds })
        return users
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumnetUsers({
          roomId,
          currentUser: clerkUser?.emailAddresses[0].emailAddress!,
          text,
        })

        return roomUsers
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  )
}
