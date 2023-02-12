import Head from "next/head"
import Image from "next/image"
const Socaillinks = () => {
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
                <h4 className="logo-page-title">Social Links</h4>
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
                          Social Links
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="logo-card">
                  <div className="logo-card-header ">
                    <div className="logo-card-title">Add Social Link</div>
                  </div>
                  <div className="logo-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="col-g-12">
                              <div className="form-group">
                                <div className="col-md-12 ">
                                  <label >Social Icon **</label>
                                    {/* <input type="file" name="photo" id="image" className="form-control"/> */}
                                    <span>NB: click on the dropdown icon to select a social link icon.</span>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-md-12 show-image">
                                  <label >URL **</label>
                                    <input type="text" className="form-control" placeholder="Enter URL of socail medida account"/>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-md-12 show-image">
                                  <label >USerial Number **</label>
                                    <input type="number" className="form-control" placeholder="Enter Serial Number"/>
                                    <span style={{ color:"#ffad46" }}>The higher the serial number is, the later the social link will be shown</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    <div className="edit-card-footer mt-3">
                        <div className="form-group">
                          <div className="col-md-12 btn-center">
                            <button type="submit" id="btn-submit" className="btn btn-success">Update</button>
                          </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="logo-card mt-4">
                  <div className="logo-card-header ">
                    <div className="logo-card-title">Social Links</div>
                  </div>
                  <div className="logo-card-body">
                  <div className="table_body">
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
                              <th scope="col">Icon</th>
                              <th scope="col">URL</th>
                              <th scope="col">Serial Number</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td><i className="fab fa-dribbble"></i></td>
                              <td>https://dribbble.com/	</td>
                              <td>5</td>

                              <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td><i className="fab fa-instagram"></i></td>
                              <td>https://www.instagram.com/</td>
                              <td>4</td>

                              <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><i className="fab fa-linkedin"></i></td>
                              <td>https://bd.linkedin.com//</td>
                              <td>3</td>

                              <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td><i className="fab fa-twitter"></i></td>
                              <td>https://twitter.com//</td>
                              <td>2</td>

                              <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td><i className="fab fa-facebook"></i></td>
                              <td>https://www.facebook.com/</td>
                              <td>1</td>

                              <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
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
              </div>
            </div>
          
    </>)
}
export default Socaillinks