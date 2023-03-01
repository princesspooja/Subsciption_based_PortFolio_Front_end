import Head from "next/head"
import Script from "next/script"
import Image from "next/image"
const Allsubdomain = () => {
  return (<>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
      <title>Profilex - User Dashboard-changepass profile</title>
    </Head>
    
    <div className="allsubD-page-inner">
      <div className="allsubD-page-header">
        <h4 className="allsubD-page-title">Registered Users</h4>
        <ul className="breadcrumbs">
          <li className="nav-home">
            <a>
              <i className="fa fa-home"></i>
            </a>
          </li>
          <li className="nav-separator">
            <a>
              <i className="fas fa-angle-right"> </i>
            </a>
          </li>
          <li className="nav-item">
            <a>
            Registered Users
            </a>
          </li>
         
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="allsubD-card">
            <div className="row">
              <div className="col-6">
              <div className="allsubD-card-header ">
                <div className="allsubD-card-title">
                  Registered Users
                </div>
              </div>
              </div>
              <div className="col-lg-6  ">
              <form class="form-inline">
                <input class="form-control mr-sm-3" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary btn-add">add</button>
              </form>
              </div>
            </div>
            <div className="row">
                      <div className="col-sm-12">
                        <table className="table  table-striped  mt-3 " id="shri-table">
                          <thead>
                            <tr>
                              <th scope="col">Username	</th>
                              <th scope="col">Email</th>
                              <th scope="col">Featured</th>
                              <th scope="col">Preview Template</th>
                              <th scope="col">Email Status	</th>
                              <th scope="col">Account</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>chiesa</td>
                              <td>chiesa@example.com</td>
                              <td>
                                <form action="">
                                  <select className="form-control-dn  btn-danger" name="" id="" >
                                  <option value="" selected>No </option>
                                  <option value="">Yes</option>
                                    
                                  </select>
                                
                                </form>
                              </td>
                              <td>
                                <form action="">
                                  <select className="form-control-cs  bt-success" name="" id="" >
                                  <option value="" selected>Yes </option>
                                  <option value="">No</option>
                                  </select>
                                  <button className="btn btn-primary bt-edit" data-bs-toggle="modal" data-bs-target="#exampleregister">Edit</button>
                                </form>
                              </td>
                              <td>
                                <form action="">
                                  <select className="form-control-sm  bt-verified" name="" id="" >
                                  <option value="" selected>Verified </option>
                                  <option value="">Unverified</option>
                                  </select>
                                </form>
                              </td>
                              <td>
                                <form action="">
                                  <select className="form-control-sm bg bt-verified" name="" id="" >
                                  <option value="" selected>Active </option>
                                  <option value="">Deactive</option>
                                  </select>
                                </form>
                              </td>
                              <td>
                              <div class="btn-group">
                                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Action
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                              </div>
                              </td>
                            </tr>
                            <tr>
                              <td>chiesa</td>
                              <td>chiesa@example.com</td>
                              <td>
                                <form action="">
                                  <select className="form-control-dn  btn-danger" name="" id="" >
                                  <option value="" selected>No </option>
                                  <option value="">Yes</option>
                                    
                                  </select>
                                
                                </form>
                              </td>
                              <td>
                                <form action="">
                                  <select className="form-control-cs  bt-success" name="" id="" >
                                  <option value="" selected>Yes </option>
                                  <option value="">No</option>
                                  </select>
                                  <button className="btn btn-primary bt-edit" data-bs-toggle="modal" data-bs-target="#exampleregister">Edit</button>
                                </form>
                              </td>
                              <td>
                                <form action="">
                                  <select className="form-control-sm  bt-verified" name="" id="" >
                                  <option value="" selected>Verified </option>
                                  <option value="">Unverified</option>
                                  </select>
                                </form>
                              </td>
                              <td>
                                <form action="">
                                  <select className="form-control-sm bg bt-verified" name="" id="" >
                                  <option value="" selected>Active </option>
                                  <option value="">Deactive</option>
                                  </select>
                                </form>
                              </td>
                              <td>
                              <div class="btn-group">
                                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Action
                                </button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                              </div>
                              </td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
             </div>
            </div>
          </div>
        </div>
      </div>

       {/* modal */}

       <div className="modal fade" id="exampleregister" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
       <form>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Preview Template</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             
              
              <div className="row">
                <div className="col-sm-12 mt-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Preview Image **</label>
                  <div className="modal-image">
                    <Image src="/dashboard/testimonials/testimonialimg1.jpg" width={150} height={150} alt="userpic" ty className="testimonials-image" />  

                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </div>
                <div className="col-sm-12 mt-3">
                  <label  className="form-label">Serial Number **</label>
                  <input type="number" className="form-control" id="examleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              
              
            </div>
            <div className="modal-footer mt-2">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    
  </>)
}
export default Allsubdomain