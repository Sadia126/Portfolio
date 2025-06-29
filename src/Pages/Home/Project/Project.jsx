import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Project = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);


  return (
    <div id="project" className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        🚀 Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-white shadow-xl rounded-xl overflow-hidden"
          >
            <figure>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body space-y-4">
              <h2 className="text-xl font-semibold text-center text-[#c3902c]">
                {project.name}
              </h2>
              <div className="flex flex-col gap-3">
               
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="btn border border-[#c3902c] text-[#c3902c] hover:bg-[#c3902c] hover:text-white"
                >
                   View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
