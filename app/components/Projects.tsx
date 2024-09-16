import { Link } from "@remix-run/react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
}

export default function Projects({ projects }: any) {

    const { ref: projectsRef, inView: projectsInView } = useInView({
        threshold: 0.2
    });

    const reversedProjects = projects?.portfolioProjects?.slice().reverse();
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        if (currentIndex < reversedProjects.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            scroll(reversedProjects[nextIndex].id);
        }
    };
    const handlePrevious = () => {
        if (currentIndex > 0) {
            const previousIndex = currentIndex - 1;
            setCurrentIndex(previousIndex);
            scroll(reversedProjects[previousIndex].id);
        }
    };

    return (
        <div className="container mx-auto lg:max-w-screen-lg mt-12 relative" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#FEFAF6] dark:from-[#222831] z-10"></div>
            {currentIndex > 0 ? (
                <button aria-label="Previous" className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10" onClick={handlePrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="hidden md:block w-16 fill-[#FEFAF6] dark:fill-[#222831] stroke-[#222831] dark:stroke-[#FEFAF6] stroke-2 transition-transform duration-100 ease-in-out transform hover:scale-125">
                        <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
                    </svg>
                </button>
            ) : null}
            {currentIndex < reversedProjects.length - 1 ? (
                <button aria-label="Next" className="absolute top-1/2 right-10 transform -translate-y-1/2 z-10" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="hidden md:block w-16 fill-[#FEFAF6] dark:fill-[#222831] stroke-[#222831] dark:stroke-[#FEFAF6] stroke-2 transition-transform duration-100 ease-in-out transform hover:scale-125">
                        <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
                    </svg>
                </button>
            ) : null}
            <div className={`flex items-start relative w-full gap-5 snap-x snap-mandatory overflow-x-auto no-scrollbar py-8 lg:py-16 xl:py-24 ${projectsInView ? 'animate-fadeIn2' : ''}`} ref={projectsRef}>
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-4 sm:w-32 md:w-36 lg:w-48"></div>
                </div>
                {reversedProjects?.map((prjct: any) => (
                    <div className="snap-center shrink-0" key={prjct.id} id={prjct.id}>
                        <article className="group flex flex-col md:flex-row w-72 sm:w-[24rem] md:w-[36rem] lg:w-[45rem]">
                            <img
                                alt=""
                                src={prjct.imgPreview.url}
                                className="h-56 w-full md:w-1/2 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />
                            <div className="md:pl-4 py-2 flex flex-col justify-between gap-4">
                                <div className="flex flex-col items-center md:items-start gap-2">
                                    <Link to={prjct.preview} target="_blank" aria-label={`Link to project called ${prjct.title} url`}>
                                        <div className="flex flex-row">
                                            <h2 className="text-lg font-medium">{prjct.title}</h2>
                                            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="fill-[#FEFAF6] dark:fill-[#222831] stroke-[#222831] dark:stroke-[#FEFAF6]"><path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                                        </div>
                                    </Link>
                                    <p className="line-clamp-5 text-xs/relaxed">
                                        {prjct.description}
                                    </p>
                                </div>
                                <div className="flex justify-center md:justify-start">
                                    <div className="flex gap-2 border-r-4 border-r-gray-900 dark:border-r-[#FEFAF6] pr-6">
                                        {prjct.techStack.map((tech: any, id: any) => (
                                            <img key={id} src={tech.sourceImg} alt="javascript" width="28" className="dark:border rounded-lg" />
                                        ))}
                                    </div>
                                    <div className="pl-6">
                                        <Link to={prjct.sourceCode} target="_blank"><img src="https://skillicons.dev/icons?i=github" alt="javascript" width="28" className="dark:border rounded-lg" aria-label={`Link to project called ${prjct.title} source code`}/></Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
                <div className="snap-center shrink-0">
                    <div className="shrink-0 w-4 sm:w-48"></div>
                </div>
            </div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#FEFAF6] dark:from-[#222831]"></div>
        </div>
    );
}
