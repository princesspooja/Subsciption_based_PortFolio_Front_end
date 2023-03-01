import Head from "next/head"
import Image from "next/image"
const Breadcrumb = () => {
    return (<>
    <Head>  
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
            <div className="logo-page-header">
                <h4 className="logo-page-title">Breadcrumb</h4>
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
                           Breadcrumb 
                        </a>
                    </li>
                    <li className="nav-separator">
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a>
                          Logo
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="logo-card">
                  <div className="logo-card-header ">
                    <div className="logo-card-title">Update Breadcrumb</div>
                  </div>
                  <div className="logo-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="col-g-12">
                              <div className="form-group">
                                <div className="col">
                                  <label htmlFor="image">
                                    <strong>Breadcrumb **</strong>
                                  </label>
                                </div>
                                <div className="col-md-12 show-image">
                                  <Image src="/adminDashboard/settingimage/breadcrum.jpg" width="400" height="111" alt="image" className="logo-image"/>
                                </div>
                                <input type="file" name="photo" id="image" className="form-control"/>
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
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
    </>)
}
export default Breadcrumb