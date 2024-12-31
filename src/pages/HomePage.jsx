import Hero from '../component/Hero'
import ViewAllJobs from '../component/ViewAllJobs'
import HomeCard from '../component/HomeCard'
import JobListings from '../component/JobListings'

const HomePage = () => {
    return <>
      <Hero />
      <HomeCard  />
      <JobListings isHome />
      <ViewAllJobs/>
      
  </>
}

export default HomePage
