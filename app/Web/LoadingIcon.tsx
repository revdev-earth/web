const LoadingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="animate-spin spin h-5 w-5 mx-auto"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      fill="currentColor"
      d="M12 2a2 2 0 100 4 2 2 0 000-4zM12 22a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

export default LoadingIcon;
