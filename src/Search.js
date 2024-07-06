import React from "react";

export default function Search() {
  return (
    <form className="searchForm" id="search-form">
      <input
        type="search"
        placeholder="Search for a city..."
        required
        id="search-form-input"
        class="search-form-input"
      />
      <input type="submit" value="Submit" class="search-form-submit" />
    </form>
  );
}
