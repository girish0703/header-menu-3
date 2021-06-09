import './App.css'

const App = () => (
  <div className="app-container">
    <div className="nav-section">
      <p className="subscribe">Subscribe</p>
      <h1 className="large">Large</h1>
      <div className="signup-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          className="search-icon"
          alt="searchIcon"
        />
        <button type="button" className="signUp-button">
          Sign up
        </button>
      </div>
    </div>
    <hr className="hr-line" />
    <div className="categories">
      <p className="category">World</p>
      <p className="category">U.S.</p>
      <p className="category">Technology</p>
      <p className="category">Design</p>
      <p className="category">Culture</p>
      <p className="category">Business</p>
      <p className="category">Politics</p>
      <p className="category">Opinion</p>
      <p className="category">Science</p>
      <p className="category">Health</p>
      <p className="category">Style</p>
      <p className="category">Travel</p>
    </div>
    <div className="title-card">
      <h1 className="card-heading">Title of a longer featured blog post</h1>
      <p className="card-description">
        Multiple lines of text that form the lede, informing new readers quickly
        and efficiently about what's most intersting in this post's contents.
      </p>
      <p className="continue-link">Continue reading...</p>
    </div>
  </div>
)

export default App
