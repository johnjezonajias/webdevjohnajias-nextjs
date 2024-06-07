'use client'

import Link from "next/link"
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu"

import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu"

/**
 * TODO: Replace with Sanity schema.
 */
const LINKS = [
  {
    name: 'Home',
    slug: '/',
    link: '/',
  },
  {
    name: 'Contact us',
    slug: 'contact-us',
    link: '/contact-us',
  },
  {
    name: 'Customer',
    slug: 'customer',
    link: '/customer',
  },
  {
    name: 'About us',
    slug: 'about-us',
    link: '/about-us',
  },
]

type MenuItemProps = {
  name: string,
  slug: string,
  link: string,
}

const MainNavigation = (props: NavigationMenuProps) => {
  return (
    <NavigationMenu {...props}>
      <ul className="flex flex-row gap-x-2">
        {!!(LINKS.length) && (
          LINKS.map(({ name, slug, link }: MenuItemProps) => {
            return (
              <li key={slug}>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex text-normal outline-none transition-all duration-350 ease-in-out"
                    href={link}
                    onClick={props.onClick}
                  >
                    {name}
                  </Link>
                </NavigationMenuLink>
              </li>
            )
          })
        )}
      </ul>
    </NavigationMenu>
  )
}

export default MainNavigation
