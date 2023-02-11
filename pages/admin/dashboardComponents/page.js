import Head from "next/head";

const Pages = () => {
    return (<>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Dashboard</title>
        </Head>
        <div className="page_header">
            <h4 className="table_h4">Page Lists</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a> Pages </a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a>Page Lists</a></li>

            </ul>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="table_card">
                    <div className="table_header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="table_title d-inline-block">Page Lists</div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select language</option>
                                            <option value="1">English</option>
                                            <option value="2">Hindi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                                <a href="" className="btn btn-primary float-right btn-sm" id="float_rigth" data-bs-toggle="modal" data-bs-target="#exampleModalpages"><i className="fa fa-plus"></i>Add Page</a>
                            </div>
                        </div>
                    </div>
                    <div className="table_body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <div className="dataTables container-fluids ">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="tatabaseTableLenght">
                                                    <h6>Show</h6>
                                                    <label  >

                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>10</option>
                                                            <option value="2">25</option>
                                                            <option value="3">50</option>
                                                            <option value="4">100</option>
                                                        </select>

                                                    </label>
                                                    <h6>entries</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <table className="table table-light table-striped  mt-3 " id="shri-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"><input type="checkbox" name="" id="" /></th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">URL</th>
                                                            <th scope="col">Title</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" name="" id="" /></td>
                                                            <td>Terms & Conditions</td>
                                                            <td>https://</td>
                                                            <td>Terms & Conditions</td>
                                                            <td>Active</td>

                                                            <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" name="" id="" /></td>
                                                            <td>Terms & Conditions</td>
                                                            <td>https://</td>
                                                            <td>Terms & Conditions</td>
                                                            <td>Active</td>

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

        {/* modal */}

        <div className="modal fade" id="exampleModalpages" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Package</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>)
}


export default Pages;