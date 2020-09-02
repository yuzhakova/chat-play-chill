import React from 'react';

export default function Homepage() {
  return (
    <div>
      
      <div>
        <p>This is the Homepage</p>
        <table>
          <tr>
            <td>
              <img src="https://image.shutterstock.com/image-vector/vector-illustration-cartoon-house-isolated-260nw-298428176.jpg" alt=""></img>
              <p>This is where the two buttons for navigating to /chess and /connect 4 are rendered for interaction</p>
              {/* this is where the two buttons for navigating to /chess and /connect 4 are rendered for interaction */}
            </td>
            <td>This is where live chat component is placed</td>
            {/* this is where live chat component is placed */}
          </tr>
        </table>
      </div>
    
    </div>  
  );
}