import Content from "./Content/Content";
import Navbar from "./Navbar";
import { useState, createContext } from "react";

const countProductPerson = createContext(null);
const Home = (props) => {
    const [count, setCount] = useState(0);
    const productArr = [
        {
            id: 1,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 2,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 3,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 4,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 5,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 6,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 7,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 8,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 9,
            Name: "Phone",
            Price: "12.789.000",
        },
        {
            id: 10,
            Name: "Phone",
            Price: "12.789.000",
        },
    ];
    return (
        <div className="home">
            <div>
                <Content
                    listProduct={productArr}
                    count={count}
                    setCount={setCount}
                />
            </div>
        </div>
    );
};

export default Home;
