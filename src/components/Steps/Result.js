import React from 'react';
import { salary_score, team_score, equity_score, board_score } from './helper';

export function Result({values}) {
  const salaryScore = salary_score(values['Salary']);
  const teamScore = team_score(values['Employees']);
  const equityScore = equity_score(values);
  const boardScore = board_score(values['BoardMembers']);

  const allScore = [...Array(4).keys()].map(index => 
    ((salaryScore[index])+(teamScore[index])+(equityScore[index])+(boardScore[index]))/4
  );
  
  const composite = (allScore[0]+allScore[1]+allScore[2]+allScore[3])/4;

  const valueColor=(value)=>{
    if((value)>94 && (value)<=100)
      return 'great-color';
    if((value)>84 && (value)<95)
      return 'good-color';
    return 'needs-color';
  }
  
  return (<>
    <table className='w-75 mx-auto mt-5'>
      <thead>
        <tr>
          <th style={{width:'28%', backgroundColor:'#010D45', color: 'white'}}>CAPE Equipay Index</th>
          <th style={{width:'18%'}}>WOMEN</th>
          <th style={{width:'18%'}}>RACE / ETHNICITY</th>
          <th style={{width:'18%'}}>PERSONS WITH DISABILITIES</th>
          <th style={{width:'18%'}}>LGBTQ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="td-title text-center">SALARY SCORE</td>
          <td className={valueColor(salaryScore[0])}>{salaryScore[0].toFixed(2)}%</td>
          <td className={valueColor(salaryScore[1])}>{salaryScore[1].toFixed(2)}%</td>
          <td className={valueColor(salaryScore[2])}>{salaryScore[2].toFixed(2)}%</td>
          <td className={valueColor(salaryScore[3])}>{salaryScore[3].toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="td-title text-center">TEAM SCORE</td>
          <td className={valueColor(teamScore[0])}>{teamScore[0].toFixed(2)}%</td>
          <td className={valueColor(teamScore[1])}>{teamScore[1].toFixed(2)}%</td>
          <td className={valueColor(teamScore[2])}>{teamScore[2].toFixed(2)}%</td>
          <td className={valueColor(teamScore[3])}>{teamScore[3].toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="td-title text-center">EQUITY SCORE</td>
          <td className={valueColor(equityScore[0])}>{equityScore[0].toFixed(2)}%</td>
          <td className={valueColor(equityScore[1])}>{equityScore[1].toFixed(2)}%</td>
          <td className={valueColor(equityScore[2])}>{equityScore[2].toFixed(2)}%</td>
          <td className={valueColor(equityScore[3])}>{equityScore[3].toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="td-title text-center">BOARD SCORE</td>
          <td className={valueColor(boardScore[0])}>{boardScore[0].toFixed(2)}%</td>
          <td className={valueColor(boardScore[1])}>{boardScore[1].toFixed(2)}%</td>
          <td className={valueColor(boardScore[2])}>{boardScore[2].toFixed(2)}%</td>
          <td className={valueColor(boardScore[3])}>{boardScore[3].toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="td-title text-center">OVERALL SCORE</td>
          <td className={valueColor(allScore[0])} style={{fontWeight:'900'}}>{allScore[0].toFixed(2)}%</td>
          <td className={valueColor(allScore[1])} style={{fontWeight:'900'}}>{allScore[1].toFixed(2)}%</td>
          <td className={valueColor(allScore[2])} style={{fontWeight:'900'}}>{allScore[2].toFixed(2)}%</td>
          <td className={valueColor(allScore[3])} style={{fontWeight:'900'}}>{allScore[3].toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
    <table className='w-50 mx-auto mt-5'>
      <tr>
        <th className='w-75 text-center' style={{backgroundColor:'#010D45', color: 'white'}}>CAPE COMPOSITE SCORE</th>
        <th className={valueColor(composite)} style={{fontWeight:'900'}}>{composite.toFixed(2)}%</th>
      </tr>
    </table>
  </>)
}

export default Result;