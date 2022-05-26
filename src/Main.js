import React from "react";
import styled from "styled-components";
//페이지 이동하기 위해 임포트
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory(); //페이지 이동하기 위해서 필요한 객체 선언
    const day = { 0: "일", 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토" }; //요일 딕셔너리형태로 선언
    //console.log(Object.keys(day).map((_d, idx) => day[_d]))

    //Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
    const week = Object.keys(day).map((_d, idx) => {
        let today = new Date().getDay(); //오늘 날짜 구하는 함수
        let d = today + parseInt(_d) > 6 ? today + parseInt(_d) - 7 : today + parseInt(_d);
        return day[d];
    });
    //console.log(week) 오늘의 요일 구하는 함수

    const rate = week.map((w, idx) => {
        return {
            day: w,
            rate:
                Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1),
        }
    })
    //console.log(rate) 평점 랜덤으로 뿌려주는 거

    
    const getAverage = (
		rate.reduce((cur, acc) => (cur += acc)) / 7
	).toFixed(2);
	const [average, updateAverage] = React.useState(getAverage);
    // 평균 구하기

    return (
        <>
            <TxtBox>
                <H3Style>내 일주일은?</H3Style>
                {rate.map((w, idx) => {
                    return (
                        <WeekBox
                            key={`week_${idx}`}
                        >
                            <WeekFont>
                                {w.day}
                            </WeekFont>
                            {Array.from({ length: 5 }, (item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            width: "25px",
                                            height: "25px",
                                            margin: "5px",
                                            backgroundColor: w.rate < idx ? "#ddd" : "#F8CA8F",
                                        }}
                                    ></div>
                                );
                            })}{/* Array */}
                            <Gogo
                                onClick={() => {
                                history.push(`/detail/${w.day}`);
                            }}>
                                 ▶️
                            </Gogo>

                        </WeekBox>

                    )
                })}  {/* rate */}
                <Average>
                <h3>
					평균 <span>{average}</span>
				</h3>

				<button
					onClick={() => {
						updateAverage(0);
					}}
				>
					RESET
				</button>
                 </Average>
               
            </TxtBox>

           



        </>
    );
};

const TxtBox = styled.div`
max-width: 350px;
min-height: 10vh;
height:90vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 5px solid #ddd;
`;
const H3Style = styled.h3`
text-align:center;
`
const WeekBox = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 1rem 0;
 width: 100%;
 border:1px solid #ddd;
 background-color:#fcfcfc;
`
const WeekFont = styled.h4`
margin-right: 0.5rem;
`
const Gogo =styled.div`
margin-left: 5px;
cursor: pointer;
`
const Average =styled.div`
margin: 20px auto;
padding: 10px;
text-align:center;

button {
    width:80%;
    border:none;
    padding: 1rem;
    border-radius:8px;
    background-color:#FFEDC9;
    font-weight:bold;
}
`
export default Main;
