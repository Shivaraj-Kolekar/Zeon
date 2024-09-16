import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '@/components/ui/button'
import { Edit2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const UpdateAsset = ({ asset, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      assetId: asset.assetId,
      assetname: asset.assetname,
      type: asset.type,
      status: asset.status,
      category: asset.category,
      assignedTo: asset.assignedTo,
      createdAt: asset.createdAt,
      updatedAt: asset.updatedAt
    }
  })

  const handleUpdate = data => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/asset/${asset.assetId}`, data)
      .then(res => {
        toast.success('Asset data updated successfully!')
        onUpdate(res.data)
        setIsOpen(false)
      })
      .catch(err => {
        toast.error('An error occurred!')
        console.error(err)
      })
  }
  const openModal = () => {
    reset({
      assetId: asset.assetId,
      assetname: asset.assetname,
      type: asset.type,
      status: asset.status,
      category: asset.category,
      assignedTo: asset.assignedTo,
      createdAt: asset.createdAt,
      updatedAt: asset.updatedAt
        ? new Date(asset.createdAt).toISOString().split('T')[0]
        : ''
        ? new Date(asset.updatedAt).toISOString().split('T')[0]
        : ''
    })
    setIsOpen(true)
  }
  return (
    <>
      <Button onClick={openModal}>
        <Edit2 className='h-4 w-4' />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Asset: {asset.assetId}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='assetname' className='text-right'>
                  Name
                </Label>
                <Input
                  id='assetname'
                  {...register('assetname')}
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='type' className='text-right'>
                  Type
                </Label>
                <Input id='type' {...register('type')} className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='status' className='text-right'>
                  Status
                </Label>
                <Input
                  id='role'
                  {...register('status')}
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='department' className='text-right'>
                  Category
                </Label>
                <Input
                  id='category'
                  {...register('category')}
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='joindate' className='text-right'>
                  Assigned to
                </Label>
                <Input
                  id='assignedTo'
                  {...register('assignedTo')}
                  className='col-span-3'
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type='button'
                onClick={() => setIsOpen(false)}
                variant='outline'
              >
                Cancel
              </Button>
              <Button type='submit'>Update Asset</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UpdateAsset
