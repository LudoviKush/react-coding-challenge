import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  sortPostsAsc,
  sortPostsDesc,
  searchPosts,
} from "../../redux/actions/PostActions";

const Header = ({ search, onChange }) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    dispatch(searchPosts(search));
    if (sort === "desc") {
      dispatch(sortPostsDesc());
    }
    if (sort === "asc") {
      dispatch(sortPostsAsc());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort]);

  return (
    <header>
      <div className="filters">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Search"
          />
        </div>
        <div className="sort">
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
