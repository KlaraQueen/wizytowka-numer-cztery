import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(20px, 4vw, 48px) 0;
  scroll-margin-top: 80px;

  @media (min-width: 768px) {
    padding: clamp(32px, 4vw, 48px) 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 4vw, 40px);
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 0.95fr 1.05fr;
    gap: clamp(24px, 4vw, 40px);
  }
`;

export const TextBlock = styled.div`
  order: 1;

  @media (min-width: 768px) {
    order: 0;
  }
`;

export const Label = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.gold};
  text-shadow: 0 0 10px rgba(201, 169, 98, 0.4);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2.5px;
  font-size: 10px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: clamp(11px, 1vw, 12px);
    margin-bottom: 14px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(18px, 2.8vw, 30px);
  color: ${({ theme }) => theme.color.text};
  margin: 0 0 10px;
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: clamp(22px, 2.8vw, 30px);
    margin: 0 0 16px;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.6;
  margin: 0;

  @media (min-width: 768px) {
    font-size: clamp(14px, 1.3vw, 16px);
    line-height: 1.7;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    border-radius: ${({ theme }) => theme.radius.xl};
    box-shadow: 0 32px 72px -20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
`;

export const TeamImage = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

export const EmployeesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: clamp(14px, 2vw, 20px);
    margin-top: clamp(28px, 4vw, 40px);
  }
`;

export const EmployeeCard = styled.div`
  background: ${({ theme }) => theme.color.backgroundAlt};
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 2px 10px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: clamp(18px, 2.5vw, 24px);
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: 0 4px 14px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.08);
  }

  &:hover {
    box-shadow: 0 16px 40px ${({ theme }) => theme.color.shadowHover}, 0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export const EmployeeName = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text};
  margin: 0 0 4px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: clamp(16px, 1.4vw, 18px);
    margin: 0 0 6px;
  }
`;

export const EmployeeRole = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gold};
  font-weight: 600;
  margin: 0 0 8px;
  text-shadow: 0 0 8px rgba(201, 169, 98, 0.3);
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    font-size: clamp(14px, 1.3vw, 15px);
    margin: 0 0 10px;
    padding-bottom: 10px;
  }
`;

export const EmployeeDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.4;
  margin: 0;

  @media (min-width: 768px) {
    font-size: clamp(13px, 1.2vw, 14px);
    line-height: 1.5;
  }
`;
