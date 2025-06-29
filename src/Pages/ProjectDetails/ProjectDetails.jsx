import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";



const ProjectDetails = () => {
const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((p) => p.id === id);
        setProject(matched);
      })
      .catch((err) => console.error("Failed to fetch project details:", err));
  }, [id]);

  if (!project) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Loading project details...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#c3902c]">
        {project.name}
      </h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-72 object-cover rounded-lg mb-8 shadow-md"
      />
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 Tech Stack</h2>
          <ul className="list-disc list-inside flex flex-wrap gap-3">
            {project.techStack.map((tech, idx) => (
              <li key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">📌 Description</h2>
          <p className="text-lg">{project.description}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🔗 Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#c3902c] hover:bg-[#b6811c] text-white"
            >
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-[#c3902c] text-[#c3902c] hover:bg-[#c3902c] hover:text-white"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">⚠️ Challenges</h2>
          <ul className="list-disc list-inside text-base text-gray-700">
            {project.challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">✨ Future Improvements</h2>
          <ul className="list-disc list-inside text-base text-gray-700">
            {project.improvements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/#project"
            className="text-[#c3902c] underline hover:text-[#b6811c]"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
