import { motion } from 'framer-motion'
import { ZooopLogo } from './ZooopLogo'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/vishwjeetlol',
  },
  {
    id: 'instagram',
    label: 'Designworks',
    href: 'https://www.instagram.com/monolith.designworks',
  },
  {
    id: 'zine',
    label: 'monolith.zine',
    href: 'https://www.instagram.com/monolith.zine',
  },
  {
    id: 'books',
    label: 'Author Platform',
    href: 'https://vishwjeetchavan.vercel.app/',
  },
]

// 履历数据（双语）。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Background',
    entries: [
      {
        period: '2026 – 2030',
        place: 'IIIT Dharwad',
        role: 'B.Tech. in Computer Science and Engineering',
        points: [
          'Indian Institute of Information Technology Dharwad (Class of 2030)',
          'Core technical foundation: systems, data structures, graphics pipelines, and algorithms',
          'Approaching computer science as an expressive medium for creative coding and interactive spaces',
        ],
      },
      {
        period: '2024 – Present',
        place: 'monolith.designworks',
        role: 'Founder · Independent Creative Practice',
        points: [
          'Multidisciplinary practice spanning creative development, interactive web, and visual systems',
          'Crafting bespoke browser environments, 3D interactive objects, and experimental layouts',
          'Integrating maximalist typography, bold visual identities, and unconventional digital experiences',
        ],
        groups: [
          {
            heading: 'Practice Links',
            links: [
              { id: 'designworks', label: 'Instagram @monolith.designworks', href: 'https://www.instagram.com/monolith.designworks' },
            ],
          },
        ],
      },
      {
        period: '2025 – Present',
        place: 'monolith.zine',
        role: 'Founder · Editor & Independent Publisher',
        points: [
          'Independent monthly magazine exploring culture, music, design, and cultural commentary',
          'Maximalist graphic language, eclectic visual research, and "chatpata" risograph aesthetic',
          'Examining audiovisual works as complex artistic constructions shaped by culture and technology',
        ],
        groups: [
          {
            heading: 'Publication',
            links: [
              { id: 'zine', label: 'Instagram @monolith.zine', href: 'https://www.instagram.com/monolith.zine' },
            ],
          },
        ],
      },
      {
        period: '2023 – 2026',
        place: 'Independent Authorship · Published Books',
        role: 'Author & Cultural Critic',
        points: [
          'A Caterpillar’s Requiem: To Pimp a Butterfly (Kendrick Lamar analysis, developed over 3 years)',
          'Inside Is Not an Exit: Reading Bo Burnham’s Inside (Media studies & platform capitalism)',
          'Can We Get Much Higher: Kanye West & MBDTF (Celebrity, power, and sonic maximalism)',
          'Published independently via Pothi with dedicated critical author platform',
        ],
        groups: [
          {
            heading: 'Author Platform',
            links: [
              { id: 'author', label: 'vishwjeetchavan.vercel.app', href: 'https://vishwjeetchavan.vercel.app/' },
            ],
          },
        ],
      },
      {
        period: '2025 – Present',
        place: 'Creative Development & WebGL',
        role: 'Developer & Creative Technologist',
        points: [
          'HeatAtlas: Hackathon urban heat island forecasting & climate visualizer',
          'The Indian Bazaar: Panoramic interactive portfolio with procedural Web Audio synthesis',
          'MineGuard: Smart India Hackathon (SIH) real-time safety command center',
          'Active explorer of Three.js, WebGL, HTML5 Canvas, Blender 3D, and custom interaction systems',
        ],
        groups: [
          {
            heading: 'Online Presence',
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
  zh: {
    title: '经历与实践',
    entries: [
      {
        period: '2026 – 2030',
        place: 'IIIT Dharwad 印度信息技术学院',
        role: '计算机科学与工程 · 本科',
        points: [
          '印度国立信息技术学院达尔瓦德分校（2030 届）',
          '技术基石：系统底层、图形渲染管线、数据结构与算法',
          '将计算机编程作为艺术表达与创意交互的媒介',
        ],
      },
      {
        period: '2024 – 至今',
        place: 'monolith.designworks',
        role: '创始人 · 独立设计实践',
        points: [
          '跨学科独立创意工作室：创意开发、交互网页、视觉识别与 3D 设计',
          '构建非常规浏览器交互体验、三维物件与实验性界面',
          '融合极繁主义排版、鲜明色彩与独特的 Chatpata 美学',
        ],
      },
      {
        period: '2025 – 至今',
        place: 'monolith.zine',
        role: '创始人 · 主编 & 独立出版人',
        points: [
          '独立月刊杂志：深入探索当代文化、音乐、视觉设计与媒体批评',
          '极繁主义视觉语言、折衷拼贴与 Chatpata 街头美学',
          '将视听作品作为文化、技术与社会力量交汇的艺术结构展开剖析',
        ],
      },
      {
        period: '2023 – 2026',
        place: '独立著述 · 专著出版',
        role: '独立学者 & 文化批评人',
        points: [
          '《A Caterpillar’s Requiem: To Pimp a Butterfly》（历时三年完成的 Kendrick Lamar 专著）',
          '《Inside Is Not an Exit: Reading Bo Burnham》（数字囚禁与平台资本主义批评）',
          '《Can We Get Much Higher: Kanye West & MBDTF》（名望、权力与声音极繁主义）',
          '由 Pothi 出版，建立统一批判性作者阵地',
        ],
      },
      {
        period: '2025 – 至今',
        place: '创意开发与 WebGL 实践',
        role: '创意工程师 & 开发者',
        points: [
          'HeatAtlas：黑客松城市热岛预测交互可视化平台',
          '印度巴扎交互作品集：全景视差环境与 Web Audio 过程式音频合成',
          'MineGuard：Smart India Hackathon (SIH) 矿山实时遥测安全指挥中心',
          '深度运用 Three.js、WebGL、HTML5 Canvas 与 Blender 3D',
        ],
        groups: [
          {
            heading: '社交与项目链接',
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading =
    group.logo === 'zooop' ? (
      <a
        className="zooop-logo-link"
        href={group.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZOOOP"
      >
        <ZooopLogo className="zooop-logo" animated />
      </a>
    ) : group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
