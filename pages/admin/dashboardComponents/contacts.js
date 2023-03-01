import Head from "next/head"
import Image from "next/image"
const Contact = () => {
    return (<>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Dashboard-edit profile</title>
        </Head>
        <div className="page_header">
            <h4 className="table_h4">Contact Page</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a>  Contact Page</a></li>


            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="edit-card">
                    <div className="edit-card-header ">
                        <div className="edit-card-title">Contact Page</div>
                        <div className="row">
                            <div className="col-sm-6">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select language</option>
                                    <option value="1">English</option>
                                    <option value="2">Hindi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="edit-card-body">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <form action="">
                                    <div className="row ">
                                        <div className="form-group">
                                            <label>Form Title **</label>
                                            <input type="text" name="first_name" className="form-control" value="Leave Reply" />
                                        </div>
                                        <div className="form-group">
                                            <label >Information Title **</label>
                                            <input type="text" name="last_name" className="form-control" value="CONTACT INFO" />
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <label for="exampleInputEmail1" className="form-label">Address **</label>
                                                <textarea class="form-control" id="floatingTextarea2" value="House - 44, Road - 03, Sector - 11, Uttara, Dhaka Dhanmondi, Dhaka Mohammadpur, Dhaka" style={{ height: 120 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                <p className="image-logo">Use newline to seperate multiple addresses.</p>
                            </div>
                                        <div className="form-group">
                                            <label >Contact Information Text **</label>
                                            <input type="text" name="last_name" className="form-control" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum." />
                                        </div>
                                        <div className="form-group">
                                            <label >Phone **</label>
                                            <input type="text" name="last_name" className="form-control" value="" />
                                        </div>
                                        <div className="mb-3">
                                <p className="image-logo">Use comma (,) to add multiple Phone Numbers</p>
                            </div>
                                        <div className="form-group">
                                            <label >Email **</label>
                                            <input type="text" name="last_name" className="form-control" value="" />
                                        </div>
                                        <div className="mb-3">
                                <p className="image-logo">Use comma (,) to add multiple Email Addresses</p>
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
export default Contact;