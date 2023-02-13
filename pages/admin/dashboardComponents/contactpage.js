import Head from "next/head"
import Image from "next/image"
const Contactpage = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
            <div className="edit-page-header">
                <h4 className="edit-page-title">Contact Page</h4>
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
                           Contact Page
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="edit-card">
                  <div className="edit-card-header ">
                    <div className="edit-card-title">Contact Page</div>
                  </div>
                  <div className="edit-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="form-group">
                              <label>Form Title **</label>
                              <input type="text"  className="form-control" placeholder="Enter from title"/>
                            </div>
                            <div className="form-group">
                              <label >Information Title **</label>
                              <input type="text"   className="form-control" placeholder="Enter information Title" />
                            </div>
                            <div className="form-group">
                              <label >Address **</label>
                              <textarea type="text" className="form-control" cols="4" rows="3"> House - 44, Road - 03, Sector - 11, Uttara, DhakaDhanmondi, DhakaMohammadpur, Dhaka</textarea>
                              <div style={{ color:"#ffad46" }}>
                                 Use newline to seperate multiple addresses.
                              </div>
                            </div>
                            <div className="form-group">
                              <label >Contact Information Text **</label>
                              <input type="text" name="citry"  className="form-control" placeholder="Enter information text"/>
                            </div>
                            <div className="form-group">
                              <label >Phone **</label>
                              <input type="text" name="state" id="" className="form-control" placeholder="Enter phone number"/>
                              <div style={{ color:"#ffad46" }}>
                                Use comma (,) to add multiple Phone Numbers
                              </div>
                            </div>
                            <div className="form-group">
                              <label >Email **</label>
                              <input type="text" name="country" id="" className="form-control" placeholder="Enter Email Addresses"/>
                              <div style={{ color:"#ffad46" }}>
                                Use comma (,) to add multiple Email Addresses
                              </div>
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
export default Contactpage