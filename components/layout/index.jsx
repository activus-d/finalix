import LandingPage from './landingPage'

export default function Layout({children}) {
    return (
        <>
            <LandingPage />
            <div>{children}</div>
        </>
    )
}