function OverviewCard(props : any) {
  return (
    <div
      className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mr-8"
      style={{ width: "327px" }}
    >
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        <img
          src={`../../images/${props.data.image}`}
          width={"48px"}
          height={"48px"}
          alt="wallet"
        ></img>
      </h5>

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

export default OverviewCard;
