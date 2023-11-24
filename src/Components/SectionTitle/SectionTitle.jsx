const SectionTitle = ({ subHeading, mainHeading }) => {
  return (
    <div className="py-8 space-y-5">
      <h5 className="text-2xl font-semibold text-center capitalize">
        {subHeading}
      </h5>
      <h3 className="text-5xl font-bold text-center uppercase">
        {mainHeading}
      </h3>
    </div>
  );
};

export default SectionTitle;
