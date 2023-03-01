import Script from "next/script";
import Head from "next/head";
import Image from "next/image";


const Testimonials = () => {
    return (<>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Service</title>
        </Head>
        <div className="page_header">
            <h4 className="table_h4">Testimonials</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a>  Home Page  </a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href=""> Testimonials</a></li>
            </ul>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="table_card">
                    <div className="table_header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="table_title d-inline-block"> Testimonials</div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select language</option>
                                            <option value="1">English</option>
                                            <option value="2">Hindi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                                <a href="" className="btn btn-primary float-right btn-sm" id="float_rigth" data-bs-toggle="modal" data-bs-target="#exampleModalTestimonials"><i className="fa fa-plus"></i>Add Testimonial</a>
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
                                                            <option value="2">50</option>
                                                            <option value="3">100</option>
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
                                                            <th scope="col">#</th>
                                                            <th scope="col">Image</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Rank</th>
                                                            <th scope="col">Serial Number</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>MISC</td>
                                                            <td>Banega</td>
                                                            <td>Chef, Jastiford</td>
                                                            <td>4</td>

                                                            <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>MISC</td>
                                                            <td>Banega</td>
                                                            <td>Chef, Jastiford</td>
                                                            <td>4</td>

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

        <div className="modal fade" id="exampleModalTestimonials" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Feature</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            
                            <div className="row">
                                <div className="col-sm-12">
                                    <label >Icon **</label>
                                    <br />
                                    <Image src="/dashboard/services/noimage.jpg" width={160} height={160} alt="the image of service" id="service_image"></Image>
                                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Language**</label>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select language</option>
                                                <option value="1">English</option>
                                                <option value="2">Hindi</option>
                                            </select>
                                        </div>
                                    </div>                                
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Comment **</label>
                                    <textarea class="form-control" id="floatingTextarea2" value="" style={{ height: 120 }}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Name **</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Rank **</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Serial Number</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text text-warning">The higher the serial number is, the later the testimonial will be shown.</div>
                                </div>
                            </div>




                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>

    </>)
}


export default Testimonials;