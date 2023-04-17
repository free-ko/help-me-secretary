import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: var(--background-color-secondary);
`;

const Styled = {
  Wrapper,
};

const Layout = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Layout;
