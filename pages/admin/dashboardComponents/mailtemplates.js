import Head from "next/head"
import Image from "next/image"
const Mailtemplates = () => {
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
                <h4 className="favicon-page-title">Email Settings</h4>
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
                        Settings  
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
                          Mail Templates 
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="favicon-card">
                  <div className="favicon-card-header ">
                    <div className="favicon-card-title">Mail Templates</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="table-responsive">
                        <div className="dataTables container-fluids ">
                          <div className="row">
                            <div className="col-sm-12">
                              <table className="table table-striped mt-3 " id="shri-table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Mail Type</th>
                                    <th scope="col">Mail Subject</th>
                                    <th scope="col">Actiont</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>email_verification</td>
                                    <td>Verify Your Email	</td>

                                    <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a></td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>custom_domain_connectedAfter Admin connects a custom  
                                      </td>
                                    <td>Custom Domain is Connected with Our Server	</td>

                                    <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
    </>)
}
export default Mailtemplates