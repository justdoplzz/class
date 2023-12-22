
const HomePage = ({ serverRendered }) => {
    return (
        <div>
            <h1>{serverRendered ? 'SSR' : 'CSR'}</h1>
            <p>This content is {serverRendered ? 'server-rendered' : 'client-rendered'}</p>
        </div>
    )
}

export async function getServerSideProps(){
    return {
        props: {
            serverRendered: true,
        }
    }
}

export default HomePage;