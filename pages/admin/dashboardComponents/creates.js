import Head from "next/head"
import Image from "next/image"
import Quill from "../../user/dashboardComponent/quil"
const Create = () => {
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
            <h4 className="edit-page-title">Pages</h4>
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
                        Create Page
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                        Pages
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="edit-card">
                    <div className="edit-card-header ">
                        <div className="edit-card-title">Create Page</div>
                    </div>
                    <div className="edit-card-body">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <form action="">
                                    <div className="row ">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Language **</label>
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
                                                    <div className="form-group">
                                                        <label>Name **</label>
                                                        <input type="text" name="first_name" className="form-control" value="Enter Name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Title **</label>
                                                        <input type="text" name="first_name" className="form-control" value="Enter Title" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Status **</label>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option value="1">Active</option>
                                                                    <option value="2">Deactive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 mt-3 mb-5">
                                                <Quill />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Meta Keyword</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Enter meta keywords" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Meta Description</label>
                                                <textarea class="form-control" id="floatingTextarea2" value="Enter meta description" style={{ height: 120 }}></textarea>
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
export default Create;