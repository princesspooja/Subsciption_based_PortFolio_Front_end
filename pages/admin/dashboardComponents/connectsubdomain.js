import Head from "next/head"
import Script from "next/script"
import Formfile from "./Componenet/formfile"

const Connectsubdomain = () => {
  return (<>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
      <title>Profilex - User Dashboard-changepass profile</title>
    </Head>
    
    <div className="cntsubdomain-page-inner">
      <div className="cntsubdomain-page-header">
        <h4 className="cntsubdomain-page-title">Connected Subdomains</h4>
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
              Subdomains
            </a>
          </li>
          <li className="nav-separator">
            <a>
              <i className="fas fa-angle-right"> </i>
            </a>
          </li>
          <li className="nav-item">
            <a>
              Connected
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="cntsubdomain-card">
            <div className="row">
              <div className="col-6">
              <div className="cntsubdomain-card-header ">
                <div className="cntsubdomain-card-title">
                  All Subdomains
                </div>
              </div>
              </div>
              <div className="offset-3 col-3 ">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
              </div>
            </div>
            <div className="row">
                      <div className="col-sm-12">
                        <table className="table  table-striped  mt-3 " id="shri-table">
                          <thead>
                            <tr>
                              <th scope="col">Username	</th>
                              <th scope="col">Subdomain</th>
                              <th scope="col">Status</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>chiesa</td>
                              <td>chiesa.profilo.xyz</td>
                              <td>
                                <form action="">
                                  <select className="form-control-sm " name="" id="" >
                                  <option value="" selected>Connected </option>
                                  <option value="">Pending</option>
                                    
                                  </select>
                                
                                </form>
                              </td>

                              <td className="td-data"><a ><button type="button" className="btn btn-primary"><span data-bs-toggle="modal" data-bs-target="#exampleModalservices">Mail</span></button></a>  
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

      <div className="modal fade" id="exampleModalservices" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
      <Formfile />
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>

    
  </>)
}
export default Connectsubdomain