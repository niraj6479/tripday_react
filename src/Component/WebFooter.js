import React from 'react'
import { Link } from 'react-router-dom'
export default function WebFooter() {
  return (
    <div>
      <div className="row justify-content-between px-md-5 px-2 py-4 py-md-4 mx-0 align-items-center">
        <div className="col-md-4 col-lg-4 col-12 d-flex align-items-center">
          <div className="">
            <img src="./image/tripDayImg.svg" className="w-50" alt='' />
          </div>
        </div>

        <div className="col-md-4 col-lg-4 col-12 d-flex justify-content-start justify-content-md-end justify-content-lg-end mt-md-0 mt-3">
          <button className="text-white bg-black rounded border-0 fw-500 fs-16 px-4 p-2">Request a
            Demo</button>
        </div>
      </div>

      <hr className='m-0' />

      <div className="row justify-content-between px-md-5 px-2 mx-0 py-md-4 py-4">
            <div className="col-md-4 col-lg-4 col-12 d-flex align-items-center">
                <p className="mb-0 fw-400 fs-14 text-black">Copyright Tripday .© 2024.</p>
            </div>
            <div className="col-md-4 col-lg-4 col-12 d-flex align-items-center gap-4 mt-md-0 mt-3">
                <Link to="PrivacyPolicy" className="text-decoration-none">
                    <p className="mb-0 fw-500 fs-16 text-lightBlack">Privacy Policy</p>
                </Link>

                {/* <p className="mb-0 fw-500 fs-16 text-lightBlack">
                  <NavLink to="PrivacyPolicy" className="text-decoration-none mb-0 fw-500 fs-16 text-lightBlack">Privacy Policy</NavLink>
                  </p> */}
                <p className="mb-0 fw-500 fs-16 text-lightBlack">Terms and Conditions</p>
                <p className="mb-0 fw-500 fs-16 text-lightBlack">Fulfilment Policy</p>
            </div>
            <div className="col-md-4 col-lg-4 col-12 d-flex justify-content-start justify-content-md-end justify-content-lg-end gap-3 mt-md-0 mt-3">
                <img src="./image/facebook.svg" alt='' />
                <img src="./image/twitter.svg" alt='' />
                <img src="./image/linkedin.svg" alt='' />
                <img src="./image/instagram.svg" alt='' />
            </div>
        </div>

    </div>
  )
}
