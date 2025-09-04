import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)

    } else {
      toast.error("Error")
    }
  }


  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error("Error removing food");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className='list-table'>
        <div className='list-table-formate title'>
          <b>Image</b><b>Name</b><b>Catgory</b><b>prise</b><b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-formate'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>

            </div>
          )
        })}
      </div>
    </div>

  )
}

export default List