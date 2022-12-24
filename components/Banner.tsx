import React from "react";

function Banner() {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl">Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            Every Developers
          </span>{" "}
          favorite blog in the Devosphere
        </h2>
      </div>
      {/* <p className="max-w-sm mt-5 text-gray-400 md:mt-2">
        New product feature | The latest in technology | The weekly debugging
        nightmares & More!
      </p> */}
    </div>
  );
}

export default Banner;
