import { useState } from "react";
import Card from "./Card";
import './Cards.css'

function Cards({ courses, category }: any) {

    const [likedCourses, setLikedCourses] = useState([]);

    let allCourses: any[] = []

    if (courses) {
        if (category === 'All') {
            for (const key in courses) {
                allCourses.push(...courses[key])
            }
        }
        else {
            allCourses = courses[category]
        }

    }

    return (<div className="cards">
        {allCourses.map((course) => {
            return <Card key={course.id} course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
            ></Card>
        })}
    </div >)
}

export default Cards;
