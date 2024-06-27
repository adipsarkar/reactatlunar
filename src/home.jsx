import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img src="iic.png" className="w-25" style={styles.image} alt="" />
        <p style={styles.description}>Since 2017, Itahari International College has offered top-tier IT and Business programmes in
          partnership with London Metropolitan University, UK. It aims to produce globally competitive graduates,
          making it the first college in Itahari to provide a direct UK university degree.
          IIC nurtures future leaders and innovators by providing hands-on experiences, real-world projects, and a practical curriculum.
          Our commitment is evident in our alumni's successful careers and high placement rates. Itahari International College is a flagship institution of Innovate Nepal Group (ING)..</p>
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
