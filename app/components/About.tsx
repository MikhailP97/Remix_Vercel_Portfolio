import { useInView } from 'react-intersection-observer';
import AboutImgLight from '../../public/Developer-activity.svg'
import AboutImgDark from '../../public/Developer-activity2.svg'

export default function About({theme}: any) {

    const { ref: imgRef, inView: imgInView } = useInView({
        threshold: 0.1
    });

    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.1
    });

    return (
        <div className='container mx-auto mt-20 md:mt-16 w-5/6 md:w-8/12' id='about'>
            <h2 className='section-title'>About Me</h2>
            <div className='flex flex-row items-center gap-4 py-8 md:py-16'>
                <img src={theme === 'dark' ? AboutImgDark : AboutImgLight} alt="frontend developer" className={`hidden lg:block w-64 xl:w-80 ${imgInView ? 'animate-fadeRight' : ''}`} ref={imgRef}/>
                <div className={`flex flex-col gap-4 text-sm xl:text-base ${textInView ? 'animate-fadeLeft' : ''}`} ref={textRef}>
                    <p>With a blend of <strong>formal education</strong> and <strong>hands-on learning</strong>, I've built a strong foundation as a frontend developer. My career started with two years of self-teaching before I earned my Bachelor's degree in Application Development, giving me both a <strong>practical</strong> and <strong>academic</strong> perspective on web development.
                    </p>
                    <p>I work with React to build <strong>responsive</strong> and <strong>dynamic</strong> web applications that prioritize both <strong>functionality</strong> and <strong>user experience</strong>. I'm also constantly honing my skills to stay at the forefront of the ever-changing development landscape.
                    </p>
                </div>
            </div>
        </div>
    );
}
