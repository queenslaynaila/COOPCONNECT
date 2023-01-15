import React, { useState, useEffect } from 'react'

function Table() {
    const [applicantData, setApplicantData] = useState([]);

    useEffect(() => {
        fetch("/applicants")
            .then(response => response.json())
            .then(data => {
                setApplicantData(data);
            });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Applied For</th>
                    <th scope="col">Application Status</th>
                    <th scope="col">Date Applied</th>
                    <th scope="col">Job Category</th>
                </tr>
            </thead>
            <tbody>
                {applicantData.map((applicant, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{applicant.name}</td>
                        <td>{applicant.appliedFor}</td>
                        <td>{applicant.status}</td>
                        <td>{applicant.dateApplied}</td>
                        <td>{applicant.jobCategory}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
