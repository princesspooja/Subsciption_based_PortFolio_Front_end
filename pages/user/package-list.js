
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./dashboardComponent/footered";
import PriceCards from "./dashboardComponent/priceCards";
import Navbar from "./dashboardComponent/navbar";
import Slider from "./dashboardComponent/slider";

const Packagelist = () => {
  const router = useRouter();
    return (<>
    <Head>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard</title>
    </Head>
    
    <div className="wrapper">
      <Navbar />



    {/* <!-- slider --> */}

   <Slider />
    <div className="main_panel">
      <div className="main_contents">
        <div className="pageinner_data">
            <PriceCards />
        </div>

      </div>
      <Footer />

    </div>
  </div>





<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    </>)
}

export default Packagelist