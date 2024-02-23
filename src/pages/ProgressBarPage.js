import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";

const ProgressBarPage = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center gap-7">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Completed!" : "Processing..."}</span>
    </div>
  );
};

export default ProgressBarPage;
