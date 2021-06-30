import React from "react";
import "../mainWindow/window.css";

// const NewsBlock = (props) => {
//   return (
//     <div index={props.id} className="newsMainBlock">
//       <div className="headAndDate">
//         <span className="header">{props.news.header}</span>
//       </div>
//       <div>
//         <div className="text">{props.news.text}</div>
//       </div>
//     </div>
//   );
// };

const NewsBlock = ({ news }) => {
  return (
    <div key={news.id} className="newsMainBlock">
      <div className="headAndDate">
        <span className="header">{news.header}</span>
      </div>
      <div>
        <div className="text">{news.text}</div>
      </div>
    </div>
  );
};

export default NewsBlock;
