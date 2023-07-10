import React from "react";

const SectionHeading = (props: any) => {
  const className = props.className;
  const customIcon = props.customIcon;
  const IconComponent = props.icon;
  const title = props.title;
  const iconTail = `p-1.5 w-7 h-7 mr-1.5 rounded-md border border-sky-300 dark:border-slate-700  
  bg-sky-200 dark:bg-slate-800 dark:text-cyan-200`;
  return (
    <div
      className={`w-fit flex items-center ml-1.5 px-1 pb-3 border-b-2 ${className}`}
    >
      <div className=" mr-2 flex items-center ">
        {customIcon ? customIcon : <IconComponent className={iconTail} />}
      </div>
      <h2 className="text-sm tracking-wide font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeading;
