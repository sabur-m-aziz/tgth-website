"use client";

import Button from "./Button";

const SaveClient = () => {
  return (
    <section>
      <div className="bg-[url('/images/template/saveclientbg.svg')] bg-cover bg-center bg-no-repeat md:h-[330px] py-4">
        <div className="flex flex-col justify-center items-center text-center h-full space-y-6 px-4">
          <p className="text-white text-2xl md:text-5xl leading-snug font-barlow">
            Are you ready to save up to 70%?
          </p>
          <Button
            onClick={() => {
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SaveClient;
