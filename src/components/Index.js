import Head from "next/head";
import styled from "styled-components";
import { Colors, Devices } from "./Theme";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";

const IndexEl = styled.article`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;

  @media ${Devices.Laptop} {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  color: ${Colors.Primary};
`;

const HeroText = styled.p`
  color: ${Colors.White};
`;

const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Github = styled.a`
  cursor: pointer;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border: 2px solid ${Colors.White};
  font-size: 1.1rem;
  gap: 0.5rem;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  svg {
    font-size: 1.7rem;
  }

  :hover {
    border: 2px solid ${Colors.Background};
    background-color: ${Colors.Primary};
    color: ${Colors.White};
  }
`;

const Site = styled(Github)``;

export default function Index() {
  return (
    <IndexEl>
      <Head>
        <title>Create Next App - TasmeTime</title>
        <meta
          name="description"
          content="Cleaned create-next-app including styled-components and configured theme"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section>
        <HeroTitle>DON'T WASTE TIME!</HeroTitle>
        <HeroText>
          Go ahead and build what's in your mind, everything is set 😉
        </HeroText>
        <BtnContainer>
          <Link href="https://m-azad.ir" passHref>
            <Site target="_blank" rel="author">
              <BsGlobe />
              Website
            </Site>
          </Link>

          <Link
            href="https://github.com/TasmeTime/create-next-app-cleaned"
            passHref
          >
            <Github target="_blank" rel="external">
              <BsGithub />
              Fork on Github!
            </Github>
          </Link>
        </BtnContainer>
      </section>
    </IndexEl>
  );
}
