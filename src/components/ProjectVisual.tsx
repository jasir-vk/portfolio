export type VisualKind = 'dating' | 'barber' | 'credit' | 'shop'

// Small looping scene themed to each project, shown at the top of its card.
export default function ProjectVisual({ kind }: { kind: VisualKind }) {
  if (kind === 'dating') {
    return (
      <div className="pv" aria-hidden="true">
        <span className="pv-mini pv-mini-a" />
        <span className="pv-mini pv-mini-b" />
        <span className="pv-heart">💜</span>
        <span className="pv-float" style={{ left: '44%', animationDelay: '0s' }}>💜</span>
        <span className="pv-float" style={{ left: '54%', animationDelay: '0.6s' }}>💙</span>
        <span className="pv-float" style={{ left: '38%', animationDelay: '1.1s' }}>💜</span>
      </div>
    )
  }

  if (kind === 'barber') {
    return (
      <div className="pv" aria-hidden="true">
        <span className="pv-pole" />
        <div className="pv-slots">
          {['10:00', '10:30', '11:00'].map((t, i) => (
            <span key={t} className="pv-slot" style={{ animationDelay: `${i * 1.5}s` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (kind === 'shop') {
    return (
      <div className="pv" aria-hidden="true">
        <span className="pv-drop" style={{ animationDelay: '0s' }} />
        <span className="pv-drop pv-drop-2" style={{ animationDelay: '1.2s' }} />
        <span className="pv-drop pv-drop-3" style={{ animationDelay: '2.4s' }} />
        <span className="pv-cart">🛒</span>
        <span className="pv-cart-dot" />
      </div>
    )
  }

  return (
    <div className="pv" aria-hidden="true">
      <span className="pv-cc" />
      <span className="pv-ping" />
      <span className="pv-bell">🔔</span>
    </div>
  )
}
