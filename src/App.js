import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const token = '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';
    const apiUrl = 'https://api.github.com/timebuffer/smartbroad';

    const headers = {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    };

    fetch(apiUrl, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setRepositories(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.full_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
