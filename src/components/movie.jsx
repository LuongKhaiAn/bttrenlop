import React from 'react'
import { Card,Row,Col,Container,Button } from 'react-bootstrap'
import { movies } from './data'

function Movie() {
  return (
    <div> 
      <Row className='mb-3'> 
        <h1 style={{textAlign: 'center', marginTop:'10px'}}>Movies</h1>
      </Row>
      <Row>
        {
          movies?.map((m)=>(
            <Col key={m.id} md={4}>
              <Card className='p-3 bg-light'>
                <Card.Title><h3>{m.title}</h3></Card.Title>
                <hr/>
                <p><b>Duration:</b> {m.duration}</p>
                <p><b>Director:</b> {m.director}</p>
                <p><b>Rating:</b> {m.rating}</p>
                <Button variant='primary'>View Showtime</Button>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Movie
