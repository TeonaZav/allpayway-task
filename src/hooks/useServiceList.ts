import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchServices, fetchLocalServices,} from "../services/api";

export const useServiceList = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const limit = 3;


  const {
    data: initialServices = [],
    error: initialError,
    isLoading: initialLoading,
  } = useQuery({
    queryKey: ["services", { limit: 3 }],
    queryFn: async () => {
      try {
        return await fetchServices(limit, 0);
      } catch (err) {
        console.error("API failed, switching to local services");
        return fetchLocalServices().then((data) => data.slice(0, 3));
      }
    },
    staleTime: 1000 * 60 * 5, 
    retry: 1,
  });

 
  const {
    data: remainingServices = [],
    error: remainingError,
    isLoading: remainingLoading,
  } = useQuery({
    queryKey: ["services", { limit: 17 }],
    queryFn: async () => {
      return fetchServices(17, limit);
    },
    enabled: showAll, 
    staleTime: 1000 * 60 * 5, 
    retry: 1,
  });


  const loadMoreServices = () => {
    setShowAll(true);
  };

  return {
    services: [...initialServices, ...remainingServices], 
    loading: initialLoading || remainingLoading,
    error: initialError || remainingError,
    showAll,
    loadMoreServices,
  };
};
