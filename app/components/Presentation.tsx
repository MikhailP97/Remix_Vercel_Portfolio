import { useInView } from 'react-intersection-observer';
import Tooltip from './Tooltip';
import { Link } from '@remix-run/react';

export default function Presentation({data}: any) {

    const { ref: imgRef, inView: imgInView } = useInView({
        threshold: 0.1
    });

    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.1
    });

    const { ref: stackRef, inView: stackInView } = useInView({
        threshold: 0.1
    });

    return (
        <div className="md:min-h-[calc(100svh-69px)] container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10 lg:gap-16 w-5/6 md:w-8/12 pt-4 mt-10 lg:mt-0">
                <img
                    src={data?.asset.url}
                    alt="Mykhaylo Pelykh"
                    className={`size-32 lg:size-48 rounded-lg object-cover opacity-0 ${imgInView ? 'animate-fadeLeft' : ''}`}
                    ref={imgRef}
                />
                <div className={`text-center lg:text-start opacity-0 ${textInView ? 'animate-fadeRight' : ''}`} ref={textRef}>
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl ">Front-End React Developer 🥷🏻</h1>
                    <p className="mt-6 text-sm lg:text-md">
                        Hi, I'm Mykhaylo Pelykh. A passionate Front-end React Developer based in Toulouse, France. 📍
                    </p>
                    <div className="mt-4 flex flex-row gap-4 justify-center lg:justify-start">
                        <Link to="https://www.linkedin.com/in/mykhaylo-pelykh-55587017b/" target="_blank" aria-label="Link to Linkedin profile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 fill-[#222831] hover:fill-[#335e9e] duration-200 ease-in-out cursor-pointer dark:fill-[#FEFAF6] dark:hover:fill-[#f1d2b5]">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                        <Link to="https://github.com/MikhailP97" target='_blank' aria-label="Link to Github profile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 fill-[#222831] hover:fill-[#335e9e] duration-200 ease-in-out cursor-pointer dark:fill-[#FEFAF6] dark:hover:fill-[#f1d2b5]">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`mt-20 lg:mt-32 w-7/8 md:w-8/12 flex flex-col justify-between items-center gap-4 lg:flex-row opacity-0 ${stackInView ? 'animate-fadeIn' : ''}`} ref={stackRef}>
                <h2 className="font-semibold text-xl underline lg<border-r-none lg:border-r-4 lg:border-r-gray-900 dark:lg:border-r-[#FEFAF6] lg:pr-4 lg:no-underline">Favorite Stack</h2>
                <ul className="home-icons-display">
                    <li className="home-icons-display-group">
                        <Tooltip text={"Javascript"}>
                            <img src="https://skillicons.dev/icons?i=javascript" alt="javascript" className="home-icons-size" />
                        </Tooltip>
                        <Tooltip text={"Typescript"}>
                            <img src="https://skillicons.dev/icons?i=typescript" alt="typescript" className="home-icons-size" />
                        </Tooltip>
                    </li>
                    <li className="home-icons-display-group">
                        <Tooltip text={"React"}>
                            <img src="https://skillicons.dev/icons?i=react" alt="react" className="home-icons-size" />
                        </Tooltip>
                        <Tooltip text={"Remix"}>
                            <img src="https://skillicons.dev/icons?i=remix" alt="remix" className="home-icons-size" />
                        </Tooltip>
                    </li>
                    <li className="home-icons-display-group">
                        <Tooltip text={"Tailwind"}>
                            <img src="https://skillicons.dev/icons?i=tailwind" alt="tailwind" className="home-icons-size" />
                        </Tooltip>
                        <Tooltip text={"CSS"}>
                            <img src="https://skillicons.dev/icons?i=css" alt="css" className="home-icons-size" />
                        </Tooltip>
                    </li>
                    <li className="home-icons-display-group">
                        <Tooltip text={"Vitest"}>
                            <img src="https://skillicons.dev/icons?i=vitest" alt="vitest" className="home-icons-size" />
                        </Tooltip>
                        <Tooltip text={"Testing-library"}>
                            <img src="https://testing-library.com/img/logo-large.png" alt="testing-library" width="48px" className="home-icons-size bg-[#242938] rounded-[20%] p-1" />
                        </Tooltip>
                    </li>
                    <li className="home-icons-display-group">
                        <Tooltip text={"MongoDB"}>
                            <img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" className="home-icons-size" />
                        </Tooltip>
                        <Tooltip text={"Prisma"}>
                            <img src="https://skillicons.dev/icons?i=prisma" alt="prisma" className="home-icons-size" />
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </div>
    );
}
