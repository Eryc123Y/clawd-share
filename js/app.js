// Clawd Share - 简单的交互功能

// 资源链接管理
const resources = {
    react: 'https://react.dev',
    nextjs: 'https://nextjs.org/docs',
    github: 'https://github.com'
};

// 添加资源
function addResource(url, title, description) {
    const list = document.getElementById('resources-list');
    
    const item = document.createElement('div');
    item.className = 'resource-item';
    item.innerHTML = `
        <a href="${url}" target="_blank">
            <h4>${title}</h4>
            <p>${description}</p>
        </a>
    `;
    
    list.appendChild(item);
}

// 过滤功能
function filterResources(category) {
    const items = document.querySelectorAll('.resource-item');
    
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 搜索功能（模拟）
function searchNews() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const newsItems = document.querySelectorAll('.news article');
    
    let results = 0;
    newsItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const content = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || content.includes(query)) {
            item.style.display = 'block';
            results++;
        } else {
            item.style.display = 'none';
        }
    });
    
    const resultCount = document.getElementById('result-count');
    resultCount.textContent = `找到 ${results} 篇相关资讯`;
}

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('Clawd Share 网站已加载');
    
    // 添加示例资源
    addResource(
        resources.react,
        'React 官方文档',
        'React 是一个用于构建用户界面的 JavaScript 库，由 Meta 维护。'
    );
    
    addResource(
        resources.github,
        'GitHub 全球最大的开源社区，提供代码托管、协作和版本控制功能。'
    );
});
