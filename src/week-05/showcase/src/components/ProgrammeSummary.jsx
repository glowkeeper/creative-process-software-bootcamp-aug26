// The summary decides nothing about selection. It is given two numbers and
// says what they mean.

function ProgrammeSummary({ count, totalMinutes }) {
  const meetsTarget = totalMinutes >= 30 && totalMinutes <= 45;

  return (
    <section className="programme-summary">
      <p className="eyebrow">Your programme</p>
      <h2>Selected films</h2>
      <p>
        {count} films selected · {totalMinutes} min
      </p>
      <p className="programme-summary__target">
        {meetsTarget
          ? "This programme fits the target."
          : "Not yet within the 30-45 minute target."}
      </p>
    </section>
  );
}

export default ProgrammeSummary;
