import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <>
      <section className="">
        <Link
          to="/jobs"
          className="hover:bg-gray-700 rounded-xl
              px-4 py-4 text-center text-white bg-black block"
        >
          View All Jobs
        </Link>
      </section>
    </>
  )
}

export default ViewAllJobs
