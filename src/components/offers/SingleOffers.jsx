"use client";
import { uploads_uri } from "@/utils/baseUrl";
import OfferService from "@/utils/controllers/offerServices";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SingleOfferHero from "./SingleOfferHero";
import SingleOfferSpecialist from "./SingleOfferSpecialist";
import OfferServices from "./OfferServices";

const SingleOffers = () => {
  const params = useParams();
  const id = params.id;
  const [offerData, setOfferData] = useState();

  const fetchOfferById = async () => {
    try {
      const response = await OfferService.fetchOfferById(id);
      if (response && response.data) {
        setOfferData(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchOfferById();
  }, [id]);

  return (
    <div className="flex flex-col justify-normal gap-[10rem]">
      {offerData && (
        <>
          <div>
            <SingleOfferHero data={offerData} />
          </div>
          <div className="container custom-margin flex flex-col justify-normal gap-[4rem]">
            <SingleOfferSpecialist data={offerData} />
            <OfferServices data={offerData} />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleOffers;
