import React from "react";
import styled from "styled-components";
import { Card } from "../../components/Card/Card";
import { Contador} from "../../components/Contador/Contador"

const Container = styled.div
`
  .card {
    display: flex;
    justify-content: center; /* Alinhamento horizontal */
    align-items: center; /* Alinhamento vertical */    
  }
`

export function Home(){
    return (
        <>
        <Container >
            <div class="card">
                <Card title="Teste 1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, sem sit amet euismod aliquam, lectus elit porttitor lorem, vel ullamcorper sapien sem vitae felis. In eleifend hendrerit gravida. Vestibulum tempor nibh in auctor pellentesque. Mauris venenatis sapien ut neque aliquet venenatis. Nam ut odio est."/>
                <Card title="Teste 2"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, sem sit amet euismod aliquam, lectus elit porttitor lorem, vel ullamcorper sapien sem vitae felis. In eleifend hendrerit gravida. Vestibulum tempor nibh in auctor pellentesque. Mauris venenatis sapien ut neque aliquet venenatis. Nam ut odio est."/>
                <Card title="Teste 3"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, sem sit amet euismod aliquam, lectus elit porttitor lorem, vel ullamcorper sapien sem vitae felis. In eleifend hendrerit gravida. Vestibulum tempor nibh in auctor pellentesque. Mauris venenatis sapien ut neque aliquet venenatis. Nam ut odio est."/>
            </div>
            <div class="contador">
                <Contador />
            </div>
        </Container >
        </>
    );
}