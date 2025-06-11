import React from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaTrash, FaSearch } from 'react-icons/fa';
import logo from '../images/home.PNG';

const JobModification = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoSection}>
          <img src={logo} alt="SLTMobitel Logo" style={styles.logo} />
          <span style={styles.logoText}>Training Program</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/login" style={styles.navLink}>Logout</Link>
        </div>
      </header>

      <div style={styles.container}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <Link to="/createjob" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={styles.sidebarItem}>▶ Job Creation</div>
          </Link>
          <Link to="/jobmodification" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={styles.sidebarItemActive}>▶ Job Modification</div>
          </Link>
          <Link to="/receivedcvs" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={styles.sidebarItem}>▶ Received CVs</div>
          </Link>
          <Link to="/acceptedcvs" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={styles.sidebarItem}>▶ Accepted CVs</div>
          </Link>
        </aside>

        {/* Main Content */}
        <main style={styles.mainContent}>
          <div style={styles.contentWrapper}>
            <div style={styles.searchContainer}>
              <input type="text" placeholder="Search" style={styles.searchInput} />
              <button style={styles.searchButton}><FaSearch /></button>
            </div>

            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>Job ID</th>
                  <th style={styles.th}>Job Field</th>
                  <th style={styles.th}>Created Date</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Modification</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                    <td style={styles.td}>{item.jobId}</td>
                    <td style={styles.td}>{item.field}</td>
                    <td style={styles.td}>{item.date}</td>
                    <td style={{ ...styles.td, ...styles[item.status.toLowerCase()] }}>{item.status}</td>
                    <td style={styles.td}>
                      <FaPen style={styles.icon} />
                      <FaTrash style={styles.icon} />
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

const data = [
  { jobId: 'IT', field: 'QA Trainee', date: '2023/10/14', status: 'Rejected' },
  { jobId: 'HR', field: 'HR Trainee', date: '2023/09/11', status: 'Accepted' },
  { jobId: 'Finance', field: 'Accountant', date: '2023/08/16', status: 'Rejected' },
  { jobId: 'IT', field: 'Web Developer', date: '2023/08/02', status: 'Accepted' },
];

const styles = {
  page: { backgroundColor: '#f8f9fd', minHeight: '100vh' },
  header: {
    height: '60px', backgroundColor: '#fff', borderBottom: '1px solid #eee',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px'
  },
  logoSection: { display: 'flex', alignItems: 'center', gap: '10px' },
  logo: { height: '40px' },
  logoText: { fontWeight: 'bold', color: '#0054a6', fontSize: '18px' },
  navLinks: { display: 'flex', gap: '20px' },
  navLink: { textDecoration: 'none', color: '#000', fontWeight: '500' },
  container: { display: 'flex' },
  sidebar: {
    width: '200px', backgroundColor: '#0054a6', color: '#fff', paddingTop: '20px',
    display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)'
  },
  sidebarItem: { padding: '15px 20px', cursor: 'pointer', borderLeft: '5px solid transparent' },
  sidebarItemActive: {
    padding: '15px 20px', backgroundColor: '#003f7d',
    borderLeft: '5px solid #fff', fontWeight: 'bold'
  },
  mainContent: {
    flexGrow: 1, padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'
  },
  contentWrapper: { width: '100%', maxWidth: '1000px' },
  searchContainer: { display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' },
  searchInput: {
    padding: '8px', width: '200px', border: '1px solid #ccc', borderRadius: '20px 0 0 20px',
    outline: 'none', fontSize: '14px'
  },
  searchButton: {
    padding: '8px 12px', backgroundColor: '#eee', border: '1px solid #ccc',
    borderLeft: 'none', borderRadius: '0 20px 20px 0', cursor: 'pointer'
  },
  table: {
    width: '100%', borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden',
    boxShadow: '0 0 8px rgba(0,0,0,0.05)'
  },
  thead: { backgroundColor: '#0066cc', color: 'white' },
  th: { padding: '12px', textAlign: 'left' },
  td: { padding: '12px' },
  rowEven: { backgroundColor: '#f2f2f2' },
  rowOdd: { backgroundColor: '#ffffff' },
  icon: { marginRight: '10px', cursor: 'pointer', color: '#333' },
  accepted: { color: 'green', fontWeight: 'bold' },
  rejected: { color: 'red', fontWeight: 'bold' }
};

export default JobModification;
