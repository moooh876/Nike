import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="grid items-center">
        <a
          href="https://villanyiborfesztival.hu/YXJ5LzN0MmE3ZjZ1OHMxczk0"
          target="blank"
        >
          <h1
            className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
          >
            {title}
          </h1>
        </a>
      </div>
    </>
  );
};

export default Title;
