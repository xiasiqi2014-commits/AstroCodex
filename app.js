// ==========================================================================
// AstroCodex - Interactive Space Engine & Blog Router
// ==========================================================================

const POSTS = [
    {
        "id": "sre-cpu-io-network-deep-dive",
        "title": "别再只会敲 kubectl 了：一次打通 CPU、磁盘 I/O 与网络底层的 SRE 进阶笔记",
        "date": "2026-05-09",
        "readingTime": "9 分钟阅读",
        "excerpt": "从 HPA 为什么救不了突发雪崩、Load 飙高但 CPU 很闲的 I/O 排队真相、到带宽空闲却疯狂丢包的 Conntrack 陷阱——三大真实场景带你打通 Linux 内核底层的性能瓶颈逻辑。",
        "tags": [
            "系统"
        ],
        "file": "posts/sre-cpu-io-network-deep-dive.md",
        "emoji": "🐧",
        "xOffset": -130,
        "yOffset": 0
    },
    {
        "id": "iptables-ipset-o1-architecture",
        "title": "别把 iptables 当万能药：从一次 NLB 域名引发的雪崩，看 SRE 的 O(1) 架构思维",
        "date": "2026-05-09",
        "readingTime": "11 分钟阅读",
        "excerpt": "一条带域名的 iptables 规则，在 NLB 被释放后引发了整个 VPN 系统的全局瘫痪。深入剖析 iptables 的三大致命缺陷（域名陷阱、全局锁、O(N) 线性查询），以及如何用 ipset 哈希表实现 O(1) 降维打击。",
        "tags": [
            "系统"
        ],
        "file": "posts/iptables-ipset-o1-architecture.md",
        "emoji": "🐧",
        "xOffset": -207,
        "yOffset": 120
    },
    {
        "id": "tcp-handshake-wave-explained",
        "title": "拒绝死记硬背！用大白话彻底搞懂 TCP 三次握手与四次挥手",
        "date": "2026-05-08",
        "readingTime": "14 分钟阅读",
        "excerpt": "不背概念，用真实业务场景和日常比喻，彻底看透 TCP 三次握手与四次挥手背后的精妙逻辑——为什么不能两次握手？为什么断开要四次？TIME-WAIT 又是什么鬼？",
        "tags": [
            "网络"
        ],
        "file": "posts/tcp-handshake-wave-explained.md",
        "emoji": "🐧",
        "xOffset": -207,
        "yOffset": -119
    },
    {
        "id": "real-ip-lost-cdn-nlb-mqtt",
        "title": "真实 IP 去哪了？一次 CDN + NLB + MQTT 架构下的排查死局",
        "date": "2026-05-08",
        "readingTime": "19 分钟阅读",
        "excerpt": "当 IoT 设备的 MQTT 流量经过 CDN 和云厂商 NLB 后，后端 EMQX 拿到的全是 CDN 的 IP。XFF 不能用、Proxy Protocol 双层冲突、TOA 也失败——一次真实的\"不可能三角\"排查复盘。",
        "tags": [
            "网络"
        ],
        "file": "posts/real-ip-lost-cdn-nlb-mqtt.md",
        "emoji": "🛠️",
        "xOffset": 105,
        "yOffset": 323
    },
    {
        "id": "tls-certificate-series-4-ct",
        "title": "TLS 证书硬核四部曲（四/大结局）：权力的牢笼 —— 详解证书透明度 (CT) 与底层机制",
        "date": "2026-04-16",
        "readingTime": "8 分钟阅读",
        "excerpt": "Symantec 违规签发 30000 张证书被全球浏览器拉黑——这起真实事件揭示了 HTTPS 体系的终极梦魇。CT 证书透明度如何用\"阳光防腐\"的哲学，把 CA 关进透明的牢笼？",
        "tags": [
            "网络"
        ],
        "file": "posts/tls-certificate-series-4-ct.md",
        "emoji": "🛠️",
        "xOffset": 340,
        "yOffset": 0
    },
    {
        "id": "tls-certificate-series-3-revocation",
        "title": "TLS 证书硬核四部曲（三）：生与死的赛跑 —— 解决\"私钥丢了怎么办\"的猫鼠游戏",
        "date": "2026-04-15",
        "readingTime": "8 分钟阅读",
        "excerpt": "私钥泄露后，黑客只需一个假 WiFi 就能完美冒充你的网站。从笨重的 CRL 黑名单，到泄露隐私的 OCSP 实时查询，再到优雅绝伦的 OCSP Stapling——一场证书吊销技术的十年进化史。",
        "tags": [
            "网络"
        ],
        "file": "posts/tls-certificate-series-3-revocation.md",
        "emoji": "🛠️",
        "xOffset": 207,
        "yOffset": 119
    },
    {
        "id": "tls-certificate-series-2-trust",
        "title": "TLS 证书硬核四部曲（二）：信任的传递 —— 解决\"凭什么信你\"的问题",
        "date": "2026-04-14",
        "readingTime": "8 分钟阅读",
        "excerpt": "从叶子证书到根证书的层层担保，从根私钥的地下金库到 Let's Encrypt 的交叉签名\"借壳上市\"——拆解 HTTPS 信任体系的底层逻辑。",
        "tags": [
            "网络"
        ],
        "file": "posts/tls-certificate-series-2-trust.md",
        "emoji": "🛠️",
        "xOffset": 0,
        "yOffset": 240
    },
    {
        "id": "tls-certificate-series-1-identity",
        "title": "TLS 证书硬核四部曲（一）：身份的锚定 —— 解决\"你是谁\"与\"连给谁\"的问题",
        "date": "2026-04-13",
        "readingTime": "8 分钟阅读",
        "excerpt": "从 CN 的没落到 SAN 的全面上位，从单 IP 单站点的尴尬到 SNI 的破局——彻底搞懂 TLS 证书是如何锚定身份的。",
        "tags": [
            "网络"
        ],
        "file": "posts/tls-certificate-series-1-identity.md",
        "emoji": "🛠️",
        "xOffset": -275,
        "yOffset": -199
    },
    {
        "id": "tcp-rst-packet-deep-dive",
        "title": "TCP RST 深度解密：谁在暗中对你的连接\"掀桌子\"？",
        "date": "2026-04-02",
        "readingTime": "6 分钟阅读",
        "excerpt": "深入解析 TCP RST 包的本质、三大常见触发场景（进程崩溃、中间件超时、全连接队列溢出），以及运维老鸟的\"破案 SOP\"排查三步法。",
        "tags": [
            "网络"
        ],
        "file": "posts/tcp-rst-packet-deep-dive.md",
        "emoji": "🐧",
        "xOffset": 0,
        "yOffset": -240
    },
    {
        "id": "tcp-time-wait-design",
        "title": "为什么非要有 TIME_WAIT？深入 TCP 四次挥手的两大设计苦衷",
        "date": "2026-04-02",
        "readingTime": "9 分钟阅读",
        "excerpt": "从 TCP 四次挥手出发，用生动的比喻拆解 TIME_WAIT 的两大存在理由——保证最后 ACK 的可靠送达与防止旧报文污染新连接，并给出高并发下 TIME_WAIT 堆积的实战调优方案。",
        "tags": [
            "网络"
        ],
        "file": "posts/tcp-time-wait-design.md",
        "emoji": "🐧",
        "xOffset": -275,
        "yOffset": 199
    },
    {
        "id": "linux-ulimit-conntrack-high-concurrency",
        "title": "明明改了 ulimit，为什么高并发还是丢包？深挖 Linux 网络底层的\"两道门\"",
        "date": "2026-04-02",
        "readingTime": "8 分钟阅读",
        "excerpt": "很多运维遇到高并发丢包，第一反应去改 ulimit，结果请求依然超时。本文深入解析 Linux 内核 conntrack 连接追踪与应用层文件句柄的\"两道门\"机制，给出完整的高并发调优方案。",
        "tags": [
            "系统"
        ],
        "file": "posts/linux-ulimit-conntrack-high-concurrency.md",
        "emoji": "🐧",
        "xOffset": 105,
        "yOffset": -323
    },
    {
        "id": "nginx-server-name-default-server",
        "title": "打破 Nginx 刻板印象：server_name 真的是严格匹配吗？",
        "date": "2026-04-01",
        "readingTime": "18 分钟阅读",
        "excerpt": "通过一个真实的 SSL 通配符证书案例，深入解析 Nginx 的 default_server 兜底机制，揭示 server_name 并非严格匹配的真相。",
        "tags": [
            "系统"
        ],
        "file": "posts/nginx-server-name-default-server.md",
        "emoji": "🛠️",
        "xOffset": 0,
        "yOffset": -130
    },
    {
        "id": "hello-world",
        "title": "你好，世界！",
        "date": "2026-03-26",
        "readingTime": "1 分钟阅读",
        "excerpt": "我的第一篇博客文章。",
        "tags": [
            "系统"
        ],
        "file": "posts/hello-world.md",
        "emoji": "✨",
        "xOffset": 207,
        "yOffset": -120
    }
];

// Global State
let activeCategory = 'all';
let searchQuery = '';
let activePostId = null;

// 3D Star Globe Rotation State
let rotateX = -0.3; // Initial rotation angles in radians
let rotateY = 0.5;
let targetRotateX = -0.3;
let targetRotateY = 0.5;
let isDragging = false;
let isMouseDown = false;
let startMouseX = 0;
let startMouseY = 0;
let baseRotateX = 0;
let baseRotateY = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let velocityX = 0;
let velocityY = 0;

// 3D Layout Transition State
let layoutCenterX = window.innerWidth / 2;
let layoutCenterY = window.innerHeight / 2;
let layoutRadiusFactor = 1.0;

// Fibonacci Sphere Distribution to place nodes in 3D
function initialize3DCoordinates() {
    const radius = 220; // sphere radius
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians
    const n = POSTS.length;
    
    // Sort POSTS chronologically (oldest first) to build a timeline starpath
    const sortedPosts = [...POSTS].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y); // radius of circle at y
        const theta = phi * i; // golden angle increment
        
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;
        
        const post = POSTS.find(p => p.id === sortedPosts[i].id);
        post.x3d = x * radius;
        post.y3d = y * radius;
        post.z3d = z * radius;
    }
}

// Call distribution immediately
initialize3DCoordinates();

// 3D Projection Math & DOM updater
function update3DPositions() {
    const svg = document.getElementById('constellation-svg');
    if (!svg) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const isReaderActive = document.body.classList.contains('reader-active');
    const isDesktop = width > 1024;
    
    let targetCenterX = width / 2;
    let targetCenterY = height / 2;
    let targetRadiusFactor = 1.0;
    
    if (isDesktop) {
        if (isReaderActive) {
            targetCenterX = width / 2;
            targetRadiusFactor = 0.6;
        } else {
            targetCenterX = (width - 380) / 2 + 380;
            targetRadiusFactor = 1.0;
        }
    } else {
        // Mobile / Tablet layout
        const isMobile = width <= 768;
        if (isMobile) {
            targetCenterX = width / 2;
            targetCenterY = height * 0.24; // Center within the top space
            targetRadiusFactor = 0.52; // Scale down to fit screen width and height
        } else {
            // Tablet
            targetCenterX = width / 2;
            targetCenterY = height * 0.32;
            targetRadiusFactor = 0.65;
        }
    }
    
    // Smoothly interpolate layout center and scale factor
    layoutCenterX += (targetCenterX - layoutCenterX) * 0.08;
    layoutCenterY += (targetCenterY - layoutCenterY) * 0.08;
    layoutRadiusFactor += (targetRadiusFactor - layoutRadiusFactor) * 0.08;
    
    // Handle auto-rotation and inertia damping
    if (isMouseDown || isDragging) {
        targetRotateX += velocityX;
        targetRotateY += velocityY;
        velocityX *= 0.95;
        velocityY *= 0.95;
    } else {
        targetRotateY += 0.0012; // Gentle auto-spin
    }
    
    // Apply interpolation
    rotateX += (targetRotateX - rotateX) * 0.1;
    rotateY += (targetRotateY - rotateY) * 0.1;
    
    const cosX = Math.cos(rotateX);
    const sinX = Math.sin(rotateX);
    const cosY = Math.cos(rotateY);
    const sinY = Math.sin(rotateY);
    
    const distance = 400; // perspective distance
    
    // 1. Calculate projected coordinates for each post
    const projectedNodes = POSTS.map(post => {
        // Rotate around Y axis
        let x1 = post.x3d * cosY - post.z3d * sinY;
        let z1 = post.z3d * cosY + post.x3d * sinY;
        
        // Rotate around X axis
        let y2 = post.y3d * cosX - z1 * sinX;
        let z2 = z1 * cosX + post.y3d * sinX;
        
        // Project to 2D screen using interpolated layout center & scale
        const scale = (distance / (distance + z2)) * layoutRadiusFactor;
        const x = layoutCenterX + x1 * scale;
        const y = layoutCenterY + y2 * scale;
        
        return {
            id: post.id,
            x: x,
            y: y,
            z: z2,
            scale: scale
        };
    });
    
    // 2. Update SVG nodes in-place
    projectedNodes.forEach(node => {
        const group = document.getElementById(`node-group-${node.id}`);
        if (!group) return;
        
        const postObj = POSTS.find(p => p.id === node.id);
        const matchesCategory = activeCategory === 'all' || postObj.tags.includes(activeCategory);
        const matchesSearch = postObj.title.toLowerCase().includes(searchQuery) || 
                              postObj.excerpt.toLowerCase().includes(searchQuery);
        
        const isVisible = matchesCategory && matchesSearch;
        
        // Calculate depth opacity (nodes in the background z > 0 are faded)
        const depthOpacity = 0.2 + 0.8 * ((220 - node.z) / 440);
        const opacity = isVisible ? depthOpacity : 0.05;
        
        group.setAttribute("style", `opacity: ${opacity}; pointer-events: ${isVisible ? 'auto' : 'none'};`);
        
        // Glow circle
        const glow = group.querySelector('.constellation-glow');
        if (glow) {
            glow.setAttribute("cx", node.x);
            glow.setAttribute("cy", node.y);
            glow.setAttribute("r", 20 * node.scale);
        }
        
        // Orbit ring
        const ring = group.querySelector('.constellation-ring');
        if (ring) {
            const isActiveNode = activePostId === node.id;
            ring.setAttribute("cx", node.x);
            ring.setAttribute("cy", node.y);
            ring.setAttribute("r", (isActiveNode ? 16 : 12) * node.scale);
            ring.setAttribute("style", `transform-origin: ${node.x}px ${node.y}px`);
        }
        
        // Core circle
        const core = group.querySelector('.constellation-node');
        if (core) {
            const isActiveNode = activePostId === node.id;
            core.setAttribute("cx", node.x);
            core.setAttribute("cy", node.y);
            core.setAttribute("r", (isActiveNode ? 8 : 6) * node.scale);
        }
        
        // Label text
        const text = group.querySelector('.constellation-label');
        if (text) {
            text.setAttribute("x", node.x);
            text.setAttribute("y", node.y + 24 * node.scale);
            // Hide labels of nodes in the deep background to avoid clutter
            if (node.z > 80 && activePostId !== node.id) {
                text.style.display = 'none';
            } else {
                text.style.display = 'block';
            }
        }
    });
    
    // 3. Update connecting lines in-place
    const filteredNodes = projectedNodes.filter(node => {
        const post = POSTS.find(p => p.id === node.id);
        const matchesCategory = activeCategory === 'all' || post.tags.includes(activeCategory);
        const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                              post.excerpt.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
    
    // Sort them chronologically to build a chronological path
    filteredNodes.sort((a, b) => {
        const postA = POSTS.find(p => p.id === a.id);
        const postB = POSTS.find(p => p.id === b.id);
        return new Date(postA.date) - new Date(postB.date);
    });
    
    const lines = svg.querySelectorAll('.constellation-line');
    lines.forEach(l => l.remove());
    
    if (filteredNodes.length > 1) {
        for (let i = 0; i < filteredNodes.length - 1; i++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", filteredNodes[i].x);
            line.setAttribute("y1", filteredNodes[i].y);
            line.setAttribute("x2", filteredNodes[i+1].x);
            line.setAttribute("y2", filteredNodes[i+1].y);
            
            const isLineActive = activePostId === filteredNodes[i].id || activePostId === filteredNodes[i+1].id;
            line.setAttribute("class", `constellation-line ${isLineActive ? 'active' : ''}`);
            
            const averageZ = (filteredNodes[i].z + filteredNodes[i+1].z) / 2;
            const lineOpacity = 0.25 * ((220 - averageZ) / 440);
            line.style.opacity = isLineActive ? 0.6 : lineOpacity;
            
            svg.appendChild(line);
        }
    }
}

// Drag & Spin Controls
function initDragControls() {
    const svg = document.getElementById('constellation-svg');
    if (!svg) return;
    
    svg.addEventListener('mousedown', (e) => {
        if (e.target.closest('.constellation-node-group')) return;
        
        isDragging = true;
        isMouseDown = true;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        baseRotateX = targetRotateX;
        baseRotateY = targetRotateY;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        velocityX = 0;
        velocityY = 0;
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        
        const deltaX = e.clientX - startMouseX;
        const deltaY = e.clientY - startMouseY;
        
        const sensitivity = 0.005;
        targetRotateY = baseRotateY + deltaX * sensitivity;
        targetRotateX = baseRotateX - deltaY * sensitivity;
        
        targetRotateX = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, targetRotateX));
        
        velocityX = (e.clientY - lastMouseY) * -sensitivity * 0.5;
        velocityY = (e.clientX - lastMouseX) * sensitivity * 0.5;
        
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    });
    
    window.addEventListener('mouseup', () => {
        isMouseDown = false;
        setTimeout(() => {
            isDragging = false;
        }, 100);
    });
    
    svg.addEventListener('touchstart', (e) => {
        if (e.target.closest('.constellation-node-group')) return;
        if (e.touches.length === 0) return;
        
        isDragging = true;
        isMouseDown = true;
        const touch = e.touches[0];
        startMouseX = touch.clientX;
        startMouseY = touch.clientY;
        baseRotateX = targetRotateX;
        baseRotateY = targetRotateY;
        lastMouseX = touch.clientX;
        lastMouseY = touch.clientY;
        velocityX = 0;
        velocityY = 0;
    });
    
    window.addEventListener('touchmove', (e) => {
        if (!isMouseDown) return;
        if (e.touches.length === 0) return;
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - startMouseX;
        const deltaY = touch.clientY - startMouseY;
        
        const sensitivity = 0.008;
        targetRotateY = baseRotateY + deltaX * sensitivity;
        targetRotateX = baseRotateX - deltaY * sensitivity;
        targetRotateX = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, targetRotateX));
        
        velocityX = (touch.clientY - lastMouseY) * -sensitivity * 0.5;
        velocityY = (touch.clientX - lastMouseX) * sensitivity * 0.5;
        
        lastMouseX = touch.clientX;
        lastMouseY = touch.clientY;
    }, { passive: true });
    
    window.addEventListener('touchend', () => {
        isMouseDown = false;
        setTimeout(() => {
            isDragging = false;
        }, 100);
    });
}

// ==========================================================================
// HTML5 Canvas Starfield Engine
// ==========================================================================
let canvas, ctx;
let stars = [];
const numStars = 60;
let animationFrameId;

function initStarfield() {
    canvas = document.getElementById('space-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    resizeCanvas();
    window.removeEventListener('resize', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    
    // Generate star coordinates with twinkling phase
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speed: 0.1 + Math.random() * 0.2,
            phase: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.01 + Math.random() * 0.02
        });
    }
    
    // Start animation loop
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animateStarfield();
}

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function animateStarfield() {
    if (!canvas || !ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const isLightTheme = document.body.classList.contains('light-theme');
    
    // Set particle color
    ctx.fillStyle = isLightTheme ? 'rgba(109, 40, 217, 0.4)' : 'rgba(255, 255, 255, 0.8)';
    
    // Render & update particles in a single path
    ctx.beginPath();
    stars.forEach(star => {
        // Twinkle by oscillating the radius
        star.phase += star.twinkleSpeed;
        const currentSize = star.size * (0.5 + 0.5 * Math.sin(star.phase));
        
        ctx.moveTo(star.x + currentSize, star.y);
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
        
        // Slowly float particles downwards
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
    ctx.fill();
    
    // Continuous 3D position calculation & render call
    update3DPositions();
    
    animationFrameId = requestAnimationFrame(animateStarfield);
}

function renderConstellations() {
    const svg = document.getElementById('constellation-svg');
    if (!svg) return;
    
    svg.innerHTML = ''; // Clear SVG contents
    
    // Build the DOM groups for all articles
    POSTS.forEach(node => {
        const isActiveNode = activePostId === node.id;
        
        // Group Container
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("id", `node-group-${node.id}`);
        group.setAttribute("class", `constellation-node-group ${isActiveNode ? 'active' : ''}`);
        
        // Glow circle (underlay)
        const glow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        glow.setAttribute("class", "constellation-glow");
        group.appendChild(glow);
        
        // Outer tech ring
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("class", "constellation-ring");
        group.appendChild(ring);
        
        // Outer core node
        const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        core.setAttribute("class", "constellation-node");
        group.appendChild(core);
        
        // Star symbol emoji or label
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("class", "constellation-label");
        text.textContent = `${node.emoji} ${node.title}`;
        group.appendChild(text);
        
        // Node hover / click event hooks
        group.addEventListener('mouseenter', (e) => {
            const bbox = group.getBoundingClientRect();
            showTooltipAtCoords(bbox.left + bbox.width / 2, bbox.top, node);
            const sidebarItem = document.getElementById(`sidebar-item-${node.id}`);
            if (sidebarItem) {
                sidebarItem.classList.add('hover-active');
                sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        group.addEventListener('mouseleave', () => {
            hideTooltip();
            const sidebarItem = document.getElementById(`sidebar-item-${node.id}`);
            if (sidebarItem) {
                sidebarItem.classList.remove('hover-active');
            }
        });
        group.addEventListener('click', () => {
            window.location.hash = `#/post/${node.id}`;
        });
        
        svg.appendChild(group);
    });
    
    // Position immediately based on 3D projections
    update3DPositions();

    // Sync left sidebar rendering
    renderSidebarList();
}

// Left directory list renderer
function renderSidebarList() {
    const listSlot = document.getElementById('sidebar-list-slot');
    const counter = document.getElementById('sidebar-counter');
    if (!listSlot) return;
    
    const filtered = POSTS.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.tags.includes(activeCategory);
        const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                              post.excerpt.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
    
    if (counter) {
        counter.textContent = `TOTAL: ${filtered.length} NODES`;
    }
    
    if (filtered.length === 0) {
        listSlot.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); font-size: 12px; font-family: var(--font-hud)">
                NO RECORD FOUND
            </div>
        `;
        return;
    }
    
    listSlot.innerHTML = filtered.map(post => {
        const isActive = activePostId === post.id;
        return `
            <div class="sidebar-item ${isActive ? 'active' : ''}" id="sidebar-item-${post.id}">
                <div class="sidebar-item-title">${post.emoji} ${post.title}</div>
                <div class="sidebar-item-meta">
                    <span>${post.date}</span>
                    <span class="sidebar-tag">${post.tags[0].toUpperCase()}</span>
                </div>
            </div>
        `;
    }).join('');
    
    // Bind hover triggers to sidebar items
    filtered.forEach(post => {
        const item = document.getElementById(`sidebar-item-${post.id}`);
        if (!item) return;
        
        item.addEventListener('click', () => {
            window.location.hash = `#/post/${post.id}`;
        });
        
        item.addEventListener('mouseenter', () => {
            const nodeGroup = document.getElementById(`node-group-${post.id}`);
            if (nodeGroup) {
                nodeGroup.classList.add('hover-active');
                // Calculate position of the star to anchor tooltip
                const bbox = nodeGroup.getBoundingClientRect();
                showTooltipAtCoords(bbox.left + bbox.width / 2, bbox.top, post);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const nodeGroup = document.getElementById(`node-group-${post.id}`);
            if (nodeGroup) {
                nodeGroup.classList.remove('hover-active');
            }
            hideTooltip();
        });
    });
}

// Coordinates display helper for list hover triggers
function showTooltipAtCoords(x, y, node) {
    if (!tooltip) return;
    
    tooltip.innerHTML = `
        <div class="tooltip-meta">${node.date} • ${node.readingTime}</div>
        <h4 class="tooltip-title">${node.emoji} ${node.title}</h4>
        <p class="tooltip-excerpt">${node.excerpt}</p>
    `;
    
    tooltip.classList.remove('tooltip-hidden');
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

// Coordinate tracking listener
function initCoordinateTracking() {
    const coordsSlot = document.getElementById('hud-coordinates');
    if (!coordsSlot) return;
    
    window.addEventListener('mousemove', (e) => {
        const x = String(e.clientX).padStart(3, '0');
        const y = String(e.clientY).padStart(3, '0');
        coordsSlot.textContent = `X: ${x} | Y: ${y}`;
    });
}

// ==========================================================================
// Tooltip Preview Handling
// ==========================================================================
const tooltip = document.getElementById('hud-tooltip');

function showTooltip(e, node) {
    if (!tooltip) return;
    
    tooltip.innerHTML = `
        <div class="tooltip-meta">${node.date} • ${node.readingTime}</div>
        <h4 class="tooltip-title">${node.emoji} ${node.title}</h4>
        <p class="tooltip-excerpt">${node.excerpt}</p>
    `;
    
    tooltip.classList.remove('tooltip-hidden');
    updateTooltipPos(e);
}

function updateTooltipPos(e) {
    if (!tooltip) return;
    tooltip.style.left = `${e.clientX}px`;
    tooltip.style.top = `${e.clientY}px`;
}

function hideTooltip() {
    if (!tooltip) return;
    tooltip.classList.add('tooltip-hidden');
}

// ==========================================================================
// Router Engine
// ==========================================================================
async function router() {
    const hash = window.location.hash || '#/';
    const readerSheet = document.getElementById('reader-sheet');
    if (!readerSheet) return;
    
    // Reset active states
    activePostId = null;
    
    if (hash === '#/' || hash === '') {
        // Close reader sheet
        readerSheet.classList.add('reader-hidden');
        document.body.classList.remove('reader-active');
        renderConstellations(); // Update constellation highlight styles
    } else if (hash.startsWith('#/post/')) {
        const postId = hash.replace('#/post/', '');
        const post = POSTS.find(p => p.id === postId);
        if (post) {
            activePostId = post.id;
            renderConstellations(); // Highlight the clicked star node
            
            // Slide in reading sheet and load content
            readerSheet.classList.remove('reader-hidden');
            document.body.classList.add('reader-active');
            await loadPostInSheet(post);
        } else {
            // Re-route to home if invalid post ID
            window.location.hash = '#/';
        }
    } else {
        window.location.hash = '#/';
    }
}

// ==========================================================================
// Markdown Loader & Render Engine
// ==========================================================================
async function loadPostInSheet(post) {
    const titleSlot = document.getElementById('reader-title-slot');
    const metaSlot = document.getElementById('reader-meta-slot');
    const mdSlot = document.getElementById('reader-markdown-slot');
    const tocSlot = document.getElementById('reader-toc-slot');
    
    // Set loading state
    titleSlot.textContent = "星云折叠中...";
    metaSlot.textContent = "坐标同步中 --";
    mdSlot.innerHTML = `<p style='color: var(--text-muted)'>正在从太空服务器拉取 Markdown 文件...</p>`;
    tocSlot.innerHTML = '';
    
    try {
        const response = await fetch(post.file);
        if (!response.ok) throw new Error("太空网络异常，数据请求失败");
        const rawMarkdown = await response.text();
        
        // Strip Frontmatter (YAML blocks)
        let mdBody = rawMarkdown;
        if (rawMarkdown.startsWith('---')) {
            const endIdx = rawMarkdown.indexOf('---', 3);
            if (endIdx !== -1) {
                mdBody = rawMarkdown.substring(endIdx + 3).trim();
            }
        }
        
        // Populate Title and Meta info
        titleSlot.textContent = `${post.emoji} ${post.title}`;
        metaSlot.textContent = `星体发布: ${post.date} | 阅读开销: ${post.readingTime}`;
        
        // Render Markdown content
        mdSlot.innerHTML = marked.parse(mdBody);
        
        // Code blocks preprocessing (Headers & Copy buttons)
        processCodeBlocks(mdSlot);
        
        // Highlight code
        Prism.highlightAll();
        
        // Build table of contents
        buildTOC(mdSlot, tocSlot);
        
        // Reset scroll position of article viewport
        const readerBody = document.querySelector('.reader-body-container');
        if (readerBody) {
            readerBody.scrollTop = 0;
            // Sync reader sheet scroll behaviors
            readerBody.addEventListener('scroll', handleSheetScroll);
            handleSheetScroll(); // Run initially
        }
        
    } catch (e) {
        titleSlot.textContent = "星空坐标失联";
        mdSlot.innerHTML = `<p style="color: var(--primary)">错误详情: ${e.message}</p>`;
    }
}

// Post-process code blocks for full-custom headers
function processCodeBlocks(container) {
    const preBlocks = container.querySelectorAll('pre');
    preBlocks.forEach(pre => {
        const code = pre.querySelector('code');
        if (!code) return;
        
        // Extract programming language
        const classes = Array.from(code.classList);
        const langClass = classes.find(c => c.startsWith('language-'));
        const lang = langClass ? langClass.replace('language-', '') : 'text';
        
        // Create Header
        const header = document.createElement('div');
        header.className = 'code-block-header';
        header.innerHTML = `
            <div class="code-window-controls">
                <span class="dot close"></span>
                <span class="dot minimize"></span>
                <span class="dot expand"></span>
                <span class="code-lang-label">${lang.toUpperCase()}</span>
            </div>
            <button class="copy-btn">COPY</button>
        `;
        pre.parentNode.insertBefore(header, pre);
        
        // Hook copy listener
        const copyBtn = header.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(code.textContent);
            copyBtn.textContent = 'DONE!';
            copyBtn.style.color = 'var(--secondary)';
            setTimeout(() => {
                copyBtn.textContent = 'COPY';
                copyBtn.style.color = 'var(--text-secondary)';
            }, 1500);
        });
    });
}

// Generate table of contents inside the sheet
let sheetHeadings = [];

function buildTOC(mdContainer, tocContainer) {
    const headings = mdContainer.querySelectorAll('h2, h3');
    tocContainer.innerHTML = '';
    sheetHeadings = [];
    
    const sidebar = document.querySelector('.reader-toc-sidebar');
    if (headings.length === 0) {
        if (sidebar) sidebar.style.display = 'none';
        return;
    }
    if (sidebar) sidebar.style.display = 'block';
    
    headings.forEach((heading, idx) => {
        const id = heading.id || `heading-${idx}`;
        heading.id = id;
        
        const tagName = heading.tagName.toLowerCase();
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.className = `toc-link ${tagName}`;
        a.textContent = heading.textContent;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth' });
        });
        
        li.appendChild(a);
        tocContainer.appendChild(li);
        
        sheetHeadings.push({
            element: heading,
            link: a
        });
    });
}

// Sync progress bar & highlight active TOC links depending on sheet scroll position
function handleSheetScroll() {
    const readerBody = document.querySelector('.reader-body-container');
    const progressBar = document.getElementById('reader-progress-bar');
    if (!readerBody || !progressBar) return;
    
    // Progress
    const winScroll = readerBody.scrollTop;
    const height = readerBody.scrollHeight - readerBody.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = `${scrolled}%`;
    
    // Active TOC link highlight
    let activeIdx = -1;
    const triggerOffset = 80;
    
    for (let i = 0; i < sheetHeadings.length; i++) {
        const top = sheetHeadings[i].element.getBoundingClientRect().top;
        if (top <= triggerOffset + 60) {
            activeIdx = i;
        } else {
            break;
        }
    }
    
    sheetHeadings.forEach((h, idx) => {
        if (idx === activeIdx) {
            h.link.classList.add('active');
        } else {
            h.link.classList.remove('active');
        }
    });
}

// ==========================================================================
// Initialization & Listeners Setup
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Particle Simulation
    initStarfield();
    
    // Drag and spin controls
    initDragControls();
    
    // 2. HUD Search & Filters
    const searchBar = document.getElementById('hud-search');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderConstellations();
        });
    }
    
    const tagBtns = document.querySelectorAll('.hud-tag-btn');
    tagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tagBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            renderConstellations();
        });
    });
    
    // 3. Close reading sheet listener
    const closeBtn = document.getElementById('reader-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.location.hash = '#/';
        });
    }
    
    // 4. Coordinates tracker
    initCoordinateTracking();
    
    // 5. Initial Render
    renderConstellations();
    window.addEventListener('resize', renderConstellations);
    
    // 6. Image Lightbox
    initLightbox();
});

// Initialize Theme Toggler
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (btn && !btn.dataset.bound) {
        btn.dataset.bound = "true";
        btn.addEventListener('click', () => {
            const body = document.body;
            if (body.classList.contains('light-theme')) {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            }
            // Trigger starfield repaint to apply light/dark gradient
            initStarfield();
            renderConstellations();
        });
    }
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
window.addEventListener('load', initThemeToggle);

// Initialize Router paths
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
    router();
    // Fallback click binder
    initThemeToggle();
});
window.addEventListener('hashchange', () => {
    const readerBody = document.querySelector('.reader-body-container');
    if (readerBody) {
        readerBody.removeEventListener('scroll', handleSheetScroll);
    }
});

// Initialize Image Lightbox zoom behavior
function initLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!overlay || !lightboxImg) return;
    
    const readerSlot = document.getElementById('reader-markdown-slot');
    if (readerSlot) {
        readerSlot.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'img') {
                lightboxImg.src = e.target.src;
                lightboxImg.alt = e.target.alt || "Zoomed Image";
                overlay.classList.add('active');
            }
        });
    }
    
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
}
