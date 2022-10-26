import "./App.css";
import logo from "./logo.png";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/Overview";
import Defaults from "./pages/Defaults";
import Fulfillment from "./pages/Fulfilment";
import Customers from "./pages/Customers";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CustomerSingle from "./pages/CustomerSingle";

const user = {
  name: "Alex",
  vendorId: "3945823",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row" style={{ backgroundColor: "#F3F3F3" }}>
        <div>
          <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
            <div className="space-y-3">
              <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
                  <div className="flex items-center justify-center h-14 pt-3">
                    <div>
                      <img src={logo} alt="logo" width={161} height={43}></img>
                    </div>
                  </div>
                  <div className="overflow-y-auto overflow-x-hidden flex-grow items-center justify-center">
                    <ul className="flex flex-col py-4 space-y-1 pl-7 ">
                      <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                          <div className="text-sm font-light tracking-wide text-gray-500">
                            QUICK MENU
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M2.3 17.5C1.8 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.2 0.5 15.7V2.3C0.5 1.8 0.675 1.375 1.025 1.025C1.375 0.675 1.8 0.5 2.3 0.5H15.7C16.2 0.5 16.625 0.675 16.975 1.025C17.325 1.375 17.5 1.8 17.5 2.3V15.7C17.5 16.2 17.325 16.625 16.975 16.975C16.625 17.325 16.2 17.5 15.7 17.5H2.3ZM7.25 16V9.75H2V15.7C2 15.7833 2.02933 15.8543 2.088 15.913C2.146 15.971 2.21667 16 2.3 16H7.25ZM8.75 16H15.7C15.7833 16 15.8543 15.971 15.913 15.913C15.971 15.8543 16 15.7833 16 15.7V9.75H8.75V16ZM2 8.25H16V2.3C16 2.21667 15.971 2.146 15.913 2.088C15.8543 2.02933 15.7833 2 15.7 2H2.3C2.21667 2 2.146 2.02933 2.088 2.088C2.02933 2.146 2 2.21667 2 2.3V8.25Z"
                                fill="#1C1B1F"
                              />
                            </svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">
                            Overview
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/customers"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M4.025 15.3C4.875 14.6667 5.8 14.1667 6.8 13.8C7.8 13.4333 8.86667 13.25 10 13.25C11.1333 13.25 12.2 13.4333 13.2 13.8C14.2 14.1667 15.125 14.6667 15.975 15.3C16.5917 14.6167 17.0833 13.825 17.45 12.925C17.8167 12.025 18 11.05 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 11.05 2.18333 12.025 2.55 12.925C2.91667 13.825 3.40833 14.6167 4.025 15.3ZM10 10.75C9.08333 10.75 8.31267 10.4373 7.688 9.812C7.06267 9.18733 6.75 8.41667 6.75 7.5C6.75 6.58333 7.06267 5.81267 7.688 5.188C8.31267 4.56267 9.08333 4.25 10 4.25C10.9167 4.25 11.6873 4.56267 12.312 5.188C12.9373 5.81267 13.25 6.58333 13.25 7.5C13.25 8.41667 12.9373 9.18733 12.312 9.812C11.6873 10.4373 10.9167 10.75 10 10.75ZM10 19.5C8.68333 19.5 7.446 19.25 6.288 18.75C5.12933 18.25 4.125 17.575 3.275 16.725C2.425 15.875 1.75 14.8707 1.25 13.712C0.75 12.554 0.5 11.3167 0.5 10C0.5 8.68333 0.75 7.44567 1.25 6.287C1.75 5.129 2.425 4.125 3.275 3.275C4.125 2.425 5.12933 1.75 6.288 1.25C7.446 0.75 8.68333 0.5 10 0.5C11.3167 0.5 12.5543 0.75 13.713 1.25C14.871 1.75 15.875 2.425 16.725 3.275C17.575 4.125 18.25 5.129 18.75 6.287C19.25 7.44567 19.5 8.68333 19.5 10C19.5 11.3167 19.25 12.554 18.75 13.712C18.25 14.8707 17.575 15.875 16.725 16.725C15.875 17.575 14.871 18.25 13.713 18.75C12.5543 19.25 11.3167 19.5 10 19.5ZM10 18C10.9 18 11.771 17.854 12.613 17.562C13.4543 17.2707 14.2 16.8667 14.85 16.35C14.2 15.85 13.4623 15.4583 12.637 15.175C11.8123 14.8917 10.9333 14.75 10 14.75C9.06667 14.75 8.18767 14.8877 7.363 15.163C6.53767 15.4377 5.8 15.8333 5.15 16.35C5.8 16.8667 6.54567 17.2707 7.387 17.562C8.229 17.854 9.1 18 10 18ZM10 9.25C10.5 9.25 10.9167 9.08333 11.25 8.75C11.5833 8.41667 11.75 8 11.75 7.5C11.75 7 11.5833 6.58333 11.25 6.25C10.9167 5.91667 10.5 5.75 10 5.75C9.5 5.75 9.08333 5.91667 8.75 6.25C8.41667 6.58333 8.25 7 8.25 7.5C8.25 8 8.41667 8.41667 8.75 8.75C9.08333 9.08333 9.5 9.25 10 9.25Z"
                                fill="#1C1B1F"
                              />
                            </svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">
                            Customers
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/defaults"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="16"
                              viewBox="0 0 20 16"
                              fill="none"
                            >
                              <path
                                d="M4 15.5C3.03333 15.5 2.20833 15.1583 1.525 14.475C0.841667 13.7917 0.5 12.9667 0.5 12V4C0.5 3.03333 0.841667 2.20833 1.525 1.525C2.20833 0.841667 3.03333 0.5 4 0.5H16C16.9667 0.5 17.7917 0.841667 18.475 1.525C19.1583 2.20833 19.5 3.03333 19.5 4V12C19.5 12.9667 19.1583 13.7917 18.475 14.475C17.7917 15.1583 16.9667 15.5 16 15.5H4ZM4 4.25H16C16.3833 4.25 16.7417 4.304 17.075 4.412C17.4083 4.52067 17.7167 4.68333 18 4.9V4C18 3.45 17.8043 2.97933 17.413 2.588C17.021 2.196 16.55 2 16 2H4C3.45 2 2.97933 2.196 2.588 2.588C2.196 2.97933 2 3.45 2 4V4.9C2.28333 4.68333 2.59167 4.52067 2.925 4.412C3.25833 4.304 3.61667 4.25 4 4.25ZM2.1 7.25L13.325 9.975C13.4583 10.0083 13.596 10.0083 13.738 9.975C13.8793 9.94167 14.0083 9.88333 14.125 9.8L17.725 6.775C17.5583 6.45833 17.321 6.20833 17.013 6.025C16.7043 5.84167 16.3667 5.75 16 5.75H4C3.53333 5.75 3.125 5.88733 2.775 6.162C2.425 6.43733 2.2 6.8 2.1 7.25Z"
                                fill="#1C1B1F"
                              />
                            </svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">
                            Defaults
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/fulfilment"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M10.85 19.5C10.65 19.5 10.4543 19.4583 10.263 19.375C10.071 19.2917 9.90833 19.1833 9.775 19.05L0.975 10.25C0.825 10.1 0.708333 9.93333 0.625 9.75C0.541667 9.56667 0.5 9.36667 0.5 9.15V2C0.5 1.58333 0.646 1.22933 0.938 0.938C1.22933 0.646 1.58333 0.5 2 0.5H9.15C9.35 0.5 9.546 0.541667 9.738 0.625C9.92933 0.708333 10.0917 0.816667 10.225 0.95L19.025 9.75C19.325 10.05 19.475 10.4123 19.475 10.837C19.475 11.2623 19.3333 11.6167 19.05 11.9L11.9 19.05C11.7667 19.1833 11.6083 19.2917 11.425 19.375C11.2417 19.4583 11.05 19.5 10.85 19.5ZM10.825 18L17.975 10.85L9.15 2H2V9.15L10.825 18ZM4.5 5.75C4.85 5.75 5.146 5.629 5.388 5.387C5.62933 5.14567 5.75 4.85 5.75 4.5C5.75 4.15 5.62933 3.854 5.388 3.612C5.146 3.37067 4.85 3.25 4.5 3.25C4.15 3.25 3.85433 3.37067 3.613 3.612C3.371 3.854 3.25 4.15 3.25 4.5C3.25 4.85 3.371 5.14567 3.613 5.387C3.85433 5.629 4.15 5.75 4.5 5.75Z"
                                fill="#1C1B1F"
                              />
                            </svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">
                            Fulfilments
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto "
          style={{ backgroundColor: "#F3F3F3" }}
        >
          <div className="min-h-full">
            <Disclosure as="nav" className="bg-white border-b">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="flex flex-col p-2">
                            <p className="text-md font-medium primary-header">
                              Hello, {user.name}
                            </p>
                            <p
                              className="text-md font-medium "
                              style={{
                                color: "#707070",
                                fontWeight: 400,
                                fontSize: "14px",
                              }}
                            >
                              Here’s what’s going on with your account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button type="button" className="p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="27"
                              viewBox="0 0 22 27"
                              fill="none"
                            >
                              <path
                                d="M11.0002 26.333C12.4668 26.333 13.6668 25.133 13.6668 23.6663H8.3335C8.3335 25.133 9.5335 26.333 11.0002 26.333ZM19.0002 18.333V11.6663C19.0002 7.57301 16.8268 4.14634 13.0002 3.23967V2.33301C13.0002 1.22634 12.1068 0.333008 11.0002 0.333008C9.8935 0.333008 9.00016 1.22634 9.00016 2.33301V3.23967C5.18683 4.14634 3.00016 7.55967 3.00016 11.6663V18.333L0.333496 20.9997V22.333H21.6668V20.9997L19.0002 18.333ZM16.3335 19.6663H5.66683V11.6663C5.66683 8.35967 7.68016 5.66634 11.0002 5.66634C14.3202 5.66634 16.3335 8.35967 16.3335 11.6663V19.6663Z"
                                fill="#014342"
                              />
                            </svg>
                          </button>

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div className="flex flex-row">
                              <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="42"
                                  height="42"
                                  viewBox="0 0 42 42"
                                  fill="none"
                                >
                                  <circle
                                    cx="21"
                                    cy="21"
                                    r="21"
                                    fill="#014342"
                                  />
                                  <mask
                                    id="mask0_9_8605"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="42"
                                    height="42"
                                  >
                                    <circle
                                      cx="21"
                                      cy="21"
                                      r="21"
                                      fill="#014342"
                                    />
                                  </mask>
                                  <g mask="url(#mask0_9_8605)">
                                    <ellipse
                                      cx="32.0676"
                                      cy="2.83784"
                                      rx="16.7432"
                                      ry="14.7568"
                                      fill="#80B539"
                                    />
                                  </g>
                                  <path
                                    d="M22.1351 26.6757H34.0541V27.527C34.0541 30.8183 31.3859 33.4865 28.0946 33.4865C24.8033 33.4865 22.1351 30.8183 22.1351 27.527V26.6757Z"
                                    fill="#FEAA00"
                                  />
                                </svg>
                              </Menu.Button>
                              <div className="flex flex-col ml-2">
                                <div className="flex flex-row">
                                  <p
                                    className="text-sm font-medium "
                                    style={{ color: "#222222" }}
                                  >
                                    {user.name}
                                  </p>
                                  <div className="pt-2 pl-5">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="10"
                                      viewBox="0 0 16 10"
                                      fill="none"
                                    >
                                      <path
                                        d="M14.6666 1.33317L7.99998 7.99983L1.33331 1.33317"
                                        stroke="#222222"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <p
                                  className="text-sm font-medium "
                                  style={{ color: "#707070" }}
                                >
                                  Vendor ID: {user.vendorId}
                                </p>
                              </div>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Disclosure>

            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/defaults" element={<Defaults />} />
              <Route path="/fulfilment" element={<Fulfillment />} />
              <Route path="customers">
                <Route index={true} element={<Customers />} />
                <Route
                  index={false}
                  path=":customerId"
                  element={<CustomerSingle />}
                />
              </Route>
              <Route path="*" element={<Overview />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
