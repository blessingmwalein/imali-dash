function CustomerCard(props : any) {
  return (
    <div
      className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mr-8"
      style={{ width: "327px" }}
    >
      <p
        className="text-md font-medium "
        style={{ color: "#101828", fontSize: "16px", fontWeight: 500 }}
      >
        {props.data.heading}
      </p>

      <p
        className="text-md font-medium "
        style={{ color: "#101828", fontSize: "36px", fontWeight: 600 }}
      >
        {props.data.value}
      </p>
      <p
        className="text-md font-medium flex flex-row"
        style={{ color: "#667085", fontSize: "14px" }}
      >
        <div className="mt-1">
          {props.data.isIncrease ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M7.00002 1.16669V12.8334M7.00002 12.8334L12.8334 7.00002M7.00002 12.8334L1.16669 7.00002"
                stroke="#F04438"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span className="ml-1 mr-1" style={{ color: "#027A48" }}>
          {props.data.percentage}%
        </span>{" "}
        vs last month
      </p>
    </div>
  );
}

export default CustomerCard;
