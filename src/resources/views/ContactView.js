import { FormControl, Button } from "react-bootstrap";

const ContactView = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <p className="text-center font-sz-large font-wg-700">Get In Touch</p>
        <div className="d-flex justify-content-center mt-2"><p className="title-line"></p></div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 mb-4">
                <FormControl placeholder="Name" />
              </div>

              <div className="col-md-6 mb-4">
                <FormControl placeholder="Email" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <FormControl as="textarea" placeholder="Message" />
                <Button variant="default" className="bg-primary fonz-sz-normal text-white px-5 mt-4">Send Message</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-10 mt-5">
            <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5069763006463!2d30.113430814854432!3d-1.9503579985780979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca702e73a92d5%3A0x7362b69b2f757063!2sIgitego%20Hotel!5e0!3m2!1sen!2srw!4v1642063720318!5m2!1sen!2srw" width="100%" height="500" allowfullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactView;
