import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

function GetAxios() {

    const [my_data, setData] = useState([]);

    useEffect(() => {
        Axios.get(baseURL).then((response) => {
            setData(response.data);
        })
    },[]);

  return (
    <>
    {
      my_data.map((item) => {
        const {id, title, body} = item;
        return (
          <div className='data' key={id}>
          <h1>{id}</h1>
          <h2>{title.slice(0,10)}</h2>
          <h3>{body.slice(0,50).toUpperCase()}</h3>
          </div>
        )
      })
    }
        {/* <h1>{my_data.id}</h1>
        <h2>{my_data.title}</h2>
        <h3>{my_data.body}</h3> */}
    </>
  )
}

export default GetAxios