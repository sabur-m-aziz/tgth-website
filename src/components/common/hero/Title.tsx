const Title = ({
  titleOne,
  titleTwo,
  descrption,
}: {
  titleOne: string;
  titleTwo: string;
  descrption: string;
}) => {
  return (
    <div className="md:w-[60%]">
      <div className="text-center md:text-left mb-6 mt-7">
        <h1 className="text-2xl md:text-4xl md:leading-14.5 text-white">
          {titleOne}
          <br />
          {titleTwo}
        </h1>
        <p className="text-white text-base md:text-2xl font-sans mt-4 font-light">
          <span className="lg:block">{descrption}</span>
        </p>
      </div>
    </div>
  );
};

export default Title;
