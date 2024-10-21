import React, { useEffect, useState } from "react";

type Props = {
  insidePercent: number; // % progress of the inside circle
  outsidePercent: number; // % progress of the outside circle
	data: any
};

const ProcessCircle = ({ insidePercent, outsidePercent, data }: Props) => {
  const calculateDasharray = (r: number): number => {
    return Math.PI * r * 2;
  };
	const [currentDate, setCurrentDate] = useState(0)

  const calculateDashoffset = (
    percentageShown: number,
    circumference: number,
  ): number => {
    return ((100 - percentageShown) / 100) * circumference;
  };
  const outsideCircleProperties = {
    radius: 220,
    strokeWidth: 12,
    cx: 232,
    cy: 232,
    transform: "rotate(-90 232 232)",
    dashArray: calculateDasharray(220),
  };
  const insideCircleProperties = {
    radius: 180,
    strokeWidth: 12,
    cx: 232,
    cy: 232,
    transform: "rotate(-90 232 232)",
    dashArray: calculateDasharray(180),
  };
  const [streamedDashOffset, setStreamedDashOffset] = useState(0);
  const [withDrawnDashOffset, setWithDrawnDashOffset] = useState(0);

  useEffect(() => {
    const newWithDrawnDashOffset = calculateDashoffset(
      insidePercent,
      insideCircleProperties?.dashArray,
    );
    const newStreamedDashOffset = calculateDashoffset(
      outsidePercent,
      outsideCircleProperties?.dashArray,
    );
    setWithDrawnDashOffset(newWithDrawnDashOffset);
    setStreamedDashOffset(newStreamedDashOffset);
  }, [outsideCircleProperties.radius]);

	useEffect(() => {
		setCurrentDate(new Date().getTime() / 1000)
	}, [])
  return (
    <svg
      width={464}
      height={464}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 464 464"
    >
      {/* background outside circle */}
      <circle
        cx={outsideCircleProperties?.cx}
        cy={outsideCircleProperties?.cy}
        r={outsideCircleProperties?.radius}
        fill="none"
        stroke="#2a2e41bf"
        strokeWidth={outsideCircleProperties?.strokeWidth}
        strokeDasharray={outsideCircleProperties?.dashArray}
        className="dash"
        transform={outsideCircleProperties?.transform}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <circle
        cx={outsideCircleProperties?.cx}
        cy={outsideCircleProperties?.cy}
        r={outsideCircleProperties?.radius}
        fill="none"
        stroke="#50566926"
        strokeWidth={outsideCircleProperties?.strokeWidth}
        strokeDasharray={outsideCircleProperties?.dashArray}
        className="dash"
        transform={outsideCircleProperties?.transform}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          from={outsideCircleProperties?.dashArray}
          to="0"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* main outside circle */}
      <circle
        cx={outsideCircleProperties?.cx}
        cy={outsideCircleProperties?.cy}
        r={outsideCircleProperties?.radius}
        fill="none"
        stroke="#00b7ff"
        strokeWidth={outsideCircleProperties?.strokeWidth}
        strokeDasharray={outsideCircleProperties?.dashArray}
        transform={outsideCircleProperties?.transform}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          id="animation1"
          attributeName="stroke-dashoffset"
          from={outsideCircleProperties?.dashArray}
          to={streamedDashOffset}
          dur="5s"
          fill="freeze"
        />
        <animate
          id="animation2"
          attributeName="stroke-dashoffset"
          from={streamedDashOffset}
          to="0"
          dur={`${data?.endTime - currentDate}s`}
          begin="animation1.end"
          fill="freeze"
        />
      </circle>

      {/* background inside circle */}
      <circle
        cx={insideCircleProperties?.cx}
        cy={insideCircleProperties?.cy}
        r={insideCircleProperties?.radius}
        fill="none"
        stroke="#2a2e41bf"
        strokeWidth={insideCircleProperties?.strokeWidth}
        strokeDasharray={insideCircleProperties?.dashArray}
        className="dash"
        transform={insideCircleProperties?.transform}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <circle
        cx={insideCircleProperties?.cx}
        cy={insideCircleProperties?.cy}
        r={insideCircleProperties?.radius}
        fill="none"
        stroke="#50566926"
        strokeWidth={insideCircleProperties?.strokeWidth}
        strokeDasharray={insideCircleProperties?.dashArray}
        className="dash"
        transform={insideCircleProperties?.transform}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          from={insideCircleProperties?.dashArray}
          to="0"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* main inside circle */}
      <circle
        cx={insideCircleProperties?.cx}
        cy={insideCircleProperties?.cy}
        r={insideCircleProperties?.radius}
        fill="none"
        stroke="#ffb800"
        strokeWidth={insideCircleProperties?.strokeWidth}
        strokeDasharray={insideCircleProperties?.dashArray}
        className="dash"
        transform={insideCircleProperties?.transform}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          from={insideCircleProperties?.dashArray}
          to={withDrawnDashOffset}
          dur="5s"
          fill="freeze"
        />
      </circle>
    </svg>
  );
};

export default ProcessCircle;
