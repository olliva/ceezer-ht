"use client";

import { useState } from "react";
import SDGSTag, { SDGSCustomTheme } from "./SDGSTag";

export interface SGDSTagsListProps {
  items: number[];
}

const SDGSTagsList = (props: SGDSTagsListProps) => {
  const isLongView = props.items.length > 3;
  const [isOpened, setIsOpened] = useState(false);
  const classesForLongView = {
    parent: `bg-white ${isOpened ? "overflow-visible" : "overflow-hidden"}`,
    child: "-mx-px border rounded-b-md border-t-0 border-slate-300",
  };

  const processedList: React.ReactNode[] = [];

  const handleMoreClick = () => {
    setIsOpened((prev) => !prev);
  };

  props.items.forEach((goal, index) => {
    if (index === 3) {
      processedList.push(
        <SDGSTag
          key={SDGSCustomTheme.more}
          val={SDGSCustomTheme.more}
          opened={isOpened}
          onClick={handleMoreClick}
        />
      );
    }
    processedList.push(<SDGSTag key={goal} val={goal} />);
  });

  return (
    <div
      className={`text-sm -mx-4 h-9 relative ${
        isLongView ? classesForLongView.parent : ""
      }`}
    >
      <div
        className={`bg-white px-4 pb-2 ${
          isLongView ? classesForLongView.child : ""
        }`}
      >
        <div className="-mx-1">{processedList}</div>
      </div>
    </div>
  );
};

export default SDGSTagsList;
