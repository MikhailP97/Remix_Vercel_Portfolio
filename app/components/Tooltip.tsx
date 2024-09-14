export default function Tooltip({ text, children }: { text: string, children: JSX.Element }) {
    return (
        <div className="group relative flex flex-col items-center">
            <span className="absolute top-[3.2rem] whitespace-nowrap scale-0 transition-all text-sm text-center font-bold group-hover:scale-100">{text}</span>
            {children}
        </div>
    )
}