// The summary decides nothing about selection. It is given two numbers and
// says what they mean.

function ProgrammeSummary({ count, totalMinutes }) {
  const meetsTarget = totalMinutes >= 30 && totalMinutes <= 45;
  const filmLabel = count === 1 ? "film" : "films";

  return (
    <section className="programme-summary">
      <p className="eyebrow">Your programme</p>
      <h2>Selected films</h2>
      <p>
        {count} {filmLabel} selected · Combined runtime: {totalMinutes} min
      </p>
      <p className="programme-summary__target">
        {meetsTarget
          ? "The combined runtime fits the 30–45 minute target."
          : "Aim for a combined runtime of 30–45 minutes."}
      </p>
    </section>
  );
}

export default ProgrammeSummary;
