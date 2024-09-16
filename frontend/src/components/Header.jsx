import React, { useState } from 'react'
import { Button } from 'react-day-picker'
import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
import { UserIcon } from '@heroicons/react/24/outline'
function Header () {
  const [isLogin, setLogin] = useState(null)
  const user = localStorage.getItem('token')
  return (
    <header className='md:py-5 p-3 md:px-5 text-xl bg-slate-300 border-b-slate-500 dark:border-b-slate-700 border dark:bg-slate-900'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link to='/'>
            <h1>ZEON</h1>
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
              <Link to='/dashboard/profile'>
                <UserIcon className=' dark:bg-slate-950 bg-white text-black dark:text-white border-slate-700 dark:border rounded-full p-2 h-10 w-10'></UserIcon>
              </Link>
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
