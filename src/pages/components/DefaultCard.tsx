function DefaultCard(props : any) {
  return (
    <div
      className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mr-8"
      style={{ width: "327px" }}
    >
      <div className="flex flex-row justify-between">
        <img
          src={`../../images/${props.data.image}`}
          width={"48px"}
          height={"48px"}
          alt="wallet"
        ></img>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
        >
          <path
            d="M2.00002 8.83334C2.46026 8.83334 2.83335 8.46025 2.83335 8.00001C2.83335 7.53977 2.46026 7.16668 2.00002 7.16668C1.53978 7.16668 1.16669 7.53977 1.16669 8.00001C1.16669 8.46025 1.53978 8.83334 2.00002 8.83334Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.00002 3.00001C2.46026 3.00001 2.83335 2.62691 2.83335 2.16668C2.83335 1.70644 2.46026 1.33334 2.00002 1.33334C1.53978 1.33334 1.16669 1.70644 1.16669 2.16668C1.16669 2.62691 1.53978 3.00001 2.00002 3.00001Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.00002 14.6667C2.46026 14.6667 2.83335 14.2936 2.83335 13.8333C2.83335 13.3731 2.46026 13 2.00002 13C1.53978 13 1.16669 13.3731 1.16669 13.8333C1.16669 14.2936 1.53978 14.6667 2.00002 14.6667Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <p
        className="text-md font-medium "
        style={{ color: "#667085", fontSize: "14px" }}
      >
        {props.data.heading}
      </p>
      <div className="flex flex-row justify-between">
        <p
          className="text-md font-medium "
          style={{ color: "#101828", fontSize: "32px" }}
        >
          {props.data.value}
        </p>
        {props.data.perce ? (
          <span
            style={{
              backgroundColor: "#ECFDF3",
              width: "90px",
              height: "30px",
            }}
            className="flex-row px-2 py-1 rounded-full font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease"
          >
            <p
              className="text-md font-medium flex flex-row"
              style={{ color: "#667085", fontSize: "14px" }}
            >
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M6.99996 12.8334V1.16669M6.99996 1.16669L1.16663 7.00002M6.99996 1.16669L12.8333 7.00002"
                    stroke="#12B76A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-1 mr-1" style={{ color: "#027A48" }}>
                {props.data.perce} %
              </span>
            </p>
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default DefaultCard;
