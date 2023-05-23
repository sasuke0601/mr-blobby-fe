import React from "react";
import CheckIcon from "../../assets/image/checked.svg";
import NowImg from "../../assets/image/now.png";

interface Phase {
  phase: number;
  content: React.ReactNode;
  className?: string;
  isNow?: boolean;
  isPassed?: boolean;
}

const PhaseItem: React.FC<Phase> = ({
  phase,
  className,
  content,
  isNow,
  isPassed,
}) => {
  return (
    <div
      className={`p-6 rounded-3xl w-[335px] bg-[#EBADB3] mb-12 ${
        className ? className : ""
      }`}
      style={{ boxShadow: "0 0 0 4px #B23943" }}
    >
      <div
        className="p-5 pb-[60px] bg-white rounded-xl min-h-[260px] relative"
        style={{ boxShadow: "0 0 0 4px #B23943" }}
      >
        <h2 className="text-secondary font-extrabold text-[40px]">
          Phase {phase}
        </h2>
        {content}
        {isNow && (
          <img src={NowImg} className="absolute -top-20 -right-20" alt="" />
        )}
        {isPassed && (
          <img src={CheckIcon} className="absolute right-5 bottom-4" alt="" />
        )}
      </div>
    </div>
  );
};

export default PhaseItem;
