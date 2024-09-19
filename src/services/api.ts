import { supabase } from "./supabaseClient";
import { ITeamMember } from "./types";

interface IFetchTeamMembersResponse {
  data: ITeamMember[];
  count: number;
}

export const fetchServices = async (limit?: number, offset?: number) => {
  let query = supabase.from("services").select("*");

  if (limit !== undefined && offset !== undefined) {
    query = query.range(offset, offset + limit - 1);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Failed to fetch services");
  }

  return data;
};

export const fetchLocalServices = async () => {
  try {
    const response = await fetch("/data/services.json");
    if (!response.ok) {
      throw new Error("Failed to fetch local services");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching local services:", error);
    throw error;
  }
};

export const fetchTeamMembers = async (
  page: number,
  itemsPerPage: number
): Promise<IFetchTeamMembersResponse> => {
  const { data, count, error } = await supabase
    .from("team")
    .select("*", { count: "exact" })
    .range(page * itemsPerPage, (page + 1) * itemsPerPage - 1);

  if (error) {
    throw new Error("Failed to fetch team members");
  }

  console.log(data);

  return { data: data || [], count: count || 0 };
};
