import { useEffect } from "react";
import { useState } from "react";

export const useData = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return [data];
};

export default function useClickAway(ref, callback) {
  useEffect(() => {
    function handleClickAway(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref, callback]);
}
