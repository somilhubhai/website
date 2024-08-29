import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import about from "../assets/about.jpg";
import { useEffect } from "react";
import wealth from "../assets/wealth.jpg";
import education from "../assets/education.jpg";
import risk from "../assets/risk.jpg";
import banking from "../assets/banking.jpg";
import tax from "../assets/tax.jpg";
import chartImg from "../assets/chartImg.png";
import user from "../assets/user.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
 
  useGSAP(() => {
    // cards starts
  gsap.matchMedia().add("(min-width: 768px)", () => {
    gsap.to(".card1", {
      x: 300,
      opacity: 1,
      duration: 1.5,
    });
    gsap.to(".card2", {
      x: -300,
      opacity: 1,
      duration: 1.5,
    });
  });
      
    
    // cards ends

    // lists starts
    gsap.fromTo(
      ".lists",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".lists",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
    // lists ends

    // services headings starts
    gsap.from(".headings", {
      x: -300,
      opacity: 0,
      duration: 1,
    });

    // services headings ends

    // clients starts
    gsap.to(".clients", {
      x: -1900,
      duration: 1.7,
      scrollTrigger: {
        translateX: "translateX(-150%)",
        trigger: ".clients",
        pin: true,
        scrub: 1,
      },
    });
  });

  // clients ends
  useEffect(() => {
    const page = document.querySelector("svg");
    let path = `M 10 100 Q 500 100 990 100`;
    const finalPath = "M 10 100 Q 500 100 990 100";

    const handleMouseMove = (dets) => {
      path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 1,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    page.addEventListener("mousemove", handleMouseMove);
    page.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      page.removeEventListener("mousemove", handleMouseMove);
      page.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="overflow-y-hidden">
      {/* Hero section  */}
      <div className="min-h-screen">
        {/* card1 */}
        <div className="bg-gray-800 md:h-[25rem] md:w-[19rem] w-60 md:mt-24 mt-10 ml-5 card1 animate-none">
          <h2 className="font-semibold leading-7 p-4">
            We are the one who can manage your all financial decisions and will
            help you to achieve success in your life and bring financial
            literacy in your life at one place without any hidden cost. What are
            you waiting for get start with us
          </h2>

          <button className="border-2 ml-4 md:mt-8 px-4 md:py-2 py-1 font-semibold hover:bg-black duration-500 rounded transition-all">
            Get started
          </button>
        </div>
        {/* card1 ends */}

        {/* card2 starts */}
        <div className="bg-gray-800 md:h-[25rem] md:w-[19rem] w-60 absolute md:top-80 top-[28rem] right-2 md:right-10 card2">
          <h2 className="leading-7 font-semibold p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, nisi ducimus. Nam facilis repudiandae facere, animi
            magni incidunt fugiat earum beatae vero quae ullam blanditiis,
            porro, error corporis natus dolorem?
          </h2>
          <button className="border-2 ml-4 md:mt-8 px-4 md:py-2 py-1 font-semibold hover:bg-black duration-500 rounded transition-all">
            Register for free
          </button>
        </div>
        {/* card2 ends */}
      </div>
      {/* Hero section ends */}
      <h2 className="font-bold md:mt-9 text-center md:text-3xl text-2xl">
        Why to Choose us?
      </h2>
      <hr className="w-24 m-auto mt-8" />
      <div className="md:flex block md:mt-20 mt-10 w-full">
        {/* Mobile View */}
        <div className="h-[20rem] md:ml-24 md:h-[25rem] md:w-80 w-72 ml-14 border-2 border-r-4 border-l-4 rounded-md">
          <div className="bg-white h-5 relative flex">
            <div className="absolute md:top-0 md:left-0 md:mt-1 md:ml-20 ml-40 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute md:top-0 md:left-0 md:mt-1 md:ml-24 ml-24 w-10 h-2 bg-gray-600 rounded-full"></div>
          </div>

          <div className="flex justify-center items-center h-[calc(100%-6rem)]">
            {" "}
            <img src={chartImg} alt="chart" />
          </div>
          <div className="bg-white mt-[2.3rem] rounded h-10 relative">
            <div className="absolute top-2 left-2 md:ml-20 ml-28 w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>
        {/* Mobile View ends */}
        <div className="text-center px-8 md:px-24 mt-8">
          <ul className="leading-7 lists">
            <li>
              <b>Decades of Industry Experience:</b> <br /> Our seasoned
              financial experts bring years of industry knowledge, ensuring your
              finances are managed with the highest level of professionalism and
              precision.
            </li>
            <li>
              <b>Tailored Financial Plans:</b> <br /> We understand that every
              client is unique, which is why we create customized financial
              strategies that align with your individual goals and
              circumstances.
            </li>
            <li>
              <b>One-on-One Consultations:</b> <br /> Our advisors take the time
              to understand your needs, offering personalized advice that helps
              you make informed financial decisions.
            </li>
            <li>
              <b>Advanced Financial Tools:</b> <br /> We leverage the latest
              financial technology to provide you with real-time insights,
              secure transactions, and efficient portfolio management.
            </li>
            <li>
              <b> Fiduciary Responsibility:</b> <br /> As fiduciaries, we are
              legally and morally obligated to prioritize your financial
              well-being above all else.
            </li>
          </ul>
        </div>
      </div>

      <svg
        className="page1 m-auto"
        width="1000"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        id="string"
      >
        <path
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          fill="transparent"
        />
      </svg>
      <h2 className="md:text-3xl text-2xl text-center mt-10">About us</h2>
      <hr className="m-auto w-24 mt-5" />
      {/* About us starts */}
      <div className="md:flex block mt-10 px-10">
        <img src={about} alt="about us" className="md:size-1/2 rounded" />
        <div>
          <h2 className="md:ml-[32rem] ml-[14rem] mt-5 text-2xl">About us</h2>
          <hr className="ml-auto w-24 mt-5" />
          <p className="mt-10 text-center px-10">
            At XYZ, we believe that financial success is within everyones reach.
            Founded in XXXX, our mission is to provide comprehensive financial
            solutions that empower individuals and businesses to achieve their
            financial goals with confidence and clarity.
          </p>
          <p className="mt-10 text-center px-10">
            At XYZ, we believe that financial success is within everyones reach.
            Founded in XXXX, our mission is to provide comprehensive financial
            solutions that empower individuals and businesses to achieve their
            financial goals with confidence and clarity.
          </p>
        </div>
      </div>
      {/* About us ends */}
      {/* service section starts */}
      <h2 className="text-4xl text-center md:mb-10 mb-5 md:mt-24 mt-5">
        Our services
      </h2>
      <hr className="m-auto bg-white w-24" />
      <div className="services">
        <div className="md:flex md:px-24 px-10 md:mt-24 mt-10">
          <img src={wealth} alt="wealth" className="md:size-4/12 rounded-sm" />
          <ul className="md:px-5 md:ml-14 leading-7">
            <h2 className="font-bold text-2xl headings">Wealth Management</h2>{" "}
            <br /> <b>Financial Planning:</b> Tailored strategies to achieve
            financial goals, including retirement, education, and estate
            planning. <br /> <b>Investment Management: </b> Managing portfolios
            with a focus on risk tolerance, asset allocation, and investment
            goals. <br /> <b> Tax Planning: </b> Strategies to minimize tax
            liabilities through efficient planning and investments.
          </ul>
        </div>
        <div className="md:flex md:px-24 px-10 md:mt-24 mt-10">
          <ul className="md:px-5 md:ml-14 leading-7">
            <h2 className="font-bold text-2xl">Risk Management</h2> <br />
            {"   "}
            <b>Insurance Solutions:</b> Offering various insurance products such
            as life, health, and property insurance to manage risk. <br />{" "}
            <b>Risk Assessment and Mitigation: </b> Identifying, assessing, and
            mitigating financial risks, including market, credit, and
            operational risks. <br /> <b> Hedging Strategies: </b> Use of
            financial instruments to protect against adverse price movements in
            currencies, commodities, or interest rates.
          </ul>
          <img src={risk} alt="risk" className="md:size-4/12 mt-5 rounded-sm" />
        </div>
        <div className="md:flex md:px-24 md:mt-24 mt-10 px-10">
          <img src={tax} alt="tax" className="md:size-4/12 rounded-sm" />
          <ul className="md:px-5 md:ml-14 leading-7">
            <h2 className="font-bold text-2xl md:mt-0 mt-3">Tax Services</h2>{" "}
            <br /> <b>Tax Preparation:</b> Preparing and filing tax returns for
            individuals and businesses. <br /> <b>Tax Advisory: </b> Strategic
            advice on tax planning and compliance with local and international
            tax laws. <br /> <b> Audit Support: </b> Assistance during tax
            audits, including representation before tax authorities.
          </ul>
        </div>
        <div className="md:flex md:px-24 px-10 md:mt-24 mt-10">
          <ul className="md:px-5 14 leading-7">
            <h2 className="font-bold text-2xl md:mt-0 mt-3">
              {" "}
              Private Banking
            </h2>{" "}
            <br />
            {"   "}
            <b>Personalized Banking Services: </b> Tailored services for
            high-net-worth individuals, including concierge banking and
            exclusive credit cards. <br /> <b>Investment Solutions: </b> Custom
            investment strategies, including access to alternative investments
            like private equity and hedge funds. <br />{" "}
            <b> Lifestyle Services: </b> Additional services such as travel
            planning, luxury concierge services, and estate management.
          </ul>
          <img
            src={banking}
            alt="banking"
            className="md:size-4/12 rounded-sm"
          />
        </div>
        <div className="md:flex md:px-24 px-10 md:mt-24 mt-10">
          <img
            src={education}
            alt="education"
            className="md:size-4/12 rounded-sm"
          />
          <ul className="md:px-5 md:ml-14 leading-7">
            <h2 className="font-bold text-2xl md:mt-0 mt-3">
              {" "}
              Financial Education
            </h2>{" "}
            <br /> <b>Workshops and Seminars: </b> Offering educational sessions
            on financial literacy, investment strategies, and retirement
            planning. <br /> <b>Online Resources: </b> Providing blogs,
            webinars, and tutorials on various financial topics. <br />{" "}
            <b> Personal Finance Tools: </b> Tools like budgeting apps,
            calculators, and investment simulators to help clients manage their
            finances.
          </ul>
        </div>
      </div>
      {/* service section ends */}

      {/* client section starts */}
      <h2 className="md:text-3xl text-2xl md:mt-14 mt-10 text-center">
        What our clients wants to say
      </h2>
      <hr className="m-auto w-40 mt-10" />
      <div className="flex clients mt-10">
        <div className="shadow-xl size-3/12 h-96 px-7 mt-8 ml-10 shadow-white min-w-72">
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum minima sit exercitationem qui veritatis provident sequi
            tempore dicta, consequuntur quam et tenetur optio nesciunt placeat
            odit! Culpa, maiores distinctio.
          </p>
          <img
            src={user}
            alt="user-img"
            className="rounded-full size-12 ml-auto mt-5"
          />
          <p className="text-end"> XYZ designation</p>
        </div>
        <div className="shadow-xl size-3/12 px-7 h-96 mt-8 ml-20 md:ml-40 shadow-white min-w-72">
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum minima sit exercitationem qui veritatis provident sequi
            tempore dicta, consequuntur quam et tenetur optio nesciunt placeat
            odit! Culpa, maiores distinctio.
          </p>
          <img
            src={user}
            alt="user-img"
            className="rounded-full size-12 ml-auto mt-5"
          />
          <p className="text-end"> XYZ designation</p>
        </div>{" "}
        <div className="shadow-xl size-3/12 px-7 h-96 mt-8 ml-20 md:ml-40 shadow-white min-w-72">
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum minima sit exercitationem qui veritatis provident sequi
            tempore dicta, consequuntur quam et tenetur optio nesciunt placeat
            odit! Culpa, maiores distinctio.
          </p>
          <img
            src={user}
            alt="user-img"
            className="rounded-full size-12 ml-auto mt-5"
          />
          <p className="text-end"> XYZ designation</p>
        </div>{" "}
        <div className="shadow-xl size-3/12 px-7 mt-8 h-96 ml-20 md:ml-40 shadow-white min-w-72">
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum minima sit exercitationem qui veritatis provident sequi
            tempore dicta, consequuntur quam et tenetur optio nesciunt placeat
            odit! Culpa, maiores distinctio.
          </p>
          <img
            src={user}
            alt="user-img"
            className="rounded-full size-12 ml-auto mt-5"
          />
          <p className="text-end"> XYZ designation</p>
        </div>{" "}
        <div className="shadow-xl size-3/12 px-7 mt-8 ml-20 md:ml-40 h-96 shadow-white min-w-72">
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum minima sit exercitationem qui veritatis provident sequi
            tempore dicta, consequuntur quam et tenetur optio nesciunt placeat
            odit! Culpa, maiores distinctio.
          </p>
          <img
            src={user}
            alt="user-img"
            className="rounded-full size-12 ml-auto mt-5"
          />
          <p className="text-end"> XYZ designation</p>
        </div>{" "}
        <div className="shadow-xl size-3/12 px-7 mt-8 ml-20 md:ml-40 h-96 shadow-white min-w-72">
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum minima sit exercitationem qui veritatis provident sequi
            tempore dicta, consequuntur quam et tenetur optio nesciunt placeat
            odit! Culpa, maiores distinctio.
          </p>
          <img
            src={user}
            alt="user-img"
            className="rounded-full size-12 ml-auto mt-5"
          />
          <p className="text-end"> XYZ designation</p>
        </div>{" "}
        <div className="shadow-xl size-3/12 px-7 mt-8 ml-20 md:ml-40 h-96 shadow-white min-w-72">
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum minima sit exercitationem qui veritatis provident sequi
            tempore dicta, consequuntur quam et tenetur optio nesciunt placeat
            odit! Culpa, maiores distinctio.
          </p>
          <img
            src={user}
            alt="user-img"
            className="rounded-full size-12 ml-auto mt-5"
          />
          <p className="text-end"> XYZ designation</p>
        </div>
      </div>
      {/* client section ends */}
    </div>
  );
};

export default Home;
