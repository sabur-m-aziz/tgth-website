import Button from "../hero/Button";

const SaveClient = () => {
  return (
    <section>
      <div className="bg-[url('/images/template/saveclientbg.svg')] bg-cover bg-center bg-no-repeat md:h-[330px] py-4">
        <div className="flex flex-col justify-center items-center text-center h-full space-y-6 px-4">
          <p className="text-white text-2xl md:text-5xl leading-snug">
            Are you ready to save up to 70%? 
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default SaveClient;
