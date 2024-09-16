import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
function Signin () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailChange = e => {
    setEmail(e.target.value)
    console.log(setEmail(e.target.value))
  }
  const passwordChange = e => {
    setPassword(e.target.value)
    console.log(setPassword(e.target.value))
  }
  return (
    <div className='min-w-screen min-h-screen flex items-center justify-center'>
      <Card className='w-[450px] '>
        <CardHeader>
          <CardTitle>Sign in to ZEON</CardTitle>
          <CardDescription>
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  className='border-2 border-gray-400'
                  id='email'
                  value={email}
                  required='true'
                  type='email'
                  onChange={emailChange}
                  placeholder='alex@mail.com'
                />

                <Label htmlFor='password'>Password</Label>
                <Input
                  value={password}
                  className='border-2 border-gray-400'
                  id='password'
                  type='password'
                  onChange={passwordChange}
                  required='true'
                  placeholder='........'
                />
              </div>
            </div>
            <p className='my-2'>
              Don't have a account ?{' '}
              <span>
                <Link className='underline font-semibold' to='/signup'>
                  Sign Up
                </Link>
              </span>
            </p>
            <Button className='w-full p-6 mt-4'>Sign In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signin
