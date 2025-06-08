import React from 'react';
import signup from '../images/sign up.png';


const SignUp = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.imageSide}>
          <img src= {signup} alt="Register" style={styles.image} />
        </div>

        <div style={styles.formSide}>
          <h2 style={styles.heading}>Register</h2>
          <form style={styles.form}>
            <label htmlFor="user-id">User ID</label>
            <input type="text" id="user-id" name="user-id" required style={styles.input} />

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required style={styles.input} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required style={styles.input} />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required style={styles.input} />

            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    maxWidth: '1000px',
    width: '90%',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '20px',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  imageSide: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  },
  formSide: {
    flex: 1,
    backgroundColor: '#0056a3',
    color: 'white',
    padding: '3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '0 20px 20px 0',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    rowGap: '1.5rem',
    columnGap: '1rem',
    alignItems: 'center',
  },
  input: {
    padding: '0.7rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
  },
  button: {
    gridColumn: '2 / 3',
    backgroundColor: 'white',
    color: '#0056a3',
    border: 'none',
    padding: '0.6rem 1.5rem',
    fontWeight: 'bold',
    borderRadius: '15px',
    cursor: 'pointer',
    justifySelf: 'end',
  },
};

export default SignUp;
