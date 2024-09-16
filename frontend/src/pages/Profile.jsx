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
import { useState } from 'react'
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
  const [profile, setProfile] = useState()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profile`)
      .then(res => {
        console.log('Response data:', res.data)
        setProfile(res.data)
      })
      .catch(err => console.log('an error occured', err))
  }, [profile])

  if (!profile) {
    return (
      <div
        role='status'
        className='min-w-screen min-h-screen flex justify-center items-center'
      >
        <svg
          aria-hidden='true'
          class='w-20 h-20 md:w-28 md:h-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
        <span class='sr-only'>Loading...</span>
      </div>
    )
  }
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
