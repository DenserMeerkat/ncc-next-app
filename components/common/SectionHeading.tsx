import React from "react";

const SectionHeading = (props: any) => {
  const className = props.className;
  const customIcon = props.customIcon;
  const IconComponent = props.icon;
  const title = props.title;
  const iconTail =
    "p-1.5 w-7 h-7 mr-1.5 rounded-md border border-rose-300 dark:border-slate-700  bg-rose-200 dark:bg-slate-800";
  return (
    <div
      className={`w-fit flex items-center ml-1.5 px-1 pb-3 border-b-2 ${className}`}
    >
      <div className=" mr-3 flex items-center ">
        {customIcon ? customIcon : <IconComponent className={iconTail} />}
      </div>
      <p className="text-sm tracking-widest font-medium">{title}</p>
    </div>
  );
};

export default SectionHeading;
