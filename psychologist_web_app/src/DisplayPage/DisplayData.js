import React from 'react';

function DisplayData() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Initial Diagnosis</h1>
        <div style={styles.content}>Text for Header 1</div>
      </div>

      <div style={styles.header}>
        <h1 style={styles.heading}>Recommendations</h1>
        <div style={styles.content}>Text for Header 2</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
  },
  header: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    color: '#333',
    marginBottom: '10px',
  },
  content: {
    color: '#666',
  },
};

export default DisplayData;
