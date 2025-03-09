import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">
                Last updated: <strong>[Insert Date]</strong>
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p>
                Welcome to our kayak and canoe rental finder ("Service"). Your privacy
                is important to us. This policy explains what data we collect and how we
                use it in accordance with the General Data Protection Regulation (GDPR).
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Data We Collect</h2>
            <p>
                We do not require users to create accounts or provide personal
                information. However, we collect limited data through the following:
            </p>
            <ul className="list-disc pl-6 mt-2">
                <li>
                    <strong>Google Analytics (GA4)</strong>: We use GA4 to collect
                    anonymous usage data such as page views, referral sources, and
                    interactions with rental locations.
                </li>
                <li>
                    <strong>LocalStorage</strong>: We store user-selected favorites
                    locally on your device. This data is not sent to our servers.
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                3. How We Use Your Data
            </h2>
            <p>The data we collect is used for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2">
                <li>Improving the usability of our website.</li>
                <li>Understanding which rental locations receive the most interest.</li>
                <li>Providing a personalized experience through localStorage-based favorites.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                4. Google Analytics & Cookies
            </h2>
            <p>
                We use Google Analytics (GA4) to analyze website traffic. Google may
                collect data such as your IP address and interactions with the site. You
                can opt out via Google's{" "}
                <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-500 underline"
                    target="_blank"
                >
                    opt-out tool
                </a>
                .
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Storage</h2>
            <p>
                We do not store personal data on our servers. Any favorite locations
                saved by users are stored in their browser's localStorage and are not
                accessible by us.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
            <p>
                Under GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2">
                <li>Request access to any personal data we might hold (we don’t store any).</li>
                <li>Request deletion of any stored data (not applicable since we don’t store user data).</li>
                <li>Opt out of Google Analytics tracking.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
            <p>
                We may update this policy from time to time. Changes will be posted on this page with an updated date.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <p className="mt-2">
                <strong>Email:</strong> [Your Contact Email]
            </p>
        </div>
    );
};

export default PrivacyPolicy;
