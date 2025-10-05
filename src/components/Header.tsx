import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav'

const Header = (): JSX.Element => {
  const location = useLocation()

  const navItems = useMemo(() => [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
    { to: '/terms', label: 'Terms' },
  ], [])

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="TAT GLOBAL" className="h-10" />
          </Link>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${location.pathname === item.to ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header