function SummaryCard({
    title,
    value,
    unit,
    color
}) {

    return (

        <div className={`p-6 rounded-2xl shadow-lg ${color}`}>

            <h3 className="text-lg font-semibold text-white">

                {title}

            </h3>

            <div className="mt-4">

                <span className="text-4xl font-bold text-white">

                    {value}

                </span>

                <span className="ml-2 text-lg text-white/80">

                    {unit}

                </span>

            </div>

        </div>
    );
}

export default SummaryCard;