import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    background-color: #dddae2;
    width: 400px;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;

    h1 {
        color: blue;
    }
`

export function Card({title, content}){
    return (
        <Container>
            <h1>{ title }</h1>
            <p>{content}</p>
        </Container>
    );
}