import Head from "next/head"
import Image from "next/image"
const Editprofiles = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
            <div className="admin_mail-page-header">
                <h4 className="admin_mail-page-title">Mail From Admin</h4>
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
                          Mail From Admin 
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="admin_mail-card">
                  <div className="admin_mail-card-header ">
                    <div className="admin_mail-card-title">Mail From Admin</div>
                  </div>
                  <div className="admin_mail-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="col-g-12">
                            </div>
                            <div className="form-group">
                              <label>SMTP Status **</label>
                              <div className="groupselect">
                                  <label className="groupselect-item">
                                    <input type="radio" name="is_smpt"  value="1" className="groupselect-input" checked />
                                    <span className="groupselect-button">Active</span>
                                  </label>
                                  <label className="groupselect-item">
                                    <input type="radio" name="is_smpt"  value="0" className="groupselect-input" checked />
                                    <span className="groupselect-button">Deactive</span>
                                  </label>
                              </div>
                              
                            </div>
                            <div className="form-group">
                              <label>SMTP Host **</label>
                              <input type="text" name="smtp_host" className="form-control" value="Roaz1-ts2.a2hosting.commario"/>
                            </div>
                            <div className="form-group">
                              <label >SMTP Port **</label>
                              <input type="text" name="smtp_host"  className="form-control" value="587"/>
                            </div>
                            <div className="form-group">
                              <label>Encryption **</label>
                              <input type="text" name="encryption" className="form-control" value="TLS"/>
                            </div>
                            <div className="form-group">
                              <label >SMTP Username **</label>
                              <input type="text" name="smtp_username" className="form-control" value="admin@kreativdev.com"/>
                            </div>
                            <div className="form-group">
                              <label >SMTP Password **</label>
                              <input type="smtp_password" name="addres" className="form-control" value="ZAOP!~rSk~gb" />
                            </div>
                            <div className="form-group">
                              <label >From Email **</label>
                              <input type="text" name="from_email"  className="form-control" value="admin@kreativdev.com"/>
                            </div>
                            <div className="form-group">
                              <label >From Name **</label>
                              <input type="text" name="from_name" id="" className="form-control" value="Profilex"/>
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
export default Editprofiles