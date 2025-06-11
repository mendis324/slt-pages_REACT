import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/home.PNG';

const JobCreation = () => {
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
            <div style={styles.sidebarItemActive}>▶ Job Creation</div>
          </Link>
          <Link to="/jobmodification" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={styles.sidebarItem}>▶ Job Modification</div>
          </Link>
          <Link to="/receivedcvs" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={styles.sidebarItem}>▶ Received CVs</div>
          </Link>
          <Link to="/acceptedcvs" style={{ textDecoration: 'none', color: 'white' }}>
            <div style={styles.sidebarItem}>▶ Accepted CVs</div>
          </Link>
        </aside>

      

        {/* Form Content */}
        <main style={styles.mainContent}>
          <form style={styles.formBox}>
            <h2 style={styles.formTitle}>Company Job Vacancy : Web Development Trainee</h2>
            <div style={styles.gridBox}>
              <div style={styles.formGroup}><label>Job ID :</label><input type="text" /></div>
              <div style={styles.formGroup}><label>Job Field :</label><input type="text" /></div>
              <div style={styles.formGroup}><label>Job Position :</label><input type="text" /></div>
              <div style={styles.formGroup}><label>Contact Number :</label><input type="text" /></div>
              <div style={styles.formGroup}><label>Background :</label><input type="text" /></div>
              <div style={styles.formGroup}><label>Salary :</label><input type="text" /></div>
              <div style={styles.formGroup}><label>Due Date :</label><input type="date" /></div>
              <div style={styles.formGroup}><label>Company Email :</label><input type="email" /></div>
              <div style={styles.formGroup}><label>Company Location :</label><input type="text" /></div>
              <div style={styles.formGroup}><label>Work Type :</label><input type="text" /></div>
              <div style={{ ...styles.formGroup, gridColumn: 'span 2' }}>
                <label>Job Description :</label><textarea style={styles.textarea}></textarea>
              </div>
            </div>
            <div style={styles.buttonRow}>
              <button type="submit" style={styles.button}>Create</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

const styles = {
  page: { backgroundColor: '#f4f9fc', minHeight: '100vh' },
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
  formBox: {
    backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    maxWidth: '900px', width: '100%'
  },
  formTitle: { fontWeight: 'bold', marginBottom: '20px', fontSize: '18px' },
  gridBox: {
    display: 'grid', gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
  },
  formGroup: {
    display: 'flex', flexDirection: 'column'
  },
  textarea: {
    padding: '10px', borderRadius: '10px', border: '1px solid #ccc', resize: 'none', height: '70px'
  },
  buttonRow: {
    marginTop: '20px', display: 'flex', justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: '#1a4eff', color: '#fff', border: 'none',
    padding: '10px 30px', borderRadius: '20px', cursor: 'pointer', fontSize: '16px'
  }
};

export default JobCreation;
