import React from "react";

interface Props {
  search(query: string): void;
}

const SearchForm: React.FC<Props> = (props) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    props.search((formData.get("query") || "") as string);
  }

  return (
    <form onSubmit={handleSubmit} className="col-6">
      <input
        type="text"
        name="query"
        className="form-control form-control-dark"
        placeholder="Search Github repos..."
      />
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchForm;
