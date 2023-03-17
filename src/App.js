import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import ReactMarkdown from 'react-markdown'

import Layout from './Layout.jsx'
// import Home from '../pages/Home'
// import Login from '../containers/Login'
// import RecoveryPassword from '../containers/RecoveryPassword'
// import NotFound from '../pages/NotFound'

const menuLinks = [{
  "id": 1,
  "name": "Week 1",
  "path": "/week-1",
  "items": [{
    "id": 4,
    "name": "Challenge-1",
    "path": "/week-1/challenge-1",
}]
}, {
  "id": 2,
  "name": "Day 2",
  "path": "/disabled",
}, {
  "id": 3,
  "name": "Day 3",
  "path": "/disabled",
}];



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <Layout menuLinks={menuLinks} content={
          <h1>hi</h1>
        } />
       } />

      <Route path={"/week-1"} element={
        <Layout menuLinks={menuLinks} content={
          <div className=' flex flex-col gap-8'>
            <div className=' flex flex-col gap-2'>
              <h2 className='text-xl font-bold'>📖 Week 1</h2>
              <h3 className='text-lg font-bold'>Learnings:</h3>
              <ul className='ml-8'>
                <li>Navigate your computer's file system and create directories and files using command-line tools.</li>
                <li>Create and clone a repository, add and commit changes, and push and pull code using Git commands.</li>
                <li>Build the structure of a webpage using HTML elements.</li>
                <li>Add attributes to HTML elements to style the elements or adjust their behavior in various ways.</li>
                <li>Style webpages using CSS's color and font properties.</li>
                <li>Identify the box model and how it relates to an element's layout and design.</li>
                <li>Alter the layout of webpages using CSS's display and font properties.</li>
              </ul>
            </div>
            
          </div>
        } />
      } />


      <Route path={"/week-1/challenge-1"} element={
        <Layout menuLinks={menuLinks} content={
          <div className=' flex flex-col gap-8'>
            <div className=' flex flex-col gap-2'>
              <h2 className='text-xl font-bold'>Week 1 Challenge - Accessibility Refactor</h2>
              <p>Module 1 Challenge from Berkeley's Coding Bootcamp Summer 2023</p>
              <a className=' text-blue-500' target="_blank" href="https://github.com/KishParikh13/coding-bootcamp-module-1">Github Repo Link</a>
              <a className=' text-blue-500' target="_blank" href="https://kishparikh13.github.io/coding-bootcamp-module-1/">Github Pages Link</a>
              <h3 className='text-lg font-bold mt-4'>Overview:</h3>
              <p className='mb-4'>This exercise was to go over the basics of accessibility standards on the web and best practices when structuring html. To do this we refactored some starter code according the below acceptance criteria.</p>
              <h4>User Story</h4>
              <ReactMarkdown className='bg-slate-200 pt-6 px-6 mb-4'>
                {`
    AS A marketing agency
    I WANT a codebase that follows accessibility standards
    SO THAT our own site is optimized for search engines
                `}
              </ReactMarkdown>
              <h4>Acceptance Criteria</h4>
              <ReactMarkdown className='bg-slate-200 pt-6 px-6 mb-4'>
                {`
    GIVEN a webpage meets accessibility standards
    WHEN I view the source code
    THEN I find semantic HTML elements
    WHEN I view the structure of the HTML elements
    THEN I find that the elements follow a logical structure independent of styling and positioning
    WHEN I view the icon and image elements
    THEN I find accessible alt attributes
    WHEN I view the heading attributes
    THEN they fall in sequential order
    WHEN I view the title element
    THEN I find a concise, descriptive title
                `}
              </ReactMarkdown>
              <h3 className='text-lg font-bold'>What I did:</h3>
              <p className='mb-2'>
                I went line by line through the acceptance criteria, like a checklist, and made the appropriate changes. Half of the changes involved changing tags and attributes of html elements. The other half of the changes required updating the css file, renaming classes and changing a few selectors. Overall I removed a lot of duplative css classes and restructured one off class selectors into ids.
              </p>
              <p>
                I also made one change not included in the acceptance criteria. I noticed one of the links in the navigation didn't work because the corresponding section (the link anchor) was missing an ID. I simply added the ID to the section to solve that problem.
              </p>
              <h3 className='text-lg font-bold'>End Result:</h3>
              <p className='mb-2'>
              I created a before.html file to show the original html before my refactoring. This can be compared wiith index.html to see what changes I made. See the published url and image below.
              </p>
              <a className=' text-blue-500' target="_blank" href="https://github.com/KishParikh13/coding-bootcamp-module-1">Github Repo Link</a>
              <a className=' text-blue-500' target="_blank" href="https://kishparikh13.github.io/coding-bootcamp-module-1/">Github Pages Link</a>
            </div>
          </div>
        } />
      } />

      <Route path={"/day-2"} element={
        <Layout menuLinks={menuLinks} content={
          <>
            <h1 className='text-2xl mb-8'>Day  2 content</h1>
            <h2>bye</h2>
          </>
        } />
      } />
      <Route path={"/day-3"} element={
        <Layout menuLinks={menuLinks} content={
          <>
            <h1 className='text-2xl mb-8'>Day  3 content</h1>
            <h2>bye</h2>
          </>
        } />
      } />
    </Routes>
  </Router>
)

export default App;