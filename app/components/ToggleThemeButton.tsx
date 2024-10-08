import { Form } from '@remix-run/react'

const Moon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 sm:h-5 sm:w-5 fill-[#222831]"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
);

const Sun = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="h-8 w-8 sm:h-5 sm:w-5 fill-[#FEFAF6]"><path d="M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 5zm-5-7c.34 0 .672.033 1 .08v-2.08h-2v2.08c.328-.047.66-.08 1-.08zm-4.184 1.401l-1.472-1.473-1.415 1.415 1.473 1.473c.402-.537.878-1.013 1.414-1.415zm9.782 1.414l1.473-1.473-1.414-1.414-1.473 1.473c.537.402 1.012.878 1.414 1.414zm-5.598 11.185c-.34 0-.672-.033-1-.08v2.08h2v-2.08c-.328.047-.66.08-1 .08zm4.185-1.402l1.473 1.473 1.415-1.415-1.473-1.472c-.403.536-.879 1.012-1.415 1.414zm-11.185-5.598c0-.34.033-.672.08-1h-2.08v2h2.08c-.047-.328-.08-.66-.08-1zm13.92-1c.047.328.08.66.08 1s-.033.672-.08 1h2.08v-2h-2.08zm-12.519 5.184l-1.473 1.473 1.414 1.414 1.473-1.473c-.536-.402-1.012-.877-1.414-1.414z"/></svg>
);

export default function ToggleThemeButton({ currentTheme } : any) {
    const themeToToggleTo = currentTheme === 'dark' ? 'light' : 'dark'

    return (
        <Form action="/preferences/theme" method="POST">
            <input type="hidden" name="theme" value={themeToToggleTo} />
            <button aria-label="Theme" className='flex justify-center items-center'>{currentTheme === 'dark' ? <Sun /> : <Moon />}</button>
        </Form>
    )
}