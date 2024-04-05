import React from "react";

function CoordinatesDisplay({ startingCoords, endCoords, speed }) {
  return (
    <div className="border border-slate-300  rounded-xl p-3 mt-5 mx-auto w-[58%] lg:w-[58%] text-[9px]  md:text-base sm:text-[12px]  flex justify-between mb-6">
      <div>
        <strong>Starting </strong>
        <div className="flex pt-6">
          <h1 className="font-bold pr-1">Lat:</h1>
          {startingCoords[0]}
        </div>
        <h1 className="font-bold  inline pr-1">Long:</h1>
        {startingCoords[1]}
      </div>
      <div className="flex items-center">
        <h1 className="font-bold pr-1 text-blue-600">Speed:</h1>
        <span className="text-blue-600">{speed}kmph</span>
      </div>
      <div>
        <strong>Ending </strong>
        <div className="flex pt-6">
          <h1 className="font-bold pr-1">Lat:</h1>
          {endCoords[0]}
        </div>
        <h1 className="font-bold inline pr-1">Long:</h1>
        {endCoords[1]}
      </div>
    </div>
  );
}

export default CoordinatesDisplay;
