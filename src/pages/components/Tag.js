export default function Tag(tagProps) {

    const bgClass= {
        gray: " bg-gray-200",
        red: " bg-red-200",
        orange: " bg-orange-200",
        yellow: " bg-yellow-00",
        green: " bg-green-200",
        teal: " bg-teal-200",
        blue: " bg-blue-200",
        indigo: " bg-indigo-200",
        purple: " bg-purple-200",
        pink: " bg-pink-200",
        cyan: " bg-cyan-200",
        amber: " bg-amber-200",
        violet: "bg-violet-200",
        fuchsia: "bg-fuchsia-200",
        lime: " bg-lime-200"
    
    }

        const textClass= {
            gray: " text-gray-600",
            red: " text-red-600",
            orange: " text-orange-600",
            yellow: " text-yellow-600",
            green: " text-green-600",
            teal: " text-teal-600",
            blue: " text-blue-600",
            indigo: " text-indigo-600",
            purple: " text-purple-600",
            pink: " text-pink-600 =",
            cyan: " text-cyan-600",
            amber: " text-amber-600",
            violet: "text-violet-600",
            fuchsia: "text-fuchsia-600",
            lime: " text-lime-600"
            }
    
    return (
        <>
            <div className={`${bgClass[tagProps.color]} flex px-2 py-1 rounded-md w-fit`}>
                <span className={`${textClass[tagProps.color]} text-xs font-bold`}>{tagProps.tagname}</span>
            </div>
        </>
    )
}