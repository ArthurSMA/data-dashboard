import Head from "next/head"
import Dashboard from "./dashboard"
import SideMenu from "./components/SideMenu"
import Header from "./components/Header"
import Settings from "./dashboard/settings/Settings"

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="viewport" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </>
  )
}
