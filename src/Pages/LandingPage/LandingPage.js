import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './lp.css';
import { AxiosInstance } from '../../util/AxiosInstance';

const LandingPage = () => {


  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {

    try {
      const result = await AxiosInstance.get('/categories')
      setCategories(result.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const renderComponent = () => {

    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Welcome to Online Shopping ...</h2>
              <div className="col-12">
                <div className="category-list">
                  <div className='category-item'>
                    All products
                  </div>

                  {
                    categories.map(category => (
                      <div className='category-item' key={category.id}>
                        {category.name}
                      </div>
                    )
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    renderComponent()
  )
}

export default LandingPage
