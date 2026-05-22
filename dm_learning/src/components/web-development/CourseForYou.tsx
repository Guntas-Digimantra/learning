import Image from "next/image";

const CourseForYou = () => {

const data = [
    {image:"/course-for-you-1.png", description:"More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy."},
    {image:"/course-for-you-2.png", description:"More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy."},
    {image:"/course-for-you-3.png", description:"More than 50% of the highest paying jobs across industries show significant demand for coding skills and web development literacy."},
]

   return (
    <section className="course-for-you-section">
        <div className="dml-container">
              <div className="course-for-you-heading">
                    <p>WHY CHOOSE US</p>
                    <h2>This one&apos;s for you if...</h2>
              </div>
              <div className="course-for-you-wrapper">
                {Array.isArray(data) && data.map((item, index) => (
                    <div key={index} className="course-card">
                        <div className="">
                            <Image src={item.image} alt="course-for-you" width={243} height={243} />
                        </div>
                        <div className="">
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            )    
                }
              </div>
        </div>
    </section>
   )
}

export default CourseForYou;