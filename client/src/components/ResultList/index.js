import React from "react";
import PropType from "prop-types"
import Card from "../Card"

const propType = {

books : PropType.array.isRequired
  }
const ResultList = ({books}) => {


  return(
    <Card  
    books = {books}/>

)
};
ResultList.prototype = propType;
export default ResultList;

