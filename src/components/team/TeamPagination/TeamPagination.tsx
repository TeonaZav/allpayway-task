import { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { TeamMemberCard, Loading } from "./../../index";

import {
  ChevronsRight,
  ChevronsLeft,
  ChevronRight,
  ChevronLeft,
} from "../../../assets/icons";

import {
  STeamListWrapper,
  SPaginationContainer,
  SPageButton,
  SPagination,
  STeamGrid,
  SSubheading,
} from "./TeamPagination.styled";
import { useFetchTeamMembers } from "./../../../hooks/useFetchTeamMembers";
import { ITeamMember } from "../../../services/types";

const TeamPagination: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 4;

  const { data, isLoading, error, isFetching } = useFetchTeamMembers(
    currentPage,
    itemsPerPage
  );

  if (isLoading || isFetching) return <Loading />;
  if (error) return <p>Error loading team members</p>;

  const teamMembers = data?.data || [];
  const pageCount = Math.ceil((data?.count || 0) / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <STeamListWrapper>
      <SSubheading>{`# Our Team`}</SSubheading>
      <STeamGrid>
        {teamMembers.map((member: ITeamMember) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </STeamGrid>

      <SPaginationContainer>
        <SPageButton
          onClick={() => setCurrentPage(0)}
          disabled={currentPage === 0}
        >
          <ChevronsLeft />
        </SPageButton>
        <SPagination
          pageCount={pageCount}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          forcePage={currentPage}
          nextLabel={<ChevronRight />}
          previousLabel={<ChevronLeft />}
          activeClassName={"active"}
          disabledClassName={"disabled"}
        />
        <SPageButton
          onClick={() => setCurrentPage(pageCount - 1)}
          disabled={currentPage === pageCount - 1}
        >
          <ChevronsRight />
        </SPageButton>
      </SPaginationContainer>
    </STeamListWrapper>
  );
};

export default TeamPagination;
