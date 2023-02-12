import React from 'react'
import AdminLayout from '../../../components/adminLayout'
import UserRoute from '../dashboardComponents/userRoute'

export default function User() {
  return (
    <AdminLayout>
        <UserRoute />
    </AdminLayout>
  )
}
