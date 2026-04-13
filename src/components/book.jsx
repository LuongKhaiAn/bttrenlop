import { books } from "./data";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

function Book() {
  const [search,setSearch]=useState(' ')
  const [selectCategory,setSelectCategory]=useState("All category")
  const [selectAuthor,setSelectAuthor]=useState("All author")

  const categories = [
    "All category",
    ...new Set(books.map((b) => b.category))
  ];

  const author = [
    "All author",
    ...new Set(books.map((b)=> b.author))
  ]

  // const selectBook = selectCategory === 'All category'?books:books.filter((b)=>b.category===selectCategory) 
  const selectBook = books.filter((b)=>{
    const matchCategory=selectCategory==='All category' || b.category===selectCategory
    const matchAuthor = selectAuthor ==='All author' || b.author===selectAuthor
    const matchTitle=b.title.toLocaleLowerCase().includes(search.toLocaleLowerCase)
    return matchCategory&&matchAuthor 
  })

  const handleCategory=(e)=>{
    setSelectCategory(e.target.value)
  }
  const handleAuthor = (e)=>{
    setSelectAuthor(e.target.value)
  }
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <>
      <Row>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>Book list</h1>
      </Row>
      <Row>
        <Col md={2}>
          <Form.Select
            value={selectCategory}
            onChange={handleCategory}
          >
            {
              categories?.map((c)=>(
                <option>{c}</option>
              ))
            }
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select
          value={selectAuthor}
          onChange={handleAuthor}
          >
            {
              author?.map((a)=>(
                <option>{a}</option>
              ))
            }
          </Form.Select>
        </Col>
        <Col md={8}>
          <Form.Control
            type="search"
            name="search"
            placeholder="Enter title to search"
            value={search}
            onChange={handleSearch}
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <Button className="m-3" style={{ width: "100px" }} variant="success">
          Borrow
        </Button>
      </Row>
      <Row>
        {selectBook?.map((b) => (
          <Col md={3} key={b.id}>
            <Card className="mb-3 p-2">
              <Card.Img src={b.image} height={300} />
              <Card.Body>
                <Card.Title>
                  <h4>
                    <b>{b.title}</b>
                  </h4>
                </Card.Title>
                <hr />
                <p>
                  <b>Author:</b> {b.author}
                </p>
                <p>
                  <b>Category:</b> {b.category}
                </p>
                <p>
                  <b>Rating:</b> {b.rating}
                </p>
                <p>
                  <b>Avariable copies:</b> {b.availableCopies}
                </p>
                <p>
                  <b>Total copies:</b> {b.totalCopies}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Book;
