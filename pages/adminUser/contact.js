import Head from "next/head";
import Image from "next/image";

const Contact = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Service</title>
        </Head>
        <section className="Contact_page">
            <div class="container ">
                <div class="row">
                    <div class="col-sm-6">
                        <div className="page_contact">
                            <ul className="table_li">
                                <li className="home_icon "><i className="fa fa-map-marker-alt icon-pin"></i>Address</li>
                                <li className="contact_list"><i className="fa fa-map-pin icon-pin  mr-1"></i>House - 44, Road - 03, Sector - 11, Uttara, Dhaka</li>
                                <li className="contact_list"><i className="fa fa-map-pin icon-pin mr-1"></i>Dhanmondi, Dhaka</li>
                                <li className="contact_list"><i className="fa fa-map-pin icon-pin mr-1"></i>Mohammadpur, Dhaka</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="table_li">
                                <li className="home_icon "><i className="fa fa-phone icon-pin"></i>Call Us :</li>
                                <li className="contact_list">237237237</li>
                                <li className="contact_list">72372332</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="table_li">
                                <li className="home_icon "><i className="fa fa-envelope icon-pin"></i>Email Us :</li>
                                <li className="contact_list">contact@gmail.com</li>
                                <li className="contact_list">support@gmail.com</li>
                                <li className="contact_list">query@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <form>
                            <div class="form-row">

                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm">
                                            <div class="form-group col-md-6 mb-5 ">
                                                <input type="text" class="form-control contact_form" id="name" placeholder="Full Name" required />
                                            </div>
                                        </div>
                                        <div class="col-sm">
                                            <div class="form-group col-md-6 mb-5">
                                                <input type="Email" class="form-control  contact_form" id="inputEmail4" placeholder="Email Address" />
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div>
                            <div class="form-group mb-5">
                                <input type="text" class="form-control  contact_form" id="subject" placeholder="Subject" />
                            </div>
                            <div class="form-group mb-5">
                                <textarea class="form-control  contact_form" id="floatingTextarea2" value="" placeholder="Message" style={{ height: 120 }}></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>)
}
export default Contact;