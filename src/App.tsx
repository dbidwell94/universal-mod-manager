import styled from "@emotion/styled";
import TopBar from "./components/TopBar";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <>
      <AppWrapper>
        <TopBar />
      </AppWrapper>
    </>
  );
}
