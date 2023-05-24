import React from "react";
import CheckIcon from "../../assets/image/checked.svg";
import NowImg from "../../assets/image/now.webp";

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
      className={`mx-6 sm:mx-0 p-6 rounded-2xl lg:rounded-3xl bg-[#EBADB3] mb-8 sm:mb-12 ${
        className ? className : ""
      }`}
      style={{ boxShadow: "0 0 0 4px #B23943" }}
    >
      <div
        className="p-5 pb-[60px] bg-white rounded-xl min-h-[200px] sm:min-h-[260px] relative"
        style={{ boxShadow: "0 0 0 4px #B23943" }}
      >
        <h2 className="text-secondary font-extrabold text-[28px] sm:text-[40px]">
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
