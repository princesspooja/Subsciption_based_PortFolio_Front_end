import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import Head from "next/head"
import Script from "next/script"
import AdminNavbar from "./adminNavbar"

const AdminSlider = () => {
    const router = useRouter();
    return (<>
        <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    </Head>

        <div className="slider slidebar-style-2" id="offcanvasExample">
            <div className="scroll-wrappers">
                <div className="slder-wrappers">
                    <div className="slidebar-contents">
                        <div className="user_data_login">
                            <div className="avatar_div">
                                <div className="avatar_photo float-left mr-2">
                                    {/* <img src="aadmi.jpg" alt="photo" /> */}
                                    <Image src="/adminDashboard/admin.png" width={40} height={40} alt="userpic" />
                                </div>
                                <a data-bs-toggle="collapse" href="#collapseExampAdmin" role="button" aria-expanded="false" aria-controls="collapseExampAdmin"><div className="info_daata">
                                    <span>Johny</span>
                                    <p>Admin</p>
                                </div>
                                </a>
                                <span className="paret_sara"></span>
                            </div>
                            <div className="collapse  div-collapse data_collapse" id="collapseExampAdmin" >
                                <ul className="nav_collapsed">
                                    <li>Edit Profile</li>
                                    <li>Change Password</li>
                                    <li>Logout</li>
                                </ul>
                            </div>

                        </div>

                        <div className="users">
                            <ul className="nav">
                                <div className="row mb-2 row_data" >
                                    <li className={router.asPath == '/admin/dashboard' ? 'activated' : 'nav-items'}>
                                        <Link href="/user/dashboard" legacyBehavior><a href="" className="a-active"><i className="fa fa-palette a-active"></i><p>Dashboard</p></a></Link>
                                    </li>
                                    <li className="nav-items ">
                                        {/* <!-- <a href="" className=""><i className="fa fa-link"></i><p>Domains & URLs</p></a> */}
                                        <a data-bs-toggle="collapse" href="#collapseExampleAdm" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-link"></i><p>Package Management</p><span className="paret_domain"></span>
                                        </a>

                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExampleAdm" >
                                        <ul className="nav_collapse">
                                            <Link href="/user/customdomain" legacyBehavior><li ><a>Setting</a></li></Link>
                                            <li>Package Features</li>
                                            <li>Packages</li>
                                        </ul>
                                    </div>
                                    <li className={router.asPath == '/user/editProfile' ? 'activated' : 'nav-items'} >
                                        <Link href="/user/editProfile" legacyBehavior><a className=""><i className="fa fa-user-circle"></i><p>Payment Logs</p></a></Link>
                                    </li>
                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplcus" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Custom Domains</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplcus" >
                                        <ul className="nav_collapse">
                                            <li>Request Page Texts</li>
                                            <li>All Requests</li>
                                            <li>Pending Requests</li>
                                            <li>Connected Requests</li>
                                            <li>Rejected Requests</li>
                                        </ul>
                                    </div>
                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplsub" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Subdomains</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplsub" >
                                        <ul className="nav_collapse">
                                            <li className={router.asPath == '/admin/dashboard' ? 'activated' : 'nav-items'}>
                                                <Link href="/admin/allsubdomain" legacyBehavior><a href="" className="a-active"><i className="fa fa-palette a-active"></i><p>All Subdomains</p></a></Link>
                                            </li>
                                            <li className={router.asPath == '/admin/dashboard' ? 'activated' : 'nav-items'}>
                                                <Link href="/admin/pendingsubdomain" legacyBehavior><a href="" className="a-active"><i className="fa fa-palette a-active"></i><p>Pending Subdomains</p></a></Link>
                                            </li>
                                            <li className={router.asPath == '/admin/dashboard' ? 'activated' : 'nav-items'}>
                                                <Link href="/admin/connectsubdomain" legacyBehavior><a href="" className="a-active"><i className="fa fa-palette a-active"></i><p>Connected Subdomain</p></a></Link>
                                            </li>
                                        {/* <Link href="/admin/allsubdomain" legacyBehavior><a className=""><i className="fa fa-user-circle"></i><li>All Subdomains</li></a></Link>
                                        <Link href="/admin/pendingsubdomain" legacyBehavior><a className=""><i className="fa fa-user-circle"></i><li>Pending Subdomains</li></a></Link>
                                        <Link href="/admin/connectsubdomain" legacyBehavior><a className=""><i className="fa fa-user-circle"></i><li>Connected Subdomain</li></a></Link> */}

                                            {/* <li>All Subdomains</li>
                                            <li>Pending Subdomains</li>
                                            <li>Connected Subdomains</li> */}
                                        </ul>
                                    </div>
                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-home"></i><p>Registered Users</p></a>
                                    </li>
                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-home"></i><p>Menu Builder</p></a>
                                    </li>

                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplsubHome" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Home Page</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplsubHome" >
                                        <ul className="nav_collapse">
                                            <li>Hero Section</li>
                                            <li>Intro Section</li>
                                            <li>Work Process</li>
                                            <li>Testimonials</li>
                                            <li>Section Titles</li>
                                            <li>Section Hide/Show</li>
                                        </ul>
                                    </div>
                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplfooter" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Footer</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplfooter" >
                                        <ul className="nav_collapse">
                                            <li>Image & Text</li>
                                            <li>Useful Links</li>
                                        </ul>
                                    </div>
                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplpage" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Pages</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplpage" >
                                        <ul className="nav_collapse">
                                            <li>Create Page</li>
                                            <li>Pages</li>
                                        </ul>
                                    </div>
                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplBlogs" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Blogs</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplBlogs" >
                                        <ul className="nav_collapse">
                                            <li>Category</li>
                                            <li>Blogs</li>
                                        </ul>
                                    </div>
                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-toggle-on"></i><p>FAQ Management</p></a>
                                    </li>
                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-toggle-on"></i><p>Contact Page</p></a>
                                    </li>

                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplanou" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Announcement Popus</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplanou" >
                                        <ul className="nav_collapse">
                                            <li>Add Popups</li>
                                            <li>Popups</li>
                                        </ul>
                                    </div>

                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplanoti" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Push Notification</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplanoti" >
                                        <ul className="nav_collapse">
                                            <li>Settings</li>
                                            <li>Send Notifications</li>
                                        </ul>
                                    </div>

                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplasub" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Subscribers</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplasub" >
                                        <ul className="nav_collapse">
                                            <li>Subscribers</li>
                                            <li>Main to Subscribers</li>
                                        </ul>
                                    </div>

                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplangate" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Payment Gateway</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplangate" >
                                        <ul className="nav_collapse">
                                            <li>Online Gateways</li>
                                            <li>Offline Gateways</li>
                                        </ul>
                                    </div>

                                    <li className="nav-items">
                                        <a data-bs-toggle="collapse" href="#collapseExamplseti" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-home"></i><p>Payment Gateway</p><span className="paret_setting"></span>
                                        </a>
                                    </li>
                                    <div className="collapse  div-collapse" id="collapseExamplseti" >
                                        <ul className="nav_collapse">
                                            <li>Fevicon</li>
                                            <li>Logo</li>
                                            <li>General Settings</li>
                                            <li>Email Settings</li>
                                            <li>Preloader</li>
                                            <li>Breadcrumbs</li>
                                            <li>Social Links</li>
                                            <li>Plugins</li>
                                            <li>Maintainance Mode</li>
                                            <li>Cookies Alert</li>
                                            <li>SEO Information</li>
                                        </ul>
                                    </div>

                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-toggle-on"></i><p>Language Management</p></a>
                                    </li>
                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-toggle-on"></i><p>Role Management</p></a>
                                    </li>
                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-toggle-on"></i><p>Admins Management</p></a>
                                    </li>
                                    <li className="nav-items">
                                        <a className=""><i className="fa fa-toggle-on"></i><p>Clear Cache</p></a>
                                    </li>

                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>


    </>)


}

export default AdminSlider