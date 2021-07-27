import React from "react";
import { useQuery } from "react-apollo-hooks";
import MM03Presenter from "./MM03Presenter";
import { GET_BY_ID_USER, UPDATE_USER } from "./MM03Queries";

const MM03Container = () => {
 const userId = sessionStorage.getItem("WOX32S4SH20");

 console.log(userId);

 const {
  data: userBannerData,
  loading: userBannerLoading,
  refetch: userBannerRefetch,
 } = useQuery(GET_BY_ID_USER, { variables: { id: userId } });

 console.log(userBannerData && userBannerData.getByIdUser);

 return <MM03Presenter userBannerData={userBannerData && userBannerData.getByIdUser} />;
};

export default MM03Container;
