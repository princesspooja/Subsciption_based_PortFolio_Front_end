import Image from "next/image";
import Head from "next/head";
const navbar = () => {
    return (
        <>
            <Head>
                <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                />
                <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                />
                <title>Profilex - Admin User</title>
             </Head>
            <div className="nav md-6">
                <div className="nav-image">
                <Image
                      src="/useradmin/profileimage/navimage.png"
                      width="111"
                      height="33"
                      alt="image"
                      className="logo-image"
                    />
                </div>
                <div className="nav-list m-d-6">
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Pricing</li>
                        <li>page</li>
                        <li>blog</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="nav-btn md-6">
                    <button>
                        <i className="fa fa-sign-in-alt"></i>
                        Login
                    </button>
                </div>
                <div className="nav-lang md-6">
                    <select name="" id="">
                        <option value=""> Englis</option>
                        <option value=""> عربى</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default navbar
