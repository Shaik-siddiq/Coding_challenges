import styled from "styled-components";

export const Wrapper = styled.div`
width:99%;
height:100vh;
border:1px solid;
margin:5px
`;

export const CalenderHead = styled.div`
width:100%;
height:40px;
display:flex;
justify-content:space-around;
align-items:center;
font-size:24px;
`;

export const SevencolGrid = styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(7, 1fr);

`;

export const HeadDay = styled.span`
text-align:center;
background:lightblue;
font-size:1.1rem;
`;

export const CalenderBody = styled.div`
height:calc(100% - 95px - 33px);
display:grid;
grid-template-columns:repeat(7, 1fr);
grid-template-rows:repeat(${({fourcol})=> fourcol? 4:5} 1fr);
`;

export const StyledDay = styled.span`
border: 1px solid;
text-align:right;
padding:5px;
${({active})=>active && `background: lightgreen`};
`;

export const StyledEvent = styled.span`
display:grid;
text-align:left;
background:ligthyellow;
color:grey;
padding:2px 5px;
border-radius:10px;
`;