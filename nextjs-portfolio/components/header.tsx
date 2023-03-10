import Link from "next/link"
import DarkModeToggleButton from "./buttons/dark-mode-toggle-button"
import KakaoToggleButton from "./buttons/kakao-contact-button"

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5 flex-col md:flex-row ">
          <Link legacyBehavior href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              {/* <MyPicture width={48} height={48} /> */}
              <svg
                className="w-12 h-12 text-white p-2 bg-indigo-200 rounded-full"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enableBackground="new 0 0 1000 1000"
              >
                <metadata>
                  {" "}
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
                </metadata>
                <g>
                  <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                    <path d="M4920,4986.2c-2017.2-192-3245.9-1379.8-3330.4-3222.9c-7.7-161.3-38.4-409.6-66.6-550.4c-43.5-212.5-74.2-289.3-181.7-460.8c-69.1-112.6-204.8-284.2-297-384C839.5,155.7,716.7-18.4,657.8-179.6c-74.2-199.7-12.8-314.9,238.1-448c168.9-92.2,401.9-266.2,401.9-304.6c0-17.9-28.2-76.8-64-133.1c-179.2-291.8-176.6-317.4,5.1-386.5c66.5-23,156.1-74.2,194.5-110.1l71.7-66.6l-74.2-66.5c-102.4-92.2-209.9-253.4-209.9-317.4c0-30.7,58.9-120.3,130.5-202.2c125.4-138.2,133.1-153.6,130.6-279c-2.6-79.3-28.2-199.7-66.6-296.9c-84.5-215-87-381.4-5.1-509.4c94.7-151.1,256-279,401.9-322.6c194.6-58.9,844.8-53.7,1405.4,10.3c696.3,79.4,898.5,64,949.7-69.1c12.8-33.3,23.1-271.3,23.1-527.3s7.7-491.5,15.3-522.2l15.4-58.9H6159h1937.8l-151,1105.9l-151.1,1105.9l71.7,256c128,453.1,302.1,783.3,798.7,1512.9c163.8,238.1,327.7,481.3,368.6,540.1c99.8,151,240.6,496.6,291.8,724.5c35.8,153.6,46.1,320,46.1,783.3c0,514.5-7.7,622.1-56.3,849.9c-166.4,762.8-547.8,1410.5-1128.9,1919.9C7318.6,4768.6,6192.3,5106.5,4920,4986.2z M6939.8,3872.7c23-20.5,40.9-74.2,40.9-115.2c0-48.6,15.4-79.4,46.1-89.6c23-7.7,81.9-30.7,130.6-51.2c79.3-35.8,89.6-35.8,140.8,15.4c74.2,66.6,138.2,64,212.5-5.1c74.2-69.1,74.2-125.4-2.6-197.1l-58.9-56.3l53.8-138.2c48.6-128,61.4-140.8,135.7-140.8c99.8,0,161.3-58.9,161.3-153.6c0-97.3-61.5-153.6-168.9-153.6c-56.3,0-87.1-12.8-87.1-33.3c0-20.5-28.1-92.2-64-158.7c-61.5-125.4-61.5-125.4-12.8-179.2c69.1-74.2,66.6-179.2-5.1-227.8c-79.3-56.3-122.9-51.2-199.7,23c-66.6,64-66.6,64-174.1,20.5c-94.7-40.9-107.5-56.3-107.5-128c0-92.1-53.7-135.7-171.5-135.7c-94.7,0-135.7,41-135.7,138.2c0,71.7-12.8,84.5-145.9,135.7l-145.9,56.3l-74.2-64c-92.2-76.8-107.5-76.8-184.3,2.6c-81.9,79.4-81.9,140.8,0,217.6l61.4,58.9l-48.6,97.3c-28.2,53.8-51.2,115.2-51.2,138.2c0,28.2-25.6,38.4-97.3,38.4c-122.9,0-158.7,35.8-158.7,158.7c0,107.5,48.6,148.5,176.6,148.5c53.8,0,79.4,12.8,79.4,38.4c0,23,17.9,74.2,38.4,112.6c33.3,69.1,33.3,76.8-25.6,130.6c-76.8,71.7-81.9,161.3-12.8,230.4c66.6,66.6,133.1,64,202.2-7.7l56.3-61.4l110.1,56.3c61.4,30.7,135.7,64,166.4,71.7c40.9,10.3,53.8,33.3,53.8,99.8c0,48.6,12.8,99.8,30.7,117.7C6747.8,3926.4,6893.7,3921.3,6939.8,3872.7z M3793.7,3478.5c40.9-15.4,81.9-64,110.1-133.1l46.1-104.9l268.8-2.6l268.8-2.6l41,92.2c56.3,135.7,148.5,189.4,256,153.6c171.5-61.4,215-166.4,138.2-345.6l-35.8-84.5l158.7-166.4l156.2-166.4l104.9,38.4c135.7,48.6,227.8,25.6,279-71.7c40.9-79.4,51.2-197.1,17.9-248.3c-10.3-17.9-71.7-53.8-135.7-81.9l-117.7-53.8l-2.6-227.8l-2.6-225.3l102.4-48.6c161.3-71.7,194.6-184.3,99.8-335.3c-66.6-110.1-140.8-125.4-281.6-61.4l-115.2,51.2l-84.5-97.3c-46.1-56.3-133.1-133.1-197.1-174.1c-79.4-48.6-110.1-84.5-99.8-110.1c10.2-20.5,28.2-79.4,43.5-133.1c35.8-120.3-15.4-202.2-148.5-243.2c-140.8-43.5-209.9-7.7-273.9,145.9c-46.1,110.1-64,128-122.9,128c-38.4,0-122.9,7.7-189.4,15.4c-115.2,17.9-117.8,15.4-156.1-74.2c-51.2-122.9-105-171.5-194.6-171.5c-186.9,0-294.4,135.7-227.8,291.8c51.2,130.6,43.5,153.6-107.5,317.4l-145.9,158.7l-115.2-43.5c-143.3-53.7-227.8-23-289.3,107.5c-61.4,130.6-25.6,215,128,291.8l120.3,58.9v171.5c0,92.2,7.7,192,15.4,220.2c10.3,41-12.8,64-110.1,115.2c-156.1,81.9-186.9,158.7-120.3,296.9c66.6,135.7,156.2,163.8,299.5,94.7l107.5-51.2l135.7,135.7l135.7,135.7l-43.5,128c-56.3,153.6-28.2,243.2,99.8,297C3709.2,3509.2,3709.2,3509.2,3793.7,3478.5z M6822,1620c43.5-30.7,56.3-64,56.3-153.6c0-71.7,10.2-112.6,33.3-112.6c15.4,0,89.6-28.2,163.8-61.4l130.5-61.4l71.7,74.2c89.6,94.7,148.5,94.7,243.2,0c92.2-94.7,92.2-133.1,0-240.6L7444,980l69.1-171.5c64-169,69.1-171.5,161.3-171.5c133.1,0,227.8-81.9,227.8-194.6c0-122.9-94.7-215-222.7-215c-94.7-2.6-99.8-5.1-186.9-192L7403.1-154l69.1-76.8c87-99.8,89.6-166.4,7.7-245.8c-87.1-89.6-197.1-84.5-273.9,12.8l-61.4,76.8l-133.1-56.3c-130.6-56.3-133.1-58.9-133.1-163.8c0-143.4-48.7-189.4-197.1-189.4c-156.1,0-212.5,51.2-212.5,192v105L6287-427.9l-181.7,71.7l-69.1-66.5c-87-84.5-189.4-87.1-271.3-2.6c-81.9,79.4-79.4,130.6,0,250.9l66.5,94.7l-58.9,153.6c-58.9,151-58.9,153.6-161.3,153.6c-151,0-217.6,56.3-217.6,184.3c0,145.9,76.8,225.3,215,225.3c102.4,0,105,2.6,158.7,138.2l53.8,140.8l-71.7,71.7c-104.9,107.5-112.6,168.9-33.3,261.1c84.5,99.8,174.1,102.4,271.4,10.2c66.6-64,79.3-66.5,130.5-33.3c120.3,76.8,235.5,128,291.8,128c51.2,0,58.9,12.8,58.9,107.5c0,140.8,53.8,199.7,189.4,199.7C6717.1,1660.9,6791.3,1643,6822,1620z" />
                    <path d="M6622.3,3278.8c-122.9-64-212.5-238.1-197.1-381.4c40.9-386.5,550.4-481.3,729.6-135.7C7328.8,3099.6,6960.2,3455.4,6622.3,3278.8z" />
                    <path d="M4077.8,2682.3c-181.7-43.5-348.1-194.6-412.1-378.9c-74.2-215-35.8-401.9,120.3-578.5c128-145.9,273.9-202.2,486.4-186.9c640,40.9,727,949.7,107.5,1136.6C4244.2,2715.6,4221.2,2715.6,4077.8,2682.3z" />
                    <path d="M6430.3,877.6c-179.2-92.2-268.8-245.8-268.8-450.6c0-407,481.3-624.6,796.1-360.9c345.6,291.8,140.8,852.5-307.2,852.5C6571.1,918.6,6473.9,900.6,6430.3,877.6z" />
                  </g>
                </g>
              </svg>
              <span className="ml-3 text-xl">Jaehyeok Portfolio</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href="/">
              <a className="mr-5 ">Home</a>
            </Link>
            <Link legacyBehavior href="/about-me">
              <a className="mr-5 ">About me</a>
            </Link>
            <Link legacyBehavior href="/projects">
              <a className="mr-5 ">Projects</a>
            </Link>
            {/* <a className="mr-5 ">Blog</a> */}
            <Link legacyBehavior href={"https://github.com/jh4843"}>
              <a className="mr-5 ">Github</a>
            </Link>
          </nav>
          {/* <Link href={'https://open.kakao.com/o/sZIIYg8e'}>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Contact
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 208 191.94"
                >
                  <g>
                    <polygon points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49" />
                    <path d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z" />
                  </g>
                </svg>
              </svg>
            </button>
          </Link> */}
          <KakaoToggleButton></KakaoToggleButton>
          <DarkModeToggleButton></DarkModeToggleButton>
        </div>
      </header>
    </>
  )
}
