import Link from 'next/link';
import { Locate, Mail, PhoneCall } from 'lucide-react';
import StudentDetailForm from '../../forms/student-detail-form';
import ContainerSection from '../../common/container-section';

const contactInfo = [
    {
        type: 'location',
        icon: <Locate />,
        url: 'https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7',
        data: '#2, Knowledge Park, Science Technology Entrepreneur\'s park, Gill Road, Ludhiana, Punjab - 144006',
    },
    { type: 'phone', icon: <PhoneCall />, data: '+91-172-613-1700' },
    { type: 'email', icon: <Mail />, data: 'hello@learning.digimantra.com' },
];

export default function StudentEnrollmentSection() {
    return (
        <ContainerSection className="mx-auto">
            <div className="bg-primary/5 relative overflow-hidden rounded-3xl flex lg:flex-nowrap flex-wrap">
                {/* Left Info Panel */}
                <div className="bg-primary sm:py-16 sm:px-11 p-6 rounded-3xl lg:max-w-xl max-w-full w-full flex flex-col justify-between items-start">
                    <div className="w-full">
                        <h3 className="text-3xl sm:text-4xl font-bold sm:mb-14 mb-7 text-white">
                            Let&apos;s Connect!
                        </h3>
                        <div className="flex flex-col gap-8 items-start text-base font-semibold text-[#F0F0F0]">
                            {contactInfo.map(({ type, icon, data, url }) => (
                                <div
                                    key={type}
                                    className="flex min-[364px]:flex-row flex-col min-[364px]:items-start items-start gap-4"
                                >
                                    <span className="mt-1 shrink-0">{icon}</span>
                                    {['email', 'phone'].includes(type) ? (
                                        <Link
                                            href={type === 'email' ? `mailto:${data}` : `tel:${data}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline break-all"
                                        >
                                            {data}
                                        </Link>
                                    ) : (
                                        <Link href={url ?? ''} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {data}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Form Panel */}
                <div className="xl:p-20 min-[364px]:p-6 p-4 w-full">
                    <h4 className="text-3xl sm:text-4xl font-bold mb-8">
                        Student <span className="text-primary">Detail Form</span>
                    </h4>
                    <StudentDetailForm />
                </div>
            </div>
        </ContainerSection>
    );
}
