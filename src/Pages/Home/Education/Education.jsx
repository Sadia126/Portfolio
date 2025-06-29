const Eduction = () => {
  return (
    <div className="education" id="education">
      <h1 className="text-4xl font-bold text-center mt-20 mb-20 ">
        
        Education
      </h1>
      <div className="mb-3 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-3 ">
        {/* Card 1 */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-[#c3902c]">
              2024 - Ongoing
            </h2>
            <p className="text-lg font-medium">
              B.Sc Hons. In Computer Science And Engineering
            </p>
            <p className="text-base font-medium">
              BGC Trust University Bangladesh
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-[#c3902c]">
              2020 - 2022
            </h2>
            <p className="text-lg font-medium">H.S.C</p>
            <p className="text-base font-medium">Marine Academy school and collage</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-[#c3902c]">
              2014 - 2020
            </h2>
            <p className="text-lg font-medium">S.S.C</p>
            <p className="text-base font-medium">
              Hajeegaon Sholkata S.J Nijam High School
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduction;
