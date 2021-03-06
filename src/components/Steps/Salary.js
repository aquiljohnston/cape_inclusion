import React from 'react';
import { MODEL } from './helper';
import { Field } from 'formik';

export function Salary() {
  return (<>
    <div className="step-header">
      <h3>3 Easy Steps</h3>
      <h5>1. Categorize all your employees into the following categories</h5>
      <h5>2. Enter the average salary for each category</h5>
      <h5>3. Click on the next arrow when done.</h5>
    </div>
    <table>
      <thead>
        <tr>
          <th rowSpan={2} style={{width: '25%'}}>TITLE</th>
          <th colSpan={5}>AVERAGE SALARY</th>
        </tr>
        <tr>
          <th style={{width:'15%'}}>WHITE MEN</th>
          <th style={{width:'15%'}}>WOMEN</th>
          <th style={{width:'15%'}}>RACE / ETHNICITY</th>
          <th style={{width:'15%'}}>PERSONS WITH DISABILITIES</th>
          <th style={{width:'15%'}}>LGBTQ</th>
        </tr>
      </thead>
      <tbody>
        {MODEL.map((item, index) => (
          <tr key = {`Salary${index}`} style={{backgroundColor: index%2 ? 'white': 'whitesmoke'}}>
            <td className="td-title">{item.title}</td>
            {[...Array(5).keys()].map(item_index => (
              <td key={`Salary.${item.name}_${item_index}`}>
                <Field                
                  name={`Salary.${item.name}.${item_index}`}
                >{({ field, form: { errors, values } }) => (
                  <div>
                    <input {...field} type="number" placeholder="$" className="input-field"/>
                    {errors[field.name] && 
                      <div className="error">{errors[field.name]}</div>
                    }
                  </div>
                )}
                </Field>
              </td>
            ))}
          </tr>
        ))}          
      </tbody>
    </table>
  </>)
}

export default Salary;