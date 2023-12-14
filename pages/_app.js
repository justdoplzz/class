import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import Layout from "../src/components/commons/layout/index"

// 모든 페이지의 공통설정들 진행
export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()    // 컴퓨터의 메모리에 백앤드에서 받아온 데이터 임시로 저장
  })

  return (
    <div>
      <div>-- _app.js 컴포넌트 시작부분</div>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
      <div>-- _app.js 컴포넌트 끝부분</div>
    </div>
  )
}
