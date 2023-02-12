import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
import Quill from '../../../user/dashboardComponent/quil'

const Formfile = () => {
    return (
        <>
        <Head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            />
        </Head>
        <form>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Send Mail</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             
              
              <div className="row">
                <div className="col-sm-12 mt-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email Address **</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="col-sm-12 mt-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Subject **</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-3 mb-5">
                <label htmlFor="exampleInputEmail1" className="form-label"> Message**</label>

                  <Quill />
                </div>
              </div>
              
            </div>
            <div className="modal-footer mt-2">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
            
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    )
}

export default Formfile
