import Head from "next/head";
import Image from "next/image";

const Settings = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

        </Head>

        <div className="container">
            <div className="page-head">
                <h4 className="page-tittle"> Settings</h4>
                <ul className="page-subdomain">
                    <li><a href=""><i className="fa fa-home"></i></a></li>
                    <li><i className="fa fa-chevron-right"></i></li>
                    <li> Package Management</li>
                    <li><i className="fa fa-chevron-right"></i></li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="subdomain">
                        <h4 className="subdomain-head">Settings</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 setting-form">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleColorInput" className="form-label">Remind Before (Days) **</label>
                                        <input type="number" name="expiration_reminder" class="form-control"  />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <p className="image-logo">Specify how many days before you want to remind your customers about subscription expiration. (via mail)</p>
                            </div>
                            <div className="color-card">
                                <div className="row">
                                    <div className="col-12  color-footer">
                                        <button type="submit" id="submitbtn" className="btn btn-success button-type">Update</button>
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
export default Settings;