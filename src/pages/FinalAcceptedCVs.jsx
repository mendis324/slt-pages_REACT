import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/home.PNG';

const FinalAcceptedCVs = () => {
  const data = [
    {
      title: 'Software',
      name: 'QA Trainee',
      gender: 'Male',
      field: 'IT',
      contact: '074 3231211',
      file: 'qa-trainee.pdf'
    },
    {
      title: 'Telecommunication',
      name: 'Trainee',
      gender: 'Male',
      field: 'IT',
      contact: '074 3231211',
      file: 'trainee.pdf'
    }
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logoWrap}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.logoText}>Training Program</span>
        </div>
        <nav style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/login" style={styles.navLink}>Logout</Link>
        </nav>
      </header>

      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <Link to="/createjob" style={styles.link}><div style={styles.sidebarItem}>▶ Job Creation</div></Link>
          <Link to="/jobmodification" style={styles.link}><div style={styles.sidebarItem}>▶ Job Modification</div></Link>
          <Link to="/receivedcvs" style={styles.link}><div style={styles.sidebarItem}>▶ Received CVs</div></Link>
          <Link to="/acceptedcvs" style={styles.link}><div style={styles.sidebarItemActive}>▶ Accepted CVs</div></Link>
        </aside>

        <main style={styles.content}>
          <div style={styles.card}>
            <h2 style={styles.heading}>Accepted CVs</h2>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeaderRow}>
                  <th style={styles.tableHeader}>Job Title</th>
                  <th style={styles.tableHeader}>Name</th>
                  <th style={styles.tableHeader}>Gender</th>
                  <th style={styles.tableHeader}>Field</th>
                  <th style={styles.tableHeader}>Contact Number</th>
                  <th style={styles.tableHeader}>CV</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx} style={styles.tableRow}>
                    <td style={styles.tableCell}>{item.title}</td>
                    <td style={styles.tableCell}>{item.name}</td>
                    <td style={styles.tableCell}>{item.gender}</td>
                    <td style={styles.tableCell}>{item.field}</td>
                    <td style={styles.tableCell}>{item.contact}</td>
                    <td style={styles.tableCell}>
                      <a href="#" style={styles.cvLink}>{item.file}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f4f8fd',
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  logoWrap: { display: 'flex', alignItems: 'center' },
  logo: { height: '40px', marginRight: '10px' },
  logoText: { fontWeight: 'bold', color: '#0078d7' },
  navLinks: { display: 'flex', gap: '20px' },
  navLink: { textDecoration: 'none', color: '#333' },
  main: { display: 'flex' },
  sidebar: {
    width: '200px',
    backgroundColor: '#004d99',
    paddingTop: '20px',
    height: 'calc(100vh - 60px)'
  },
  link: { textDecoration: 'none', color: 'white' },
  sidebarItem: {
    padding: '12px 20px',
    color: 'white',
    cursor: 'pointer'
  },
  sidebarItemActive: {
    padding: '12px 20px',
    color: 'white',
    backgroundColor: '#003366',
    fontWeight: 'bold'
  },
  content: { flex: 1, padding: '40px 20px' },
  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  heading: {
    fontSize: '20px',
    color: '#003366',
    marginBottom: '20px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '15px'
  },
  tableHeaderRow: {
    backgroundColor: '#004d99',
    color: 'white'
  },
  tableHeader: {
    padding: '14px',
    textAlign: 'left'
  },
  tableRow: {
    backgroundColor: '#fefefe',
    borderBottom: '1px solid #eaeaea',
    height: '50px'
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left'
  },
  cvLink: {
    color: '#0078d7',
    textDecoration: 'none',
    fontWeight: 500
  }
};

export default FinalAcceptedCVs;
