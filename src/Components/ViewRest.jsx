import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview'
function ViewRest() {

  const [restDeatils,setRestDetails] = useState({})
  //useParams =>used to get the path parameter from the url
  // const paraId = useParams()
  // console.log(paraId.id);


  //destructre
  const {id} = useParams()
  console.log(id);

  //API Call to get the details of the particular restaurant using the path parameter
  const base_url="https://restaurant-backend-gx9a.onrender.com/restaurants"
  const fetchRest=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }

 console.log(restDeatils);
  

  useEffect(()=>{
    fetchRest()
  },[])

  

  return (
    <div>
      <Row>
        <Col><img src={restDeatils.photograph} alt="" style={{width:'450px', height:'500px', margin:'40px', borderRadius:'5px'}}/></Col>
        <Col>
          <div className='container p-5 my-5'>
          <ListGroup>
            <h1 className='text-center'>{restDeatils.name}</h1>
            <ListGroup.Item>Address : {restDeatils.address}</ListGroup.Item>
            <ListGroup.Item>Neighborhood : {restDeatils.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Cuisine type : {restDeatils.cuisine_type}</ListGroup.Item>
            <ListGroup.Item><RestOp op={restDeatils.operating_hours}/></ListGroup.Item>
            <ListGroup.Item><RestReview review={restDeatils.reviews}/></ListGroup.Item>
          </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest