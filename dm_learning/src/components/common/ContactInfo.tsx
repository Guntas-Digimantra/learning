import Link from "@/components/ui/link";
import Image from "next/image";

const ContactInfo = () => {
    return (
        <div className="contact-info-wrap">
            <ul className="list-wrap">
                <li>
                    <div className="icon">
                        <Image src="/map.svg" alt="img" width={30} height={30} />
                    </div>
                    <div className="content">
                        <h4 className="title">Address</h4>
                        <Link
                            href="https://maps.app.goo.gl/XJX2zmcvUxGTqY8e7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            #2, Knowledge Park, Science Technology
                            Entrepreneur&apos;s park, Gill Road, Ludhiana , Punjab -
                            144006
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <Image src="/contact_phone.svg" alt="img" width={30} height={30} />
                    </div>
                    <div className="content">
                        <h4 className="title">Phone</h4>
                        <Link href="tel:+91-172-613-1700">+91-172-613-1700</Link>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <Image src="/emial.svg" alt="img" width={30} height={30} />
                    </div>
                    <div className="content">
                        <h4 className="title">E-mail Address</h4>
                        <Link href="mailto:learning@digimantra.com " className="email-link">
                            learning@digimantra.com
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;
