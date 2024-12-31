import React from 'react'
import { useState } from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData()
  const [title, setTitle] = useState(job.title)
  const [type, setType] = useState(job.type)
  const [location, setLocation] = useState(job.location)
  const [description, setDescription] = useState(job.description)
  const [salary, setSalary] = useState(job.salary)
  const [companyName, setCompanyName] = useState(job.company.name)
  const [companyDescription, setCompanyDescription] = useState(job.company.description)
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail)
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone)

  const navigate = useNavigate()
  const {id} = useParams()

  const submitForm = (e) => {
    e.preventDefault()

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    }
    updateJobSubmit(updatedJob)

    toast.success('Updated Job Successfully')

    return navigate(`/jobs/${job.id}`)
  }

  return (
    <section className="bg-indigo-50">
      <div className="container py-24 max-w-2xl m-auto ">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md
        border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="font-semibold mb-6 text-center text-xl">Update Job</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block font-bold mb-2 text-gray-700"
              >
                Job Type
              </label>
              <select
                name="type"
                id="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="mb-2 font-bold block text-gray-700" htmlFor="">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className=" border rounded w-full py-2 px-3 mb-2 "
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3 "
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block  font-bold text-gray-700 mb-2"
              >
                Salary
              </label>
              <select
                name="salary"
                id="salary"
                className=" border w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50k">Under $50k</option>
                <option value="$50k - $60k">$50k - $60k</option>
                <option value="$60k - $70k">$60k - $70k</option>
                <option value="$70k - $80k">$70k - $80k</option>
                <option value="$80k - $90k">$80k - $90k</option>
                <option value="$100k - $125k">$100k - $125k</option>
                <option value="$125k - 150k">$125k - 150k</option>
                <option value="$150k - $175k">$150k - $175k</option>
                <option value="$175k - $200k">$175k - $200k</option>
                <option value="Over $200k">Over $200k</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className=" border rounded w-full py-2 px-3"
                placeholder="Company's Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                name="company_description"
                id="company_description"
                className="border rounded w-full py-2 px-3"
                placeholder="What does your company do ?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block font-bold text-gray-700 mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                name="contact_email"
                id="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="mb-2 font-bold block text-gray-700"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                name="contact_phone"
                id="contact_phone"
                className="w-full py-2 px-3"
                placeholder="Optional phone number for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white
                font-bold px-4 py-2 rounded-full w-full focus:outline-none
                focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditJobPage
