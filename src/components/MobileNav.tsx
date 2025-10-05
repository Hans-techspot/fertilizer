import { useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Drawer } from "vaul"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const navItems = useMemo(() => [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
    { to: '/terms', label: 'Terms' },
  ], [])

  return (
    <Drawer.Root open={open} onOpenChange={setOpen} direction="left">
      <Drawer.Trigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-[80%] max-w-sm mt-24 fixed bottom-0 left-0 border-r border-border shadow-xl">
          <div className="p-4 flex-1 h-full">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Menu
              </Drawer.Title>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`block py-2 px-4 rounded-md text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${location.pathname === item.to ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default MobileNav;