
export default function FilterBar(
    area, setArea,
    days, setDays,
    produceTypes, setProduceTypes
){

    function toggleValue(list, value, setList) {
        if (list.includes(value)) {
        setList(list.filter((v) => v !== value));
        } else {
        setList([...list, value]);
        }
    }

    function clearFilters() {
        setArea("All");
        setDays([]);
        setProduceTypes([]);
    }

    return(
        <>
        <aside>
            <div>Filter Markets</div>

            <div>
                <div>Area / Location</div>
                <select>
                    {AREAS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                    ))}
                </select>
            </div>

            <div>
                <div>Days of the Week</div>
                <div>
                {DAYS.map((day) => (
                    <label key={day}>
                    <input
                        type="checkbox"
                        checked={days.includes(day)}
                        onChange={() => toggleValue(days, day, setDays)}
                    />
                    {day}
                    </label>
                ))}
                </div>
            </div>

            <div>
                <div>Days of the Week</div>
                <div>
                {TYPES.map((type) => (
                    <label key={type}>
                    <input
                        type="checkbox"
                        checked={produceTypes.includes(type)}
                        onChange={() => toggleValue(produceTypes, type, setProduceTypes)}
                    />
                    {type}
                    </label>
                ))}
                </div>
            </div>

            <button 
                onClick={clearFilters}>
                    Clear Filters
            </button>
        </aside>
        </>
    )
}