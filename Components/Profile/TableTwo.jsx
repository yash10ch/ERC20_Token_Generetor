import React from "react";

const TableTwo = ({ tableData, title}) => {
 return (
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12">
      <div class="send-money-from transection-log">
        <div class="from-text">
          <h4 class="from-top">
            {" "}
            {tableData.length == 0
             ? "No Donation Given, Support us"
             : `${title}`}{" "}
          </h4>
          {tableData.length == 0 ? (
            ""
          ) : (
            <div class="from-inner table-inner">
              <table>
                <thead>
                  <tr>
                    <th>Donation ID</th>
                    <th>Downer</th>
                    <th>Fund</th>
                  </tr>
                  <>
                  {tableData?.map((token, i) => (
                    <tr key={i + 1}>
                      <td>#{token.donationID}</td>
                      <td>{token.donor.slice(0, 55)}...</td>
                      <td>{token.fund} MATIC</td>
                    </tr>
                    
                  ))}
                  </>
                </thead>
              </table>
              </div>
          )}
        </div>
      </div>
    </div>
  </div>
 );
};

export default TableTwo;
