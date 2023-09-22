import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../item"
// import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Slider = () => {
    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item>Quote One</Item>
                    <Item>Quote Two</Item>
                    <Item>Quote Three</Item>
                    <Item>Quote Four</Item>
                    <Item>Quote Five</Item>
                    <Item>Quote Six</Item>
                    <Item>Quote Seven</Item>
                    <Item>Quote Eight</Item>
                </Carousel>
            </div>
        </>
    );
}

export default Slider;