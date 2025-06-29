const Skill = () => {
    return (
        <div className="mb-3 skill" id="skill">
            <h1 className="text-4xl font-bold text-center "> Skill</h1> 
            
            <div>
                {/* Html and Css */}
                <div className="flex flex-col sm:flex-row justify-evenly items-center gap-3 mt-10 ml-10 md:ml-0">
                    <div className="mb-4 sm:mb-0">
                        <span className="mr-4 font-bold text-2xl">HTML 5</span>
                        <progress className="progress progress-warning w-72 h-3" value={90} max="100"></progress>
                        <span className="ml-4 font-bold text-2xl">90%</span>
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <span className="mr-4 font-bold text-2xl">Tailwind</span>
                        <progress className="progress progress-warning w-72 h-3" value={95} max="100"></progress>
                        <span className="ml-4 font-bold text-2xl">95%</span>
                    </div>
                </div>

                {/* React and nextJs */}
                <div className="flex flex-col sm:flex-row justify-evenly items-center gap-3 mt-10 ml-10 md:ml-0">
                    <div className="mb-4 sm:mb-0">
                        <span className="mr-4 font-bold text-2xl">React JS</span>
                        <progress className="progress progress-warning w-72 h-3" value={90} max="100"></progress>
                        <span className="ml-4 font-bold text-2xl">90%</span>
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <span className="mr-4 font-bold text-2xl">Next Js</span>
                        <progress className="progress progress-warning w-72 h-3" value={20} max="100"></progress>
                        <span className="ml-4 font-bold text-2xl">20%</span>
                    </div>
                </div>

                {/* MongoDB and Express JS */}
                <div className="flex flex-col sm:flex-row justify-evenly items-center gap-3 mt-10 ml-10 md:ml-0">
                    <div className="mb-4 sm:mb-0">
                        <span className="mr-4 font-bold text-2xl">MongoDB</span>
                        <progress className="progress progress-warning w-72 h-3" value={70} max="100"></progress>
                        <span className="ml-4 font-bold text-2xl">70%</span>
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <span className="mr-4 font-bold text-2xl">Express Js</span>
                        <progress className="progress progress-warning w-72 h-3" value={80} max="100"></progress>
                        <span className="ml-4 font-bold text-2xl">80%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
