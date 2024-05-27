import React from 'react'
import Modal from 'react-bootstrap/Modal';
export default function ContactUsModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="" id="contactUs">
                    <p className="text-black fw-600 fs-24 text-center mb-0">Contact Us</p>
                    <p className="fw-400 fs-16 text-lightBlack text-center">Fill out form to have a
                        talk with us</p>
                    {/* <!-- <label className="text-sm" for="">Agency Name</label> --> */}
                    <div className="border p-2 my-2 rounded bg-searchBoxLightBlue" onclick="removeBorder('.errorAgency')">
                        <input type="text" id="agencyName" placeholder="Name" className="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>
                    {/* <!-- <label className="text-sm" for="">Email Address</label> --> */}
                    <div className="gap-2 items-center border p-2 my-2 errorEmailAddress bg-searchBoxLightBlue rounded" onclick="removeBorder('.errorEmailAddress')">
                        <input type="text" id="emailAddress" placeholder="Email" className="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>
                    {/* <!-- <label className="text-sm" for="">Contact No</label> --> */}
                    <div className="gap-2 items-center border p-2 my-2 errorEmailAddress bg-searchBoxLightBlue rounded" onclick="removeBorder('.errorEmailAddress')">
                        <input type="text" id="emailAddress" placeholder="Contact No" className="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>
                    {/* <!-- <label className="text-sm" for="">Message</label> --> */}
                    <div className="gap-2 items-center border rounded p-2 my-2 bg-searchBoxLightBlue errorEmailAddress" onclick="removeBorder('.errorEmailAddress')">
                        <textarea type="text" id="emailAddress" rows="3" placeholder="Message" className="border-0 w-100 outlineNone bg-searchBoxLightBlue"></textarea>
                    </div>

                    <button type="button" className="p-2 w-100 my-2 border-0 text-white bg-black rounded" onclick="contact()">Contact Us</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}
