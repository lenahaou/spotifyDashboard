function StatCard({ title, value, sub, big }) {
  return (
    <div className="card stat-card">
      <p className="stat-title">{title}</p>
      <p className={big ? 'stat-value big' : 'stat-value'}>{value}</p>
      {sub && <p className="stat-sub">{sub}</p>}
    </div>
  )
}

export default StatCard
