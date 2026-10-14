import { filters } from "../data/data";
import Card from "./Card";
import './Cards.css'

function Cards({ courses }: any) {

    const allCourses: any[] = []
    const getAllCourses = () => {
        filters.forEach((filter) => {
            if (filter.title !== 'All')
                allCourses.push(...courses[filter.title])
        })
    }

    if (courses)
        getAllCourses()

    return (<div className="cards">
        {allCourses.map((course) => {
            return <Card key={course.id} course={course}></Card>
        })}
    </div >)
}

export default Cards;
