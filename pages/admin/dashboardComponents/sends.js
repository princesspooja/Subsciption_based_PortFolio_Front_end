import Head from "next/head"
import Image from "next/image"
const Send = () => {
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
            <h4 className="edit-page-title">Send Notification</h4>
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
                        Push Notification
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                        Send Notification
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="edit-card">
                    <div className="edit-card-header ">
                        <div className="edit-card-title">Send Notification</div>
                    </div>
                    <div className="edit-card-body">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <form action="">
                                    <div className="row ">

                                        <div className="form-group">
                                            <label>Title **</label>
                                            <input type="text" name="first_name" className="form-control" value="Enter title of notification" />
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Message</label>
                                                <textarea class="form-control" id="floatingTextarea2" value="" style={{ height: 120 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Button Text **</label>
                                            <input type="text" name="user_name" className="form-control" value="Enter Button Text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Button URL **</label>
                                            <input type="text" name="user_name" className="form-control" value="Enter Button URL" />
                                            <div className="mb-3">
                                                <p className="image-logo">Only those users will receive push notification, who have allowed it.Push notification won't work for 'http', it needs 'https'</p>
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
export default Send;