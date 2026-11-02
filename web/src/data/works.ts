// 作品集数据（双语）。3 大核心板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.tsx 仅负责渲染。

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  en: {
    title: 'Works',
    closeLabel: 'Close',
    openLabel: 'View Project',
    hint: 'Scroll to explore',
    awardsLabel: 'Recognition',
    visitLabel: 'Visit Project',
    detailPlaceholder: 'Project Overview',
    phImageLabel: 'Visuals & Media',
    phButtonLabel: 'Launch Project',
    countLabel: (n) => `${n} Projects`,
    sections: [
      {
        id: 'books',
        no: '01',
        title: 'Books & Cultural Publishing',
        tagline: 'Three Books · One Argument · monolith.zine',
        items: [
          {
            name: 'All Books Video Showcase & Concept Wraps',
            meta: 'Featured Video & Wraps',
            tags: ['Showcase Video', 'Concept Art Wraps', 'Pothi'],
            slug: 'all-books-showcase',
            link: 'https://vishwjeetchavan.vercel.app/',
          },
          {
            name: 'A Caterpillar’s Requiem: To Pimp a Butterfly',
            meta: 'Kendrick Lamar Book',
            tags: ['Music Criticism', 'Cultural Analysis'],
            slug: 'tpab-book',
            link: 'https://store.pothi.com/book/vishwjeet-chavan-a-caterpillars-requiem-to-pimp-a-butterfly/',
          },
          {
            name: 'Inside Is Not an Exit: Reading Bo Burnham',
            meta: 'Media Studies Book',
            tags: ['Platform Capitalism', 'Digital Confinement'],
            slug: 'bo-burnham-book',
            link: 'https://store.pothi.com/book/vishwjeet-chavan-inside-is-not-exit-a-critical-cultural-reading-bo-burnhams-inside-inside-outtakes/',
          },
          {
            name: 'Can We Get Much Higher: Kanye West & MBDTF',
            meta: 'Cultural Criticism Book',
            tags: ['Artistic Ambition', 'Celebrity Studies'],
            slug: 'mbdtf-book',
            link: 'https://vishwjeetchavan.vercel.app/',
          },
          {
            name: 'Monolith Chatpati Edition — Issue 01',
            meta: 'Independent Magazine',
            tags: ['monolith.zine', 'Maximalist Print', 'Editorial'],
            slug: 'monolith-chatpati',
            link: 'https://www.instagram.com/monolith.zine',
          },
        ],
        footer: 'Published via Pothi · Editorial direction by monolith.zine',
      },
      {
        id: 'blender',
        no: '02',
        title: 'Blender & 3D Artwork',
        tagline: 'Spatial Interfaces · Tactile Objects · Nostalgia',
        items: [
          {
            name: 'Y2K Retro Flip Phone 3D Interface',
            meta: 'Spatial UI Study',
            tags: ['Blender 3D', 'Retro Hardware', 'Interaction'],
            slug: 'flip-phone-3d',
            link: 'https://github.com/vishwjeetlol/creative-technology',
          },
          {
            name: 'CD Mechanical Storage · Precision Ejection Tower',
            meta: 'Tactile 3D Machine',
            tags: ['Blender 3D', 'Three.js', 'Machined Aluminum', 'Spring Ejection'],
            slug: 'gupta-curios-cd',
            link: '/demos/gupta-curios-cd.html',
          },
          {
            name: 'Crash Test Archive · XCX Cassette & Zine',
            meta: 'Packaging & Print',
            tags: ['Charli XCX', 'Cassette J-Card', 'Visual Identity'],
            slug: 'charli-xcx-tape',
            link: 'https://github.com/vishwjeetlol/Charli-XCX-Tape',
          },
        ],
        footer: 'Tools: Blender · Cycles & EEVEE · Spatial Composition',
      },
      {
        id: 'dev',
        no: '03',
        title: 'Website Development & Creative Engineering',
        tagline: 'WebGL · Three.js · Custom Interaction Engines',
        items: [
          {
            name: 'Interactive Website Development Screen Recording',
            meta: 'Featured Walkthrough Video',
            tags: ['Interactive Walkthrough', 'Architecture', 'Screen Recording'],
            slug: 'portfolio-screen-recording',
            link: 'https://vishejeetportfolio.vercel.app/',
          },
          {
            name: 'Indian PCO Yellow Payphone · Interactive Audio Simulation',
            meta: 'Skeuomorphic Simulation',
            tags: ['Web Audio API', 'Verlet Physics', 'DTMF Dialing', 'Indian Culture'],
            slug: 'pco-payphone',
            link: '/demos/pco-payphone.html',
          },
          {
            name: 'Ajanta Photo Studio · Vintage Camera & Print Experience',
            meta: 'Vernacular Web Experience',
            tags: ['Canvas Shaders', 'Bellows Camera', 'Flashbulb', 'Retro Design'],
            slug: 'ajanta-photo-studio',
            link: '/demos/ajanta-photo-studio.html',
          },
          {
            name: 'MineGuard · Real-Time Mine Safety & Hazard Command Center',
            meta: 'Smart India Hackathon',
            tags: ['SIH Finalist', 'IoT Dashboard', 'Sensor Telemetry', 'Spatial Analytics'],
            slug: 'mineguard',
            link: 'https://github.com/vishwjeetlol',
          },
          {
            name: 'HeatAtlas · Urban Heat Island Visualizer',
            meta: 'Hackathon Project',
            tags: ['Data Visualisation', 'Climate Tech', 'Vercel'],
            slug: 'heatatlas',
            link: 'https://heatatlas.vercel.app/',
          },
          {
            name: 'Indian Bazaar Panoramic Interactive Portfolio',
            meta: 'Creative Coding',
            tags: ['HTML5 Canvas', 'Web Audio API', 'Bazaar Atmosphere'],
            slug: 'bazaar-portfolio',
            link: 'https://vishejeetportfolio.vercel.app/',
          },
        ],
        awards: ['Smart India Hackathon (SIH)', 'Urban Heat Island Hackathon'],
        footer: 'Stack: React · Three.js · HTML5 Canvas · Web Audio API · Vite',
      },
    ],
  },
  zh: {
    title: '作品',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '荣誉',
    visitLabel: '访问作品',
    detailPlaceholder: '作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'books',
        no: '01',
        title: '书籍与文化出版',
        tagline: '三部曲 · 文化批评 · monolith.zine',
        items: [
          {
            name: '全书籍视频展示与概念书衣',
            meta: '精选视频与装帧',
            tags: ['视频展示', '概念书衣', 'Pothi 出版'],
            slug: 'all-books-showcase',
            link: 'https://vishwjeetchavan.vercel.app/',
          },
          {
            name: 'A Caterpillar’s Requiem: To Pimp a Butterfly',
            meta: 'Kendrick Lamar 专著',
            tags: ['音乐批评', '文化解析'],
            slug: 'tpab-book',
            link: 'https://store.pothi.com/book/vishwjeet-chavan-a-caterpillars-requiem-to-pimp-a-butterfly/',
          },
          {
            name: 'Inside Is Not an Exit: Reading Bo Burnham',
            meta: '媒介研究专著',
            tags: ['平台资本主义', '数字囚禁'],
            slug: 'bo-burnham-book',
            link: 'https://store.pothi.com/book/vishwjeet-chavan-inside-is-not-exit-a-critical-cultural-reading-bo-burnhams-inside-inside-outtakes/',
          },
          {
            name: 'Can We Get Much Higher: Kanye West & MBDTF',
            meta: '文化批评专著',
            tags: ['艺术野心', '名人研究'],
            slug: 'mbdtf-book',
            link: 'https://vishwjeetchavan.vercel.app/',
          },
          {
            name: 'Monolith Chatpati Edition — 创刊号',
            meta: '独立杂志',
            tags: ['monolith.zine', '极繁主义', '编辑设计'],
            slug: 'monolith-chatpati',
            link: 'https://www.instagram.com/monolith.zine',
          },
        ],
      },
      {
        id: 'blender',
        no: '02',
        title: 'Blender 与 3D 创作',
        tagline: '空间界面 · 实体物件 · 千禧复古',
        items: [
          {
            name: 'Y2K 复古翻盖手机 3D 界面',
            meta: '空间 UI 研究',
            tags: ['Blender 3D', '复古硬件', '交互设计'],
            slug: 'flip-phone-3d',
            link: 'https://github.com/vishwjeetlol/creative-technology',
          },
          {
            name: 'CD 机械储存塔 · 精密弹出机构',
            meta: '拟物 3D 机械',
            tags: ['Blender 3D', 'Three.js', '机械弹射', '铝合金切削'],
            slug: 'gupta-curios-cd',
            link: '/demos/gupta-curios-cd.html',
          },
          {
            name: 'Crash Test Archive · XCX 磁带装帧',
            meta: '实体包装与视觉',
            tags: ['Charli XCX', '卡带封套', '视觉识别'],
            slug: 'charli-xcx-tape',
            link: 'https://github.com/vishwjeetlol/Charli-XCX-Tape',
          },
        ],
      },
      {
        id: 'dev',
        no: '03',
        title: '网站开发与创意技术',
        tagline: 'WebGL · Three.js · 定制交互引擎',
        items: [
          {
            name: '交互式网站开发实况录屏',
            meta: '精选架构演示',
            tags: ['实况录屏', '技术架构', '交互工程'],
            slug: 'portfolio-screen-recording',
            link: 'https://vishejeetportfolio.vercel.app/',
          },
          {
            name: '印度 PCO 黄色公用电话 · 纯代码拟物音频模拟',
            meta: '拟物交互仿真',
            tags: ['Web Audio API', '物理绳索', '双音频拨号', '印度街头文化'],
            slug: 'pco-payphone',
            link: '/demos/pco-payphone.html',
          },
          {
            name: 'Ajanta 照相馆 · 复古大画幅相机与冲印体验',
            meta: '在地文化交互',
            tags: ['Canvas 着色器', '风琴大画幅', '镁粉闪光', '复古摄影'],
            slug: 'ajanta-photo-studio',
            link: '/demos/ajanta-photo-studio.html',
          },
          {
            name: 'MineGuard · 矿井实时安全与空间灾害控制中心',
            meta: '印度国家黑客松入围',
            tags: ['SIH 决赛', 'IoT 仪表盘', '遥测告警', '空间分析'],
            slug: 'mineguard',
            link: 'https://github.com/vishwjeetlol',
          },
          {
            name: 'HeatAtlas · 城市热岛交互可视化平台',
            meta: '黑客松项目',
            tags: ['数据可视化', '气候科技', 'Vercel'],
            slug: 'heatatlas',
            link: 'https://heatatlas.vercel.app/',
          },
          {
            name: '印度巴扎全景交互作品集',
            meta: '创意编程',
            tags: ['HTML5 Canvas', 'Web Audio API', '集市氛围'],
            slug: 'bazaar-portfolio',
            link: 'https://vishejeetportfolio.vercel.app/',
          },
        ],
        awards: ['Smart India Hackathon (SIH)', 'Urban Heat Island Hackathon'],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
export const SECTION_COVERS: Record<string, string> = {
  books: `${import.meta.env.BASE_URL}works/covers/books.jpg`,
  blender: `${import.meta.env.BASE_URL}works/covers/blender.jpg`,
  dev: `${import.meta.env.BASE_URL}works/covers/dev.jpg`,
}

export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
