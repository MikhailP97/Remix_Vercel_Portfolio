function scroll(elmnt: string) {
    document.getElementById(elmnt)?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

interface HeaderProps {
    toggleButton: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ toggleButton }) => {
    return (
        <header className="border-b header-footer-bg" id="header">
            <div className="header-footer-width">
                <div className="flex flex-row items-center justify-between gap-2 w-full">
                    <div>
                        <h1 className="text-xl font-bold sm:text-2xl">MP</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        { toggleButton }
                        <ul className="hidden md:flex items-center gap-6 text-sm font-medium lg:text-base">
                            <li className="header-menu-items-hover" onClick={() => scroll("about")}>About</li>
                            <li className="header-menu-items-hover" onClick={() => scroll("projects")}>Projects</li>
                            <li className="header-menu-items-hover" onClick={() => scroll("contact")}>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;