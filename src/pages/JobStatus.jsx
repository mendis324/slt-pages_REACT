import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/home.PNG';

const JobStatus = () => {
  useEffect(() => {
    const container = document.querySelector('.container');
    container.classList.add('highlight');
  }, []);

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoSection}>
          <img src={logo} alt="SLTMobitel Logo" style={styles.logo} />
          <span style={styles.logoText}>Training Program</span>
        </div>
        <nav style={styles.nav}>
          <Link to="/jobstatus" style={styles.navLink}>Job status</Link>
          <Link to="/apply" style={styles.navLink}>Apply for job</Link>
          <Link to="/userjobinfo" style={styles.navLink}>Jobs for you</Link>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </nav>
      </header>

      {/* Table Container */}
      <div className="container" style={styles.container}>
        <h2 style={styles.heading}>Applied Job Status:</h2>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.th}>Job Field</th>
              <th style={styles.th}>Job Position</th>
              <th style={styles.th}>Recommendation</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.td}>Software</td>
              <td style={styles.td}>QA Trainee</td>
              <td style={styles.td}>Approved yesterday</td>
              <td style={styles.td}>Approved</td>
            </tr>
            <tr style={styles.trAlt}>
              <td style={styles.td}>Telecommunication</td>
              <td style={styles.td}>Trainee</td>
              <td style={styles.td}>Rejected yesterday</td>
              <td style={styles.td}>Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f4f9fc',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    background: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '130px',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginLeft: '12px',
    color: '#0073e6',
  },
  nav: {
    display: 'flex',
    gap: '24px',
    fontSize: '16px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    padding: '0 10px',
    fontWeight: '500',
    borderRight: '1px solid #ccc',
  },
  container: {
    background: 'white',
    margin: '40px auto',
    padding: '40px',
    width: '90%',
    maxWidth: '950px',
    borderRadius: '20px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in-out',
  },
  heading: {
    fontSize: '26px',
    marginBottom: '30px',
    color: '#004aad',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '15px',
  },
  tableHeader: {
    background: '#004aad',
    color: 'white',
  },
  th: {
    padding: '16px 12px',
    textAlign: 'left',
  },
  td: {
    padding: '14px 12px',
    backgroundColor: '#ffffff',
  },
  tr: {
    backgroundColor: '#f3f7fa',
  },
  trAlt: {
    backgroundColor: '#ffffff',
  },
};

export default JobStatus;