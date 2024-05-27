import React from 'react'

export default function CabService() {
    return (
        <div>
            <hr className='m-0' />
            <div className="row px-md-5 px-2 align-items-center mx-0">
                <div className="col-12 col-md-6 col-lg-6 px-2">
                    <p className="mb-0 text-lightWeightBlack fw-600 fs-55">Convenient and Reliable Cab Management Service
                    </p>
                    <p className="mb-0 fw-400 fs-16">TripDay: Streamlining Cab Operations. A comprehensive solution for
                        driver management and agency
                        bookings, revolutionizing the cab industry.</p>

                    <div className="d-flex gap-3 mt-4">
                        <button className="text-white bg-black rounded border-0 fw-500 fs-16 p-2" data-bs-toggle="modal" data-bs-target="#scheduleModal">Request a Demo</button>
                        <button className="text-black border rounded fw-500 fs-16 p-2" data-bs-toggle="modal" data-bs-target="#contactUsModal">Contact Us</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 px-2 pt-md-5 pt-4">
                    <img src="/image/image.svg" className="w-100" alt='' />
                </div>
            </div>
        </div>
    )
}
