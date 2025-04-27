import './App.css'

function App() {
  return (
    <div className="resume-container">
      <div className="left-sidebar">
        <img src="/1120835055.jpg" alt="个人照片" className="profile-photo" />
        <div className="contact-info">
          <h2>联系方式</h2>
          <div className="info-item">
            <span className="info-label">电话</span>
            <span className="info-content">19330633407</span>
          </div>
          <div className="info-item">
            <span className="info-label">邮箱</span>
            <span className="info-content">1120835055xj@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="info-label">生日</span>
            <span className="info-content">03-05</span>
          </div>
          <div className="info-item">
            <span className="info-label">性别</span>
            <span className="info-content">男</span>
          </div>
        </div>
        <div className="skills-section">
          <h2>技能特长</h2>
          <div className="info-item">
            <span className="info-label">前端开发</span>
            <span className="info-content">React、TypeScript、HTML、CSS、JavaScript</span>
          </div>
          <div className="info-item">
            <span className="info-label">后端开发</span>
            <span className="info-content">Node.js、Express</span>
          </div>
          <div className="info-item">
            <span className="info-label">数据库</span>
            <span className="info-content">MySQL、MongoDB</span>
          </div>
          <div className="info-item">
            <span className="info-label">开发工具</span>
            <span className="info-content">Git、Webpack、Vite</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <h1>刘仁晓君</h1>
        <section className="resume-section">
          <h2>学习经历</h2>
          <ul>
            <li>2017-2021 南京中医药大学 软件工程 本科</li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>实习经历</h2>
          <ul>
            <li>期待贵公司成为我的第一家实习公司</li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>项目经历</h2>
          <ul>
            <li>个人博客系统开发（React + Node.js）</li>
            <li>网页贪吃蛇小游戏</li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>掌握技能</h2>
          <ul>
            <li>前端：React、TypeScript、HTML、CSS、JavaScript</li>
            <li>后端：Node.js、Express</li>
            <li>数据库：MySQL、MongoDB</li>
            <li>工具：Git、Webpack、Vite</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
