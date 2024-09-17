import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem
} from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter
} from '@/components/ui/card'
import AddEmployee from '@/components/AddEmployee'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableCell,
  TableRow,
  TableFooter
} from '@/components/ui/table'
import { Edit2, SlashIcon, Trash2 } from 'lucide-react'
import AddAsset from '@/components/AddAsset'
import { Button } from '@/components/ui/button'
import UpdateAsset from '@/components/UpdateAsset'
import { LayoutDashboard } from 'lucide-react'
import { User2Icon } from 'lucide-react'
import { ComputerIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
function Assets () {
  const [assets, setAssets] = useState()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/assets`)
      .then(res => {
        console.log('Response data:', res.data)
        setAssets(res.data)
      })
      .catch(err => console.log('an error occured', err))
  }, [assets])

  if (!assets) {
    return (
      <div
        role='status'
        className=' min-h-screen flex justify-center items-center'
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

  function handleDelete (assetId) {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/asset/${assetId}`)
      .then(res => {
        console.log(res)
        setAssets(assets.filter(asset => asset._id !== assetId))
        toast.success(`Employee ${assetId} deleted succesfully`)
      })
      .catch(err => {
        console.log(err)
        toast.error(`Employee ${assetId} deletion failed`)
      })
  }
  return (
    <div className=''>
      <div className='lg:mx-16 my-16 mx-6 min-h-screen  flex  flex-col '>
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
          <Card className=' col-span-2'>
            {' '}
            <CardHeader className='flex justify-between flex-row items-center'>
              <CardTitle className='text-xl'>Assets Data Table</CardTitle>
              <AddAsset></AddAsset>
            </CardHeader>{' '}
            <hr></hr>
            <CardContent>
              <Table className='p-0  text-base '>
                <TableHeader className=''>
                  <TableRow>
                    <TableHead className='w-[100px]'>Asset ID</TableHead>
                    <TableHead>Asset Name</TableHead>
                    <TableHead>Asset Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Assigned To Employee</TableHead>
                    <TableHead>Actions</TableHead>
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
                      <TableCell>
                        <span className='flex gap-2'>
                          <UpdateAsset
                            asset={asset}
                            onUpdate={UpdateAsset => {
                              // Update your state here
                              setAssets(
                                assets.map(e =>
                                  e.assetId === UpdateAsset.assetId
                                    ? UpdateAsset
                                    : e
                                )
                              )
                            }}
                          />
                          <div>
                            <Button onClick={() => handleDelete(asset.assetId)}>
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

export default Assets
