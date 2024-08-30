import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="h-[55vh] border-t-2 shadow-teal-200">
        <h2 className="font-bold md:mt-10 mt-4 md:ml-10 ml-5">Somil Gupta</h2>
        <div className="md:p-10 flex">
          <h2 className="font-bold md:ml-40 ml-5 mt-4">Socials</h2>
          <h2 className="font-bold md:ml-40 ml-20 mt-4">Company</h2>
        </div>
        <div className="flex md:ml-48 mt-3">
          <a href="https://github.com/somilhubhai/">
            <FontAwesomeIcon
              icon={faGithub}
              className="md:size-10 size-6 md:ml-0 ml-5"
            />
          </a>
          <a href="https://www.instagram.com/somilgupta___/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="md:ml-10 ml-5 md:size-10 size-6"
            />
          </a>
          <ul className="md:ml-24  ml-14">
            <li className="text-gray-400 hover:text-white transition-all md:mb-5 mb-3">
              Privacy policy
            </li>
            <li className="text-gray-400 hover:text-white transition-all md:mb-5 mb-3">
              Terms and condition
            </li>
            <li className="text-gray-400 hover:text-white transition-all md:mb-5">
              Refund
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
