import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalImage from "react-modal-image";

const Home = () => {
  const navigate = useNavigate();

  const [activeRover, setActiveRover] = useState(1);
  const handleSeeMoreClick = () => {
    navigate(`/nasa-homepage`);
  };

  const toggleRoverDetails = (roverId) => {
    setActiveRover(roverId === activeRover ? null : roverId);
  };

  return (
    <div>
      <div className="p-2 xl:p-4">
        <div className="grid lg:grid-cols-2 rounded-[20px] min-h-[80vh] w-full bg-black bg-opacity-[80%] border border-gray-500 gap-8">
          <div className="h-full w-full">
            <ModalImage
              small="https://apod.nasa.gov/apod/image/2404/GKPerWide_DSC_960.jpg"
              large="https://apod.nasa.gov/apod/image/2404/GKPerWide_DSC_960.jpg"
              alt="Title goes here"
              hideDownload={true}
              hideZoom={false}
              hideRotate={false}
              className="rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-r-[0px] w-full h-full lg:h-[80vh] object-cover"
            />
          </div>
          <div className="h-full w-full flex flex-row items-center xl:pl-16 xl:pr-24 relative lg:py-8 p-2 py-4">
            <div class="hidden xl:flex absolute top-[50%] right-0 -rotate-90">
              <span class="text">View Past Days</span>
            </div>

            <div className="flex flex-col gap-5 justify-start items-start">
              <div className="text-white text-md uppercase">
                Picture of the day
              </div>
              <div className="text-white text-[40px] text-start">
                Title of the Picture
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="text-[14px]">2024-04-23</div>
                <div className="">
                  <div className="w-[6px] h-[5px] bg-white rounded-full"></div>
                </div>
                <div className="text-[14px]">Deep Sky Collective</div>
              </div>
              <div className="text-start text-[16px]">
                The star system GK Per is known to be associated with only two
                of the three nebulas pictured. At 1500 light years distant, Nova
                Persei 1901 (GK Persei) was the second closest nova yet
                recorded. At the very center is a white dwarf star, the
                surviving core of a former Sun-like star. It is surrounded by
                the circular Firework nebula, gas that was ejected by a
                thermonuclear explosion on the white dwarf's surface -- a nova
                -- as recorded in 1901. The red glowing gas surrounding the
                Firework nebula is the atmosphere that used to surround the
                central star. This gas was expelled before the nova and appears
                as a diffuse planetary nebula. The faint gray gas running across
                is interstellar cirrus that seems to be just passing through
                coincidently. In 1901, GK Per's nova became brighter than
                Betelgeuse. Similarly, star system T CrB is expected to erupt in
                a nova later this year, but we don't know exactly when nor how
                bright it will become.
              </div>
              <div class="xl:hidden">
                <span class="text">View Past Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="text-white text-[48px] text-start">
          Explore Mars Rover Photos
        </div>
        <div className="text-[16px]">
          Select a rover to see more information
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col items-center gap-4">
            <div
              id="rover-name-1"
              className={`p-4 border bg-black hover:bg-[#202020] border-[#303030] rounded-[20px] w-full ${
                activeRover === 1 ? "border-[#37B535]" : ""
              }`}
              onClick={() => toggleRoverDetails(1)}
            >
              <div className="text-white text-[24px] text-start">Curiosity</div>
            </div>

            <div
              id="rover-name-2"
              className={`p-4 border bg-black hover:bg-[#202020] border-[#303030] rounded-[20px] w-full ${
                activeRover === 2 ? "border-[#37B535]" : ""
              }`}
              onClick={() => toggleRoverDetails(2)}
            >
              <div className="text-white text-[24px] text-start">
                Perseverance
              </div>
            </div>

            <div
              id="rover-name-3"
              className={`p-4 border bg-black hover:bg-[#202020] border-[#303030] rounded-[20px] w-full ${
                activeRover === 3 ? "border-[#37B535]" : ""
              }`}
              onClick={() => toggleRoverDetails(3)}
            >
              <div className="text-white text-[24px] text-start">
                Opportunity
              </div>
            </div>
          </div>


          {/* Detail Cards */}
          <div
            id="rover-details-1"
            className={`w-full rounded-[20px] bg-black border border-gray-500 ${activeRover === 1 ? '' : 'hidden'}`}
          >
            <div className="flex justify-between items-center p-8">
              <div className="text-white text-[32px] font-bold text-start">
                Curiosity
              </div>
              <div className="">
                <div className="flex flex-row gap-2 items-center">
                  <div className="">
                    <div className="rounded-full h-[10px] w-[10px] bg-[#37B535]"></div>
                  </div>
                  <div className="">Active</div>
                </div>
                {/* <div className="flex flex-row gap-2 items-center">
                  <div className="">
                    <div className="rounded-full h-[10px] w-[10px] bg-[#B53535]"></div>
                  </div>
                  <div className="">Inactive</div>
                </div> */}
              </div>
            </div>

            <div className="h-[300px] w-full">
              <img
                src="https://th.bing.com/th?id=OSK.HEROXd0DfgkKmT_N9cSl7tXGQTof9Gk9SmEKa-RGkvD27Vk&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM"
                alt=""
                className="object-cover w-full h-[300px]"
              />
            </div>

            <div className="grid grid-cols-6 gap-4 p-8">
              <div className="col-span-4">
                Curiosity is a car-sized Mars rover exploring Gale
                crater and Mount Sharp on Mars as part of NASA's Mars Science
                Laboratory (MSL) mission.
              </div>
              <div className="col-span-2 flex justify-end w-full">
                <div className="">
                  <button
                    onClick={handleSeeMoreClick}
                    className="bg-white text-black font-bold py-2 px-4 rounded-full h-fit-content"
                  >
                    View Photos
                  </button>
                </div>
              </div>
              <div className="col-span-6 flex flex-col gap-4">
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="rover-details-2"
            className={`w-full rounded-[20px] bg-black border border-gray-500 ${activeRover === 2 ? '' : 'hidden'}`}
          >
            <div className="flex justify-between items-center p-8">
              <div className="text-white text-[32px] font-bold text-start">
                Perseverance
              </div>
              <div className="">
                <div className="flex flex-row gap-2 items-center">
                  <div className="">
                    <div className="rounded-full h-[10px] w-[10px] bg-[#37B535]"></div>
                  </div>
                  <div className="">Active</div>
                </div>
                {/* <div className="flex flex-row gap-2 items-center">
                  <div className="">
                    <div className="rounded-full h-[10px] w-[10px] bg-[#B53535]"></div>
                  </div>
                  <div className="">Inactive</div>
                </div> */}
              </div>
            </div>

            <div className="h-[300px] w-full">
              <img
                src="https://th.bing.com/th?id=OSK.HEROXd0DfgkKmT_N9cSl7tXGQTof9Gk9SmEKa-RGkvD27Vk&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM"
                alt=""
                className="object-cover w-full h-[300px]"
              />
            </div>

            <div className="grid grid-cols-6 gap-4 p-8">
              <div className="col-span-4">
                Curiosity is a car-sized Mars rover exploring Gale
                crater and Mount Sharp on Mars as part of NASA's Mars Science
                Laboratory (MSL) mission.
              </div>
              <div className="col-span-2 flex justify-end w-full">
                <div className="">
                  <button
                    onClick={handleSeeMoreClick}
                    className="bg-white text-black font-bold py-2 px-4 rounded-full h-fit-content"
                  >
                    View Photos
                  </button>
                </div>
              </div>
              <div className="col-span-6 flex flex-col gap-4">
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="rover-details-3"
            className={`w-full rounded-[20px] bg-black border border-gray-500 ${activeRover === 3 ? '' : 'hidden'}`}
          >
            <div className="flex justify-between items-center p-8">
              <div className="text-white text-[32px] font-bold text-start">
                Opportunity
              </div>
              <div className="">
                <div className="flex flex-row gap-2 items-center">
                  <div className="">
                    <div className="rounded-full h-[10px] w-[10px] bg-[#37B535]"></div>
                  </div>
                  <div className="">Active</div>
                </div>
                {/* <div className="flex flex-row gap-2 items-center">
                  <div className="">
                    <div className="rounded-full h-[10px] w-[10px] bg-[#B53535]"></div>
                  </div>
                  <div className="">Inactive</div>
                </div> */}
              </div>
            </div>

            <div className="h-[300px] w-full">
              <img
                src="https://th.bing.com/th?id=OSK.HEROXd0DfgkKmT_N9cSl7tXGQTof9Gk9SmEKa-RGkvD27Vk&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM"
                alt=""
                className="object-cover w-full h-[300px]"
              />
            </div>

            <div className="grid grid-cols-6 gap-4 p-8">
              <div className="col-span-4">
                Curiosity is a car-sized Mars rover exploring Gale
                crater and Mount Sharp on Mars as part of NASA's Mars Science
                Laboratory (MSL) mission.
              </div>
              <div className="col-span-2 flex justify-end w-full">
                <div className="">
                  <button
                    onClick={handleSeeMoreClick}
                    className="bg-white text-black font-bold py-2 px-4 rounded-full h-fit-content"
                  >
                    View Photos
                  </button>
                </div>
              </div>
              <div className="col-span-6 flex flex-col gap-4">
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
                <div className="flex w-full flex-row justify-between items-center border-b border-[#232323] pb-4">
                  <div className="">Landed Date</div>
                  <div className="">August 6, 2012</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
