'use client'

import Link from "next/link"
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu"

import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { useAdaptiveColor } from "@/hooks/useAdaptiveColor"

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
    name: 'Tech Stacks',
    slug: 'tech-stacks',
    link: '/#tech-stacks',
  },
  {
    name: 'Portfolio',
    slug: 'portfolio',
    link: '/#portfolio',
  },
  {
    name: 'Work Experience',
    slug: 'work-experience',
    link: '/#work-experience',
  },
  {
    name: 'Contact Me',
    slug: 'contact',
    link: 'mailto:johnjezonajias@gmail.com',
  }
]

type MenuItemProps = {
  name: string,
  slug: string,
  link: string,
}

const MainNavigation = (props: NavigationMenuProps) => {
  const color = useAdaptiveColor('siteHeader');

  return (
    <NavigationMenu {...props}>
      <ul className="flex flex-row items-center gap-x-14">
        {!!(LINKS.length) && (
          LINKS.map(({ name, slug, link }: MenuItemProps) => {
            return (
              <li key={slug}>
                <NavigationMenuLink asChild>
                  <Link
                    className="font-normal flex text-md outline-none hover:text-light-accent dark:hover:text-dark-primary"
                    href={link}
                    onClick={props.onClick}
                    style={{ color }}
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
