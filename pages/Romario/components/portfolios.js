import Image from "next/image";

const Portfolios = () =>{
    return(<>

    <div className="container">
            <div className="row" id="card_row">
                <div className="col-sm">
                    <div className="box">
                        <div className="box-img">
                            <Image src="/images/laptop.png" width={363} height={393} alt="laptop" />
                        </div>
                        <div className="box-content">
                            <h3>QR Menu Maker</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime ab sed libero eum porro neque odit. Fugiat esse eligendi suscipit labore
                                impedit quidem laboriosam doloribus, corrupti, dolorem nemo non?</p>
                            <a href="" id="hero_portfolio">Explore More <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="box">
                        <div className="box-img">
                            {/* <img src="laptop.jpg" alt="laptop" /> */}
                            <Image src="/images/portfolio/desk1.jpg" width={363} height={393} alt="laptop" />
                        </div>
                        <div className="box-content">
                            <h3>Investment App UI</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime ab sed libero eum porro neque odit. Fugiat esse eligendi suscipit labore
                                impedit quidem laboriosam doloribus, corrupti, dolorem nemo non?</p>
                            <a href="" id="hero_portfolio">Explore More <i className="fa fa-arrow-right"></i></a>

                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="box">
                        <div className="box-img">
                            <Image src="/images/portfolio/desk2.jpg" width={363} height={393} alt="laptop" />
                        </div>
                        <div className="box-content">
                            <h3>Taxi App</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime ab sed libero eum porro neque odit. Fugiat esse eligendi suscipit labore
                                impedit quidem laboriosam doloribus, corrupti, dolorem nemo non?</p>
                            <a href="" id="hero_portfolio">Explore More <i className="fa fa-arrow-right"></i></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="card_row">
                <div className="col-sm">
                    <div className="box">
                        <div className="box-img">
                            <Image src="/images/portfolio/desk3.jpg" width={363} height={393} alt="laptop" />
                        </div>
                        <div className="box-content">
                            <h3>Medical App</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime ab sed libero eum porro neque odit. Fugiat esse eligendi suscipit labore
                                impedit quidem laboriosam doloribus, corrupti, dolorem nemo non?</p>
                            <a href="" id="hero_portfolio">Explore More <i className="fa fa-arrow-right"></i></a>

                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="box">
                        <div className="box-img">
                            <Image src="/images/portfolio/desk4.jpg" width={363} height={393} alt="laptop" />
                        </div>
                        <div className="box-content">
                            <h3>Logo Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime ab sed libero eum porro neque odit. Fugiat esse eligendi suscipit labore
                                impedit quidem laboriosam doloribus, corrupti, dolorem nemo non?</p>
                            <a href="" id="hero_portfolio">Explore More <i className="fa fa-arrow-right"></i></a>

                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="box">
                        <div className="box-img">
                            <Image src="/images/portfolio/desk5.jpg" width={363} height={393} alt="laptop" />
                        </div>
                        <div className="box-content">
                            <h3>E-commerce Website</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime ab sed libero eum porro neque odit. Fugiat esse eligendi suscipit labore
                                impedit quidem laboriosam doloribus, corrupti, dolorem nemo non?</p>
                            <a href="" id="hero_portfolio">Explore More <i className="fa fa-arrow-right"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>)
}

export default Portfolios;