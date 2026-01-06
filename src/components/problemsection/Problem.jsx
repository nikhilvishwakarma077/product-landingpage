import React from "react";
import Cards from "./Cards";
import PageHeading from "../common/PageHeading";

const Problem = () => {
    return (
        <div className="w-full bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center gap-12 px-5 sm:px-10 md:px-20 py-16 text-white">
            <PageHeading title={"The Difference is Clear."} text={"Stop setting for less. Compare the old standard with the new wave of audio freedom"} />
            <Cards />
        </div>
    );
};



export default Problem;
