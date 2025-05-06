// UserDetail.js
export function UserDetail(params) {
  const userId = params.id; // Access the 'id' parameter from the URL

  // Fetch user data based on userId or display a placeholder
  return `
    <h1>User Profile</h1>
    <p>User ID: ${userId}</p>
    {/* Add more user details here */}
  `;
}
