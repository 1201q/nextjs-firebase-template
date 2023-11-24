import { authService } from "@/utils/firebase/client";
import { admin } from "@/utils/firebase/admin";
import styled from "styled-components";
import nookies from "nookies";

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let isLogin = false;
  let uid;

  try {
    const token = await admin.auth().verifyIdToken(cookies.token);

    if (token) {
      uid = token.uid;
      isLogin = true;
    }

    return {
      props: { isLogin: isLogin, uid: uid || null },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default function Home({ isLogin, uid }) {
  return <Container>1</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-orange);
  width: 100%;
  height: 100%;
  min-height: 300vh;
  font-size: 20px;
`;
