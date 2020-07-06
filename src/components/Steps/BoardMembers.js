import React from 'react';
import { Field } from 'formik';

export function BoardMembers() {
  return (<>
    <div className="step-header">
      <h3>3 Easy Steps</h3>
      <h5>1. Categorize all your BoardMembers into the following categories</h5>
      <h5>2. Enter the number of board members for each category</h5>
      <h5>3. Click submit when done.</h5>
    </div>
    <table>
      <thead>
        <tr>
          <th rowSpan={3} style={{width: '25%'}}>BOARD MEMBERS</th>
          <th colSpan={5}>NUMBER OF BOARDMEMBERS</th>
        </tr>
        <tr>
          <th style={{width:'15%'}}>WHITE MEN</th>
          <th style={{width:'15%'}}>WOMEN</th>
          <th style={{width:'15%'}}>RACE / ETHNICITY</th>
          <th style={{width:'15%'}}>PERSONS WITH DISABILITIES</th>
          <th style={{width:'15%'}}>LGBTQ</th>
        </tr>

          <tr>
            {[...Array(5).keys()].map(item_index => (
              <td key={`BoardMembers_${item_index}`}>
                <Field                
                  name={`BoardMembers.${item_index}`}
                >{({ field, form: { errors, values } }) => (
                  <div>
                    <input {...field} type="number" className="input-field"/>
                    {errors[field.name] && 
                      <div className="error">{errors[field.name]}</div>
                    }
                  </div>
                )}
                </Field>
              </td>
            ))}
          </tr>
      </thead>
    </table>
    <div className="step-header m-5">      
      <h6 className="p-4">As part of The CAPE Equipay Index, 
          we aks that you consider anonymously donating your data to help ensure everyone is paid fairly for equal work.
      </h6>
      <div className="col-md-7">
          <div className="d-flex align-items-center justify-content-end">
              <span className="pr-3">Donate Data</span>
              <input type="checkbox" name="DonateData" />
          </div>
          <div className="d-flex align-items-center justify-content-end  pt-3">
              <span className="pr-3">No Thank you</span>
              <input type="checkbox" name="NoThanks" />
          </div>
          <div className="d-flex align-items-center justify-content-end pt-3">
              <span className="pr-3">Subscribe To CAPE Inclusion</span>
              <input type="checkbox" name="Subscribe" />
          </div>
      </div>
    </div>
  </>)
}

export default BoardMembers;