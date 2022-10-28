import React, { useLayoutEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import AngryIcon from "../assets/image/splash/angry-icon.png";



function Result(props) {

    /**
     *  결과가 화난 감정 일 경우
     */
    return (

        <div className="result-angry">

            <div className="result-angry-header"> {/*헤더*/}
                <Link to="/" className="result-angry-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>
            <div className="result-angry-content">
                <div className="result-angry-container">
                </div>
                <SideMenu></SideMenu>
            </div>


        </div>

    );

    /**
     *  결과가 평범 감정 일 경우
     */
    return (

        <div className="result-normal">

            <div className="result-normal-header"> {/*헤더*/}
                <Link to="/" className="result-normal-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>
            <div className="result-normal-content">
                <div className="result-normal-container">
                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );
}

export default withRouter(Result);