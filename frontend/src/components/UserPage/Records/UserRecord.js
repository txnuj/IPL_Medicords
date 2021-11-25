import React from "react";
import "./UserRecord.css";

export default function AdminRecords(props) {
  return (
    <tr>
      <td>{props.lastVisit}</td>
      <td>{props.ailments}</td>
    </tr>
  );
}