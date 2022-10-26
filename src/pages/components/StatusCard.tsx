import { Status } from "../models/Customer";

function getStatusColor(status: any) {
  console.log(status);

  switch (status) {
    case Status.Successfull:
      return { back: "#ECFDF3", front: "#027A48" };
    case Status.Failed:
      return { back: "#FEF3F2", front: "#B42318" };
    case Status.Verified:
      return { back: "#ECFDF3", front: "#027A48" };
    case Status.Active:
      return { back: "#ECFDF3", front: "#027A48" };
    case Status.Overdue:
      return { back: "#FEF3F2", front: "#B42318" };
    case Status.Pending:
      return { back: "#FFFAEB", front: "#D68F00" };
    case Status.Paid:
      return { back: "#EFF8FF", front: "#175CD3" };
    default:
      return { back: "#FFFAEB", front: "#D68F00" };
  }
}
function StatusCard(props: any) {
  console.log(props);
  return (
    <span
      style={{
        backgroundColor: getStatusColor(props.status).back,
        width: "85px",
        height: "30px",
      }}
      className="px-4 py-1 rounded-full font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
    >
      <p
        className="text-md font-medium "
        style={{
          color: getStatusColor(props.status).front,
          fontSize: "12px",
          fontWeight: 500,
        }}
      >
        {props.status}
      </p>
    </span>
  );
}

export default StatusCard;
