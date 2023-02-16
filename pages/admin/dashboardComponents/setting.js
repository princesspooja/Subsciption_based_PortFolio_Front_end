import Head from "next/head";
import Image from "next/image";

const Settings = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

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
                                        <input type="number" name="expiration_reminder" class="form-control" />
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