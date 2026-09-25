
export default function MarketDirectory(){

    const [area, setArea] = useState("All");
    const [days, setDays] = useState([]);
    const [produceTypes, setProduceTypes] = useState([]); 

    return(
        <>
        <div>
            <div>
                <div>Filter Markets</div>
                <div>Area/Location</div>
                <select>
                    <option> Gwarinpa </option>
                </select>
                
            </div>
        </div>
        </>
    )
}