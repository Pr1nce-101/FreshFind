import MarketCard from "../components/MarketCard";
import FilterBar from "../components/FilterBar";
import styles from "../styles/MarketDirectory.module.css"
import { useState } from "react";
import markets from "../data/markets.json"


export default function MarketDirectory(){

    const [area, setArea] = useState("All");
    const [days, setDays] = useState([]);
    const [produceTypes, setProduceTypes] = useState([]);
    const [sortBy, setSortBy] = useState("Next Open Day");

    // const { bookmarkedIds, toggleBookmark } = useBookmarks();
    const filteredMarkets = markets
        .filter((m) => area === "All" || m.location === area)
        .filter((m) =>
            days.length === 0 || days.some((d) => m.hours.some((h) => h.day === d))
        )
        .filter((m) =>
            produceTypes.length === 0 ||
            produceTypes.some((p) => m.categories.includes(p))
        )
        .sort((a, b) => {
            if (sortBy === "Alphabetical A-Z") return a.name.localeCompare(b.name);
            return 0; 
        });

    return(
        <>
        <div className={styles.pageLayout}>
      <FilterBar
            area={area}
            setArea={setArea}
            days={days}
            setDays={setDays}
            produceTypes={produceTypes}
            setProduceTypes={setProduceTypes}
        />

      <div className={styles.results}>
        <div className={styles.resultsHeader}>
          <p className={styles.resultsCount}>
            Showing {filteredMarkets.length} Market{filteredMarkets.length !== 1 ? "s" : ""}
          </p>
          <div className={styles.sortWrapper}>
            <label htmlFor="sort" className={styles.sortLabel}>Sort by</label>
            <select
              id="sort"
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Next Open Day">Next Open Day</option>
              <option value="Alphabetical A-Z">Alphabetical A-Z</option>
              <option value="Proximity">Proximity</option>
            </select>
          </div>
        </div>

        <div className={styles.cardGrid}>
            {filteredMarkets.length === 0 ? (
                <p className={styles.emptyState}>No markets match your filters. Try adjusting them.</p>
            ) : (
                filteredMarkets.map((market) => (
                <MarketCard
                    key={market.id}
                    market={market}
                    // isBookmarked={bookmarkedIds.includes(market.id)}
                    // onToggleBookmark={toggleBookmark}
                />
                ))
            )}
            </div>
      </div>
    </div>
        </>
    )
}