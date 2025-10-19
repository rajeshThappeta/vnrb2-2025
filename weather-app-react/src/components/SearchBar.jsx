import React from "react";
import { useForm } from "react-hook-form";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = (cityObj) => {
    onSearch(cityObj.city.trim());
    reset();
  };

  return (
    <div className="searchbar-container text-center my-4">
      <form
        className="search-form mx-auto d-flex justify-content-center align-items-center"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          type="text"
          {...register("city", { required: true })}
          className="form-control search-input"
          placeholder="🔍 Search by city name..."
        />
        <button type="submit" className="btn search-btn ms-2 px-4">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
