import AdminLayout from "../../components/adminLayout";
import Preloader from "./dashboardComponents/preloader";
const preloader = () => {
  return (
    <>
      <AdminLayout>
        <Preloader />
      </AdminLayout>
    </>
  )
}

export default preloader
