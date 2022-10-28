import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import "../App.css";

// import ConnectModal from "./components/modals/connect";
import RecoCard from "./components/RecoCard";
import RecoCardEnd from "./components/RecoCardEnd";
import { customers } from "./models/Customer";

function RecoOverview() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [bank, setBank] = useState(false);
  const [connectErp, setConnectErp] = useState(false);
  const [upload, setUpload] = useState(false);
  const handleClick = () => {
    console.log("The link was clicked.");
    setOpen(true);
  };

  const cancelButtonRef = useRef(null);

  console.log(customers);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  style={{ width: "480px" }}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex flex flex-col justify-center">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Connect account
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Connect your mobile account or bank statement to
                            continue
                          </p>
                        </div>
                        <div
                          onClick={() => {
                            setMobile(true);
                          }}
                          className="mt-7 flex flex-col justify-center items-center mb-7"
                        >
                          <div className="justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              viewBox="0 0 80 80"
                              fill="none"
                            >
                              <circle cx="40" cy="40" r="40" fill="#E4F2D1" />
                              <mask
                                id="mask0_9_8833"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="21"
                                y="21"
                                width="38"
                                height="38"
                              >
                                <rect
                                  x="21.25"
                                  y="21.25"
                                  width="37.5"
                                  height="37.5"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_9_8833)">
                                <path
                                  d="M46.25 42.3438C46.9271 42.3438 47.487 42.1224 47.9297 41.6797C48.3724 41.237 48.5937 40.6771 48.5937 40C48.5937 39.3229 48.3724 38.763 47.9297 38.3203C47.487 37.8776 46.9271 37.6562 46.25 37.6562C45.5729 37.6562 45.013 37.8776 44.5703 38.3203C44.1276 38.763 43.9062 39.3229 43.9062 40C43.9062 40.6771 44.1276 41.237 44.5703 41.6797C45.013 42.1224 45.5729 42.3438 46.25 42.3438ZM41.6016 47.8125C40.7682 47.8125 40.0328 47.5 39.3953 46.875C38.7568 46.25 38.4375 45.5208 38.4375 44.6875V35.3516C38.4375 34.5182 38.7568 33.7823 39.3953 33.1437C40.0328 32.5062 40.7682 32.1875 41.6016 32.1875H53.2031C54.0625 32.1875 54.8047 32.5062 55.4297 33.1437C56.0547 33.7823 56.3672 34.5182 56.3672 35.3516V44.6875C56.3672 45.5208 56.0547 46.25 55.4297 46.875C54.8047 47.5 54.0625 47.8125 53.2031 47.8125H41.6016ZM29.3359 54.8047C28.1641 54.8047 27.1812 54.4073 26.3875 53.6125C25.5927 52.8187 25.1953 51.8359 25.1953 50.6641V29.3359C25.1953 28.1641 25.5927 27.1807 26.3875 26.3859C27.1812 25.5922 28.1641 25.1953 29.3359 25.1953H50.6641C51.8359 25.1953 52.8193 25.5922 53.6141 26.3859C54.4078 27.1807 54.8047 28.1641 54.8047 29.3359H41.6016C39.8568 29.3359 38.4182 29.9021 37.2859 31.0344C36.1526 32.1677 35.5859 33.6068 35.5859 35.3516V44.6875C35.5859 46.4583 36.1526 47.8969 37.2859 49.0031C38.4182 50.1104 39.8568 50.6641 41.6016 50.6641H54.8047C54.8047 51.8359 54.4078 52.8187 53.6141 53.6125C52.8193 54.4073 51.8359 54.8047 50.6641 54.8047H29.3359Z"
                                  fill="#1C1B1F"
                                />
                              </g>
                            </svg>
                          </div>
                          <p
                            style={{
                              color: "#000000",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                            className="text-sm text-gray-500"
                          >
                            Mobile money account
                          </p>
                        </div>
                        <div
                          onClick={() => {
                            setBank(true);
                          }}
                          className="mt-4 flex flex-col justify-center items-center"
                        >
                          <div className="justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              viewBox="0 0 80 80"
                              fill="none"
                            >
                              <circle cx="40" cy="40" r="40" fill="#FFE3A8" />
                              <mask
                                id="mask0_9_8826"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="21"
                                y="21"
                                width="38"
                                height="38"
                              >
                                <rect
                                  x="21.25"
                                  y="21.25"
                                  width="37.5"
                                  height="37.5"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_9_8826)">
                                <path
                                  d="M38.0073 49.9604H41.6401V48.3979H43.3198C43.8146 48.3979 44.2381 48.2224 44.5901 47.8714C44.9412 47.5193 45.1167 47.0828 45.1167 46.562V41.562C45.1167 41.0672 44.9412 40.6443 44.5901 40.2933C44.2381 39.9412 43.8146 39.7651 43.3198 39.7651H38.5151V38.3589H45.1167V34.7261H41.9917V33.1636H38.3589V34.7261H36.6792C36.1844 34.7261 35.761 34.9016 35.4089 35.2526C35.0578 35.6047 34.8823 36.0412 34.8823 36.562V41.562C34.8823 42.0568 35.0578 42.4797 35.4089 42.8308C35.761 43.1828 36.1844 43.3589 36.6792 43.3589H41.4839V44.7651H34.8823V48.3979H38.0073V49.9604ZM30.8979 56.3667C29.7261 56.3667 28.7433 55.9693 27.9495 55.1745C27.1547 54.3808 26.7573 53.398 26.7573 52.2261V27.7729C26.7573 26.6011 27.1547 25.6177 27.9495 24.8229C28.7433 24.0292 29.7261 23.6323 30.8979 23.6323H43.437L53.2417 33.437V52.2261C53.2417 53.398 52.8443 54.3808 52.0495 55.1745C51.2558 55.9693 50.2729 56.3667 49.1011 56.3667H30.8979Z"
                                  fill="#1C1B1F"
                                />
                              </g>
                            </svg>
                          </div>
                          <p
                            style={{
                              color: "#000000",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                            className="text-sm text-gray-500"
                          >
                            Bank Account
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={mobile} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setMobile}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  style={{ width: "480px" }}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex flex flex-col justify-center">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Mobile money account
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Choose an option to proceed
                          </p>
                        </div>
                        <div className="mt-7 flex flex-col justify-center items-center mb-7">
                          <button
                            style={{
                              backgroundColor: "#EAECF0",
                              color: "#101010",
                              height: "71px",
                              borderRadius: "8px",
                              fontSize: "18px",

                              fontWeight: 500,
                            }}
                            className="bg-gray-300 justify-center hover:bg-gray-400 w-full text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-2"
                          >
                            Connect MPesa account
                          </button>
                        </div>
                        <div className="mt-4 flex flex-col justify-center items-center">
                          <button
                            style={{
                              backgroundColor: "#EAECF0",
                              color: "#101010",
                              height: "71px",
                              borderRadius: "8px",
                              fontSize: "18px",
                              fontWeight: 500,
                            }}
                            className="bg-gray-300 hover:bg-gray-400 w-full text-gray-800 font-bold py-2 px-4 text-center justify-center rounded inline-flex items-center mb-2"
                          >
                            Upload Mpesa statement
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={bank} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setBank}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  style={{ width: "480px" }}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex flex flex-col justify-center">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Bank account
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Choose an option to proceed
                          </p>
                        </div>
                        <div className="mt-7 flex flex-col justify-center items-center mb-7">
                          <button
                            style={{
                              backgroundColor: "#EAECF0",
                              color: "#101010",
                              height: "71px",
                              borderRadius: "8px",
                              fontSize: "18px",

                              fontWeight: 500,
                            }}
                            className="bg-gray-300 justify-center hover:bg-gray-400 w-full text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-2"
                          >
                            Connect bank account
                          </button>
                        </div>
                        <div className="mt-4 flex flex-col justify-center items-center">
                          <button
                            style={{
                              backgroundColor: "#EAECF0",
                              color: "#101010",
                              height: "71px",
                              borderRadius: "8px",
                              fontSize: "18px",
                              fontWeight: 500,
                            }}
                            className="bg-gray-300 hover:bg-gray-400 w-full text-gray-800 font-bold py-2 px-4 text-center justify-center rounded inline-flex items-center mb-2"
                          >
                            Upload bank statement
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={connectErp} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setConnectErp}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  style={{ width: "480px" }}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex flex flex-col justify-center">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Connect your ERP
                        </Dialog.Title>

                        <div className="mt-7 flex flex-col justify-center items-center mb-7">
                          <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                            <div className="mb-3 space-y-2 w-full text-xs">
                              <label className="font-semibold  py-2 primary-text">
                                ERP
                              </label>
                              <input
                                placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                                value={"Select Erp"}
                                disabled
                                style={{
                                  backgroundColor: "#FFFFFF",
                                  color: "#101010",
                                  border: "1px solid #E5E5E5",
                                  borderRadius: "10px",
                                  padding: "10px",
                                  fontSize: "16px",
                                  height:"52px",
                                  fontWeight: 400,
                                }}
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-col justify-center items-center">
                          <button
                            style={{
                              backgroundColor: "#80B539",
                              color: "#FFFFFF",
                              height: "71px",
                              borderRadius: "8px",
                              fontSize: "18px",
                              fontWeight: 500,
                            }}
                            className="bg-gray-300 hover:bg-gray-400 w-full text-gray-800 font-bold py-2 px-4 text-center justify-center rounded inline-flex items-center mb-2"
                          >
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={upload} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setUpload}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  style={{ width: "480px" }}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex flex flex-col justify-center">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                       

                        <div className="mt-7 flex flex-col justify-center items-center mb-7">
                          <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                            <div className="mb-3 space-y-2 w-full text-xs">
                             
                              <input
                                placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                                value={"Click to upload PDF file"}
                                disabled
                                style={{
                                  backgroundColor: "#FFFFFF",
                                  color: "#101010",
                                 
                                  borderRadius: "10px",
                                  padding: "10px",
                                  fontSize: "16px",
                                  height:"138px",
                                  fontWeight: 400,
                                }}
                                className="appearance-none block w-full  bg-grey-lighter text-grey-darker border-dashed border-2 rounded-lg h-10 px-4 border-gray text-center justify-center"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-col justify-center items-center">
                          <button
                            style={{
                              backgroundColor: "#80B539",
                              color: "#FFFFFF",
                              height: "71px",
                              borderRadius: "8px",
                              fontSize: "18px",
                              fontWeight: 500,
                            }}
                            className="bg-gray-300 hover:bg-gray-400 w-full text-gray-800 font-bold py-2 px-4 text-center justify-center rounded inline-flex items-center mb-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <h1 className="primary-heading">Account Summary</h1>

      <div className="flex flex-col sm:flex-row md:flex-row mt-4 justify-between">
        <button
          style={{
            backgroundColor: "#EAECF0",
            color: "#101010",
            height: "42px",
            borderRadius: "8px",
            fontWeight: 500,
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2"
          >
            <mask
              id="mask0_9_8665"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_9_8665)">
              <path
                d="M11.775 19C11.5583 19 11.375 18.925 11.225 18.775C11.075 18.625 11 18.4417 11 18.225V12.65L5.6 5.825C5.46667 5.64167 5.45 5.45833 5.55 5.275C5.65 5.09167 5.80834 5 6.025 5H17.975C18.1917 5 18.35 5.09167 18.45 5.275C18.55 5.45833 18.5333 5.64167 18.4 5.825L13 12.65V18.225C13 18.4417 12.925 18.625 12.775 18.775C12.625 18.925 12.4417 19 12.225 19H11.775ZM12 12.3L16.95 6H7.05L12 12.3Z"
                fill="#101010"
              />
            </g>
          </svg>
          <span>Today</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
          >
            <mask
              id="mask0_9_8669"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_9_8669)">
              <path
                d="M12 14.375C11.9 14.375 11.8 14.3583 11.7 14.325C11.6 14.2917 11.5083 14.2333 11.425 14.15L7.05 9.75C6.93333 9.65 6.875 9.53333 6.875 9.4C6.875 9.26667 6.93333 9.15 7.05 9.05C7.15 8.93333 7.26667 8.875 7.4 8.875C7.53333 8.875 7.65 8.93333 7.75 9.05L12 13.3L16.25 9.05C16.35 8.93333 16.4667 8.875 16.6 8.875C16.7333 8.875 16.85 8.93333 16.95 9.05C17.0667 9.15 17.125 9.26667 17.125 9.4C17.125 9.53333 17.0667 9.65 16.95 9.75L12.575 14.15C12.475 14.2333 12.3793 14.2917 12.288 14.325C12.196 14.3583 12.1 14.375 12 14.375Z"
                fill="#101010"
              />
            </g>
          </svg>
        </button>

        <div className="flex flex-col sm:flex-row md:flex-row">
          <button
            onClick={() => {
              setConnectErp(true);
            }}
            style={{
              backgroundColor: "#FFBD2E",
              color: "#101010",
              height: "42px",
              borderRadius: "8px",
              fontWeight: 500,
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex mr-3 items-center mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <mask
                id="mask0_9_8660"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_9_8660)">
                <path
                  d="M10.625 16.0748H6.99999C5.86665 16.0748 4.90432 15.6788 4.11299 14.8868C3.32099 14.0955 2.92499 13.1331 2.92499 11.9998C2.92499 10.8665 3.32099 9.90414 4.11299 9.1128C4.90432 8.3208 5.86665 7.9248 6.99999 7.9248H10.625V8.9248H6.99999C6.14999 8.9248 5.42499 9.2248 4.82499 9.8248C4.22499 10.4248 3.92499 11.1498 3.92499 11.9998C3.92499 12.8498 4.22499 13.5748 4.82499 14.1748C5.42499 14.7748 6.14999 15.0748 6.99999 15.0748H10.625V16.0748ZM8.49999 12.4998V11.4998H15.5V12.4998H8.49999ZM13.375 16.0748V15.0748H17C17.85 15.0748 18.575 14.7748 19.175 14.1748C19.775 13.5748 20.075 12.8498 20.075 11.9998C20.075 11.1498 19.775 10.4248 19.175 9.8248C18.575 9.2248 17.85 8.9248 17 8.9248H13.375V7.9248H17C18.1333 7.9248 19.096 8.3208 19.888 9.1128C20.6793 9.90414 21.075 10.8665 21.075 11.9998C21.075 13.1331 20.6793 14.0955 19.888 14.8868C19.096 15.6788 18.1333 16.0748 17 16.0748H13.375Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
            <span> Connect ERP</span>
          </button>

          <button
             onClick={() => {
              setUpload(true)
             }}
            style={{
              backgroundColor: "#80B539",
              color: "#FFFFFF",
              height: "42px",
              borderRadius: "8px",
              fontWeight: 500,
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex mr-3 items-center mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <mask
                id="mask0_9_8650"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_9_8650)">
                <path
                  d="M8.5 17.5H15.5V16.5H8.5V17.5ZM8.5 13.5H15.5V12.5H8.5V13.5ZM6.625 21C6.15833 21 5.771 20.846 5.463 20.538C5.15433 20.2293 5 19.8417 5 19.375V4.625C5 4.15833 5.15433 3.77067 5.463 3.462C5.771 3.154 6.15833 3 6.625 3H14.5L19 7.5V19.375C19 19.8417 18.846 20.2293 18.538 20.538C18.2293 20.846 17.8417 21 17.375 21H6.625ZM14 8V4H6.625C6.45833 4 6.31267 4.06267 6.188 4.188C6.06267 4.31267 6 4.45833 6 4.625V19.375C6 19.5417 6.06267 19.6873 6.188 19.812C6.31267 19.9373 6.45833 20 6.625 20H17.375C17.5417 20 17.6873 19.9373 17.812 19.812C17.9373 19.6873 18 19.5417 18 19.375V8H14Z"
                  fill="white"
                />
              </g>
            </svg>
            <span> Upload CSV</span>
          </button>
          <button
            onClick={() => {
              handleClick();
            }}
            style={{
              backgroundColor: "#222222",
              color: "#FFFFFF",
              height: "42px",
              borderRadius: "8px",
              fontWeight: 500,
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex mr-3 items-center mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <mask
                id="mask0_9_8655"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_9_8655)">
                <path
                  d="M6.2 17.475C7.05 16.875 7.95 16.396 8.9 16.038C9.85 15.6793 10.8833 15.5 12 15.5C13.1167 15.5 14.15 15.6793 15.1 16.038C16.05 16.396 16.95 16.875 17.8 17.475C18.4667 16.7917 19 15.9873 19.4 15.062C19.8 14.1373 20 13.1167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 13.1167 4.2 14.1373 4.6 15.062C5 15.9873 5.53333 16.7917 6.2 17.475ZM12 12.5C11.15 12.5 10.4377 12.2123 9.863 11.637C9.28767 11.0623 9 10.35 9 9.5C9 8.65 9.28767 7.93733 9.863 7.362C10.4377 6.78733 11.15 6.5 12 6.5C12.85 6.5 13.5623 6.78733 14.137 7.362C14.7123 7.93733 15 8.65 15 9.5C15 10.35 14.7123 11.0623 14.137 11.637C13.5623 12.2123 12.85 12.5 12 12.5ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21ZM12 20C12.9167 20 13.821 19.8373 14.713 19.512C15.6043 19.1873 16.375 18.75 17.025 18.2C16.375 17.6667 15.625 17.25 14.775 16.95C13.925 16.65 13 16.5 12 16.5C11 16.5 10.071 16.65 9.213 16.95C8.35433 17.25 7.60833 17.6667 6.975 18.2C7.625 18.75 8.39567 19.1873 9.287 19.512C10.179 19.8373 11.0833 20 12 20ZM12 11.5C12.5667 11.5 13.0417 11.3083 13.425 10.925C13.8083 10.5417 14 10.0667 14 9.5C14 8.93333 13.8083 8.45833 13.425 8.075C13.0417 7.69167 12.5667 7.5 12 7.5C11.4333 7.5 10.9583 7.69167 10.575 8.075C10.1917 8.45833 10 8.93333 10 9.5C10 10.0667 10.1917 10.5417 10.575 10.925C10.9583 11.3083 11.4333 11.5 12 11.5Z"
                  fill="white"
                />
              </g>
            </svg>
            <span> Connect Account</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col md:justify-between ">
          <RecoCard
            data={{
              image: "busket.png",
              heading: "Total order transactions",
              value: "6,708,321",
            }}
          />
          <RecoCard
            data={{
              image: "dollar_2.png",
              heading: "Total collections",
              value: "2,240,059",
            }}
          />
          <RecoCardEnd
            data={{
              heading: "Reconcile",
              value: 53,
            }}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row md-flex-row justify-between mt-8">
        <div className="flex flex-wrap items-stretch relative w-72 mt-2">
          <div className="flex">
            <span className="flex items-center leading-normal border-1 rounded-r-none border border-r-0 border-gray px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-white justify-center items-center  text-xl rounded-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.7192 18.3139L16.0114 14.6333C17.4506 12.8374 18.1476 10.5579 17.959 8.26356C17.7705 5.96919 16.7106 3.83432 14.9975 2.29792C13.2844 0.761532 11.0481 -0.0595993 8.74862 0.00337152C6.44911 0.0663423 4.26109 1.00863 2.63448 2.63648C1.00786 4.26433 0.066292 6.454 0.00336896 8.75527C-0.059554 11.0565 0.760954 13.2945 2.29618 15.0089C3.83141 16.7233 5.96466 17.784 8.25729 17.9727C10.5499 18.1614 12.8277 17.4639 14.6222 16.0235L18.3 19.7042C18.3929 19.7979 18.5035 19.8723 18.6253 19.9231C18.747 19.9739 18.8777 20 19.0096 20C19.1415 20 19.2722 19.9739 19.3939 19.9231C19.5157 19.8723 19.6263 19.7979 19.7192 19.7042C19.8993 19.5177 20 19.2684 20 19.009C20 18.7497 19.8993 18.5004 19.7192 18.3139ZM9.01554 16.0235C7.63189 16.0235 6.27932 15.6129 5.12886 14.8436C3.9784 14.0743 3.08172 12.9809 2.55223 11.7016C2.02273 10.4223 1.88419 9.01462 2.15412 7.65653C2.42406 6.29844 3.09035 5.05095 4.06873 4.07183C5.04712 3.0927 6.29366 2.4259 7.65072 2.15576C9.00778 1.88562 10.4144 2.02426 11.6927 2.55417C12.9711 3.08407 14.0637 3.98142 14.8324 5.13276C15.6011 6.28409 16.0114 7.63769 16.0114 9.02239C16.0114 10.8792 15.2743 12.66 13.9623 13.973C12.6504 15.2859 10.871 16.0235 9.01554 16.0235Z"
                  fill="#757575"
                />
              </svg>
            </span>
          </div>
          <input
            type="text"
            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
            placeholder="Search for driver's name"
          />
        </div>

        <div className="mr-3 mt-2 md:w-auto w-1/4">
          <button
            type="button"
            style={{ color: "#222222" }}
            className="inline-block px-7 py-3 border-2 border-grey text-grey font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Export
          </button>
        </div>
      </div>
      <div className="flex flew-col justify-between mr-3 mt-8">
        <div className="h-screen w-full">
          <div className="overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left uppercase">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left uppercase">
                    Date
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left uppercase">
                    Account
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left uppercase">
                    Invoice Total
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left uppercase">
                    Amount Received
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left uppercase">
                    PERCENTAGE RECONCILED
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="p-3 text-sm whitespace-nowrap">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      Aug 6, 2022
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <circle cx="21" cy="21" r="21" fill="#014342" />
                        <mask
                          id="mask0_9_8605"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="42"
                          height="42"
                        >
                          <circle cx="21" cy="21" r="21" fill="#014342" />
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

                      <div className="flex flex-col p-2">
                        <p
                          className="text-md font-medium "
                          style={{ color: "#101828", fontSize: "14px" }}
                        >
                          Account Name
                        </p>
                        <p
                          className="text-md font-medium "
                          style={{
                            color: "#667085",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          0293848323
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101828",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      KES 110,950.00
                    </p>
                  </td>

                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      KES 90,069.00
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <span
                      style={{
                        backgroundColor: "#ECFDF3",
                        width: "41",
                        height: "30px",
                      }}
                      className="px-4 py-1 rounded-full font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                    >
                      <p
                        className="text-md font-medium "
                        style={{
                          color: "#027A48",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        82%
                      </p>
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-sm whitespace-nowrap">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      Aug 6, 2022
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <circle cx="21" cy="21" r="21" fill="#014342" />
                        <mask
                          id="mask0_9_8605"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="42"
                          height="42"
                        >
                          <circle cx="21" cy="21" r="21" fill="#014342" />
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

                      <div className="flex flex-col p-2">
                        <p
                          className="text-md font-medium "
                          style={{ color: "#101828", fontSize: "14px" }}
                        >
                          Account Name
                        </p>
                        <p
                          className="text-md font-medium "
                          style={{
                            color: "#667085",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          0293848323
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101828",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      KES 110,950.00
                    </p>
                  </td>

                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      KES 90,069.00
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <span
                      style={{
                        backgroundColor: "#ECFDF3",
                        width: "41",
                        height: "30px",
                      }}
                      className="px-4 py-1 rounded-full font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                    >
                      <p
                        className="text-md font-medium "
                        style={{
                          color: "#027A48",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        82%
                      </p>
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-sm whitespace-nowrap">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      Aug 6, 2022
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <circle cx="21" cy="21" r="21" fill="#014342" />
                        <mask
                          id="mask0_9_8605"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="42"
                          height="42"
                        >
                          <circle cx="21" cy="21" r="21" fill="#014342" />
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

                      <div className="flex flex-col p-2">
                        <p
                          className="text-md font-medium "
                          style={{ color: "#101828", fontSize: "14px" }}
                        >
                          Account Name
                        </p>
                        <p
                          className="text-md font-medium "
                          style={{
                            color: "#667085",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          0293848323
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101828",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      KES 110,950.00
                    </p>
                  </td>

                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      KES 90,069.00
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <span
                      style={{
                        backgroundColor: "#ECFDF3",
                        width: "41",
                        height: "30px",
                      }}
                      className="px-4 py-1 rounded-full font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                    >
                      <p
                        className="text-md font-medium "
                        style={{
                          color: "#027A48",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        82%
                      </p>
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-sm whitespace-nowrap">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      Aug 6, 2022
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <circle cx="21" cy="21" r="21" fill="#014342" />
                        <mask
                          id="mask0_9_8605"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="42"
                          height="42"
                        >
                          <circle cx="21" cy="21" r="21" fill="#014342" />
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

                      <div className="flex flex-col p-2">
                        <p
                          className="text-md font-medium "
                          style={{ color: "#101828", fontSize: "14px" }}
                        >
                          Account Name
                        </p>
                        <p
                          className="text-md font-medium "
                          style={{
                            color: "#667085",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          0293848323
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101828",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      KES 110,950.00
                    </p>
                  </td>

                  <td className="p-3 text-sm whitespace-nowrap">
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#101010",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      KES 90,069.00
                    </p>
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap">
                    <span
                      style={{
                        backgroundColor: "#ECFDF3",
                        width: "41",
                        height: "30px",
                      }}
                      className="px-4 py-1 rounded-full font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                    >
                      <p
                        className="text-md font-medium "
                        style={{
                          color: "#027A48",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        82%
                      </p>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <p
                    className="text-md font-medium "
                    style={{
                      color: "#101010",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    KES 110,950.00
                  </p>
                </div>
                <div className="text-gray-500">
                  {" "}
                  <p
                    className="text-md font-medium "
                    style={{
                      color: "#101010",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    Aug 6, 2022
                  </p>
                </div>
                <div>
                  <span
                    style={{
                      backgroundColor: "#ECFDF3",
                      width: "41",
                      height: "30px",
                    }}
                    className="px-4 py-1 rounded-full font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                  >
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#027A48",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      82%
                    </p>
                  </span>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                  >
                    <circle cx="21" cy="21" r="21" fill="#014342" />
                    <mask
                      id="mask0_9_8605"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="42"
                      height="42"
                    >
                      <circle cx="21" cy="21" r="21" fill="#014342" />
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

                  <div className="flex flex-col p-2">
                    <p
                      className="text-md font-medium "
                      style={{ color: "#101828", fontSize: "14px" }}
                    >
                      Account Name
                    </p>
                    <p
                      className="text-md font-medium "
                      style={{
                        color: "#667085",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      0293848323
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-black">
                {" "}
                <p
                  className="text-md font-medium "
                  style={{
                    color: "#101828",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  KES 90,069.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"></div> */}
    </>
  );
}

export default RecoOverview;
