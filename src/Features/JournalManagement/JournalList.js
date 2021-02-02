import React from "react";
import JournalDetail from "./JournalDetail";
import { Link, Route, useRouteMatch } from "react-router-dom";

const JournalList = ({newList,deLeTe}) => {

  const { url } = useRouteMatch();
  const linkList = newList.map((product) => {
      return (
        <li key={product.id}>
          <Link to={`${url}/${product.id}`}>{product.name}</Link>
        </li>
      );
    });
  
    return(
    <div>
      <div className="journal-list-wrapper">
        <header>
          <div className="subTitle">Your entries</div>
          <div className="subTitle">Detail</div>
        </header>
      </div>
      <div className="journal-list-main-area">
        <div className="journal-list">
          <ul >
            {linkList}
          </ul>
        </div>
        
        <div className="journal-detail">
          <Route path={`${url}/:productId`}>
            <JournalDetail data={newList} deleTe={deLeTe} />

          </Route>
        </div>
      </div>
    </div>
    );
    
  };

export default JournalList;
