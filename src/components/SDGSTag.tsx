export enum SDGSCustomTheme {
  more = "more",
}

const SDGSColors: { [id: number]: string } = {
  1: "text-sdgs-1 border-sdgs-1",
  2: "text-sdgs-2 border-sdgs-2",
  3: "text-sdgs-3 border-sdgs-3",
  4: "text-sdgs-4 border-sdgs-4",
  5: "text-sdgs-5 border-sdgs-5",
  6: "text-sdgs-6 border-sdgs-6",
  7: "text-sdgs-7 border-sdgs-7",
  8: "text-sdgs-8 border-sdgs-8",
  9: "text-sdgs-9 border-sdgs-9",
  10: "text-sdgs-10 border-sdgs-10",
  11: "text-sdgs-11 border-sdgs-11",
  12: "text-sdgs-12 border-sdgs-12",
  13: "text-sdgs-13 border-sdgs-13",
  14: "text-sdgs-14 border-sdgs-14",
  15: "text-sdgs-15 border-sdgs-15",
  16: "text-sdgs-16 border-sdgs-16",
  17: "text-sdgs-17 border-sdgs-17",
};

const moreStyles =
  "text-lime-600 hover:text-lime-400 cursor-pointer float-right mb-0 border-lime-600 hover:border-lime-400";

interface baseSDGSTag {
  val: number;
}

interface moreTag {
  val: SDGSCustomTheme.more;
  opened: boolean;
  onClick: () => void;
}
const SDGSTag = (props: baseSDGSTag | moreTag) => {
  const goalTheme =
    props.val === SDGSCustomTheme.more
      ? moreStyles
      : `${SDGSColors[props.val] || SDGSColors[1]}`;

  const containerStyles = `inline-block rounded-md py-1 border border-solid m-1 w-8 text-center transition-all ${goalTheme}`;

  if (props.val === SDGSCustomTheme.more) {
    return (
      <button className={containerStyles} onClick={props.onClick}>
        <div className={`transition-all ${props.opened && "-rotate-180"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mx-auto"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    );
  }

  return (
    <a
      href={`https://sdgs.un.org/goals/goal${props.val}`}
      target="_blank"
      className={`${containerStyles} hover:opacity-60`}
    >
      {props.val}
    </a>
  );
};

export default SDGSTag;
