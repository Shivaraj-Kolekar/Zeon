import React, { useState } from 'react'
import { Button } from 'react-day-picker'
import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
import { UserIcon } from '@heroicons/react/24/outline'
import UserActions from './UserActions'
function Header () {
  const [isLogin, setLogin] = useState(null)
  const user = localStorage.getItem('token')
  return (
    <header className='md:py-5 p-3 md:px-5 text-xl bg-slate-300 w-screen border-b-slate-500 dark:border-b-slate-700 border dark:bg-slate-900'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link to='/'>
            <h1 id='logo'>ZEON</h1>
          </Link>
        </div>
        {!user ? (
          <ul className='flex flex-row gap-2 items-center md:gap-5'>
            <li>
              <Link to='/login'>
                <Button>Register</Button>
              </Link>
            </li>
            <li>
              <ModeToggle></ModeToggle>
            </li>
          </ul>
        ) : (
          <ul className='flex flex-row gap-2 items-center md:gap-5'>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/dashboard/employees'>Employees</Link>
            </li>
            <li>
              <Link to='/dashboard/assets'>Assets</Link>
            </li>
            <li>
              <UserActions></UserActions>
            </li>
            <li>
              <ModeToggle></ModeToggle>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
