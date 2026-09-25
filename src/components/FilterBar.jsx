import styles from "../styles/MarketDirectory.module.css"

const AREAS = [
    "All",
    "Wuse Central Market",
    "Riverside District"
];

const DAYS = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];

const PRODUCE_TYPES = [
  "organic",
  "fruits",
  "vegetables",
  "processed",
  "herbs",
  "fish",
  "grains",
  "meat"
];

export default function FilterBar({
    area,
    setArea,
    days,
    setDays,
    produceTypes,
    setProduceTypes
}) {

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
        <aside className={styles.sidebar}>
            <div className={styles.heading}>Filter Markets</div>

            <div className={styles.group}>
                <div className={styles.label}>Area / Location</div>
                <select
                    className={styles.select}
                    value={area}
                    onChange={(e) => setArea(e.target.value)}>
                    {AREAS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                    ))}
                </select>
            </div>

            <div className={styles.group}>
                <div className={styles.label}>Days of the Week</div>
                <div className={styles.checkboxGrid}>
                {DAYS.map((day) => (
                    <label key={day} className={styles.checkboxItem}>
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

            <div className={styles.group}>
                <label className={styles.label}>Produce Type</label>
                <div className={styles.checkboxColumn}>
                {PRODUCE_TYPES.map((type) => (
                    <label key={type} className={styles.checkboxItem}>
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
                onClick={clearFilters}
                className={styles.clearButton}>
                    Clear Filters
            </button>
        </aside>
        </>
    )
}