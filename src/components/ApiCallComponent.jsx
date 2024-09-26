import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

function ApiCallComponent() {
  const getData = (page) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
      .then((response) => response.json())
      .then((json) => json);
  };
  const [page, setPage] = useState(1);
  // Queries
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todosFetcher", page],
    queryFn: getData(page),
    enabled: !page,
  });

  if (isLoading) {
    return <div>Skeleton loader .......</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      ></button>
      {data?.map((item, index) => {
        return <div key={index}>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
}

export default ApiCallComponent;
