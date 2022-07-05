import React from "react";

const Table = (props) => {
  let columnWidth = 100 / props.tableHeaders.length;

  return (
    <table className="table table-striped table-hover datatable">
      <thead>
        <tr>
          {props.tableHeaders.map((theader, index) => (
            <th key={index} width={`${columnWidth}%`}>
              {theader}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;
