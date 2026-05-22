import Image from "next/image";
import Link from "@/components/ui/link";

const StudentCertificationFundamentals = () => {
  return (
    <section className="fundamental-section">
      <div className="dml-container">
        <div className="fundamentals-content">
          <div className="fundamental-left">
            <h2>
              Unlock exclusive discounts on Microsoft Certifications with DML
            </h2>
            <p>
              Hey students! Microsoft is here to help you succeed with
              discounted exam vouchers and practice assessments just for you.
              Let&apos;s take your skills to the next level together!
            </p>
            {/* <Link href="/student-enrollment" className="microsoft-button-transparent">
              Certification Hub
            </Link> */}
          </div>
          <div className="fundamental-right">
            <Image src="/MCF-badge-1.png" alt="mcf" width={852} height={274} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertificationFundamentals;
