import Head from "next/head"
import Image from "next/image"
const Basicinformations = () => {
    return (<>
    <Head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>

        <title>Profilex - User Dashboard</title>
    </Head>

        <div className="basic-page-header">
            <h4 className="basic-page-title">Basic Informations</h4>
            <ul className="breadcrumbs">
                <li className="nav-basic">
                    <a>
                      <i className="fa fa-basic"></i>
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                      <i className="fa fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                        Basic Settings 
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                      <i className="fa fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                        Basic Informations 
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="basic-card">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="basic-card-header ">
                                <div className="basic-card-title">Update Basic Informations</div>
                              </div>
                        </div>
                        
                        <div className="basic-card-body">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Information</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 pr-0">
                                                <div className="form-group">
                                                    <label >Website Title **</label>
                                                    <input type="text" className="form-control" value="Profilex"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Remain to write code from --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Designation **</label>
                                                    <div className="bootstrap-tagsinput">
                                                        <select className="form-control"  id="">
                                                            <option value="">America</option>
                                                            <option value="">Nepal</option>
                                                            <option value="">China</option>
                                                            <option value="">Pakistan</option>
                                                            <option value="">india</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Website Appearance</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 pr-0">
                                                <div className="form-group">
                                                    <label >Base Color Code **</label>
                                                    <input type="color" className="form-control" value="Profilex"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Website Appearance</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 pr-0">
                                                <div className="form-group">
                                                    <label >Base Currency Symbol **</label>
                                                    <input type="select" className="form-control" value="$"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Base Currency Symbol Position **</label>
                                                    <select className="form-control" id="">
                                                        <option value="">Left</option>
                                                        <option value="">Right</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 pr-0">
                                                <div className="form-group">
                                                    <label >Base Currency Text **</label>
                                                    <input type="select" className="form-control" value="$"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 pr-0">
                                                <div className="form-group">
                                                    <label >Base Currency Symbol Position **</label>
                                                    <select className="form-control" id="">
                                                        <option value="">Left</option>
                                                        <option value="">Right</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 pr-0">
                                                <div className="form-group">
                                                    <label >Base Currency Rate **</label>
                                                    <div className="group-input">
                                                        <div className="group-input-prepend">
                                                            <span className="text-group">1 USD =</span>
                                                        </div>
                                                        <input type="text"  className="form-control" value="1.00" />
                                                        <div className="group-input-append">
                                                        <span className="text-group">USD</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="home-card-footer mt-3">
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
        </div>
    </>)
}
export default Basicinformations