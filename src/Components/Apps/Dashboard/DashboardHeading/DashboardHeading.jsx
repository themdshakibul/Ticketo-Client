const DashboardHeading = ({ title, description }) => {
  return (
    <div>
      <div className="border-b border-white/5 pb-5 space-y-3">
        <h2 className="text-3xl font-extrabold text-white">{title}</h2>
        <p className="font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default DashboardHeading;
