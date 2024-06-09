import React from 'react'
import { Logo } from './Logo'
import DarkModeToggle from './DarkModeToggle'
import MainNavigation from './MainNavigation'

export const Header = () => {
  return (
    <header id="siteHeader" className="w-full fixed left-0 top-12">
      <div className="container flex items-center justify-between h-auto outline-none transition-all duration-350 ease-in-out">
        <Logo />
        <MainNavigation />
        <DarkModeToggle />
      </div>
    </header>
  )
}
