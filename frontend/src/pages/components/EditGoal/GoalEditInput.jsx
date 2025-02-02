import React, {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import * as L from "./GoalEditInputStyle";
import * as M from './GoalEditInputStyle';

// 텍스트만 적어둔 배열
const text = ["운동의 종류를 선택해 주세요.","운동 이름을 적어주세요."];
// radioHandle = (e) =>{
//     setState({
//         selectValue : e.target.value
//     });
// }





function GoalEditInput(){
    const [wname,setWname] = useState("");
    const [isWname,setisWname] = useState("");
    
    const onChange = (e) =>{
        setWname(e.target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if (wname === ""){ 
            setisWname(false);
            return
        }
        else if (wname.length > 13){
            setisWname(true);
            return
        }
        else if (wname.length <= 13){
            setisWname(false);
        }
        setWname(wname);
        // console.log(wname);
        // console.log(isWname);
        
    }
    return (
        <L.QuestionContainer>
            <L.SettingContainer>
                <L.TextStyle>
                    {text[0]}
                </L.TextStyle>
                <L.InputStyle>
                    <input type="radio"
                    name='workout'
                    id = "weight"
                    value="weight"

                    />근력운동
                    <input type="radio"
                    name='workout'
                    id = "cardio"
                    value="cardio"
                    
                    />유산소
                </L.InputStyle>
            </L.SettingContainer>        
            <L.SettingContainer>
                <L.TextStyle>
                    {text[1]}
                </L.TextStyle>
                <L.InputStyle onSubmit={onSubmit}>
                    <input type="text" 
                    style={{width : '35vh',
                    backgroundColor : '#D9D9D9',
                    border : '0px',
                    height : '4vh'
                    }}
                    id = 'workoutname'
                    placeholder='운동명을 적어주세요'
                    onChange = {onChange}
                    />
                </L.InputStyle>
                <M.Warning style={isWname? {display :'flex'} : {display : 'none'}}>
                    운동명이 너무 깁니다.
                </M.Warning>
            </L.SettingContainer>
        </L.QuestionContainer>
    
    );
}


export default GoalEditInput;