import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(28px, 4vw, 44px) 0;
  scroll-margin-top: 80px;
`;

export const Label = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.gold};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: clamp(10px, 1vw, 11px);
  margin-bottom: 8px;
  text-shadow: 0 0 10px rgba(201, 169, 98, 0.4);
`;

export const Title = styled.h2`
  font-size: clamp(22px, 2.8vw, 32px);
  color: ${({ theme }) => theme.color.text};
  margin: 0 0 clamp(20px, 3vw, 28px);
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(12px, 1.5vw, 18px);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.color.backgroundAlt};
  padding: clamp(16px, 2vw, 22px);
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 14px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.08);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.color.gold}, ${({ theme }) => theme.color.goldDark});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover {
    box-shadow: 0 16px 48px ${({ theme }) => theme.color.shadowHover}, 0 0 0 1px rgba(255, 255, 255, 0.12), 0 0 30px rgba(201, 169, 98, 0.1);
    transform: translateY(-4px);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(201, 169, 98, 0.25) 0%, rgba(201, 169, 98, 0.05) 50%, rgba(154, 123, 58, 0.15) 100%);
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.color.gold};
  font-size: 18px;
  margin-bottom: 12px;
  box-shadow: 0 0 12px rgba(201, 169, 98, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
`;

export const CardTitle = styled.h3`
  font-size: clamp(15px, 1.3vw, 17px);
  color: ${({ theme }) => theme.color.text};
  margin: 0 0 8px;
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const CardDesc = styled.p`
  font-size: clamp(13px, 1.1vw, 14px);
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.5;
  margin: 0;
`;
