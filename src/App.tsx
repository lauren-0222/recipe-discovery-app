import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [categories, setCategories] = useState([])
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      if (!response.ok) {
        throw new Error("Failed to fetch categories")
      }
      const data = await response.json();
      setCategories(data.categories)

    }
    catch (error) {
      if (error instanceof Error) {
        console.error("Message:", error.message)
      } else {
        console.error("Unknown error:", Error)
      }
    }
    finally {
      console.log('In the finally')
    }
  }
  useEffect(() => {
    fetchCategories()
  }, [])
console.log("Categories:", categories)
  return (
    <>

    </>
  )
}

export default App
