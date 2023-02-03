import Head from "next/head"
import Image from "next/image"
const homesection = () => {
    return (<>
    <Head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>

        <title>Profilex - User Dashboard</title>
    </Head>

        <div className="home-page-header">
            <h4 className="home-page-title">Home Sections</h4>
            <ul className="breadcrumbs">
                <li className="nav-home">
                    <a>
                      <i className="fa fa-home"></i>
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                      <i className="fa fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                      Home Section
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="home-card">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="home-card-header ">
                                <div className="home-card-title">Update Profile</div>
                              </div>
                        </div>
                        <div className="col-lg-3 offset-lg-3 line">
                            <select className="form-select"  id="select-text"aria-label="Default select example">
                                <option value="selected disabled">Select a Language</option>
                                <option value="en" selected>English</option>
                                <option value="ar">عربى</option>
                            </select>
                        </div>
                        <div className="home-card-body">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Hero section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">Hero Section Image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <Image src="/dashboard/homesection/homeimage.png" alt="image" width="300" height="250" className="home-image"/>
                                                      <button className="btn btn-danger btn-sm image-cross-btn" data-type="hero">
                                                        <i className="fas fa-times"></i>
                                                      </button>
                                                    </div>
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >First Name</label>
                                                    <input type="text" className="form-control" value="Romario"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Last Name</label>
                                                    <input type="text" className="form-control" value="Sara"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Remain to write code from --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Designation **</label>
                                                    <div className="bootstrap-tagsinput">
                                                        <span className="tag label label-info">
                                                            Web Designer
                                                        </span>
                                                        <span data-role="remove"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- to --> */}
                                        {/* <!-- about section of home  --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">About Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">About Section image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <img src="/dashboard/homesection/QRMenu.jpg" alt="image" width="300" height="250" className="home-image"/>
                                                    </div>
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control"/>
                                            </div>
                                        </div> 
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >About Section Title</label>
                                                    <input type="text" className="form-control" value="My Resum"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >About Section Subtitle</label>
                                                    <input type="text" className="form-control" value="About Me"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>About Section Content</label>
                                            <textarea name="about_section" className="form-control" rows="5" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum. Vivamus vel molestie nisi. Aliquam maximus maximus velit, id scelerisque urna elementum nec. Aenean laoreet bibendum tellus sed tincidunt. Proin commodo blandit gravida. Etiam sollicitudin aliquet vehicula. Morbi ante libero, porttitor ut sodales non, gravida at lacus.
                                            </textarea>
                                        </div>
                                        {/* <!-- end of about section --> */}
                                        {/* <!-- start of about section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Skill Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">Skill Section image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <img src="/dashboard/homesection/skill.png" alt="image" width="300" height="250" className="home-image"/>
                                                    </div>
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control"/>
                                            </div>
                                        </div> 
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Skill Section Title</label>
                                                    <input type="text" className="form-control" value="Skill"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Skill Section Subtitle</label>
                                                    <input type="text" className="form-control" value="Technical Skills"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Skill Section Content</label>
                                            <textarea name="about_section" className="form-control" rows="5" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum. Vivamus vel molestie nisi. Aliquam maximus maximus velit, id scelerisque urna elementum nec. Aenean laoreet bibendum tellus sed tincidunt. Proin commodo blandit gravida. Etiam sollicitudin aliquet vehicula. Morbi ante libero, porttitor ut sodales non, gravida at lacus.
                                            </textarea>
                                        </div>
                                        {/* <!-- end of skill section --> */}
                                        {/* <!-- start of Service Section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Service  Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Service Section Title</label>
                                                    <input type="text" className="form-control" value="Service"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Service  Section Subtitle</label>
                                                    <input type="text" className="form-control" value="Services I Provide"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end of service section --> */}
                                        {/* <!-- start of Experience section--> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Experience Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Experience  Section Title</label>
                                                    <input type="text" className="form-control" value="Experience"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Experience Section Subtitle</label>
                                                    <input type="text" className="form-control" value="Job and Educational Experiences"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end of Experience section -->
                                        <!-- start Achievement setion --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Achievements section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">Achievements Section Image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <img src="/dashboard/homesection/color.jpg" alt="image" width="300" height="250" className="home-image"/>
                                                    </div>
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Achievement Section Title</label>
                                                    <input type="text" className="form-control" value="Achievement"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Achievement Section Subtitle</label>
                                                    <input type="text" className="form-control" value="My Achievement"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end of Achievement setion -->
                                        <!-- start Portfolios section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Portfolio Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Portfolio  Section Title</label>
                                                    <input type="text" className="form-control" value="Portfolio"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Portfolio Section Subtitle</label>
                                                    <input type="text" className="form-control" value="Awesome Projects"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Portfolio section -->
                                        <!-- start Testimonial section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Testimonial  Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Testimonial Section Title</label>
                                                    <input type="text" className="form-control" value="Testimonial"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Testimonial Section Subtitle</label>
                                                    <input type="text" className="form-control" value="Clients Sayings"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Testimonial section -->
                                        <!-- start Blog  section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Blog Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Blog Section Title</label>
                                                    <input type="text" className="form-control" value="Blog "/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Blog Section Subtitle</label>
                                                    <input type="text" className="form-control" value="Latest Blogs"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Blog section -->
                                         <!-- start Contact   section --> */}
                                         <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Contact Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Contact Section Title</label>
                                                    <input type="text" className="form-control" value="Contact "/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Contact Section Subtitle</label>
                                                    <input type="text" className="form-control" value="Get in Touch"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Blog section --> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="home-card-footer mt-3">
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
    </>)
}
export default homesection