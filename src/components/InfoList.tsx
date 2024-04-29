interface InfoListProps {
  lines: [key: string, value: string | number][];
  classString?: string;
}
const InfoList = (props: InfoListProps) => {
  return (
    <div className={`text-sm ${props.classString || ""} flex`}>
      {props.lines.map((line) => (
        <span key={line[0]} className="w-36 inline-block -mr-px grow">
          <span className="text-slate-600">{line[0]}:</span> {line[1]}
        </span>
      ))}
    </div>
  );
};

export default InfoList;
