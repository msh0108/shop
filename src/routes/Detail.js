import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import styled from 'styled-components'


let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding:10px;
`
// let btn = styled.button(YellowBtn)`
 
// `

function Detail(props) {

  let {id} = useParams();

  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

    return (
      <>
      <Container>
          <YellowBtn bg='blue'>버튼</YellowBtn>
          <YellowBtn bg='orange'>버튼</YellowBtn>
        <Row>
      <div className='col-md-6'>
      <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%'/>
      </div>
      <div className='col-md-6 mt-4'>
      <h4 className='pt-5'>{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>
      <button className='btn btn-danger'>주문하기</button>
      </div>
  
  </Row>
  </Container>
      </>
    );
  }
  
  
  
  
  export default Detail;
  
  
  