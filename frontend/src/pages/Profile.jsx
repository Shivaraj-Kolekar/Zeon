import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem
} from '@/components/ui/breadcrumb'
import { SlashIcon } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'
function Profile () {
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
    setMessage('Logged out successfully')
  }
  const name = 'John'
  const email = 'john@mail.com'
  return (
    <div>
      <Breadcrumb className='lg:mx-16 mx-6 mb-8 mt-16 font-semibold'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink to='/dashboard'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          {location.pathname.includes('/dashboard/employees') ? (
            <BreadcrumbItem>
              <BreadcrumbLink href='/dashboard/employees'>
                Employees
              </BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            ''
          )}
          {location.pathname.includes('/dashboard/assets') ? (
            <BreadcrumbItem>
              <BreadcrumbLink href='/dashboard/assets'>Assets</BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            ''
          )}
          {location.pathname.includes('/dashboard/profile') ? (
            <BreadcrumbItem>
              <BreadcrumbLink href='/dashboard/profile'>Profile</BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            ''
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div className='min-h-screen  min-w-screen flex justify-center items-center'>
        <Card className='w-[600px]  bg-slate-100 border-slate-400  dark:bg-slate-900 dark:border-slate-600 '>
          <CardHeader>
            <CardTitle className='text-4xl'>User Profile</CardTitle>
            <CardDescription className='text-lg'>
              Welcome back {name} !
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label className='text-2xl my-4'>
              Name: <span className='text-2xl'>{name}</span>
            </Label>
            <br></br>
            <Label className='text-2xl mb-4'>
              Email: <span className='text-2xl'>{email}</span>
            </Label>
          </CardContent>
          <CardFooter>
            <AlertDialog className=''>
              <AlertDialogTrigger asChild>
                <Button>Logout</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className='bg-slate-100 border-slate-400  dark:bg-slate-900 dark:border-slate-600'>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will logout your account
                    and you need to login again to use the app.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogCancel className='bg-red-500 hover:bg-red-700 border-none'>
                    <Button
                      variant='destructive'
                      className=' bg-red-500 hover:bg-red-700 p-0 border-none rounded-sm w-full'
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Profile
