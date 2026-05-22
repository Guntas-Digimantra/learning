import BecomeInstructorArea from "./BecomeInstructorArea"
import "../../../public/css/contact-us.css"
import "../../../public/css/home-page.css"
import BreadcrumbOne from "../common/BreadcrumbOne"

const BecomeInstructor = () => {
    return (
        <>
            <BreadcrumbOne title="Become an Instructor" sub_title="Instructor" />
            <BecomeInstructorArea />
        </>
    )
}

export default BecomeInstructor
