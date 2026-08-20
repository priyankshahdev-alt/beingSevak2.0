import { Link } from 'react-router-dom';

export default function SchoolCollaboration() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy: #03163E;
          --mid: #315371;
          --cyan: #00A2D9;
          --cyan-light: #33bce8;
          --green: #2eb85c;
          --gold: #D4AF37;
          --white: #ffffff;
          --light-bg: #f4f7fb;
          --text-dark: #1a1a2e;
          --text-mid: #4a5568;
        }
        body { font-family: 'Open Sans', sans-serif; color: var(--text-dark); overflow-x: hidden; }
        .school-collab-section {
          width: 100%;
          padding: 100px 8%;
          background: #fff;
          overflow: hidden;
          position: relative;
        }
        .school-collab-section::before {
          content: "";
          position: absolute;
          width: 420px; height: 420px;
          background: #00a3d4;
          opacity: 0.08;
          border-radius: 50%;
          top: -150px; right: -120px;
          filter: blur(20px);
        }
        .school-collab-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }
        .school-tag {
          display: inline-block;
          padding: 10px 22px;
          background: #00a3d4;
          color: #fff;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          box-shadow: 0 10px 25px rgba(0,163,212,0.35);
        }
        .school-collab-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .school-collab-left h2 {
          font-size: 55px;
          line-height: 1.2;
          margin-bottom: 25px;
          color: #111;
          font-weight: 800;
        }
        .school-collab-left h2 span {
          color: #00a3d4;
          text-shadow: 0 5px 15px rgba(0,163,212,0.25);
        }
        .school-collab-left p {
          font-size: 17px;
          line-height: 1.9;
          color: #555;
          margin-bottom: 18px;
        }
        .school-highlight-box {
          background: #fff;
          border-left: 6px solid #00a3d4;
          padding: 24px 28px;
          border-radius: 20px;
          margin: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: 0.4s;
        }
        .school-highlight-box:hover { transform: translateY(-8px); }
        .school-highlight-box h3 {
          font-size: 22px;
          color: #00a3d4;
          margin-bottom: 10px;
        }
        .school-points {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .school-point {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #fff;
          padding: 18px;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          transition: 0.4s;
        }
        .school-point:hover { transform: translateX(10px); }
        .school-icon {
          min-width: 50px;
          height: 50px;
          background: #00a3d4;
          color: #fff;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(0,163,212,0.35);
        }
        .school-point h4 { font-size: 18px; margin-bottom: 6px; color: #111; }
        .school-point p { margin: 0; font-size: 14px; }
        .school-bottom-box {
          margin-top: 30px;
          background: linear-gradient(135deg, #00a3d4, #0085ad);
          padding: 36px 36px;
          border-radius: 25px;
          color: #fff;
          box-shadow: 0 15px 35px rgba(0,163,212,0.30);
        }
        .school-bottom-box p { color: #fff; margin-bottom: 18px; font-size: 16px; line-height: 1.8; }
        .school-bottom-box h4 { font-size: 28px; line-height: 1.5; font-weight: 700; margin-top: 10px; }
        .school-collab-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
        }
        .school-card {
          background: #fff;
          padding: 24px 28px;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: 0.4s;
        }
        .school-card::before {
          content: "";
          position: absolute;
          width: 140px; height: 140px;
          background: #00a3d4;
          opacity: 0.08;
          border-radius: 50%;
          top: -50px; right: -50px;
        }
        .school-card:hover { transform: translateY(-10px); }
        .school-card h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: #00a3d4;
          position: relative;
          z-index: 2;
        }
        .school-card p {
          font-size: 14px;
          line-height: 1.7;
          color: #555;
          position: relative;
          z-index: 2;
        }
        .school-card-one { margin-top: 0; }
        .school-card-two { margin-top: 0; }
        .school-card-three { margin-top: 0; }
        .school-stat-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
        .school-stat{background:#fff;padding:20px 12px;border-radius:20px;text-align:center;box-shadow:0 6px 20px rgba(0,0,0,0.05);transition:0.4s;}
        .school-stat:hover{transform:translateY(-5px);box-shadow:0 12px 30px rgba(0,163,212,0.2);}
        .school-stat-num{font-family:'Montserrat',sans-serif;font-size:24px;font-weight:800;color:#00a3d4;margin-bottom:6px;}
        .school-stat p{font-size:12px;color:#555;margin:0;line-height:1.4;}
        @media(max-width: 991px) {
          .school-collab-container { grid-template-columns: 1fr; }
          .school-collab-left h2 { font-size: 40px; }
          .school-card-two { margin-left: 0; }
          .school-card-one { margin-top: 0; }
        }
        @media(max-width: 600px) {
          .school-collab-section { padding: 80px 5%; }
          .school-collab-left h2 { font-size: 32px; }
          .school-highlight-box, .school-card, .school-bottom-box, .school-point { padding: 25px; }
          .school-bottom-box h4 { font-size: 22px; }
        }
      `}</style>

      <section className="school-collab-section">
        <div className="school-collab-container">
          <div className="school-collab-left">
            <h2>
              School & Institute <span>Collaboration</span>
            </h2>

            <p>
              At Being Sevak Charitable Trust, we believe that children are not only the future of our nation but also powerful agents of positive change within society.
            </p>

            <p>
              Instilling compassion, empathy, and social responsibility at an early age helps shape responsible individuals and future leaders.
            </p>

            <div className="school-points">
              <div className="school-point">
                <div className="school-icon">01</div>
                <div>
                  <h4>Empathy Building</h4>
                  <p>Helping students understand social realities and humanity.</p>
                </div>
              </div>
              <div className="school-point">
                <div className="school-icon">02</div>
                <div>
                  <h4>Community Participation</h4>
                  <p>Encouraging kindness, gratitude, and the spirit of giving.</p>
                </div>
              </div>
              <div className="school-point">
                <div className="school-icon">03</div>
                <div>
                  <h4>Future Leaders</h4>
                  <p>Nurturing socially conscious and responsible citizens.</p>
                </div>
              </div>
            </div>

            <div className="school-bottom-box">
              <p>
                BSCT collaborates with schools, colleges, and educational institutes to conduct impactful sessions and activities that inspire students to embrace humanity, kindness, and social responsibility.
              </p>
              <h4>
                Together, let us inspire the next generation to become compassionate and socially aware citizens.
              </h4>
            </div>
          </div>

          <div className="school-collab-right">
            <div className="school-highlight-box">
              <h3>Joy Of Giving (JOG) Program</h3>
              <p>
                Launched in 2022, the JOG Program is a unique student engagement initiative designed to create awareness about social inequalities and encourage kindness, gratitude, and community participation among students.
              </p>
            </div>
            <p style={{fontSize:'15px',lineHeight:'1.8',color:'#555'}}>
              Through interactive sessions, awareness activities, and meaningful engagements conducted in schools and educational institutions, the JOG Program helps students understand the realities faced by underprivileged communities. The initiative encourages children to value their privileges, develop empathy for others, and contribute positively towards society.
            </p>

            <div className="school-card school-card-one">
              <h3>Awareness Sessions</h3>
              <p>
                Interactive activities that create awareness about social inequalities and community welfare.
              </p>
            </div>
            <div className="school-card school-card-two">
              <h3>Student Engagement</h3>
              <p>
                Meaningful participation programs that encourage kindness and empathy among students.
              </p>
            </div>
            <div className="school-card school-card-three">
              <h3>Social Responsibility</h3>
              <p>
                Inspiring children to become responsible citizens dedicated to building a better society.
              </p>
            </div>

            <div className="school-stat-row">
              <div className="school-stat">
                <div className="school-stat-num">100+</div>
                <p>Schools Engaged</p>
              </div>
              <div className="school-stat">
                <div className="school-stat-num">10,000+</div>
                <p>Students Reached</p>
              </div>
              <div className="school-stat">
                <div className="school-stat-num">5+</div>
                <p>States Covered</p>
              </div>
            </div>

            <div className="school-card">
              <h3>Impact Beyond the Classroom</h3>
              <p>
                Every session and activity is designed to leave a lasting impression, shaping students into compassionate, responsible, and socially aware citizens who carry the spirit of service into their everyday lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
