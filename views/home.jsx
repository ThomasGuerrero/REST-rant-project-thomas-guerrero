const React = require('react')
const Default = require('./default')

function home () {
    return (
      <Default>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='/images/home-page-image.jpg' alt='Mountain View Home Page'></img>
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@erol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erol Ahmed</a> on <a href="https://unsplash.com/photos/d3pTF3r_hwY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
              <a href='/places'>
                <button className='btn-primary'>Places Page</button>
              </a>
          </main>
      </Default>
    )
  }
  

module.exports = home