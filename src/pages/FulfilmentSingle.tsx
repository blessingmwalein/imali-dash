import { Link, useParams } from "react-router-dom";
import "../App.css";
import StatusCard from "./components/StatusCard";
import TransactionCard from "./components/TransactionCard";
import TransactionCardRes from "./components/TransactionCardRes";
import { CustomerModel, customers, Transaction } from "./models/Customer";

//create function to get first name from name string
function getFirstName(name: string) {
  return name.split(" ")[0];
}
function getLastName(name: string) {
  return name.split(" ")[1];
}

function FulfilMentSingle() {
  const { customerId } = useParams<{ customerId: string }>();
  const customer = (): CustomerModel => {
    return (
      customers.find((customer: CustomerModel) => customer.id === customerId) ??
      customers[0]
    );
  };

  return (
    <>
      <div className="flex flex-col mt-4">
        <nav className="rounded-md w-full">
          <ol className="list-reset flex">
            <li>
              <Link to="/customers" className=" ">
                <p
                  className="text-md font-medium primary-header"
                  style={{
                    color: "#101010",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Go Back
                </p>
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <a className=" ">
                <p
                  className="text-md font-medium primary-header"
                  style={{
                    color: "#707070",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {customer().name}
                </p>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className=" flex-grow bg-white rounded mt-4 justify-center">
        <div className="md:flex flex-row py-10  sm:flex-row md:flex-row justify-center hidden">
          <div
            className="flex flex-col  border-r items-start pr-8 justify-center"
            style={{ width: "500px" }}
          >
            <p className="text-md font-medium primary-header">
              Customer's Profile
            </p>

            <div className="flex items-center mt-7">
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
                  {customer().name}
                </p>
                <p
                  className="text-md font-medium "
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Customer
                </p>
              </div>
            </div>
            <div className="form mt-3">
              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    First Name
                  </label>
                  <input
                    placeholder="First Name"
                    value={getFirstName(customer().name)}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "203px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Last Name
                  </label>
                  <input
                    placeholder="Last Name"
                    value={getLastName(customer().name)}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "203px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
              </div>

              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Gender
                  </label>
                  <input
                    placeholder="Lagos"
                    value={customer().personalDetails.gender}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "203px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Date of birth
                  </label>
                  <input
                    placeholder="02 Feb 1990"
                    value={customer().personalDetails.dateOfBirth}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "203px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
              </div>

              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    BVN
                  </label>
                  <input
                    placeholder="Access Bank PLC"
                    value={customer().personalDetails.bvn}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "203px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Bank number
                  </label>
                  <input
                    placeholder="102848393"
                    value={customer().phoneNumber}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "203px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex flex-row md:space-x-4 w-full text-xs border-b mb-1">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Address
                  </label>
                  <input
                    placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                    value={customer().personalDetails.address}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex flex-row md:space-x-4 w-full text-xs mb-1">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Location of Purchase
                  </label>
                  <input
                    placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                    value={customer().personalDetails.locationOfPurchase}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex flex-row md:space-x-4 w-full text-xs mb-1">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Vehicle Model
                  </label>
                  <input
                    placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                    value={customer().personalDetails.vehicleModel}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex flex-row md:space-x-4 w-full text-xs mb-1">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold  py-2 primary-text">
                    Insurance Provider
                  </label>
                  <input
                    placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                    value={customer().personalDetails.insuranceProvider}
                    disabled
                    style={{
                      backgroundColor: "#FAFAFA",
                      color: "#101010",
                      border: "1px solid #FAFAFA",
                      borderRadius: "10px",
                      padding: "10px",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start pl-10 "
            style={{ width: "500px" }}
          >
            <p className="font-semibold text-gray-600 primary-text uppercase">
              fulfilment details
            </p>

            <div
              className="block p-6 rounded-lg bg-white max-w-sm mr-8 border-grey border mt-3"
              style={{ width: "800px" }}
            >
              <div className="flex flex-row">
                <div className="flex flex-col border-r pr-9">
                  <p className="font-semibold text-gray-600 primary-text">
                    Repayment amount
                  </p>
                  <p
                    className="text-md font-medium primary-header"
                    style={{ fontSize: "24px" }}
                  >
                    {customer().fulfilMentDetail.repaymentAmount}
                  </p>
                </div>
                <div className="flex flex-col pl-5">
                  <p className="font-semibold text-gray-600 primary-text">
                    Value of car
                  </p>
                  <p
                    className="text-md font-medium primary-header"
                    style={{ fontSize: "24px" }}
                  >
                    {customer().fulfilMentDetail.valueOfcar}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="block p-6 rounded-lg bg-white max-w-sm mr-8 border-grey border mt-3"
              style={{ width: "800px" }}
            >
              <div className="flex flex-row">
                <div className="flex flex-col border-r pr-9">
                  <p className="font-semibold text-gray-600 primary-text">
                    Repayment duration
                  </p>
                  <p className="text-md font-medium primary-header">
                    {customer().fulfilMentDetail.repaymentDuration}
                  </p>
                </div>
                <div className="flex flex-col pl-5">
                  <p className="font-semibold text-gray-600 primary-text">
                    Repayment ends
                  </p>
                  <p className="text-md font-medium primary-header">
                    {customer().fulfilMentDetail.repaymentEnds}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="block p-6 rounded-lg bg-white max-w-sm mr-8 border-grey border mt-3"
              style={{ width: "800px" }}
            >
              <div className="flex flex-row">
                <div className="flex flex-col border-r pr-9">
                  <p className="font-semibold text-gray-600 primary-text">
                    Transaction date
                  </p>
                  <p className="text-md font-medium primary-header">
                    {customer().fulfilMentDetail.transactionDate}
                  </p>
                </div>
                <div className="flex flex-col pl-5">
                  <p className="font-semibold text-gray-600 primary-text mb-1">
                    Status
                  </p>
                  <StatusCard
                    key={customer().id}
                    status={customer().fulfilMentDetail.status}
                  />
                </div>
              </div>
            </div>
            <p className="font-semibold text-gray-600 primary-text mt-8">
              Upcoming payment
            </p>

            {customer().transaction.map(
              (tran: Transaction, index) =>
                /* check if transaction is pending*/
                (tran.status === "Pending" && (
                  <TransactionCard
                    data={{
                      payment_period: tran.period,
                      date: tran.date,
                      status: tran.status,
                      transaction_id: tran.id,
                      amount: tran.amount,
                    }}
                  />
                )) ||
                (tran.status === "Overdue" && (
                  <TransactionCard
                    data={{
                      payment_period: tran.period,
                      date: tran.date,
                      status: tran.status,
                      transaction_id: tran.id,
                      amount: tran.amount,
                    }}
                  />
                ))
            )}
            <p className="font-semibold text-gray-600 primary-text mt-8">
              Completed payment
            </p>

            {customer().transaction.map(
              (tran: Transaction, index) =>
                /* check if transaction is pending*/
                tran.status === "Paid" && (
                  <TransactionCard
                    data={{
                      payment_period: tran.period,
                      date: tran.date,
                      status: tran.status,
                      transaction_id: tran.id,
                      amount: tran.amount,
                    }}
                  />
                )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex flex-col justify-center">
              <p className="text-md font-medium primary-header">
                Customer's Profile
              </p>

              <div className="flex items-center mt-7">
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
                    {customer().name}
                  </p>
                  <p
                    className="text-md font-medium "
                    style={{
                      color: "#667085",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    Customer
                  </p>
                </div>
              </div>
              <div className="form mt-3">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      First Name
                    </label>
                    <input
                      placeholder="First Name"
                      value={getFirstName(customer().name)}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "203px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Last Name
                    </label>
                    <input
                      placeholder="Last Name"
                      value={getLastName(customer().name)}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "203px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                </div>

                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Gender
                    </label>
                    <input
                      placeholder="Lagos"
                      value={customer().personalDetails.gender}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "203px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Date of birth
                    </label>
                    <input
                      placeholder="02 Feb 1990"
                      value={customer().personalDetails.dateOfBirth}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "203px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                </div>

                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      BVN
                    </label>
                    <input
                      placeholder="Access Bank PLC"
                      value={customer().personalDetails.bvn}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "203px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Phone number
                    </label>
                    <input
                      placeholder="102848393"
                      value={customer().phoneNumber}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        width: "203px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs border-b mb-1">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Address
                    </label>
                    <input
                      placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                      value={customer().personalDetails.address}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs mb-1">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Location of Purchase
                    </label>
                    <input
                      placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                      value={customer().personalDetails.locationOfPurchase}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs mb-1">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Vehicle Model
                    </label>
                    <input
                      placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                      value={customer().personalDetails.vehicleModel}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs mb-1">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold  py-2 primary-text">
                      Insurance Provider
                    </label>
                    <input
                      placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                      value={customer().personalDetails.insuranceProvider}
                      disabled
                      style={{
                        backgroundColor: "#FAFAFA",
                        color: "#101010",
                        border: "1px solid #FAFAFA",
                        borderRadius: "10px",
                        padding: "10px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white space-y-3 p-4 rounded-lg shadow mb-40">
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-gray-600 primary-text uppercase">
                Fulfilment Details
              </p>

              <div className=" p-6 rounded-lg bg-white max-w-sm border-grey border mt-3">
                <div className="flex flex-col">
                  <div className="flex flex-col pb-2">
                    <p className="font-semibold text-gray-600 primary-text">
                      Repayment amount
                    </p>
                    <p
                      className="text-md font-medium primary-header"
                      style={{ fontSize: "24px" }}
                    >
                      {customer().fulfilMentDetail.repaymentAmount}
                    </p>
                  </div>
                  <div className="flex flex-col border-t pt-2">
                    <p className="font-semibold text-gray-600 primary-text">
                      Value of car
                    </p>
                    <p
                      className="text-md font-medium primary-header"
                      style={{ fontSize: "24px" }}
                    >
                      {customer().fulfilMentDetail.valueOfcar}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" p-6 rounded-lg bg-white max-w-sm border-grey border mt-3">
                <div className="flex flex-col">
                  <div className="flex flex-col pb-2">
                    <p className="font-semibold text-gray-600 primary-text">
                      Repayment duration
                    </p>
                    <p className="text-md font-medium primary-header">
                      {customer().fulfilMentDetail.repaymentDuration}
                    </p>
                  </div>
                  <div className="flex flex-col border-t pt-2">
                    <p className="font-semibold text-gray-600 primary-text">
                      Repayment ends
                    </p>
                    <p className="text-md font-medium primary-header">
                      {customer().fulfilMentDetail.repaymentEnds}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" p-6 rounded-lg bg-white max-w-sm border-grey border mt-3">
                <div className="flex flex-col">
                  <div className="flex flex-col pb-2">
                    <p className="font-semibold text-gray-600 primary-text">
                      Transaction date
                    </p>
                    <p className="text-md font-medium primary-header">
                      {customer().fulfilMentDetail.transactionDate}
                    </p>
                  </div>
                  <div className="flex flex-col border-t pt-2">
                    <p className="font-semibold text-gray-600 primary-text mb-1">
                      Status
                    </p>
                    <StatusCard
                      key={customer().id}
                      status={customer().fulfilMentDetail.status}
                    />
                  </div>
                </div>
              </div>
              <p className="font-semibold text-gray-600 primary-text mt-8">
                Upcoming payment
              </p>
              {customer().transaction.map(
                (tran: Transaction, index) =>
                  /* check if transaction is pending*/
                  (tran.status === "Pending" && (
                    <TransactionCardRes
                      data={{
                        payment_period: tran.period,
                        date: tran.date,
                        status: tran.status,
                        transaction_id: tran.id,
                        amount: tran.amount,
                      }}
                    />
                  )) ||
                  (tran.status === "Overdue" && (
                    <TransactionCardRes
                      data={{
                        payment_period: tran.period,
                        date: tran.date,
                        status: tran.status,
                        transaction_id: tran.id,
                        amount: tran.amount,
                      }}
                    />
                  ))
              )}
              <p className="font-semibold text-gray-600 primary-text mt-8">
                Completed payment
              </p>

              {customer().transaction.map(
                (tran: Transaction, index) =>
                  /* check if transaction is pending*/
                  tran.status === "Paid" && (
                    <TransactionCardRes
                      data={{
                        payment_period: tran.period,
                        date: tran.date,
                        status: tran.status,
                        transaction_id: tran.id,
                        amount: tran.amount,
                      }}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FulfilMentSingle;
