import type React from "react";
import type { filter } from "../data/data";
import './Filter.css'
import type { SetStateAction } from "react";

function Filter({ filters, setCategory, category }: { filters: filter[], setCategory: React.Dispatch<SetStateAction<string>>, category: string }) {

    function filterHandler(title: string) {
        setCategory(title)
    }

    const allFiltersButtons = filters.map((filter: filter) => {
        let className = "filter-button hilighter";
        if (category === filter.title) {
            className = "filter-button";
        }
        return <button key={filter.id} className={className} onClick={() => filterHandler(filter.title)}>{filter.title}</button>
    })
    return <div>
        {allFiltersButtons}
    </div>
}

export default Filter;
