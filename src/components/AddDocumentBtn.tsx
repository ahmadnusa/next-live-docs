"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

import { createDocument } from "@/lib/actions/room.action"

import { Button } from "./ui/button"

export default function AddDocumentBtn({ userId, email }: AddDocumentBtnProps) {
  const { push } = useRouter()

  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email })

      if (room) push(`/documents/${room.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image
        src="/assets/icons/add.svg"
        alt="add"
        width={24}
        height={24}
        priority
      />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  )
}
