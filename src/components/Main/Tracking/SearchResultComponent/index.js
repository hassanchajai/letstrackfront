import React from "react";
// import { OrdersJournal } from "../../../OrdersJournal";
import { MessageError } from "./MessageError";
import { Result } from "./Result";
import WithLoading from '../../../../HOC/WithLoading'

const SearchResultComponent = ({ styles,result }) => {

  return (
      <React.Fragment>
    { result.status ? <Result journal={result.order_journal} styles={styles} />  : <MessageError styles={styles} msg={result.message} /> }      
      </React.Fragment>

    );
};
export default WithLoading(SearchResultComponent)