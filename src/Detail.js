import React from "react";
import styled from "styled-components";
//페이지 이동하기 위해 임포트
import { useHistory,useParams } from "react-router-dom";

const Detail = (props) =>{
    const history = useHistory();
    const params = useParams();
    const [rate,setRate] =React.useState(0);

    React.useEffect(() => {
        const press = (e) =>{
            if([1,2,3,4,5].indexOf(parseInt(e.key)) !== -1){
                setRate(parseInt(e.key));
            }
        }
        window.addEventListener("keydown", press);
        return ()=> window.removeEventListener("keydown", press);
    },[]);



    return (
        <>
        <DetailBox>
            <Dtitle>
                <SpanDay> "{params.week}요일"</SpanDay> 평점남기기
            </Dtitle>
            <RateDiv>
                {Array.from({ length: 5 }, (item, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            onClick={()=>{
                                                setRate(idx +1);
                                            }}
                                            style={{
                                                width: "25px",
                                                height: "25px",
                                                margin: "5px",
                                                backgroundColor: rate < idx + 1 ? "#ddd" : "#F8CA8F"
                                            }}
                                        ></div>
                                    );
                                })}{/* Array */}
            </RateDiv>
            <button  onClick={() => {
            history.goBack();
            }}>
                평점 남기기
            </button>
        </DetailBox>

        </>
    )
};

const DetailBox =styled.div`
max-width: 350px;
min-height: 10vh;
height:40vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
display:flex;
flex-direction:column;
gap:30px;

button{
    width:80%;
    margin: 10px auto;
    border:none;
    padding: 1rem;
    border-radius:8px;
    background-color:#FFEDC9;
    font-weight:bold;
}
`
const Dtitle =styled.h3`
text-align:center;
`
const SpanDay =styled.span`
color:#AFA29F;
background-color:#FFEDC9;
`
const RateDiv =styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
`
export default Detail;