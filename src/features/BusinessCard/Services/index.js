import * as S from "./styled";
import { FaCar, FaCalendarDays, FaTruck, FaShieldHalved, FaHeadset } from "react-icons/fa6";
import { siteData } from "../../../siteData";

const iconMap = {
  car: FaCar,
  calendar: FaCalendarDays,
  delivery: FaTruck,
  insurance: FaShieldHalved,
  support: FaHeadset,
};

const Services = () => {
  const { label, title, items } = siteData.services;

  return (
    <S.Section id="uslugi">
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
      <S.Grid>
        {items.map((service, index) => {
          const Icon = iconMap[service.icon] || FaCar;
          return (
            <S.Card key={index}>
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
              <S.CardTitle>{service.title}</S.CardTitle>
              <S.CardDesc>{service.description}</S.CardDesc>
            </S.Card>
          );
        })}
      </S.Grid>
    </S.Section>
  );
};

export default Services;
