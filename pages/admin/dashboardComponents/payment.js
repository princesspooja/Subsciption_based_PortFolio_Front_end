
import Head from "next/head";

const AdminPayment = ()=>{
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
        <h4 className="table_h4">Payment Logs</h4>
        <ul className="table_ul">
            <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
            <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
            <li className="home_datas"><a>Payment</a></li>
            <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
            <li className="home_datas"><a href="">Payment Log Page</a></li>
        </ul>
    </div>

    <div className="row">
        <div className="col-md-12">
            <div className="table_card">
                <div className="table_header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="table_title d-inline-block">Payment Log</div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                            <input type="text" className="form-control float-right" name="search" placeholder="Search By Transaction ID" />
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
                                                    <th scope="col">Transaction Id</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Package</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Payment <br />Status </th>
                                                    <th scope="col">Payment <br /> Method </th>
                                                    <th scope="col">Receipt</th>
                                                    <th scope="col">Actions</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>381c9990</td>
                                                    <td>Mark</td>
                                                    <td>platinum life <br /> [Lifetime]</td>
                                                    <td>$999</td>
                                                    <td>success</td>
                                                    <td>Stripe</td>
                                                    <td> - </td>
                                                    <td className="td-data"><a ><button type="button" className="btn btn-success"><span>Details</span></button></a></td>
                                                  </tr>
                                                  <tr>
                                                    <td>381c9990</td>
                                                    <td>Mark</td>
                                                    <td>platinum life <br /> [Lifetime]</td>
                                                    <td>$999</td>
                                                    <td>success</td>
                                                    <td>Stripe</td>
                                                    <td> - </td>
                                                    <td className="td-data"><a ><button type="button" className="btn btn-success"><span>Details</span></button></a></td>
                                                  </tr>
                                                  <tr>
                                                    <td>381c9990</td>
                                                    <td>Mark</td>
                                                    <td>platinum life <br /> [Lifetime]</td>
                                                    <td>$999</td>
                                                    <td>success</td>
                                                    <td>Stripe</td>
                                                    <td> - </td>
                                                    <td className="td-data"><a ><button type="button" className="btn btn-success"><span>Details</span></button></a></td>
                                                  </tr>
                                                  <tr>
                                                    <td>381c9990</td>
                                                    <td>Mark</td>
                                                    <td>platinum life <br /> [Lifetime]</td>
                                                    <td>$999</td>
                                                    <td>success</td>
                                                    <td>Stripe</td>
                                                    <td> - </td>
                                                    <td className="td-data"><a ><button type="button" className="btn btn-success"><span>Details</span></button></a></td>
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

    </>)
}


export default AdminPayment