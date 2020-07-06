import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import { pdf_download, initValues } from './Steps/helper';
import prev_btn from '../icons/prev_btn.png';
import next_btn from '../icons/next_btn.png';
import reset_btn from '../icons/index_icon1.png';
import download_btn from '../icons/index_icon2.png';
import Steps from './Steps';

export function Contents(){
  const [step, setStep] = useState(0);  

  return (
    <div className="content-background">
      <div className="main-content">
        <div className="content-header">
          <h3>The CAPE Equipay Index</h3>
          <h6 style={{width: '70%'}}>
            The idea is simple: everyone deserves fair pay and equity for equal work. In order to help you reach this goal,
            we have created an easy-to-use index that measures show the people at your company are compensated.
          </h6>
        </div>

        <Formik
          initialValues={initValues()}          
          validate={values => {
            let errors = [];
            return errors;
          }}
          // onSubmit={(values)=>console.log(values)}
        >
          {form => (
            <Form>                   
              <Steps step={step} values={form.values} 
                onReset={()=>{form.resetForm(); setStep(0);}}
              />
              <div className="d-flex justify-content-between content-footer">
                {step>0 && step < 5 &&
                  <div type = "button" onClick={()=>setStep(step-1)} >
                    <img src={prev_btn} alt="prev" />
                  </div>
                }
                <div></div>
                {step < 5 &&
                  <div type = "button" onClick={()=>{
                    // form.submitForm();
                    // if(form.isValid)
                      setStep(step+1);
                  }} >
                    <img src={next_btn} alt="next" />
                  </div>
                }
                { step === 5 &&
                  <>
                    <div 
                      className="col-md-4 d-flex justify-content-end pointer"
                      type="button"
                      onClick={()=>{
                        form.resetForm(); setStep(0);
                      }}
                    >
                      <img src={reset_btn} alt="reset" style={{width: '25%'}}/>
                    </div>
                    <div type="button" 
                      className="col-md-4 d-flex justify-content-start"
                      onClick={pdf_download}
                    >
                      <img src={download_btn} alt="download" style={{width: '25%'}}/>
                    </div>
                    <div></div>
                  </>
                }
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Contents;