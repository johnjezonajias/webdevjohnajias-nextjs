import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import MainNavigation from './MainNavigation'
import Logo from './Logo'

export const Header = () => {
  return (
    <header id="siteHeader" className="w-full fixed left-0 top-12 z-50">
      <div className="container flex items-center justify-between h-auto outline-none transition-all duration-350 ease-in-out">
        <Logo variant="adaptive" fontSize="2.125rem" />
        <MainNavigation />
        <DarkModeToggle />
      </div>
    </header>
  )
}
