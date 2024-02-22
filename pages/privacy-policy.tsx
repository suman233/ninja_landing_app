import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const TermsWrapper = styled(Box)`
  .title_block {
    padding: 300px 0 50px;
    @media (max-width: 899px) {
      padding: 180px 0 100px;
    }
  }
  .terms_content {
    h2 {
      margin-bottom: 35px;
    }
    p {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      a {
        color: ${primaryColors.primary};
      }
    }
  }
  .heading2 {
    font-size: 40px;
  }
  h3 {
    margin-bottom: 10px;
  }
  ul {
    list-style: disc;
    padding-left: 40px;
    margin-bottom: 30px;
    li {
      list-style: disc;
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <Container fixed>
        <TermsWrapper>
          <Box className="title_block">
            <Typography variant="h1">
              Privacy{" "}
              <Typography variant="caption" className="red_span">
                Policy
              </Typography>
            </Typography>
          </Box>
          <Box className="terms_content">
            <Typography>
              Effective date: Jan 1 2024 <br></br> The Abundant Kindness Trust,
              located at 439 Westwood Shopping Center Suite 427 (“us”, “we”, or
              “our”) operates the https://www.outdoors.ninja website (the
              “Service”).
            </Typography>
            <Typography variant="body1">
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </Typography>
            <Typography variant="body1">
              We use your data to provide and improve the Service. By using the
              Service, you agree to the collection and use of information in
              accordance with this policy. Unless otherwise defined in this
              Privacy Policy, terms used in this Privacy Policy have the same
              meanings as in our Terms and Conditions, accessible from{" "}
              <Link href="https://www.outdoors.ninja">
                https://www.outdoors.ninja
              </Link>
            </Typography>
            <p>
              Information Collection And Use <br></br> We collect several
              different types of information for various purposes to provide and
              improve our Service to you.
            </p>
            <p>
              Types of Data Collected
              <br></br>
              Personal Data
              <br></br>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you (“Personal Data”). Personally identifiable
              information may include, but is not limited to:
              <br></br>
              Email address <br></br>
              First name and last name
              <br></br>
              Phone number
              <br></br>
              Address, State, Province, ZIP/Postal code, City
              <br></br>
              Cookies and Usage Data
              <br></br>
              Usage Data
            </p>
            <p>
              We may also collect information on how the Service is accessed and
              used (“Usage Data”). This Usage Data may include information such
              as your computer’s Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of our Service that you
              visit, the time and date of your visit, the time spent on those
              pages, unique device identifiers and other diagnostic data.
            </p>
            <p>
              Tracking & Cookies Data <br></br> We use cookies and similar
              tracking technologies to track the activity on our Service and
              hold certain information.
            </p>
            <p>
              Cookies are files with a small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Tracking technologies also
              used are beacons, tags, and scripts to collect and track
              information and to improve and analyze our Service. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you do not accept cookies, you
              may not be able to use some portions of our Service.
            </p>
            <p>
              Examples of Cookies we use: <br></br>
              Session Cookies. We use Session Cookies to operate our Service.
              Preference Cookies. We use Preference Cookies to remember your
              preferences and various settings.
              <br></br>
              Security Cookies. We use Security Cookies for security purposes.
            </p>
            <p>
              Use of Data
              <br></br>
              The Abundant Kindness Trust uses the collected data for various
              purposes:
              <br></br>
              To provide and maintain the Service
              <br></br>
              To notify you about changes to our Service
              <br></br>
              To allow you to participate in interactive features of our Service
              when you choose to do so
              <br></br>
              To provide customer care and support
              <br></br>
              To provide analysis or valuable information so that we can improve
              the Service
              <br></br>
              To monitor the usage of the Service
              <br></br>
              To detect, prevent and address technical issues
            </p>
            <p>
              Transfer Of Data
              <br></br>
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ than those from your jurisdiction.
            </p>
            <p>
              If you are located outside United States and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>
            <p>
              The Abundant Kindness Trust will take all steps reasonably
              necessary to ensure that your data is treated securely and in
              accordance with this Privacy Policy and no transfer of your
              Personal Data will take place to an organization or a country
              unless there are adequate controls in place including the security
              of your data and other personal information.
              <br></br>
              Disclosure Of Data
              <br></br>
              Legal Requirements
            </p>
            <p>
              The Abundant Kindness Trust may disclose your Personal Data in the
              good faith belief that such action is necessary to:
              <br></br>
              To comply with a legal obligation
              <br></br>
              To protect and defend the rights or property of The Abundant
              Kindness Trust
              <br></br>
              To prevent or investigate possible wrongdoing in connection with
              the Service
              <br></br>
              To protect the personal safety of users of the Service or the
              public
              <br></br>
              To protect against legal liability
            </p>
            <p>
              {" "}
              Security Of Data
              <br></br>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
            <p>
              Service Providers
              <br></br>
              We may employ third party companies and individuals to facilitate
              our Service (“Service Providers”), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used. These third parties have access
              to your Personal Data only to perform these tasks on our behalf
              and are obligated not to disclose or use it for any other purpose.
              <br></br>
              Analytics
            </p>
            <p>
              We may use third-party Service Providers to monitor and analyze
              the use of our Service.
              <br></br>
              Google Analytics
              <br></br>
              Google Analytics is a web analytics service offered by Google that
              tracks and reports website traffic. Google uses the data collected
              to track and monitor the use of our Service. This data is shared
              with other Google services. Google may use the collected data to
              contextualize and personalize the ads of its own advertising
              network.
            </p>
            <p>
              You can opt-out of having made your activity on the Service
              available to Google Analytics by installing the Google Analytics
              opt-out browser add-on. The add-on prevents the Google Analytics
              JavaScript (ga.js, analytics.js, and dc.js) from sharing
              information with Google Analytics about visits activity. For more
              information on the privacy practices of Google, please visit the
              Google Privacy & Terms web page:{" "}
              <Link href="https://policies.google.com/privacy?hl=en">
                https://policies.google.com/privacy?hl=en
              </Link>
            </p>
            <p>
              Links To Other Sites
              <br></br>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party’s site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over
              and assume no responsibility for the content, privacy policies or
              practices of any third party sites or services. Children’s Privacy
            </p>
            <p>
              Our Service does not address anyone under the age of 18
              (“Children”). We do not knowingly collect personally identifiable
              information from anyone under the age of 18. If you are a parent
              or guardian and you are aware that your Children have provided us
              with Personal Data, please contact us. If we become aware that we
              have collected Personal Data from children without verification of
              parental consent, we take steps to remove that information from
              our servers.
            </p>
            <p>
              Changes To This Privacy Policy
              <br></br>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update the
              “effective date” at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page. Contact Us
              <br></br>
              If you have any questions about this Privacy Policy, please
              contact us:
              <br></br>
              By email: support@outdoors.ninja
            </p>
          </Box>
        </TermsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Index;
