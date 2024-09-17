import React, { useEffect, useState } from 'react'
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

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem
} from '@/components/ui/breadcrumb'

import {
  UserIcon,
  ComputerDesktopIcon,
  CommandLineIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter
} from '@/components/ui/card'
import { SlashIcon } from 'lucide-react'
function Dashboard () {
  const [emps, setEmps] = useState()
  const [assets, setAssets] = useState()

  const assetStatuses = [
    {
      name: 'Active/Operational Assets',
      filter: asset =>
        asset.status === 'Operational' || asset.status === 'Active'
    },
    {
      name: 'Maintenance Required Assets',
      filter: asset => asset.status === 'Maintenance required'
    },
    {
      name: 'Expiring Soon Assets',
      filter: asset => asset.status === 'Expiring Soon'
    }
  ]

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/emp`)
      .then(res => {
        console.log('Response data:', res.data)
        setEmps(res.data)
      })
      .catch(err => console.log('Error fetching tasks:', err))

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/assets`)
      .then(res => {
        console.log('Response data:', res.data)
        setAssets(res.data)
      })
      .catch(err => console.log('an error occured', err))
  }, [])

  if (!emps || emps.length === 0 || !assets) {
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

  return (
    <div className=''>
      <div className='lg:mx-16 my-8 mx-6 min-h-screen  col-span-11  flex  flex-col '>
        <Breadcrumb className='mb-5 font-semibold'>
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
          </BreadcrumbList>
        </Breadcrumb>
        <div className='text-start self-start mb-5'>
          <h2 className=' text-2xl md:text-3xl font-bold  '>
            Hi, Welocme Back
          </h2>
          <p className='text-gray-400 text-lg md:text-xl '>
            Monitor your team and resources with ease.
          </p>
        </div>
        <div className='grid grid-cols-4  gap-2  mb-6'>
          <Card className='col-span-4 lg:col-span-1'>
            <CardHeader className='flex flex-row justify-between items-center'>
              <CardTitle>Total Employees </CardTitle>
              <UserIcon className='w-6 h-6'></UserIcon>
            </CardHeader>
            <CardContent>
              <CardTitle className='text-2xl '>{emps.length}</CardTitle>
            </CardContent>
          </Card>
          <Card className='col-span-4 lg:col-span-1'>
            <CardHeader className='flex flex-row justify-between items-center'>
              <CardTitle>Total Assets </CardTitle>
              <ComputerDesktopIcon className='w-6 h-6'></ComputerDesktopIcon>
            </CardHeader>
            <CardContent>
              <CardTitle className='text-2xl '>
                {assets ? assets.length : 0}
              </CardTitle>
            </CardContent>
          </Card>
          <Card className='col-span-4 lg:col-span-1'>
            <CardHeader className='flex flex-row justify-between items-center'>
              <CardTitle>Total Software Assets </CardTitle>
              <CommandLineIcon className='w-6 h-6'></CommandLineIcon>
            </CardHeader>
            <CardContent>
              <CardTitle className='text-2xl '>
                {
                  assets.filter(
                    asset =>
                      asset.category === 'software' ||
                      asset.category === 'Software'
                  ).length
                }
              </CardTitle>
            </CardContent>
          </Card>
          <Card className='col-span-4 lg:col-span-1'>
            <CardHeader className='flex flex-row justify-between items-center'>
              <CardTitle>Total Hardware Assets </CardTitle>
              <CpuChipIcon className='w-6 h-6'></CpuChipIcon>
            </CardHeader>
            <CardContent>
              <CardTitle className='text-2xl '>
                {
                  assets.filter(
                    asset =>
                      asset.category === 'hardware' ||
                      asset.category === 'Hardware'
                  ).length
                }
              </CardTitle>
            </CardContent>
          </Card>
        </div>
        <div className=' '>
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className='text-xl font-bold'>
                  Employee and Assets Data Table
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue='Employees' className=''>
                <TabsList className=' grid  grid-cols-2'>
                  <TabsTrigger className='' value='Employees'>
                    Employees
                  </TabsTrigger>
                  <TabsTrigger className='' value='assets'>
                    Assets
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='Employees'>
                  <Card className='  '>
                    {' '}
                    <CardHeader className='flex justify-between flex-row items-center'>
                      <CardTitle className='text-xl'>Employees</CardTitle>
                    </CardHeader>{' '}
                    <hr></hr>
                    <CardContent>
                      <Table className='p-0  text-base'>
                        <TableHeader className=''>
                          <TableRow>
                            <TableHead className=''>Employee ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Join Date</TableHead>
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
                            </TableRow>
                          ))}
                        </TableBody>
                        <TableFooter></TableFooter>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value='assets'>
                  <Card className=' col-span-2'>
                    {' '}
                    <CardHeader>
                      <CardTitle className='text-xl'>Assets</CardTitle>
                    </CardHeader>{' '}
                    <hr></hr>
                    <CardContent>
                      <Table className='p-0 text-base'>
                        <TableHeader className=''>
                          <TableRow>
                            <TableHead className='w-[100px]'>
                              Asset ID
                            </TableHead>
                            <TableHead>Asset Name</TableHead>
                            <TableHead>Asset Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Assigned To Employee</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {assets.map(asset => (
                            <TableRow key={asset.assetId}>
                              <TableCell>{asset.assetId}</TableCell>
                              <TableCell>{asset.assetname}</TableCell>
                              <TableCell>{asset.type}</TableCell>
                              <TableCell>{asset.status}</TableCell>
                              <TableCell>{asset.category}</TableCell>
                              <TableCell>{asset.assignedTo}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                        <TableFooter></TableFooter>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className='grid mt-6 grid-cols-1 md:grid-rows-1 grid-rows-2 md:grid-cols-2 gap-5'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle className='text-xl'>Assets Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className='text-base p-0'>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset Status</TableHead>
                    <TableHead>Assets ID</TableHead>
                    <TableHead className='text-right'>Assets Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assetStatuses.map((status, index) => {
                    const filteredAssets = assets.filter(status.filter)
                    return (
                      <TableRow key={index}>
                        <TableCell className='font-medium'>
                          {status.name}
                        </TableCell>
                        <TableCell>
                          {filteredAssets
                            .map(asset => asset.assetId)
                            .join(', ')}
                        </TableCell>
                        <TableCell className='text-right'>
                          {filteredAssets.length} Assets
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className=' w-auto grid col-span-1 '>
            <CardHeader>
              <CardTitle className='text-xl'>Employees Sumary</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className='text-base p-0'>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Assets ID</TableHead>
                    <TableHead className='text-right'>Assets Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emps.map((emp, index) => {
                    const employeeAssets = assets.filter(
                      asset => asset.assignedTo === emp.employeeId
                    )
                    return (
                      <TableRow key={index} className=''>
                        <TableCell>Employee {emp.employeeId}</TableCell>
                        <TableCell className='flex flex-row'>
                          {employeeAssets
                            .map(asset => asset.assetId)
                            .join(', ')}
                        </TableCell>
                        <TableCell className='text-right'>
                          {
                            assets.filter(
                              asset => asset.assignedTo === emp.employeeId
                            ).length
                          }{' '}
                          Assets
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
