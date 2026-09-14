const STAGES = [
  {
    id: 'a1',
    code: 'A1',
    title: 'Conceptual Architecture',
  },
  {
    id: 'a2',
    code: 'A2',
    title: 'Concrete Architecture',
  },
  {
    id: 'a3',
    code: 'A3',
    title: 'Proposal for Enhancement',
  },
]

const MEMBERS = [
  {
    id: 'ethan-rose',
    name: 'Ethan Rose',
    role: 'Team Member',
    contact: '23nfd5@queensu.ca',
  },
  {
    id: 'jonah-schwartz',
    name: 'Jonah Schwartz',
    role: 'Team Member',
    contact: '',
  },
  {
    id: 'emilia-markovic',
    name: 'Emilia Markovic',
    role: 'Team Member',
    contact: '',
  },
  {
    id: 'alyssa-pascal',
    name: 'Alyssa Pascal',
    role: 'Team Member',
    contact: '',
  },
  {
    id: 'addision-lovegrove',
    name: 'Addision Lovegrove',
    role: 'Team Member',
    contact: '',
  },
  {
    id: 'emili-ribakov',
    name: 'Emili Ribakov',
    role: 'Team Member',
    contact: '',
  },
]

const NAV_LINKS = [
  { href: '#stages', label: 'stages' },
  { href: '#team', label: 'team' },
  { href: '#sources', label: 'sources' },
]

function StageSection({ stage }) {
  return (
    <section className="mt-10 scroll-mt-8 first:mt-6" id={stage.id}>
      <h3 className="mb-4 py-[3px] pt-[13px]">
        {stage.code}: {stage.title}
        <a className="anchor pt-[11px]" href={`#${stage.id}`}>
          #{stage.id}
        </a>
      </h3>

      <div className="placeholder-block mt-4 px-4 pb-3 pt-3">
        <p className="placeholder-label mb-2">Course materials</p>
        <ul className="placeholder-list ml-8 mt-3 list-none p-0">
          <li className="relative m-0">
            <span className="placeholder-slot">Documentation link — TBD</span>
          </li>
          <li className="relative mt-2">
            <span className="placeholder-slot">Reference material — TBD</span>
          </li>
        </ul>
      </div>

      <div className="placeholder-block mt-3 px-4 pb-3 pt-3">
        <p className="placeholder-label mb-2">Submissions</p>
        <ul className="placeholder-list ml-8 mt-3 list-none p-0">
          <li className="relative m-0">
            <span className="placeholder-slot">Report — TBD</span>
          </li>
          <li className="relative mt-2">
            <span className="placeholder-slot">Slides — TBD</span>
          </li>
          <li className="relative mt-2">
            <span className="placeholder-slot">Presentation — TBD</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

function MemberCard({ member }) {
  return (
    <li className="member m-0 px-3 pb-3 pt-3" id={member.id}>
      <p className="member-name mb-2">{member.name}</p>
      <p className="placeholder-slot mt-1">{member.role || 'Role — TBD'}</p>
      <p className="placeholder-slot mt-1">
        {member.contact ? (
          <a href={`mailto:${member.contact}`}>{member.contact}</a>
        ) : (
          'Email / contact — TBD'
        )}
      </p>
    </li>
  )
}

function App() {
  return (
    <main className="relative z-10 mx-auto my-0 px-8 max-md:px-4">
        <header className="relative m-0 px-2 pb-1.5 pt-[30px] max-md:-mx-4 max-md:px-4">
          <a href="/">cisc-326</a>
        </header>

        <nav className="mb-10 mt-0 flex items-center justify-between border-b border-rule py-3 font-mono text-[14px]/[16px] text-rule max-md:block max-md:h-auto">
          <span className="date text-link max-md:mb-3 max-md:block">Course project</span>
          <span className="tags max-md:block">
            {NAV_LINKS.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? ' · ' : null}
                <a className="relative z-20" href={link.href}>
                  {link.label}
                </a>
              </span>
            ))}
          </span>
        </nav>

        <article>
          <h1 className="m-0 py-3.5 pt-[18px]">Team 25</h1>

          <p className="mt-4">
            This site hosts the deliverables for CISC-326 Software Architecture 
            course project across it's three stages. Each stage will 
            include course documentation and the reports, slides, and 
            presentations submitted for that milestone.
          </p>

          <section className="mt-12 scroll-mt-8" id="stages">
            <h2 className="mb-2 py-[5px] pt-[11px]">
              Stages
              <a className="anchor pt-[21px]" href="#stages">
                #stages
              </a>
            </h2>

            <p className="mt-4">
              The project proceeds in three stages. Links and documents for each
              are added as they become available.
            </p>

            {STAGES.map((stage) => (
              <StageSection key={stage.id} stage={stage} />
            ))}
          </section>

          <hr className="mx-0 mb-px mt-12 p-0" />

          <section className="mt-12 scroll-mt-8" id="team">
            <h2 className="mb-2 py-[5px] pt-[11px]">
              Project members
              <a className="anchor pt-[21px]" href="#team">
                #team
              </a>
            </h2>

            <ul className="member-grid ml-0 mt-4 gap-3 p-0">
              {MEMBERS.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </ul>
          </section>

          <hr className="mx-0 mb-px mt-12 p-0" />

          <section className="mb-8 mt-12 scroll-mt-8" id="sources">
            <h2 className="mb-2 py-[5px] pt-[11px]">
              Sources
              <a className="anchor pt-[21px]" href="#sources">
                #sources
              </a>
            </h2>

            <p className="mt-4">
              References and citations used across the project are listed
              here.
            </p>

            <ol className="placeholder-list ml-8 mt-4 list-none p-0">
              <li className="relative m-0">
                <span className="placeholder-slot">Source 1 — TBD</span>
              </li>
              <li className="relative mt-2">
                <span className="placeholder-slot">Source 2 — TBD</span>
              </li>
              <li className="relative mt-2">
                <span className="placeholder-slot">Source 3 — TBD</span>
              </li>
            </ol>
          </section>
        </article>

        <footer className="relative mb-0 mt-8 p-4 max-md:-mx-4 max-md:p-6" id="about">
          <p className="mb-6 mt-0">
            Course project site. Materials will be published as each stage is
            completed.
          </p>
          <p className="mb-0 mt-0">
            Stages: <a href="#a1">A1</a>, <a href="#a2">A2</a>,{' '}
            <a href="#a3">A3</a>.
          </p>
        </footer>
      </main>
  )
}

export default App
