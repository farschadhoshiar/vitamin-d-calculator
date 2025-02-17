"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { AnimatedSunLogo } from "@/components/AnimatedSunLogo"
import { MobileNav } from "@/components/MobileNav"

const resources = [
  {
    title: "Vitamin D Toxizität",
    href: "/blog/vitamin-d-toxicity",
    description: "Welche Vitamin D Dosen sind sicher? Eine evidenzbasierte Analyse.",
  },
  {
    title: "Vitamin D und COVID-19",
    href: "https://pubmed.ncbi.nlm.nih.gov/32679784/",
    description: "Studie über die Rolle von Vitamin D bei COVID-19",
  },
  {
    title: "Vitamin D und Darmkrebs",
    href: "https://sonnenallianz.spitzen-praevention.com/2025/02/06/studien-zeigen-vitamin-d-beugt-darmkrebs-vor-und-erhoeht-die-ueberlebensrate-von-darmkrebserkrankten/",
    description: "Vitamin D beugt Darmkrebs vor und erhöht die Überlebensrate von Darmkrebserkrankten.",
  },
]

const legal = [
  {
    title: "Disclaimer",
    href: "/disclaimer",
    description: "Medizinischer und rechtlicher Haftungsausschluss",
  },
  {
    title: "Impressum",
    href: "/imprint",
    description: "Gesetzlich vorgeschriebene Anbieterkennzeichnung",
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

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <AnimatedSunLogo className="h-8 w-8" />
          <span>Vitamin D Rechner</span>
        </Link>
        
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            <Link href="/faq">
              <Button variant="ghost">FAQ</Button>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Ressourcen</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {resources.map((resource) => (
                        <ListItem
                          key={resource.title}
                          title={resource.title}
                          href={resource.href}
                          target={resource.href.startsWith('http') ? "_blank" : undefined}
                          rel={resource.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {resource.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Rechtliches</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {legal.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
} 