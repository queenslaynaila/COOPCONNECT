import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SurveyTable() {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    axios.get('/surveys')
      .then(response => {
        setSurveyData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Survey Title</th>
          <th scope="col">Total Participation</th>
          <th scope="col">Total Passed</th>
          <th scope="col">Total Failed</th>
        </tr>
      </thead>
      <tbody>
        {surveyData.map((survey, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{survey.title}</td>
            <td>{survey.total_participation}</td>
            <td>{survey.total_passed}</td>
            <td>{survey.total_failed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
