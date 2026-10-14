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

        <div className="text">
            <p className='title'>{course.title}</p>
            <p className='description'>{course.description}</p>
        </div>
    </div>
}

export default Card;
