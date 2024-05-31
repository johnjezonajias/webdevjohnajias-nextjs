import React from 'react'
import { Logo } from './Logo'
import DarkModeToggle from './DarkModeToggle'

export const Header = () => {
  return (
    <header className="container">
      <div className="flex items-center justify-between">
        <Logo />
        <DarkModeToggle />
      </div>
    </header>
  )
}
