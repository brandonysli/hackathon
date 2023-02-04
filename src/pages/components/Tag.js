export default function Tag(tagProps) {


    const x = "hi"

    let colorMap = {
        Cardiologist: "bg-red-200",
        Orthodontist: "bg-blue-200", 
        Neurologist: "bg-purpl-200", 
        Nutritionist: "bg-green-200",
        Oncology: "bg-yellow-200",
        Dentistry: "bg-grey-200"
    }


    return (
        <div>
            <div className = "flex flex-col justify-between gap-8">
                <div className = "flex flex-row gap-2 px-4 item-center">
                    <div className={`${colorMap[tagProps.tagname]} "flex px-2 py-1 rounded-md`}>
                    <span>{tagProps.tagname}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}