import Image from "next/image";
import Link from "next/link";

const AdminNavbar = ()=>{
    return(<>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_positon">
        <div className="container-fluid">
          <a data-bs-toggle="collapse" href="#offcanvasExample" role="button" aria-expanded="false" aria-controls="collapseExample" id="nav_ancor"><i className="fa fa-bars"></i></a>
          <a className="navbar-brand" href="#"><Image src="/images/logo.png" width={40} height={40} alt="logo" id="logo_id" /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mt-2">
                <Link href="/Romario" legacyBehavior><a className="mr-5" id="nav-eyes"><i className="fa fa-eye"></i></a></Link>
              </li>
              
              <li className="nav-item"><div className="form-check form-switch" id="form_datass">
                <input className="form-check-input check_data" type="checkbox" role="switch" id="flexSwitchCheckChecked" style={{width:61}} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
              </div>
              </li>
              <li className="nav-item"><div className="avatar_photo float-left mr-2">
                {/* <img src="aadmi.jpg" alt="photo" /> */}
                <Image src="/adminDashboard/admin.png" width={40} height={40} alt="userpic" />
              </div>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li> */}
            </ul>

          </div>
        </div>
      </nav>
    </>)
}

export default AdminNavbar;