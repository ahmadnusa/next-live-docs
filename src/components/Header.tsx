import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function Header({ children, className }: HeaderProps) {
  return (
    <div className={cn("header", className)}>
      <Link href={"/"} className="md:flex-1">
        <Image
          src={"/assets/icons/logo.svg"}
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block h-8"
          priority
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
          priority
        />
      </Link>
      {children}
    </div>
  )
}
