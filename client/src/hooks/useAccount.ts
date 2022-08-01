import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUser } from "../api/getUser";

export const useAccount = () => {
  const navigation = useNavigate();

  const fetchUser = async () => {
    const userInfo = await getUser();

    if (!userInfo) {
      navigation("/authentication/login");
    }
  };

  return {
    fetchUser,
  };
};
