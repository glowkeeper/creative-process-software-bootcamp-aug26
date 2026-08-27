// This component receives its numbers as props, which means something outside
// it has to decide what those numbers are.
//
// Nothing on the page can work them out yet, so App always passes 0. Each film
// card knows whether it is selected, but it keeps that to itself.

function ProgrammeSummary({ count }) {
  return (
    <section className="programme-summary">
      <p className="eyebrow">Your programme</p>
      <h2>Selected films</h2>
      <p>{count} films selected · 0 min</p>
      <p className="programme-summary__target">
        Not yet within the 30-45 minute target.
      </p>
    </section>
  );
}

export default ProgrammeSummary;
