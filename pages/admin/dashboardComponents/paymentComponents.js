import React from 'react'

export default function PaymentComponents() {
  return (
    <>
      <div className="page_header">
        <h4 className="table_h4">Payment Gateways</h4>
        <ul className="table_ul">
          <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
          <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
          <li className="home_datas"><a>Payment</a></li>
          <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
          <li className="home_datas"><a href="">Gateways</a></li>
        </ul>
      </div>
  
      <div className='row'>
        <div className='col-lg-4'>
          <div className='table_card'>
            <div className="table_header">
              <div className="row">
                <div className="col-lg-12">
                  <div className="table_title d-inline-block">Paypal</div>
                </div>
              </div>
            </div>
            <div className='table_body'>
              <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <label htmlFor="exampleInputEmail1" className="form-label">Paypal**</label>
                  <div className="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Activated</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Diactivated</label>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-lg-12'>
                  <label htmlFor="exampleInputEmail2" className="form-label">Paypal Test Mode**</label>
                  <div className="btn-group col-sm-12" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btn" id="shri_btn" autoComplete="off" checked />
                    <label className="btn btn-outline-primary" htmlFor="shri_btn">Activated</label>

                    <input type="radio" className="btn-check" name="btnradio4" id="btnradio4" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Diactivated</label>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-lg-12'>
                  <label htmlFor="exampleInputEmail1" className="form-label">Paypal Client ID**</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
              </div>
              <div className='row mt-3 mb-3'>
                <div className='col-lg-12'>
                  <label htmlFor="exampleInputEmail1" className="form-label">Paypal Client Secret**</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
              </div>
              </div>
            </div>
            <div className='table_footer'>
              <button className='btn btn-primary'>update</button>
            </div>
          </div>
        </div>
        <div className='col-lg-4'></div>
        <div className='col-lg-4'></div>
      </div>
    
    </>
  )
}
