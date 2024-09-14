function scroll(elmnt: string) {
    document.getElementById(elmnt)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

export default function Footer({currentYear} : { currentYear: number }) {
    return (
        <footer className="border-t header-footer-bg">
            <div className="header-footer-width">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold sm:text-2xl cursor-pointer" onClick={() => scroll("header")}>MP</h1>
                    <p className="text-center text-xs lg:mt-0 lg:text-right">
                        Copyright &copy; {currentYear}. All rights reserved.
                    </p>
                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 fill-[#222831] dark:fill-[#FEFAF6] cursor-pointer transform duration-100 hover:scale-110" onClick={() => scroll("header")}><path d="m2.019 11.993c0 5.518 4.48 9.998 9.998 9.998 5.517 0 9.997-4.48 9.997-9.998s-4.48-9.998-9.997-9.998c-5.518 0-9.998 4.48-9.998 9.998zm1.5 0c0-4.69 3.808-8.498 8.498-8.498s8.497 3.808 8.497 8.498-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498zm4.715-1.528s1.505-1.502 3.259-3.255c.147-.146.338-.219.53-.219s.384.073.53.219c1.754 1.753 3.259 3.254 3.259 3.254.145.145.217.336.216.527 0 .191-.074.383-.22.53-.293.293-.766.294-1.057.004l-1.978-1.978v6.694c0 .413-.336.75-.75.75s-.75-.337-.75-.75v-6.694l-1.978 1.979c-.29.289-.762.286-1.055-.007-.147-.146-.22-.338-.221-.53-.001-.19.071-.38.215-.524z" fillRule="nonzero"/></svg>
                </div>
            </div>
        </footer>
    )
}