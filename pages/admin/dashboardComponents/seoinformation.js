import Head from "next/head"
const Seoinformation = () => {
    return (<>
    <Head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>

        <title>Profilex - User Dashboard</title>
    </Head>

        <div className="home-page-header">
            <h4 className="home-page-title">SEO InformationsH</h4>
            <ul className="breadcrumbs">
                <li className="nav-home">
                    <a>
                      <i className="fa fa-home"></i>
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
                        SEO Informations
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="home-card">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="home-card-header ">
                                <div className="home-card-title">Update SEO Informations</div>
                              </div>
                        </div>
                        <div className="col-lg-3 offset-lg-3 line">
                            <select className="form-select"  id="select-text"aria-label="Default select example">
                                <option value="selected disabled">Select a Language</option>
                                <option value="en" selected>English</option>
                                <option value="ar">عربى</option>
                            </select>
                        </div>
                        <div className="home-card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Meta Keywords For Home Page</label>
                                                    <input type="text" className="form-control" placeholder="Enter Meta Keyword"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Meta Keywords For Blogs Page</label>
                                                    <input type="text" className="form-control" placeholder="Enter Meta Keyword"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Meta Description For Home Page</label>
                                                    <textarea type="text" className="form-control" >Content here, content here', making it look like readable English. Many desktop publishing packag</textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Meta Description For Blogs Page</label>
                                                    <textarea type="text" className="form-control" >Content here, content here', making it look like readable English. Many desktop publishing packag</textarea>
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
export default Seoinformation