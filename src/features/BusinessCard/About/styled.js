import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(20px, 3vw, 28px);
  background: ${({ theme }) => theme.color.backgroundAlt};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 16px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.08);
  height: fit-content;

  @media (max-width: 767px) {
    padding: clamp(24px, 4vw, 32px);
  }
`;

export const Content = styled.div`
  max-width: 100%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.gold};
  text-shadow: 0 0 10px rgba(201, 169, 98, 0.4);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: clamp(11px, 1vw, 12px);
`;

export const Title = styled.h2`
  font-size: clamp(18px, 2vw, 22px);
  color: ${({ theme }) => theme.color.text};
  margin: clamp(6px, 0.8vw, 10px) 0 clamp(12px, 1.5vw, 18px);
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-size: clamp(14px, 1.3vw, 16px);
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
  margin: 0 0 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 22px;
`;

export const ListItem = styled.li`
  font-size: clamp(14px, 1.3vw, 15px);
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.7;
  margin-bottom: 10px;

  &::marker {
    color: ${({ theme }) => theme.color.gold};
  }
`;