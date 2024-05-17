import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div
`
    background-color: #dddae2;
    width: 240px;
    border-radius: 20px;
    padding: 30px 20px;
    margin: 20px;
    h1 {
        color: black;
    }
    .conta {
        color: red;
    }
    button {
        background-color: red;
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        margin: 0px 5px 0px 0px;
        border: 1px solid red;
    }
`

export function Contador() {    
    const [count, setCount] = useState(0);
    return (
        <div>
            <Container>            
                <h1>Contadando:</h1>
                <h1 className="conta">{count} vezes</h1>
                <button onClick={() => setCount(count + 1)}> Aumentar </button>
                <button onClick={() => setCount(count - 1)}> Diminuir </button>
            </Container>         
        </div>    
    );
}