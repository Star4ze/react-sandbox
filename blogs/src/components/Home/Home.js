import React from 'react'
import SearchBar from "./../../containers/SearchBar/SearchBar";
import AddToBlog from "./../../containers/AddToBlog/AddToBlog";
import ShowBlogs from "./../ShowBlogs/ShowBlogs";

function Home() {
    return (
        <>
            <SearchBar />
            <AddToBlog />
            <ShowBlogs />
        </>
    );
}

export default Home;
