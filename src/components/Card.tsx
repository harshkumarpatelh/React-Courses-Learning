import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import './Card.css'
import { toast } from 'react-toastify';
function Card({ course, setLikedCourses, likedCourses }: any) {
    console.log("start likedCourses", likedCourses)

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev: any[]) => prev.filter((cid) => cid !== course.id))
            toast.warning('Course Unliked')
        } else {
            if (likedCourses?.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev: any[]) => [...prev, course.id])
            }
            toast.success("Course Liked")
        }
    }

    return <div className='card'>
        <div className='img-container'>
            <img className="image" src={course.image.url} alt={course.image.alt}></img>

            <div className='btn-like-container'>
                <button onClick={clickHandler}>{
                    likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" ></FcLike>) : (<FcLikePlaceholder fontSize="1.75rem" ></FcLikePlaceholder>)
                }</button>
            </div>
        </div>

        <div className="text">
            <p className='title'>{course.title}</p>
            <p className='description'>{course.description?.length > 100 ? `${(course.description.substr(0, 100))}...` : (course.description)}</p>
        </div>
    </div>
}

export default Card;
