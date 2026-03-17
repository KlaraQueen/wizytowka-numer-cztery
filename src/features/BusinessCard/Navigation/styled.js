import styled from "styled-components";
import { FaCar } from "react-icons/fa6";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: clamp(4px, 0.8vw, 10px);
  padding: clamp(8px, 1vw, 14px) clamp(12px, 2.5vw, 32px);
  max-width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 2px solid ${({ theme }) => theme.color.gold};
  box-shadow: 0 2px 12px rgba(201, 169, 98, 0.2);
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(4px, 0.6vw, 8px);
  width: 100%;
  min-width: 0;
  flex-shrink: 0;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: clamp(6px, 0.8vw, 10px);
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  font-size: clamp(13px, 1.4vw, 18px);
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.color.goldLight};
  }
`;

export const LogoIcon = styled(FaCar)`
  font-size: clamp(16px, 1.8vw, 26px);
  color: ${({ theme }) => theme.color.gold};
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px rgba(201, 169, 98, 0.5));
`;

export const LogoText = styled.span`
  font-weight: 700;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: clamp(2px, 0.6vw, 24px);
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
  min-width: 0;
  max-width: 100%;
`;

export const NavLink = styled.button`
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: clamp(6px, 0.85vw, 14px);
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  padding: clamp(4px, 0.5vw, 6px) clamp(10px, 0.9vw, 14px);
  font-family: inherit;
  letter-spacing: 0.03em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 767px) {
    font-size: clamp(6px, 2vw, 10px);
    padding: clamp(4px, 1vw, 6px) clamp(6px, 1.2vw, 10px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.color.gold};
    border-radius: 1px;
    opacity: 0.6;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.color.goldLight};
    text-shadow: none;

    &::after {
      width: calc(100% - 24px);
    }
  }
`;

export const IconLinks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(4px, 0.6vw, 8px);
  flex-shrink: 0;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(20px, 2vw, 28px);
  height: clamp(20px, 2vw, 28px);
  color: ${({ theme }) => theme.color.gold};
  text-decoration: none;
  font-size: clamp(10px, 1.1vw, 14px);
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  background: transparent;
  border: none;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));

  &:hover {
    color: ${({ theme }) => theme.color.goldLight};
    filter: drop-shadow(0 0 8px rgba(201, 169, 98, 0.7));
    transform: translateY(-2px);
  }
`;
