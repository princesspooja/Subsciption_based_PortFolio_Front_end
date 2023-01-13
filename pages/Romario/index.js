import Head from "next/head"
import Script from "next/script"
import Image from "next/image";
import Autotyper from "./components/autotyper";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { motion } from 'framer-motion';
import Portfolios from "./components/portfolios";
import Services_home from "./components/services_home";

const Index = () => {
    return (<>
    <Head>
    <title>Romorio - Home</title>
    </Head>


        <Navigation />

        <section className="main_typer">
            <div className="container" id="hero_container">
                <div className="row" id="hero_row">
                    <div className="col-lg-5 col-md-6">
                        <div className="first_hero">
                            <span className="hero_span">Hi I,m,</span>
                            <h1 className="hero_h1">Romario Sara</h1>
                            <div className="first_typer">
                                {/* <p id="type_p" className="d-inline-block"><span className="auto-type"></span></p> */}
                                <Autotyper />

                            </div>
                            <ul className="social_links">
                                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                <li><a href=""><i className="fa fa-github"></i></a></li>
                            </ul>
                            <a href="" id="hero_template">Hire me</a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-9" id="next-col-6">
                        <motion.div
                            animate={{ rotate: [0, 0, 0, 0], x: [0, 0, 0, 0], y: [5, 1, 1, 5] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <div className="second_hero_section text-right">
                                {/* <img src="desk.png" alt="deskphoto" id="image_second" /> */}
                                <Image src="/images/desk.png" id="image_second" width={665} height={629} alt="Desk Image" />
                            </div> </motion.div>

                    </div>
                </div>
            </div>
        </section>


        <div className="header_section">
            <div className="container" id="my-first">
                <div className="row first-row">

                    <div className="col-sm-6 first-row-first">
                        <motion.div
                            animate={{ rotate: [0, 0, 0, 0], x: [0, 0, 0, 0], y: [5, 1, 1, 5] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <div>

                                <Image src="/images/laptop.png" width={425} height={460} alt="Laptop" />

                            </div>
                        </motion.div>

                    </div>
                    <div className="col-sm-6 second-row">
                        <div className="about_div">
                            <div className="about_heading mb-30">
                                <span className="lineTag">My Resume</span>
                                <h2 className="div_title">About Me</h2>
                            </div>
                            <p className="mb-30 para">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Duis at est id leo luctus gravida
                                a in ipsum. Vivamus vel molestie nisi.
                                Aliquam maximus maximus velit, id scelerisque
                                urna elementum nec. Aenean laoreet bibendum
                                tellus sed tincidunt. Proin commodo blandit
                                gravida. Etiam sollicitudin aliquet vehicula.
                                Morbi ante libero, porttitor ut sodales non, gravida at lacus.
                            </p>
                            <a href="" id="hero_templates">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="header_section">
            <div className="container" id="my-first">
                <div className="row first-row">
                    <div className="col-sm-6 first-row-skills">
                        <div className="about_skil">
                            <div className="about_heading mb-30">
                                <span className="lineTag">My Resume</span>
                                <h2 className="div_title">Technical Skills</h2>
                            </div>
                            <p className="mb-30 para">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Duis at est id leo luctus gravida
                                a in ipsum. Vivamus vel molestie nisi.
                                Aliquam maximus maximus velit, id scelerisque
                                urna elementum nec. Aenean laoreet bibendum
                                tellus sed tincidunt. Proin commodo blandit
                                gravida. Etiam sollicitudin aliquet vehicula.
                                Morbi ante libero, porttitor ut sodales non, gravida at lacus.
                            </p>
                            <div className="progress_skills">
                                <div className="html_progress">
                                    <h6>HTML5</h6>
                                    <div className="html_bar_wrap">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="html_s"></div>
                                        </div>
                                        <div className="progress_data">
                                            <span>80</span>
                                            <span>%</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="html_progress">
                                    <h6>CSS3</h6>
                                    <div className="html_bar_wrap">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="html_css"></div>
                                        </div>
                                        <div className="progress_data">
                                            <span>70</span>
                                            <span>%</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="html_progress">
                                    <h6>Laravel</h6>
                                    <div className="html_bar_wrap">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="html_laravel"></div>
                                        </div>
                                        <div className="progress_data">
                                            <span>90</span>
                                            <span>%</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 second-row">
                        <motion.div
                            animate={{ rotate: [0, 0, 0, 0], x: [0, 0, 0, 0], y: [5, 1, 1, 5] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <div>
                                <Image src="/images/skills.png" width={470} height={551} alt="Laptop" id="skills_image" />


                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </div>
        <Services_home />

        <section className="job_experience" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9" >
                        <div className="common-heading text-center mb-50">
                            <span className="lineTag">Experience</span>
                            <h2 className="div_title">Job and Educational Experiences</h2>
                        </div>
                    </div>
                </div>
                <div className="experience_data boxed-wrapper" >
                    <div className="row justify-content-between">
                        <div className="col-lg-6 md-gap-80">
                            <h4 className="experience_h1">
                                <span><Image src="/images/education.png" width={32} height={33} alt="education" /></span>
                                Education
                            </h4>
                            <div className="list_experince">
                                <div className="single_experience">
                                    <h5 className="div_title">Higher Seconday School Certification</h5>
                                    <span className="experience_duration">
                                        Jan 18, 2013 - Nov 28, 2017
                                    </span>
                                    <p>There are many variations of passages
                                        of Lorem Ipsum available, but the
                                        majority have suffered alteration
                                        in some form, by injected humour,
                                        or randomised</p>
                                </div>
                                <div className="single_experience">
                                    <h5 className="div_title">Seconday School Certificate</h5>
                                    <span className="experience_duration">
                                        Jan 26,2001 - Dec 28,2010
                                    </span>
                                    <p>There are many variations of passages
                                        of Lorem Ipsum available, but the
                                        majority have suffered alteration
                                        in some form, by injected humour,
                                        or randomised</p>
                                </div>
                                <div className="single_experience">
                                    <h5 className="div_title">Bachelor of Experience</h5>
                                    <span className="experience_duration">
                                        Jan 18, 2013 - Nov 28, 2017
                                    </span>
                                    <p>There are many variations of passages
                                        of Lorem Ipsum available, but the
                                        majority have suffered alteration
                                        in some form, by injected humour,
                                        or randomised</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="experience_h1">
                                <span><Image src="/images/job.png" width={32} height={33} alt="education" /></span>
                                Job
                            </h4>
                            <div className="list_experince">
                                <div className="single_experience">
                                    <h5 className="div_title">Laravel Developer [ABC Company]</h5>
                                    <span className="experience_duration">
                                        Jul 1, 2021 - Present
                                    </span>
                                    <p>Contrary to popular belief,
                                        Lorem Ipsum is not simply
                                        random text. It has roots in
                                        a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.</p>
                                </div>
                                <div className="single_experience">
                                    <h5 className="div_title">Full-stack Developer [XYZsoft LTD]</h5>
                                    <span className="experience_duration">
                                        Jan 18, 2013 - Nov 28, 2017
                                    </span>
                                    <p>There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words</p>
                                </div>
                                <div className="single_experience">
                                    <h5 className="div_title">Fronend Designer [MNO Tech] </h5>
                                    <span className="experience_duration">
                                        Feb 26 ,2020 - Mar 9, 2020
                                    </span>
                                    <p>It is a long established fact that
                                        a reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section  className="portFolio_sec">
            <div className="contaner">
                <div className="common-heading text-center mb-50">
                    <span className="lineTag">Porfolios</span>
                    <h2 className="div_title">Awesome Projects</h2>
                </div>
                <Portfolios />
            </div>
        </section>






        <Footer />












        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" />

    </>)
}

export default Index;