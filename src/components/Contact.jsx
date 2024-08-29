const Contact = () => {
  return (
    <>
      <div>
        <div className="flex mt-20 md:text-[3rem] md:px-14 px-5">
          <h2 className="font-bold">Address : </h2>
          <p className="ml-24">New Delhi , Delhi , India</p>
        </div>
        <div className="flex mt-14 md:text-[3rem] px-5 md:px-14">
          <h2 className="font-bold">Conatct me:</h2>
          <p className="md:ml-24 ml-10">somilgupta9801@gmail.com</p>
        </div>
        <p className="md:ml-14 px-5 font-bold mt-14 md:text-[2.8rem]">
          OR, {"  "} Write a Query
        </p>
        <textarea
          name="query"
          id="qyery"
          placeholder="Write a query"
          className="md:ml-14 ml-5 mt-10 bg-white md:w-[30rem] w-72 h-[5rem] font-semibold py-[4px] rounded-md text-black"
        ></textarea>
        <br />
        <button className="hover:bg-gradient-to-br mb-5 mt-5 from-white to-slate-300 font-bold px-4 py-2 rounded ml-14 bg-transparent hover:text-black transition-colors border-2 border-white">
          Send
        </button>
      </div>
    </>
  );
};

export default Contact;
