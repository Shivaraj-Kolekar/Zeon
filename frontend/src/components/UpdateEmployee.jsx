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

const UpdateEmployee = ({ emp, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      employeeId: emp.employeeId,
      name: emp.name,
      email: emp.email,
      role: emp.role,
      department: emp.department,
      joindate: emp.joindate
    }
  })

  const handleUpdate = data => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/employee/${emp.employeeId}`,
        data
      )
      .then(res => {
        toast.success('Employee data updated successfully!')
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
      employeeId: emp.employeeId,
      name: emp.name,
      email: emp.email,
      role: emp.role,
      department: emp.department,
      joindate: emp.joindate
        ? new Date(emp.joindate).toISOString().split('T')[0]
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
            <DialogTitle>Update Employee: {emp.name}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Name
                </Label>
                <Input id='name' {...register('name')} className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='email' className='text-right'>
                  Email
                </Label>
                <Input
                  id='email'
                  {...register('email')}
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='role' className='text-right'>
                  Role
                </Label>
                <Input id='role' {...register('role')} className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='department' className='text-right'>
                  Department
                </Label>
                <Input
                  id='department'
                  {...register('department')}
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='joindate' className='text-right'>
                  Join Date
                </Label>
                <Input
                  id='joindate'
                  type='date'
                  {...register('joindate')}
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
              <Button type='submit'>Update Employee</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UpdateEmployee
