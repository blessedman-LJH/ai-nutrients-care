import {Button, Card, Input, TextField} from "@mui/material";
import React, { useState } from "react";
import CustomSelect from "../../component/CustomSelect";
export default function Container(){
    
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("남자");
    const [health, setHealth] = useState("주 1회");
    const [status, setStatus] = useState("");


    const ageHandleChange = (e)=>{
        setAge(e.target.value);
    };

    const genderHandleChange = (e)=>{
        setGender(e.target.value);
    };

    const healthHandleChange = (e)=>{
        setHealth(e.target.value);
    };

    const statusHandleChange = (e)=>{
        setStatus(e.target.value);
    };
    
    //const handleBtnClick = () =>{
    //}


    const genderArr = [{value : "남자",key:1},{value : "여자",key:2}];
    const healthArr = [
        {value : "주 1회",key : 1},
        {value : "주 2회",key : 2},
        {value : "주 3회",key : 3},
        {value : "주 4회",key : 4},
        {value : "주 5회",key : 5}

    ]

    return(
        <div className="container Flex mt-32 text-center">
            <Card className="w-2/3 mx-auto p-8">
                <div>

                    <div className="flex">
                        <label className="font-semibold mr-4 w-20">나이</label>
                        <Input className="w-full"
                            placeholder="나이를 입력해주세요"
                            type="number"
                            onChange={ageHandleChange}
                        />
                    </div>

                    <div className="flex mt-4">
                        <label className="font-semibold mr-4 w-20">성별</label>
                        <CustomSelect
                            options={genderArr}
                            onchange={genderHandleChange}
                            value={gender}
                        />
                    </div>

                    <div className="flex mt-4">
                        <label className="font-semibold mr-4 w-20">운동</label>
                        <CustomSelect
                            options={healthArr}
                            onchange={healthHandleChange}
                            value={health}
                        />
                    </div>

                    <div className="flex mt-4">
                        <label className="font-semibold mr-4 w-20">기타</label>
                        <TextField  
                            className="w-full"
                            placeholder="건강 상태를 입력해주세요"
                            multiline
                            maxRows={4}
                            onChange={statusHandleChange}
                        />
                    </div>

                    <div className="flex mt-6">
                        <Button className="w-full"
                            variant="contained"
                            color="primary"
                            >
                        전송하기
                        </Button>
                    </div>

                </div>
            </Card>
        </div>
    )
}