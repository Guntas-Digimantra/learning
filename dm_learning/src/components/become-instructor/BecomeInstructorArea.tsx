import ContactInfo from "../common/ContactInfo";
import BecomeInstructorForm from "./BecomeInstructorForm";

const BecomeInstructorArea = () => {
    return (
        <section className="contact-area-section">
            <div className="dml-container">
                <div className="contact-us-container">
                    <ContactInfo />
                    <div className="contact-form-container">
                        <div className="contact-form-wrap">
                            <BecomeInstructorForm />
                            <p className="ajax-response mb-0"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeInstructorArea;
