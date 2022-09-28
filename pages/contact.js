import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nails By Michelle | Contact </title>
        <meta name="contact" content="Nails By Michelle - Contact page" />
        <link rel="icon" href="/nail-polish.svg" />
      </Head>
      {/* Parent Div for opening hours and contact details that controls flex direction for responsiveness */}
      <div className="flex">
        {/* Opening hourse Card */}
        <div className="flex">
          <div className="p-4 flex flex-col items-center w-full md:w-2/3 lg:w-2/3 2xl:w-1/3  mt-12 ml-4 mr-4 sm:ml-8 bg-pink-100 rounded-md shadow-lg">
            <h2 className="pl-4 text-xl sm:text-4xl flex justify-start text-[#787878] font-[montserrat]">
              Opening Hours
            </h2>
            {/* days and times main div */}
            <div className="flex flex-col text-left pt-4 pl-4 mr-4 w-full">
              <div className="flex sm:flex-row">
                <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-xl pr-2 pt-4 w-1/2 sm:w-1/3">
                  MONDAY:
                </p>
                <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-xl 2xl:pl-2 pt-4">
                  09:00 - 19:00
                </p>
              </div>

              <div className="flex sm:flex-row">
                <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-xl pr-2 pt-4 w-1/2 sm:w-1/3">
                  TUESDAY:
                </p>
                <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-xl 2xl:pl-2 pt-4">
                  09:00 - 17:00
                </p>
              </div>

              <div className="flex sm:flex-row">
                <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-xl pr-3 pt-4 w-1/2 sm:w-1/3">
                  WEDNESDAY:
                </p>
                <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-xl 2xl:pl-2 pt-4">
                  09:00 - 17:00
                </p>
              </div>

              <div className="flex sm:flex-row">
                <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-xl pr-2 pt-4 w-1/2 sm:w-1/3">
                  THURSDAY:
                </p>
                <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-xl 2xl:pl-2 pt-4">
                  09:00 - 17:00
                </p>
              </div>

              <div className="flex sm:flex-row">
                <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-xl pr-2 pt-4 w-1/2 sm:w-1/3">
                  FRIDAY:
                </p>
                <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-xl pt-4 2xl:pl-2">
                  09:00 - 17:00
                </p>
              </div>

              <div className="flex sm:flex-row">
                <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-xl pr-2 pt-4 w-1/2 sm:w-1/3">
                  SATURDAY:
                </p>
                <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-xl 2xl:pl-2 pt-4">
                  09:30 - 14:00
                </p>
              </div>
              <div className="flex sm:flex-row">
                <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-xl pr-2 pt-4 w-1/2 sm:w-1/3">
                  SUNDAY:
                </p>
                <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-xl 2xl:pl-2 pt-4">
                  Closed
                </p>
              </div>
            </div>
          </div>
          {/* Contact details Div */}
          <div className="w-1/2 mt-12 p-4 rounded-md bg-gray-200 shadow-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quas ipsa ducimus aspernatur, incidunt voluptas
              dolor, assumenda libero obcaecati nulla mollitia sequi nemo
              recusandae non blanditiis itaque cumque repudiandae similique.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
