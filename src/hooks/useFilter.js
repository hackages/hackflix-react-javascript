import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useFilter(){
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [urlParams, setUrlsParams] = useState({})

  useEffect(() => {
    let params = {}
    for (const entry of searchParams.entries()) {
      params[entry[0]] = entry[1] 
      if(entry[0] === "category"){
        setSelectedCategory(entry[1])
      }
    }
    setUrlsParams(params)
  }, [searchParams]);

  function updateUrl(categoryName){
    setSearchParams({...urlParams, category: categoryName })
  }


  return {
    selectedCategory, 
    updateUrl
  }

}
