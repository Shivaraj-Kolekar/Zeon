import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
function SignUp () {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLogin, setIsLogin] = useState(null)
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const emailChange = e => {
    setEmail(e.target.value)
    console.log(setEmail(e.target.value))
  }
  const passwordChange = e => {
    setPassword(e.target.value)
    console.log(setPassword(e.target.value))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const url = isLogin
      ? 'http://localhost:4000/login'
      : 'http://localhost:4000/register'

    try {
      const response = await axios.post(
        url,
        isLogin ? { email, password } : { name, email, password }
      )

      if (response.data.auth && response.data.token) {
        // Save token to localStorage
        localStorage.setItem('token', response.data.token)
        toast.success(`${isLogin ? 'Logged in' : 'Registered'} successfully!`, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff'
          }
        })
        navigate('/dashboard')
        setMessage(`${isLogin ? 'Login' : 'Registration'} successful!`)
      } else {
        setMessage('Authentication failed, please try again.')
        toast.error(`${isLogin ? 'Logged in' : 'Registered'} successfully!`, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff'
          }
        })
      }
    } catch (err) {
      console.error('Error:', err)
      toast.error(`${isLogin ? 'Logged in' : 'Registered'} successfully!`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        }
      })
      setMessage(
        err.response?.data?.message || 'An error occurred, please try again.'
      )
    }
  }
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
    setMessage('Logged out successfully')
  }

  return (
    <div className='min-w-screen min-h-screen flex items-center justify-center'>
      <Toaster />
      <Card className='w-[450px] '>
        <CardHeader>
          <CardTitle>
            {isLogin ? 'Login to ZEON' : 'Register to ZEON'}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? 'Enter your email and password to Login'
              : 'Enter your name, email and password to Register'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                {!isLogin && (
                  <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      className='border-2 border-gray-400'
                      id='name'
                      value={name}
                      type='text'
                      onChange={e => setName(e.target.value)}
                      placeholder='john'
                      required={!isLogin}
                    />
                  </div>
                )}
                <Label htmlFor='email'>Email</Label>
                <Input
                  className='border-2 border-gray-400'
                  id='email'
                  value={email}
                  type='email'
                  required='true'
                  onChange={emailChange}
                  placeholder='alex@mail.com'
                />
                <Label htmlFor='password'>Password</Label>
                <Input
                  value={password}
                  className='border-2 border-gray-400'
                  id='password'
                  type='password'
                  required='true'
                  onChange={passwordChange}
                  placeholder='........'
                />
              </div>
            </div>
            <p className='my-2 text-slate-300'>
              {isLogin ? 'Do not has a account, ' : 'Already has a account, '}
              <span>
                <button
                  className='font-bold text-white '
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Register' : 'Login'}
                </button>
              </span>
            </p>
            <Button type='submit' className='w-full p-6 mt-4 '>
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </form>

          {/*<button onClick={() => setIsLogin(!isLogin)}>
            Switch to {isLogin ? 'Register' : 'Login'}
          </button>
          <button onClick={handleLogout}>Logout</button>
          {message && <p>{message}</p>}*/}
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUp
