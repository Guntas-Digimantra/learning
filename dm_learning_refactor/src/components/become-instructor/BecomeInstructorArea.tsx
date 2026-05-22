import ContactInfo from "../common/ContactInfo";
import BecomeInstructorForm from "./BecomeInstructorForm";

const BecomeInstructorArea = () => {
    return (
        <section className="bg-white py-[100px] max-[1024px]:pb-[60px] max-[1024px]:pt-0">
            <div className="mx-auto max-w-[1440px] px-[15px]">
                <div className="flex gap-[30px] max-[1024px]:flex-col-reverse">
                    <ContactInfo />
                    <div className="w-[70%] max-[1400px]:min-[1025px]:w-[62%] max-[1024px]:mx-auto max-[1024px]:w-full max-[1024px]:max-w-[700px]">
                        <div className="h-full rounded-xl border border-[#e1e1e1] bg-[#f7f7fa] px-10 pb-[42px] pt-[30px] max-[1024px]:px-5 max-[1024px]:pb-[30px] max-[1024px]:pt-[25px]">
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
