import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img src="iic.png" className="w-25" style={styles.image} alt=""/>
        <p style={styles.description}>This is a description just below the photo.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This ensures the container takes up the full height of the viewport
    backgroundColor: '#f2f2f2', // Optional: Adds a background color for better visibility
  },
  content: {
    textAlign: 'center', // Center-align the text and image together
  },
  image: {
    borderRadius: '90px',
  },
  description: {
    marginTop: '20px', // Add some space between the image and the description
    fontSize: '16px',
    color: '#333',
  },
};
