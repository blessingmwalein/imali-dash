function RecoCard(props: any) {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full mr-3 mb-3">
      <div className="flex flex-row justify-between">
        <img
          src={`../../images/${props.data.image}`}
          width={"48px"}
          height={"48px"}
          alt="wallet"
        ></img>
        <button
          type="button"
          style={{ backgroundColor: "#F2F2F2", color:"#555555" }}
          className=" flex  font-medium leading-tight uppercase rounded  transition duration-150 ease-in-out h-7 w-14 px-1 py-1"
        >
          KEY
         <span className="p-2">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          
          >
            <path
              d="M13.3498 1.6625L7.19982 7.83125C7.12482 7.89375 7.05282 7.9375 6.98382 7.9625C6.91532 7.9875 6.84357 8 6.76857 8C6.69357 8 6.62157 7.9875 6.55257 7.9625C6.48407 7.9375 6.41232 7.89375 6.33732 7.83125L0.168567 1.64375C0.056067 1.54375 -0.000183105 1.41875 -0.000183105 1.26875C-0.000183105 1.11875 0.0623169 0.9875 0.187317 0.875C0.299817 0.7625 0.434067 0.70625 0.590067 0.70625C0.746567 0.70625 0.874817 0.7625 0.974817 0.875L6.76857 6.65L12.5623 0.85625C12.6748 0.74375 12.8028 0.6875 12.9463 0.6875C13.0903 0.6875 13.2248 0.75 13.3498 0.875C13.4623 0.9875 13.5186 1.11875 13.5186 1.26875C13.5186 1.41875 13.4623 1.55 13.3498 1.6625Z"
              fill="#555555"
            />
          </svg>
         </span>
        </button>
      </div>

      <p
        className="text-md font-medium "
        style={{ color: "#667085", fontSize: "14px" }}
      >
        {props.data.heading}
      </p>
      <p
        className="text-md font-medium "
        style={{ color: "#101828", fontSize: "32px" }}
      >
        {props.data.value}
      </p>
    </div>
  );
}

export default RecoCard;
