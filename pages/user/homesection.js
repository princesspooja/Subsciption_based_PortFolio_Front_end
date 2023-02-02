import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import Homesection from "./dashboardComponent/homesection";
import Navbar from "./dashboardComponent/navbar";

const Homesections = () => {
    return (<>
    <Head>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard</title>
    </Head>
    
    <div className="wrapper">
      <Navbar />

    {/* <!-- slider --> */}

    <div className="slider slidebar-style-2" id="offcanvasExample">
        <div className="scroll-wrappers">
            <div className="slder-wrappers">
                <div className="slidebar-contents">
                    <div className="user_data_login">
                        <div className="avatar_div">
                        <div className="avatar_photo float-left mr-2">
                            {/* <img src="aadmi.jpg" alt="photo" /> */}
                            <Image src="/dashboard/aadmi.jpg" width={40} height={40} alt="userpic" />
                        </div>
                        <a data-bs-toggle="collapse" href="#collapseExamp" role="button" aria-expanded="false" aria-controls="collapseExample"><div className="info_daata">
                            <span>Romario Sara</span>
                            <p>Romario</p>
                        </div>
                        </a>
                        <span className="paret_sara"></span>
                    </div>
                        <div className="collapse  div-collapse data_collapse" id="collapseExamp" >
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
                                <li className="nav-items active">
                                    <a href="" className="a-active"><i className="fa fa-palette a-active"></i><p>Dashboard</p></a>
                                </li>
                                <li className="nav-items">
                                    <a href="" className=""><i className="fa fa-user-circle"></i><p>Edit Profile</p></a>
                                </li>
                                <li className="nav-items ">
                                    {/* <!-- <a href="" className=""><i className="fa fa-link"></i><p>Domains & URLs</p></a> */}
                                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-link"></i><p>Domain & URLs</p><span className="paret_domain"></span>
                                      </a>

                                </li>
                                <div className="collapse  div-collapse" id="collapseExample" >
                                    <ul className="nav_collapse">
                                      <li>Custom Domain</li>
                                      <li>Sub-Domain</li>
                                    </ul>
                                  </div>
                                <li className="nav-items ">
                                    <a data-bs-toggle="collapse" href="#collapseExamples" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-home"></i><p>Settings</p><span className="paret_setting"></span>
                                    </a>
                                </li>
                                <div className="collapse  div-collapse" id="collapseExamples" >
                                    <ul className="nav_collapse">
                                      <li>Themes</li>
                                      <li>Fevicon</li>
                                      <li>Logo</li>
                                      <li>Preloader</li>
                                      <li>Color Setting</li>
                                      <li>Social Links</li>
                                      <li>SEO Information</li>

                                    </ul>
                                  </div>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-home"></i><p>Home Sections</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-toggle-on"></i><p>Preference</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-pencil-ruler"></i><p>Skills</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-hands"></i><p>Services</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a data-bs-toggle="collapse" href="#collapseExampled" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-user-cog"></i><p>Experiences</p><span className="paret_experience"></span>
                                    </a>
                                </li>
                                <div className="collapse  div-collapse" id="collapseExampled" >
                                    <ul className="nav_collapse">
                                      <li>Job Experiences</li>
                                      <li>Educations</li>

                                    </ul>
                                  </div>
                                <li className="nav-items">
                                    <a href="" className=""><i className="fa fa-trophy"></i><p>Achievements</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a data-bs-toggle="collapse" href="#collapseExampled_portfolio" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-chalkboard-teacher"></i><p>Portfolio</p><span className="paret_portfolio"></span>
                                    </a>
                                </li>
                                <div className="collapse  div-collapse" id="collapseExampled_portfolio" >
                                    <ul className="nav_collapse">
                                      <li>Category</li>
                                      <li>Portfolios</li>

                                    </ul>
                                  </div>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-comment"></i><p>Testimonial</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a data-bs-toggle="collapse" href="#collapseExampled_blogs" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-blog"></i><p>Blogs</p><span className="paret_blogs"></span>
                                    </a>
                                </li>
                                <div className="collapse  div-collapse" id="collapseExampled_blogs" >
                                    <ul className="nav_collapse">
                                      <li>Category</li>
                                      <li>Blogs</li>

                                    </ul>
                                  </div>
                                <li className="nav-items ">
                                    <a data-bs-toggle="collapse" href="#collapseExample_qr" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-qr-code"></i><p>QR Codes</p><span className="paret_qr"></span>
                                    </a>
                                </li>
                                <div className="collapse  div-collapse" id="collapseExample_qr" >
                                    <ul className="nav_collapse">
                                      <li>Generate QR Code</li>
                                      <li>Saved QR Codes</li>

                                    </ul>
                                  </div>
                                <li className="nav-items ">
                                    <a data-bs-toggle="collapse" href="#collapseExample_vcards" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-address-card"></i><p>vCards Management</p><span className="paret"></span>
                                    </a>
                                </li>
                                <div className="collapse  div-collapse" id="collapseExample_vcards" >
                                    <ul className="nav_collapse">
                                      <li>vCards</li>
                                      <li>Add vCard</li>

                                    </ul>
                                  </div>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-file"></i><p>CVs Managements</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a data-bs-toggle="collapse" href="#collapseExample_follower" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-user-friends"></i><p>Follower/Following</p><span className="paret_follower"></span>
                                    </a>
                                </li>
                                <div className="collapse  div-collapse" id="collapseExample_follower" >
                                    <ul className="nav_collapse">
                                      <li>Follower</li>
                                      <li>Following</li>

                                    </ul>
                                  </div>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-language"></i><p>Language Management</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-file-invoice-dollar"></i><p>Buy Plan</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-list-ol"></i><p>Payment Logs</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-cloud-upload-alt"></i><p>Upload CV</p></a>
                                </li>
                                <li className="nav-items ">
                                    <a href="" className=""><i className="fa fa-key"></i><p>Change Password</p></a>
                                </li>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="main_panel">
      <div className="main_contents">
        <div className="pageinner_data">
              <Homesection />
          <div className="card-body">
              {/* <Editprofiles /> */}
              </div>



        </div>

      </div>

    </div>
  </div>





<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    </>)
}

export default Homesections