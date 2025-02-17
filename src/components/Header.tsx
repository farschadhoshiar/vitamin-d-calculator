"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { AnimatedSunLogo } from "@/components/AnimatedSunLogo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Vitamin D Guide",
    href: "/guide",
    description: "Umfassender Leitfaden zur Vitamin D Supplementierung.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Aktuelle Erkenntnisse und Studien zu Vitamin D.",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Häufig gestellte Fragen zur Vitamin D Supplementierung.",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const navigationItems = [
  {
    title: "Ressourcen",
    items: [
      {
        title: "Vitamin D Guide",
        href: "/guide",
        description: "Umfassender Leitfaden zur Vitamin D Supplementierung.",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Aktuelle Erkenntnisse und Studien zu Vitamin D.",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Häufig gestellte Fragen zur Vitamin D Supplementierung.",
      },
    ],
  },
  {
    title: "Rechtliches",
    items: [
      {
        title: "Datenschutz",
        href: "/datenschutz",
      },
      {
        title: "Impressum",
        href: "/impressum",
      },
    ],
  },
]

export function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <AnimatedSunLogo />
          <span className="font-bold text-primary">VITAMIN-D Rechner</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Ressourcen</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/datenschutz" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Datenschutz
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/impressum" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Impressum
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 px-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Menü</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-4">
                {navigationItems.map((section, index) => (
                  <div key={index} className="py-4">
                    <h4 className="font-medium mb-2">{section.title}</h4>
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
} 