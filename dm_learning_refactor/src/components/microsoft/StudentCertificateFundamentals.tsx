import Image from 'next/image';

const StudentCertificationFundamentals = () => {
  return (
    <section className="fundamental-section">
      <div className="dml-container">
        <div className="fundamentals-content">
          <div className="microsoft-fundamentals-left min-w-0">
            <h2 className="!text-[48px] !font-semibold !leading-[1.3]">Unlock exclusive discounts on Microsoft Certifications with DML</h2>
            <p className="!text-base !leading-[1.7]">
              Hey students! Microsoft is here to help you succeed with discounted exam vouchers and practice assessments
              just for you. Let&apos;s take your skills to the next level together!
            </p>
            {/* <Link href="/student-enrollment" className="rounded-[36px] border-2 border-white ...">
              Certification Hub
            </Link> */}
          </div>
          <div className="microsoft-fundamentals-right">
            <Image src="/MCF-badge-1.png" alt="mcf" width={852} height={274} className="mx-auto max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertificationFundamentals;
