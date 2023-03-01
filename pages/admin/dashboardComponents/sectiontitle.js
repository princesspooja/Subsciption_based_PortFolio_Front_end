import Head from "next/head";
import Image from "next/image";

const Sectiontitles = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

        </Head>

        <div className="container">
            <div className="page-head">
                <h4 className="page-tittle">Section Titles</h4>
                <ul className="page-subdomain">
                    <li><a href=""><i className="fa fa-home"></i></a></li>
                    <li><i className="fa fa-chevron-right"></i></li>
                    <li> Home Page</li>
                    <li><i className="fa fa-chevron-right"></i></li>
                    <li> Section Titles</li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="subdomain">
                        <h4 className="subdomain-head">Update Section Titles</h4>
                        <div className="container">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Feature Section Title</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Features" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Work Process Section Title</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Work Process" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Work Process Section Subtitle</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="How It Works"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Preview Templates Section Title</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Available Templates" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Preview Templates Section Subtitle</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Take a look at our awesome templates"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Featured Users Section Title **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Featured Users"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Featured Users Section Subtitle **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Take a look at the featured users"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Pricing Section Title **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Pricing"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Pricing Section Subtitle **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Choose Your Perfect Package"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Testimonial Section Title **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Testimonials"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Testimonial Section Subtitle **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="What Our Cliets Say"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Blog Section Title **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Blog Section Subtitle **</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Our Latest Blogs"/>
                                            </div>
                                        </div>
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
export default Sectiontitles;