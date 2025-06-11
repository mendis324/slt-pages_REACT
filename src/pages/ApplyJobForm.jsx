import React, { useState } from 'react';
import logo from '../images/home.PNG';
import { Link } from 'react-router-dom';

const ApplyJobForm = () => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      alert(`You uploaded: ${files[0].name}`);
    }
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <img src={logo} alt="SLTMobitel Logo" style={styles.logo} />
          <h2 style={styles.title}>Training Program</h2>
        </div>
        <div style={styles.navbarRight}>
          <Link to="/jobstatus" style={styles.link}>Job status</Link>
          <Link to="/apply" style={styles.link}>Apply for job</Link>
          <Link to="/userjobinfo" style={styles.link}>jobs for you</Link>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/login" style={styles.link}>Login</Link>
        </div>
      </div>

      {/* Form Container */}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Apply for Job</h2>
        <form style={styles.form}>
          <div style={styles.formGroup}><label>Job Title :</label> <div>Web Development Trainee</div></div>
          <div style={styles.formGroup}><label>Name with Initials :</label> <input type="text" placeholder="e.g., S.P. Perera" style={styles.input} /></div>
          <div style={styles.formGroup}><label>Full Name :</label> <input type="text" placeholder="Your full name" style={styles.input} /></div>
          <div style={styles.formGroup}><label>Gender :</label> <select style={styles.input}><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></div>
          <div style={styles.formGroup}><label>Date of Birth :</label> <input type="date" style={styles.input} /></div>
          <div style={styles.formGroup}><label>Email :</label> <input type="email" placeholder="your@email.com" style={styles.input} /></div>
          <div style={styles.formGroup}><label>Contact Number :</label> <input type="tel" placeholder="07XXXXXXXX" style={styles.input} /></div>
          <div style={styles.formGroup}><label>Field :</label> <select style={styles.input}><option value="">Select Field</option><option>Software Engineering</option><option>Network Engineering</option><option>Finance</option><option>Technician</option></select></div>

          <label style={styles.uploadLabel}>Upload your CV here</label>
          <div
            style={{ ...styles.uploadArea, ...(dragOver ? styles.dragOver : {}) }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div style={{ fontSize: '2rem' }}>☁️</div>
            Drag & Drop files here<br />or<br />
            <label style={styles.uploadBtn}>Browse Files <input type="file" style={{ display: 'none' }} /></label>
          </div>

          <button type="submit" style={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f4f9fc',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: 'white',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    margin: '20px auto',
    width: '95%',
    maxWidth: '1100px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  navbarLeft: { display: 'flex', alignItems: 'center' },
  logo: { height: '40px', marginRight: '10px' },
  title: { color: '#0057a0', fontSize: '1.2rem' },
  navbarRight: { display: 'flex', gap: '2rem' },
  link: { textDecoration: 'none', color: 'black', fontWeight: 500 },
  formContainer: {
    backgroundColor: 'white',
    width: '90%',
    maxWidth: '850px',
    margin: '40px auto',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#004aad'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.6rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  uploadLabel: {
    fontWeight: 500,
    marginTop: '1rem',
    display: 'block'
  },
  uploadArea: {
    border: '2px dashed #bbb',
    borderRadius: '12px',
    padding: '2rem',
    textAlign: 'center',
    color: '#888',
    marginBottom: '1.5rem',
  },
  dragOver: {
    borderColor: '#007bff',
    color: '#007bff'
  },
  uploadBtn: {
    marginTop: '0.5rem',
    display: 'inline-block',
    backgroundColor: '#fff',
    border: '2px solid #00aaff',
    color: '#00aaff',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  submitBtn: {
    display: 'block',
    margin: 'auto',
    backgroundColor: '#0057a0',
    color: 'white',
    border: 'none',
    padding: '0.8rem 2.5rem',
    fontSize: '1rem',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '2rem'
  }
};

export default ApplyJobForm;
