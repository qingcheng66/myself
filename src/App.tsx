import './App.css'

function App() {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <img src="/1120835055.jpg" alt="个人照片" className="profile-photo" />
        <div>
          <h1>刘仁晓君</h1>
          <p>学历：本科</p>
          <p>联系方式：18888888888 / liurx@example.com</p>
          <p>生日：1999-08-15</p>
          <p>性别：女</p>
          <p>性格：开朗、细心、responsibility</p>
        </div>
      </div>
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
  )
}

export default App
