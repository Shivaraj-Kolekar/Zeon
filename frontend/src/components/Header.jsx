import React, { useState, useEffect } from 'react'
import { Button } from 'react-day-picker'
import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
import UserActions from './UserActions'

function Header () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token')
      setIsLoggedIn(!!token)
    }

    checkLoginStatus()
    window.addEventListener('storage', checkLoginStatus)

    return () => {
      window.removeEventListener('storage', checkLoginStatus)
    }
  }, [])

  return (
    <header className='md:py-5 p-3 md:px-8 text-xl bg-slate-300 border-b-slate-500 dark:border-b-slate-700 border dark:bg-slate-900'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link to='/'>
            <h1 id='logo'>ZEON</h1>
          </Link>
        </div>
        {!isLoggedIn ? (
          <ul className='flex flex-row gap-2 items-center md:gap-5'>
            <li>
              <Link to='/login'>
                <Button>Register</Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        ) : (
          <ul className='flex flex-row gap-2 items-center md:gap-5'>
            <li className='md:block hidden'>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li className='md:block hidden'>
              <Link to='/dashboard/employees'>Employees</Link>
            </li>
            <li className='md:block hidden'>
              <Link to='/dashboard/assets'>Assets</Link>
            </li>
            <li>
              <UserActions />
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
