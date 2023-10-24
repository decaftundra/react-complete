function InvestmentForm(props) {
  return (
    <div>
      <form className="form" onSubmit={props.handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input

              id="current-savings"
              value={props.currentSavings}
              onChange={props.handleChange}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={props.yearlyContributions}
              onChange={props.handleChange}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={props.expectedReturn}
              onChange={props.handleChange}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={props.investmentPeriod}
              onChange={props.handleChange}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={props.resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default InvestmentForm;
