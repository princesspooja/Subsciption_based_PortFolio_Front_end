import Head from "next/head";
import Quill from "../../user/dashboardComponent/quil";

const DomainTexts = () => {
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
                                <form>
                                    <div className="form_datass">
                                    <label htmlFor="exampleInputEmail1" className="form-label" id="label_item">Message After Domain Request**</label>
                                    <textarea className="form-control">We have received your custom domain request. Please allow us 2 business days to 
                                        connect the domain with our server.</textarea>
                                    </div>
                                    <div className="form_datass">
                                    <label htmlFor="exampleInputEmail1" className="form-label" id="label_item">CNAME Record Section Title**</label>
                                    <input type="text" className="form-control" name="cname-record" /> 
                                    </div>
                                    <div className="form_datass">
                                    <label htmlFor="exampleInputEmail1" className="form-label" id="label_item">CNAME Record Section Title**</label>
                                    <div style={{width:'100%'}}>
                                    <Quill  />
                                        </div>                                    </div>
                                    {/* <div className="form_datass">
                                        <div className="table_footer"> 
                                        <button className="btn btn-primary">Download</button>
                                        </div>
                                    </div> */}

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="table_footer mt-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table_title d-inline-block"><button className="btn btn-success">Donwload</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default DomainTexts;