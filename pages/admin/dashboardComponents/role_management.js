import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Role_management = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        </Head>

        <div className="page_header">
            <h4 className="table_h4">Roles</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a>Roles Management</a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href="">Roles</a></li>
            </ul>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="subdomain">
                        {/* <h4 className="subdomain-head">Permission Manangement</h4> */}
                        <div className="table_header">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="table_title d-inline-block">Permission Management</div>
                                </div>
                                <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                                    <Link href="/admin/roles" legacyBehavior><a className="btn btn-primary float-right btn-sm" ><i className="fas fa-backward" style={{'margin-right':'10px'}}></i>Back</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 setting-form-features">
                                    <form action="" method="post">
                                        <h5>Permission :</h5>

                                        <div className="perference-group">
                                            <div className="selectgroup selectgroup-pills mt-2">

                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Package Manangement</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Payment Log</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Subdomains</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Custom Domains</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Menu Builder</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Footer</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Pages</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Blogs</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">FAQ Management</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Contact Page</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Announcement Popup</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Resigtered Users</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Push Notification</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Subscribers</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Payment Gateways</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Settings</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Language Management</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Role Management</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                    <span className="selectgroup-button">Admins Management</span>
                                                </label>

                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="color-card">
                                <div className="row">
                                    <div className="col-12  color-footer">
                                        <button type="submit" id="submitbtn"
                                            className="btn btn-success button-type">Update</button>
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
export default Role_management;