import netlifyIdentity from 'netlify-identity-widget';

export function loginUser() {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata,
      created_at,
      confirmed_at,
      email,
      id,
      user_metadata,
    } = netlifyIdentity.currentUser();

    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        ...app_metadata,
        created_at,
        confirmed_at,
        email,
        id,
        ...user_metadata,
      })
    );
  }
}

export function logoutUser() {
  localStorage.removeItem('currentUser');
}

// Bind to events
// netlifyIdentity.on('init', user => console.log(user));
// netlifyIdentity.on('login', user => console.log(user));
// netlifyIdentity.on('logout', () => console.log('Logged out'));
// netlifyIdentity.on('error', err => console.error('Logged out'));
// netlifyIdentity.on('open', () => console.log('Widget opened'));
// netlifyIdentity.on('close', () => console.log('Widget closed'));
