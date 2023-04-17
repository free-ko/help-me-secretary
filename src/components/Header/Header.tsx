import NextImage from "next/image";
import styled from "@emotion/styled";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Image = styled(NextImage)`
  border-radius: 50%;
`;

const Styled = {
  Wrapper,
  ProfileWrapper,
  Image,
};

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.ProfileWrapper>
        <Styled.Image
          src="https://avatars.githubusercontent.com/u/47565280?v=4"
          alt="kay`s profile"
          width={64}
          height={64}
        />
        <h3>고영욱(Kay)</h3>
      </Styled.ProfileWrapper>
    </Styled.Wrapper>
  );
};

export default Header;
