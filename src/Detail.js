/*eslint-disable*/ 
import React from "react"
import styled from "styled-components"
import './Detail.css';
import {useHistory} from 'react-router-dom'



function Detail(props){

    let Content = styled.h4`
    font-size:30px;
    color:white;
    background:purple

    `;    

   
    let history = useHistory();

    return (
        <div className="container">
            <div className="item">
                <Content>Detail page</Content>
            </div>
            <div className="item"><img src="../artimg/artimg_1.jpg" width="100%"  className ='imgtop'/></div>
            <div className="item">
                <h4 className="pt-5" style={{color :"red"}}>{props.art[0].title}</h4>
                <p>{props.art[0].content}</p>
                <p>Write your mood!</p>
                <p><textarea width="400px"></textarea></p>
                <button className="btn btn-danger" >Collection</button> 
                <span>     </span>
                <button className="btn btn-danger" 
                onClick={
                    () => {
                        history.goBack();
                    }
                }>Home</button>
            </div>
            

        </div>
    )

}

export default Detail