import Head from "next/head";
import Image from "next/image";

const Sections = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

        </Head>

        <div className="page_header">
            <h4 className="table_h4">Section Customization</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a> Website Pages</a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href=""> Settings </a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href="">Section Customization</a></li>
            </ul>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="subdomain">
                        <h4 className="subdomain-head">Customize Sections</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 setting-form ">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Introduction Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio1">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio2">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Features Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio3">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio2" id="btnradio4" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio4">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Work Process Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio3" id="btnradio5" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio5">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio3" id="btnradio6" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio6">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Preview Templates Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio4" id="btnradio7" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio7">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio4" id="btnradio8" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio8">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Featured Users Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio5" id="btnradio9" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio9">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio5" id="btnradio10" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio10">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Pricing Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio6" id="btnradio11" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio11">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio6" id="btnradio12" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio12">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Partners Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio7" id="btnradio13" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio13">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio7" id="btnradio14" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio14">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Testimonial Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio8" id="btnradio15" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio15">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio8" id="btnradio16" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio16">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">News Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio9" id="btnradio17" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio17">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio9" id="btnradio18" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio18">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Top Footer Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio10" id="btnradio19" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio19">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio10" id="btnradio20" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio20">Deactive</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 setting-form mt-3">
                                    <div className="col-12 mb-2 image-setting">
                                        <label for="exampleInputEmail1" className="form-label">Copyright Section **</label>

                                    </div>
                                    <div class="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio11" id="btnradio21" autocomplete="off" checked />
                                        <label class="btn btn-outline-primary" for="btnradio21">Active</label>

                                        <input type="radio" class="btn-check" name="btnradio11" id="btnradio22" autocomplete="off" />
                                        <label class="btn btn-outline-primary" for="btnradio22">Deactive</label>
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
            </div>
        </div>

    </>)
}
export default Sections;