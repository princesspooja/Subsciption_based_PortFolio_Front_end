import Head from "next/head";
import Image from "next/image";

const Types = () => {
    return (<>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Service</title>
        </Head>

        <div className="page_header">
            <h4 className="table_h4">Settings</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a> Package Management </a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href="">Settings</a></li>
            </ul>
        </div>
        <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card">
    <Image src="/footer/logo.png" width="124" height="42" alt="image" className="edit-image" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>

    </>)
}
export default Types;