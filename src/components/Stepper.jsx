import { BsCheckLg } from "react-icons/bs";

const Stepper = () => {
  return (
    <>
      <div className="container mx-auto flex gap-x-4 justify-center md:justify-start">
        <p className="text-[#f76d00] border-b-2 font-medium text-base border-[#f76d00]">
          overview
        </p>
        <p className="font-medium text-base">Booking</p>
      </div>

      <div className="bg-[#fafafa]">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap px-5 md px-32 ">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-[2px] bg-[#f76d00] pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f76d00] inline-flex items-center justify-center text-white relative z-10">
                    <BsCheckLg />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Request received
                    </h2>
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Urna elit
                      tincidunt vestibulum sapien sagittis lacus elit sit.
                      Turpis phasellus viverra donec mus fermentum sagittis
                      blandit. Rhoncus at enim neque varius sed arcu praesent.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-[2px] bg-[#f76d00] pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f76d00] inline-flex items-center justify-center text-white relative z-10">
                    <BsCheckLg />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Patient booking & payment
                    </h2>
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Urna elit
                      tincidunt vestibulum sapien sagittis lacus elit sit.
                      Turpis phasellus viverra donec mus fermentum sagittis
                      blandit. Rhoncus at enim neque varius sed arcu praesent.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-[2px] bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black inline-flex items-center justify-center text-white relative z-10">
                    3
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Video call with patient
                    </h2>
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Urna elit
                      tincidunt vestibulum sapien sagittis lacus elit sit.
                      Turpis phasellus viverra donec mus fermentum sagittis
                      blandit. Rhoncus at enim neque varius sed arcu praesent.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-[2px] bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full text-black bg-white border inline-flex items-center justify-center  relative z-10">
                    4
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className=" title-font text-lg text-gray-900 mb-1 tracking-wider font-bold">
                      Medications sent to the patient
                    </h2>
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Urna elit
                      tincidunt vestibulum sapien sagittis lacus elit sit.
                      Turpis phasellus viverra donec mus fermentum sagittis
                      blandit. Rhoncus at enim neque varius sed arcu praesent.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full text-black bg-white border inline-flex items-center justify-center relative z-10">
                    5
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Completed
                    </h2>
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Urna elit
                      tincidunt vestibulum sapien sagittis lacus elit sit.
                      Turpis phasellus viverra donec mus fermentum sagittis
                      blandit. Rhoncus at enim neque varius sed arcu praesent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Stepper;
