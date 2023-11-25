const SectionTitle = ({ subHeading, mainHeading }) => {
  return (
    <div className="py-8 space-y-5">
      <h5 className="md:text-2xl text-xl font-semibold text-center capitalize">
        {subHeading}
      </h5>
      <h3 className="md:text-4xl text-2xl font-bold text-center uppercase">
        {mainHeading}
      </h3>
    </div>
  );
};

export default SectionTitle;
