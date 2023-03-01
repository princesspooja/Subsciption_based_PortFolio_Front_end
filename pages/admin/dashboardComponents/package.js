import Head from "next/head";

const Packages = () => {
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
      <h4 className="table_h4">Packages</h4>
      <ul className="table_ul">
        <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
        <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
        <li className="home_datas"><a> Packages</a></li>
      </ul>
    </div>

        <div className="row">
            <div className="col-md-12">
                <div className="table_card">
                    <div className="table_header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="table_title d-inline-block">Package Page</div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                                <a href="" className="btn btn-primary float-right btn-sm" id="float_rigth" data-bs-toggle="modal" data-bs-target="#exampleModalpackagemanagement"><i className="fa fa-plus"></i>Add Package</a>
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
                                                            <th scope="col">Title</th>
                                                            <th scope="col">Cost</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" name="" id="" /></td>
                                                            <td>Mark</td>
                                                            <td>$999</td>
                                                            <td>Active</td>

                                                            <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" name="" id="" /></td>
                                                            <td>Mark</td>
                                                            <td>$999</td>
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

        <div className="modal fade" id="exampleModalpackagemanagement" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Package</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <label for="exampleInputEmail1" className="form-label">Package title*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter package title" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Price (USD)*</label>
                                    <input type="number" name="expiration_reminder" class="form-control"  />
                                    <div id="emailHelp" className="form-text text-warning">If price is 0 , than it will appear as free</div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Package term*</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Choose a Package term</option>
                                        <option value="2">monthly</option>
                                        <option value="3">yearly</option>
                                        <option value="4">lifetime</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Package Features</label>

                                    <div className="perference-group">
                                        <div className="selectgroup selectgroup-pills mt-2">

                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Custom Domain</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Subdomain</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">QR Builder</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">vCard</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Online CV & Export</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Follow/Unfollow</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Blog</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Portfolio</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Achievements</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Skill</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Service</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Experience</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Testimonial</span>
                                            </label>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Featured *</label>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio1">Yes</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio2">No</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Trial *</label>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradios" id="btnradio3" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio3">Yes</label>

                                        <input type="radio" class="btn-check" name="btnradios" id="btnradio4" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio4">No</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Status*</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select a status</option>
                                        <option value="1">Active</option>
                                        <option value="2">Deactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Meta Keyword</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Meta Description</label>
                                    <textarea class="form-control" id="floatingTextarea2" style={{ height: 120 }}></textarea>
                                </div>
                            </div>



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


export default Packages;