import Badge from './Badge';

function SectionTitle({ eyebrow, title, description, trailing }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <Badge tone="soft">{eyebrow}</Badge> : null}
        <h2>{title}</h2>
      </div>
      <div className="section-title-copy">
        <p>{description}</p>
        {trailing ? <div>{trailing}</div> : null}
      </div>
    </div>
  );
}

export default SectionTitle;