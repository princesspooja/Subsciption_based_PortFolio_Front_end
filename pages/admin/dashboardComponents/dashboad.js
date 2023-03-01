import Head from "next/head";
import Image from "next/image";
import Script from "next/script";


const Dashboard = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        </Head>

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card-body" id="card-secondary">
                        <div className="row">
                            <div className="col-5">
                                <div className="icon-big">
                                    <i className="fas fa-book"></i>
                                </div>
                            </div>
                            <div className="col-7 col-stats">
                                <div className="numbers">
                                    <p className="card-category">Achievements</p>
                                    <h4 className="card-title">4</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-4">
                    <div className="card-body" id="card-default">
                        <div className="row">
                            <div className="col-5">
                                <div className="icon-big">
                                    <i className="fas fa-book"></i>
                                </div>
                            </div>
                            <div className="col-7 col-stats">
                                <div className="numbers">
                                    <p className="card-category">Followers</p>
                                    <h4 className="card-title">0</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card-body" id="card-primary">
                        <div className="row">
                            <div className="col-5">
                                <div className="icon-big">
                                    <i className="fas fa-book"></i>
                                </div>
                            </div>
                            <div className="col-7 col-stats">
                                <div className="numbers">
                                    <p className="card-category">Followings</p>
                                    <h4 className="card-title">5</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <!-- second part --> */}

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card-body" id="card-primary">
                        <div className="row">
                            <div className="col-5">
                                <div className="icon-big">
                                    <i className="far fa-comment"></i>
                                </div>
                            </div>
                            <div className="col-7 col-stats">
                                <div className="numbers">
                                    <p className="card-category">Testimonials</p>
                                    <h4 className="card-title">4</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-4">
                    <div className="card-body" id="card-success">
                        <div className="row">
                            <div className="col-5">
                                <div className="icon-big">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                            </div>
                            <div className="col-7 col-stats">
                                <div className="numbers">
                                    <p className="card-category">Blogs</p>
                                    <h4 className="card-title">6</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-4">
                    <div className="card-body" id="card-danger">
                        <div className="row">
                            <div className="col-5">
                                <div className="icon-big">
                                    <i className="fas fa-book"></i>
                                </div>
                            </div>
                            <div className="col-7 col-stats">
                                <div className="numbers">
                                    <p className="card-category">Job Experiences</p>
                                    <h4 className="card-title">3</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="card-body-a">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="dataset">
                            <h4 className="dashboard-head">Monthly Income (2023)</h4>
                            <div className="karan">
                                <div className="table-responsive">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="dataset">
                            <h4 className="dashboard-head">Monthly Premium Users (2023)</h4>
                            <div className="karan">
                                <div className="table-responsive">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     </>)
}
export default Dashboard; 