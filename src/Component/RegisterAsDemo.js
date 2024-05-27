import React from 'react'
import Modal from 'react-bootstrap/Modal';
export default function RegisterAsDemo({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div class="" id="contactUs">
                    <p class="text-black fw-600 fs-24 text-center mb-0">Schedule a free demo</p>
                    <p class="fw-400 fs-16 text-lightBlack text-center">Fill the details and
                        select the date and time which you prefer</p>
                    {/* <!-- <label class="text-sm" for="">Agency Name</label> --> */}
                    <div class="border p-2 my-2 rounded bg-searchBoxLightBlue" onclick="removeBorder('.errorAgency')">
                        <input type="text" id="agencyName" placeholder="Name" class="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>
                    {/* <!-- <label class="text-sm" for="">Email Address</label> --> */}
                    <div class="gap-2 items-center border p-2 my-2 errorEmailAddress bg-searchBoxLightBlue rounded" onclick="removeBorder('.errorEmailAddress')">
                        <input type="text" id="emailAddress" placeholder="Email" class="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>
                    {/* <!-- <label class="text-sm" for="">Contact No</label> --> */}
                    <div class="gap-2 items-center border p-2 my-2 errorEmailAddress bg-searchBoxLightBlue rounded" onclick="removeBorder('.errorEmailAddress')">
                        <input type="text" id="emailAddress" placeholder="Contact No" class="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>
                    {/* <!-- <label class="text-sm" for="">Select Date</label> --> */}
                    <div class="gap-2 items-center border p-2 my-2 errorEmailAddress bg-searchBoxLightBlue rounded d-flex" onclick="removeBorder('.errorEmailAddress')">
                        <img src="/image/dateIcon.svg" alt='' />
                        <input type="date" id="emailAddress" placeholder="Select Date" class="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>

                    {/* <!-- <label class="text-sm" for="">Select Time</label> --> */}
                    <div class="gap-2 items-center border p-2 my-2 errorEmailAddress bg-searchBoxLightBlue rounded d-flex" onclick="removeBorder('.errorEmailAddress')">
                        <img src="/image/watchIcon.svg" alt='' />
                        <input type="time" id="emailAddress" placeholder="Select Time" class="border-0 w-100 outlineNone bg-searchBoxLightBlue" />
                    </div>
                    <p class="text-lightBlack fw-400 fs-14">Our Technical Team will send you a Demo Meeting Link</p>


                    <button type="button" class="p-2 w-100 my-2 border-0 text-white bg-black rounded" onclick="contact()">Schedule Demo</button>
                </div>
            </Modal.Body >
        </Modal >
    )
}
