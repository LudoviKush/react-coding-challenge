import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from "reactstrap";
import Header from '../Countries/Header'
import Paginate from '../Countries/Paginate'
import PostCard from '../Cities/PostCard'

function Cities() {
  const api_endpoint = process.env.REACT_APP_CITIES_ENDPOINT;
  var [country] = useState("Romania");
  const [cities, setCities] = useState([]);
  const location = useLocation();
  country = decodeURI(location.pathname.split("/").pop());    // Removing the unneeded path

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false); //dropdown handler
  const [postsPerPage, setPostsPerPage] = useState(10); //number post per page
  const totalPosts = cities.length;

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filterPosts = cities.slice(indexOfFirstPost, indexOfLastPost);

  const toggleDropDown = (e) => {
    // handles dropdown open
    if (e.target.value !== "") {
      setPostsPerPage(e.target.value);
    }
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country }),  
      };
      fetch(api_endpoint, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setCities(data.data);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="center-list">
      <Header search={search} onChange={handleChangeSearch} />
      <Row>
        <Col>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle caret>Items per page</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="10">10</DropdownItem>
              <DropdownItem value="20">20</DropdownItem>
              <DropdownItem value="50">50</DropdownItem>
              <DropdownItem value="100">100</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        </Row>
      <h2>Cities of {country}</h2>
      {/* {cities.map((city) => (
        <li key={city}> {city} </li>
      ))} */}
      {filterPosts.map((city) => (
             // <PostCard key={city}/>
             <li key={city}> {city} </li>
            ))}
      {totalPosts > postsPerPage && (
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalPosts}
              postPerPage={postsPerPage}
            />
          )}
    </div>
  );
}

export default Cities;
