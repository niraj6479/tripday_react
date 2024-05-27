import React from 'react'

export default function OneAppDriver() {
  return (
    <div>
      <div className="row px-md-5 px-2 mx-0 align-items-center">
            <div className="col-12 col-lg-6 col-md-6">
                <p className="mb-0 fw-600 fs-40 text-black">One App <br /> for Driver </p>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
                <p className="mb-0 fw-400 fs-16">The driver app in a cab management system is designed to provide a
                    user-friendly experience for drivers.</p>
            </div>
        </div>

        <div className="row px-md-5 px-2 mx-0 mt-4">
            <div className="col-md-8 col-lg-8 col-12">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-4 mb-5">
                        <div className="p-4 border br-20 h-100 overflow-auto">
                            <img src="/image/badge1.svg" alt='' />
                            <p className="fw-500 fs-20 text-black mt-2">Route optimization</p>
                            <p className="mt-2 fw-500 fs-16 text-black">Drivers should be able to view the best route to
                                reach the destination, taking into
                                account the traffic conditions, road closures, and tolls.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-5">
                        <div className="p-4 border br-20 h-100 overflow-auto">
                            <img src="/image/badge2.svg" alt='' />
                            <p className="fw-500 fs-20 text-black mt-2">Cancellation window</p>
                            <p className="mt-2 fw-500 fs-16 text-black">Drivers should be able to cancel a ride request
                                within a specified time limit without any penalty, in case of any emergency or
                                inconvenience.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-5">
                        <div className="p-4 border br-20 h-100 overflow-auto">
                            <img src="/image/badge3.svg" alt='' />
                            <p className="fw-500 fs-20 text-black mt-2">Passenger Location</p>
                            <p className="mt-2 fw-500 fs-16 text-black">Drivers should be able to know the passenger’s
                                precise location on the map when a call comes, which makes the app more accessible.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-5">
                        <div className="p-4 border br-20 h-100 overflow-auto">
                            <img src="/image/badge4.svg" alt='' />
                            <p className="fw-500 fs-20 text-black mt-2">Possibility to contact passengers</p>
                            <p className="mt-2 fw-500 fs-16 text-black">Drivers should be able to call or message the
                                passengers to confirm the pickup location, inform them of any delays, or resolve any
                                issues</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-5">
                        <div className="p-4 border br-20 h-100 overflow-auto">
                            <img src="/image/badge5.svg" alt='' />
                            <p className="fw-500 fs-20 text-black mt-2">Automated drivers billing</p>
                            <p className="mt-2 fw-500 fs-16 text-black">Drivers should be able to track their earnings, view
                                their trip history, and receive payments automatically through the app.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-5">
                        <div className="p-4 border br-20 h-100 overflow-auto">
                            <img src="/image/badge1.svg" alt='' />
                            <p className="fw-500 fs-20 text-black mt-2">Profile and Trip History</p>
                            <p className="mt-2 fw-500 fs-16 text-black">Drivers should be able to track their earnings, view
                                their trip history, and receive payments automatically through the app.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-md-4 col-lg-4 col-12 d-flex justify-content-center justify-content-md-end justify-content-lg-end">
                <img src="/image/fullDetailImg.svg" alt='' />
            </div>
        </div>

        <div className="row px-md-5 px-2 mx-0 mt-5">
            <div className="col-12 col-md-6 col-lg-6">
                <p className="mb-0 fw-600 fs-40 text-black">Admin Panel</p>
                <p className="mb-0 fw-600 fs-16 text-lightBlack">The admin panel in a cab management system is a centralized
                    dashboard that manages the activities of both the passenger and the driver.</p>
                <img src="/image/desktopImg.svg" className="mt-4 w-100" alt='' />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 mt-5">
                            <div className="p-4 border br-20 h-100 overflow-auto">
                                <img src="/image/badge1.svg" alt='' />
                                <p className="fw-500 fs-20 text-black mt-2">Adding Trips</p>
                                <p className="mt-2 fw-500 fs-16 text-black">Admins can manually add trips, specifying
                                    details like pickup and drop-off locations, time, and assigned driver.</p>
                            </div>
                        </div>
                        <div className="col-6 mt-5">
                            <div className="p-4 border br-20 h-100 overflow-auto">
                                <img src="/image/badge2.svg" alt='' />
                                <p className="fw-500 fs-20 text-black mt-2">Cancellation window</p>
                                <p className="mt-2 fw-500 fs-16 text-black">Admins have the authority to cancel trips due to
                                    various reasons, such as driver unavailability or safety concerns.</p>
                            </div>
                        </div>
                        <div className="col-6 mt-5">
                            <div className="p-4 border br-20 h-100 overflow-auto">
                                <img src="/image/badge3.svg" alt='' />
                                <p className="fw-500 fs-20 text-black mt-2">Passenger Location</p>
                                <p className="mt-2 fw-500 fs-16 text-black">The admin panel provides real-time tracking of
                                    all active trips, allowing admins to monitor the fleet’s movements and ensure timely
                                    service.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 mt-5">
                            <div className="p-4 border br-20 h-100 overflow-auto">
                                <img src="/image/badge4.svg" alt='' />
                                <p className="fw-500 fs-20 text-black mt-2">Possibility to contact passengers</p>
                                <p className="mt-2 fw-500 fs-16 text-black">The admin panel maintains a comprehensive
                                    history of all trips, including completed, cancelled, and ongoing trips.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
