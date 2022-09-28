import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Nails By Michelle | Contact </title>
        <meta name="contact" content="Nails By Michelle - Contact page" />
        <link rel="icon" href="/nail-polish.svg" />
      </Head>
      <div className="flex">
        <div className="p-4 flex flex-col items-center w-full md:w-2/3 lg:w-2/3 2xl:w-1/3  mt-12 ml-4 mr-4 sm:ml-8 bg-pink-100 rounded-md shadow-lg">
          <h2 className="pl-4 text-xl sm:text-4xl md:text-5xl flex justify-start text-[#787878] font-[montserrat]">
            Opening Hours
          </h2>
          {/* days and times main div */}

          <div className="flex flex-col text-left pt-4 pl-4 mr-4 w-full">
            <div className="flex sm:flex-row">
              <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-2xl pr-2 pt-4 w-1/2 sm:w-1/3">
                Monday:
              </p>
              <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-2xl pt-4">
                09:00 - 19:00
              </p>
            </div>

            <div className="flex sm:flex-row">
              <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-2xl pr-2 pt-4 w-1/2 sm:w-1/3">
                Tueday:
              </p>
              <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-2xl pt-4">
                09:00 - 17:00
              </p>
            </div>

            <div className="flex sm:flex-row">
              <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-2xl pr-2 pt-4 w-1/2 sm:w-1/3">
                Wednesday:
              </p>
              <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-2xl pt-4">
                09:00 - 17:00
              </p>
            </div>

            <div className="flex sm:flex-row">
              <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-2xl pr-2 pt-4 w-1/2 sm:w-1/3">
                Thursday:
              </p>
              <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-2xl pt-4">
                09:00 - 17:00
              </p>
            </div>

            <div className="flex sm:flex-row">
              <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-2xl pr-2 pt-4 w-1/2 sm:w-1/3">
                Friday:
              </p>
              <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-2xl pt-4">
                09:00 - 17:00
              </p>
            </div>

            <div className="flex sm:flex-row">
              <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-2xl pr-2 pt-4 w-1/2 sm:w-1/3">
                Saturday:
              </p>
              <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-2xl pt-4">
                09:30 - 14:00
              </p>
            </div>
            <div className="flex sm:flex-row">
              <p className="font-[montserrat] font-semibold text-[#787878] text-xl sm:text-2xl pr-2 pt-4 w-1/2 sm:w-1/3">
                Sunday:
              </p>
              <p className="font-[montserrat] font-semibold text-[#787878] text-lg sm:text-2xl pt-4">
                Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
