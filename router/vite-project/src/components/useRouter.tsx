import React, { useState, useEffect } from "react";

const useRouter = (path: string) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(path);
  }, [url]);
  return url;
};

export default useRouter;
