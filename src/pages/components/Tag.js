export default function Tag(tagProps) {

    console.log(`{text-${tagProps.color}}-600`)

    return (
        <>
            <div className={`bg-${tagProps.color}-200 flex px-2 py-1 rounded-md w-min`}>
                <span className={`text-${tagProps.color}-600 text-xs font-bold`}>{tagProps.tagname}</span>
            </div>
        </>
    )
}