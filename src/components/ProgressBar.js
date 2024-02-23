import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="relative h-[25px] w-[500px] bg-gray-300 border border-black rounded-[15px] overflow-hidden">
      <span
        className="absolute flex justify-center w-full items-center"
        style={{ color: percent > 49 ? "white" : "black", zIndex: 2 }}
      >
        {percent.toFixed()}%
      </span>
      <div
        className="progress-fill"
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
};

export default ProgressBar;
