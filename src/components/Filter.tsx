import type { filter } from "../data/data";
import './Filter.css'

function Filter({ filters }: { filters: filter[] }) {
    const allFiltersButtons = filters.map((filter: filter) => <button key={filter.id} className="filter-button">{filter.title}</button>)
    return <div>
        {allFiltersButtons}
    </div>
}

export default Filter;
