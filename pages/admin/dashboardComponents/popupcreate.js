import Head from "next/head"
import Image from "next/image"
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
        <div className="page_header">
            <h4 className="table_h4">Settings</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a> Package Management </a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href="">Settings</a></li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="edit-card">
                    <div className="edit-card-header ">
                        <div className="edit-card-title">Update Hero Section</div>
                        <div className="row">
                            <div className="col-sm-6">
                                <select className="form-select " aria-label="Default select example">
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

                                                    <Image src="/adminDashboard/herosection.png" width="143" height="96" alt="image" className="edit-image" />
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" name="first_name" className="form-control" value="Our Platform,Your Success" />
                                        </div>
                                        <div className="form-group">
                                            <label >Text</label>
                                            <input type="text" name="last_name" className="form-control" value="Minimize the time, it takes to initiate a relationship between you and the customer." />
                                        </div>
                                        <div className="form-group">
                                            <label>Button Text</label>
                                            <input type="text" name="user_name" className="form-control" value="Explore Plans" />
                                        </div>
                                        <div className="form-group">
                                            <label>Button URL</label>
                                            <input type="text" name="user_name" className="form-control" value="http://example.com/" />
                                        </div>
                                        <div className="form-group">
                                            <label>Video URL</label>
                                            <input type="text" name="user_name" className="form-control" value="https://www.youtube.com/watch?v=6KJqEPVfoDs" />
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