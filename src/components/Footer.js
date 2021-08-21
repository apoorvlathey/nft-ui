const twitterIcon = (
  <svg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.2857 1.34934C13.75 1.61921 13.2143 1.70917 12.5893 1.79913C13.2143 1.4393 13.6607 0.899563 13.8393 0.179913C13.3036 0.539738 12.6786 0.719651 11.9643 0.899563C11.4286 0.359825 10.625 0 9.82143 0C8.30357 0 6.96429 1.34935 6.96429 2.96856C6.96429 3.23843 6.96429 3.41834 7.05357 3.59825C4.64286 3.5083 2.41071 2.33886 0.982143 0.539738C0.714286 0.98952 0.625 1.4393 0.625 2.069C0.625 3.05852 1.16071 3.95808 1.96429 4.49782C1.51786 4.49782 1.07143 4.3179 0.625 4.13799C0.625 5.57729 1.60714 6.74673 2.94643 7.01659C2.67857 7.10655 2.41071 7.10655 2.14286 7.10655C1.96429 7.10655 1.78571 7.10655 1.60714 7.01659C1.96429 8.18603 3.03571 9.08559 4.375 9.08559C3.39286 9.8952 2.14286 10.345 0.714286 10.345C0.446429 10.345 0.267857 10.345 0 10.345C1.33929 11.1546 2.85714 11.6943 4.46429 11.6943C9.82143 11.6943 12.7679 7.19651 12.7679 3.32838C12.7679 3.23843 12.7679 3.05852 12.7679 2.96856C13.3929 2.51878 13.9286 1.97904 14.2857 1.34934Z'
      fill='#58536D'
      fillOpacity='0.9'
    />
  </svg>
);

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
          <div className='socials'>
            <a href='https://twitter.com/untitled_so'>{twitterIcon}</a>
          </div>
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
