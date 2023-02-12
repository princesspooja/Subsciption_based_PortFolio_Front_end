import Head from "next/head"
import Image from "next/image"
const Mailtoadmin = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
            <div className="mail_toadmin-page-header">
                <h4 className="mail_toadmin-page-title">Mail To Admin</h4>
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
                          Email Settings  
                        </a>
                    </li>
                    <li className="nav-separator">
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a>
                          Mail To Admin
                        </a>
                    </li>
                    <li className="nav-separator">
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a>
                          Mail From Admin 
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mail_toadmin-card">
                  <div className="mail_toadmin-card-header ">
                    <div className="mail_toadmin-card-title">Mail To Admin</div>
                  </div>
                  <div className="mail_toadmin-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="col-g-12">
                            </div>
                            <div className="form-group">
                              <label>Email Address **</label>
                              <input type="text" name="email_addres" className="form-control" value="pratik.anwar@gmail.com"/>
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
export default Mailtoadmin