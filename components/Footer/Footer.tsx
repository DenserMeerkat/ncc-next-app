import FootContent from "./FootContent";

const Footer = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1888.347345882905!2d80.23441626924641!3d13.012714868290052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f8747b9a3%3A0x707473b3fa954cc!2sNCC%20Building!5e0!3m2!1sen!2sin!4v1686986939234!5m2!1sen!2sin";
  return (
    <footer className=" border-t border-gray-300 dark:border-slate-800/[0.7] bg-slate-100 dark:bg-slate-900/[0.8]">
      <div className="max-w-7xl mx-auto py-4 pb-6 flex flex-wrap items-center justify-center gap-1 sm:gap-4">
        <iframe
          className={`h-72 lg:h-[26rem] rounded-sm sm:rounded-md m-2 border-2 border-gray-300 dark:border-slate-700 
          min-w-[300px]  drop-shadow-sm dark:drop-shadow-none select-none`}
          src={mapSrc}
          width="600"
          loading="lazy"
        />
        <FootContent />
      </div>
      <div
        className="text-xs py-1 pb-2 border-t border-gray-300 dark:border-slate-800/[0.8] text-center 
      text-slate-600 dark:text-slate-500 bg-white dark:bg-slate-950"
      >
        Copyright © 2023 NCC Army Wing, Anna University.
      </div>
    </footer>
  );
};

export default Footer;
