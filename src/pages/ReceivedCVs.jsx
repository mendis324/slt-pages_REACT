import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/home.PNG';

const AcceptedCVs = () => {
  const cvData = [
    {
      title: 'Software',
      name: 'QA Trainee',
      gender: 'Male',
      field: 'IT',
      contact: '074 3231211',
      file: 'dinith.pdf'
    },
    {
      title: 'Telecommunication',
      name: 'Trainee',
      gender: 'Male',
      field: 'IT',
      contact: '074 3231211',
      file: 'dilshara.pdf'
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
          <Link to="/receivedcvs" style={styles.link}><div style={styles.sidebarItemActive}>▶ Received CVs</div></Link>
          <Link to="/acceptedcvs" style={styles.link}><div style={styles.sidebarItem}>▶ Accepted CVs</div></Link>
        </aside>

        <main style={styles.content}>
          <div style={styles.card}>
            <h2 style={styles.heading}>Accepted CVs</h2>
            <div style={{ overflowX: 'auto' }}>
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
                  {cvData.map((item, idx) => (
                    <tr key={idx} style={styles.tableRow}>
                      <td style={styles.tableCell}>{item.title}</td>
                      <td style={styles.tableCell}>{item.name}</td>
                      <td style={styles.tableCell}>{item.gender}</td>
                      <td style={styles.tableCell}>{item.field}</td>
                      <td style={styles.tableCell}>{item.contact}</td>
                      <td style={styles.tableCell}>
                        <a className="cv-link" href="#" style={styles.cvLink}>{item.file}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  page: { fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f8fd', minHeight: '100vh' },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px',
    backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  logoWrap: { display: 'flex', alignItems: 'center' },
  logo: { height: '40px', marginRight: '10px' },
  logoText: { fontWeight: 'bold', color: '#0078d7', fontSize: '18px' },
  navLinks: { display: 'flex', gap: '20px' },
  navLink: { color: '#333', textDecoration: 'none', fontWeight: 500 },
  main: { display: 'flex' },
  sidebar: {
    width: '200px', backgroundColor: '#004d99', paddingTop: '20px', height: 'calc(100vh - 60px)'
  },
  link: { textDecoration: 'none', color: 'white' },
  sidebarItem: {
    padding: '12px 20px', color: 'white', cursor: 'pointer', borderLeft: '5px solid transparent', transition: 'all 0.3s'
  },
  sidebarItemActive: {
    padding: '12px 20px', backgroundColor: '#003366', color: 'white', fontWeight: 'bold', borderLeft: '5px solid white'
  },
  content: {
    flex: 1, padding: '40px 20px'
  },
  card: {
    backgroundColor: 'white', borderRadius: '20px', padding: '30px 40px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)', maxWidth: '1100px', margin: 'auto'
  },
  heading: { marginBottom: '25px', color: '#004085', fontSize: '22px' },
  table: {
    width: '100%', borderCollapse: 'collapse', fontSize: '16px', borderRadius: '10px', overflow: 'hidden'
  },
  tableHeaderRow: {
    backgroundColor: '#004b8d', color: 'white'
  },
  tableHeader: {
    padding: '16px 24px', backgroundColor: '#004b8d', color: 'white', textAlign: 'left', fontSize: '15px'
  },
  tableRow: {
    backgroundColor: 'white', borderBottom: '1px solid #eee', transition: 'background-color 0.2s ease', height: '56px'
  },
  tableCell: {
    padding: '16px 24px', fontSize: '15px', verticalAlign: 'middle', borderBottom: '1px solid #f0f0f0'
  },
  cvLink: {
    color: '#0078d7', textDecoration: 'none', fontWeight: '500'
  }
};

export default AcceptedCVs;
