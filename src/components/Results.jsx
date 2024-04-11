import ResultRow from "./ResultRow";

const Results = () => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <ResultRow />
      </tbody>
    </table>
  );
};

export default Results;
