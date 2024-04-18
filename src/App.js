import logo from "./logo.png";
import prio from "./imgs/prio.png";
import sant from "./imgs/sant.png";
import galp from "./imgs/galp.png";
import grande from "./imgs/3dGrande.png";
import lup from "./imgs/lup.png";
import plastic1 from "./imgs/plastic2.jpg";
import open from "./imgs/open2.png";

// 3dGrande.png
// , galp, santa

import "./App.css";

function App() {
    return (
        <div className="mt-20">
            <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-0 backdrop-blur-md py-4">
                <div
                    className="container flex justify-between items-center"
                    style={{ maxWidth: "70%" }}>
                    <div className="flex nav-logo justify-between items-center cursor-pointer">
                        <img
                            src={logo}
                            prio
                            alt="Blastica Logo"
                            className="h-14 mr-0"
                        />
                    </div>
                    <div className="">
                        <ul className="flex justify-between items-center">
                            <li className="mx-4">
                                <a
                                    href="#about"
                                    // style={{ color: '#282828', fontFamily: 'PT Sans' }}
                                    className="text-gray-800 hover:text-blue-600">
                                    About
                                </a>
                            </li>
                            <li className="mx-4">
                                <a
                                    href="#details"
                                    className="text-gray-800 hover:text-blue-600">
                                    Details
                                </a>
                            </li>
                            <li className="mx-4">
                                <a
                                    href="#process"
                                    className="text-gray-800 hover:text-blue-600">
                                    Our Process
                                </a>
                            </li>
                            <li className="mx-4">
                                <a
                                    href="#contact"
                                    className="text-gray-800 hover:text-blue-600">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Contact Us
                    </button>
                </div>
            </nav>

            <div className="absolute top-[-10px] left-[-70px]  z-[-1]">
                <div
                    className="w-96 h-96 rounded-full bg-opacity-90"
                    style={{
                        filter: "blur(200px)",
                        backgroundColor: "#3E92CC",
                    }}></div>
            </div>
            <div className="absolute top-[300px] right-[-10px]  z-[-1]">
                <div
                    className="w-96 h-96 rounded-full bg-opacity-90"
                    style={{
                        filter: "blur(200px)",
                        backgroundColor: "#3E92CC",
                    }}></div>
            </div>

            <section className="py-20 ">
                <div
                    className="container mx-auto flex justify-between "
                    style={{ maxWidth: "71%" }}>
                    <div className="w-1/2 p-3">
                        <p className="text-transparent bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 font-bold bg-clip-text">
                            Revolutionizing energy
                        </p>

                        <h1 className="text-5xl font-bold text-gray-800 mt-2">
                            Synthetic fuel from discarded plastics
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Blastica rescues discarded plastics, transforming
                            them into eco-friendly fuel through a unique
                            chemical process, contributing to sustainability.
                        </p>
                        <div className="mt-6 flex">
                            <button className="mr-2 bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600">
                                <p className="text-sm">Let's Work</p>
                            </button>
                            <button className="bg-white text-black py-2 px-8 rounded hover:border-black border">
                                <p className="text-sm">Our team</p>
                            </button>
                        </div>

                        <div className="mt-8 flex items-center">
                            <div className="flex space-x-[-12px] z-10 relative">
                                <img
                                    src={prio}
                                    alt="prio Logo"
                                    className="w-8 h-8 rounded-full"
                                    style={{ zIndex: 3 }}
                                />
                                <img
                                    src={sant}
                                    alt="sant Logo"
                                    className="w-8 h-8 rounded-full"
                                    style={{ zIndex: 2, marginLeft: "-8px" }}
                                />
                                <img
                                    src={galp}
                                    alt="galp Logo"
                                    className="w-8 h-8 rounded-full"
                                    style={{ zIndex: 1, marginLeft: "-8px" }}
                                />
                            </div>

                            <div className="ml-4">
                                <div className="w-38 sm:w-42 overflow-hidden">
                                    <p className="sm:text-sm md:text-md text-gray-800">
                                        5+ Companies contributed to the initial
                                        success
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 relative flex justify-center items-end">
                        {/* Div para a imagem grande */}
                        <div className="absolute bottom-0 w-auto h-auto ">
                            <img
                                src={grande}
                                alt="Imagem Grande"
                                className="object-cover object-center "
                            />
                        </div>
                        {/* Div para a imagem menor */}
                        <div className="absolute top-32 left-[-12px] border border-white rounded-lg bg-white bg-opacity-20">
                            <img
                                src={lup}
                                alt="Imagem Pequena 1"
                                className="w-16 h-16 "
                            />
                        </div>
                        <div className="w-48 h-52 absolute top-[-40px] right-0 border border-white rounded-lg p-2 bg-white bg-opacity-20">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-gray-800">
                                    Benefits
                                </span>
                                <img
                                    src={lup}
                                    alt="Imagem Pequena 2"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={plastic1}
                                    alt="Imagem Pequena 2"
                                    className="w-36 h-20 rounded-md "
                                />
                                <p className="text-xs mt-1 px-4">
                                    With this process we will incentivise people
                                    to recycling.
                                </p>
                            </div>
                            <div className="flex items-end">
                                <div className="ml-auto">
                                    <img
                                        src={open}
                                        alt="open"
                                        className="w-8 h-8 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------------------------------------------------------------------------------------------- */}

            {/* About Us Section */}
            <section className="py-20 bg-white ">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Brief description of Blastica and its mission.
                    </p>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Details
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Provide details about how Blastica converts discarded
                        plastics into synthetic fuel.
                    </p>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Our Process
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Explain the process Blastica follows to produce
                        synthetic fuel.
                    </p>
                </div>
            </section>

            {/* Questions Section */}
            <section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Common questions and answers about Blastica and its
                        technology.
                    </p>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Contact information and a form to get in touch with
                        Blastica.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default App;
