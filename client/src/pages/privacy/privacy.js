import React from "react";
import Container from "../../components/Container";
import useBodyClass from "../../hooks/useBodyClass";

const Terms = () => {
  useBodyClass("p-article");

  return (
    <article className="p-article-box">
      <Container article>
        <h1>Privacy Policy</h1>
        <span className="el-h8-medium">This AGREEMENT was last UPDATED on August 5th 2023</span>

        <p>
          At Golden Reserve Hub, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and sharing of your information when you use our website and services. By accessing or using our services, you consent to the terms of this Privacy Policy.
        </p>

        <h5>1. Information We Collect</h5>

        <p>We may collect the following types of information:</p>

        <ul>
          <li>
            <strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and other contact details when you register for an account or contact us directly.
          </li>
          <li>
            <strong>Log Files:</strong> Like many websites, we use log files to gather certain information automatically. This may include your IP address, browser type, Internet Service Provider (ISP), date and time of access, referring/exit pages, and the number of clicks. This information is used for analyzing trends, administering the site, and improving our services. It is not linked to personally identifiable information.
          </li>
          <li>
            <strong>Cookies and Web Beacons:</strong> We use cookies to store information such as visitors' preferences and the pages accessed. Cookies enhance your user experience by customizing web page content based on your browser type and other information.
          </li>
        </ul>

        <h5>2. How We Use Your Information</h5>

        <p>We use the information we collect for various purposes, including but not limited to:</p>

        <ul>
          <li>Providing and Maintaining our Website: We use your information to operate and maintain our website.</li>
          <li>Improving and Personalizing our Services: We analyze how you use our website to enhance and personalize your experience.</li>
          <li>Communication: We may contact you directly or through partners for customer service, updates, marketing, and promotional purposes.</li>
          <li>Preventing Fraud: We use information to find and prevent fraudulent activities.</li>
        </ul>

        <h5>3. Security</h5>

        <p>We prioritize the security of your information and take appropriate measures to protect it. Our website uses dedicated servers to ensure the security of data transmission.</p>

        <h5>4. Third-Party Privacy Policies</h5>

        <p>Our Privacy Policy does not apply to third-party advertisers or websites. We encourage you to review the respective Privacy Policies of these third-party entities.</p>

        <h5>5. Compliance with Regulations</h5>

        <p>Our vaults and strong rooms are constructed to meet certification standards, including the European standard EN-1143-1, offering enhanced burglary protection for your assets.</p>

        <h5>6. Your Privacy Rights</h5>

        <p>Depending on your location and applicable regulations, you may have certain privacy rights, including the right to access, rectify, erase, restrict processing, object to processing, and data portability. If you wish to exercise these rights, please contact us.</p>

        <h5>7. Children's Information</h5>

        <p>Golden Reserve Hub does not knowingly collect personal information from children under the age of 13. If you believe that a child has provided us with their information, please contact us, and we will promptly remove such information from our records.</p>

      </Container>
    </article>
  );

};

export default Terms;
