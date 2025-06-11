import React, { useEffect } from 'react';
import logo from '../images/home.PNG';
import { Link } from 'react-router-dom';

const UserJobInfo = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.job-card');
    cards.forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, i * 150);
    });
  }, []);

  const styles = {
    body: {
      backgroundColor: '#eef6fa',
      padding: '1rem',
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    },
    navbar: {
      backgroundColor: 'white',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      flexWrap: 'wrap',
    },
    navbarLeft: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '40px',
      marginRight: '10px',
    },
    title: {
      color: '#0057a0',
      fontSize: '1.2rem',
    },
    navbarRight: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    link: {
      textDecoration: 'none',
      color: 'black',
      fontWeight: 500,
    },
    mainTitle: {
      textAlign: 'center',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
    },
    jobContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      padding: '0 2rem',
    },
    jobCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    jobTitle: {
      backgroundColor: '#004aad',
      color: 'white',
      padding: '0.7rem',
      borderRadius: '12px',
      fontSize: '1rem',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    jobList: {
      marginBottom: '1.5rem',
      fontSize: '0.9rem',
      lineHeight: 1.5,
      color: '#333',
      paddingLeft: '1.2rem',
    },
    applyBtn: {
      backgroundColor: '#40c439',
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      padding: '0.7rem 1.5rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    status: {
      textAlign: 'center',
      margin: '2.5rem 0 1rem',
    },
    checkBtn: {
      backgroundColor: '#0066cc',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '30px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <img src={logo} alt="SLTMobitel Logo" style={styles.logo} />
          <h2 style={styles.title}>Training Program</h2>
        </div>
        <div style={styles.navbarRight}>
          <a href="applied job status for user.html" style={styles.link}>Job status</a>
          <Link to="/apply" style={styles.link}>Apply for job</Link>
          <a href="user job infor.html" style={styles.link}>jobs for you</a>
          <a href="home.html" style={styles.link}>Home</a>
          <a href="login.html" style={styles.link}>Login</a>
        </div>
      </div>

      {/* Title */}
      <div style={styles.mainTitle}>Find Your Job that is prefer for you</div>

      {/* Job Cards */}
      <div style={styles.jobContainer}>
        {[
          {
            title: 'Trainee Network Engineers',
            items: [
              'No job experiences are needed.',
              'Networking knowledge.',
              'Operating systems knowledge.',
              'Network devices and security knowledge.',
              'Networking device configuration knowledge.',
            ],
          },
          {
            title: 'ACCOUNTANT–FINANCIAL ACCOUNTING',
            items: [
              'Associate Membership of ICA/CIMA/ACCA.',
              'Preference to candidates who are prize winners.',
              'Be a resilient leader with excellent communication skills.',
            ],
          },
          {
            title: 'ENGINEERS',
            items: [
              'BSc Engineering or Tech degree from UGC recognized institution.',
              'Member of the Institute of Engineers Sri Lanka.',
              'Knowledge of data center/network/cloud/IT platforms.',
            ],
          },
          {
            title: 'TECHNICIANS',
            items: [
              '6 passes at G.C.E (O/L) in one sitting.',
              'NVQ Level 4 competence in telecom/electrical/ICT fields.',
            ],
          },
        ].map((job, index) => (
          <div key={index} className="job-card" style={styles.jobCard}>
            <h3 style={styles.jobTitle}>{job.title}</h3>
            <ul style={styles.jobList}>
              {job.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button style={styles.applyBtn}>Apply Now</button>
          </div>
        ))}
      </div>

      {/* Status Check */}
      <div style={styles.status}>
        <button style={styles.checkBtn}>Check the Applied Job Status</button>
      </div>
    </div>
  );
};

export default UserJobInfo;
