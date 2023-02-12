import Head from "next/head"
import Image from "next/image"
const Introsection = () => {
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
            <h4 className="edit-page-title">Intro Section</h4>
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
                    Home Page
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                    Intro Section
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="edit-card">
                    <div className="edit-card-header ">
                        <div className="edit-card-title">Update Intro Section</div>
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
                    <div className="edit-card-body">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <form action="">
                                    <div className="row ">
                                        <div className="col-g-12">
                                            <div className="form-group">
                                                <div className="col">
                                                    <label htmlFor="image">
                                                        <strong>Image</strong>
                                                    </label>
                                                </div>
                                                <div className="col-md-12 show-image">
                                                    {/* <Image src="dashboard/blogs/image3.jpg" width="300" height="250" className="blog-image" alt="image3"/> */}

                                                    <Image src="/adminDashboard/herosection.png" width="400" height="257" alt="image" className="edit-image" />
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" name="first_name" className="form-control" value="About US" />
                                        </div>
                                        <div className="form-group">
                                            <label >Subtitle</label>
                                            <input type="text" name="last_name" className="form-control" value="We beilieve in Customer Trust" />
                                        </div>
                                        <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Text</label>
                                    <textarea class="form-control" id="floatingTextarea2" value="Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta finibus mauris. Aliquam consectetur, ex in gravida porttitor," style={{ height: 120 }}></textarea>
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
export default Introsection;