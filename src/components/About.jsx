import { useGSAP } from "@gsap/react";
import about from "../assets/aboutPage.webp";
import missions from "../assets/missions.webp";
import values from "../assets/values.webp";
import gsap from "gsap";

const tl = gsap.timeline();

const About = () => {
  useGSAP(() => {
     gsap.matchMedia().add("(min-width: 768px)", () => {
       tl.from(".card1", {
         x: -100,
         delay: 0.5,
         duration: 1,
         opacity: 0,
       });
       tl.from(".card2", {
         y: -100,
         duration: 1,
         opacity: 0,
       });
     });
     gsap.from(".values" , {
      scrollTrigger : {
        x : 300,
        opacity : 0,
        duration : 1.5,
      }
     })
    gsap.from(".lists" , {
      x : -500,
    })
  });
  return (
    <>
      <div className="md:flex md:px-24 mt-10">
        <div className="shadow-xl px-10 py-5 shadow-slate-400 md:h-[29rem] md:w-[35rem] rounded-md card1">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="font-semibold mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae eos autem laboriosam, sequi, tenetur doloribus modi
            possimus natus earum veniam enim architecto corrupti tempora
            molestias ducimus optio nulla veritatis? Eius!
          </p>
          <p className="font-semibold mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae eos autem laboriosam, sequi, tenetur doloribus modi
            possimus natus earum veniam enim architecto corrupti tempora
            molestias ducimus optio nulla veritatis? Eius!
          </p>
        </div>
        <div className="w-[35rem] shadow-xl shadow-slate-400 py-5 md:px-10 md:mt-0 mt-5 md:ml-auto card2 rounded-md">
          <img
            src={about}
            alt="about"
            className="md:min-w-96 w-72 rounded-md md:ml-5 ml-4 "
          />
          <div className="flex">
            <div className="rounded-sm p-2 h-12 w-32 bg-gray-300 ml-10 mt-10">
              <p className="text-black font-semibold">20+ Branches</p>
            </div>
            <div className="rounded-sm py-2 px-1 h-12 w-32 bg-gray-300 md:ml-24 ml-5 mt-10">
              <p className="text-black font-semibold">10K+ Projects</p>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="rounded-sm px-4 h-12 w-32 bg-gray-300 ml-10">
              <p className="text-black font-semibold">10+year experience</p>
            </div>
            <div className="rounded-sm px-4 h-12 w-32 bg-gray-300 md:ml-24 ml-5">
              <p className="text-black font-semibold">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="md:text-[10rem] text-[5rem] text-center mt-10 bg-clip-text text-transparent animate-pulse bg-gradient-to-tl from-purple-500 via-blue-600 to-yellow-200">
        We Care
      </h2>

      {/* about history starts */}
      <h2 className="text-center md:text-4xl text-3xl md:mt-20 mt-10">
        Our Legacy
      </h2>
      <hr className="w-24 m-auto mt-5" />
      <div className="text-center md:px-24 px-5 mt-5">
        <p className="md:mt-10 md:text-xl text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsum nostrum culpa vel architecto facilis cum veniam recusandae
          saepe, voluptatem voluptates nam temporibus ut unde iure. Voluptas
          officia at a. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Veritatis tenetur optio sed blanditiis, nostrum eveniet. Natus
          esse, dolore facere eligendi, obcaecati quisquam qui magni, omnis
          doloribus cum praesentium libero cupiditate.
        </p>
        <p className="md:mt-5 md:text-xl text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsum nostrum culpa vel architecto facilis cum veniam recusandae
          saepe, voluptatem voluptates nam temporibus ut unde iure. Voluptas
          officia at a. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Veritatis tenetur optio sed blanditiis, nostrum eveniet. Natus
          esse, dolore facere eligendi, obcaecati quisquam qui magni, omnis
          doloribus cum praesentium libero cupiditate.
        </p>
      </div>
      {/* about history ends */}
      <h2 className="text-3xl text-center mt-10 font-bold">Our Missions</h2>
      <hr className="w-24 m-auto mt-5" />
      {/* mission starts */}
      <div className="shadow-xl shadow-blue-600 md:animate-pulse mt-8 p-8 md:flex block">
        <img src={missions} alt="missions" className="md:size-1/2 rounded-md" />
        <div>
          <p className="font-semibold text-center px-4 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            molestiae repellat maiores quod ratione provident laudantium
            corporis quae rem! Ipsa, consectetur beatae. Eveniet nostrum non a
            commodi dolor vel ea.
          </p>
          <p className="font-semibold text-center px-4 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            molestiae repellat maiores quod ratione provident laudantium
            corporis quae rem! Ipsa, consectetur beatae. Eveniet nostrum non a
            commodi dolor vel ea.
          </p>
          <p className="font-semibold text-center px-4 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            molestiae repellat maiores quod ratione provident laudantium
            corporis quae rem! Ipsa, consectetur beatae. Eveniet nostrum non a
            commodi dolor vel ea.
          </p>
        </div>
      </div>
      {/* missions ends */}
      <h2 className="text-3xl text-center mt-10 font-bold">Our values</h2>
      <hr className="w-24 m-auto mt-5" />
      {/* values section starts */}
      <div className="md:flex mt-10 md:px-5 py-8 px-8 values">
        <ul className="mt-10 lists">
          <li className="mb-5 ">
            <b>Integrity:</b> We uphold the highest standards of honesty and
            transparency in all our dealings, ensuring that our clients can
            trust us with their most important financial matters.
          </li>
          <li className="mb-5">
            <b>Excellence:</b> We are committed to delivering superior services
            through continuous improvement, innovation, and a relentless focus
            on quality.
          </li>
          <li className="mb-5">
            <b>Client-Centricity:</b> Our clients are at the heart of everything
            we do. We listen, understand, and adapt to your needs, providing
            solutions that truly align with your goals.
          </li>
          <li className="mb-5">
            <b>Collaboration:</b> We believe in the power of teamwork, working
            closely with our clients and within our organization to achieve the
            best possible outcomes.
          </li>
          <li className="mb-5">
            <b>Innovation:</b> We embrace change and strive to stay ahead by
            adopting the latest technologies and methodologies in the financial
            sector.
          </li>
        </ul>
        <img src={values} alt="values" className="rounded-sm md:size-1/2" />
      </div>
      {/* values section ends */}
    </>
  );
};

export default About;
