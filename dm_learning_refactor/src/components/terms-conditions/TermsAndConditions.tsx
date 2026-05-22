import Link from '@/components/ui/link';

const outer =
  'mx-auto max-w-[1440px] px-[15px] pb-[100px] max-md:pb-[50px] [&_p]:text-xl [&_p]:text-[#4c5151] max-md:[&_p]:text-lg [&_a]:text-[#fb8b25] [&_a]:underline [&_h3]:my-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#4c5151] [&_strong]:font-bold [&_ul]:list-disc [&_ul]:py-3 [&_ul]:pl-8 [&_li]:list-disc [&_li]:text-xl [&_li]:text-[#4c5151] max-md:[&_li]:text-lg';

const subHeading = 'mb-[50px] mt-20 text-[48px] font-normal text-[#4c5151] max-md:mt-[52px] max-md:mb-5 max-md:text-4xl';

const TermsAndConditions = () => {
  return (
    <section className="bg-white pb-[100px] max-md:pb-[50px]">
      <div className={outer}>
        <div className="mb-[50px] mt-[60px]">
          <h1 className="text-[60px] font-semibold leading-[6.237rem] tracking-[-0.1rem] text-[#4c5151] max-md:text-[40px] max-md:leading-[1.7]">
            <span className="text-[#fb8b25]">Terms And Conditions</span>
          </h1>
        </div>
        <h2 className={subHeading}>1. Introduction</h2>
        <div>
          <p>
            Welcome to DMLearning! These Terms and Conditions outline the rules and regulations for using the payment
            gateway services provided by DMLearning. By accessing or using our payment gateway, you agree to comply with
            these terms. If you do not agree with any part of these terms, you must not use our services.
          </p>
          <p>
            DMLearning is dedicated to providing high-quality educational content and services. Our payment gateway is
            designed to facilitate secure and efficient transactions for our users. These terms are intended to protect
            both DMLearning and our users by clearly defining the rights and responsibilities associated with the use of
            our payment services.
          </p>
          <h2 className={subHeading}>2. Acceptance of Terms</h2>
          <p>
            By using our payment gateway, you confirm that you have read, understood, and agree to be bound by these
            Terms and Conditions. These terms apply to all users of the payment gateway, including but not limited to
            students, instructors, and any other individuals or entities that utilize our services.
          </p>
          <p>
            If you are using the payment gateway on behalf of an organization, you represent that you have the authority
            to bind that organization to these terms. In such cases, the terms &quot;you&quot; and &quot;your&quot; will
            refer to both you and the organization you represent.
          </p>

          <h2 className={subHeading}>3. Payment Processing</h2>
          <p>
            DMLearning utilizes a secure payment gateway to process all transactions. We are committed to ensuring that
            your payment information is handled with the utmost care and security. However, please be aware of the
            following:
          </p>

          <ul>
            <li>
              <strong>Secure Transactions: </strong> All payments made through our payment gateway are processed using
              industry-standard encryption technologies to protect your personal and financial information. We strive to
              maintain a secure environment for all transactions. Our payment gateway complies with the Payment Card
              Industry Data Security Standard (PCI DSS) to ensure the highest level of security for your data.
            </li>
            <li>
              <strong>Transaction Delays: </strong>While we aim to process payments promptly, DMLearning is not
              responsible for any delays or issues that may arise during the payment processing. Factors such as bank
              processing times, technical issues, or other unforeseen circumstances may affect the speed of transaction
              completion. If you experience any issues with your payment, please contact our support team for
              assistance.
            </li>
            <li>
              <strong>Payment Confirmation: </strong> Upon successful completion of a transaction, you will receive a
              confirmation email detailing your purchase. It is your responsibility to ensure that the email address
              provided during the transaction is accurate and accessible. If you do not receive a confirmation email
              within a reasonable time frame, please check your spam or junk folder. If you still cannot find the email,
              contact our support team for assistance. Payment Methods: DMLearning accepts various payment methods,
              including credit cards, debit cards, and other electronic payment options. The available payment methods
              may vary based on your location and the services you are purchasing. By using our payment gateway, you
              agree to provide valid payment information and authorize DMLearning to charge the specified amount to your
              chosen payment method.
            </li>
            <li>
              <strong>Payment Methods:</strong> DMLearning accepts various payment methods, including credit cards,
              debit cards, and other electronic payment options. The available payment methods may vary based on your
              location and the services you are purchasing. By using our payment gateway, you agree to provide valid
              payment information and authorize DMLearning to charge the specified amount to your chosen payment method.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>4. User Responsibilities</h2>
        <div className="">
          <p>
            As a user of our payment gateway, you have certain responsibilities to ensure a smooth and secure
            transaction process:
          </p>
          <ul>
            <li>
              <strong>Accurate Information: </strong>You must provide accurate and complete information when making
              payments. This includes your name, billing address, email address, and payment details. Any inaccuracies
              may result in transaction failures or delays. DMLearning reserves the right to cancel or suspend your
              account if we suspect any fraudulent activity or if you provide false information.
            </li>
            <li>
              <strong>Account Security: </strong>You are responsible for maintaining the confidentiality of your account
              information, including your username and password. You agree to notify DMLearning immediately of any
              unauthorized use of your account or any other breach of security. DMLearning will not be liable for any
              loss or damage arising from your failure to comply with this obligation.
            </li>
            <li>
              <strong>Compliance with Laws: </strong>
              You agree to use the payment gateway in compliance with all applicable laws and regulations. You are
              solely responsible for any transactions made through your account. This includes ensuring that you have
              the legal right to use the payment method you provide and that your use of the payment gateway does not
              violate any laws or regulations in your jurisdiction.
            </li>
            <li>
              <strong>Prohibited Activities: </strong>You agree not to engage in any activities that may harm or disrupt
              the payment gateway or the services provided by DMLearning. This includes, but is not limited to,
              attempting to gain unauthorized access to our systems, using automated means to access our services, or
              engaging in any form of fraud or deception.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>5. Refund and Cancellation Policy</h2>
        <div className="">
          <p>
            At DMLearning, we strive to provide high-quality educational content and services. However, please note the
            following regarding our refund and cancellation policy:
          </p>
          <ul>
            <li>
              <strong>Non-Refundable Payments: </strong>All payments made through the payment gateway are
              non-refundable. Once a transaction is completed, it cannot be reversed or refunded. This policy applies to
              all courses, materials, and services offered by DMLearning, including the Advanced Industrial Training &
              Internship Program, which costs ₹17,000 inclusive of all taxes, and the Summer Bootcamp, which lasts for
              45 days. Microsoft certification costs will vary.
            </li>
            <li>
              <strong>Cancellation Policy:</strong>In the event of cancellation, please note that there will be no
              refund issued under any circumstances, whether during the program or after the fee has been paid. We
              encourage users to carefully consider their decisions before enrolling in any program.
            </li>
            <li>
              <strong>Review Before Purchase: </strong>Users are encouraged to review their order details carefully
              before completing the payment. This includes checking course descriptions, pricing, and any other relevant
              information. If you have any questions or concerns about a course or service, please contact our support
              team before making a payment. We are here to assist you in making informed decisions regarding your
              purchases.
            </li>
            <li>
              <strong>Exceptional Circumstances: </strong>In rare cases, DMLearning may consider refund requests on a
              case-by-case basis. Such requests must be submitted in writing to our support team within 14 days of the
              transaction date, along with a detailed explanation of the circumstances. Approval of refunds in
              exceptional cases is at the sole discretion of DMLearning. Please note that any approved refunds will be
              processed back to the original payment method used for the transaction.
            </li>
            <li>
              <strong>Chargebacks: </strong>If you initiate a chargeback with your bank or credit card company, it may
              result in the suspension of your account and access to our services. We encourage you to contact our
              support team to resolve any issues before taking such action.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>6. Limitation of Liability</h2>
        <div className="">
          <p>
            DMLearning shall not be liable for any indirect, incidental, or consequential damages arising from the use
            of our payment gateway services. This includes, but is not limited to, damages for loss of profits, data, or
            other intangible losses resulting from:
          </p>
          <ul>
            <li>The use or inability to use our payment gateway.</li>
            <li>
              Any unauthorized access to or use of our secure servers and/or any personal information stored therein.
            </li>
            <li>Any interruption or cessation of transmission to or from our payment gateway.</li>
            <li>
              Any bugs, viruses, or other harmful components that may be transmitted to or through our payment gateway
              by any third party.
            </li>
            <li>
              Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your
              use of any content posted, emailed, transmitted, or otherwise made available via our payment gateway.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>7. Changes to Terms</h2>
        <div className="">
          <p>
            DMLearning reserves the right to modify these Terms and Conditions at any time. Any changes will be
            effective immediately upon posting the revised terms on our website. Users will be notified of any
            significant changes via email or through a notice on our website. Continued use of the payment gateway after
            any changes constitutes acceptance of the new terms.
          </p>
          <ul>
            <li>
              <strong>Notification of Changes: </strong>We will make reasonable efforts to notify users of any
              significant changes to these Terms and Conditions. However, it is your responsibility to review these
              terms periodically for any updates or changes. Your continued use of the payment gateway after changes
              have been made signifies your acceptance of the revised terms.
            </li>
            <li>
              <strong>Severability: </strong>If any provision of these Terms and Conditions is found to be invalid or
              unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force
              and effect.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>8. Governing Law</h2>
        <div className="">
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the
            jurisdiction in which DMLearning operates. Any disputes arising from these terms or your use of the payment
            gateway shall be resolved in the courts of that jurisdiction.
          </p>
          <ul>
            <li>
              <strong>Dispute Resolution:</strong> In the event of a dispute, you agree to first attempt to resolve the
              issue informally by contacting our support team. If the dispute cannot be resolved informally, you agree
              to submit to the exclusive jurisdiction of the courts in the jurisdiction where DMLearning operates.
            </li>
            <li>
              <strong>Waiver of Class Action:</strong> You agree that any disputes arising out of or related to these
              Terms and Conditions or your use of the payment gateway will be resolved on an individual basis and not as
              part of a class action or representative proceeding.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>9. Contact Information</h2>
        <div className="">
          <p>For any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
          <ul className="ul-list">
            <li>
              Email: <Link href="mailto:hello@learning.digimantra.com">hello@learning.digimantra.com</Link>
            </li>
            <li>
              By visiting this page on our website: <Link href="/">learning.digimantra.com</Link>
            </li>
            <li>
              Phone: <Link href="tel:+91-172-6131700">+91-172-6131700</Link>
            </li>
          </ul>
          <p>
            We are committed to addressing your inquiries and concerns promptly. Our support team is available to assist
            you with any issues related to your transactions or the use of our payment gateway.
          </p>
        </div>
        <h2 className={subHeading}>10. Acceptance of Terms</h2>
        <div className="">
          <p>
            By using our payment gateway, you acknowledge that you have read and understood these Terms and Conditions
            and agree to be bound by them. If you do not agree to these terms, you must not use our payment gateway
            services.
          </p>
        </div>
        <h2 className={subHeading}>11. Privacy Policy</h2>
        <div className="">
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and
            protect your personal information. By using our payment gateway, you consent to the collection and use of
            your information as described in our Privacy Policy.
          </p>
          <ul className="ul-list">
            <li>
              <strong>Data Protection: </strong>DMLearning is committed to protecting your personal information and
              ensuring that it is used in compliance with applicable data protection laws. We implement appropriate
              technical and organizational measures to safeguard your data against unauthorized access, loss, or misuse.
            </li>
            <li>
              <strong>Third-Party Services: </strong>Our payment gateway may involve the use of third-party services for
              payment processing. These third parties have their own privacy policies and terms of service, and we
              encourage you to review them before providing any personal information.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>12. User Conduct</h2>
        <div className="">
          <p>
            As a user of our payment gateway, you agree to conduct yourself in a manner that is respectful and compliant
            with these Terms and Conditions. You agree not to:
          </p>
          <ul className="ul-list">
            <li>
              <strong>Engage in Fraudulent Activities: </strong>You agree not to engage in any fraudulent activities,
              including but not limited to providing false information, using stolen credit cards, or attempting to
              deceive DMLearning or other users.
            </li>
            <li>
              <strong>Harass or Threaten Others: </strong>You agree not to harass, threaten, or intimidate any other
              users or DMLearning staff. This includes any form of abusive language, threats of violence, or any
              behavior that creates a hostile environment.
            </li>
            <li>
              <strong>Disrupt Services: </strong>You agree not to interfere with or disrupt the operation of our payment
              gateway or any servers or networks connected to it. This includes attempting to gain unauthorized access
              to any part of our services or systems.
            </li>
            <li>
              <strong>Use Automated Means: </strong>You agree not to use any automated means, such as bots, scrapers, or
              spiders, to access our payment gateway or collect information from it without our express written
              permission.
            </li>
            <li>
              <strong>Post Inappropriate Content: </strong>You agree not to post, transmit, or otherwise make available
              any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or
              otherwise objectionable.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>13. Intellectual Property Rights</h2>
        <div className="">
          <p>
            All content, trademarks, and other intellectual property associated with DMLearning and its payment gateway
            are the exclusive property of DMLearning or its licensors. You may not use, reproduce, distribute, or create
            derivative works from any content without our express written permission.
          </p>
          <ul className="ul-list">
            <li>
              <strong>License to Use: </strong>DMLearning grants you a limited, non-exclusive, non-transferable license
              to access and use the payment gateway for your personal, non-commercial use. This license does not grant
              you any rights to modify, reproduce, or distribute any content from the payment gateway.
            </li>
            <li>
              <strong>Feedback: </strong>If you provide us with any feedback, suggestions, or ideas regarding our
              payment gateway or services, you grant DMLearning the right to use such feedback without any obligation to
              you. We may use your feedback for any purpose, including improving our services.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>14. Termination of Services</h2>
        <div className="">
          <p>
            DMLearning reserves the right to suspend or terminate your access to the payment gateway at any time,
            without notice, for any reason, including but not limited to:
          </p>
          <ul>
            <li>Violation of these Terms and Conditions.</li>
            <li>Engaging in fraudulent or illegal activities.</li>
            <li>Failure to provide accurate information during the payment process.</li>
            <li>Any behavior that disrupts the operation of our services or negatively impacts other users.</li>
            <li>
              Upon termination, your right to use the payment gateway will immediately cease, and you will not be
              entitled to any refunds for payments made prior to termination.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>15. Miscellaneous</h2>
        <div className="">
          <ul className="ul-list">
            <li>
              <strong>Entire Agreement: </strong>These Terms and Conditions, along with our Privacy Policy, constitute
              the entire agreement between you and DMLearning regarding your use of the payment gateway and supersede
              any prior agreements or understandings.
            </li>
            <li>
              <strong>Waiver: </strong>The failure of DMLearning to enforce any right or provision of these Terms and
              Conditions shall not be deemed a waiver of such right or provision.
            </li>
            <li>
              <strong>Assignment: </strong>DMLearning may assign or transfer these Terms and Conditions, in whole or in
              part, without your consent. You may not assign or transfer these Terms and Conditions without our prior
              written consent.
            </li>
            <li>
              <strong>Headings: </strong>The section headings in these Terms and Conditions are for convenience only and
              have no legal or contractual effect.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>16. Acknowledgment</h2>
        <p>
          By using our payment gateway, you acknowledge that you have read, understood, and agree to be bound by these
          Terms and Conditions. If you do not agree to these terms, you must not use our payment gateway services.
        </p>
        <h2 className={subHeading}>17. Changes to Services</h2>
        <div className="">
          <p>
            DMLearning reserves the right to modify or discontinue the payment gateway services at any time, with or
            without notice. We will not be liable to you or any third party for any modification, suspension, or
            discontinuation of the services.
          </p>
          <ul>
            <li>
              <strong>User Notification: </strong>In the event of significant changes to the payment gateway services,
              we will make reasonable efforts to notify users in advance. However, it is your responsibility to stay
              informed about any changes that may affect your use of the services.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>18. Contact Us</h2>
        <div className="">
          <p>
            If you have any questions, concerns, or comments regarding these Terms and Conditions or our payment gateway
            services , please do not hesitate to reach out to us. We value your feedback and are committed to providing
            you with the best possible support. You can contact us using the following information:
          </p>
          <ul className="ul-list">
            <li>
              Email: <Link href="mailto:hello@learning.digimantra.com">hello@learning.digimantra.com</Link>
            </li>
            <li>
              By visiting this page on our website: <Link href="/">learning.digimantra.com</Link>
            </li>
            <li>
              Phone: <Link href="tel:+91-172-6131700">+91-172-6131700</Link>
            </li>
          </ul>
          <p>
            Our customer support team is available to assist you with any inquiries related to your transactions,
            account issues, or any other concerns you may have regarding our payment gateway services.
          </p>
        </div>
        <h2 className={subHeading}>19. User Agreement</h2>
        <div className="">
          <p>By using our payment gateway, you agree to the following:</p>
          <ul className="ul-list">
            <li>
              You will not use the payment gateway for any unlawful purpose or in any manner that could damage, disable,
              overburden, or impair the payment gateway or interfere with any other party&apos;s use of the payment
              gateway.
            </li>
            <li>
              You will not attempt to gain unauthorized access to any portion of the payment gateway, other accounts,
              computer systems, or networks connected to the payment gateway, through hacking, password mining, or any
              other means.
            </li>
            <li>
              You will not use any robot, spider, or other automatic devices, process, or means to access the payment
              gateway for any purpose, including monitoring or copying any of the material on the payment gateway.
            </li>
            <li>
              You will not use any manual process to monitor or copy any of the material on the payment gateway or for
              any other unauthorized purpose without our prior written consent.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>20. Third-Party Links</h2>
        <div className="">
          <p>
            Our payment gateway may contain links to third-party websites or services that are not owned or controlled
            by DMLearning. We have no control over, and assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services.
          </p>
          <ul className="ul-list">
            <li>
              <strong>Disclaimer: </strong>You acknowledge and agree that DMLearning shall not be responsible or liable,
              directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the
              use of or reliance on any such content, goods, or services available on or through any such websites or
              services.
            </li>
            <li>
              <strong>User Responsibility: </strong>We encourage you to read the terms and conditions and privacy
              policies of any third-party websites or services that you visit.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>21. Data Retention</h2>
        <div className="">
          <p>
            DMLearning will retain your personal information and transaction data for as long as necessary to fulfill
            the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce
            our agreements.
          </p>
          <ul className="ul-list">
            <li>
              <strong>Data Deletion: </strong> If you wish to request the deletion of your personal information, please
              contact us using the contact information provided above. We will respond to your request in accordance
              with applicable laws.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>22. Security Measures</h2>
        <div className="">
          <p>
            DMLearning takes the security of your personal information seriously. We implement a variety of security
            measures to protect your information from unauthorized access, use, or disclosure.
          </p>
          <ul className="ul-list">
            <li>
              <strong>Encryption: </strong>Sensitive information transmitted via the payment gateway is encrypted using
              Secure Socket Layer (SSL) technology to ensure its security.
            </li>
            <li>
              <strong>Access Controls: </strong>We restrict access to your personal information to those employees,
              contractors, and agents who need to know that information in order to process it on our behalf. They are
              subject to strict contractual confidentiality obligations and may be disciplined or terminated if they
              fail to meet these obligations.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>23. User Feedback and Suggestions</h2>
        <div className="">
          <p>
            We welcome your feedback and suggestions regarding our payment gateway services. If you have any ideas for
            improvements or features you would like to see, please feel free to share them with us.
          </p>
          <ul className="ul-list">
            <li>
              <strong>Use of Feedback: </strong>By submitting feedback or suggestions, you grant DMLearning the right to
              use such feedback for any purpose, including but not limited to improving our services and developing new
              features.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>24. Governing Language</h2>
        <div className="">
          <p>
            These Terms and Conditions are written in English. Any translations of these terms are provided for
            convenience only. In the event of any conflict between the English version and any translation, the English
            version shall prevail.
          </p>
        </div>
        <h2 className={subHeading}>25. Entire Agreement</h2>
        <div className="">
          <p>
            These Terms and Conditions, along with our Privacy Policy, constitute the entire agreement between you and
            DMLearning regarding your use of the payment gateway and supersede any prior agreements or understandings,
            whether written or oral.
          </p>
          <ul className="ul-list">
            <li>
              <strong>Amendments: </strong>No amendment to or modification of these Terms and Conditions will be binding
              unless in writing and signed by an authorized representative of DMLearning.
            </li>
          </ul>
        </div>
        <h2 className={subHeading}>26. Acknowledgment of Understanding</h2>
        <div className="">
          <p>
            By using our payment gateway, you acknowledge that you have read and understood these Terms and Conditions
            and agree to be bound by them. If you do not agree to these terms, you must not use our payment gateway
            services.
          </p>
        </div>
        <h2 className={subHeading}>27. Effective Date</h2>
        <div className="">
          <p>
            These Terms and Conditions are effective as per the date mentioned by DMLearning. We may update these terms
            from time to time, and we encourage you to review them periodically to stay informed about our policies and
            practices.
          </p>
        </div>
        <h2 className={subHeading}>28. Conclusion</h2>
        <div className="">
          <p>
            Thank you for choosing DMLearning as your educational partner. We are committed to providing you with a
            secure and efficient payment experience. If you have any questions or concerns regarding these Terms and
            Conditions or our payment gateway services, please do not hesitate to contact us. Your satisfaction is our
            priority, and we look forward to supporting you in your educational journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
