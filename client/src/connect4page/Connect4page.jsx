import React from "react";

export default function Connect4() {
  return (
    <div>
      <div>
        <p>This is the Connect4page</p>
        <table>
          <tr>
            <td>
              <img src="https://images-na.ssl-images-amazon.com/images/I/51PFqUcGZNL._AC_SY400_.jpg"></img>
            {/* this is where connect 4 component is rendered */}
            </td>
            <td>Live Chat</td>
            {/* this is where live chat component is placed */}
          </tr>
        </table>
      </div>
    </div>
  );
}