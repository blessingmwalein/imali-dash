import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

function RecoCardEnd(props: any) {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full mr-3 mb-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-end">
          <div></div>
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
            {props.data.value}{" "}
            <span
              style={{ color: "#B5B5B5", fontWeight: "500", fontSize: "24px" }}
            >
              {" "}
              /100%
            </span>
          </p>
        </div>

        {/* create circular progress*/}
        <div style={{ height: "132px", width: "132px" }}>
          <CircularProgressbar
            value={props.data.value}
            text={`${props.data.value}%`}
            background={true}
            styles={buildStyles({
              textSize: "32px",

              pathColor: "#FEAA00",
              textColor: "#101828",
              trailColor: "#F2E4C6",
              backgroundColor: "#FFF0D1",
            })}
          />
          ;
        </div>
      </div>
    </div>
  );
}

export default RecoCardEnd;
