import React from "react";
import Grid from "./Connect4Grid/Connect4Grid.tsx"


export default function Connect4() {
  return (
    <div>
      <div>
        <p>This is the Connect4page</p>
        <Connect4Grid />
        <table>
          <tbody>
            <tr>
              <td>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51PFqUcGZNL._AC_SY400_.jpg" alt=""></img>
              {/* this is where connect 4 component is rendered */}
              </td>
              <td>This is where live chat component is placed</td>
              {/* this is where live chat component is placed */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
