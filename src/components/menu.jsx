import {NavLink} from 'react-router-dom'
import { Nav, } from "react-bootstrap";

function menu() {
  return (
    <Nav className='d-flex-row' style={{backgroundColor:'#2FA084', height:50, alignItems:'center'}}>
        <NavLink to='/ViDu2' className='p-3' style={(isActive)=>({
            color: isActive ? 'chocolate' : 'white',
            textDecoration: 'none',
            fontSize: 18,
        })}>Vi Du 2</NavLink>
        <NavLink to='/ViDu3' className='p-3' style={(isActive)=>({
            color: isActive ? 'chocolate' : 'white',
            textDecoration: 'none',
            fontSize: 18,
        })}>Vi Du 3</NavLink>
        <NavLink to='/Book' className='p-3' style={(isActive)=>({
            color: isActive ? 'chocolate' : 'white',
            textDecoration: 'none',
            fontSize: 18,
        })}>Danh sach sach</NavLink>
        <NavLink to='/Movie' className='p-3' style={(isActive)=>({
            color: isActive ? 'chocolate' : 'white',
            textDecoration: 'none',
            fontSize: 18,
        })}>Danh sach phim</NavLink>
    </Nav>
  )
}

export default menu
