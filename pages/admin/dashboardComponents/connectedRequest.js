import Head from "next/head";
import Quill from "../../user/dashboardComponent/quil";

const Connectedrequest = ()=>{
    return(<>
        <Head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard</title>
    </Head>
       <div className="page_header">
        <h4 className="table_h4">All Custom Domains</h4>
        <ul className="table_ul">
            <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
            <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
            <li className="home_datas"><a>Custom Domains</a></li>
            <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
            <li className="home_datas"><a href="">All Requests</a></li>
        </ul>
    </div>

    <div className="row">
        <div className="col-md-12">
            <div className="table_card">
                <div className="table_header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="table_title d-inline-block">All Custom Domains</div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                            <div className="d-flex">
                                <input type="text" name="serach1" className="form-control" placeholder="Search By username" />
                                <input type="text" name="serach2" className="form-control" placeholder="Search By domain" style={{'margin-left': '20px'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table_body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <div className="dataTables container-fluids ">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-light table-striped  mt-3 " id="shri-table">
                                                <thead>
                                                  <tr>
                                                    <th scope="col"><input type="checkbox" name="" id="" /></th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Requested <br /> Domain</th>
                                                    <th scope="col">Current <br /> Domain</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td>Romario</td>
                                                    <td><a>romario.monster</a></td>
                                                    <td>  -  </td>
                                                    <td>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Connected</option>
                                                        <option value="2">Pending</option>
                                                        <option value="3">Rejected</option>
                                                        <option value="3">Removed</option>
                                                      </select> 
                                                    </td>
                                                    <td className="td-data"><a ><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalrejc"><i className="fa fa-edit"></i><span>Mail</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
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
    
    {/* modal */}

<div className="modal fade" id="exampleModalrejc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <form>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Send Mail</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-12">
            <label for="exampleInputEmail1" className="form-label">Email Address**</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Address"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-3">
            <label for="exampleInputEmail1" className="form-label">Subject**</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Subject" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-3 mb-3">
            <label for="exampleInputEmail1" className="form-label">Message**</label>
            <Quill />
          </div>
        </div>
      </div>
      <div className="modal-footer mt-5">
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Submit</button>
      </div>
    </div>
  </div>
</form>
</div>



    </>)
}


export default Connectedrequest;