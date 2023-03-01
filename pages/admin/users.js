import React from 'react'
import AdminLayout from '../../components/adminLayout'
import Usermanagement from './dashboardComponents/usermanagement'

export default function users() {
  return (
    <AdminLayout>
        <Usermanagement />
    </AdminLayout>
  )
}
