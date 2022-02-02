import React, { useState, useEffect } from "react";
import Header from "./Header";
import PostCard from "./PostCard";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/PostActions";
import Paginate from "./Paginate";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from "reactstrap";
import ExportCSV from "./ExportCSV";

const Countries = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.PostReducers);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10); //number post per page
  const [dropdownOpen, setDropdownOpen] = useState(false); //dropdown handler

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  const toggleDropDown = (e) => {
    // handles dropdown open
    if (e.target.value !== "") {
      setPostsPerPage(e.target.value);
    }
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalPosts = posts.length;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filterPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="center-mid">
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
        <Col>
          <ExportCSV />
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="posts">
            {filterPosts.map((post) => (
              <PostCard key={post.iso2} post={post} />
            ))}
          </div>
          {totalPosts > postsPerPage && (
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalPosts}
              postPerPage={postsPerPage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Countries;
