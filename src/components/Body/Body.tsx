import styled from "@emotion/styled";

const Wrapper = styled.div`
  flex: auto;
  background-color: var(--background-color-secondary);
`;

const Styled = {
  Wrapper,
};

const Body = () => {
  return (
    <Styled.Wrapper>
      <h1>BODY</h1>
    </Styled.Wrapper>
  );
};

export default Body;
