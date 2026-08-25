// This component receives its number as a prop, which means something outside
// it has to decide what that number is.
//
// Nothing on the page can work the number out yet, so App always passes 0.
// Each film card knows whether it is selected, but it keeps that to itself.
// Week 5 solves this.

function ProgrammeSummary(props) {
  return (
    <section className="programme-summary">
      <p className="eyebrow">Your programme</p>
      <h2>Selected films</h2>
      <p>{props.count} films selected</p>
    </section>
  );
}

export default ProgrammeSummary;
