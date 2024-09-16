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
import { useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'react-hot-toast'
function AddAsset () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  const onSubmit = async data => {
    console.log(data)
    console.log(watch('employeeId', 'name'))

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
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus className='mr-2 h-4 w-4' />
            Add Asset
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] '>
          <DialogHeader>
            <DialogTitle>Add Asset</DialogTitle>
            <DialogDescription>
              Fill in the given fields to add the Asset
            </DialogDescription>
          </DialogHeader>
          <hr></hr>
          <form
            className='grid grid-cols-2 gap-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='grid col-span-1 gap-4'>
              <Label>Asset Id</Label>
              <Input
                type='text'
                placeholder='AS00'
                {...register('assetId', { required: true })}
              />
              {errors.employeeId && (
                <p className='text-red-500'>{errors.assetId.message}</p>
              )}
              <Label>Asset Name</Label>
              <Input
                type='text'
                placeholder='Laptop'
                {...register('assetname', { required: true })}
              />
              {errors.name && (
                <p className='text-red-500'>{errors.assetname.message}</p>
              )}{' '}
              <Label>Asset Type</Label>
              <Input
                type='text'
                placeholder='device'
                {...register('type', { required: true })}
              />
              {errors.email && (
                <p className='text-red-500'>{errors.type.message}</p>
              )}
              <Label>Asset Status</Label>
              <Input
                type='text'
                placeholder='avaliable'
                {...register('status', { required: true, maxLength: 80 })}
              />
              {errors.role && (
                <p className='text-red-500'>{errors.status.message}</p>
              )}{' '}
            </div>
            <div className='grid col-span-1 gap-4'>
              <Label>Asset Category</Label>
              <Input
                type='text'
                placeholder='Hardware'
                {...register('category', { required: true })}
              />
              {errors.department && (
                <p className='text-red-500'>{errors.category.message}</p>
              )}
              <Label>Asset Assigned To</Label>
              <Input
                type='text'
                placeholder='Emp00'
                {...register('assignedTo', { required: true })}
              />
              {errors.date && (
                <p className='text-red-500'>{errors.assignedTo.message}</p>
              )}
              <Label>Asset Created at</Label>
              <Input
                type='date'
                className='text-white'
                placeholder='assigned To Employee'
                {...register('createdAt', { required: true })}
              />
              {errors.date && (
                <p className='text-red-500'>{errors.createdAt.message}</p>
              )}
              <Label>Asset Updated at</Label>
              <Input
                type='date'
                placeholder='assigned To Employee'
                {...register('updatedAt', { required: true })}
              />
              {errors.date && (
                <p className='text-red-500'>{errors.updatedAt.message}</p>
              )}
            </div>
            <Button
              className='grid col-span-2'
              disabled={isSubmitting}
              type='submit'
            >
              {isSubmitting ? (
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
              ) : (
                'Submit'
              )}
            </Button>
          </form>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddAsset
