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
        <div className="flex flex-col items-center w-1/3 h-[400px] mt-12 ml-12 bg-pink-100 rounded-md shadow-lg">
          <h2 className="text-5xl font-[raleway] flex justify-start text-[#787878]">
            Opening Hours
          </h2>
          {/* days and times main div */}
          <div className="flex flex-col text-left pt-4 pl-4 w-full">
            <div className="flex flex-col sm:flex-row">
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pr-2 pt-4 w-1/3">
                Monday:
              </p>
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pt-4">
                09:00 - 19:00
              </p>
            </div>

            <div className="flex">
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pr-2 pt-4 w-1/3">
                Tueday:
              </p>
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pt-4">
                09:00 - 19:00
              </p>
            </div>

            <div className="flex">
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pr-2 pt-4 w-1/3">
                Wednesday:
              </p>
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pt-4">
                09:00 - 19:00
              </p>
            </div>

            <div className="flex">
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pr-2 pt-4 w-1/3">
                Thursday:
              </p>
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pt-4">
                09:00 - 19:00
              </p>
            </div>

            <div className="flex">
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pr-2 pt-4 w-1/3">
                Friday:
              </p>
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pt-4">
                09:00 - 19:00
              </p>
            </div>

            <div className="flex">
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pr-2 pt-4 w-1/3">
                Saturday:
              </p>
              <p className="font-[raleway] font-semibold text-[#787878] text-2xl pt-4">
                09:00 - 19:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
