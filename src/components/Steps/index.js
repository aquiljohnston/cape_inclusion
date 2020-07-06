import React from 'react';
import PropTypes from 'prop-types';
import icon1 from '../../icons/index_icon1.png';
import icon2 from '../../icons/index_icon2.png';
import icon3 from '../../icons/index_icon3.png';
import Salary from './Salary';
import Employees from './Employees';
import Equity from './Equity';
import BoardMembers from './BoardMembers';
import Result from './Result';

export function Steps({ step=0, values }){
  return (
    <div className="table-content" id="table_content">
      {step === 0 &&
        <>
        <h6 style={{fontStyle:'italic', width:'75%', paddingTop:'1em'}}>
          To complete the index you will need the average salary/equity and the totla number of women, minorities, person with disabilities,
          individuals that identify as LGBTQ and men for your team and Board of Directors.
        </h6>
        <div className="row mx-3">
          <div className="col-md-4 p-0">
            <h1>1.</h1>
            <div className="p-3">
              <h5>Complete the eashy-to-use CAPE Equipay Index</h5> <br/>
              <img src={icon1} alt="icon1"/>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <h1>2.</h1>
            <div className="border-3 border-top-0 border-bottom-0 p-3">
              <h5>Download your CAPE Equipay results and share with key stakeholders</h5>
              <img src={icon2} alt="icon2"/>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <h1>3.</h1>
            <div className="p-3">
              <h5>Commit The CAPE Equipay Index by maintaining a gree average</h5>
              <img src={icon3} alt="icon3"/>
            </div>
          </div>
        </div>
        </>
      }
      {step === 1 &&
        <Salary/>
      }
      {step === 2 &&
        <Employees/>
      }
      {step === 3 &&
        <Equity/>
      }
      {step === 4 &&
        <BoardMembers/>
      }
      {step === 5 &&
        <Result values={values}/>
      }
    </div>
  )
}

Steps.propTypes = {
    step: PropTypes.number,
}

export default Steps;