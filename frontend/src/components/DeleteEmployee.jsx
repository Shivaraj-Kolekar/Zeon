import { useEffect } from 'react'
import React from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import { Trash2 } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
function DeleteEmployee () {
  function handleDelete () {
    axios
      .delete(`http://localhost:3001/employees/${emp.employeeId}`)
      .then(res => {
        console.log(res)
        toast.success(`Employee ${employeeID} deleted succesfully`)
      })
      .catch(err => {
        console.log(err)
        toast.error(`Employee ${employeeID} deletion failed`)
      })
  }

  return <></>
}

export default DeleteEmployee
