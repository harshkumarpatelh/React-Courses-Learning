import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import { apiUrl, filters } from './data/data'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'

function App() {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)

  const [category, setCategory] = useState('All')
  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(apiUrl)
        const result = await res.json()
        setCourses(result.data)


      } catch (error) {
        toast.error("unable to fetch data")
      }
    }

    getData();
    setLoading(false)
  }, [])

  return <div >

    <div>
      <Navbar></Navbar>
    </div>

    <div className='filter'>
      <Filter filters={filters} category={category} setCategory={setCategory}></Filter>
    </div>

    <div className='cards-container'>
      {loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)}
    </div>

  </div >
}

export default App
