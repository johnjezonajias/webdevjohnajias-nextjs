import React from 'react'
import { Logo } from './Logo'
import DarkModeToggle from './DarkModeToggle'
import MainNavigation from './MainNavigation'

export const Header = () => {
  return (
    <header className="container">
      <div className="flex items-center justify-between">
        <Logo />
        <MainNavigation />
        <DarkModeToggle />
      </div>
    </header>
  )
}
