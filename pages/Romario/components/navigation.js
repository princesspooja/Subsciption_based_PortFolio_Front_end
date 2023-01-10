import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Navigation = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <title>Romorio - Home</title>
        </Head>
        <nav className="navbar navbar-expand-lg " id="home_nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="home_logo"><Image src="/images/logo.png" width={70} height={70} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " id="home_ul">
                        <li className="nav-item ">
                            <Link href="/Romario" legacyBehavior><a className="nav-link active " aria-current="page" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Romario/services" legacyBehavior><a className="nav-link" >Services</a></Link>
                        </li>
                        <li className="nav-item">

                            <Link href="/Romario/portfolio" legacyBehavior>
                                <a className="nav-link">Portfolios</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Romario/blog" legacyBehavior><a className="nav-link ">Blogs</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Romario/contact" legacyBehavior><a className="nav-link ">Contacts</a></Link>
                        </li>
                    </ul>
                    {/* <li className="nav-item dropdown d-flex" id="home_form">
                        <a className="nav-link dropdown-toggle" id="language_a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                </div>
            </div>
        </nav>
    </>)
}

export default Navigation;