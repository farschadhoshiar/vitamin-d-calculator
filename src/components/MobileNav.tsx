"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { navigationConfig } from "./navigation-config"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü öffnen</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <div className="overflow-y-auto px-6 py-4">
          {/* Main Nav */}
          <div className="grid gap-2 mb-6">
            {navigationConfig.mainNav.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setOpen}
                internal={item.internal}
              >
                {item.title}
              </MobileLink>
            ))}
          </div>

          {/* Resources */}
          <div className="space-y-4 mb-6">
            <h4 className="text-sm font-medium text-muted-foreground">
              Ressourcen
            </h4>
            <div className="grid gap-2">
              {navigationConfig.resources.map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                  internal={item.internal}
                >
                  {item.title}
                </MobileLink>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">
              Rechtliches
            </h4>
            <div className="grid gap-2">
              {navigationConfig.legal.map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                  internal={item.internal}
                >
                  {item.title}
                </MobileLink>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

interface MobileLinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  internal: boolean
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  internal,
  ...props
}: MobileLinkProps) {
  const router = useRouter()

  if (internal) {
    return (
      <Link
        href={href}
        onClick={() => {
          router.push(href)
          onOpenChange?.(false)
        }}
        className={cn(
          "block rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
} 