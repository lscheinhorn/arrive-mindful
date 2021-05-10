import React from 'react'
import swal from 'sweetalert'
import Banner from './Banner'


async function mail(event) {
  event.preventDefault();

  const data = {
    name: event.target.name.value,
    email: event.target.email.value.toLowerCase(),
    subject: event.target.subject.value,
    message: event.target.message.value
  }

  console.log(data.name, data.email, data.subject, data.message);

  try {
    const response = await fetch('/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(await response.json());
    event.target.reset();
    swal({
      title: `Thank you for your message, ${data.name.split(' ').shift()}!`,
      text: 'We will get back to you shortly!',
      icon: 'success',
      button: 'Great!',
    });
  } catch(err){
    console.error(err)
  }

}


function Contact() {
  const copyToClipboard = (e) => {
    var textField = document.createElement('textarea');
    textField.innerText = 'veronica@arrivemindful.com';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1528319355578-ebbbc586afac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        }
        header={'Contact Veronica'}
        detail={<div>Inquiries &#8226; Requests &#8226; Comments </div>}
        textColor={'white'}
      />
      <section className="ftco-section contact-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row block-9">
            <div className="col-md-4 contact-info ftco-animate p-4 w-100 py-md-5">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h2>Contact Information</h2>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Veronica Rose Stocker</span>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Email:</span>{' '}
                    <a href="mailto:veronica@arrivemindful.com">
                      veronica@arrivemindful.com
                    </a>
                    <span
                      className="icon icon-copy"
                      onClick={copyToClipboard}
                      style={{ cursor: 'pointer', paddingLeft: '5px' }}
                      data-toggle="tooltip"
                      title="Copy email address"
                    ></span>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    Scheduling requests can be made on this page. Please include the date and time you'd like to book as well as the class type and any special requests. Classes are held remotely via Zoom. The Zoom class link will be shared via email once details are confirmed so please check that your email address is correct.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1 py-4 py-md-5"></div>
            <div className="col-md-6 ftco-animate py-md-5">
              <form className="contact-form" onSubmit={mail}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <div id="map" className="map"></div> */}
    </>
  );
}

export default Contact
