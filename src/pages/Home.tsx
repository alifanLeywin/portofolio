import { DividerStrip } from '../components/Shared'
import ContributionGraph from '../components/ContributionGraph'
import Experience from '../components/Section/Home/Experience'
import Stack from '../components/Section/Home/Stack'
import Friends from '../components/Section/Home/Friends'
import Contact from '../components/Section/Home/Contact'

export default function Home() {
  return (
    <>
      <Experience />
      <DividerStrip />
      <Stack />
      <ContributionGraph />
      <DividerStrip />
      <Friends />
      <DividerStrip />
      <Contact />
    </>
  )
}
