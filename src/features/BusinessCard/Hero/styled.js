import styled from "styled-components";

export const Section = styled.header`
  position: relative;
  min-height: clamp(320px, 45vw, 420px);
  padding: clamp(40px, 6vw, 64px) clamp(16px, 3vw, 32px);
  text-align: center;
  background: ${({ theme }) => theme.color.backgroundAlt};
  border-radius: 0 0 ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg};
  margin-bottom: clamp(24px, 3vw, 36px);
  overflow: hidden;
  border-bottom: 3px solid ${({ theme }) => theme.color.gold};
  box-shadow: 0 4px 20px rgba(201, 169, 98, 0.25), 0 0 40px rgba(201, 169, 98, 0.1);

  @media (max-width: 767px) {
    min-height: 220px;
    padding: 24px 16px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.55) 100%
  );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: clamp(240px, 35vw, 292px);

  @media (max-width: 767px) {
    min-height: 160px;
  }
`;

export const TextBlock = styled.div`
  width: 100%;
`;

export const Tagline = styled.h1`
  font-size: clamp(24px, 3.2vw, 38px);
  color: #ffffff;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4);
  -webkit-font-smoothing: antialiased;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.color.goldDark}, ${({ theme }) => theme.color.gold}, ${({ theme }) => theme.color.goldLight}, ${({ theme }) => theme.color.gold});
    margin: 12px auto 0;
    border-radius: 2px;
    box-shadow: 0 0 12px rgba(201, 169, 98, 0.6), 0 0 24px rgba(201, 169, 98, 0.3);
  }

  @media (max-width: 767px) {
    margin: 0 0 10px;
    font-size: clamp(20px, 5vw, 26px);
  }
`;

export const Description = styled.p`
  font-size: clamp(15px, 1.4vw, 18px);
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.6;
  margin: 0 auto 24px;
  max-width: 560px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-font-smoothing: antialiased;

  @media (max-width: 767px) {
    margin: 0 auto 16px;
    font-size: clamp(14px, 3.5vw, 16px);
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const CtaButton = styled.button`
  background: linear-gradient(145deg, ${({ theme }) => theme.color.goldLight} 0%, ${({ theme }) => theme.color.gold} 30%, ${({ theme }) => theme.color.goldDark} 100%);
  color: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 14px 32px;
  font-size: clamp(14px, 1.2vw, 16px);
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 6px 20px rgba(201, 169, 98, 0.5),
    0 0 30px rgba(201, 169, 98, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 10px 30px rgba(201, 169, 98, 0.6),
      0 0 50px rgba(201, 169, 98, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.7);
    background: linear-gradient(145deg, #fffacd 0%, ${({ theme }) => theme.color.goldLight} 40%, ${({ theme }) => theme.color.gold} 100%);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 767px) {
    padding: 12px 22px;
  }
`;

