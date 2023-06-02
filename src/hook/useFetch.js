import { useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [state, setState] = useState();

  const getApi = () => {
    axios
      .get(url)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  };
  return [state, getApi];
};

export default useFetch;
