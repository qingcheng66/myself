import './App.css'

function App() {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <img src="/profile.jpg" alt="个人照片" className="profile-photo" />
        <div>
          <h1>张三</h1>
          <p>学历：硕士研究生</p>
        </div>
      </div>
      <section className="resume-section">
        <h2>学习经历</h2>
        <ul>
          <li>2021-2024 北京大学 计算机科学与技术 硕士</li>
          <li>2017-2021 清华大学 软件工程 本科</li>
        </ul>
      </section>
      <section className="resume-section">
        <h2>实习经历</h2>
        <ul>
          <li>2023.06-2023.09 字节跳动 前端开发实习生</li>
          <li>2022.07-2022.09 腾讯云 Web开发实习生</li>
        </ul>
      </section>
      <section className="resume-section">
        <h2>项目经历</h2>
        <ul>
          <li>个人博客系统开发（React + Node.js）</li>
          <li>智能问答小程序（微信小程序）</li>
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
