import "../App.css";
import OverviewCard from "./components/OverviewCard";
import StatusCard from "./components/StatusCard";
import { OverviewCardModel } from "./models/Cards";
import { CustomerModel, customers } from "./models/Customer";

var overviewCards: OverviewCardModel[] = [
  {
    image: "wallet.png",
    heading: "Total outstanding balance",
    value: "6,709,288",
  },
  {
    image: "dollar_sign.png",
    heading: "Total repayment pending",
    value: "72,864",
  },
  {
    image: "transaction.png",
    heading: "Total trasaction counts",
    value: "3,062",
  },
];
function Overview() {
  console.log(customers);
  return (
    <>
      <h1 className="primary-heading">Overview</h1>

      <div className="flex flex-col mt-4">
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col md:justify-between ">
          {overviewCards.map((card: any, index) => (
            <OverviewCard key={index} data={card} />
          ))}
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
            placeholder="Search for customer’s name"
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
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Customers
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Deposit
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Date
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Voucher Number
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    Trans. Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {customers.map((customer: CustomerModel, index) => (
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
                            {customer.name}
                          </p>
                          <p
                            className="text-md font-medium "
                            style={{
                              color: "#667085",
                              fontSize: "14px",
                              fontWeight: 400,
                            }}
                          >
                            {customer.phoneNumber}
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
                        {customer.deposit}
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
                        {customer.date}
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
                        {customer.voucherNumber}
                      </p>
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      <StatusCard
                        key={customer.id}
                        status={customer.transStatus}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {customers.map((customer: CustomerModel, index) => (
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
                      {customer.voucherNumber}
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
                      {customer.date}
                    </p>
                  </div>
                  <div>
                    <StatusCard
                      key={customer.id}
                      status={customer.transStatus}
                    />
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
                        {customer.name}
                      </p>
                      <p
                        className="text-md font-medium "
                        style={{
                          color: "#667085",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        {customer.phoneNumber}
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
                    {customer.deposit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flew-col justify-center mr-3 mt-8">
        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item mr-2">
                <a
                  style={{
                    fontWeight: 500,
                    color: "#101010",
                    fontSize: "14px",
                  }}
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                >
                  1
                </a>
              </li>
              <li className="page-item active mr-2">
                <a
                  style={{
                    backgroundColor: "#EAEAEA",
                    fontWeight: 500,
                    color: "#101010",
                    fontSize: "14px",
                  }}
                  className="page-link relative block py-1.5 px-3 border-0  outline-none transition-all duration-300 rounded hover:text-white "
                >
                  2
                </a>
              </li>
              <li className="page-item mr-2">
                <a
                  style={{
                    fontWeight: 500,
                    color: "#101010",
                    fontSize: "14px",
                  }}
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                >
                  ....
                </a>
              </li>
              <li className="page-item mr-2">
                <a
                  style={{
                    fontWeight: 500,
                    color: "#101010",
                    fontSize: "14px",
                  }}
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                >
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"></div> */}
    </>
  );
}

export default Overview;
