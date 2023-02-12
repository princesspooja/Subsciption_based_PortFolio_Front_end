import Head from "next/head"
import Image from "next/image"
const Maintenancemode = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
            <div className="mt_mode-page-header">
                <h4 className="mt_mode-page-title">Maintenance Mode</h4>
                <ul className="breadcrumbs">
                    <li className="nav-home">
                        <a>
                          <i className="fa fa-home"></i>
                        </a>
                    </li>
                    <li className="nav-separator">
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a>
                            Basic Settings 
                        </a>
                    </li>
                    <li className="nav-separator">
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a>
                           Maintenance Mode
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mt_mode-card">
                  <div className="mt_mode-card-header ">
                    <div className="mt_mode-card-title">Update Profile</div>
                  </div>
                  <div className="mt_mode-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="col-g-12">
                              <div className="form-group">
                                <div className="col">
                                  <label htmlFor="image">
                                    <strong>Profile Image ***</strong>
                                  </label>
                                </div>
                                <div className="col-md-12 show-image">
                                {/* <Image src="dashboard/blogs/image3.jpg" width="300" height="250" className="blog-image" alt="image3"/> */}

                                  <Image src="/adminDashboard/settingimage/maintainace.png" width="400" height="484" alt="image" className="mt_mode-image"/>
                                </div>
                                <input type="file" name="photo" id="image" className="form-control"/>
                              </div>
                            </div>
                           
                            
                           
                            <div className="form-group">
                              <label >Maintenance Message*</label>
                              <textarea type="text" name="addres" className="form-control" cols="3" rows="3" value="We are upgrading our site. We will come back soon. Please stay with us.Thank you."></textarea>
                            </div>
                            <div className="form-group">
                              <label >Secret Path</label>
                              <input type="text" name="number" className="form-control" />
                              <span className="label-color">After activating maintenance mode, You can access the website via https://profilo.xyz/</span>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="edit-card-footer mt-3">
                    <form action="">
                      <div className="form-group">
                        <div className="col-md-12 btn-center">
                          <button type="submit" id="btn-submit" className="btn btn-success">Update</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          
    </>)
}
export default Maintenancemode