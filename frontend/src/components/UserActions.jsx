import React from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { UserIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
function UserActions () {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    toast.success('Logged out successfully!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff'
      }
    })
    navigate('/login')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserIcon className=' dark:bg-slate-950 bg-white text-black dark:text-white border-slate-700 dark:border rounded-full p-2 h-10 w-10'></UserIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to='/dashboard'>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to='/employees'>Employees</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to='/assets'>Assets</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button onClick={handleLogout}>Log out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserActions
