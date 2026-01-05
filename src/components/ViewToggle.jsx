function ViewToggle({ view, onViewChange }) {
  return (
    <div className="view-toggle">
      <button
        onClick={() => onViewChange('list')}
        className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
        aria-label="List view"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3h16M2 10h16M2 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        List
      </button>
      <button
        onClick={() => onViewChange('card')}
        className={`toggle-btn ${view === 'card' ? 'active' : ''}`}
        aria-label="Card view"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="7" height="7" stroke="currentColor" strokeWidth="2" />
          <rect x="11" y="2" width="7" height="7" stroke="currentColor" strokeWidth="2" />
          <rect x="2" y="11" width="7" height="7" stroke="currentColor" strokeWidth="2" />
          <rect x="11" y="11" width="7" height="7" stroke="currentColor" strokeWidth="2" />
        </svg>
        Card
      </button>
    </div>
  )
}

export default ViewToggle

