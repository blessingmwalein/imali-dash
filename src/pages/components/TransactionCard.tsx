import StatusCard from "./StatusCard";

function TransactionCard(props: any) {
  return (
    <div className="flex flex-row items-center justify-between mt-3">
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
          {props.data.payment_period} Payment
        </p>
        <p
          className="text-md font-medium "
          style={{
            color: "#667085",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          {props.data.date}
        </p>
      </div>
      <StatusCard key={props.data.id} status={props.data.status} />

      <p
        className="text-md font-medium justify-end ml-20"
        style={{ color: "#101828", fontSize: "14px", right: "0" }}
      >
        {props.data.amount}
      </p>
    </div>
  );
}

export default TransactionCard;




