
import {ExpertiseSection, FinalixSectionContainer, Explore, FinalixMiles } from '../container'
import { HomeFinalix } from '../components'

export default function Home() {
  return (
    <div>
      <HomeFinalix/>
      <Explore/>
      <FinalixSectionContainer/>
      <ExpertiseSection/>
      <FinalixMiles/>
    </div>
  )
}
