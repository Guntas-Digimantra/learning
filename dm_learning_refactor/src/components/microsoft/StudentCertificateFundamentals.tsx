import Image from 'next/image';

const StudentCertificationFundamentals = () => {
  return (
    <section className="bg-[#151819] py-[100px] max-[1024px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex max-[1024px]:flex-col">
          <div className="flex-1 [&_h2]:pb-5 [&_h2]:text-[#f8f8f8] [&_p]:pb-10 [&_p]:text-[#f8f8f8]">
            <h2>Unlock exclusive discounts on Microsoft Certifications with DML</h2>
            <p>
              Hey students! Microsoft is here to help you succeed with discounted exam vouchers and practice assessments
              just for you. Let&apos;s take your skills to the next level together!
            </p>
            {/* <Link href="/student-enrollment" className="rounded-[36px] border-2 border-white ...">
              Certification Hub
            </Link> */}
          </div>
          <div className="flex-1 content-center max-[1024px]:pt-[30px] max-[1024px]:text-center">
            <Image src="/MCF-badge-1.png" alt="mcf" width={852} height={274} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertificationFundamentals;
