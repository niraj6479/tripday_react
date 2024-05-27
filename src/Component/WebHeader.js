// import React from 'react'
// import React from "react";
import { useState } from 'react';
import ContactUsModal from './ContactUsModal';
import RegisterAsDemo from './RegisterAsDemo';

export default function WebHeader() {
    const [showContact, setShowContact] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleClose = () => {
        setShowContact(false);
        setShowRegister(false);
    }
    const handleShow = () => setShowContact(true);
    const handleShowReg = () => setShowRegister(true);
    return (
        <div>
            <nav id="navabarTab" className="navbar navbar-expand-lg px-md-5 px-2 p-2">
                <div className="container-fluid px-0" style={{ "borderBottom": "0.5px solid rgba(255, 255, 255, 0.9)" }}>
                    <a className="navbar-brand d-md-inline d-none d-flex align-items-center" href="index.html">
                        <div className="d-flex align-items-center">
                            <img src="./image/tripDayImg.svg" className="w-50" alt="" />
                        </div>
                    </a>
                    <a className="navbar-brand d-md-none d-inline w-50" href="index.html">
                        <img src="./image/tripDayImg.svg" className="" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 align-items-md-center align-items-start  px-3 px-md-0 mb-lg-0">


                            <li className="nav-item me-lg-4 me-1 d-flex justify-content-between align-items-center p-2 rounded border px-4 mb-md-0 mb-3" role="button" onClick={handleShow}>
                                <span className="text-black fs-16 fw-500 text-lightBlack">Contact Us</span>
                                <img className="d-block d-md-none" src="img/white-arrow-right.svg" alt="" />
                            </li>

                            <li className="nav-item me-lg-4 me-1 d-flex justify-content-between align-items-center bg-black text-white p-2 rounded px-4" role="button" onClick={handleShowReg}>
                                <span className="text-black fs-16 fw-500 text-white">Register a Demo</span>
                                <img className="d-block d-md-none" src="img/white-arrow-right.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ContactUsModal show={showContact} handleClose={handleClose} />
            <RegisterAsDemo show={showRegister} handleClose={handleClose} />
        </div>
    )
}
