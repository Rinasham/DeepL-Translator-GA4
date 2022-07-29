import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const useQuestion = () => {
  const { level } = useParams();
  const [isLoading, setLoading] = useState<boolean>(false);
  console.log(level);

  const getQuestion = () => {
    setLoading(true);
    axios
      .get(`${URL}api/translator:${level}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return {
    getQuestion,
    isLoading,
    setLoading,
  };
};
