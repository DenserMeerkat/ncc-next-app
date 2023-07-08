import { Tent, Text, List, Hourglass } from "lucide-react";

const CampButton = (props: any) => {
  //Props
  const id = props.id;
  const title = props.title;
  const active = props.active;
  const onClick = props.onClick;

  //Tailwind CSS
  const buttonTail = `border rounded-md col-span-3 sm:col-span-2 md:col-span-3 flex px-6 py-3 transition-colors select-none`;
  const activeTail = `bg-sky-200/[0.8] dark:bg-slate-800/[0.9] text-sky-950 dark:text-slate-100 border-sky-300 dark:border-slate-700 `;

  const iconTail = `p-0.5 mr-3`;
  const inactiveIconTail = `text-sky-900/[0.5] dark:text-sky-300/[0.5]`;
  const activeIconTail = `text-sky-600 dark:text-sky-400`;

  const inactiveTitleTail = `font-medium text-sky-900/[0.8] dark:text-slate-200/[0.8]`;
  const activeTitleTail = `font-bold text-sky-600 dark:text-sky-400`;

  //Render
  return (
    <button
      key={id}
      className={`${buttonTail} ${active ? activeTail : ""}`}
      onClick={() => {
        onClick(id);
      }}
    >
      <Tent
        className={`${iconTail} ${active ? activeIconTail : inactiveIconTail}`}
      />
      <h4 className={`${active ? activeTitleTail : inactiveTitleTail}`}>
        {title}
      </h4>
    </button>
  );
};

type CampCardProps = {
  activities: string[];
  shortTitle: string;
  duration: string;
  desc: string;
  active: boolean;
};

const CampCard: React.FC<CampCardProps & React.HTMLProps<HTMLDivElement>> = ({
  activities,
  ...props
}) => {
  //Props
  const id = props.id;
  const title = props.title;
  const shortTitle = props.shortTitle;
  const duration = props.duration;
  const desc = props.desc;
  const active = props.active;

  //Tailwind CSS
  const cardTail = `border-2 rounded-md p-4 bg-sky-100 dark:bg-slate-900 dark:border-slate-800 opacity-100 transition-opacity duration-500`;
  const inactiveCardTail = `hidden opacity-0 transition-opacity duration-500`;

  const titleTail = `text-xl lg:text-2xl font-bold text-sky-900 dark:text-sky-200`;
  const shortTitleTail = `w-fit px-2 py-0.5 rounded-lg text-base font-bold border
      border-sky-400 dark:border-sky-600 bg-sky-200 dark:bg-sky-900 text-sky-950 dark:text-sky-200`;

  const iconTail = `p-1 mr-2 pl-0 text-rose-800 dark:text-rose-300/[0.7]`;
  const subHeadingTail = `text-base font-bold text-rose-900 dark:text-rose-300/[0.7]`;

  const descTail = `pl-2 text-sm sm:text-base dark:text-sky-200/[0.7] mb-4`;
  const activityTail = `pl-2 text-sm sm:text-base dark:text-sky-200/[0.7]`;

  function subHeading(Icon: any, title: string) {
    return (
      <div className="flex items-center mb-2 ">
        <Icon className={iconTail} />
        <h4 className={subHeadingTail}>{title}</h4>
      </div>
    );
  }
  //Render
  return (
    <div key={id} className={active ? cardTail : inactiveCardTail}>
      <div className="flex flex-col min-[460px]:flex-row items:start min-[460px]:items-center gap-2 mb-2 pl-2 pb-3 border-b">
        <p className={shortTitleTail}>{shortTitle}</p>
        <h3 className={titleTail}>{title}</h3>
      </div>
      {subHeading(Text, "Description")}
      <p className={descTail}>{desc}</p>
      <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-end justify-between">
        <div>
          {subHeading(List, "Activities")}
          <ul className="list-disc list-inside ">
            {activities.map((activity: string, index) => (
              <li key={index} className={activityTail}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end mt-3 min-[460px]:mt-0">
          <div
            className="flex items-center border-2 px-1 pr-2.5 py-0.5 rounded-md
        bg-slate-50 dark:bg-slate-950 text-sky-900 dark:text-cyan-300
        font-bold  dark:font-medium"
          >
            <Hourglass className="p-[0.425rem] sm:p-1.5 mr-1" />
            <p className="text-xs sm:text-sm ">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CampButton, CampCard };
