import React from 'react'

const Footer2 = () => {
    return (
        <footer className="relative pt-8 pb-6 bg-[#dc747d]">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full px-4 lg:w-6/12">
                        <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
                        <h5 className="mt-0 mb-2 text-lg text-white">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 mb-6 lg:mb-0">
                            <button className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none" type="button">
                                <i className="fab fa-twitter"></i></button><button className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none" type="button">
                                <i className="fab fa-facebook-square"></i></button><button className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none" type="button">
                                <i className="fab fa-dribbble"></i></button><button className="items-center justify-center w-10 h-10 mr-2 font-normal text-white bg-white rounded-full shadow-lg outline-none align-center focus:outline-none" type="button">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="flex flex-wrap mb-6 items-top">
                            <div className="w-full px-4 ml-auto lg:w-4/12">
                                <span className="block mb-2 text-sm font-semibold text-white uppercase">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">Github</a>
                                    </li>
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">Free Products</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full px-4 lg:w-4/12">
                                <span className="block mb-2 text-sm font-semibold text-white uppercase">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">MIT License</a>
                                    </li>
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="block pb-2 text-sm font-semibold text-white hover:text-white" href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="w-full px-4 mx-auto text-center md:w-4/12">
                        <div className="py-1 text-sm font-semibold text-white">
                            Copyright © <span id="get-current-year">2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2