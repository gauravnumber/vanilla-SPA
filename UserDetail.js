// UserDetail.js
export function UserDetail(params) {
  const userId = params.id;

  return `
    <div class="user-profile">
      <h1>User Profile</h1>
      <div class="user-info">
        <p><strong>User ID:</strong> ${userId}</p>
        <p><strong>Username:</strong> user_${userId}</p>
        <p><strong>Email:</strong> user${userId}@example.com</p>
        <p><strong>Member Since:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
      <div class="user-actions">
        <button onclick="alert('Edit user ${userId}')">Edit Profile</button>
        <button onclick="alert('Message user ${userId}')">Send Message</button>
      </div>
    </div>
  `;
}
