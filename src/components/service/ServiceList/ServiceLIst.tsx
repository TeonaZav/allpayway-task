import { useServiceList } from "../../../hooks/useServiceList";
import { ServiceCard, Loading } from "../../index";
import { Button, SectionHeading } from "../../../styles/Shared";
import { SServicListWrapper, SGrid } from "./ServiceList.styled";
import * as Icons from "./../../../assets/icons";
import { PlusIcon } from "./../../../assets/icons";

const isValidIconName = (iconName: string): iconName is keyof typeof Icons => {
  return iconName in Icons;
};

const ServiceList: React.FC = () => {
  const { services, loading, error, loadMoreServices, allServicesLoaded } =
    useServiceList();

  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  return (
    <SServicListWrapper>
      <SectionHeading>more services</SectionHeading>
      <SGrid>
        {services.map((service, index) => {
          const validIconName = isValidIconName(service.iconName)
            ? service.iconName
            : ("DefaultIcon" as keyof typeof Icons);

          return (
            <ServiceCard
              key={service.id}
              {...service}
              iconName={validIconName}
              index={index}
            />
          );
        })}
      </SGrid>

      {!allServicesLoaded && (
        <Button onClick={loadMoreServices}>
          <PlusIcon /> Load More
        </Button>
      )}
    </SServicListWrapper>
  );
};

export default ServiceList;
