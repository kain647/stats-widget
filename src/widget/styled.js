import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 500px;
  width: 420px;
  padding: 30px 80px;
  justify-content: center;
  flex-direction: column;
  background-color: #1b1b1b;
  box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.75);
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Text = styled.div`
  display: flex;
  color: #666666;
`;
export const StatsBox = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 550px;
  width: 250px;
  right: 100px;
  padding: 10px;
  background: linear-gradient(#516395, #614285);
`;
export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
`;
export const StatsHeader = styled.div`
  display: flex;
  font-weight: 500;
  color: lightgray;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
export const Subscribers = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Total = styled.div`
  display: flex;
  color: #f4f4f4;
  font-size: 48px;
`;
export const Week = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subtitle = styled.div`
  display: flex;
  color: #9188ac;
  font-weight: 500;
`;
export const Percent = styled.div`
  display: flex;
  font-weight: 500;
  opacity: 80%;
  color: ${({ color }) => color};
`;
export const SubTotal = styled.div`
  display: flex;
  font-size: 18px;
  margin-bottom: 25px;
  color: #f7f7f6;
`;
export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SocialNetwork = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 10px;
`;
export const Number = styled.div`
  display: flex;

  color: #f7f7f6;
`;
export const NetworkContainer = styled.div`
  display: grid;
  width: 280px;
  grid-template-columns: repeat(2, 1fr);
`;
export const VisitorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const pulse = keyframes`
  50% {
    transform: scale(1.1,1.1);
  }
`;
export const PopUp = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #fff;
  height: 14px;
  width: 14px;
  background-color: #ff0000;
  border-radius: 50%;
  top: 335px;
  right: 480px;
  cursor: pointer;
  animation: ${pulse} infinite 0.5s;
`;
