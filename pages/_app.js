import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

// 모든 페이지의 공통설정들 진행
export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()    // 컴퓨터의 메모리에 백앤드에서 받아온 데이터 임시로 저장
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
