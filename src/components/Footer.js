const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='content flex'>
        <Col width={2}>
          <h2>Untitled Inc.</h2>
          <span>@2021 Untitled Inc</span>
          <span>Made with by @jefe</span>
        </Col>
        <Col>
          <span className='title'>Company</span>
          <a href='#'>About</a>
          <a href='#'>Brand assets</a>
          <a href='#'>Legal</a>
          <a href='#'>Privacy</a>
        </Col>
        <Col>
          <span className='title'>Resources</span>
          <a href='#'>Status</a>
          <a href='#'>Project</a>
          <a href='#'>Learn</a>
        </Col>
        <Col>
          <span className='title'>Social</span>
        </Col>
      </div>
      <div className='bottom flex justify-center'>
        <span>All rights reserved @Untitled Inc</span>
      </div>
    </footer>
  );
};

const Col = ({ children, width }) => {
  return <div className={`col flex-${width ?? 1} flex-col flex align-start`}>{children}</div>;
};

export default Footer;
