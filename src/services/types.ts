export interface ITeamMember {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
  imageUrl?: string;
}

export interface IService {
  id: number;
  title: string;
  description: string;
  iconName: string;
}
