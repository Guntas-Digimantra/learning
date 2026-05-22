"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "@/components/ui/link";
import Logo from "../../../public/8ucate-logo.png";

/* ─── Privacy Policy Content ─── */
function PrivacyContent() {
  return (
    <section className="bg-transparent p-0">
      <div className="mx-auto max-w-full px-9 pt-5 pb-9 [&_a]:text-[#C8F135] hover:[&_a]:text-[#a8d418] [&_h3]:my-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#4c5151] [&_p]:text-xl [&_strong]:font-extrabold [&_ul]:list-disc [&_ul]:pl-8 [&_ul]:pt-3 [&_ul_li]:list-disc [&_ul_li]:text-xl [&_ul_li]:font-normal [&_ul_li]:text-[#4c5151] max-md:[&_ul_li]:text-lg">
        <div className="mt-[60px] mb-5">
          <h1 className="text-[40px] font-semibold leading-[1.7] tracking-[-0.1rem] text-[#4c5151] md:text-[60px] md:leading-[6.237rem] [&_span]:text-[#C8F135]">
            <span>Privacy</span> Policy
          </h1>
        </div>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>Effective date: April 13, 2026</p>
          <p>
            8ucate (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
            operates the <Link href="/">learning.digimantra.com</Link> website
            (the &quot;Service&quot;).
          </p>
          <p>
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
          </p>
          <p>
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, terms used in this Privacy Policy have the same
            meanings as in our Terms and Conditions, accessible from{" "}
            <Link href="/">learning.digimantra.com</Link>
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Information Collection And Use</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <p className="text-2xl">Types of Data Collected</p>
          <h3>Personal Data</h3>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (&quot;Personal Data&quot;). Personally identifiable
            information may include, but is not limited to:
          </p>
          <ul>
            <li>Email address.</li>
            <li>First name and last name.</li>
            <li>Phone number.</li>
            <li>Cookies and Usage Data.</li>
          </ul>
          <h3>Usage Data</h3>
          <p>
            We may also collect information how the Service is accessed and used
            (&quot;Usage Data&quot;). This Usage Data may include information
            such as your computer&apos;s Internet Protocol address (e.g. IP
            address), browser type, browser version, the pages of our Service
            that you visit, the time and date of your visit, the time spent on
            those pages, unique device identifiers and other diagnostic data.
          </p>
          <h3>Tracking &amp; Cookies Data</h3>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information.
          </p>
          <p>
            Cookies are files with small amount of data which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. Tracking technologies also used
            are beacons, tags, and scripts to collect and track information and
            to improve and analyze our Service.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our Service.
          </p>
          <p className="text-2xl">Examples of Cookies we use:</p>
          <ul>
            <li>
              <strong>Session Cookies.</strong> We use Session Cookies to
              operate our Service.
            </li>
            <li>
              <strong>Preference Cookies.</strong> We use Preference Cookies to
              remember your preferences and various settings.
            </li>
            <li>
              <strong>Security Cookies.</strong> We use Security Cookies for
              security purposes.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Use of Data</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>8ucate uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain the Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>
              To allow you to participate in interactive features of our Service
              when you choose to do so.
            </li>
            <li>To provide customer care and support.</li>
            <li>
              To provide analysis or valuable information so that we can improve
              the Service.
            </li>
            <li>To monitor the usage of the Service.</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Transfer Of Data</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ than those from your jurisdiction.
          </p>
          <p>
            If you are located outside India and choose to provide information
            to us, please note that we transfer the data, including Personal
            Data, to India and process it there.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of
            such information represents your agreement to that transfer.
          </p>
          <p>
            8ucate will take all steps reasonably necessary to ensure that your
            data is treated securely and in accordance with this Privacy Policy
            and no transfer of your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of your data and other personal
            information.
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Disclosure Of Data</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <h3>Legal Requirements</h3>
          <p>
            8ucate may disclose your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul>
            <li>To comply with a legal obligation.</li>
            <li>To protect and defend the rights or property of 8ucate.</li>
            <li>
              To prevent or investigate possible wrongdoing in connection with
              the Service.
            </li>
            <li>
              To protect the personal safety of users of the Service or the
              public.
            </li>
            <li>To protect against legal liability.</li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Security Of Data</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            The security of your data is important to us, but remember that no
            method of transmission over the Internet, or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Service Providers</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            We may employ third party companies and individuals to facilitate
            our Service (&quot;Service Providers&quot;), to provide the Service
            on our behalf, to perform Service-related services or to assist us
            in analyzing how our Service is used.
          </p>
          <p>
            These third parties have access to your Personal Data only to
            perform these tasks on our behalf and are obligated not to disclose
            or use it for any other purpose.
          </p>
          <h3>Analytics</h3>
          <p>
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
          </p>
          <ul>
            <li>
              <strong>Google Analytics.</strong>
            </li>
            <li>
              Google Analytics is a web analytics service offered by Google that
              tracks and reports website traffic. Google uses the data collected
              to track and monitor the use of our Service. This data is shared
              with other Google services. Google may use the collected data to
              contextualize and personalize the ads of its own advertising
              network.
            </li>
            <li>
              You can opt-out of having made your activity on the Service
              available to Google Analytics by installing the Google Analytics
              opt-out browser add-on.
            </li>
            <li>
              For more information on the privacy practices of Google, please
              visit the Google Privacy &amp; Terms web page:{" "}
              <a
                className="text-[#C8F135] underline hover:text-[#a8d418]"
                href="https://policies.google.com/privacy?hl=en"
              >
                policies.google.com/privacy?hl=en
              </a>
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Links To Other Sites</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            Our Service may contain links to other sites that are not operated
            by us. If you click on a third party link, you will be directed to
            that third party&apos;s site. We strongly advise you to review the
            Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Children&apos;s Privacy</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            Our Service does not address anyone under the age of 18
            (&quot;Children&quot;).
          </p>
          <p>
            We do not knowingly collect personally identifiable information from
            anyone under the age of 18. If you are a parent or guardian and you
            are aware that your Children has provided us with Personal Data,
            please contact us. If we become aware that we have collected
            Personal Data from children without verification of parental
            consent, we take steps to remove that information from our servers.
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Changes To This Privacy Policy</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            We will let you know via email and/or a prominent notice on our
            Service, prior to the change becoming effective and update the
            &quot;effective date&quot; at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">Contact Us</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="mb-12">
            <li>
              By email:{" "}
              <a href="mailto:learning@digimantra.com">
                learning@digimantra.com
              </a>
            </li>
            <li>
              By visiting this page on our website:{" "}
              <Link href="/">learning.digimantra.com</Link>
            </li>
            <li>
              By phone number: <a href="tel:+91-172-6131700">+91-172-6131700</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── Terms & Conditions Content ─── */
function TermsContent() {
  return (
    <section className="bg-transparent p-0">
      <div className="mx-auto max-w-full px-9 pt-5 pb-9 [&_a]:text-[#C8F135] hover:[&_a]:text-[#a8d418] [&_h3]:my-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#4c5151] [&_p]:text-xl [&_strong]:font-extrabold [&_ul]:list-disc [&_ul]:pl-8 [&_ul]:pt-3 [&_ul_li]:list-disc [&_ul_li]:text-xl [&_ul_li]:font-normal [&_ul_li]:text-[#4c5151] max-md:[&_ul_li]:text-lg">
        <div className="mt-[60px] mb-5">
          <h1 className="text-[40px] font-semibold leading-[1.7] tracking-[-0.1rem] text-[#4c5151] md:text-[60px] md:leading-[6.237rem] [&_span]:text-[#C8F135]">
            <span>Terms And Conditions</span>
          </h1>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">1. Introduction</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            Welcome to 8ucate! These Terms and Conditions outline the rules and
            regulations for using the payment gateway services provided by
            8ucate. By accessing or using our payment gateway, you agree to
            comply with these terms. If you do not agree with any part of these
            terms, you must not use our services.
          </p>
          <p>
            8ucate is dedicated to providing high-quality educational content
            and services. Our payment gateway is designed to facilitate secure
            and efficient transactions for our users. These terms are intended
            to protect both 8ucate and our users by clearly defining the rights
            and responsibilities associated with the use of our payment
            services.
          </p>

          <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">2. Acceptance of Terms</h2>
          <p>
            By using our payment gateway, you confirm that you have read,
            understood, and agree to be bound by these Terms and Conditions.
            These terms apply to all users of the payment gateway, including but
            not limited to students, instructors, and any other individuals or
            entities that utilize our services.
          </p>
          <p>
            If you are using the payment gateway on behalf of an organization,
            you represent that you have the authority to bind that organization
            to these terms. In such cases, the terms &quot;you&quot; and
            &quot;your&quot; will refer to both you and the organization you
            represent.
          </p>

          <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">3. Payment Processing</h2>
          <p>
            8ucate utilizes a secure payment gateway to process all
            transactions. We are committed to ensuring that your payment
            information is handled with the utmost care and security. However,
            please be aware of the following:
          </p>
          <ul>
            <li>
              <strong>Secure Transactions: </strong>All payments made through
              our payment gateway are processed using industry-standard
              encryption technologies to protect your personal and financial
              information. Our payment gateway complies with the Payment Card
              Industry Data Security Standard (PCI DSS).
            </li>
            <li>
              <strong>Transaction Delays: </strong>While we aim to process
              payments promptly, 8ucate is not responsible for any delays or
              issues that may arise during the payment processing.
            </li>
            <li>
              <strong>Payment Confirmation: </strong>Upon successful completion
              of a transaction, you will receive a confirmation email detailing
              your purchase. It is your responsibility to ensure that the email
              address provided during the transaction is accurate and
              accessible.
            </li>
            <li>
              <strong>Payment Methods:</strong> 8ucate accepts various payment
              methods, including credit cards, debit cards, and other electronic
              payment options. By using our payment gateway, you agree to
              provide valid payment information and authorize 8ucate to charge
              the specified amount to your chosen payment method.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">4. User Responsibilities</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            As a user of our payment gateway, you have certain responsibilities
            to ensure a smooth and secure transaction process:
          </p>
          <ul>
            <li>
              <strong>Accurate Information: </strong>You must provide accurate
              and complete information when making payments. 8ucate reserves
              the right to cancel or suspend your account if we suspect any
              fraudulent activity or if you provide false information.
            </li>
            <li>
              <strong>Account Security: </strong>You are responsible for
              maintaining the confidentiality of your account information. You
              agree to notify 8ucate immediately of any unauthorized use of
              your account or any other breach of security.
            </li>
            <li>
              <strong>Compliance with Laws: </strong>You agree to use the
              payment gateway in compliance with all applicable laws and
              regulations.
            </li>
            <li>
              <strong>Prohibited Activities: </strong>You agree not to engage in
              any activities that may harm or disrupt the payment gateway or the
              services provided by 8ucate.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">5. Refund and Cancellation Policy</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            At 8ucate, we strive to provide high-quality educational content
            and services. However, please note the following regarding our
            refund and cancellation policy:
          </p>
          <ul>
            <li>
              <strong>Non-Refundable Payments: </strong>All payments made
              through the payment gateway are non-refundable. Once a transaction
              is completed, it cannot be reversed or refunded. This policy
              applies to all courses, materials, and services offered by
              8ucate.
            </li>
            <li>
              <strong>Cancellation Policy:</strong> In the event of
              cancellation, please note that there will be no refund issued
              under any circumstances, whether during the program or after the
              fee has been paid.
            </li>
            <li>
              <strong>Review Before Purchase: </strong>Users are encouraged to
              review their order details carefully before completing the
              payment. If you have any questions or concerns, please contact our
              support team before making a payment.
            </li>
            <li>
              <strong>Exceptional Circumstances: </strong>In rare cases, 8ucate
              may consider refund requests on a case-by-case basis. Such
              requests must be submitted in writing to our support team within
              14 days of the transaction date. Approval of refunds in
              exceptional cases is at the sole discretion of 8ucate.
            </li>
            <li>
              <strong>Chargebacks: </strong>If you initiate a chargeback with
              your bank or credit card company, it may result in the suspension
              of your account and access to our services.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">6. Limitation of Liability</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            8ucate shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our payment gateway
            services. This includes, but is not limited to, damages for loss of
            profits, data, or other intangible losses resulting from:
          </p>
          <ul>
            <li>The use or inability to use our payment gateway.</li>
            <li>
              Any unauthorized access to or use of our secure servers and/or any
              personal information stored therein.
            </li>
            <li>
              Any interruption or cessation of transmission to or from our
              payment gateway.
            </li>
            <li>
              Any bugs, viruses, or other harmful components that may be
              transmitted to or through our payment gateway by any third party.
            </li>
            <li>
              Any errors or omissions in any content or for any loss or damage
              of any kind incurred as a result of your use of any content posted
              or otherwise made available via our payment gateway.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">7. Changes to Terms</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            8ucate reserves the right to modify these Terms and Conditions at
            any time. Any changes will be effective immediately upon posting the
            revised terms on our website. Continued use of the payment gateway
            after any changes constitutes acceptance of the new terms.
          </p>
          <ul>
            <li>
              <strong>Notification of Changes: </strong>We will make reasonable
              efforts to notify users of any significant changes to these Terms
              and Conditions.
            </li>
            <li>
              <strong>Severability: </strong>If any provision of these Terms and
              Conditions is found to be invalid or unenforceable, the remaining
              provisions shall remain in full force and effect.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">8. Governing Law</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which 8ucate
            operates. Any disputes arising from these terms shall be resolved in
            the courts of Mohali jurisdiction.
          </p>
          <ul>
            <li>
              <strong>Dispute Resolution:</strong> In the event of a dispute,
              you agree to first attempt to resolve the issue informally by
              contacting our support team.
            </li>
            <li>
              <strong>Waiver of Class Action:</strong> You agree that any
              disputes will be resolved on an individual basis and not as part
              of a class action or representative proceeding.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">9. Contact Information</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            For any questions or concerns regarding these Terms and Conditions,
            please contact us at:
          </p>
          <ul className="mb-12">
            <li>
              Email:{" "}
              <Link href="mailto:learning@digimantra.com">
                learning@digimantra.com
              </Link>
            </li>
            <li>
              By visiting this page on our website:{" "}
              <Link href="/">learning.digimantra.com</Link>
            </li>
            <li>
              Phone: <Link href="tel:+91-172-6131700">+91-172-6131700</Link>
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">10. Acceptance of Terms</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            By using our payment gateway, you acknowledge that you have read and
            understood these Terms and Conditions and agree to be bound by them.
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">11. Privacy Policy</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            Your privacy is important to us. Please review our Privacy Policy,
            which explains how we collect, use, and protect your personal
            information. By using our payment gateway, you consent to the
            collection and use of your information as described in our Privacy
            Policy.
          </p>
          <ul className="mb-12">
            <li>
              <strong>Data Protection: </strong>8ucate is committed to
              protecting your personal information and ensuring that it is used
              in compliance with applicable data protection laws.
            </li>
            <li>
              <strong>Third-Party Services: </strong>Our payment gateway may
              involve the use of third-party services for payment processing.
              These third parties have their own privacy policies and terms of
              service.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">12. User Conduct</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            As a user of our payment gateway, you agree to conduct yourself in a
            manner that is respectful and compliant with these Terms and
            Conditions. You agree not to:
          </p>
          <ul className="mb-12">
            <li>
              <strong>Engage in Fraudulent Activities: </strong>You agree not to
              engage in any fraudulent activities, including but not limited to
              providing false information or using stolen credit cards.
            </li>
            <li>
              <strong>Harass or Threaten Others: </strong>You agree not to
              harass, threaten, or intimidate any other users or 8ucate staff.
            </li>
            <li>
              <strong>Disrupt Services: </strong>You agree not to interfere with
              or disrupt the operation of our payment gateway.
            </li>
            <li>
              <strong>Use Automated Means: </strong>You agree not to use any
              automated means to access our payment gateway without our express
              written permission.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">13. Intellectual Property Rights</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            All content, trademarks, and other intellectual property associated
            with 8ucate and its payment gateway are the exclusive property of
            8ucate or its licensors. You may not use, reproduce, distribute, or
            create derivative works from any content without our express written
            permission.
          </p>
          <ul className="mb-12">
            <li>
              <strong>License to Use: </strong>8ucate grants you a limited,
              non-exclusive, non-transferable license to access and use the
              payment gateway for your personal, non-commercial use.
            </li>
            <li>
              <strong>Feedback: </strong>By submitting feedback or suggestions,
              you grant 8ucate the right to use such feedback for any purpose,
              including improving our services.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">14. Termination of Services</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            8ucate reserves the right to suspend or terminate your access to
            the payment gateway at any time, without notice, for any reason,
            including but not limited to:
          </p>
          <ul>
            <li>Violation of these Terms and Conditions.</li>
            <li>Engaging in fraudulent or illegal activities.</li>
            <li>
              Failure to provide accurate information during the payment
              process.
            </li>
            <li>
              Any behavior that disrupts the operation of our services or
              negatively impacts other users.
            </li>
          </ul>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">27. Effective Date</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            These Terms and Conditions are effective as per the date mentioned
            by 8ucate. We may update these terms from time to time, and we
            encourage you to review them periodically.
          </p>
        </div>

        <h2 className="mt-[52px] mb-5 text-[36px] font-normal text-[#4c5151] md:mt-20 md:mb-[50px] md:text-[48px]">28. Conclusion</h2>
        <div className="text-xl text-[#4c5151] [&_p]:text-[#4c5151] max-md:[&_p]:text-lg">
          <p>
            Thank you for choosing 8ucate as your educational partner. We are
            committed to providing you with a secure and efficient payment
            experience. If you have any questions or concerns regarding these
            Terms and Conditions or our payment gateway services, please do not
            hesitate to contact us.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Modal Shell ─── */
export default function LegalModal() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null); // 'privacy' | 'terms'

  const openModal = useCallback((t) => {
    setType(t);
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    window.__openLegalModal = openModal;
    return () => {
      delete window.__openLegalModal;
    };
  }, [openModal]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.6)] p-5 backdrop-blur-[4px]"
      onClick={closeModal}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-[800px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_32px_80px_rgba(0,0,0,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[#e8e4dd] bg-white px-7 py-[18px]">
          <Image
            src={Logo}
            width={160}
            height={72}
            alt="8ucate"
            className="object-contain"
          />
          <button
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-[rgba(0,0,0,0.08)] text-base transition-colors duration-200 hover:bg-[rgba(0,0,0,0.16)]"
            onClick={closeModal}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {type === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </div>
      </div>
    </div>
  );
}
