import Head from "next/head";
import Image from "next/image";

const UserRoute = () => {
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
            <h4 className="table_h4">Request Page Texts</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a>Custom Domains</a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href="">Request Page Text</a></li>
            </ul>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="table_card">
                    <div className="table_header">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table_title d-inline-block">Texts</div>
                            </div>
                        </div>
                    </div>
                    <div className="table_body pt-5 pb-5">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label >Featured Image**</label>
                                        <br />
                                        <Image src="/dashboard/services/noimage.jpg" width={160} height={160} alt="Image"></Image>
                                        <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-6">
                                        <label >Username **</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label >Email **</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-6">
                                        <label >First Name **</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label >Last Name **</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-6">
                                        <label >Password **</label>
                                        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label >Re-type Password **</label>
                                        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-12">
                                        <label >Role **</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select a role</option>
                                            <option value="1">Editor</option>
                                            <option value="2">Manager</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table_footer mt-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table_title d-inline-block"><button className="btn btn-success">Update</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default UserRoute;