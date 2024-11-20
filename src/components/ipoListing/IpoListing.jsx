import Image from "next/image";
import Link from "next/link";
import React from "react";
import ipoList from "../../../ipoData.json";

import goAir from "../../../public/images/go-air.jpeg";
import bajaj from "../../../public/images/bajaj-energy.jpg";
import oyo from "../../../public/images/oyo.png";


// console.log("IPODat787a",IPOData[0].company)
// const IPOListungKey = IPOData[0];


const IPOList = () => {
  // const ipoList = [
  //   {
  //     id: "go-air",
  //     logoImg: goAir,
  //     company: "GO AIR",
  //     issueDate: "4th-7th oct 2022",
  //     issueSize: "₹3600 Crores",
  //     priceRange: "₹50-60",
  //     minInvestment: "₹50,000",
  //     qty: "100 Shares/5 lots",
  //   },
  //   {
  //     id: "bajaj-energy",
  //     logoImg: bajaj,
  //     company: "BAJAJ ENERGY",
  //     issueDate: "4th-7th oct 2022",
  //     issueSize: "₹2500 Crores",
  //     priceRange: "₹25-40",
  //     minInvestment: "₹25,000",
  //     qty: "100 Shares/5 lots",
  //   },
  //   {
  //     id: "oyo",
  //     logoImg: oyo,
  //     company: "OYO",
  //     issueDate: "4th-7th oct 2022",
  //     issueSize: "₹5600 Crores",
  //     priceRange: "₹50-60",
  //     minInvestment: "₹50,000",
  //     qty: "100 Shares/5 lots",
  //   },
  // ];

  return (
    <div className="container ipo-list">
      <div className="table-wrap">
        <table className="ipo-table">
          <thead>
            <tr>
              <th className="primary">Company/issue date</th>
              <th className="primary">Issue Size</th>
              <th className="primary">Price Range</th>
              <th className="primary">Min Investment</th>
            </tr>
          </thead>
          <tbody>
            {ipoList.map((ipo) => (
              <Link href={`/${ipo.id}`} key={ipo.id} legacyBehavior>
                <tr style={{ cursor: "pointer" }}>
                  <td>
                    <div className="company-wrap">
                      <div className="logo">
                        <Image src={ipo.logoImage} alt={ipo.company} width={50} height={50} />
                      </div>
                      <div className="name-text">
                        <p className="secondary">{ipo.company}</p>
                        <p className="issue-date primary">{ipo.issueDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="secondary">{ipo.issueSize}</td>
                  <td className="secondary">{ipo.priceRange}</td>
                  <td>
                    <div className="invest-qty-wrap">
                      <p className="secondary minInvestment">
                        {ipo.minInvestment}
                      </p>
                      <p className="primary">{ipo.qty}</p>
                    </div>
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPOList;
