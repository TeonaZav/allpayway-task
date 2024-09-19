import { useQuery } from "@tanstack/react-query";
import { fetchTeamMembers } from "../services/api";

export const useFetchTeamMembers = (page: number, itemsPerPage: number) => {
  return useQuery({
    queryKey: ["teamMembers", page, itemsPerPage],
    queryFn: () => fetchTeamMembers(page, itemsPerPage),
  });
};
