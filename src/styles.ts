import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
`;

export const Group = styled.div``;

export const ColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const BottomPosition = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LargeText = styled.div`
  font-size: 5em;
`;

export const MediumText = styled.div`
  font-size: 2em;
`;
