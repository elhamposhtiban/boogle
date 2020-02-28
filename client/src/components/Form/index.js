
import React, {useState} from "react";
import PropType from "prop-types"
import "./style.css";

// const propType = {

//   SearchInput = PropType.string.isRequired,
//   handleInputChange = PropType.func.isRequired,
//   handleFormSubmit = PropType.func.isRequired,
// }

  const SearchForm = (
   { SearchInput,
    handleInputChange,
    handleFormSubmit}
  ) => {


    // const [SearchInput, setSearchinput] = useState({"search":""});
    

    // //function for handling the search input
    // const  handleInputChange = event => {
    //   const { name, value } = event.target;
    //   setSearchinput({

    //       ...SearchInput,
    //        [name]: value
    //   });

    // };

    // //function for handling the search button
    // const handleFormSubmit = event => {
    //   event.preventDefault();
    //   alert(`Search: ${SearchInput.search}`);
    //   setSearchinput({
    //     "search": "",
    //   });
    // };

  return (
    <form>
      <div className="form-group form-searcch">

          <label className ="search-label" htmlFor="book-search">Search For Any book You Want</label>
          <input
            id="book-search"
            name= "search"
            value = {SearchInput}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="Type in a book name to begin"
            
          />
          <button onClick={handleFormSubmit} className="btn btn-success search-btn">
            Search
          </button>
      </div>
    </form>
  );
}

// SearchForm.prototype = propType;
export default SearchForm;





// export function SearchInput(props) {
//     return (
//         <div className="form-group form-searcch">
//           <label className ="search-label" htmlFor="book-search">Search For Any book You Want</label>
//           <input
//             onChange={props.handleInputChange}
//             type="text"
//             className="form-control"
//             placeholder="Type in a book name to begin"
//             id="book-search"
//             {...props}
//           />
//         </div>
      
//     );
//   }

// export function FormBtn(props) {
//   return (
//     <button {...props} onClick={handleFormSubmit}  className="btn btn-success search-btn">
//       {props.children}
//     </button>
//   );
// }