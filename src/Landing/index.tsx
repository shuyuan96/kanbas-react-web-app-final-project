import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LandingNavigation from "./Navigation";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Landing() {
    return (
        <div>
            <h1>Final Project - Kanbas Quizzes</h1>
            <h3>Team Member: Xiaoshu Liu, Shuyuan Liu</h3>
            <h3>SEC 01</h3>
            <LandingNavigation />
        </div>
    );
}