import Head from "next/head"
import Image from "next/image"
const Preloader = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
            <div className="favicon-page-header">
                <h4 className="favicon-page-title">Preloader</h4>
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
                          Preloader
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="favicon-card">
                  <div className="favicon-card-header ">
                    <div className="favicon-card-title">Update Favicon</div>
                  </div>
                  <div className="favicon-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="col-g-12">
                              <div className="form-group">
                                <div className="col">
                                  <label htmlFor="image">
                                    <strong>Favicon **</strong>
                                  </label>
                                </div>
                                <div className="col-md-12 show-image">
                                  <Image src="/adminDashboard/settingimage/favicon.jpg" width="80" height="80" alt="image" className="favicon-image"/>
                                </div>
                                <input type="file" name="photo" id="image" className="form-control"/>
                                <span className="color-span"style={{color: "#ffad46"}}>
                                Only GIF, JPG, JPEG, PNG file formats are allowed
                                </span>
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
export default Preloader