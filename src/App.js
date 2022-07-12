import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Delete from './Api/Delete/Delete'
import Gett from './Api/Get/Gett'
import Post from './Api/Post/Post'
import Put from './Api/Put/Put'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar expand="lg" bg="dark" variant='dark'>
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className='mx-auto'>
                <Nav.Link as={Link} to='/get'>Get</Nav.Link>
                <Nav.Link as={Link} to='/post'>Post</Nav.Link>
                <Nav.Link as={Link} to='/put'>Put</Nav.Link>
                <Nav.Link as={Link} to='/delete'>Delete</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/get' element={<Gett />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/put' element={<Put />}></Route>
          <Route path='/delete' element={<Delete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
