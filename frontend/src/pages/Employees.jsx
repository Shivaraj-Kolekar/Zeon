import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem
} from '@/components/ui/breadcrumb'
import { Edit2, Trash2 } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter
} from '@/components/ui/card'
import { LayoutDashboard } from 'lucide-react'
import { User2Icon } from 'lucide-react'
import { ComputerIcon } from 'lucide-react'
import AddEmployee from '@/components/AddEmployee'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableCell,
  TableRow,
  TableFooter
} from '@/components/ui/table'
import { Link } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { SlashIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DeleteEmployee from '@/components/DeleteEmployee'
import UpdateEmployee from '@/components/UpdateEmployee'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
function Employees () {
  const [emps, setEmps] = useState()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/emp`)
      .then(res => {
        console.log('Response data:', res.data)
        setEmps(res.data)
      })
      .catch(err => console.log('Error fetching tasks:', err))
  }, [emps])

  if (!emps || emps.length === 0) {
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
  function handleDelete (employeeId) {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/employee/${employeeId}`)
      .then(res => {
        console.log(res)
        setEmps(
          emps.filter(emp => {
            return emp.employeeId !== employeeId
          })
        )
        toast.success(`Employee ${employeeId} deleted succesfully`)
      })
      .catch(err => {
        console.log(err)
        toast.error(`Employee ${employeeId} deletion failed`)
      })
  }
  function handleUpdate (employeeId) {
    console.log(data)
    console.log(watch('employeeId', 'name'))

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/employee/${employeeId}`, {
        employeeId: watch('employeeId'),
        name: watch('name'),
        email: watch('email'),
        role: watch('role'),
        department: watch('department'),
        joindate: watch('joindate')
      })
      .then(res => {
        toast.success('Employee data updated successfully!')
        setEmps(
          emps.filter(emp => {
            return emp.employeeId !== employeeId
          })
        )
        console.log(res.data)
      })
      .catch(err => {
        toast.error('An error occured!')
        console.log(err)
      })
  }
  return (
    <div className=''>
      <aside
        id='logo-sidebar'
        class='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
        aria-label='Sidebar'
      >
        <div class='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
          <ul class='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
                <span class='ms-3'>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 18'
                >
                  <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Kanban</span>
                <span class='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Inbox</span>
                <span class='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 18'
                >
                  <path d='M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Users</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 20'
                >
                  <path d='M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Products</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 16'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3'
                  />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Sign In</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z' />
                  <path d='M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z' />
                  <path d='M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class='p-4 sm:ml-64'>
        <div class='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14'>
          <div class='grid grid-cols-3 gap-4 mb-4'>
            <div class='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
          </div>
          <div class='flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800'>
            <p class='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                class='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div class='grid grid-cols-2 gap-4 mb-4'>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
          </div>
          <div class='flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800'>
            <p class='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                class='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div class='grid grid-cols-2 gap-4'>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div class='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  class='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:mx-16 my-16 mx-6  min-h-screen min-w-screen flex  flex-col '>
        <Breadcrumb className='mb-8 font-semibold'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
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
          </BreadcrumbList>
        </Breadcrumb>
        <div className=' '>
          <Card className='  '>
            {' '}
            <CardHeader className='flex justify-between flex-row items-center'>
              <CardTitle className='text-xl'>Employees Data Table</CardTitle>
              <AddEmployee></AddEmployee>
            </CardHeader>{' '}
            <hr></hr>
            <CardContent>
              <Table className='p-0  text-base '>
                <TableHeader className=''>
                  <TableRow>
                    <TableHead className='w-[100px]'>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emps.map(emp => (
                    <TableRow key={emp.employeeId}>
                      <TableCell>{emp.employeeId}</TableCell>
                      <TableCell>{emp.name}</TableCell>
                      <TableCell>{emp.email}</TableCell>
                      <TableCell>{emp.role}</TableCell>
                      <TableCell>{emp.department}</TableCell>
                      <TableCell>
                        {new Date(emp.joindate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <span className='flex gap-2'>
                          <UpdateEmployee
                            emp={emp}
                            onUpdate={updatedEmp => {
                              // Update your state here
                              setEmps(
                                emps.map(e =>
                                  e.employeeId === updatedEmp.employeeId
                                    ? updatedEmp
                                    : e
                                )
                              )
                            }}
                          />
                          <div>
                            <Button
                              onClick={() => handleDelete(emp.employeeId)}
                            >
                              <Trash2 className=' h-4 w-4'></Trash2>
                            </Button>
                          </div>
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter></TableFooter>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Employees
