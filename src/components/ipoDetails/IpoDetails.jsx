"use client";
import { MdKeyboardArrowRight } from "react-icons/md";

import Image from "next/image";
import IPOTimeline from "../stepper/Stapper";
import arrow from "../../../public/images/arrow.svg";
import downloadIcon from "../../../public/images/download-icon.svg";
import IPOData from "../../../ipoData.json";

import Link from "next/link";

export default function IPODetails({ id }) {
  const IPODataID = IPOData.filter((ipoData) => ipoData.id == id);

  const ipokey = IPODataID[0];

  const steps = ipokey.steps;

  const currentDate = new Date();

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    return new Date(`${month} ${day}, ${year}`);
  };

  // Calculate the number of completed steps
  const completedSteps = steps.filter(
    (step) => currentDate >= formatDate(step.date)
  ).length;

  const ipo = id;

  if (!ipo) {
    return <p>IPO not found</p>;
  }

  return (
    <div className="container">
      <div className="links">
        <Link href="/" className="primary">
          Home
        </Link>
        <MdKeyboardArrowRight size={10} />
        <Link href="#" className="primary">
          Market Watch{" "}
        </Link>
      </div>

      <div className="company-detail-wrap">
        <div className="logo_wrap">
          <Link href="/" className="back-btn">
            <Image src={arrow} alt="arrow_icon" />
          </Link>
          <div className="company-logo">
            <Image
              src={ipokey.logoImage}
              alt={ipokey.company}
              width={150}
              height={150}
            />
            <div className="logo-txt-wrap">
              <p className="secondary company-name">{ipokey.company}</p>
              <p className="primary">{ipokey.company} Private Limited</p>
            </div>
          </div>
        </div>

        <div className="btn-wrap">
          <div className="download-btn">
            <Image src={downloadIcon} alt="download_icon" />
          </div>

          <button className="apply-btn">Apply</button>
        </div>
      </div>

      <div className="ipo-detail-wrap">
        <h6 className="secondary detail-title"> IPO Details</h6>
        <div className="ipo-detail-inner-wrap">
          <div className="details-wrap">
            <div className="details">
              <span className="primary">Issue size</span>
              <span className="secondary">{ipokey.issueSizes}</span>
            </div>
            <div className="details">
              <span className="primary">Price range</span>
              <span className="secondary">{ipokey.priceRanges}</span>
            </div>
            <div className="details">
              <span className="primary">Minimun Amount</span>
              <span className="secondary">{ipokey.minInvestments}</span>
            </div>
            <div className="details">
              <span className="primary">lost size</span>
              <span className="secondary">{ipokey.lots}</span>
            </div>
          </div>
          <div className="details-wrap">
            <div className="details">
              <span className="primary">Issue Dates</span>
              <span className="secondary">{ipokey.issueDates}</span>
            </div>
            <div className="details">
              <span className="primary">Listed on</span>
              <span className="secondary">{ipokey.listedOn}</span>
            </div>
            <div className="details">
              <span className="primary">Listed Price</span>
              <span className="secondary">{ipokey.listedPrice}</span>
            </div>
            <div className="details">
              <span className="primary">Listing gains</span>
              <span className="secondary">
                {ipokey.listedGains} (<span>{ipokey.listedGainsValue}</span>)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ipo-timeline-wrapper">
        <h3>IPO timeline</h3>
        <div className="ipo-timeline">
          <IPOTimeline
            currentStep={completedSteps}
            numberOfSteps={steps.length}
            stepsData={steps}
          />
        </div>
      </div>

      <div className="abt-company-wrap">
        <h3 className="secondary"> About the company</h3>
        <p className="primary abt-txt">{ipokey.abtUsTxt}</p>
        <p className="primary">{ipokey.abtUsTxt2}</p>
      </div>
    </div>
  );
}
