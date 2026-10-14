import { FcLike } from 'react-icons/fc';
import './Card.css'
function Card({ course }: any) {
    return <div className='card'>
        <div className='img-container'>
            <img className="image" src={course.image.url} alt={course.image.alt}></img>

            <div className='btn-like-container'>
                <button><FcLike fontSize="1.75rem" ></FcLike></button>
            </div>
        </div>

        <div className="title">
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>
    </div>
}

export default Card;
