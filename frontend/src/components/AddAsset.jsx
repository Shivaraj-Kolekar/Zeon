import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'react-hot-toast'
function AddAsset () {
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  const onSubmit = async data => {
    console.log(data)
    console.log(watch('employeeId', 'name'))
    setIsOpen(false)
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/addasset`, {
        assetId: watch('assetId'),
        assetname: watch('assetname'),
        type: watch('type'),
        status: watch('status'),
        category: watch('category'),
        assignedTo: watch('assignedTo'),
        createdAt: watch('createdAt'),
        updatedAt: watch('updatedAt')
      })
      .then(res => {
        toast.success('Asset added successfully!')

        console.log(res.data)
      })
      .catch(err => {
        toast.error('An error occured!')
        console.log(err)
      })
  }
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <Toaster />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className='mr-2 h-4 w-4' /> Add Asset
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Add Asset</DialogTitle>
            <DialogDescription>
              Fill in the given fields to add the Asset
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='assetId' className='text-right'>
                  Asset Id
                </Label>
                <Input
                  id='assetId'
                  placeholder='AS00'
                  {...register('assetId', { required: true })}
                  className='col-span-3'
                />
              </div>
              {errors.assetId && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.assetId.message}
                </p>
              )}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='assetname' className='text-right'>
                  Asset Name
                </Label>
                <Input
                  id='assetname'
                  placeholder='Laptop'
                  {...register('assetname', { required: true })}
                  className='col-span-3'
                />
              </div>
              {errors.assetname && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.assetname.message}
                </p>
              )}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='type' className='text-right'>
                  Asset Type
                </Label>
                <Input
                  id='type'
                  placeholder='device'
                  {...register('type', { required: true })}
                  className='col-span-3'
                />
              </div>
              {errors.type && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.type.message}
                </p>
              )}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='status' className='text-right'>
                  Asset Status
                </Label>
                <Input
                  id='status'
                  placeholder='available'
                  {...register('status', { required: true, maxLength: 80 })}
                  className='col-span-3'
                />
              </div>
              {errors.status && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.status.message}
                </p>
              )}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='category' className='text-right'>
                  Asset Category
                </Label>
                <Input
                  id='category'
                  placeholder='Hardware'
                  {...register('category', { required: true })}
                  className='col-span-3'
                />
              </div>
              {errors.category && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.category.message}
                </p>
              )}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='assignedTo' className='text-right'>
                  Asset Assigned To
                </Label>
                <Input
                  id='assignedTo'
                  placeholder='Emp00'
                  {...register('assignedTo', { required: true })}
                  className='col-span-3'
                />
              </div>
              {errors.assignedTo && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.assignedTo.message}
                </p>
              )}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='createdAt' className='text-right'>
                  Asset Created at
                </Label>
                <Input
                  id='createdAt'
                  type='date'
                  {...register('createdAt', { required: true })}
                  className='col-span-3'
                />
              </div>
              {errors.createdAt && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.createdAt.message}
                </p>
              )}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='updatedAt' className='text-right'>
                  Asset Updated at
                </Label>
                <Input
                  id='updatedAt'
                  type='date'
                  {...register('updatedAt', { required: true })}
                  className='col-span-3'
                />
              </div>
              {errors.updatedAt && (
                <p className='text-red-500 col-start-2 col-span-3'>
                  {errors.updatedAt.message}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button
                type='button'
                variant='outline'
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type='submit' disabled={isSubmitting}>
                {isSubmitting ? (
                  <div
                    role='status'
                    className='flex items-center justify-center'
                  >
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
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
                    <span className='sr-only'>Loading...</span>
                  </div>
                ) : (
                  'Submit'
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddAsset
